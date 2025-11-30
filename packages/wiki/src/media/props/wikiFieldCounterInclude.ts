import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiFieldCounterInclude object contains descriptions of all properties for the FieldCounter include
 *
 * Объект wikiFieldCounterInclude содержит описание всех свойств для включения FieldCounter
 */
export const wikiFieldCounterInclude: StorybookArgsToList = {
  counterShow: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.counter,

      description: {
        en: 'Shows the counter element',
        ru: 'Показывает элемент счетчика'
      }
    }
  },
  counterTemplate: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.counter,
      type: 'string',
      description: {
        en: 'Custom display template for the counter component',
        ru: 'Пользовательский шаблон отображения для компонента счетчика'
      }
    }
  },
  counterTop: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.counter,
      description: {
        en: 'Displays the counter above the field',
        ru: 'Отображает счетчик над полем'
      }
    }
  },
  fieldCounterAttrs: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.counter,
      description: {
        en: 'Additional attributes for the field counter component',
        ru: 'Дополнительные атрибуты для компонента счетчика поля'
      }
    }
  }
}
