<template>
  <div class="chart-container" v-if="store.schedule.length > 0">
    <div class="chart-header">
      <h2 class="chart-title">
        <span class="icon">📈</span>
        Amortization Chart
      </h2>
      <div class="chart-tabs">
        <button :class="['tab', { active: chartView === 'all' }]" @click="chartView = 'all'">
          Overview
        </button>
        <button :class="['tab', { active: chartView === 'payment-breakdown' }]"
          @click="chartView = 'payment-breakdown'">
          Payment Breakdown
        </button>
      </div>
    </div>
    <div class="chart-wrapper">
      <Line :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js'
import { useMortgageStore } from '@/stores/mortgage'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler)

const store = useMortgageStore()

const chartView = ref<'all' | 'payment-breakdown'>('all')

const chartData = computed(() => {
  const rows = store.schedule
  const labels = rows.map((r) => `${r.month}`)

  if (chartView.value === 'payment-breakdown') {
    return {
      labels,
      datasets: [
        {
          label: 'Interest Portion (€)',
          data: rows.map((r) => r.interestPortion),
          borderColor: '#f472b6',
          backgroundColor: 'rgba(244, 114, 182, 0.1)',
          fill: true,
          tension: 0.3,
          pointRadius: 0,
          pointHoverRadius: 4,
          borderWidth: 2,
        },
        {
          label: 'Principal Portion (€)',
          data: rows.map((r) => r.principalPortion),
          borderColor: '#34d399',
          backgroundColor: 'rgba(52, 211, 153, 0.1)',
          fill: true,
          tension: 0.3,
          pointRadius: 0,
          pointHoverRadius: 4,
          borderWidth: 2,
        },
      ],
    }
  }

  return {
    labels,
    datasets: [
      {
        label: 'Pending Loan (€)',
        data: rows.map((r) => r.pendingAfter),
        borderColor: '#818cf8',
        backgroundColor: 'rgba(129, 140, 248, 0.08)',
        fill: true,
        tension: 0.3,
        pointRadius: 0,
        pointHoverRadius: 4,
        borderWidth: 2.5,
      },
      {
        label: 'Monthly Payment (€)',
        data: rows.map((r) => r.monthlyPayment),
        borderColor: '#fbbf24',
        backgroundColor: 'rgba(251, 191, 36, 0.08)',
        fill: false,
        tension: 0.3,
        pointRadius: 0,
        pointHoverRadius: 4,
        borderWidth: 2,
      },
      {
        label: 'Interest (€)',
        data: rows.map((r) => r.interestPortion),
        borderColor: '#f472b6',
        backgroundColor: 'rgba(244, 114, 182, 0.08)',
        fill: false,
        tension: 0.3,
        pointRadius: 0,
        pointHoverRadius: 4,
        borderWidth: 2,
      },
    ],
  }
})

const chartOptions = computed(() => ({
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  plugins: {
    legend: {
      position: 'top' as const,
      labels: {
        color: '#94a3b8',
        font: { family: 'Inter, sans-serif', size: 12 },
        usePointStyle: true,
        pointStyle: 'circle',
        padding: 16,
      },
    },
    tooltip: {
      backgroundColor: 'rgba(15, 23, 42, 0.95)',
      titleColor: '#e2e8f0',
      bodyColor: '#cbd5e1',
      borderColor: 'rgba(99, 102, 241, 0.3)',
      borderWidth: 1,
      padding: 12,
      cornerRadius: 8,
      titleFont: { family: 'Inter, sans-serif', weight: '600' as const },
      bodyFont: { family: 'Inter, sans-serif' },
      callbacks: {
        label: (ctx: { dataset: { label?: string }; parsed: { y: number | null } }) => {
          const label = ctx.dataset.label || ''
          const value = ctx.parsed.y
          return `${label}: €${value?.toLocaleString('es-ES', { minimumFractionDigits: 2 })}`
        },
        title: (items: { label: string }[]) => `Month ${items[0]?.label}`,
      },
    },
  },
  scales: {
    x: {
      grid: { color: 'rgba(148, 163, 184, 0.06)' },
      ticks: {
        color: '#64748b',
        font: { family: 'Inter, sans-serif', size: 11 },
        maxTicksLimit: 20,
      },
      title: {
        display: true,
        text: 'Month',
        color: '#94a3b8',
        font: { family: 'Inter, sans-serif', size: 12, weight: '600' as const },
      },
    },
    y: {
      grid: { color: 'rgba(148, 163, 184, 0.06)' },
      ticks: {
        color: '#64748b',
        font: { family: 'Inter, sans-serif', size: 11 },
        callback: (value: string | number) => `€${Number(value).toLocaleString('es-ES')}`,
      },
      title: {
        display: true,
        text: 'Amount (€)',
        color: '#94a3b8',
        font: { family: 'Inter, sans-serif', size: 12, weight: '600' as const },
      },
    },
  },
}))
</script>

<style scoped>
.chart-wrapper {
  height: 30vh;
}
</style>
