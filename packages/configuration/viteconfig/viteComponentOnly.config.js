// import nodePath from 'node:path'
import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

/**
 * Creates a base Vite config for libraries with only Vue components.
 *
 * Создаёт базовую конфигурацию Vite для библиотек только с Vue-компонентами.
 * @param {string} path path to entry file / путь к входному файлу
 * @param {string} packages path to packages / путь к пакетам
 * @returns {UserConfig} Vite config / конфигурация Vite
 */
export const viteComponentOnly = (
  path,
  packages
) => {
  const outDir = 'dist-temporary'

  return defineConfig({
    plugins: [
      vue(),
      dts({
        clearPureImport: false,
        copyDtsFiles: true,
        insertTypesEntry: true,
        outDir,
        staticImport: true,
        tsconfigPath: './tsconfig.app.json',
        rollupTypes: true
      })
    ],

    build: {
      outDir,

      lib: {
        entry: path,
        name: 'component-template',
        fileName: () => `component-template.js`,
        formats: ['es']
      },

      rollupOptions: {
        external: id => id.includes('node_modules'),
        output: {
          globals: {
            vue: 'Vue'
          }
        }
      },

      minify: false,

      sourcemap: true
    },

    resolve: {
      alias: {
        '@': packages
      }
    }
  })
}
