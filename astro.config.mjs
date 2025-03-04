// @ts-check
import { defineConfig } from 'astro/config';
import css from '@tailwindcss/vite';
import vue from '@astrojs/vue';
import robot from 'astro-robots-txt';
import sitemap from '@astrojs/sitemap';
import reading from 'astro-reading-time';

// https://astro.build/config
export default defineConfig({
    site: 'https://www.octopy.dev',
    vite: {
        plugins: [css()],
    },
    markdown: {
        shikiConfig: {
            themes: {
                light: 'github-light',
                dark: 'github-dark',
            },
            wrap: true,
        },
    },
    integrations: [
        vue({
            //
        }),
        robot({
            sitemap: true,
        }),
        sitemap({
            //
        }),
        reading(),
    ],
});
