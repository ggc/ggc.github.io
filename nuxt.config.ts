// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/ggc-github-io/',
    buildAssetsDir: 'assets',
  },
  css: ['@/assets/tui.css', '@/assets/terminal-app.css'],
  modules: ['@nuxt/content', '@pinia/nuxt'],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  nitro: {
    preset: 'github-pages',
  },
})