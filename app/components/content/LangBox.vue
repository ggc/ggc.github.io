<template>
  <div class="lang-box">
    <span class="lang-code">{{ code }}</span>
    <span class="lang-level">{{ level }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  code: string,
  level: string
}>()
</script>
