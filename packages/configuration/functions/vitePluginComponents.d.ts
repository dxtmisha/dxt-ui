import type { Plugin } from 'vite'

export { FILE_STYLE_TOKEN, VitePluginComponents } from '../classes/VitePluginComponents'

/**
 * Vite plugin factory for component post-build operations (injecting styles and removing wiki files).
 *
 * Фабрика плагина Vite для операций после сборки компонентов (внедрение стилей и удаление файлов wiki).
 * @returns Vite plugin / плагин Vite
 */
export declare const vitePluginComponents: () => Plugin
