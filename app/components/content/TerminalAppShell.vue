<template>
  <div class="terminal-shell">
    <div class="terminal-main">
      <aside class="terminal-sidebar">
        <div class="sidebar-section">
          <span class="sidebar-label">CONNECT</span>
          <nav>
            <a href="#profile" class="nav-item" :class="{ active: activeSection === 'profile' }"
              @click="activeSection = 'profile'">
              <span>[USR]</span> Profile
            </a>
            <a href="#experience" class="nav-item" :class="{ active: activeSection === 'experience' }"
              @click="activeSection = 'experience'">
              <span>[EXP]</span> Experience
            </a>
            <a href="#skills" class="nav-item" :class="{ active: activeSection === 'skills' }"
              @click="activeSection = 'skills'">
              <span>[SKL]</span> Skills
            </a>
            <a href="#education" class="nav-item" :class="{ active: activeSection === 'education' }"
              @click="activeSection = 'education'">
              <span>[EDU]</span> Education
            </a>
          </nav>
        </div>

        <div class="sidebar-bottom">
          <span>@ email</span>
          <span>@ github</span>
          <span>@ linkedin</span>
        </div>
      </aside>

      <main class="terminal-content-area" ref="scrollContainer" @scroll="onScroll">
        <slot />
      </main>
    </div>

    <footer class="terminal-footer">
      <div class="footer-keys">
        <span><span class="key-label">ESC</span> EXIT</span>
        <span><span class="key-label">TAB</span> NEXT_VIEW</span>
        <span><span class="key-label">S</span> SEARCH</span>
        <span><span class="key-label">P</span> PRINT</span>
      </div>
      <div class="footer-stats">
        <span>CPU: 2%</span>
        <span>RAM: 512MB</span>
        <span>V-MODE: PROD</span>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const activeSection = ref('profile')
const scrollContainer = ref<HTMLElement | null>(null)

const onScroll = () => {
  if (!scrollContainer.value) return
  const sections = ['profile', 'experience', 'skills', 'education']
  for (const id of sections) {
    const el = document.getElementById(id)
    if (el) {
      const rect = el.getBoundingClientRect()
      if (rect.top < 300 && rect.bottom > 200) {
        activeSection.value = id
        break
      }
    }
  }
}

onMounted(() => {
  onScroll()
})
</script>
