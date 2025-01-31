import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export const viteBasic = defineConfig({
  plugins: [vue()]
})
