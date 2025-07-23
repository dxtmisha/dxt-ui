import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiValue object contains common properties for all components in the value category
 *
 * Объект wikiValue содержит общие свойства для всех компонентов в категории значение
 */
export const wikiValue: StorybookArgsToList = {
  detail: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.value,
      type: 'Record<string, any>',
      description: {
        en: 'Additional data passed by the component when events are triggered',
        ru: 'Дополнительные данные, передаваемые компонентом при срабатывании событий'
      }
    }
  },
  icon: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.value,
      type: ['string', 'File'],
      description: {
        en: 'Value of the main icon',
        ru: 'Значение основной иконки'
      },
      value: 'home'
    }
  },
  iconTrailing: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.value,
      type: ['string', 'File'],
      description: {
        en: 'Value of the trailing icon',
        ru: 'Значение завершающей иконки'
      }
    }
  },
  image: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.value,
      type: 'string | File | ImageProps',
      description: {
        en: 'Specifies the image value for the component',
        ru: 'Указывает значение изображения для компонента'
      }
    }
  },
  label: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.value,
      type: 'string',
      description: {
        en: 'Text label for the component',
        ru: 'Текстовая метка для компонента'
      },
      value: 'Label'
    }
  },
  max: {
    type: StorybookControl.number,
    options: {
      category: StorybookCategory.value,
      type: ['number', 'string'],
      defaultValue: 100,
      description: {
        en: 'Maximum value',
        ru: 'Максимальное значение'
      }
    }
  },
  to: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.value,
      type: 'RouteLocationRaw',
      description: {
        en: 'Navigation target or destination for the component',
        ru: 'Цель навигации или назначение для компонента'
      }
    }
  },
  value: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.value,
      type: ['number', 'string'],
      description: {
        en: 'Current value',
        ru: 'Текущее значение'
      }
    }
  }
}
