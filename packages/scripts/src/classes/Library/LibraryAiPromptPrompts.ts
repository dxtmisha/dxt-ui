import { PropertiesFile } from '../Properties/PropertiesFile'
import { UI_DIR_AI_PROMPTS } from '../../config'
import type { LibraryAiPromptItemMetadata } from '../../types/libraryTypes'

/**
 * Class for analyzing prompt files in ai-prompts directory and generating a prompt section.
 * Scans markdown files, extracts YAML frontmatter metadata (name and description),
 * and formats them into a consolidated mandatory rules section.
 *
 * Класс для анализа файлов промптов в директории ai-prompts и генерации секции промптов.
 * Сканирует markdown-файлы, извлекает метаданные YAML frontmatter (имя и описание)
 * и форматирует их в консолидированную секцию обязательных правил.
 */
export class LibraryAiPromptPrompts {
  /** Regular expression to find YAML frontmatter block. / Регулярное выражение для поиска блока YAML frontmatter. */
  protected readonly exFrontmatter = /^---\r?\n([\s\S]*?)\r?\n---/

  /** Regular expression to extract prompt name. / Регулярное выражение для извлечения имени промпта. */
  protected readonly exName = /^name:\s*(.+)$/m

  /** Regular expression to extract prompt description. / Регулярное выражение для извлечения описания промпта. */
  protected readonly exDescription = /^description:\s*([^\r\n]+(?:\r?\n[ \t]+[^\r\n]+)*)/m

  /**
   * Constructor for LibraryAiPromptPrompts.
   *
   * Конструктор для LibraryAiPromptPrompts.
   * @param dir Directory containing AI prompt files / Директория, содержащая файлы промптов ИИ
   */
  constructor(
    protected readonly dir: string = UI_DIR_AI_PROMPTS
  ) { }

  /**
   * Analyzes prompt files in the directory and returns formatted markdown section.
   *
   * Анализирует файлы промптов в директории и возвращает отформатированную секцию markdown.
   * @returns formatted prompts section or undefined / отформатированная секция промптов или undefined
   */
  make(): string | undefined {
    const list = this.getList()

    if (list.length === 0) {
      return undefined
    }

    return `
# Skills
## Available Skills & Tasks (Mandatory Workflow Execution)
You have access to specialized project skills for common workflows and development tasks. All skill file paths are specified relative to the project root.
If a skill seems relevant to your current task, or if the user asks you to perform a matching task, you MUST treat it as an active skill and read the corresponding instruction file completely before taking action:
${list.join('\n')}
    `.trim()
  }

  /**
   * Retrieves a list of formatted rule lines for all prompt files with valid frontmatter.
   *
   * Получает список отформатированных строк правил для всех файлов промптов с корректным frontmatter.
   * @returns array of formatted prompt rule lines / массив отформатированных строк правил промптов
   * @protected
   */
  protected getList(): string[] {
    if (!PropertiesFile.isDir(this.dir)) {
      return []
    }

    const files = PropertiesFile.readDir(this.dir)
    const result: string[] = []

    files.sort()

    for (const file of files) {
      if (!file.endsWith('.md') && !file.endsWith('.markdown')) {
        continue
      }

      const filePath = `${this.dir}/${file}`
      const content = PropertiesFile.readFileOnly(filePath)

      if (content) {
        const metadata = this.getMetadata(content)

        if (metadata) {
          result.push(this.getPromptLine(metadata.name, filePath, metadata.description))
        }
      }
    }

    return result
  }

  /**
   * Extracts frontmatter metadata (name and description) from file content.
   *
   * Извлекает метаданные frontmatter (имя и описание) из содержимого файла.
   * @param content file content / содержимое файла
   * @returns metadata object or undefined / объект метаданных или undefined
   * @protected
   */
  protected getMetadata(content: string): LibraryAiPromptItemMetadata | undefined {
    const match = content.match(this.exFrontmatter)

    if (!match) {
      return undefined
    }

    const raw = match[1]
    const nameMatch = raw.match(this.exName)
    const descriptionMatch = raw.match(this.exDescription)

    const name = nameMatch?.[1]?.trim().replace(/^['"]|['"]$/g, '')
    const description = descriptionMatch?.[1]
      ?.replace(/\r?\n[ \t]+/g, ' ')
      .trim()
      .replace(/^['"]|['"]$/g, '')

    if (name && description) {
      return {
        name,
        description
      }
    }

    return undefined
  }

  /**
   * Formats a single prompt rule line.
   *
   * Форматирует отдельную строку правила промпта.
   * @param name prompt name or identifier / имя или идентификатор промпта
   * @param path relative file path from project root / относительный путь к файлу от корня проекта
   * @param description prompt description / описание промпта
   * @returns formatted prompt rule line / отформатированная строка правила промпта
   * @protected
   */
  protected getPromptLine(
    name: string,
    path: string,
    description: string
  ): string {
    return `- ${name} ('./${path}'): ${description}`
  }
}
