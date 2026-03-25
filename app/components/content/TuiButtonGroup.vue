<template>
  <div class="tui-btns">
    <slot />
  </div>
</template>

<style scoped>
.tui-btns {
  display: flex;
  gap: 2rem;
  margin: 2rem 0;
  justify-content: center;
}

@media (max-width: 600px) {
  .tui-btns {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
}
</style>
