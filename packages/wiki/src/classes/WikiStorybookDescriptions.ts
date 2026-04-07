import { executeFunction, Geo, isObjectNotArray } from '@dxtmisha/functional'

import type {
  StorybookComponentsDescription,
  StorybookComponentsDescriptionItem,
  StorybookComponentsMdx,
  StorybookComponentsMdxItem
} from '../types/storybookTypes'

/**
 * Class for working with Storybook component descriptions in the wiki
 *
 * Класс для работы с описаниями компонентов Storybook в вики
 */
export class WikiStorybookDescriptions {
  private readonly item?: StorybookComponentsDescriptionItem
  private readonly mdx?: StorybookComponentsMdxItem

  private static wikiDescriptions?: StorybookComponentsDescription
  private static wikiMdx?: StorybookComponentsMdx

  /**
   * Set the wiki descriptions and mdx
   *
   * Устанавливает описания вики и mdx
   * @param descriptions - Descriptions of the components/ Описания компонентов
   * @param mdx - MDX descriptions of the components/ Описания компонентов в формате MDX
   */
  static setWiki(
    descriptions?: StorybookComponentsDescription,
    mdx?: StorybookComponentsMdx
  ) {
    this.wikiDescriptions = descriptions
    this.wikiMdx = mdx
  }

  /**
   * Constructor
   * @param name - Name of the component to find in the descriptions/ Имя компонента для поиска в описаниях
   */
  constructor(name: string) {
    this.item = WikiStorybookDescriptions.wikiDescriptions?.find(item => item.name === name)
    this.mdx = WikiStorybookDescriptions.wikiMdx?.find(item => item.name === name)
  }

  /**
   * Get the description of the component
   *
   * Возвращает описание компонента
   * @return The description of the component or undefined if not found/ Описание компонента или undefined, если не найдено
   */
  getItem(): StorybookComponentsDescriptionItem | undefined {
    return this.item
  }

  /**
   * Get an additional description of the component for a specific type
   *
   * Возвращает дополнительное описание компонента для конкретного типа
   * @param type - Type of the description to retrieve/ тип описания для получения
   */
  getDescriptionByType(type: string): any {
    const descriptions = this.mdx?.descriptions?.[type]

    return executeFunction((() => {
      if (descriptions) {
        if (isObjectNotArray(descriptions)) {
          return descriptions[Geo.getLanguage()]
        }

        return descriptions
      }

      return ''
    })())
  }
}
