import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteSingleFile } from 'vite-plugin-singlefile'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isWatch = process.argv.includes('--watch')

  switch (mode) {
    case 'ui':
      return {
        plugins: [vue(), viteSingleFile()],
        build: {
          emptyOutDir: !isWatch
        }
      }
    case 'code':
      return {
        build: {
          emptyOutDir: false,
          rollupOptions: {
            input: {
              code: resolve(__dirname, 'src/code.ts')
            },
            output: {
              manualChunks: undefined,
              inlineDynamicImports: false,
              entryFileNames: 'code.js'
            }
          }
        }
      }
  }

  return {}
})
