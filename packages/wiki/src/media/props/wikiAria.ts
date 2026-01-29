import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiAria object contains common properties for all components in the ARIA category
 *
 * Объект wikiAria содержит общие свойства для всех компонентов в категории ARIA
 */
export const wikiAria: StorybookArgsToList = {
  ariaDescribedby: {
    type: StorybookControl.text,
    options: {
      category: StorybookCategory.aria,
      type: 'string',
      description: {
        en: 'Identifies the element(s) that describe the object',
        ru: 'Определяет элемент(ы), которые описывают объект'
      }
    }
  },
  ariaHaspopup: {
    type: StorybookControl.text,
    options: {
      category: StorybookCategory.aria,
      type: 'string',
      description: {
        en: 'Indicates the availability and type of interactive popup element',
        ru: 'Указывает на наличие и тип интерактивного всплывающего элемента'
      }
    }
  },
  ariaLabel: {
    type: StorybookControl.text,
    options: {
      category: StorybookCategory.aria,
      type: 'string',
      description: {
        en: 'Defines a label for the element for screen readers',
        ru: 'Определяет метку для элемента для программ чтения с экрана'
      }
    }
  },
  ariaLabelledby: {
    type: StorybookControl.text,
    options: {
      category: StorybookCategory.aria,
      type: 'string',
      description: {
        en: 'Identifies the element(s) that label the current element',
        ru: 'Определяет элемент(ы), которые обозначают текущий элемент'
      }
    }
  },
  ariaLive: {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.aria,
      type: 'string',
      options: ['off', 'polite', 'assertive'],
      description: {
        en: 'Indicates that an element will be updated, and describes the types of updates',
        ru: 'Указывает, что элемент будет обновляться, и описывает типы обновлений'
      }
    }
  },
  polite: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.aria,
      type: 'boolean',
      description: {
        en: 'Sets aria-live to "polite" for non-intrusive screen reader announcements',
        ru: 'Устанавливает aria-live в "polite" для ненавязчивых объявлений программы чтения с экрана'
      }
    }
  },
  role: {
    type: StorybookControl.text,
    options: {
      category: StorybookCategory.aria,
      type: 'string',
      description: {
        en: 'Defines the role of the element for accessibility',
        ru: 'Определяет роль элемента для доступности'
      }
    }
  },
  roleItem: {
    type: StorybookControl.text,
    options: {
      category: StorybookCategory.aria,
      type: 'string',
      description: {
        en: 'Defines the role of the item element for accessibility',
        ru: 'Определяет роль элемента item для доступности'
      }
    }
  },
  tabindex: {
    type: StorybookControl.number,
    options: {
      category: StorybookCategory.aria,
      type: 'number',
      description: {
        en: 'Tab order position for keyboard navigation',
        ru: 'Позиция порядка табуляции для навигации с клавиатуры'
      }
    }
  }
}
