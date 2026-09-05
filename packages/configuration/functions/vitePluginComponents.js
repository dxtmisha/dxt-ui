import { VitePluginComponents } from '../classes/VitePluginComponents.js'

/**
 * Vite plugin factory for component post-build operations (injecting styles and removing wiki files).
 *
 * Фабрика плагина Vite для операций после сборки компонентов (внедрение стилей и удаление файлов wiki).
 * @returns {import('vite').Plugin} Vite plugin / плагин Vite
 */
export const vitePluginComponents = () => new VitePluginComponents().init()
