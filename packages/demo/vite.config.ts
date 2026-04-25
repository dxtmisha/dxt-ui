import { defineConfig } from 'vite'
import { nitro } from 'nitro/vite'

import vue from '@vitejs/plugin-vue'
import { uiD1VitePlugin } from '@dxtmisha/d1/plugin'

export default defineConfig(() => ({
  plugins: [
    uiD1VitePlugin(),
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
