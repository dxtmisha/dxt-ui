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
