import { Datetime, removeCommonPrefix } from '@dxtmisha/functional-basic'
import { useAi } from '../../composables/useAi'

import { GitRead } from '../Git/GitRead'
import { BuildItem } from '../BuildItem'
import { ComponentWikiFile } from '../Component/ComponentWikiFile'

import type { AiAbstract } from './AiAbstract'
import type { GitFileItem } from '../../types/gitTypes'

export abstract class AiDocItemAbstract {
  /** Demo file path / Путь к файлу демо */
  protected abstract pathDemo: string[]
  /** Prompt template path / Путь к шаблону промпта */
  protected abstract pathPrompt: string[]

  /** Build item / Элемент сборки */
  protected readonly build: BuildItem

  /** Markdown file / Файл в формате Markdown */
  protected readonly mdFile: ComponentWikiFile

  protected readonly code: ComponentWikiFile

  /** AI instance / Экземпляр ИИ */
  protected readonly ai?: AiAbstract

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
    this.mdFile = new ComponentWikiFile(this.getPathWiki())
    this.code = new ComponentWikiFile(this.item.pathByOS)
    this.ai = useAi()
  }

  async make() {
    const date = this.mdFile.getDate()

    if (
      this.ai
      && this.getItemDate() > date.getDate()
    ) {
      console.log('File:', this.item.path)

      await this.build.make()
      this.makeAi()

      const generate = await this.ai.generate(
        this.readPrompt()
      )

      if (generate) {
        this.mdFile.write(generate)
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

  protected readDemo(): string {
    return new ComponentWikiFile(this.pathDemo).read()
  }

  protected readPrompt(): string {
    return new ComponentWikiFile(this.pathPrompt).read()
  }

  protected makeAi(): void {
    if (this.ai) {
      this.ai.addContent(`Code: ${this.build.getCode()}`)
      this.ai.addContent(`Original code: ${this.code.read()}`)
      this.ai.addContent(`Demo: ${this.readDemo()}`)
      this.ai.addContent(`Original MDX: ${this.mdFile.read()}`)
    }
  }
}
