import { toCamelCaseFirst } from '@dxtmisha/functional-basic'
import { getPackageJson } from '../../functions/getPackageJson'

import { PropertiesConfig } from '../Properties/PropertiesConfig'
import { PropertiesFile } from '../Properties/PropertiesFile'
import { LibraryItems } from '../Library/LibraryItems'
import { DesignWikiStormItem } from './DesignWikiStormItem'

import type { WebTypesTags, WebTypesVueJson } from '../../types/webTypes'

/**
 * Class for generating web-types.json.
 *
 * Класс для генерации web-types.json.
 */
export class DesignWikiStorm {
  protected readonly components: LibraryItems

  /**
   * Constructor.
   *
   * Конструктор.
   * @param dir directory for saving the file / директория для сохранения файла
   */
  constructor(
    protected dir: string = 'dist'
  ) {
    this.components = new LibraryItems()
  }

  /**
   * Generates the web-types.json file.
   *
   * Генерирует файл web-types.json.
   */
  async make(): Promise<void> {
    const packageFile = getPackageJson()

    console.log('[DesignWikiStorm] make')

    if (packageFile) {
      const data: WebTypesVueJson = {
        $schema: 'https://json.schemastore.org/web-types',
        framework: 'vue',
        name: toCamelCaseFirst(PropertiesConfig.getDesignName()),
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
