import { createHash } from 'node:crypto'

import { PropertiesFile } from '../Properties/PropertiesFile'

import { UI_FILE_AI_AGENTS } from '../../config'
import agentsPromptText from '../../media/templates/prompts/aiPromptAgents.en.md?raw'

/**
 * Class for injecting and synchronizing the ai-prompt guidelines into AGENTS.md.
 * Tracks changes using MD5 hashes and boundary markers to preserve existing content in AGENTS.md.
 *
 * Класс для внедрения и синхронизации инструкций ai-prompt в AGENTS.md.
 * Отслеживает изменения с помощью хэшей MD5 и граничных меток для сохранения существующего контента в AGENTS.md.
 */
export class LibraryAiPromptAgents {
  /** Regular expression to find marked ai-prompt section with MD5 / Регулярное выражение для поиска размеченной секции ai-prompt с MD5 */
  protected readonly exMarker = /<!--\s*START:ai-prompt(?:\s+md5:([^\s>]+))?\s*-->[\s\S]*?<!--\s*END:ai-prompt\s*-->/i

  /**
   * Constructor for LibraryAiPromptAgents.
   *
   * Конструктор для LibraryAiPromptAgents.
   * @param targetFile Target agents file path / Путь к целевому файлу agents
   */
  constructor(
    protected readonly targetFile: string = UI_FILE_AI_AGENTS
  ) { }

  /**
   * Generates or updates the ai-prompt section in AGENTS.md if changed.
   *
   * Генерирует или обновляет секцию ai-prompt в AGENTS.md при наличии изменений.
   */
  make(): void {
    const section = this.getSection()

    if (!PropertiesFile.is(this.targetFile)) {
      console.log(`-- Creating ${this.targetFile} with ai-prompt section...`)
      this.write(this.getInitial(section))
      return
    }

    const existingContent = PropertiesFile.readFileOnly(this.targetFile) ?? ''

    if (this.isMarker(existingContent)) {
      this.updateMarker(existingContent, section)
      return
    }

    this.append(existingContent, section)
  }

  /**
   * Checks if boundary markers exist in the given content.
   *
   * Проверяет, присутствуют ли граничные метки в переданном контенте.
   * @param content File content to check / Содержимое файла для проверки
   * @returns true if markers found / true, если метки найдены
   * @protected
   */
  protected isMarker(content: string): boolean {
    return this.exMarker.test(content)
  }

  /**
   * Returns the prompt template content.
   *
   * Возвращает содержимое шаблона промпта.
   * @returns Raw prompt content string / Исходная строка содержимого промпта
   * @protected
   */
  protected getContent(): string {
    return agentsPromptText.trim()
  }

  /**
   * Generates initial content for a new AGENTS.md file.
   *
   * Генерирует начальное содержимое для нового файла AGENTS.md.
   * @param section Formatted ai-prompt section / Отформатированная секция ai-prompt
   * @returns Initial file content / Начальное содержимое файла
   * @protected
   */
  protected getInitial(section: string): string {
    return `# AI Agent Rules\n\n${section}\n`
  }

  /**
   * Calculates MD5 hash of the prompt template content.
   *
   * Вычисляет MD5 хэш содержимого шаблона промпта.
   * @returns Calculated MD5 hex string / Вычисленная hex-строка MD5
   * @protected
   */
  protected getMd5(): string {
    return createHash('md5').update(this.getContent()).digest('hex')
  }

  /**
   * Wraps the prompt content in HTML comment boundary markers with MD5 hash.
   *
   * Оборачивает контент промпта в граничные маркеры комментариев HTML с MD5 хэшем.
   * @param md5 MD5 hash checksum (defaults to this.getMd5()) / Контрольная сумма хэша MD5 (по умолчанию this.getMd5())
   * @returns Formatted section with start and end markers / Отформатированная секция с начальной и конечной метками
   * @protected
   */
  protected getSection(md5: string = this.getMd5()): string {
    return `<!-- START:ai-prompt md5:${md5} -->\n${this.getContent()}\n<!-- END:ai-prompt -->`
  }

  /**
   * Updates the marked ai-prompt section if boundary markers exist.
   *
   * Обновляет размеченную секцию ai-prompt, если граничные метки существуют.
   * @param existingContent Current file content / Текущее содержимое файла
   * @param section Formatted section to insert / Отформатированная секция для вставки
   * @returns true if updated, false if up to date or markers not found / true, если обновлено, false, если актуально или метки не найдены
   * @protected
   */
  protected updateMarker(
    existingContent: string,
    section: string
  ): boolean {
    const markerMatch = existingContent.match(this.exMarker)

    if (markerMatch) {
      const currentMd5 = markerMatch[1]
      const md5 = this.getMd5()

      if (currentMd5 === md5) {
        return false
      }

      console.log(`-- Updating ai-prompt section in ${this.targetFile} (MD5: ${md5})...`)
      const updatedContent = existingContent.replace(this.exMarker, section)
      this.write(updatedContent)
      return true
    }

    return false
  }

  /**
   * Appends the ai-prompt section to the end of the file.
   *
   * Добавляет секцию ai-prompt в конец файла.
   * @param existingContent Current file content / Текущее содержимое файла
   * @param section Formatted section to append / Отформатированная секция для добавления
   * @returns true if file was updated / true, если файл был обновлен
   * @protected
   */
  protected append(
    existingContent: string,
    section: string
  ): boolean {
    const md5 = this.getMd5()

    console.log(`-- Appending ai-prompt section to ${this.targetFile} (MD5: ${md5})...`)

    const trimmedExisting = existingContent.trimEnd()
    const updatedContent = trimmedExisting.length > 0
      ? `${trimmedExisting}\n\n${section}\n`
      : `${section}\n`

    this.write(updatedContent)
    return true
  }

  /**
   * Writes content to the target file.
   *
   * Записывает контент в целевой файл.
   * @param content Content to write / Контент для записи
   * @returns this instance / этот экземпляр
   * @protected
   */
  protected write(content: string): this {
    PropertiesFile.writeByPath(
      this.targetFile,
      content
    )

    return this
  }
}
