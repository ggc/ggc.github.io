<script setup lang="ts">
import { computed, ref } from 'vue'
import { useMortgageStore } from '@/stores/mortgage'

const store = useMortgageStore()

const pageSize = 24
const currentPage = ref(0)

const totalPages = computed(() => Math.ceil(store.schedule.length / pageSize))

const paginatedRows = computed(() => {
  const start = currentPage.value * pageSize
  return store.schedule.slice(start, start + pageSize)
})

function goToPage(page: number) {
  if (page >= 0 && page < totalPages.value) {
    currentPage.value = page
  }
}

function formatCurrency(value: number): string {
  return value.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

const visiblePages = computed(() => {
  const pages: number[] = []
  const total = totalPages.value
  const current = currentPage.value
  const start = Math.max(0, current - 2)
  const end = Math.min(total - 1, current + 2)
  for (let i = start; i <= end; i++) {
    pages.push(i)
  }
  return pages
})
</script>

<template>
  <div class="table-container" v-if="store.schedule.length > 0">
    <div class="table-header">
      <h2 class="tui-label">
        <span class="icon">📋</span>
        AMORTIZATION_SCHEDULE.LOG
      </h2>
      <span class="row-count">[{{ store.schedule.length }} MONTHS_DATA]</span>
    </div>

    <div class="table-scroll">
      <table class="tui-table">
        <thead>
          <tr>
            <th>MONTH</th>
            <th>PENDING (PRE)</th>
            <th>PAYMENT</th>
            <th>INTEREST</th>
            <th>AMORT</th>
            <th>EXTRA AMORT</th>
            <th>EXTRA PAY</th>
            <th>PENDING (POST)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in paginatedRows" :key="row.month" :class="{ 'amort-row': row.extraAmortization > 0 }">
            <td class="month-cell">{{ row.month }}</td>
            <td>€{{ formatCurrency(row.pendingBefore) }}</td>
            <td class="payment-cell">€{{ formatCurrency(row.monthlyPayment) }}</td>
            <td class="interest-cell">€{{ formatCurrency(row.interestPortion) }}</td>
            <td>€{{ formatCurrency(row.principalPortion) }}</td>
            <td :class="{ 'extra-highlight': row.extraAmortization > 0 }">
              {{ row.extraAmortization > 0 ? `€${formatCurrency(row.extraAmortization)}` : '—' }}
            </td>
            <td :class="{ 'extra-highlight': row.extraPayment > 0 }">
              {{ row.extraPayment > 0 ? `€${formatCurrency(row.extraPayment)}` : '—' }}
            </td>
            <td class="pending-cell">€{{ formatCurrency(row.pendingAfter) }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="pagination tui-btns" v-if="totalPages > 1">
      <button class="tui-btn small" :disabled="currentPage === 0" @click="goToPage(0)">«</button>
      <button class="tui-btn small" :disabled="currentPage === 0" @click="goToPage(currentPage - 1)">‹</button>
      <button v-for="p in visiblePages" :key="p" :class="['tui-btn', 'small', { active: p === currentPage }]"
        @click="goToPage(p)">
        {{ p + 1 }}
      </button>
      <button class="tui-btn small" :disabled="currentPage === totalPages - 1" @click="goToPage(currentPage + 1)">›</button>
      <button class="tui-btn small" :disabled="currentPage === totalPages - 1" @click="goToPage(totalPages - 1)">»</button>
    </div>
  </div>
</template>

<style scoped>
.table-container {
  width: 100%;
  margin-top: 2rem;
  border: 1px solid var(--tui-border);
  padding: 1.5rem;
  background: rgba(48, 9, 36, 0.5);
}

.table-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  border-bottom: 1px dashed var(--tui-border);
  padding-bottom: 0.5rem;
}

.row-count {
  font-size: 0.8rem;
  opacity: 0.6;
}

.table-scroll {
  overflow-x: auto;
  margin-bottom: 1.5rem;
}

.tui-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.85rem;
  text-align: right;
}

.tui-table th {
  padding: 0.75rem;
  border-bottom: 1px solid var(--tui-border);
  color: var(--tui-accent);
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.75rem;
}

.tui-table td {
  padding: 0.6rem 0.75rem;
  border-bottom: 1px solid rgba(65, 72, 104, 0.3);
}

.month-cell {
  text-align: left;
  font-weight: bold;
  color: var(--tui-accent);
}

.payment-cell {
  font-weight: bold;
}

.interest-cell {
  color: var(--tui-warning);
}

.pending-cell {
  color: var(--tui-accent);
}

.extra-highlight {
  color: var(--tui-accent);
  font-weight: bold;
}

.amort-row {
  background: rgba(158, 206, 106, 0.05);
}

.pagination {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
}

.tui-btn.small {
  padding: 0.4rem 0.8rem;
  font-size: 0.8rem;
}

.tui-btn.active {
  background: var(--tui-accent);
  color: var(--tui-bg);
  border-color: var(--tui-accent);
}

.tui-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
  border-color: var(--tui-border);
}
</style>
