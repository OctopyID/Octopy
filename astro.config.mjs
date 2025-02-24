// @ts-check
import { defineConfig } from 'astro/config';
import css from '@tailwindcss/vite';
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      css()
    ]
  },

  integrations: [
    vue({
      //
    })
  ]
});