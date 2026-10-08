import path from 'node:path'

/**
 * Class for creating a Vite plugin that handles post-build operations by injecting associated CSS styles into corresponding JavaScript chunks/files.
 *
 * Класс для создания плагина Vite, который обрабатывает операции после сборки путем внедрения ассоциированных стилей CSS в соответствующие JS-чанки/файлы.
 */
export class VitePluginStyle {
  /** Output directory path / Путь к выходной директории */
  outputDirectory = 'dist'

  /**
   * Checks if the file should be processed by the plugin.
   *
   * Проверяет, должен ли файл обрабатываться плагином.
   * @param {string} fileName file name to check / имя файла для проверки
   * @returns {boolean} check result / результат проверки
   */
  isTarget(fileName) {
    return fileName.endsWith('.js')
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
    const list = []

    if (
      chunk.viteMetadata?.importedCss
      && chunk.viteMetadata.importedCss.size > 0
    ) {
      for (const cssFileName of chunk.viteMetadata.importedCss) {
        if (cssFileName in bundle) {
          list.push(cssFileName)
        }
      }
    }

    return list
  }

  /**
   * Returns import statement for the style file.
   *
   * Возвращает инструкцию import для файла стилей.
   * @param {string} relativePath relative path to the CSS file / относительный путь к CSS файлу
   * @returns {string} import statement / инструкция импорта
   */
  getImportStatement(relativePath) {
    return `import '${relativePath}';`
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
      name: 'vite-ui-plugin-style',
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
   * @param {import('rollup').NormalizedOutputOptions} _options output options / параметры вывода
   * @param {import('rollup').OutputBundle} bundle output bundle / бандл вывода
   */
  processBundle(_options, bundle) {
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
            imports.push(this.getImportStatement(relativePath))
          }
        }

        if (imports.length > 0) {
          chunk.code = `${imports.join('\n')}\n${chunk.code}`
        }
      }
    }
  }
}
