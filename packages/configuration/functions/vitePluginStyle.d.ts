import type { Plugin } from 'vite'
import type {
  VitePluginStyleOptions,
  VitePluginStyleResolver,
  VitePluginStyleTarget
} from '../classes/VitePluginStyle'

export {
  VitePluginStyle,
  type VitePluginStyleOptions,
  type VitePluginStyleResolver,
  type VitePluginStyleTarget
} from '../classes/VitePluginStyle'

/**
 * Creates a Vite plugin that injects associated CSS styles into corresponding JavaScript files/chunks after build.
 *
 * Создает плагин Vite, который внедряет ассоциированные CSS-стили в соответствующие файлы/чанки JavaScript после сборки.
 * @param options plugin options or target filter / параметры плагина или фильтр целевых файлов
 * @returns Vite plugin instance / экземпляр плагина Vite
 */
export declare const vitePluginStyle: (
  options?: VitePluginStyleOptions | VitePluginStyleTarget
) => Plugin
