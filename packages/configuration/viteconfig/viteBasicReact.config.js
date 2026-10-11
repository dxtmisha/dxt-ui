import react from '@vitejs/plugin-react'

import { viteBasicBase } from './viteBasicBase.config.js'

// https://vite.dev/config/

/**
 * Creates a base Vite config for React libraries with functions/hooks/classes/components.
 *
 * Создаёт базовую конфигурацию Vite для React-библиотек с функциями/хуками/классами/компонентами.
 * @param {import('./viteBasicReact.config').ViteBasicReactOptions} [options] configuration options / параметры конфигурации
 * @returns {import('vite').UserConfig} Vite config / конфигурация Vite
 */
export const viteBasicReact = (options = {}) => {
  const { plugins = [], ...restOptions } = options

  return viteBasicBase({
    ...restOptions,
    plugins: [
      react(),
      ...plugins
    ]
  })
}
