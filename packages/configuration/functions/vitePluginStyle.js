import { VitePluginStyle } from '../classes/VitePluginStyle.js'

export { VitePluginStyle }

/**
 * Creates a Vite plugin that injects associated CSS styles into corresponding JavaScript files/chunks after build.
 *
 * Создает плагин Vite, который внедряет ассоциированные CSS-стили в соответствующие файлы/чанки JavaScript после сборки.
 * @returns {import('vite').Plugin} Vite plugin instance / экземпляр плагина Vite
 */
export const vitePluginStyle = () => new VitePluginStyle().init()
