<template>
  <div class="tui-logs">
    <div v-for="log in logs" :key="log.message" class="tui-log-line">
      <span :class="log.status" class="status"> {{ log.status.toUpperCase() }} </span>
      <span class="message"> {{ log.message }} </span>
      <span v-if="log.extra" class="extra done">... ESTABLECIDA</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  logs: Array<{ status: string, message: string, extra?: boolean }>
}>()
</script>

<style scoped>
.status { min-width: 6ch; display: inline-block; font-weight: bold; }
.ok { color: var(--tui-accent); }
.wait { color: var(--tui-warning); }
.message { color: var(--tui-fg); margin-left: 1ch; }
.extra { color: var(--tui-accent); font-weight: bold; }
</style>
