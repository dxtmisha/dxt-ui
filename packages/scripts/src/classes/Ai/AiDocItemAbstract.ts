import { Datetime, removeCommonPrefix } from '@dxtmisha/functional-basic'

import { GitRead } from '../Git/GitRead'
import { BuildItem } from '../BuildItem'
import { ComponentWikiFile } from '../Component/ComponentWikiFile'

import type { GitFileItem } from '../../types/gitTypes'

export class AiDocItemAbstract {
  /** Build item / Элемент сборки */
  protected readonly build: BuildItem

  /** Markdown file / Файл в формате Markdown */
  protected readonly mdFile: ComponentWikiFile

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
  }

  async make() {
    const date = this.mdFile.getDate()

    if (this.getItemDate() > date.getDate()) {

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
}
