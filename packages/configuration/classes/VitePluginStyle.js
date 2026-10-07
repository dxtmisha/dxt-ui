import path from 'node:path'

/**
 * Class for creating a Vite plugin that handles post-build operations by injecting associated CSS styles into corresponding JavaScript chunks/files.
 *
 * Класс для создания плагина Vite, который обрабатывает операции после сборки путем внедрения ассоциированных стилей CSS в соответствующие JS-чанки/файлы.
 */
export class VitePluginStyle {
  /** Target file filter / Фильтр целевых файлов */
  filter = undefined

  /** Output directory path / Путь к выходной директории */
  outputDirectory = 'dist'

  /** Custom CSS resolver function / Пользовательская функция сопоставления CSS */
  resolveCss = undefined

  /**
   * Constructor for VitePluginStyle.
   *
   * Конструктор для VitePluginStyle.
   * @param {import('./VitePluginStyle').VitePluginStyleOptions | import('./VitePluginStyle').VitePluginStyleTarget} [options] plugin options or target filter / параметры плагина или фильтр целевых файлов
   */
  constructor(options = {}) {
    if (
      typeof options === 'function'
      || typeof options === 'string'
      || options instanceof RegExp
      || Array.isArray(options)
    ) {
      this.filter = options
    } else if (options && typeof options === 'object') {
      if (options.filter !== undefined) {
        this.filter = options.filter
      }

      if (options.resolveCss !== undefined) {
        this.resolveCss = options.resolveCss
      }
    }
  }

  /**
   * Checks if the file should be processed by the plugin.
   *
   * Проверяет, должен ли файл обрабатываться плагином.
   * @param {string} fileName file name to check / имя файла для проверки
   * @returns {boolean} check result / результат проверки
   */
  isTarget(fileName) {
    if (typeof this.filter === 'function') {
      return this.filter(fileName)
    }

    if (this.filter instanceof RegExp) {
      return this.filter.test(fileName)
    }

    if (Array.isArray(this.filter)) {
      return this.filter.some(item => fileName === item || fileName.endsWith(`/${item}`))
    }

    if (typeof this.filter === 'string') {
      return fileName === this.filter || fileName.endsWith(`/${this.filter}`)
    }

    return fileName.endsWith('.js')
      || fileName.endsWith('.mjs')
      || fileName.endsWith('.cjs')
  }

  /**
   * Returns a list of CSS files associated with the given chunk.
   *
   * Возвращает список CSS-файлов, ассоциированных с данным чанком.
   * @param {import('rollup').OutputChunk} chunk output chunk / чанк вывода
   * @param {import('rollup').OutputBundle} bundle output bundle / бандл вывода
   * @returns {string[]} array of CSS file names / массив имен CSS-файлов
   */
  getCssFiles(chunk, bundle) {
    if (typeof this.resolveCss === 'function') {
      const custom = this.resolveCss(chunk, bundle)

      if (Array.isArray(custom)) {
        return custom
      }
    }

    const list = []

    if (chunk.viteMetadata?.importedCss && chunk.viteMetadata.importedCss.size > 0) {
      for (const cssFileName of chunk.viteMetadata.importedCss) {
        if (cssFileName in bundle) {
          list.push(cssFileName)
        }
      }
    }

    if (list.length > 0) {
      return list
    }

    const chunkName = chunk.name || ''
    const baseName = chunkName || path.posix.basename(chunk.fileName, path.posix.extname(chunk.fileName)).replace(/-[A-Za-z0-9_-]{8,}$/, '')

    for (const [assetFileName, asset] of Object.entries(bundle)) {
      if (asset.type !== 'asset' || !assetFileName.endsWith('.css')) {
        continue
      }

      const assetBase = path.posix.basename(assetFileName, '.css')
      const assetName = asset.name ? asset.name.replace(/\.css$/, '') : ''

      const isMatch = Boolean(
        (chunkName && assetName === chunkName)
        || (chunkName && (assetBase === chunkName || assetBase.startsWith(`${chunkName}-`)))
        || (baseName && (assetBase === baseName || assetBase.startsWith(`${baseName}-`)))
        || (asset.originalFileName && chunk.moduleIds?.includes(asset.originalFileName))
      )

      if (isMatch && !list.includes(assetFileName)) {
        list.push(assetFileName)
      }
    }

    return list
  }

  /**
   * Returns import or require statement for the style file depending on output format.
   *
   * Возвращает инструкцию import или require для файла стилей в зависимости от формата вывода.
   * @param {string} relativePath relative path to the CSS file / относительный путь к CSS файлу
   * @param {boolean} [isCjs] whether output is CommonJS / является ли вывод CommonJS
   * @returns {string} import statement / инструкция импорта
   */
  getImportStatement(relativePath, isCjs = false) {
    return isCjs
      ? `require('${relativePath}');`
      : `import '${relativePath}';`
  }

  /**
   * Calculates relative path from chunk file to CSS file.
   *
   * Вычисляет относительный путь от файла чанка к CSS файлу.
   * @param {string} fromFileName source chunk file path / путь к исходному файлу чанка
   * @param {string} toFileName target CSS file path / путь к целевому CSS файлу
   * @returns {string} relative import path / относительный путь импорта
   */
  getRelativePath(fromFileName, toFileName) {
    const dir = path.posix.dirname(fromFileName)
    let relative = path.posix.relative(dir, toFileName)

    if (!relative.startsWith('.')) {
      relative = `./${relative}`
    }

    return relative
  }

  /**
   * Initializes and returns the Vite plugin configuration.
   *
   * Инициализирует и возвращает конфигурацию плагина Vite.
   * @returns {import('vite').Plugin} Vite plugin instance / экземпляр плагина Vite
   */
  init() {
    return {
      name: 'vite-plugin-style',
      enforce: 'post',
      configResolved: (config) => {
        this.outputDirectory = config.build.outDir || 'dist'
      },
      generateBundle: (options, bundle) => {
        this.processBundle(options, bundle)
      }
    }
  }

  /**
   * Processes generated bundle chunks and injects style imports into matching JS chunks.
   *
   * Обрабатывает чанки сгенерированного бандла и внедряет импорт стилей в соответствующие JS-чанки.
   * @param {import('rollup').NormalizedOutputOptions} options output options / параметры вывода
   * @param {import('rollup').OutputBundle} bundle output bundle / бандл вывода
   */
  processBundle(options, bundle) {
    const isCjs = options?.format === 'cjs'

    for (const [fileName, chunk] of Object.entries(bundle)) {
      if (
        chunk.type === 'chunk'
        && this.isTarget(fileName)
      ) {
        const cssFiles = this.getCssFiles(chunk, bundle)

        if (cssFiles.length === 0) {
          continue
        }

        const imports = []

        for (const cssFileName of cssFiles) {
          const relativePath = this.getRelativePath(fileName, cssFileName)

          if (
            !chunk.code.includes(relativePath)
            && !chunk.code.includes(cssFileName)
          ) {
            imports.push(this.getImportStatement(relativePath, isCjs))
          }
        }

        if (imports.length > 0) {
          chunk.code = `${imports.join('\n')}\n${chunk.code}`
        }
      }
    }
  }
}
