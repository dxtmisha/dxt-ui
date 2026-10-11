import vue from '@vitejs/plugin-vue'

import { viteBasicBase } from './viteBasicBase.config.js'

// https://vite.dev/config/

/**
 * Creates a base Vite config for Vue libraries with functions/composables/classes.
 *
 * Создаёт базовую конфигурацию Vite для Vue-библиотек с функциями/композаблами/классами.
 * @param {import('./viteBasicFunction.config').ViteBasicFunctionOptions} [options] configuration options / параметры конфигурации
 * @returns {import('vite').UserConfig} Vite config / конфигурация Vite
 */
export const viteBasicFunction = (options = {}) => {
  const { plugins = [], ...restOptions } = options

  return viteBasicBase({
    ...restOptions,
    plugins: [
      vue(),
      ...plugins
    ]
  })
}
