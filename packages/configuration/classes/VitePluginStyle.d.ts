import type { Plugin, Rollup } from 'vite'

/** Target JS chunk file filter type / Тип фильтра целевых файлов JS-чанков */
export type VitePluginStyleTarget =
  | string
  | string[]
  | RegExp
  | ((fileName: string) => boolean)

/** Custom CSS resolver function type / Тип пользовательской функции сопоставления CSS */
export type VitePluginStyleResolver = (
  chunk: Rollup.OutputChunk,
  bundle: Rollup.OutputBundle
) => string[] | undefined

/** Options for VitePluginStyle / Параметры для VitePluginStyle */
export interface VitePluginStyleOptions {
  /** Target JS chunk file filter / Фильтр целевых файлов JS-чанков */
  filter?: VitePluginStyleTarget
  /** Custom CSS resolver function / Пользовательская функция сопоставления CSS */
  resolveCss?: VitePluginStyleResolver
}

/**
 * Class for creating a Vite plugin that handles post-build operations by injecting associated CSS styles into corresponding JavaScript chunks/files.
 *
 * Класс для создания плагина Vite, который обрабатывает операции после сборки путем внедрения ассоциированных стилей CSS в соответствующие JS-чанки/файлы.
 */
export declare class VitePluginStyle {
  /** Target file filter / Фильтр целевых файлов */
  filter?: VitePluginStyleTarget

  /** Output directory path / Путь к выходной директории */
  outputDirectory: string

  /** Custom CSS resolver function / Пользовательская функция сопоставления CSS */
  resolveCss?: VitePluginStyleResolver

  /**
   * Constructor for VitePluginStyle.
   *
   * Конструктор для VitePluginStyle.
   * @param options plugin options or target filter / параметры плагина или фильтр целевых файлов
   */
  constructor(options?: VitePluginStyleOptions | VitePluginStyleTarget)

  /**
   * Checks if the file should be processed by the plugin.
   *
   * Проверяет, должен ли файл обрабатываться плагином.
   * @param fileName file name to check / имя файла для проверки
   * @returns check result / результат проверки
   */
  isTarget(fileName: string): boolean

  /**
   * Returns a list of CSS files associated with the given chunk.
   *
   * Возвращает список CSS-файлов, ассоциированных с данным чанком.
   * @param chunk output chunk / чанк вывода
   * @param bundle output bundle / бандл вывода
   * @returns array of CSS file names / массив имен CSS-файлов
   */
  getCssFiles(chunk: Rollup.OutputChunk, bundle: Rollup.OutputBundle): string[]

  /**
   * Returns import or require statement for the style file depending on output format.
   *
   * Возвращает инструкцию import или require для файла стилей в зависимости от формата вывода.
   * @param relativePath relative path to the CSS file / относительный путь к CSS файлу
   * @param isCjs whether output is CommonJS / является ли вывод CommonJS
   * @returns import statement / инструкция импорта
   */
  getImportStatement(relativePath: string, isCjs?: boolean): string

  /**
   * Calculates relative path from chunk file to CSS file.
   *
   * Вычисляет относительный путь от файла чанка к CSS файлу.
   * @param fromFileName source chunk file path / путь к исходному файлу чанка
   * @param toFileName target CSS file path / путь к целевому CSS файлу
   * @returns relative import path / относительный путь импорта
   */
  getRelativePath(fromFileName: string, toFileName: string): string

  /**
   * Initializes and returns the Vite plugin configuration.
   *
   * Инициализирует и возвращает конфигурацию плагина Vite.
   * @returns Vite plugin instance / экземпляр плагина Vite
   */
  init(): Plugin

  /**
   * Processes generated bundle chunks and injects style imports into matching JS chunks.
   *
   * Обрабатывает чанки сгенерированного бандла и внедряет импорт стилей в соответствующие JS-чанки.
   * @param options output options / параметры вывода
   * @param bundle output bundle / бандл вывода
   */
  processBundle(options: Rollup.NormalizedOutputOptions, bundle: Rollup.OutputBundle): void
}
