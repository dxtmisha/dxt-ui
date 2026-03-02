import { LibraryItems } from '../Library/LibraryItems'
import { WikiStorybook } from '@dxtmisha/wiki'
import { DesignWikiStormItem } from './DesignWikiStormItem.ts'
import { getPackageJson } from '../../functions/getPackageJson.ts'
import type { WebTypesTags, WebTypesVueJson } from '../../types/webTypes.ts'
import { PropertiesFile } from '../Properties/PropertiesFile.ts'

export class DesignWikiStorm {
  protected readonly components: LibraryItems

  constructor(
    protected dir: string = 'dist'
  ) {
    this.components = new LibraryItems()
  }

  async make(): Promise<void> {
    const packageFile = getPackageJson()
    console.log('')

    if (packageFile) {
      const data: WebTypesVueJson = {
        $schema: 'https://json.schemastore.org/web-types',
        framework: 'vue',
        name: packageFile.version,
        version: packageFile.version,
        contributions: {
          html: {
            'types-syntax': 'typescript',
            'description-markup': 'markdown',
            'tags': await this.getComponents()
          }
        }
      }

      PropertiesFile.writeByPath(
        [this.dir, 'web-types.json'],
        data
      )
    }
  }

  /**
   * Creates or updates the list of components.
   *
   * Создает или обновляет список компонентов.
   */
  protected async getComponents(): Promise<WebTypesTags> {
    const packageFile = getPackageJson()
    const tags: WebTypesTags = []

    if (packageFile) {
      for (const component of this.components.getComponentList()) {
        const item = new DesignWikiStormItem(
          packageFile.name,
          this.components.getComponentsPath(),
          component
        )

        ;(await item.init())

        const tag = item.get()

        if (tag) {
          tags.push(tag)
        }
      }
    }

    return tags
  }
}
