import type { Plugin, Rollup } from 'vite'

/** Name of the default library style file / Имя файла стилей библиотеки по умолчанию */
export declare const FILE_STYLE: string

/** Name of the default library file / Имя файла библиотеки по умолчанию */
export declare const FILE_LIBRARY: string

/** Target library file filter type / Тип фильтра целевых файлов библиотеки */
export type VitePluginLibraryTarget = string | string[] | RegExp | ((fileName: string) => boolean)

/**
 * Class for creating a Vite plugin that handles library post-build operations (injecting styles into the library bundle).
 *
 * Класс для создания плагина Vite, который обрабатывает операции после сборки библиотеки (внедрение стилей в бандл библиотеки).
 */
export declare class VitePluginLibrary {
  /** Name of the output CSS file / Имя выходного CSS файла */
  fileCssName: string

  /** Target library file name(s) / Имя(имена) целевых файлов библиотеки */
  fileLibraryName: VitePluginLibraryTarget

  /** Output directory path / Путь к выходной директории */
  outputDirectory: string

  /**
   * Constructor for VitePluginLibrary.
   *
   * Конструктор для VitePluginLibrary.
   * @param fileCssName name of the output CSS file / имя выходного CSS файла
   * @param fileLibraryName target library file name(s) / имя(имена) целевых файлов библиотеки
   */
  constructor(fileCssName?: string, fileLibraryName?: VitePluginLibraryTarget)

  /**
   * Initializes and returns the Vite plugin configuration.
   *
   * Инициализирует и возвращает конфигурацию плагина Vite.
   * @returns Vite plugin instance / экземпляр плагина Vite
   */
  init(): Plugin

  /**
   * Processes a code chunk and injects the style import if it matches a library entry.
   *
   * Обрабатывает чанк кода и внедряет импорт стилей, если он соответствует точке входа библиотеки.
   * @param code source code of the chunk / исходный код чанка
   * @param chunk rendered chunk information / информация об отрендренном чанке
   * @returns transformed code or null / трансформированный код или null
   */
  renderChunk(code: string, chunk: Rollup.RenderedChunk): { code: string; map: null } | null

  /**
   * Checks if the file is a library index file.
   *
   * Проверяет, является ли файл индексным файлом библиотеки.
   * @param fileName file name to check / имя файла для проверки
   * @returns check result / результат проверки
   */
  isLibraryIndex(fileName: string): boolean
}
