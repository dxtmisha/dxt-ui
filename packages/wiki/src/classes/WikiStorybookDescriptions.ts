import { executeFunction, Geo, isObjectNotArray } from '@dxt-ui/functional'

import type { StorybookComponentsDescriptionItem } from '../types/storybookTypes'

import { wikiDescriptions } from '../media/descriptions/wikiDescriptions'

/**
 * Class for working with Storybook component descriptions in the wiki
 *
 * Класс для работы с описаниями компонентов Storybook в вики
 */
export class WikiStorybookDescriptions {
  private readonly item?: StorybookComponentsDescriptionItem

  /**
   * Constructor
   * @param name - Name of the component to find in the descriptions/ Имя компонента для поиска в описаниях
   */
  constructor(name: string) {
    this.item = wikiDescriptions.find(item => item.name === name)
  }

  /**
   * Get an additional description of the component for a specific type
   *
   * Возвращает дополнительное описание компонента для конкретного типа
   * @param type - Type of the description to retrieve/ тип описания для получения
   */
  getDescriptionByType(type: string): any {
    const descriptions = this.item?.descriptions?.[type]

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
