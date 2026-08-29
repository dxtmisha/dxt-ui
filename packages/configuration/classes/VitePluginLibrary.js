/** Name of the default library style file / Имя файла стилей библиотеки по умолчанию */
export const FILE_STYLE = 'style.css'

/** Name of the default library file / Имя файла библиотеки по умолчанию */
export const FILE_LIBRARY = 'library.js'

/**
 * Class for creating a Vite plugin that handles library post-build operations (injecting styles into the library bundle).
 *
 * Класс для создания плагина Vite, который обрабатывает операции после сборки библиотеки (внедрение стилей в бандл библиотеки).
 */
export class VitePluginLibrary {
  /** Name of the output CSS file / Имя выходного CSS файла */
  fileCssName = FILE_STYLE

  /** Target library file name(s) / Имя(имена) целевых файлов библиотеки */
  fileLibraryName = FILE_LIBRARY

  /** Output directory path / Путь к выходной директории */
  outputDirectory = 'dist'

  /**
   * Constructor for VitePluginLibrary.
   *
   * Конструктор для VitePluginLibrary.
   * @param {string} [fileCssName] name of the output CSS file / имя выходного CSS файла
   * @param {string|string[]|RegExp|((fileName: string) => boolean)} [fileLibraryName] target library file name(s) / имя(имена) целевых файлов библиотеки
   */
  constructor(
    fileCssName = FILE_STYLE,
    fileLibraryName = FILE_LIBRARY
  ) {
    if (fileCssName !== undefined) {
      this.fileCssName = fileCssName
    }

    if (fileLibraryName !== undefined) {
      this.fileLibraryName = fileLibraryName
    }
  }

  /**
   * Initializes and returns the Vite plugin configuration.
   *
   * Инициализирует и возвращает конфигурацию плагина Vite.
   * @returns {import('vite').Plugin} Vite plugin instance / экземпляр плагина Vite
   */
  init() {
    return {
      name: 'vite-plugin-library',
      enforce: 'post',
      configResolved: (config) => {
        this.outputDirectory = config.build.outDir || 'dist'
      },
      renderChunk: (code, chunk) => {
        return this.renderChunk(code, chunk)
      }
    }
  }

  /**
   * Processes a code chunk and injects the style import if it matches a library entry.
   *
   * Обрабатывает чанк кода и внедряет импорт стилей, если он соответствует точке входа библиотеки.
   * @param {string} code source code of the chunk / исходный код чанка
   * @param {import('rollup').RenderedChunk} chunk rendered chunk information / информация об отрендренном чанке
   * @returns {{ code: string, map: null } | null} transformed code or null / трансформированный код или null
   */
  renderChunk(code, chunk) {
    if (
      this.fileCssName
      && this.isLibraryIndex(chunk.fileName)
      && !code.includes(this.fileCssName)
    ) {
      return {
        code: `import './${this.fileCssName}';\n${code}`,
        map: null
      }
    }

    return null
  }

  /**
   * Checks if the file is a library index file.
   *
   * Проверяет, является ли файл индексным файлом библиотеки.
   * @param {string} fileName file name to check / имя файла для проверки
   * @returns {boolean} check result / результат проверки
   */
  isLibraryIndex(fileName) {
    if (typeof this.fileLibraryName === 'function') {
      return this.fileLibraryName(fileName)
    }

    if (this.fileLibraryName instanceof RegExp) {
      return this.fileLibraryName.test(fileName)
    }

    const list = Array.isArray(this.fileLibraryName)
      ? this.fileLibraryName
      : [this.fileLibraryName || FILE_LIBRARY]

    return list.some(item => fileName === item || fileName.endsWith(`/${item}`))
  }
}
