import type { Plugin, Rollup } from 'vite'

/** Name of the default component SCSS style file / Имя файла стилей SCSS компонента по умолчанию */
export declare const FILE_STYLE: string

/** Name of the default component style file / Имя файла стилей компонента по умолчанию */
export declare const FILE_STYLE_TOKEN: string

/**
 * Class for creating a Vite plugin that handles component post-build operations (injecting styles and removing wiki files).
 *
 * Класс для создания плагина Vite, который обрабатывает операции после сборки компонентов (внедрение стилей и удаление файлов wiki).
 */
export declare class VitePluginComponents {
  /** Output directory path / Путь к выходной директории */
  outputDirectory: string

  /**
   * Initializes and returns the Vite plugin configuration.
   *
   * Инициализирует и возвращает конфигурацию плагина Vite.
   * @returns Vite plugin instance / экземпляр плагина Vite
   */
  init(): Plugin

  /**
   * Processes generated bundle chunks and injects style imports for components with styles.
   *
   * Обрабатывает чанки сгенерированного бандла и внедряет импорт стилей для компонентов со стилями.
   * @param _options output options / параметры вывода
   * @param bundle output bundle / бандл вывода
   */
  generateBundle(_options: Rollup.NormalizedOutputOptions, bundle: Rollup.OutputBundle): void

  /**
   * Checks if a style file exists in the bundle.
   *
   * Проверяет наличие файла стилей в бандле.
   * @param url file path or URL / путь к файлу или URL
   * @param bundle output bundle / бандл вывода
   * @returns check result / результат проверки
   */
  isStyle(url?: string, bundle?: Rollup.OutputBundle): boolean

  /**
   * Checks if the file is a component index file.
   *
   * Проверяет, является ли файл индексным файлом компонента.
   * @param fileName file name to check / имя файла для проверки
   * @returns check result / результат проверки
   */
  isComponentIndex(fileName: string): boolean

  /**
   * Removes wiki-related generated files from directory recursively.
   *
   * Рекурсивно удаляет сгенерированные файлы wiki из директории.
   * @param directoryPath directory path to clean / путь к директории для очистки
   */
  removeWikiFiles(directoryPath: string): void
}
