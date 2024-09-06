// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image','nuxt-particles'],
  plugins: [
    '~/plugins/vanilla-tilt', // Adjust the path as needed
  ],
})