import {
  UI_DIR_AI_TYPES,
  UI_FILE_AI_MCP_ALL,
  UI_FILE_AI_MCP_ALL_TS,
  UI_FILE_AI_PROMPT_INSTRUCTION,
  UI_FILE_AI_PROMPT_PROMPT,
  UI_MODULES
} from '../../config'
import { GitIgnore } from '../Git/GitIgnore'

import { PropertiesConfig } from '../Properties/PropertiesConfig'
import { PropertiesFile } from '../Properties/PropertiesFile'
import { LibraryAiMcp } from './LibraryAiMcp'
import { LibraryAiPromptItem } from './LibraryAiPromptItem'

import vuePromptText from '../../media/templates/prompts/aiCodeVuePrompt.en.md?raw'
import globalPromptText from '../../media/templates/prompts/aiCodeGlobalPrompt.en.md?raw'

const LIBRARY_AI_PROMPT_LIST_DIRS = [
  UI_MODULES
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
   * @param isMcp Flag indicating whether to generate MCP configuration file / Флаг, указывающий, нужно ли генерировать конфигурационный файл MCP
   */
  constructor(
    dirs: string[] = [],
    protected readonly isMcp: boolean = false
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
    console.log('Generating AI prompt...')

    const list = this.getList()
    const prompts = [
      `
# System Role: AI Coding Assistant & Project Analyzer
Consolidated documentation, architectural guidelines, and mandatory rules for the project.
      `.trim(),
      this.getGlobalPrompt(),
      this.getVuePrompt()
    ]
    const mcpData: Record<string, any>[] = []

    if (list.length > 0) {
      list.forEach((item) => {
        const prompt = item.make()

        if (prompt) {
          prompts.push(prompt)
        }

        if (this.isMcp) {
          const mcp = item.getMcp()

          if (mcp) {
            mcpData.push(...mcp)
          }
        }
      })
    }

    const instruction = this.getInstruction()

    if (instruction) {
      prompts.push(instruction)
    }

    prompts.push(this.getAuditPrompt())

    this.write(prompts)

    if (this.isMcp) {
      this.writeMcp(mcpData)
      new LibraryAiMcp().make()
    }

    this.initGitIgnore()

    console.log('end')
  }

  /**
   * Checks whether the library should be excluded from the ai-prompt.md file based on configuration.
   *
   * Проверяет, должна ли библиотека быть исключена из файла ai-prompt.md на основе конфигурации.
   * @param item prompt item to check / элемент промпта для проверки
   * @returns true if item should be excluded / true, если элемент должен быть исключен
   * @protected
   */
  protected isExclude(item: LibraryAiPromptItem): boolean {
    const exclude = PropertiesConfig.getPromptExclude()

    if (!exclude || exclude.length === 0) {
      return false
    }

    return exclude.includes(item.getProjectName())
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
   * Retrieves the final self-audit prompt for AI code verification.
   *
   * Получает итоговый промпт самоаудита для проверки кода ИИ.
   * @returns formatted audit prompt / отформатированный промпт аудита
   * @protected
   */
  protected getAuditPrompt(): string {
    return `
## Mandatory Final Self-Audit (CRITICAL GUARD & STRICT COMPLIANCE)

🔴 **STOP! BEFORE DECLARING WORK COMPLETE OR ENDING YOUR TURN, YOU MUST AUDIT ALL CODE!** 🔴

1. **Mandatory Full Re-Study**: Inspect EVERY single line of code created or modified in this task.
2. **Rule-by-Rule Compliance Check**: Cross-reference all code changes against ALL architectural conventions, coding standards, JSDoc/TSDoc guidelines, and package rules defined in \`ai-prompt.md\`.
3. **Zero Ignored Rules**: Ensure NO project rule, typing constraint, or code structure guideline was bypassed, forgotten, or ignored.
4. **Self-Correction**: If any discrepancy, missing typing, bad JSDoc formatting, or rule violation is found during this audit, fix it IMMEDIATELY before concluding your turn.
    `.trim()
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
## High-Priority Directives (Overrides Base Rules)
${PropertiesFile.readFileOnly(UI_FILE_AI_PROMPT_INSTRUCTION)}
      `.trim()
    }
  }

  /**
   * Retrieves the Vue component implementation prompt.
   *
   * Получает промпт по реализации Vue-компонентов.
   * @returns formatted Vue prompt or undefined / отформатированный промпт Vue или undefined
   * @protected
   */
  protected getVuePrompt(): string {
    return `
## Vue Component Implementation Rules
${vuePromptText}
    `.trim()
  }

  /**
   * Retrieves the global code implementation prompt.
   *
   * Получает глобальный промпт по реализации кода.
   * @returns formatted global prompt or undefined / отформатированный глобальный промпт или undefined
   * @protected
   */
  protected getGlobalPrompt(): string {
    return `
## Global Code Implementation Rules
${globalPromptText}
    `.trim()
  }

  /**
   * Recursively scans directories to collect LibraryAiPromptItem instances.
   *
   * Рекурсивно сканирует директории для сбора экземпляров LibraryAiPromptItem.
   * @param dirs directories to scan / директории для сканирования
   * @param path current path segments / текущие сегменты пути
   * @param limit recursion depth limit (defaults to promptScanDepth config) / лимит глубины рекурсии (по умолчанию из конфигурации promptScanDepth)
   * @returns list of prompt items / список элементов промпта
   * @protected
   */
  protected getList(
    dirs: string[] = this.dirs,
    path: string[] = [],
    limit = PropertiesConfig.getPromptScanDepth()
  ): LibraryAiPromptItem[] {
    if (limit <= 0) {
      return []
    }

    const items: LibraryAiPromptItem[] = []

    if (path.length === 0) {
      const rootItem = this.getRootItem()

      if (rootItem && !this.isExclude(rootItem)) {
        items.push(rootItem)
      }
    }

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

        if (!this.isExclude(promptItem) && promptItem.isPrompt()) {
          items.push(promptItem)
        }
      }
    }

    return items
  }

  /**
   * Retrieves the prompt item for the current repository root if it contains prompt data.
   *
   * Получает элемент промпта для корня текущего репозитория, если он содержит данные промпта.
   * @returns root prompt item or undefined / элемент промпта корня или undefined
   * @protected
   */
  protected getRootItem(): LibraryAiPromptItem | undefined {
    const item = new LibraryAiPromptItem([])

    if (item.isPrompt()) {
      return item
    }

    return undefined
  }

  /**
   * Adds all files and directories generated by this script to .gitignore.
   *
   * Добавляет все файлы и директории, сгенерированные этим скриптом, в .gitignore.
   * @protected
   */
  protected initGitIgnore(): void {
    const paths = [
      UI_FILE_AI_PROMPT_PROMPT,
      UI_DIR_AI_TYPES
    ]

    if (this.isMcp) {
      paths.push(
        UI_FILE_AI_MCP_ALL,
        UI_FILE_AI_MCP_ALL_TS
      )
    }

    new GitIgnore(paths, 'AI Resources').make()
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

  /**
   * Writes the collected MCP definitions to a file.
   *
   * Записывает собранные определения MCP в файл.
   * @param mcpData list of MCP resource definitions / список определений ресурсов MCP
   * @returns this instance / этот экземпляр
   * @protected
   */
  protected writeMcp(mcpData: Record<string, any>[]): this {
    PropertiesFile.writeByPath(
      UI_FILE_AI_MCP_ALL,
      mcpData
    )

    return this
  }
}
