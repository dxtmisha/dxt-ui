import { isFilled, toArray, uniqueArray } from '@dxtmisha/functional-basic'
import { PropertiesFile, type PropertiesFilePath } from '../Properties/PropertiesFile'
import { UI_FILE_GITIGNORE } from '../../config'

/** Regular expression to trim leading and trailing slashes / Регулярное выражение для удаления начальных и конечных слешей */
const REGEXP_SLASH = /^\/+|\/+$/g

/**
 * Class for managing entries in `.gitignore` file.
 *
 * Класс для управления записями в файле `.gitignore`.
 */
export class GitIgnore {
  /** Comment heading for the added section / Заголовок-комментарий для добавляемой секции */
  protected comment?: string
  /** Cached content of the .gitignore file / Кэшированное содержимое файла .gitignore */
  protected content?: string
  /** Path to .gitignore file / Путь к файлу .gitignore */
  protected gitignorePath: PropertiesFilePath = UI_FILE_GITIGNORE
  /** List of paths to ignore / Список путей для игнорирования */
  protected paths: string[] = []

  /**
   * Constructor for GitIgnore.
   *
   * Конструктор для GitIgnore.
   * @param paths optional path or list of paths to ignore / опциональный путь или список путей для добавления в игнорируемые
   * @param comment optional comment heading for the added paths / опциональный заголовок-комментарий для добавляемых путей
   * @param gitignorePath optional path to .gitignore file / опциональный путь к файлу .gitignore
   */
  constructor(
    paths?: string | string[],
    comment?: string,
    gitignorePath: PropertiesFilePath = UI_FILE_GITIGNORE
  ) {
    if (paths) {
      this.addPaths(paths)
    }
    this.comment = comment
    this.gitignorePath = gitignorePath
  }

  /**
   * Returns current comment heading.
   *
   * Возвращает текущий заголовок-комментарий.
   * @returns comment string or undefined / строка комментария или undefined
   */
  getComment(): string | undefined {
    return this.comment
  }

  /**
   * Sets comment heading for the added section.
   *
   * Устанавливает заголовок-комментарий для добавляемой секции.
   * @param comment optional comment string / опциональная строка комментария
   * @returns this instance / этот экземпляр
   */
  setComment(comment?: string): this {
    this.comment = comment
    return this
  }

  /**
   * Reads and caches the content of the .gitignore file.
   *
   * Считывает и кэширует содержимое файла .gitignore.
   * @returns file content string / строка содержимого файла
   */
  getContent(): string {
    if (this.content === undefined) {
      this.content = String(PropertiesFile.readFileOnly(this.gitignorePath) ?? '').trim()
    }

    return this.content
  }

  /**
   * Returns path to .gitignore file.
   *
   * Возвращает путь к файлу .gitignore.
   * @returns path to .gitignore / путь к .gitignore
   */
  getGitignorePath(): PropertiesFilePath {
    return this.gitignorePath
  }

  /**
   * Sets path to .gitignore file.
   *
   * Устанавливает путь к файлу .gitignore.
   * @param gitignorePath path to .gitignore file / путь к файлу .gitignore
   * @returns this instance / этот экземпляр
   */
  setGitignorePath(gitignorePath: PropertiesFilePath): this {
    this.gitignorePath = gitignorePath
    this.content = undefined
    return this
  }

  /**
   * Returns current list of paths to ignore.
   *
   * Возвращает текущий список путей для игнорирования.
   * @returns list of paths / список путей
   */
  getPaths(): string[] {
    return this.paths
  }

  /**
   * Replaces current list of paths with new paths.
   *
   * Заменяет текущий список путей новым набором путей.
   * @param paths new path or list of paths / новый путь или список путей
   * @returns this instance / этот экземпляр
   */
  setPaths(paths: string | string[]): this {
    this.paths = toArray(paths)
    return this
  }

  /**
   * Appends paths to the current list of paths.
   *
   * Добавляет пути к текущему списку путей.
   * @param paths path or list of paths to append / путь или список путей для добавления
   * @returns this instance / этот экземпляр
   */
  addPaths(paths: string | string[]): this {
    this.paths.push(...toArray(paths))
    return this
  }

  /**
   * Resets cached content.
   *
   * Сбрасывает кэшированное содержимое.
   * @returns this instance / этот экземпляр
   */
  resetContent(): this {
    this.content = undefined
    return this
  }

  /**
   * Adds paths to .gitignore if they are not already present.
   *
   * Добавляет пути в .gitignore, если они еще не присутствуют.
   * @returns true if .gitignore was updated, false otherwise / true, если .gitignore был обновлен, иначе false
   */
  make(): boolean {
    const paths = this.toPaths()

    if (paths.length === 0) {
      return false
    }

    const lines = this.toLines()
    const commentLines = this.getCommentLines()
    const separator = lines.length > 0 && commentLines.length > 0 ? [''] : []

    const linesToInsert: string[] = [
      ...lines,
      ...separator,
      ...commentLines,
      ...paths
    ]

    const newContent = `${linesToInsert.join('\n')}\n`

    PropertiesFile.writeByPath(this.gitignorePath, newContent, false)
    this.content = undefined

    return true
  }

  /**
   * Returns comment lines array to insert into .gitignore, or empty array if not applicable.
   *
   * Возвращает массив строк комментария для вставки в .gitignore или пустой массив, если комментарий не требуется.
   * @returns array with comment string or empty array / массив со строкой комментария или пустой массив
   * @protected
   */
  protected getCommentLines(): string[] {
    if (isFilled(this.comment)) {
      const trimmed = this.comment.trim()
      const commentLine = trimmed.startsWith('#') ? trimmed : `# ${trimmed}`

      if (!this.getContent().includes(commentLine)) {
        return [commentLine]
      }
    }

    return []
  }

  /**
   * Splits file content into a list of trimmed lines.
   *
   * Разбивает содержимое файла на список строк без пробелов по краям.
   * @returns array of trimmed lines / массив очищенных строк
   * @protected
   */
  protected toLines(): string[] {
    const content = this.getContent()

    if (!content) {
      return []
    }

    return content
      .split(/\r?\n/)
      .map(line => line.trim())
  }

  /**
   * Normalizes, deduplicates and filters paths that already exist in .gitignore lines.
   *
   * Нормализует, дедуплицирует и отфильтровывает пути, которые уже присутствуют в строках .gitignore.
   * @returns array of missing paths / массив отсутствующих путей
   * @protected
   */
  protected toPaths(): string[] {
    const uniquePaths = uniqueArray(
      this.paths
        .map(item => item.trim())
        .filter(item => isFilled(item))
    )
    const existingLines = this.toLines()

    return uniquePaths.filter((targetPath) => {
      const cleanTarget = targetPath.replace(REGEXP_SLASH, '')
      return !existingLines.some((line) => {
        const cleanLine = line.replace(REGEXP_SLASH, '')
        return cleanLine === cleanTarget
      })
    })
  }
}
