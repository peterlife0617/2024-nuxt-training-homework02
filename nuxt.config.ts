// https://nuxt.com/docs/api/configuration/nuxt-config
import process from 'node:process'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
  stylelint: {
    lintOnStart: false,
  },
  modules: ['@nuxt/eslint', '@nuxtjs/stylelint-module'],
  css: ['@/assets/styles/all.scss'],
  runtimeConfig: {
    public: {
      NUXT_APP_BASE_URL: process.env.NUXT_APP_BASE_URL,
    },
  },
})
