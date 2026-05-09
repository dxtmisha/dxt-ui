import { getObjectNoUndefined } from '@dxtmisha/functional-basic'
import { PropertiesFile } from '../Properties/PropertiesFile'

import { getPackageJson } from '../../functions/getPackageJson'

import {
  UI_DIR_AI_PROMPT_SCREENSHOT,
  UI_FILE_AI_PROMPT_DESCRIPTION,
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
  /** Cached partition of package.json. / Кэш содержимого файла package.json. */
  protected packageJson?: Record<string, any>

  /**
   * Constructor for LibraryAiPromptItem.
   *
   * Конструктор для LibraryAiPromptItem.
   * @param dir Path segments to the directory / Сегменты пути к директории
   */
  constructor(
    protected readonly dir: string[] = []
  ) {
  }

  /**
   * Returns the project name from package.json.
   *
   * Возвращает название проекта из package.json.
   * @returns project name or 'none' / название проекта или 'none'
   */
  getProjectName(): string {
    return this.getPackageJson().name ?? 'none'
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
   * Checks if the information file exists.
   *
   * Проверяет, существует ли файл с информацией.
   * @returns true if info file exists / true, если файл информации существует
   */
  isInfo(): boolean {
    return PropertiesFile.is(this.getPath(UI_FILE_AI_PROMPT_INFO))
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
   * Checks if the screenshot directory exists.
   *
   * Проверяет, существует ли директория со скриншотами.
   * @returns true if screenshot directory exists / true, если директория скриншотов существует
   */
  isScreenshot(): boolean {
    return PropertiesFile.isDir(this.getPath(UI_DIR_AI_PROMPT_SCREENSHOT))
  }

  /**
   * Gathers all available prompt content and formats it as a single string.
   *
   * Собирает весь доступный контент промпта и форматирует его в виде одной строки.
   * @returns formatted prompt content or undefined / отформатированный контент промпта или undefined
   */
  make(): string | undefined {
    const data = getObjectNoUndefined([
      this.getDescription(),
      this.getInfo(),
      this.getTypes(),
      this.getScreenshot()
    ])

    if (data.length > 0) {
      return `
# ${this.getProjectName()}
${data.join('\n\n')}
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
   * Retrieves and caches package.json content.
   *
   * Получает и кэширует содержимое файла package.json.
   * @returns package.json object / объект package.json
   * @protected
   */
  protected getPackageJson(): Record<string, any> {
    if (!this.packageJson) {
      this.packageJson = getPackageJson() ?? {}
    }

    return this.packageJson
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
    return PropertiesFile.readFileOnly(this.getPath(dirFile)) ?? ''
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
      return `
## Project context: Investigation required
${this.readFile(UI_FILE_AI_PROMPT_DESCRIPTION)}
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
      return `
## Project information: Core overview
This section contains essential information and the core overview of the project. Review this to understand the fundamental architecture and key features.
${this.readFile(UI_FILE_AI_PROMPT_INFO)}
      `.trim()
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
      return `
## Project types: Essential for analysis
This file contains the complete type definitions for the project. It is mandatory to study this file to perform an accurate analysis of the project structure and logic:
'./${UI_FILE_AI_PROMPT_TYPES}'
      `.trim()
    }

    return undefined
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
      const screenshot: string = list.map(item => `- './${UI_DIR_AI_PROMPT_SCREENSHOT}${item}'`).join('\n')

      return `## Project screenshots: Visual reference
The project includes the following screenshots that provide a visual reference for the project's design and functionality:
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
}
