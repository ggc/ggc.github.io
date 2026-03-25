<template>
  <div class="mortgage-form tui-panel">
    <div class="form-header">
      <h2 class="tui-label">
        <span class="icon">🏠</span>
        [ MORTGAGE_CONFIG.INI ]
      </h2>
      <div class="form-actions tui-btns">
        <button class="tui-btn small" title="Export current config to JSON" @click="exportConfig">
          <span class="btn-icon">💾</span>
          EXPORT
        </button>
        <button class="tui-btn small" title="Import config from JSON" @click="triggerImport">
          <span class="btn-icon">📂</span>
          IMPORT
        </button>
        <input type="file" ref="fileInput" class="hidden-input" accept=".json" @change="handleImport" />
      </div>
    </div>

    <div class="form-grid">
      <div class="form-group">
        <label for="bank-name">BANK_NAME</label>
        <div class="input-wrapper">
          <span class="input-prefix">#</span>
          <input id="bank-name" v-model="store.bankName" type="text" placeholder="e.g. Banco de España"
            class="tui-input" />
        </div>
      </div>

      <div class="form-group">
        <label for="interest">ANNUAL_INTEREST (%)</label>
        <div class="input-wrapper">
          <span class="input-prefix">%</span>
          <input id="interest" v-model.number="store.annualInterest" type="number" min="0" max="30" step="0.1"
            class="tui-input" />
        </div>
      </div>

      <div class="form-group">
        <label for="loan-amount">LOAN_AMOUNT (€)</label>
        <div class="input-wrapper">
          <span class="input-prefix">€</span>
          <input id="loan-amount" v-model.number="store.loanAmount" type="number" min="1000" step="1000"
            class="tui-input" />
        </div>
      </div>

      <div class="form-group">
        <label for="months">DURATION_MONTHS</label>
        <div class="input-wrapper">
          <span class="input-prefix">T</span>
          <input id="months" v-model.number="store.months" type="number" min="1" max="600" step="1" class="tui-input" />
        </div>
        <span class="hint">>> {{ (store.months / 12).toFixed(1) }} YEARS</span>
      </div>

      <div class="form-group ">
        <label for="amortizations">EXTRA_AMORTIZATIONS</label>
        <div class="input-wrapper">
          <span class="input-prefix">-</span>
          <textarea id="amortizations" v-model="store.amortizationInput" rows="3"
            placeholder="*12,500 # Every year 500€ reduction" class="tui-input"
            @keydown="e => handleKeydown(e, 'amortizationInput')"></textarea>
        </div>
        <span class="hint">
          FORMAT: *MONTHS,AMOUNT | E.G. *12,500 = REDUCE 500€ EVERY 12 MONTHS.
        </span>
        <span class="hint">
          cmd + / = COMMENT/UNCOMMENT
        </span>
      </div>

      <div class="form-group ">
        <label for="extra_payments">EXTRA_PAYMENTS</label>
        <div class="input-wrapper">
          <span class="input-prefix">+</span>
          <textarea id="extra_payments" v-model="store.extraPaymentsInput" rows="3"
            placeholder="*1,100 # Add 100€ to monthly payment" class="tui-input"
            @keydown="e => handleKeydown(e, 'extraPaymentsInput')"></textarea>
        </div>
        <span class="hint">
          FORMAT: *MONTHS,AMOUNT | E.G. *1,100 = PAY 100€ EXTRA EVERY MONTH.
        </span>
        <span class="hint">
          cmd + / = COMMENT/UNCOMMENT
        </span>
      </div>
    </div>

    <div class="summary-section" v-if="store.schedule.length > 0">
      <div class="summary-grid">
        <div class="summary-item">
          <span class="item-label">MONTHLY_PAYMENT:</span>
          <span class="item-value">€{{ store.schedule[0]?.monthlyPayment.toLocaleString('es-ES', {
            minimumFractionDigits: 2
          }) }}</span>
        </div>
        <div class="summary-item warning">
          <span class="item-label">TOTAL_INTEREST:</span>
          <span class="item-value">€{{ store.totalInterest.toLocaleString('es-ES', { minimumFractionDigits: 2 })
          }}</span>
        </div>
        <div class="summary-item">
          <span class="item-label">TOTAL_PAID:</span>
          <span class="item-value">€{{ store.totalPaid.toLocaleString('es-ES', { minimumFractionDigits: 2 }) }}</span>
        </div>
        <div class="summary-item ok">
          <span class="item-label">ACTUAL_DURATION:</span>
          <span class="item-value">{{ store.actualMonths }} MO ({{ (store.actualMonths / 12).toFixed(1) }}Y)</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMortgageStore } from '@/stores/mortgage'
import { ref, nextTick } from 'vue'

const store = useMortgageStore()
const fileInput = ref<HTMLInputElement | null>(null)

function handleKeydown(event: KeyboardEvent, model: 'amortizationInput' | 'extraPaymentsInput') {
  if ((event.metaKey || event.ctrlKey) && event.key === '/') {
    event.preventDefault()


    const target = event.target as HTMLTextAreaElement
    const start = target.selectionStart
    const end = target.selectionEnd
    const value = target.value

    const lines = value.split('\n')
    if (!lines) return
    let currentPos = 0
    const impactedLines: number[] = []

    lines.forEach((line, i) => {
      const lineLen = line.length
      const lineStart = currentPos
      const lineEnd = currentPos + lineLen

      if (lineEnd >= start && lineStart <= end) {
        impactedLines.push(i)
      }
      currentPos += lineLen + 1
    });

    // for (let i = 0; i < lines.length; i++) {
    //   if (!lines[i]) continue
    //   const lineLen = lines[i].length
    //   const lineStart = currentPos
    //   const lineEnd = currentPos + lineLen

    //   if (lineEnd >= start && lineStart <= end) {
    //     impactedLines.push(i)
    //   }
    //   currentPos += lineLen + 1
    // }

    if (impactedLines.length === 0) return

    const firstLine = lines[impactedLines[0]]
    const isCommented = firstLine.trimStart().startsWith('#')

    let startOffset = 0
    let endOffset = 0

    impactedLines.forEach((idx, i) => {
      const originalLen = lines[idx].length
      if (isCommented) {
        // Uncomment
        lines[idx] = lines[idx].replace(/^(\s*)#\s?/, '$1')
      } else {
        // Comment
        lines[idx] = '# ' + lines[idx]
      }
      const diff = lines[idx].length - originalLen

      // If it's the first line and selection start is after the change point
      if (i === 0) startOffset = diff
      endOffset += diff
    })

    const newValue = lines.join('\n')
    store[model] = newValue

    nextTick(() => {
      target.selectionStart = Math.max(0, start + startOffset)
      target.selectionEnd = Math.max(0, end + endOffset)
    })
  }
}

function exportConfig() {
  const config = {
    bankName: store.bankName,
    loanAmount: store.loanAmount,
    months: store.months,
    annualInterest: store.annualInterest,
    amortizationInput: store.amortizationInput,
    extraPaymentsInput: store.extraPaymentsInput,
  }
  const blob = new Blob([JSON.stringify(config, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `hipoteca_${store.bankName.toLowerCase().replace(/ /g, '_')}_${new Date().toISOString().split('T')[0]}.json`
  a.click()
  URL.revokeObjectURL(url)
}

function triggerImport() {
  fileInput.value?.click()
}

function handleImport(event: Event) {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = (e) => {
    try {
      const content = JSON.parse(e.target?.result as string)
      store.loadConfig(content)
      target.value = ''
    } catch (err) {
      alert('ERROR: INVALID CONFIGURATION FILE.')
    }
  }
  reader.readAsText(file)
}
</script>

<style scoped>
.tui-panel {
  background: rgba(48, 9, 36, 0.4);
  border: 1px solid var(--tui-border);
  padding: 1.5rem;
  width: 100%;
  margin-bottom: 2rem;
  text-align: left;
}

.form-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px dashed var(--tui-border);
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 1.5rem;
}

.full-width {
  grid-column: 1 / -1;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-size: 0.75rem;
  font-weight: bold;
  color: var(--tui-accent);
  opacity: 0.8;
}

.input-wrapper {
  display: flex;
  align-items: center;
  border: 1px solid var(--tui-border);
  background: rgba(0, 0, 0, 0.2);
}

.input-prefix {
  padding: 0 0.75rem;
  color: var(--tui-accent);
  font-family: var(--tui-font);
  border-right: 1px solid var(--tui-border);
}

.tui-input {
  background: transparent;
  border: none;
  color: var(--tui-fg);
  padding: 0.75rem;
  font-family: var(--tui-font);
  font-size: 0.9rem;
  width: 100%;
  outline: none;
}

.tui-input:focus {
  background: rgba(158, 206, 106, 0.05);
}

textarea.tui-input {
  resize: vertical;
  min-height: 80px;
}

.hint {
  font-size: 0.7rem;
  opacity: 0.5;
  color: var(--tui-fg);
}

.summary-section {
  border-top: 1px solid var(--tui-border);
  /* padding-top: 1.5rem; */
  margin-top: 1rem;
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.summary-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.75rem;
  border: 1px solid rgba(65, 72, 104, 0.3);
}

.item-label {
  font-size: 0.7rem;
  opacity: 0.6;
}

.item-value {
  font-size: 1.1rem;
  font-weight: bold;
}

.summary-item.warning .item-value {
  color: var(--tui-warning);
}

.summary-item.ok .item-value {
  color: var(--tui-accent);
}

.hidden-input {
  display: none;
}

.tui-btn.small {
  padding: 0.4rem 0.8rem;
  font-size: 0.8rem;
}
</style>
