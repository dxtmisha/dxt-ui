import type { Plugin, Rollup } from 'vite'

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
   * Processes a code chunk and injects the style import if it matches a component index.
   *
   * Обрабатывает чанк кода и внедряет импорт стилей, если он соответствует индексу компонента.
   * @param code source code of the chunk / исходный код чанка
   * @param chunk rendered chunk information / информация об отрендренном чанке
   * @returns transformed code or null / трансформированный код или null
   */
  renderChunk(code: string, chunk: Rollup.RenderedChunk): { code: string; map: null } | null

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
