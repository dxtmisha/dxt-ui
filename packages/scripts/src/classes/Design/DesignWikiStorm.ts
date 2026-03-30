import { toCamelCaseFirst } from '@dxtmisha/functional-basic'
import { getPackageJson } from '../../functions/getPackageJson'

import { PropertiesConfig } from '../Properties/PropertiesConfig'
import { PropertiesFile } from '../Properties/PropertiesFile'
import { LibraryItems } from '../Library/LibraryItems'
import { DesignWikiStormItem } from './DesignWikiStormItem'

import type { WebTypesTags, WebTypesVueJson } from '../../types/webTypes'

/**
 * Engine for generating `web-types.json` to provide rich metadata and IDE support (IntelliSense) for the design system components in JetBrains editors (IntelliJ IDEA, WebStorm).
 * It aggregates component tags, attributes, and events from the entire library and formats them into the standard Web-Types schema.
 *
 * Движок для генерации `web-types.json`, обеспечивающий расширенные метаданные и поддержку IDE (IntelliSense) для компонентов дизайн-системы в редакторах JetBrains (IntelliJ IDEA, WebStorm).
 * Он агрегирует теги компонентов, атрибуты и события из всей библиотеки и форматирует их в стандартную схему Web-Types.
 */
export class DesignWikiStorm {
  protected readonly components: LibraryItems

  /**
   * Constructor for DesignWikiStorm.
   *
   * Конструктор для DesignWikiStorm.
   * @param dir target directory for saving the `web-types.json` file / целевая директория для сохранения файла `web-types.json`
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

        await item.init()

        const tag = await item.get()

        if (tag) {
          tags.push(tag)
        }
      }
    }

    return tags
  }
}
