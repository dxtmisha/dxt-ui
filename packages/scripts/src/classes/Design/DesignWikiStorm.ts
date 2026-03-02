import { LibraryItems } from '../Library/LibraryItems'
import { WikiStorybook } from '@dxtmisha/wiki'

export class DesignWikiStorm {
  protected readonly components: LibraryItems

  constructor() {
    this.components = new LibraryItems()
  }

  async make(): Promise<void> {
    console.log('ok')

    const list = await this.makeComponents()
  }

  protected async getComponentWiki(dir: string): Promise<WikiStorybook> {
    const dirs = [
      '.',
      ...this.components.getComponentsPath(),
      dir,
      'wikiData.ts'
    ]

    console.log(dirs.join('/'))
    const wiki: WikiStorybook = await import(dirs.join('/'))

    // return wiki
  }

  /**
   * Creates or updates the list of components.
   *
   * Создает или обновляет список компонентов.
   */
  protected async makeComponents(): Promise<this> {
    for (const component of this.components.getComponentList()) {
      await this.getComponentWiki(component.dir)
      // console.log(`Component update: ${component.dir}`)
    }

    return this
  }
}
