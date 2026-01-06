import { Datetime, removeCommonPrefix } from '@dxtmisha/functional-basic'
import { useAi } from '../../composables/useAi'

import { GitRead } from '../Git/GitRead'
import { BuildItem } from '../BuildItem'
import { ComponentWikiFile } from '../Component/ComponentWikiFile'

import type { AiAbstract } from './AiAbstract'
import type { GitFileItem } from '../../types/gitTypes'
import { PropertiesFile } from '../Properties/PropertiesFile.ts'
import { UI_DIR_IN, UI_FILE_PACKAGE } from '../../config.ts'
import { PropertiesConfig } from '../Properties/PropertiesConfig.ts'

export abstract class AiDocItemAbstract {
  /** Demo file path / Путь к файлу демо */
  protected abstract pathDemo: string[]
  /** Prompt template path / Путь к шаблону промпта */
  protected abstract pathPrompt: string[]

  /** Build item / Элемент сборки */
  protected readonly build: BuildItem

  /** Markdown file / Файл в формате Markdown */
  protected readonly mdFile: ComponentWikiFile

  /** Code file / Файл с кодом */
  protected readonly code: ComponentWikiFile

  /** Property file data / Данные из файла свойств */
  protected readonly projectName: string

  /** AI instance / Экземпляр ИИ */
  protected readonly ai?: AiAbstract

  protected description?: string

  /**
   * Constructor
   * @param path
   * @param item
   */
  constructor(
    protected readonly path: string,
    protected readonly item: GitFileItem
  ) {
    this.build = new BuildItem(this.item.path)
    this.mdFile = new ComponentWikiFile(this.getPathWiki(), true, false)
    this.code = new ComponentWikiFile(this.item.pathByOS, false, false)
    this.projectName = PropertiesFile.readFile<Record<string, any>>(UI_FILE_PACKAGE)?.name ?? 'Library'
    this.ai = useAi()
  }

  async make() {
    const date = this.mdFile.getDate()

    if (
      this.ai
      && this.getItemDate() > date.getDate()
    ) {
      console.log(`${this.projectName}/File:`, this.item.path)

      await this.build.make()
      this.makeAi()

      const generate = await this.ai.generate(
        this.readPrompt()
      )

      if (generate) {
        const read = generate.split('#########')

        if (read?.[0]) {
          this.description = read[0].trim()
        }

        if (read?.[1]) {
          this.code.write(read[1])
        }

        if (read?.[2]) {
          this.mdFile.write(this.initName(read[2]))
        }
      }
    }
  }

  protected getPathWiki(): string[] {
    const fileName = removeCommonPrefix(this.item.path, this.path)
      .replace(/\.ts$/, '')

    return [
      ...GitRead.splitPath(this.path),
      ...GitRead.splitPath(`${fileName}.mdx`)
    ]
  }

  protected getItemDate(): Date {
    return new Datetime(this.item.date).getDate()
  }

  protected getTitle() {
    let title = this.projectName
      + '/'
      + this.item.path
        .replace(UI_DIR_IN + '/', '')
        .replace(/\.ts$/, '')

    if (this.description) {
      title += ` - ${this.description}`
    }

    return title
  }

  protected readDemo(): string {
    return new ComponentWikiFile(this.pathDemo).read()
  }

  protected readPrompt(): string {
    return new ComponentWikiFile(this.pathPrompt)
      .read()
      .replace(/\[wikiLanguage]/g, PropertiesConfig.getWikiLanguage())
  }

  protected makeAi(): void {
    if (this.ai) {
      this.ai.addContent(`Code: ${this.build.getCode()}`)
      this.ai.addContent(`Original code: ${this.code.read()}`)
      this.ai.addContent(`Demo: ${this.readDemo()}`)
      this.ai.addContent(`Original MDX: ${this.mdFile.read()}`)
    }
  }

  protected initName(content: string): string {
    if (content.match('[title]')) {
      return content.replace('[title]', this.getTitle())
    }

    return content
  }
}
