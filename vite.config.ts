import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/library.ts',
      name: 'dxt-ui',
      formats: ['es'],
      fileName: 'library'
    }
  },
  plugins: [
    vue(),
    dts({
      rollupTypes: true,
      tsconfigPath: './tsconfig.app.json'
    })
  ]
})
