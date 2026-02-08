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
  counter: {
    type: StorybookControl.number,
    options: {
      category: StorybookCategory.counter,
      type: ['number', 'string'],
      description: {
        en: 'Current character count',
        ru: 'Текущее количество символов'
      },
      value: 25
    }
  },
  counterShow: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.counter,
      description: {
        en: 'Shows the counter-element',
        ru: 'Показывает элемент счетчика'
      }
    },
    isDemo: true
  },
  counterId: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.counter,
      type: 'string',
      description: {
        en: 'Unique identifier for the counter element',
        ru: 'Уникальный идентификатор для элемента счетчика'
      }
    }
  },
  counterTemplate: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.counter,
      type: 'string',
      description: {
        en: 'Custom display template for the counter-component',
        ru: 'Пользовательский шаблон отображения для компонента счетчика'
      }
    },
    isDemo: true,
    demo: 'counter: [c], max: [m]',
    demoOptions: {
      counterShow: true
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
    },
    isDemo: true,
    demoOptions: {
      counterShow: true
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
