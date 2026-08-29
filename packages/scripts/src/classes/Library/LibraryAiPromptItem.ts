import { PropertiesFile } from '../Properties/PropertiesFile'
import { LibraryAiMcpItem } from './LibraryAiMcpItem'
import { getPackageJson } from '../../functions/getPackageJson'

import {
  UI_DIR_AI_PROMPT_SCREENSHOT,
  UI_FILE_AI_PROMPT_DESCRIPTION,
  UI_FILE_AI_PROMPT_DEVELOPER,
  UI_FILE_AI_PROMPT_INFO,
  UI_FILE_AI_PROMPT_TYPES
} from '../../config'

/**
 * Class representing an item in the AI prompt generation process.
 * Handles reading and aggregating various project-related files (descriptions, info, types, screenshots)
 * to build a context-rich prompt for AI.
 *
 * Класс, представляющий элемент в процессе создания промпта для ИИ.
 * Управляет чтением и агрегацией различных файлов проекта (описания, информация, типы, скриншоты)
 * для создания насыщенного контекстом промпта для ИИ.
 */
export class LibraryAiPromptItem {
  /** Item instance for working with MCP files. / Экземпляр элемента для работы с файлами MCP. */
  protected readonly itemMcp: LibraryAiMcpItem

  /**
   * Constructor for LibraryAiPromptItem.
   *
   * Конструктор для LibraryAiPromptItem.
   * @param dir Path segments to the directory / Сегменты пути к директории
   */
  constructor(
    protected readonly dir: string[] = []
  ) {
    this.itemMcp = new LibraryAiMcpItem(this.dir)
  }

  /**
   * Returns directory path segments.
   *
   * Возвращает сегменты пути к директории.
   * @returns path segments / сегменты пути
   */
  getDir(): string[] {
    return this.dir
  }

  /**
   * Reads and returns the list of MCP resource definitions from ai-mcp-resources.json.
   *
   * Читает и возвращает список определений ресурсов MCP из ai-mcp-resources.json.
   * @returns list of MCP resource items or undefined / список элементов ресурсов MCP или undefined
   */
  getMcp(): Record<string, any>[] | undefined {
    return this.itemMcp.make()
  }

  /**
   * Returns the project name from package.json.
   *
   * Возвращает название проекта из package.json.
   * @returns project name or 'none' / название проекта или 'none'
   */
  getProjectName(): string {
    return getPackageJson(this.dir)?.name ?? 'none'
  }

  /**
   * Checks if any prompt-related files or directories exist.
   *
   * Проверяет, существуют ли какие-либо файлы или директории, связанные с промптами.
   * @returns true if any prompt content is found / true, если найден какой-либо контент для промпта
   */
  isPrompt(): boolean {
    return this.isDescription()
      || this.isInfo()
      || this.isTypes()
      || this.isScreenshot()
      || this.isDeveloper()
      || this.isMcp()
  }

  /**
   * Checks if the description file exists.
   *
   * Проверяет, существует ли файл описания.
   * @returns true if description file exists / true, если файл описания существует
   */
  isDescription(): boolean {
    return PropertiesFile.is(this.getPath(UI_FILE_AI_PROMPT_DESCRIPTION))
  }

  /**
   * Checks if the developer prompt file exists.
   *
   * Проверяет, существует ли файл промпта разработчика.
   * @returns true if developer prompt file exists / true, если файл промпта разработчика существует
   */
  isDeveloper(): boolean {
    return PropertiesFile.is(this.getPath(UI_FILE_AI_PROMPT_DEVELOPER))
  }

  /**
   * Checks if the information file exists.
   *
   * Проверяет, существует ли файл с информацией.
   * @returns true if info file exists / true, если файл информации существует
   */
  isInfo(): boolean {
    return PropertiesFile.is(this.getPath(UI_FILE_AI_PROMPT_INFO))
  }

  /**
   * Checks if the ai-mcp-resources.json file exists.
   *
   * Проверяет, существует ли файл ai-mcp-resources.json.
   * @returns true if ai-mcp-resources.json file exists / true, если файл ai-mcp-resources.json существует
   */
  isMcp(): boolean {
    return this.itemMcp.isMcp()
  }

  /**
   * Checks if the screenshot directory exists.
   *
   * Проверяет, существует ли директория со скриншотами.
   * @returns true if screenshot directory exists / true, если директория скриншотов существует
   */
  isScreenshot(): boolean {
    return PropertiesFile.is(this.getPath(UI_DIR_AI_PROMPT_SCREENSHOT))
  }

  /**
   * Checks if the types file exists.
   *
   * Проверяет, существует ли файл с типами.
   * @returns true if types file exists / true, если файл типов существует
   */
  isTypes(): boolean {
    return PropertiesFile.is(this.getPath(UI_FILE_AI_PROMPT_TYPES))
  }

  /**
   * Gathers all available prompt content and formats it as a single string.
   *
   * Собирает весь доступный контент промпта и форматирует его в виде одной строки.
   * @returns formatted prompt content or undefined / отформатированный контент промпта или undefined
   */
  make(): string | undefined {
    console.log(this.getProjectName())

    const data = [
      this.getDescription(),
      this.getInfo(),
      this.getTypes(),
      this.getScreenshot(),
      this.getDeveloper()
    ].filter(item => item !== undefined) as string[]

    if (data.length > 0) {
      const location = this.getPathString() || '.'

      return `
# ${this.getProjectName()}
## Project location: Root directory
The project is located at: '${location}'.

${data.join('\n\n')}
    `.trim()
    }

    return undefined
  }

  /**
   * Formats and returns the description section for the prompt.
   *
   * Форматирует и возвращает секцию описания для промпта.
   * @returns formatted description or undefined / отформатированное описание или undefined
   * @protected
   */
  protected getDescription(): string | undefined {
    if (this.isDescription()) {
      console.log('-- Description')

      return `
## Package Description & Module Overview
${this.readFile(UI_FILE_AI_PROMPT_DESCRIPTION)}
      `.trim()
    }

    return undefined
  }

  /**
   * Formats and returns the developer prompt section.
   *
   * Форматирует и возвращает секцию промпта для разработчика.
   * @returns formatted developer prompt or undefined / отформатированный промпт разработчика или undefined
   * @protected
   */
  protected getDeveloper(): string | undefined {
    if (this.isDeveloper()) {
      console.log('-- Developer')

      return `
## Developer Rules (Must Read Before Modifying Code)
'${this.getPathString(UI_FILE_AI_PROMPT_DEVELOPER)}'
      `.trim()
    }

    return undefined
  }

  /**
   * Formats and returns the info section for the prompt.
   *
   * Форматирует и возвращает секцию информации для промпта.
   * @returns formatted info or undefined / отформатированная информация или undefined
   * @protected
   */
  protected getInfo(): string | undefined {
    if (this.isInfo()) {
      console.log('-- Info')

      return `
## Package Core Information
${this.readFile(UI_FILE_AI_PROMPT_INFO)}
      `.trim()
    }

    return undefined
  }

  /**
   * Constructs a full path for a file within the item's directory.
   *
   * Создает полный путь к файлу внутри директории элемента.
   * @param dirFile File name / Имя файла
   * @returns path segments / сегменты пути
   * @protected
   */
  protected getPath(dirFile: string): string[] {
    return [...this.dir, dirFile]
  }

  /**
   * Returns the directory path or file path within the directory as a string.
   *
   * Возвращает путь к директории или путь к файлу внутри директории в виде строки.
   * @param dirFile optional file name or subpath / опциональное имя файла или подпуть
   * @returns formatted path string / отформатированная строка пути
   * @protected
   */
  protected getPathString(dirFile?: string): string {
    const base = this.dir.join('/')

    if (dirFile) {
      return base ? `${base}/${dirFile}` : dirFile
    }

    return base
  }

  /**
   * Formats and returns the screenshot section for the prompt.
   *
   * Форматирует и возвращает секцию скриншотов для промпта.
   * @returns formatted screenshot list or undefined / отформатированный список скриншотов или undefined
   * @protected
   */
  protected getScreenshot(): string | undefined {
    const list = this.getScreenshotList()

    if (list) {
      console.log('-- Screenshot')

      const prefix = this.getPathString(UI_DIR_AI_PROMPT_SCREENSHOT)
      const screenshot: string = list.map(item => `- '${prefix}/${item}'`).join('\n')

      return `## Component Visual References (Screenshots)
${screenshot}
      `.trim()
    }

    return undefined
  }

  /**
   * Retrieves the list of files in the screenshot directory.
   *
   * Получает список файлов в директории скриншотов.
   * @returns list of screenshot file names or undefined / список имен файлов скриншотов или undefined
   * @protected
   */
  protected getScreenshotList(): string[] | undefined {
    if (this.isScreenshot()) {
      return PropertiesFile.readDir(this.getPath(UI_DIR_AI_PROMPT_SCREENSHOT))
    }

    return undefined
  }

  /**
   * Formats and returns the types section for the prompt.
   *
   * Форматирует и возвращает секцию типов для промпта.
   * @returns formatted types reference or undefined / отформатированная ссылка на типы или undefined
   * @protected
   */
  protected getTypes(): string | undefined {
    if (this.isTypes()) {
      console.log('-- Types')

      return `
## Package Type Definitions (Must Read in Full When Working with Package)
'${this.getPathString(UI_FILE_AI_PROMPT_TYPES)}'
      `.trim()
    }

    return undefined
  }

  /**
   * Reads content of a file by its name relative to the item's directory.
   *
   * Читает содержимое файла по его имени относительно директории элемента.
   * @param dirFile File name / Имя файла
   * @returns file content / содержимое файла
   * @protected
   */
  protected readFile(dirFile: string): string {
    const file = PropertiesFile.readFileOnly(this.getPath(dirFile))

    if (file) {
      if (this.dir.length > 0) {
        return file.replace(/([ '"`]|^)\.\//g, `$1${this.getPathString()}/`)
      }

      return file
    }

    return ''
  }
}
