<template>
  <div class="skill-row">
    <span class="skill-name">{{ name }}</span>
    <div class="progress-bg">
      <div class="progress-bar" :style="{ width: percent + '%' }"></div>
    </div>
    <span class="skill-years">{{ years }}y</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string,
  percent: number,
  years: number
}>()
</script>
