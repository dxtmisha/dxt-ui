import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'
import { wikiTabsNavigation } from './wikiTabsNavigation.ts'

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
    },
    isDemo: true,
    demo: '123'
  },
  badgeDot: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.value,
      description: {
        en: 'Display badge as a dot indicator',
        ru: 'Отображать значок как точечный индикатор'
      }
    },
    isDemo: true
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
    },
    isDemo: true,
    demo: 'USD',
    demoOptions: {
      type: 'currency'
    }
  },
  detail: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.value,
      type: 'Record<string, any>',
      description: {
        en: 'Additional data is passed by the component when events are triggered',
        ru: 'Дополнительные данные, передаваемые компонентом при срабатывании событий'
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
        ru: 'Текст для выделения в содержимом компоненте'
      }
    },
    isDemo: true,
    demo: 'abe'
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
  href: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.value,
      type: 'string',
      description: {
        en: 'URL or link destination',
        ru: 'URL или адрес ссылки'
      }
    }
  },
  tabs: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.value,
      description: {
        en: 'Tabs list or TabsNavigation properties',
        ru: 'Список вкладок или свойства TabsNavigation'
      },
      value: wikiTabsNavigation?.['tabsNavigation.list']?.options?.value
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
  }
}
