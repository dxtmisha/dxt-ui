import fs from 'node:fs'
import path from 'node:path'

/** Name of the default component SCSS style file / Имя файла стилей SCSS компонента по умолчанию */
export const FILE_STYLE = 'styleToken.scss'

/** Name of the default component style file / Имя файла стилей компонента по умолчанию */
export const FILE_STYLE_TOKEN = 'styleToken.css'

/** Regular expression for finding wiki-related files / Регулярное выражение для поиска файлов wiki */
const REGEX_WIKI_FILES = /([Aa]iWiki|\.wiki\.|^wiki\.|^wikiData\.)/

/**
 * Class for creating a Vite plugin that handles component post-build operations (injecting styles and removing wiki files).
 *
 * Класс для создания плагина Vite, который обрабатывает операции после сборки компонентов (внедрение стилей и удаление файлов wiki).
 */
export class VitePluginComponents {
  /** Output directory path / Путь к выходной директории */
  outputDirectory = 'dist'

  /**
   * Initializes and returns the Vite plugin configuration.
   *
   * Инициализирует и возвращает конфигурацию плагина Vite.
   * @returns {import('vite').Plugin} Vite plugin instance / экземпляр плагина Vite
   */
  init() {
    return {
      name: 'vite-plugin-components',
      enforce: 'post',
      configResolved: (config) => {
        this.outputDirectory = config.build.outDir || 'dist'
      },
      generateBundle: (options, bundle) => {
        this.generateBundle(options, bundle)
      },
      closeBundle: () => {
        // this.removeWikiFiles(this.outputDirectory)
      }
    }
  }

  /**
   * Processes generated bundle chunks and injects style imports for components with styles.
   *
   * Обрабатывает чанки сгенерированного бандла и внедряет импорт стилей для компонентов со стилями.
   * @param {import('rollup').NormalizedOutputOptions} _options output options / параметры вывода
   * @param {import('rollup').OutputBundle} bundle output bundle / бандл вывода
   */
  generateBundle(_options, bundle) {
    for (const [fileName, chunk] of Object.entries(bundle)) {
      if (
        this.isComponentIndex(fileName)
        && 'code' in chunk
        && !chunk.code.includes(FILE_STYLE_TOKEN)
        && this.isStyle(fileName, bundle)
      ) {
        chunk.code = `import './${FILE_STYLE_TOKEN}';\n${chunk.code}`
      }
    }
  }

  /**
   * Checks if a style file exists in the bundle.
   *
   * Проверяет наличие файла стилей в бандле.
   * @param {string} [url] file path or URL / путь к файлу или URL
   * @param {import('rollup').OutputBundle} [bundle] output bundle / бандл вывода
   * @returns {boolean} check result / результат проверки
   */
  isStyle(url, bundle) {
    if (!url || !bundle) {
      return false
    }

    const stylePath = url.replace(/index\.[^/\\]+$/, FILE_STYLE_TOKEN)

    return stylePath in bundle
  }

  /**
   * Checks if the file is a component index file.
   *
   * Проверяет, является ли файл индексным файлом компонента.
   * @param {string} fileName file name to check / имя файла для проверки
   * @returns {boolean} check result / результат проверки
   */
  isComponentIndex(fileName) {
    const normalized = fileName.replace(/\\/g, '/')

    return normalized.includes('components/Ui/')
      && normalized.endsWith('/index.js')
  }

  /**
   * Removes wiki-related generated files from directory recursively.
   *
   * Рекурсивно удаляет сгенерированные файлы wiki из директории.
   * @param {string} directoryPath directory path to clean / путь к директории для очистки
   */
  removeWikiFiles(directoryPath) {
    if (!fs.existsSync(directoryPath)) {
      return
    }

    const entries = fs.readdirSync(directoryPath, { withFileTypes: true })

    for (const entry of entries) {
      const entryPath = path.join(directoryPath, entry.name)

      if (entry.isDirectory()) {
        if (entry.name.toLowerCase() === 'wiki') {
          fs.rmSync(entryPath, { recursive: true, force: true })
        } else {
          this.removeWikiFiles(entryPath)
        }
      } else if (
        entry.isFile()
        && REGEX_WIKI_FILES.test(entry.name)
      ) {
        fs.rmSync(entryPath, { force: true })
      }
    }
  }
}
