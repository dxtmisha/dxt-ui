import { forEach, isFilled } from '@dxtmisha/functional-basic'
import { getPackageJson } from '../../functions/getPackageJson'
import { PropertiesConfig } from '../Properties/PropertiesConfig'
import { PropertiesFile } from '../Properties/PropertiesFile'
import { DesignTypesAi } from './DesignTypesAi'
import { DesignTypesMakeAbstract } from './DesignTypesMakeAbstract'

import type { DesignTypesItem, DesignTypesList } from '../../types/designTypes'

import { UI_DIR_AI_TYPES_LIST, UI_FILE_AI_TYPES } from '../../config'

/**
 * Engine for scanning declaration files, MD5 change tracking, and generating AI-optimized TypeScript type definitions.
 *
 * Движок для сканирования файлов деклараций, отслеживания изменений по MD5 и генерации оптимизированных ИИ определений типов TypeScript.
 */
export class DesignTypesMake extends DesignTypesMakeAbstract {
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
   * @param dir input directory path containing declaration files / входной путь к директории, содержащей файлы деклараций
   * @param dirDist input directory path containing compiled JavaScript files / входной путь к директории, содержащей скомпилированные файлы JavaScript
   */
  constructor(
    ai: DesignTypesAi,
    dir: string = PropertiesConfig.getTypesTemporaryDirectory(),
    dirDist: string = PropertiesConfig.getDistDir()
  ) {
    super(ai, dir, dirDist)
  }

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

      this.fullContent = this.toOneFile(processedFiles)
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
   * @returns true if content contains exports / true, если контент содержит экспорты
   */
  protected isContent(content?: string): content is string {
    return Boolean(
      content
      && content.includes('export')
    )
  }

  /**
   * Checks if the content contains JSDoc comments.
   *
   * Проверяет, содержит ли контент JSDoc комментарии.
   * @param content file content / содержимое файла
   * @returns true if content contains JSDoc block / true, если контент содержит блок JSDoc
   */
  protected hasJSDoc(content: string): boolean {
    return content.includes('/**')
  }

  /**
   * Reads a directory recursively.
   *
   * Читает директорию рекурсивно.
   * @param directory directory path to read / путь к директории для чтения
   * @returns array of relative file paths / массив относительных путей к файлам
   */
  protected getList(directory: string = this.getTemporaryDirectory()): string[] {
    return PropertiesFile.is(directory) ? PropertiesFile.readDirRecursive(directory) : []
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
        content: content.trim()
      }
    }) as DesignTypesList
  }

  /**
   * Gets a list of files filtered by a provided checker function from a specific directory.
   *
   * Получает список файлов, отфильтрованный переданной функцией проверки из указанной директории.
   * @param checkFile function to check if the file matches criteria / функция проверки соответствия файла критериям
   * @param directory source directory path / путь к исходной директории
   * @returns filtered list of design type items / отфильтрованный список элементов типов
   */
  protected getListBy(
    checkFile: (file: string) => boolean,
    directory: string = this.getTemporaryDirectory()
  ): DesignTypesList {
    return forEach(
      this.getList(directory),
      (file) => {
        if (checkFile(file)) {
          const content = this.readFile(file, directory)

          if (this.isContent(content)) {
            return {
              path: file,
              content,
              md5: this.ai.getMd5(content)
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
      this.listByFilter = this.getListBy(
        file => this.ai.isFile(file),
        this.getTemporaryDirectory()
      )
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
      this.listByFilterJs = this.getListBy(
        file => this.ai.isFileJs(file),
        this.getDistDirectory()
      )
    }

    return this.listByFilterJs
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
   * @param directory directory containing the file / директория, содержащая файл
   * @returns array of path segments / массив сегментов пути
   */
  protected getPath(file: string, directory: string = this.getTemporaryDirectory()): string[] {
    return [directory, file]
  }

  /**
   * Returns the path to the temporary compilation directory.
   *
   * Возвращает путь к временной директории компиляции.
   * @returns temporary compilation directory path / путь к временной директории компиляции
   */
  protected getTemporaryDirectory(): string {
    return this.dir
  }

  /**
   * Returns the path to the compiled distribution directory.
   *
   * Возвращает путь к директории собранных файлов.
   * @returns compiled distribution directory path / путь к директории собранных файлов
   */
  protected getDistDirectory(): string {
    return this.dirDist
  }

  /**
   * Cleans up the content by removing imports, local exports, and empty lines.
   *
   * Очищает контент, удаляя импорты, локальные экспорты и пустые строки.
   * @param content content to clean / контент для очистки
   * @returns cleaned content string / очищенная строка контента
   */
  protected cleanContent(content: string): string {
    return content
      .replace(/^import\s+(?:{[^}]+}|[^{]+)\s+from\s+['"]\.[^'"]+['"];?/gm, '')
      .replace(/^import\s+['"]\.[^'"]+['"];?/gm, '')
      .replace(/^export\s+(?:\*|{[^}]+})\s+from\s+['"]\.[^'"]+['"];?/gm, '')
      .replace(/^\s*(?:private|protected)\s+[^({]+;/gm, '')
      .replace(/^\s*\/\/.*$/gm, '')
      .replace(/^\s*[\r\n]/gm, '')
      .trim()
  }

  /**
   * Reads the content of a file.
   *
   * Читает содержимое файла.
   * @param path file path / путь к файлу
   * @param directory directory containing the file / директория, содержащая файл
   * @returns file content or undefined / содержимое файла или undefined
   */
  protected readFile(path: string, directory: string = this.getTemporaryDirectory()): string | undefined {
    return PropertiesFile.readFileOnly(this.getPath(path, directory))
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

        if (
          !isFilled(oldContent)
          || !oldContent.startsWith(this.getMd5Header(item.md5))
        ) {
          this.saveFile(item)

          return item
        }

        if (
          !oldContent.startsWith(this.getMd5Header(item.md5, true))
        ) {
          return item
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
      let content = this.cleanContent(item.content)

      if (isFilled(content)) {
        console.log(`-- processing AI types [${index + 1}/${total}] for ${item.path}...`)
        content = await this.toAiEdit(
          content,
          this.hasJSDoc(content) ? '' : fullJsContent
        )
      }

      this.saveFile(
        {
          ...item,
          content
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
      'Goal: Optimize TypeScript type definitions for declarations in `File Content`.\n\n'
      + 'SCOPE & CONTEXT:\n'
      + '- Process STRICTLY entities in `File Content`. Do NOT add unexported entities or code from `File JS Code`.\n'
      + '- Use `File JS Code` ONLY as reference to understand implementation logic for writing JSDoc descriptions.\n'
      + '- AI coding agents will rely EXCLUSIVELY on this output. Ensure complete type contracts and clear JSDoc descriptions.\n'
      + '- Do NOT include file paths, links, or internal imports in the output.\n\n'
      + 'JSDOC RULES:\n'
      + '- MANDATORY FOR ALL CLASSES, METHODS, FUNCTIONS & ACCESSORS: Every `class`, `declare class`, `abstract class`, `function`, `declare function`, method (public/static/abstract), `constructor`, and `get`/`set` accessor MUST ALWAYS have a JSDoc description.\n'
      + '  * Style: Descriptions MUST be maximally clear and informative, yet maximally short and concise. Avoid fluff.\n'
      + '  * Single-Line Preference: Prefer single-line JSDoc format (`/** Description @keywords search_terms */`) to conserve vertical space and reduce file size.\n'
      + '  * Remove `@return` / `@returns`: STRICTLY REMOVE `@return` and `@returns` tags from all JSDoc comments.\n'
      + '  * `@param` Tag: Include `@param` ONLY if critically necessary to clarify parameter behavior; otherwise omit `@param`.\n'
      + '  * AI Search Keywords: Include relevant search tags/keywords (e.g. `@keywords` tag or search terms) to help AI code search easily discover functionality.\n'
      + '  * Allowed tags: PRESERVE ONLY `@example`, `@remarks`, `@note`, `@warning`, `@keywords`, and critical `@param` tags. Remove `@return`/`@returns` and all other tags.\n'
      + '  * If JSDoc is missing: Generate a clear, concise, search-optimized English JSDoc derived from inspecting `File JS Code`.\n'
      + '  * If JSDoc exists: Optimize, condense, translate to English, and apply tag rules.\n'
      + '- TYPES, INTERFACES & ENUMS: Delete JSDoc for simple/obvious types; add or keep concise JSDoc for complex types.\n'
      + '- Place JSDoc directly above declarations. Remove regular inline comments (`//` or `/* */`).\n\n'
      + 'CLEANING & STRUCTURING:\n'
      + '- Remove internal `import` statements and internal re-exports. Keep external package exports.\n'
      + '- Delete non-public content (private/protected members, unexported elements). Keep all public API surfaces.\n'
      + '- Do NOT delete any `type` definitions. Preserve abstract classes.\n'
      + '- Format output tightly without unnecessary blank lines.\n\n'
      + 'OUTPUT FORMAT:\n'
      + 'Return ONLY raw TypeScript code corresponding to `File Content`. No markdown, no code blocks (```), no text explanations.',
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
