import { defineStore } from "pinia";
import { ref, computed } from "vue";

export interface Amortization {
  everyMonths: number;
  amount: number;
}

export interface MortgageRow {
  month: number;
  pendingBefore: number;
  monthlyPayment: number;
  interestPortion: number;
  principalPortion: number;
  extraAmortization: number;
  extraPayment: number;
  pendingAfter: number;
}

export const useMortgageStore = defineStore("mortgage", () => {
  const loanAmount = ref(9999);
  const months = ref(240);
  const annualInterest = ref(2.0);
  const bankName = ref("");
  const amortizationInput = ref("");
  const extraPaymentsInput = ref("");

  // Multi-line input, each line is "*everyMonths,amount" (comments after # are ignored)
  const amortizations = computed<Amortization[]>(() => {
    if (!amortizationInput.value.trim()) return [];
    const lines = amortizationInput.value.split("\n");
    const result: Amortization[] = [];
    for (const line of lines) {
      // Ignore comments after #
      const splitArr = line.split("#");
      const firstPart = splitArr[0];
      if (firstPart === undefined) continue;
      const cleanLine = firstPart.trim();
      if (!cleanLine) continue;

      // Expected format: *12,500 meaning every 12 months reduce 500€
      const match = cleanLine.match(/^\*(\d+)\s*,\s*(\d+(?:\.\d+)?)$/);
      if (match) {
        const monthsStr = match[1];
        const amountStr = match[2];
        if (monthsStr !== undefined && amountStr !== undefined) {
          result.push({
            everyMonths: parseInt(monthsStr, 10),
            amount: parseFloat(amountStr),
          });
        }
      }
    }
    return result;
  });

  const extraPayments = computed<Amortization[]>(() => {
    if (!extraPaymentsInput.value.trim()) return [];
    const lines = extraPaymentsInput.value.split("\n");
    const result: Amortization[] = [];
    for (const line of lines) {
      // Ignore comments after #
      const cleanLine = line.split("#")[0] || ""; // Inline fallback for simplicity
      const trimmed = cleanLine.trim();
      if (!trimmed) continue;

      // Expected format: *12,500 meaning every 12 months reduce 500€
      const match = trimmed.match(/^\*(\d+)\s*,\s*(\d+(?:\.\d+)?)$/);
      if (match) {
        const monthsStr = match[1];
        const amountStr = match[2];
        if (monthsStr !== undefined && amountStr !== undefined) {
          result.push({
            everyMonths: parseInt(monthsStr, 10),
            amount: parseFloat(amountStr),
          });
        }
      }
    }
    return result;
  });

  function calculateFrenchMortgage(): MortgageRow[] {
    const P = loanAmount.value;
    const n = months.value;
    const yearlyRate = annualInterest.value / 100;
    const monthlyRate = yearlyRate / 12;

    if (P <= 0 || n <= 0 || monthlyRate <= 0) return [];

    // French mortgage: fixed monthly payment
    const fixedPayment =
      (P * (monthlyRate * Math.pow(1 + monthlyRate, n))) / (Math.pow(1 + monthlyRate, n) - 1);

    const rows: MortgageRow[] = [];
    let pending = P;

    for (let m = 1; m <= n && pending > 0.01; m++) {
      let interestPortion = pending * monthlyRate;
      let principalPortion = fixedPayment - interestPortion;
      let payment = fixedPayment;

      // If remaining is less than the fixed payment
      if (pending < payment) {
        payment = pending + interestPortion;
        principalPortion = pending;
      }

      const pendingBefore = pending;
      pending -= principalPortion;

      // Apply extra amortizations
      let extraAmort = 0;
      for (const amort of amortizations.value) {
        if (m % amort.everyMonths === 0 && pending > 0) {
          const reduction = Math.min(amort.amount, pending);
          extraAmort += reduction;
          pending -= reduction;
        }
      }

      // Apply extra payments
      let extraPayment = 0;
      for (const payment of extraPayments.value) {
        if (m % payment.everyMonths === 0 && pending > 0) {
          extraPayment += payment.amount;
        }
      }

      if (pending < 0) pending = 0;

      rows.push({
        month: m,
        pendingBefore: round2(pendingBefore),
        monthlyPayment: round2(payment) + extraPayment,
        interestPortion: round2(interestPortion),
        principalPortion: round2(principalPortion),
        extraAmortization: round2(extraAmort),
        extraPayment: round2(extraPayment),
        pendingAfter: round2(pending),
      });

      if (pending <= 0) break;
    }

    return rows;
  }

  const schedule = computed(() => calculateFrenchMortgage());

  const totalInterest = computed(() =>
    schedule.value.reduce((sum, row) => sum + row.interestPortion, 0),
  );

  const totalPaid = computed(() =>
    schedule.value.reduce(
      (sum, row) => sum + row.monthlyPayment + row.extraAmortization + row.extraPayment,
      0,
    ),
  );

  const actualMonths = computed(() => schedule.value.length);

  function loadConfig(config: any) {
    if (config.loanAmount !== undefined) loanAmount.value = config.loanAmount;
    if (config.months !== undefined) months.value = config.months;
    if (config.annualInterest !== undefined) annualInterest.value = config.annualInterest;
    if (config.amortizationInput !== undefined) amortizationInput.value = config.amortizationInput;
    if (config.extraPaymentsInput !== undefined) extraPaymentsInput.value = config.extraPaymentsInput;
    if (config.bankName !== undefined) bankName.value = config.bankName;
  }

  return {
    loanAmount,
    months,
    annualInterest,
    bankName,
    amortizationInput,
    amortizations,
    extraPaymentsInput,
    extraPayments,
    schedule,
    totalInterest,
    totalPaid,
    actualMonths,
    loadConfig,
  };
});

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}
