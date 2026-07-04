import { defineNuxtConfig } from 'nuxt/config'
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',

  // Nuxt 4 app dir convention
  future: { compatibilityVersion: 4 },

  devtools: { enabled: true },

  // Modules
  modules: [
    '@nuxt/content',          // Blog & Lab data
    '@nuxt/image',            // Optimised NuxtImg
    '@nuxt/icon',             // Iconify icon system
    '@nuxt/fonts',            // Auto-managed fonts
    '@vueuse/nuxt',           // VueUse composables
    '@vueuse/motion/nuxt',    // Micro-animations
    '@nuxtjs/seo',            // Unified SEO (robots, sitemap, OG)
    '@nuxtjs/color-mode',     // SSR-safe dark mode
  ],

  // Tailwind CSS v4 setup via Vite
  vite: {
    plugins: [
      tailwindcss()
    ],
    optimizeDeps: {
      include: [
        '@unhead/schema-org/vue',
        '@vue/devtools-core',
        '@vue/devtools-kit',
      ]
    }
  },

  // Nuxt Fonts configuration
  fonts: {
    families: [
      { name: 'Iosevka', provider: 'fontsource' }
    ]
  },

  // Color mode: class-based (body.dark) for Tailwind v4 compat
  colorMode: {
    classSuffix: '',          // adds class "dark" not "dark-mode"
    preference: 'system',
    fallback: 'dark',
    storageKey: 'octopy-theme',
  },

  // CSS entry
  css: ['~/assets/css/main.css'],

  // App-level head defaults
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },

  // Nitro settings
  nitro: {
    prerender: {
      crawlLinks: true
    }
  },

  // Content v3 collections
  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            default: 'github-light',
            dark: 'one-dark-pro',
          },
        },
      },
    },
  },
})
