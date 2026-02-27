import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteSingleFile } from 'vite-plugin-singlefile'

// https://vite.dev/config/
export const viteFigma = (
  isWatch,
  dirname,
  plugins = []
) => defineConfig(({ mode }) => {
  switch (mode) {
    case 'ui':
      return {
        plugins: [vue(), ...plugins, viteSingleFile()],
        build: {
          target: 'es2018',
          emptyOutDir: !isWatch
        }
      }
    case 'code':
      return {
        build: {
          target: 'es2018',
          emptyOutDir: false,
          rollupOptions: {
            input: {
              code: resolve(dirname, 'src/code.ts')
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
