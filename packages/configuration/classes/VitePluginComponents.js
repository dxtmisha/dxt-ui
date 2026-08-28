import fs from 'node:fs'
import path from 'node:path'

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
      renderChunk: (code, chunk) => {
        return this.renderChunk(code, chunk)
      },
      closeBundle: () => {
        this.removeWikiFiles(this.outputDirectory)
      }
    }
  }

  /**
   * Processes a code chunk and injects the style import if it matches a component index.
   *
   * Обрабатывает чанк кода и внедряет импорт стилей, если он соответствует индексу компонента.
   * @param {string} code source code of the chunk / исходный код чанка
   * @param {import('rollup').RenderedChunk} chunk rendered chunk information / информация об отрендренном чанке
   * @returns {{ code: string, map: null } | null} transformed code or null / трансформированный код или null
   */
  renderChunk(code, chunk) {
    if (
      this.isComponentIndex(chunk.fileName)
      && !code.includes(FILE_STYLE_TOKEN)
    ) {
      return {
        code: `import './${FILE_STYLE_TOKEN}';\n${code}`,
        map: null
      }
    }

    return null
  }

  /**
   * Checks if the file is a component index file.
   *
   * Проверяет, является ли файл индексным файлом компонента.
   * @param {string} fileName file name to check / имя файла для проверки
   * @returns {boolean} check result / результат проверки
   */
  isComponentIndex(fileName) {
    return fileName.includes('components/Ui/')
      && fileName.endsWith('/index.js')
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
