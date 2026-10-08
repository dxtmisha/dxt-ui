import type { Plugin } from 'vite'

export {
  VitePluginStyle
} from '../classes/VitePluginStyle'

/**
 * Creates a Vite plugin that injects associated CSS styles into corresponding JavaScript files/chunks after build.
 *
 * Создает плагин Vite, который внедряет ассоциированные CSS-стили в соответствующие файлы/чанки JavaScript после сборки.
 * @returns Vite plugin instance / экземпляр плагина Vite
 */
export declare const vitePluginStyle: () => Plugin
