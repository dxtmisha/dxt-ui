import { defineConfig } from 'vite'
import { nitro } from 'nitro/vite'

import vue from '@vitejs/plugin-vue'

export default defineConfig(() => ({
  plugins: [
    vue(),
    nitro({
      serverDir: './server'
    })
  ],
  build: {
    minify: true,
    cssCodeSplit: true
  }
}))
