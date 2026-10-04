import { mergeConfig } from 'vite'

import { viteBasicFunction } from './viteBasicFunction.config.js'
import { vitePluginPurgeCss } from '../functions/vitePluginPurgeCss.js'

// https://vite.dev/config/

/**
 * Creates a Vite config extending viteBasicFunction with PurgeCSS for unused CSS elimination.
 *
 * Создаёт конфигурацию Vite, расширяющую viteBasicFunction с поддержкой PurgeCSS для удаления неиспользуемого CSS.
 * @param {import('./vitePurgeCss.config').VitePurgeCssOptions} [options] configuration options / параметры конфигурации
 * @returns {import('vite').UserConfig} Vite config / конфигурация Vite
 */
export const vitePurgeCss = ({
  purgeCss = {},
  ...options
} = {}) => mergeConfig(
  viteBasicFunction(options),
  {
    plugins: [
      vitePluginPurgeCss(purgeCss)
    ]
  }
)
