<template>
  <div class="tui-updates">
    <div class="tui-update-title">ULTIMAS_ACTUALIZACIONES.JSON</div>
    <ul class="tui-update-list">
      <li v-for="item in updates" :key="item" class="tui-update-item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  updates: string[]
}>()
</script>

<style scoped>
.tui-updates {
  text-align: left;
  width: 100%;
  max-width: 60ch;
  margin-top: 3rem;
  border-top: 1px dashed var(--tui-border);
  padding-top: 1.5rem;
}

.tui-update-title {
  font-size: 0.85rem;
  opacity: 0.6;
  margin-bottom: 0.75rem;
  font-weight: bold;
}

.tui-update-list {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.9rem;
}

.tui-update-item {
  margin: 0.4ch 0;
  color: var(--tui-fg);
  display: flex;
  gap: 1.5ch;
  opacity: 0.85;
}

.tui-update-item::before {
  content: "*";
  color: var(--tui-border);
  font-weight: bold;
}
</style>
