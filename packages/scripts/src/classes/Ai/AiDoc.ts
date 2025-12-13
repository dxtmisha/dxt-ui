import { Datetime, removeCommonPrefix } from '@dxtmisha/functional-basic'

import { GitRead } from '../Git/GitRead'
import { PropertiesFile } from '../Properties/PropertiesFile'

import type { AiDocFile } from '../../types/aiTypes'
import type { GitFileItem } from '../../types/gitTypes'
import { ComponentBuild } from '../Component/ComponentBuild.ts'

const DATE_UPDATED_MATCH = /\*\*Date: (.*?)\./i

export class AiDoc {
  constructor(
    protected readonly path: string
  ) {
  }

  make() {
    console.log(`AI documentation: ${this.path}`)

    this.makeClass().then()
  }

  async makeClass() {
    console.log('')
    console.log('Classes...')

    for (const item of this.getListClasses()) {
      await this.makeItem(item)
    }
  }

  protected getListClasses() {
    return GitRead.filterByDirectory(
      GitRead.getClassesList()
    )
  }

  protected extractDateFromContent(content: string): Datetime {
    const match = content.match(DATE_UPDATED_MATCH)
    let date = '1970-01-01'

    if (
      match
      && match?.[1]
    ) {
      date = match[1]
    }

    return new Datetime(date, 'full')
  }

  protected readWikiFile(pathFull: string[]): AiDocFile | undefined {
    if (PropertiesFile.is(pathFull)) {
      const content = PropertiesFile.readFileOnly(pathFull)

      if (content !== undefined) {
        return {
          content,
          date: this.extractDateFromContent(content)
        }
      }
    }

    console.error('Wiki file does not exist at path:', PropertiesFile.joinPath(pathFull))

    return undefined
  }

  protected createWikiFile(pathFull: string[]) {
    if (!PropertiesFile.is(pathFull)) {
      PropertiesFile.writeByPath(pathFull, '')
      console.info(`Creating Wiki file with path: ${PropertiesFile.joinPath(pathFull)}`)
    }
  }

  protected toPathWiki(path: string): string[] {
    const fileName = removeCommonPrefix(path, this.path)
      .replace(/\.ts$/, '')

    return [
      ...GitRead.splitPath(this.path),
      ...GitRead.splitPath(`${fileName}.mdx`)
    ]
  }

  protected toPathFull(path: string[]): string[] {
    return [
      PropertiesFile.getRoot(),
      ...path
    ]
  }

  protected async makeItem(item: GitFileItem) {
    const wikiPath = this.toPathWiki(item.path)
    const wikiPathFull = this.toPathFull(wikiPath)
    const date = new Datetime(item.date)

    this.createWikiFile(wikiPathFull)

    const data = this.readWikiFile(wikiPathFull)

    if (
      data
      && date.getDate() > data.date.getDate()
    ) {
      const build = new ComponentBuild(item.path)

      console.log('File:', item.path)
      await build.make()
    }
  }
}
