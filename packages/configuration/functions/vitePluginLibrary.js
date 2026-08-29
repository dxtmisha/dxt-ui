import { FILE_LIBRARY, FILE_STYLE, VitePluginLibrary } from '../classes/VitePluginLibrary.js'

export { FILE_LIBRARY, FILE_STYLE, VitePluginLibrary }

/**
 * Vite plugin factory for library post-build operations (injecting styles into the library bundle).
 *
 * Фабрика плагина Vite для операций после сборки библиотеки (внедрение стилей в бандл библиотеки).
 * @param {string} [fileCssName] name of the output CSS file / имя выходного CSS файла
 * @param {import('../classes/VitePluginLibrary').VitePluginLibraryTarget} [fileLibraryName] target library file name(s) / имя(имена) целевых файлов библиотеки
 * @returns {import('vite').Plugin} Vite plugin / плагин Vite
 */
export const vitePluginLibrary = (fileCssName = FILE_STYLE, fileLibraryName = FILE_LIBRARY) => new VitePluginLibrary(fileCssName, fileLibraryName).init()
