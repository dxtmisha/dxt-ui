import {
  UI_DIR_PACKAGES,
  UI_FILE_AI_PROMPT_INSTRUCTION,
  UI_FILE_AI_PROMPT_PROMPT,
  UI_MODULES
} from '../../config'

import { PropertiesFile } from '../Properties/PropertiesFile'
import { LibraryAiPromptItem } from './LibraryAiPromptItem'

const LIBRARY_AI_PROMPT_LIST_DIRS = [
  UI_MODULES,
  UI_DIR_PACKAGES
]

/**
 * Class for generating a consolidated AI prompt for the library.
 * It scans directories for prompt items and instructions to create a final prompt file.
 *
 * Класс для генерации консолидированного промпта ИИ для библиотеки.
 * Сканирует директории на наличие элементов промпта и инструкций для создания итогового файла промпта.
 */
export class LibraryAiPrompt {
  /** List of directories to scan. / Список директорий для сканирования. */
  protected readonly dirs: string[]

  /** Regular expression to identify files in directories. / Регулярное выражение для идентификации файлов в директориях. */
  protected readonly exFileOnDirs = /^.+\.[^.]{2,4}$/
  /** Regular expression to exclude hidden files/directories. / Регулярное выражение для исключения скрытых файлов/директорий. */
  protected readonly exNotRead = /^\./

  /**
   * Constructor for LibraryAiPrompt.
   *
   * Конструктор для LibraryAiPrompt.
   * @param dirs Additional directories to scan / Дополнительные директории для сканирования
   */
  constructor(
    dirs: string[] = []
  ) {
    this.dirs = [
      ...LIBRARY_AI_PROMPT_LIST_DIRS,
      ...dirs
    ]
  }

  /**
   * Main method to generate the AI prompt file.
   *
   * Основной метод для генерации файла промпта ИИ.
   */
  make(): void {
    const list = this.getList()
    const prompts = [
      `
# System role: AI assistant for project analysis
This file contains the consolidated documentation and essential prompts for the current project.

## Mandatory instructions
It is critically important to strictly follow all the prompts and instructions listed below. You must adhere to these guidelines without exception to ensure accurate analysis and project development.
      `.trim()
    ]

    if (list.length > 0) {
      list.forEach((item) => {
        const prompt = item.make()

        if (prompt) {
          prompts.push(prompt)
        }
      })
    }

    const instruction = this.getInstruction()

    if (instruction) {
      prompts.push(instruction)
    }

    this.write(prompts)
  }

  /**
   * Checks if there are any files in the provided list.
   *
   * Проверяет, есть ли файлы в предоставленном списке.
   * @param dirs list of file/directory names / список имен файлов/директорий
   * @returns true if any file is found / true, если найден хотя бы один файл
   * @protected
   */
  protected isFileOnDirs(dirs: string[]): boolean {
    return dirs.some(path => this.exFileOnDirs.test(path))
  }

  /**
   * Retrieves high-priority instructions from a specific file.
   *
   * Получает высокоприоритетные инструкции из специального файла.
   * @returns formatted instructions or undefined / отформатированные инструкции или undefined
   * @protected
   */
  protected getInstruction(): string | undefined {
    if (PropertiesFile.is(UI_FILE_AI_PROMPT_INSTRUCTION)) {
      return `
## High-priority instructions
The rules and instructions provided below have the highest priority. These directives supersede any previous instructions or general rules in case of conflict or contradiction.
${PropertiesFile.readFileOnly(UI_FILE_AI_PROMPT_INSTRUCTION)}
      `.trim()
    }
  }

  /**
   * Recursively scans directories to collect LibraryAiPromptItem instances.
   *
   * Рекурсивно сканирует директории для сбора экземпляров LibraryAiPromptItem.
   * @param dirs directories to scan / директории для сканирования
   * @param path current path segments / текущие сегменты пути
   * @param limit recursion depth limit / лимит глубины рекурсии
   * @returns list of prompt items / список элементов промпта
   * @protected
   */
  protected getList(
    dirs: string[] = this.dirs,
    path: string[] = [],
    limit = 4
  ): LibraryAiPromptItem[] {
    if (limit <= 0) {
      return []
    }

    const items: LibraryAiPromptItem[] = []

    for (const dir of dirs) {
      if (this.exNotRead.test(dir)) {
        continue
      }

      const pathDir = [...path, dir]
      const list = PropertiesFile.readDir(pathDir)

      if (
        !this.isFileOnDirs(list)
        || dir === UI_MODULES
      ) {
        items.push(...this.getList(
          list,
          pathDir,
          limit - 1
        ))
      } else {
        const promptItem = new LibraryAiPromptItem(pathDir)

        if (promptItem.isPrompt()) {
          items.push(promptItem)
        }
      }
    }

    return items
  }

  /**
   * Writes the collected prompts to a file.
   *
   * Записывает собранные промпты в файл.
   * @param prompts list of prompt strings / список строк промптов
   * @returns this instance / этот экземпляр
   * @protected
   */
  protected write(prompts: string[]): this {
    PropertiesFile.writeByPath(
      UI_FILE_AI_PROMPT_PROMPT,
      prompts.join(`

---

    `)
    )

    return this
  }
}
