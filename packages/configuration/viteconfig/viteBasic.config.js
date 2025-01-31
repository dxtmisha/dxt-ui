import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export const viteBasic = defineConfig({
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
      clearPureImport: false,
      copyDtsFiles: true,
      include: [
        'src/functions/**/*.ts',
        'src/types/**/*.ts',
        'src/library.ts'
      ],
      insertTypesEntry: true,
      outDir: 'dist/types',
      staticImport: true,
      tsconfigPath: './tsconfig.app.json'
    })
  ]
})
