import type { Plugin } from 'vite'
import type { VitePluginPurgeCssOptions } from '../classes/VitePluginPurgeCss'
import { VitePluginPurgeCss } from '../classes/VitePluginPurgeCss'

export { VitePluginPurgeCss, VitePluginPurgeCssOptions }

/**
 * Vite plugin factory for removing unused CSS using PurgeCSS.
 *
 * Фабрика плагина Vite для удаления неиспользуемого CSS с помощью PurgeCSS.
 * @param options plugin options / параметры плагина
 * @returns Vite plugin / плагин Vite
 */
export declare const vitePluginPurgeCss: (
  options?: VitePluginPurgeCssOptions
) => Plugin
