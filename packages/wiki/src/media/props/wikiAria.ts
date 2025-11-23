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
  }
}
