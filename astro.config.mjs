// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  base: process.env.PUBLIC_BASE || '/',
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use '@/styles/foundation' as *;`,
        },
      },
    },
  },
});
