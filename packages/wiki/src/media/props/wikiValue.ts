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
      defaultValue: false,
      description: {
        en: 'Display badge as a dot indicator',
        ru: 'Отображать значок как точечный индикатор'
      }
    }
  },
  barsDescription: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.value,
      type: 'string',
      description: {
        en: 'Description text displayed in the bars area (subtitle/help)',
        ru: 'Текст описания, отображаемый в области бара (подзаголовок/подсказка)'
      }
    }
  },
  barsLabel: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.value,
      type: ['string', 'number'],
      description: {
        en: 'Label or numeric indicator shown in the bars header',
        ru: 'Метка или числовой индикатор, отображаемый в заголовке бара'
      }
    }
  },
  barsList: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.value,
      description: {
        en: 'Array of buttons displayed in the bars area (actions)',
        ru: 'Массив кнопок, отображаемых в области бара (действия)'
      },
      value: [
        { icon: 'home', label: 'Home' },
        { icon: 'search', label: 'Search' },
        { icon: 'settings', label: 'Settings' }
      ]
    }
  },
  caption: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.value,
      type: 'string',
      description: {
        en: 'Caption text for additional information',
        ru: 'Текст подписи для дополнительной информации'
      },
      value: 'Caption'
    }
  },
  description: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.value,
      type: 'string',
      description: {
        en: 'Description text providing additional context',
        ru: 'Текст описания, предоставляющий дополнительный контекст'
      },
      value: 'Here is a detailed description of the component'
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
      defaultValue: false,
      description: {
        en: 'Whether to format values before displaying',
        ru: 'Нужно ли форматировать значения перед отображением'
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
  labelMax: {
    type: StorybookControl.number,
    options: {
      category: StorybookCategory.value,
      type: 'number',
      description: {
        en: 'Maximum length of the label text before truncation',
        ru: 'Максимальная длина текста метки перед обрезкой'
      }
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
  prefix: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.value,
      type: 'string',
      description: {
        en: 'Prefix text displayed before the main content',
        ru: 'Текст префикса, отображаемый перед основным содержимым'
      },
      value: 'Prefix'
    }
  },
  suffix: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.value,
      type: 'string',
      description: {
        en: 'Suffix text displayed after the main content',
        ru: 'Текст суффикса, отображаемый после основного содержимого'
      },
      value: 'Suffix'
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
