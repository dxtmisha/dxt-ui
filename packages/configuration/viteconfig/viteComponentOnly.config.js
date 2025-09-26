import nodePath from 'node:path'
import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'

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
  return defineConfig({
    plugins: [vue()],

    build: {
      outDir: nodePath.join(nodePath.dirname(path), 'wiki', 'temporary', 'dist'),

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
