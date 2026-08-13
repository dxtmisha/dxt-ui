import { createHash } from 'node:crypto'
import { forEach, isFilled } from '@dxtmisha/functional-basic'
import { getPackageJson } from '../../functions/getPackageJson'
import { PropertiesFile } from '../Properties/PropertiesFile'
import { DesignTypesAi } from './DesignTypesAi'

import type { DesignTypesItem, DesignTypesList } from '../../types/designTypes'

import { UI_DIR_AI_TYPES_LIST, UI_DIR_CONSTRUCTOR, UI_FILE_AI_TYPES } from '../../config'

/**
 * Engine for scanning declaration files, MD5 change tracking, and generating AI-optimized TypeScript type definitions.
 *
 * Движок для сканирования файлов деклараций, отслеживания изменений по MD5 и генерации оптимизированных ИИ определений типов TypeScript.
 */
export class DesignTypesMake {
  /** Cached combined full type definitions content / Кэшированный объединенный полный контент определений типов */
  protected fullContent?: string

  /** Cached combined JS content / Кэшированный объединенный JS контент */
  protected fullJsContent?: string

  /** Cached list of filtered type definition files / Кэшированный список отфильтрованных файлов определений типов */
  protected listByFilter?: DesignTypesList

  /** Cached list of filtered JavaScript files / Кэшированный список отфильтрованных JavaScript файлов */
  protected listByFilterJs?: DesignTypesList

  /**
   * Constructor for DesignTypesMake.
   *
   * Конструктор для DesignTypesMake.
   * @param ai instance of DesignTypesAi for AI optimization and directory configuration / экземпляр DesignTypesAi для ИИ оптимизации и конфигурации директории
   */
  constructor(
    protected readonly ai: DesignTypesAi
  ) { }

  /**
   * Reads processed type definition files, combines them into a single string, and cleans the content.
   *
   * Читает обработанные файлы определений типов, объединяет их в одну строку и очищает контент.
   * @returns combined and cleaned full type definitions content / объединенное и очищенное содержимое полных определений типов
   */
  getFullContent(): string {
    if (this.fullContent === undefined) {
      const files = this.getListByFilter()
      const processedFiles = this.getListAi(files)

      this.fullContent = this.cleanContent(this.toOneFile(processedFiles))
    }

    return this.fullContent
  }

  /**
   * Gets the combined JS content for all filtered JavaScript files.
   *
   * Получает объединенный JS контент для всех отфильтрованных JavaScript файлов.
   * @returns combined JS content string / строка объединенного JS контента
   */
  getFullJsContent(): string {
    if (this.fullJsContent === undefined) {
      this.fullJsContent = this.toOneFile(this.getListByFilterJs())
    }

    return this.fullJsContent
  }

  /**
   * Main method to execute the type definition generation process and save ai-types.md.
   *
   * Основной метод для выполнения процесса генерации определений типов и сохранения ai-types.md.
   * @returns current instance / текущий экземпляр
   */
  async make(): Promise<this> {
    const files = this.getListByFilter()

    const fullJsContent = this.getFullJsContent()
    const updatedFiles = this.saveList(files)

    await this.saveListAi(updatedFiles, fullJsContent)

    return this.makeSave()
  }

  /**
   * Generates full types content and saves it to ai-types.md.
   *
   * Генерирует полный контент типов и сохраняет его в ai-types.md.
   * @returns current instance / текущий экземпляр
   */
  makeSave(): this {
    const fullContent = this.getFullContent()

    this.save(fullContent)

    return this
  }

  /**
   * Checks if the content contains type definitions.
   *
   * Проверяет, содержит ли контент определения типов.
   * @param content file content / содержимое файла
   */
  protected isContent(content?: string): content is string {
    return Boolean(
      content
      && content.includes('export')
    )
  }

  /**
   * Checks if the file is a valid declaration file.
   *
   * Проверяет, является ли файл валидным файлом декларации.
   * @param file file name / имя файла
   */
  protected isFile(file: string): boolean {
    return file.endsWith('.d.ts')
      && !file.endsWith('.vue.d.ts')
      && !file.endsWith('wiki.d.ts')
      && !file.endsWith('wikiData.d.ts')
      && (
        !file.includes(`${UI_DIR_CONSTRUCTOR}/`)
        || file.endsWith('/basicTypes.d.ts')
        || file.endsWith('/types.d.ts')
        || file.endsWith('/props.d.ts')
      )
  }

  /**
   * Checks if the file is a valid JavaScript or TypeScript file.
   *
   * Проверяет, является ли файл валидным JavaScript или TypeScript файлом.
   * @param file file name / имя файла
   */
  protected isFileJs(file: string): boolean {
    return file.endsWith('.js')
  }

  /**
   * Reads the directory recursively.
   *
   * Читает директорию рекурсивно.
   */
  protected getList() {
    return PropertiesFile.readDirRecursive(this.ai.getDirArray())
  }

  /**
   * Gets a list of type definition files with cleaned content read from the AI types list directory.
   *
   * Получает список файлов определений типов с очищенным содержимым, прочитанным из директории списка ИИ типов.
   * @param files list of type definition files / список файлов определений типов
   * @returns list of type definition files with cleaned AI content / список файлов определений типов с очищенным ИИ содержимым
   */
  protected getListAi(files: DesignTypesList): DesignTypesList {
    return forEach(files, (item) => {
      const raw = PropertiesFile.readFileOnly([UI_DIR_AI_TYPES_LIST, item.path])
      const content = raw ? raw.replace(/^\/\/ md5:[^\n]*\n?/, '') : item.content

      return {
        ...item,
        content
      }
    }) as DesignTypesList
  }

  /**
   * Gets a list of files filtered by a provided checker function.
   *
   * Получает список файлов, отфильтрованный переданной функцией проверки.
   * @param checkFile function to check if the file matches criteria / функция проверки соответствия файла критериям
   */
  protected getListBy(checkFile: (file: string) => boolean): DesignTypesList {
    return forEach(
      this.getList(),
      (file) => {
        if (checkFile(file)) {
          const content = this.readFile(file)

          if (this.isContent(content)) {
            return {
              path: file,
              content,
              md5: this.getMd5(content)
            }
          }
        }

        return undefined
      }
    ) as DesignTypesList
  }

  /**
   * Gets a list of files filtered by criteria.
   *
   * Получает список файлов, отфильтрованный по критериям.
   * @returns list of filtered type definition files / список отфильтрованных файлов определений типов
   */
  protected getListByFilter(): DesignTypesList {
    if (this.listByFilter === undefined) {
      this.listByFilter = this.getListBy(file => this.isFile(file))
    }

    return this.listByFilter
  }

  /**
   * Gets a list of JS files filtered by criteria.
   *
   * Получает список JS файлов, отфильтрованный по критериям.
   * @returns list of filtered JavaScript files / список отфильтрованных JavaScript файлов
   */
  protected getListByFilterJs(): DesignTypesList {
    if (this.listByFilterJs === undefined) {
      this.listByFilterJs = this.getListBy(file => this.isFileJs(file))
    }

    return this.listByFilterJs
  }

  /**
   * Generates MD5 hash for the given content.
   *
   * Генерирует MD5 хэш для переданного содержимого.
   * @param content file or text content / содержимое файла или текста
   * @returns MD5 hash string / MD5 хэш строка
   */
  protected getMd5(content: string): string {
    return createHash('md5').update(content.trim()).digest('hex')
  }

  /**
   * Generates the MD5 header string for a type definition file.
   *
   * Генерирует строку заголовка MD5 для файла определений типов.
   * @param md5 MD5 hash string / строка MD5 хэша
   * @param isProcessed flag indicating if file is AI-processed / флаг, указывающий, обработан ли файл ИИ
   * @returns formatted MD5 header string / отформатированная строка заголовка MD5
   */
  protected getMd5Header(md5?: string, isProcessed: boolean = false): string {
    const status = isProcessed ? ' true' : ''

    return `// md5:${md5 ?? 'none'}${status}`
  }

  /**
   * Returns the full path segments for a file.
   *
   * Возвращает сегменты полного пути для файла.
   * @param file file name / имя файла
   */
  protected getPath(file: string): string[] {
    return [...this.ai.getDirArray(), file]
  }

  /**
   * Cleans up the content by removing imports, local exports, and empty lines.
   *
   * Очищает контент, удаляя импорты, локальные экспорты и пустые строки.
   * @param content content to clean / контент для очистки
   */
  protected cleanContent(content: string): string {
    return content
      .replace(/^import\s+(?:{[^}]+}|[^{]+)\s+from\s+['"]\.[^'"]+['"];?/gm, '')
      .replace(/^import\s+['"]\.[^'"]+['"];?/gm, '')
      .replace(/^export\s+(?:\*|{[^}]+})\s+from\s+['"]\.[^'"]+['"];?/gm, '')
      .replace(/^\s*(?:private|protected)\s+[^({]+;/gm, '')
      .replace(/^\s*\/\/.*$/gm, '')
      .replace(/^\s*[\r\n]/gm, '')
  }

  /**
   * Reads the content of a file.
   *
   * Читает содержимое файла.
   * @param path file path / путь к файлу
   */
  protected readFile(path: string): string | undefined {
    return PropertiesFile.readFileOnly(this.getPath(path))
  }

  /**
   * Saves the generated content to a file.
   *
   * Сохраняет сгенерированный контент в файл.
   * @param content content to save / контент для сохранения
   */
  protected save(content: string) {
    const packageJson = getPackageJson()

    if (packageJson) {
      const versionStr = packageJson.version ? ` (v${packageJson.version})` : ''
      PropertiesFile.writeByPath(
        UI_FILE_AI_TYPES,
        [
          `All these methods are in the ${packageJson.name}${versionStr} library.`,
          '',
          content
        ].join('\n')
      )
    }
  }

  /**
   * Saves a type definition file to the ai-types-list directory with an MD5 header.
   *
   * Сохраняет файл определений типов в директорию ai-types-list с заголовком MD5.
   * @param item type definition file item / элемент файла определений типов
   * @param isProcessed flag indicating if file is AI-processed / флаг, указывающий, обработан ли файл ИИ
   */
  protected saveFile(item: DesignTypesItem, isProcessed: boolean = false) {
    PropertiesFile.writeByPath(
      [UI_DIR_AI_TYPES_LIST, item.path],
      `${this.getMd5Header(item.md5, isProcessed)}\n${item.content}`
    )
  }

  /**
   * Saves copies of type definition files to the ai-types-list directory with an MD5 header.
   * Returns files that are new, modified, or not yet marked as AI-processed.
   *
   * Сохраняет копии файлов определений типов в директорию ai-types-list с заголовком MD5.
   * Возвращает файлы, которые являются новыми, измененными или еще не отмеченными как обработанные ИИ.
   * @param files list of type definition files / список файлов определений типов
   * @returns list of updated or unprocessed files / список обновленных или необработанных файлов
   */
  protected saveList(files: DesignTypesList): DesignTypesList {
    return forEach(
      files,
      (item) => {
        const targetPath = [UI_DIR_AI_TYPES_LIST, item.path]
        const oldContent = PropertiesFile.readFileOnly(targetPath)

        if (isFilled(oldContent)) {
          if (
            !oldContent.startsWith(this.getMd5Header(item.md5))
          ) {
            this.saveFile(item)

            return item
          }

          if (
            oldContent.startsWith(this.getMd5Header(item.md5, true))
          ) {
            return item
          }
        }

        return undefined
      }
    ) as DesignTypesList
  }

  /**
   * Processes a list of updated type definition files through AI and saves them with an AI-processed header.
   *
   * Обрабатывает список обновленных файлов определений типов через ИИ и сохраняет их с заголовком ИИ-обработки.
   * @param files list of updated type definition files / список обновленных файлов определений типов
   * @param fullJsContent combined JS content for context / объединенный JS контент для контекста
   */
  protected async saveListAi(
    files: DesignTypesList,
    fullJsContent: string
  ): Promise<void> {
    const total = files.length

    for (let index = 0; index < total; index += 1) {
      const item = files[index]
      console.log(`-- processing AI types [${index + 1}/${total}] for ${item.path}...`)

      const aiContent = await this.toAiEdit(item.content, fullJsContent)

      this.saveFile(
        {
          ...item,
          content: aiContent
        },
        true
      )
    }
  }

  /**
   * Sends content to AI for optimization.
   *
   * Отправляет контент ИИ для оптимизации.
   * @param content content to optimize / контент для оптимизации
   * @param code code to optimize / код для оптимизации
   * @returns optimized content string / строка оптимизированного контента
   */
  protected async toAiEdit(content: string, code: string): Promise<string> {
    const generate = await this.ai.toAi(
      content,
      'Goal: Optimize and generate clean, highly informative TypeScript type definitions based ONLY on the provided code and types.\n\n'
      + 'CRITICAL CONTEXT & SCOPE RESTRICTIONS:\n'
      + '- IMPORTANT: The AI coding agent that will write code for developers using this library will NEVER see or have access to the underlying JS implementation code or external files. It will rely EXCLUSIVELY on the output document generated by you in this session. You MUST ensure that your output provides complete, flawless context, clear JSDoc explanations, and precise type contracts so that the reading AI agent can write accurate code without making assumptions.\n'
      + '- Analyze ONLY the code, type definitions, and text explicitly provided in this prompt. Do NOT attempt to read, search, infer, or assume any external files, imports, project structure, or unprovided environment data.\n'
      + '- Do NOT include any references, links, file paths, or pointers to external files or local directories in the final output, as AI agents will have no environment file access.\n'
      + '- Do NOT return the provided JS code in your response.\n\n'
      + 'JSDOC & COMMENT RULES:\n'
      + '- STUDY THE PROVIDED JS CODE: You are explicitly provided with the JS implementation code (`File JS Code`). You MUST study the JS code for every function/method/property to understand its exact logic, behavior, and purpose.\n'
      + '- IF AN EXISTING JSDOC / COMMENT IS PRESENT:\n'
      + '  * Obvious entities (e.g., `isString`, `capitalize`, `copyObject`): DELETE the JSDoc / comment entirely.\n'
      + '  * Non-obvious entities: OPTIMIZE the existing JSDoc — remove fluff, translate to clear English, and PRESERVE ONLY `@example`, `@remarks`, `@note`, and `@warning` tags (remove all other JSDoc tags).\n'
      + '- IF NO JSDOC / COMMENT IS PRESENT:\n'
      + '  * Obvious entities: DO NOTHING (do NOT add any JSDoc).\n'
      + '  * Moderately non-obvious entities (obscure, custom, abbreviated, or ambiguous naming): Generate and add a SHORT, concise, 1-line English JSDoc description derived from inspecting its JS implementation code.\n'
      + '  * Very unclear or highly complex entities (intricate operational logic, complex parameters, or subtle side effects): Generate and add a DETAILED, comprehensive English JSDoc description derived from inspecting its JS implementation code.\n'
      + '- Place all JSDoc comments STRICTLY directly above the target declaration.\n'
      + '- Translate all non-English comments and JSDocs to English.\n'
      + '- Remove regular inline comments (`//` or `/* ... */`).\n'
      + 'CLEANING & OPTIMIZATION:\n'
      + '- Remove all `import` statements and local internal re-exports (e.g., `export * from "./..."`). Strictly KEEP exports from external packages.\n'
      + '- Delete all non-public content (private/protected class members, unexported elements). Keep all public API surfaces.\n'
      + '- Do NOT delete any `type` definitions; they are strictly required.\n'
      + '- Remove large Enums or structures that add length without critical context.\n'
      + '- Exercise extreme caution when removing abstract classes: if there is even a 5% chance it helps understand the API or generate code, keep it.\n'
      + '- Format output tightly with no blank lines.\n\n'
      + 'OUTPUT REQUIREMENTS:\n'
      + 'Return ONLY the resulting optimized TypeScript type definitions code. No markdown formatting, no code blocks (```), no explanations, and no additional AI text. NOTHING but pure code.',
      code
    )

    return generate ?? content
  }

  /**
   * Combines a list of files into a single string.
   *
   * Объединяет список файлов в одну строку.
   * @param list list of files / список файлов
   */
  protected toOneFile(list: DesignTypesList): string {
    return forEach(
      list,
      item => item.content
    )
      .join('\n\n')
  }
}
