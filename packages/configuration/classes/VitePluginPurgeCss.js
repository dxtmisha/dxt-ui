/**
 * Class for creating a Vite plugin that removes unused CSS using PurgeCSS.
 *
 * Класс для создания плагина Vite, который удаляет неиспользуемый CSS с помощью PurgeCSS.
 */
export class VitePluginPurgeCss {
  /** Content globs to scan / Шаблоны файлов для сканирования */
  content = [
    'src/**/*.vue',
    'src/**/*.js',
    'src/**/*.jsx',
    'src/**/*.ts',
    'src/**/*.tsx',
    'src/**/*.html',
    'index.html'
  ]

  /** Safelist of selectors to preserve / Белый список селекторов для сохранения */
  safelist = []

  /** Additional PurgeCSS options / Дополнительные параметры PurgeCSS */
  purgeCssOptions = {}

  /**
   * Constructor for VitePluginPurgeCss.
   *
   * Конструктор для VitePluginPurgeCss.
   * @param {import('./VitePluginPurgeCss').VitePluginPurgeCssOptions} [options] plugin options / параметры плагина
   */
  constructor({
    content,
    safelist,
    ...purgeCssOptions
  } = {}) {
    if (content !== undefined) {
      this.content = content
    }

    if (safelist !== undefined) {
      this.safelist = safelist
    }

    this.purgeCssOptions = purgeCssOptions
  }

  /**
   * Initializes and returns the Vite plugin configuration.
   *
   * Инициализирует и возвращает конфигурацию плагина Vite.
   * @returns {import('vite').Plugin} Vite plugin instance / экземпляр плагина Vite
   */
  init() {
    return {
      name: 'vite-plugin-purgecss',
      enforce: 'post',
      generateBundle: async (outputOptions, bundle) => {
        await this.generateBundle(outputOptions, bundle)
      }
    }
  }

  /**
   * Processes output bundle and purges unused CSS.
   * All CSS assets are purged in a single PurgeCSS call, so content is scanned only once.
   *
   * Обрабатывает выходной бандл и удаляет неиспользуемый CSS.
   * Все CSS-ассеты обрабатываются одним вызовом PurgeCSS, поэтому контент сканируется только один раз.
   * @param {import('rollup').NormalizedOutputOptions} _options output options / параметры вывода
   * @param {import('rollup').OutputBundle} bundle output bundle / бандл вывода
   */
  async generateBundle(_options, bundle) {
    const cssAssets = this.getCssAssets(bundle)

    if (cssAssets.length === 0) {
      return
    }

    const PurgeCSS = await this.getPurgeCss()

    if (!PurgeCSS) {
      return
    }

    try {
      const results = await new PurgeCSS().purge({
        ...this.purgeCssOptions,
        content: this.getContent(bundle),
        css: this.getCss(cssAssets),
        safelist: this.safelist
      })

      this.updateCss(cssAssets, results)
    } catch (error) {
      console.error(
        `[@dxtmisha/configuration] PurgeCSS error on ${cssAssets.map(([fileName]) => fileName).join(', ')}:`,
        error
      )
    }
  }

  /**
   * Returns content for PurgeCSS scanning: content globs and JS chunks from the bundle.
   *
   * Возвращает контент для сканирования PurgeCSS: шаблоны файлов и JS-чанки из бандла.
   * @param {import('rollup').OutputBundle} bundle output bundle / бандл вывода
   * @returns {Array<string | import('./VitePluginPurgeCss').VitePluginPurgeCssRawContent>} content list / список контента
   * @protected
   */
  getContent(bundle) {
    return [
      ...this.content,
      ...this.getJsChunks(bundle)
    ]
  }

  /**
   * Prepares CSS list for PurgeCSS scanning.
   *
   * Подготавливает список CSS для сканирования PurgeCSS.
   * @param {Array<[string, import('rollup').OutputAsset]>} cssAssets list of [file name, asset] pairs / список пар [имя файла, ассет]
   * @returns {import('./VitePluginPurgeCss').VitePluginPurgeCssRawCss[]} CSS list / список CSS
   * @protected
   */
  getCss(cssAssets) {
    return cssAssets.map(([fileName, asset]) => ({
      raw: this.getRaw(asset.source),
      name: fileName
    }))
  }

  /**
   * Returns non-empty CSS assets from the bundle.
   *
   * Возвращает непустые CSS-ассеты из бандла.
   * @param {import('rollup').OutputBundle} bundle output bundle / бандл вывода
   * @returns {Array<[string, import('rollup').OutputAsset]>} list of [file name, asset] pairs / список пар [имя файла, ассет]
   * @protected
   */
  getCssAssets(bundle) {
    return Object.entries(bundle)
      .filter(([fileName, chunk]) =>
        chunk.type === 'asset'
        && fileName.endsWith('.css')
        && chunk.source
      )
  }

  /**
   * Extracts raw JS chunks from bundle for PurgeCSS scanning.
   *
   * Извлекает JS-чанки из бандла для сканирования PurgeCSS.
   * @param {import('rollup').OutputBundle} bundle output bundle / бандл вывода
   * @returns {import('./VitePluginPurgeCss').VitePluginPurgeCssRawContent[]} JS chunk content / содержимое JS-чанков
   * @protected
   */
  getJsChunks(bundle) {
    return Object.values(bundle)
      .filter(chunk => chunk.type === 'chunk' && chunk.code)
      .map(chunk => ({ raw: chunk.code, extension: 'js' }))
  }

  /**
   * Dynamically loads PurgeCSS module.
   *
   * Динамически загружает модуль PurgeCSS.
   * @returns {Promise<import('./VitePluginPurgeCss').VitePluginPurgeCssClass | undefined>} PurgeCSS class or undefined / класс PurgeCSS или undefined
   * @protected
   */
  async getPurgeCss() {
    try {
      const m = await import('purgecss')
      return m.PurgeCSS || m.default?.PurgeCSS || m.default
    } catch {
      console.warn('[@dxtmisha/configuration] PurgeCSS not installed, skipping CSS purging.')
      return undefined
    }
  }

  /**
   * Converts chunk source to string.
   *
   * Преобразует source чанка в строку.
   * @param {string | Uint8Array} source chunk source / содержимое чанка
   * @returns {string} string content / строковое содержимое
   * @protected
   */
  getRaw(source) {
    return typeof source === 'string'
      ? source
      : new TextDecoder('utf-8').decode(source)
  }

  /**
   * Updates CSS assets with purged CSS results.
   *
   * Обновляет CSS-ассеты результатами очищенного CSS.
   * @param {Array<[string, import('rollup').OutputAsset]>} cssAssets list of [file name, asset] pairs / список пар [имя файла, ассет]
   * @param {import('./VitePluginPurgeCss').VitePluginPurgeCssResult[]} [results] PurgeCSS results / результаты PurgeCSS
   * @protected
   */
  updateCss(cssAssets, results) {
    cssAssets.forEach(([, asset], index) => {
      const css = results?.[index]?.css

      if (typeof css === 'string') {
        asset.source = css
      }
    })
  }
}
