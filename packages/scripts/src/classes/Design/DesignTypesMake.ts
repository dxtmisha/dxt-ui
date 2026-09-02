import { isFilled } from '@dxtmisha/functional-basic'
import { PropertiesConfig } from '../Properties/PropertiesConfig'
import { DesignTypesAi } from './DesignTypesAi'
import { DesignTypesMakeAbstract } from './DesignTypesMakeAbstract'
import { DesignTypesMakeFile } from './DesignTypesMakeFile'
import { DesignTypesMakeTsTransformer } from './DesignTypesMakeTsTransformer'

import type { DesignTypesItem, DesignTypesList } from '../../types/designTypes'

import aiTypeOptimizationPrompt from '../../media/templates/prompts/aiTypeOptimization.en.md?raw'

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

  /** Maximum number of type definition files processed by AI concurrently / Максимальное количество файлов определений типов, обрабатываемых ИИ одновременно */
  protected readonly AI_TYPES_CONCURRENCY = PropertiesConfig.getAiTypesConcurrency()

  /** TypeScript AST transformer for cleaning declaration file content / TypeScript AST трансформер для очистки содержимого файлов деклараций */
  protected readonly tsTransformer = new DesignTypesMakeTsTransformer()

  /** Instance of DesignTypesMakeFile for file operations / Экземпляр DesignTypesMakeFile для файловых операций */
  protected readonly files: DesignTypesMakeFile

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
    this.files = new DesignTypesMakeFile(this.ai, this.dir, this.dirDist)
  }

  /**
   * Reads processed type definition files, combines them into a single string, and cleans the content.
   *
   * Читает обработанные файлы определений типов, объединяет их в одну строку и очищает контент.
   * @returns combined and cleaned full type definitions content / объединенное и очищенное содержимое полных определений типов
   */
  getFullContent(): string {
    if (this.fullContent === undefined) {
      const files = this.files.getListCache()
      const processedFiles = this.files.getListAi(files)

      this.fullContent = this.files.toOneFile(processedFiles)
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
      this.fullJsContent = this.files.toOneFile(this.files.getListByFilterJs())
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
    const files = this.files.getListByFilter()
    const fullJsContent = this.getFullJsContent()

    const updatedFiles = this.files.saveList(files)

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

    this.files.save(fullContent)

    return this
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
   * Cleans up the declaration content via TypeScript AST transformation by removing relative imports, relative re-exports, non-public members, and empty lines.
   *
   * Очищает контент деклараций через AST-трансформацию TypeScript, удаляя относительные импорты, относительные реэкспорты, непубличные члены и пустые строки.
   * @param content content to clean / контент для очистки
   * @returns cleaned content string / очищенная строка контента
   */
  protected cleanContent(content: string): string {
    return this.tsTransformer.cleanContent(content)
  }

  /**
   * Processes a list of updated type definition files through AI concurrently (with limited parallelism) and saves them with an AI-processed header.
   *
   * Обрабатывает список обновленных файлов определений типов через ИИ параллельно (с ограниченным параллелизмом) и сохраняет их с заголовком ИИ-обработки.
   * @param files list of updated type definition files / список обновленных файлов определений типов
   * @param fullJsContent combined JS content for context / объединенный JS контент для контекста
   */
  protected async saveListAi(
    files: DesignTypesList,
    fullJsContent: string
  ): Promise<void> {
    const total = files.length

    if (total === 0) {
      return
    }

    const queue = [...files]
    let processed = 0

    const worker = async (): Promise<void> => {
      let item: DesignTypesItem | undefined

      while ((item = queue.shift()) !== undefined) {
        let content: string | undefined = this.cleanContent(item.content)

        if (isFilled(content)) {
          processed += 1
          console.log(`-- processing AI types [${processed}/${total}] for ${item.path}...`)
          content = await this.toAiEdit(
            content,
            this.hasJSDoc(content) ? '' : fullJsContent
          )
        }

        if (content) {
          this.files.saveFile(
            {
              ...item,
              content
            },
            true
          )
        } else {
          console.warn(`[Warning] Failed to generate AI types for: ${item.path}`)
        }
      }
    }

    await Promise.all(
      Array.from(
        { length: Math.min(this.AI_TYPES_CONCURRENCY, total) },
        () => worker()
      )
    )
  }

  /**
   * Sends content to AI for optimization.
   *
   * Отправляет контент ИИ для оптимизации.
   * @param content content to optimize / контент для оптимизации
   * @param code code to optimize / код для оптимизации
   * @returns optimized content string / строка оптимизированного контента
   */
  protected async toAiEdit(content: string, code: string): Promise<string | undefined> {
    return await this.ai.toAi(
      content,
      aiTypeOptimizationPrompt,
      code
    )
  }
}
