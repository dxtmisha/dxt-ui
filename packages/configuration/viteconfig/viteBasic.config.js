import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export const viteBasic = defineConfig({
  build: {
    lib: {
      entry: [
        'src/library.ts'
      ],
      name: 'dxt-ui',
      formats: ['es'],
      fileName: (_, entryName) => `${entryName}.js`
    }
  },
  plugins: [
    vue(),
    dts({
      clearPureImport: false,
      copyDtsFiles: true,
      include: [
        'src/classes/**/*.ts',
        'src/composables/**/*.ts',
        'src/functions/**/*.ts',
        'src/types/**/*.ts',
        'src/flags.ts',
        'src/library.ts'
      ],
      insertTypesEntry: true,
      outDir: 'dist',
      staticImport: true,
      tsconfigPath: './tsconfig.app.json'
    })
  ]
})
