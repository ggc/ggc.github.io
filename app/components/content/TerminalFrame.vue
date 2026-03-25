<template>
  <section :id="id" class="terminal-section-frame">
    <span class="section-label">{{ title }}</span>
    <slot />
  </section>
</template>

<script setup lang="ts">
defineProps<{
  id: string,
  title: string
}>()
</script>
