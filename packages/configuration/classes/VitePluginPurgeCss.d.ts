import type { Plugin, Rollup } from 'vite'

/** Safelist of selectors/classes to preserve / Белый список селекторов/классов для сохранения */
export type VitePluginPurgeCssSafelist = Array<string | RegExp> | {
  /** Standard selectors / Стандартные селекторы */
  standard?: Array<string | RegExp>
  /** Selectors preserved with all children / Селекторы, сохраняемые вместе с дочерними */
  deep?: RegExp[]
  /** Selectors preserved if any part matches / Селекторы, сохраняемые при совпадении любой части */
  greedy?: RegExp[]
  /** Keyframes to preserve / Сохраняемые keyframes */
  keyframes?: Array<string | RegExp>
  /** CSS variables to preserve / Сохраняемые CSS-переменные */
  variables?: Array<string | RegExp>
}

/** Raw content item for PurgeCSS scanning / Элемент сырого контента для сканирования PurgeCSS */
export interface VitePluginPurgeCssRawContent {
  /** Raw content / Сырое содержимое */
  raw: string
  /** Content file extension / Расширение файла содержимого */
  extension: string
}

/** Raw CSS item for PurgeCSS scanning / Элемент сырого CSS для сканирования PurgeCSS */
export interface VitePluginPurgeCssRawCss {
  /** Raw CSS content / Сырое содержимое CSS */
  raw: string
  /** CSS file name / Имя CSS-файла */
  name?: string
}

/** PurgeCSS result item / Элемент результата PurgeCSS */
export interface VitePluginPurgeCssResult {
  /** Purged CSS / Очищенный CSS */
  css: string
  /** Source file name / Имя исходного файла */
  file?: string
}

/** PurgeCSS instance / Экземпляр PurgeCSS */
export interface VitePluginPurgeCssInstance {
  /** Purges unused CSS / Удаляет неиспользуемый CSS */
  purge(options: Record<string, unknown>): Promise<VitePluginPurgeCssResult[]>
}

/** PurgeCSS class constructor / Конструктор класса PurgeCSS */
export type VitePluginPurgeCssClass = new () => VitePluginPurgeCssInstance

/**
 * Options for VitePluginPurgeCss.
 *
 * Параметры для VitePluginPurgeCss.
 */
export interface VitePluginPurgeCssOptions {
  /** Content globs to scan for class usage / Шаблоны файлов для сканирования использования классов */
  content?: string[]
  /** Safelist of selectors/classes to preserve / Белый список селекторов/классов для сохранения */
  safelist?: VitePluginPurgeCssSafelist
  /** Blocklist of selectors to remove / Черный список селекторов для удаления */
  blocklist?: Array<string | RegExp>
  /** Additional PurgeCSS options / Дополнительные параметры PurgeCSS */
  [key: string]: unknown
}

/**
 * Class for creating a Vite plugin that removes unused CSS using PurgeCSS.
 *
 * Класс для создания плагина Vite, который удаляет неиспользуемый CSS с помощью PurgeCSS.
 */
export declare class VitePluginPurgeCss {
  /** Content globs to scan / Шаблоны файлов для сканирования */
  content: string[]
  /** Safelist of selectors to preserve / Белый список селекторов для сохранения */
  safelist: VitePluginPurgeCssSafelist
  /** Additional PurgeCSS options / Дополнительные параметры PurgeCSS */
  purgeCssOptions: Record<string, unknown>

  /**
   * Constructor for VitePluginPurgeCss.
   *
   * Конструктор для VitePluginPurgeCss.
   * @param options plugin options / параметры плагина
   */
  constructor(options?: VitePluginPurgeCssOptions)

  /**
   * Initializes and returns the Vite plugin configuration.
   *
   * Инициализирует и возвращает конфигурацию плагина Vite.
   * @returns Vite plugin instance / экземпляр плагина Vite
   */
  init(): Plugin

  /**
   * Processes output bundle and purges unused CSS.
   * All CSS assets are purged in a single PurgeCSS call, so content is scanned only once.
   *
   * Обрабатывает выходной бандл и удаляет неиспользуемый CSS.
   * Все CSS-ассеты обрабатываются одним вызовом PurgeCSS, поэтому контент сканируется только один раз.
   * @param _options output options / параметры вывода
   * @param bundle output bundle / бандл вывода
   */
  generateBundle(_options: Rollup.NormalizedOutputOptions, bundle: Rollup.OutputBundle): Promise<void>

  /**
   * Returns content for PurgeCSS scanning: content globs and JS chunks from the bundle.
   *
   * Возвращает контент для сканирования PurgeCSS: шаблоны файлов и JS-чанки из бандла.
   * @param bundle output bundle / бандл вывода
   * @returns content list / список контента
   * @protected
   */
  protected getContent(bundle: Rollup.OutputBundle): Array<string | VitePluginPurgeCssRawContent>

  /**
   * Prepares CSS list for PurgeCSS scanning.
   *
   * Подготавливает список CSS для сканирования PurgeCSS.
   * @param cssAssets list of [file name, asset] pairs / список пар [имя файла, ассет]
   * @returns CSS list / список CSS
   * @protected
   */
  protected getCss(cssAssets: Array<[string, Rollup.OutputAsset]>): VitePluginPurgeCssRawCss[]

  /**
   * Returns non-empty CSS assets from the bundle.
   *
   * Возвращает непустые CSS-ассеты из бандла.
   * @param bundle output bundle / бандл вывода
   * @returns list of [file name, asset] pairs / список пар [имя файла, ассет]
   * @protected
   */
  protected getCssAssets(bundle: Rollup.OutputBundle): Array<[string, Rollup.OutputAsset]>

  /**
   * Extracts raw JS chunks from bundle for PurgeCSS scanning.
   *
   * Извлекает JS-чанки из бандла для сканирования PurgeCSS.
   * @param bundle output bundle / бандл вывода
   * @returns JS chunk content / содержимое JS-чанков
   * @protected
   */
  protected getJsChunks(bundle: Rollup.OutputBundle): VitePluginPurgeCssRawContent[]

  /**
   * Dynamically loads PurgeCSS module.
   *
   * Динамически загружает модуль PurgeCSS.
   * @returns PurgeCSS class or undefined / класс PurgeCSS или undefined
   * @protected
   */
  protected getPurgeCss(): Promise<VitePluginPurgeCssClass | undefined>

  /**
   * Converts chunk source to string.
   *
   * Преобразует source чанка в строку.
   * @param source chunk source / содержимое чанка
   * @returns string content / строковое содержимое
   * @protected
   */
  protected getRaw(source: string | Uint8Array): string

  /**
   * Updates CSS assets with purged CSS results.
   *
   * Обновляет CSS-ассеты результатами очищенного CSS.
   * @param cssAssets list of [file name, asset] pairs / список пар [имя файла, ассет]
   * @param results PurgeCSS results / результаты PurgeCSS
   * @protected
   */
  protected updateCss(
    cssAssets: Array<[string, Rollup.OutputAsset]>,
    results?: VitePluginPurgeCssResult[]
  ): void
}
