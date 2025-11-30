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
  badge: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.value,
      type: 'string',
      description: {
        en: 'Badge text or value to display',
        ru: 'Текст или значение значка для отображения'
      }
    }
  },
  badgeDot: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.value,
      description: {
        en: 'Display badge as a dot indicator',
        ru: 'Отображать значок как точечный индикатор'
      }
    }
  },
  counter: {
    type: StorybookControl.number,
    options: {
      category: StorybookCategory.value,
      type: ['number', 'string'],
      description: {
        en: 'Current character count',
        ru: 'Текущее количество символов'
      },
      value: 25
    }
  },
  currency: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.value,
      type: 'string',
      description: {
        en: 'Currency code for formatting monetary values',
        ru: 'Код валюты для форматирования денежных значений'
      }
    }
  },
  currencyHide: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.value,
      description: {
        en: 'Hide the currency symbol in the formatted value',
        ru: 'Скрывать символ валюты в форматированном значении'
      }
    }
  },
  language: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.value,
      type: 'string',
      description: {
        en: 'Language/locale code (BCP 47) used for formatting values (e.g., en-US, ru-RU)',
        ru: 'Код языка/локали (BCP 47) для форматирования значений (например, ru-RU, en-US)'
      }
    }
  },
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
  formatting: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.value,
      description: {
        en: 'Whether to format values before displaying',
        ru: 'Нужно ли форматировать значения перед отображением'
      }
    }
  },
  fraction: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.value,
      type: ['string', 'number', 'boolean'],
      description: {
        en: 'Fraction configuration for numeric masks (digits count or special mode)',
        ru: 'Настройка дробной части для числовых масок (количество знаков или режим)'
      }
    }
  },
  highlight: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.value,
      type: 'string',
      description: {
        en: 'Text to highlight within the component content',
        ru: 'Текст для выделения в содержимом компонента'
      }
    }
  },
  highlightLengthStart: {
    type: StorybookControl.number,
    options: {
      category: StorybookCategory.value,
      type: 'number',
      description: {
        en: 'Minimum length of highlight value to start highlighting',
        ru: 'Минимальная длина значения highlight для начала выделения'
      }
    }
  },
  keyLabel: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.value,
      type: 'string',
      description: {
        en: 'Object key to use as label text',
        ru: 'Ключ объекта для использования в качестве текста метки'
      }
    }
  },
  keyValue: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.value,
      type: 'string',
      description: {
        en: 'Object key to use as value text',
        ru: 'Ключ объекта для использования в качестве текста значения'
      }
    }
  },
  index: {
    type: StorybookControl.number,
    options: {
      category: StorybookCategory.value,
      type: 'number',
      description: {
        en: 'Index value for the component',
        ru: 'Значение индекса для компонента'
      }
    }
  },
  name: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.value,
      type: 'string',
      description: {
        en: 'Name attribute for the input field',
        ru: 'Атрибут name для поля ввода'
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
  valueDefault: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.value,
      type: ['string', 'number'],
      description: {
        en: 'Default value for the input field',
        ru: 'Значение по умолчанию для поля ввода'
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
