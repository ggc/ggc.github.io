<template>
  <div class="tui-root">
    <TerminalHeader />
    <div class="tui-container">
      <NuxtRouteAnnouncer />
      <NuxtPage />
    </div>
  </div>
</template>

<style>
.tui-root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

body {
  overflow-x: hidden;
}
</style>