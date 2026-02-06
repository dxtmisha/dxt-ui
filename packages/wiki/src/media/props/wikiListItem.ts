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
  'listItem.isItemMenu': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.technical,
      description: {
        en: 'Indicates if the item is a menu item. Adds aria-checked attribute for accessibility.',
        ru: 'Указывает, является ли элемент пунктом меню. Добавляет атрибут aria-checked для доступности.'
      }
    }
  },
  'listItem.isMenu': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.technical,
      description: {
        en: 'Indicates if the item is a menu. Adds aria-haspopup="menu" and aria-expanded attributes for accessibility.',
        ru: 'Указывает, является ли элемент меню. Добавляет атрибуты aria-haspopup="menu" и aria-expanded для доступности.'
      }
    }
  },
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
  'listItem.selectedChild': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.technical,
      description: {
        en: 'Indicates if any child element of this list item is selected',
        ru: 'Указывает, выбран ли какой-либо дочерний элемент данного элемента списка'
      }
    },
    isDemo: true
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
