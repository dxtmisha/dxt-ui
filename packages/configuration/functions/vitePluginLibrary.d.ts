import type { Plugin } from 'vite'
import type { VitePluginLibraryTarget } from '../classes/VitePluginLibrary'

export { FILE_LIBRARY, FILE_STYLE, VitePluginLibrary, type VitePluginLibraryTarget } from '../classes/VitePluginLibrary'

/**
 * Vite plugin factory for library post-build operations (injecting styles into the library bundle).
 *
 * Фабрика плагина Vite для операций после сборки библиотеки (внедрение стилей в бандл библиотеки).
 * @param fileCssName name of the output CSS file / имя выходного CSS файла
 * @param fileLibraryName target library file name(s) / имя(имена) целевых файлов библиотеки
 * @returns Vite plugin / плагин Vite
 */
export declare const vitePluginLibrary: (fileCssName?: string, fileLibraryName?: VitePluginLibraryTarget) => Plugin
