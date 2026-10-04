import { VitePluginPurgeCss } from '../classes/VitePluginPurgeCss.js'

export { VitePluginPurgeCss }

/**
 * Vite plugin factory for removing unused CSS using PurgeCSS.
 *
 * Фабрика плагина Vite для удаления неиспользуемого CSS с помощью PurgeCSS.
 * @param {import('../classes/VitePluginPurgeCss').VitePluginPurgeCssOptions} [options] PurgeCSS options / параметры PurgeCSS
 * @returns {import('vite').Plugin} Vite plugin / плагин Vite
 */
export const vitePluginPurgeCss = (options = {}) => new VitePluginPurgeCss(options).init()
