<template>
  <NuxtLink :to="to" class="tui-btn">
    <span class="btn-prefix">> </span>
    <span class="btn-label">{{ label }}</span>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  to: string,
  label: string
}>()
</script>

<style scoped>
.tui-btn {
  border: 1px solid var(--tui-border);
  padding: 0.8rem 1.5rem;
  background: transparent;
  color: var(--tui-fg);
  text-decoration: none;
  font-family: inherit;
  font-size: 1rem;
  transition: all 0.2s;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 1ch;
  text-transform: uppercase;
}

.tui-btn:hover {
  border-color: var(--tui-accent);
  color: var(--tui-accent);
  background: rgba(158, 206, 106, 0.05);
}

.btn-prefix {
  font-weight: bold;
}
</style>
