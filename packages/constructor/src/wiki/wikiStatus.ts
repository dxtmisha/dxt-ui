import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '@dxt-ui/functional'

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
      // Поворачивает элемент на 180 градусов
      description: 'Rotates the element by 180 degrees'
    }
  },
  disabled: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.status,
      defaultValue: false,
      // Переводит элемент в неактивное состояние
      description: 'Sets the element to an inactive state'
    }
  },
  hide: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.status,
      defaultValue: false,
      // Скрывает элемент
      description: 'Hides the element'
    }
  }
}
