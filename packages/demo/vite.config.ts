import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { uiD1VitePlugin } from '@dxtmisha/d1/plugin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [uiD1VitePlugin(), vue()]
})
