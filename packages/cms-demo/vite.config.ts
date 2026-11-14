import { fileURLToPath } from 'node:url'
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
  resolve: {
    alias: {
      '@dxtmisha/cms-api': fileURLToPath(new URL('../cms-api/src/library.ts', import.meta.url)),
      '@dxtmisha/cms-nitro': fileURLToPath(new URL('../cms-nitro/src/library.ts', import.meta.url))
    }
  },
  build: {
    minify: true,
    cssCodeSplit: true
  }
}))
