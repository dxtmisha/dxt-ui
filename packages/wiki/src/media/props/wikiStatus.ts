import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiStatus object contains common properties for all components in the status category
 *
 * Объект wikiStatus содержит общие свойства для всех компонентов в категории статус
 */
export const wikiStatus: StorybookArgsToList = {
  turn: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.status,
      defaultValue: false,
      description: {
        en: 'Rotates the element by 180 degrees',
        ru: 'Поворачивает элемент на 180 градусов'
      }
    }
  },
  disabled: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.status,
      defaultValue: false,
      description: {
        en: 'Sets the element to an inactive state',
        ru: 'Переводит элемент в неактивное состояние'
      }
    }
  },
  hide: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.status,
      defaultValue: false,
      description: {
        en: 'Hides the element',
        ru: 'Скрывает элемент'
      }
    }
  }
}
