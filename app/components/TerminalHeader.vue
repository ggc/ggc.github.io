<template>
  <header class="tui-header">
    <div class="tui-logo">[ gabriel_gc@dev:~$ ]</div>
    <nav class="tui-nav">
      <NuxtLink to="/" class="tui-nav-link">~ inicio</NuxtLink>
      <NuxtLink to="/about" class="tui-nav-link">~ sobre_mi</NuxtLink>
      <NuxtLink to="/resume" class="tui-nav-link">~ curriculum.sh</NuxtLink>
      <NuxtLink to="/mortgage-calculator" class="tui-nav-link">~ calculadora hipotecas</NuxtLink>
    </nav>
    <div class="tui-langs">
      <span class="tui-lang active">ES</span>
      <span class="tui-lang">/ EN</span>
    </div>
  </header>
</template>

<style scoped>
.tui-logo {
  color: var(--tui-accent);
  font-weight: bold;
}
</style>
