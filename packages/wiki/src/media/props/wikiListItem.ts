import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiListItem object contains descriptions of all properties for the ListItem component
 *
 * Объект wikiListItem содержит описание всех свойств для компонента ListItem
 */
export const wikiListItem: StorybookArgsToList = {
  'listItem.open': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.status,
      defaultValue: false,
      description: {
        en: 'Visual open state of the list item',
        ru: 'Визуальное открытое состояние элемента списка'
      }
    }
  },
  'listItem.search': {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.technical,
      type: 'string',
      description: {
        en: 'Technical property for internal search functionality',
        ru: 'Техническое свойство для внутренней функциональности поиска'
      }
    }
  },
  'listItem.type': {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.technical,
      type: 'string',
      description: {
        en: 'Technical property for internal type classification',
        ru: 'Техническое свойство для внутренней классификации типов'
      }
    }
  }
}
