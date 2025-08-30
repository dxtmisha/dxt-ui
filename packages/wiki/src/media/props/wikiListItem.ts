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
  'listItem.listId': {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.technical,
      description: {
        en: 'Unique identifier for the list item. Used for tracking and referencing specific items within the list structure.',
        ru: 'Уникальный идентификатор элемента списка. Используется для отслеживания и ссылки на конкретные элементы в структуре списка.'
      }
    }
  },
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
  'listItem.parent': {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.technical,
      description: {
        en: 'Identifier of the parent element in hierarchical list structure. Used for establishing parent-child relationships between list items.',
        ru: 'Идентификатор родительского элемента в иерархической структуре списка. Используется для установления связей родитель-ребенок между элементами списка.'
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
