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
   * Processes the bundle and injects style import into library entries if CSS was emitted.
   *
   * Обрабатывает бандл и внедряет импорт стилей в точки входа библиотеки, если был сгенерирован CSS.
   * @param _options output options / параметры вывода
   * @param bundle output bundle / бандл вывода
   */
  processBundle(_options: Rollup.NormalizedOutputOptions, bundle: Rollup.OutputBundle): void

  /**
   * Checks if the file is a library index file.
   *
   * Проверяет, является ли файл индексным файлом библиотеки.
   * @param fileName file name to check / имя файла для проверки
   * @returns check result / результат проверки
   */
  isLibraryIndex(fileName: string): boolean
}
