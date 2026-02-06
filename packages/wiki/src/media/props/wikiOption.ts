import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * Props for the Wiki component in Storybook
 *
 * Свойства для компонента Wiki в Storybook
 */
export const wikiOption: StorybookArgsToList = {
  autoClose: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.option,

      description: {
        en: 'Closes the window/menu when clicking inside the content area',
        ru: 'Закрывает окно/меню при клике внутри области содержимого'
      }
    }
  },
  clickOpen: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.option,
      description: {
        en: 'Enable opening on click',
        ru: 'Включение открытия по клику'
      }
    }
  },
  dir: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.option,

      description: {
        en: 'Mirrors the component depending on a site direction (RTL/LTR)',
        ru: 'Зеркально отражает компонент в зависимости от направления сайта (RTL/LTR)'
      }
    }
  },
  dynamic: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.option,

      description: {
        en: 'Enables dynamic reactions to hover and focus',
        ru: 'Включает динамическую реакцию на hover и focus'
      }
    },
    isDemo: true
  },
  dynamicHover: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.option,

      description: {
        en: 'Enables dynamic hover effect for the component',
        ru: 'Включает динамический эффект наведения для компонента'
      }
    }
  },
  filterMode: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.option,
      description: {
        en: 'Enables filter mode for search (hides non-matching items)',
        ru: 'Включает режим фильтрации для поиска (скрывает несовпадающие элементы)'
      }
    }
  },
  formatting: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.option,
      description: {
        en: 'Whether to format values before displaying',
        ru: 'Нужно ли форматировать значения перед отображением'
      }
    },
    isDemo: true,
    demoOptions: {
      label: 1234567
    }
  },
  grid: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.option,
      description: {
        en: 'Enables grid layout mode',
        ru: 'Включает режим сетки'
      }
    }
  },
  horizontal: {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.option,
      type: 'string',
      options: [],
      description: {
        en: 'Sets horizontal alignment of elements',
        ru: 'Задает горизонтальное выравнивание элементов'
      }
    },
    isDemo: true,
    demoOptions: {
      overlap: 'rectangular'
    }
  },
  inDom: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.option,
      description: {
        en: 'Indicates whether the window is in the DOM',
        ru: 'Указывает, присутствует ли окно в DOM'
      }
    }
  },
  interactive: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.option,
      description: {
        en: 'Enables interactive mode for the component',
        ru: 'Включает интерактивный режим для компонента'
      }
    }
  },
  isSkeleton: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.option,

      description: {
        en: 'Displays the component in skeleton mode',
        ru: 'Отображает компонент в режиме скелетона'
      }
    }
  },
  keyLabel: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.option,
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
      category: StorybookCategory.option,
      type: 'string',
      description: {
        en: 'Object key to use as value text',
        ru: 'Ключ объекта для использования в качестве текста значения'
      }
    }
  },
  labelMax: {
    type: StorybookControl.number,
    options: {
      category: StorybookCategory.option,
      type: 'number',
      description: {
        en: 'Maximum length of the label text before truncation',
        ru: 'Максимальная длина текста метки перед обрезкой'
      }
    },
    isDemo: true,
    demo: 1000,
    demoOptions: {
      label: 1234567
    }
  },
  overlap: {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.option,
      type: 'string',
      options: [],
      description: {
        en: 'Defines element positioning relative to other elements',
        ru: 'Определяет расположение элемента относительно других элементов'
      }
    },
    isDemo: true
  },
  tag: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.option,
      type: 'string',
      description: {
        en: 'Sets HTML tag for the component element',
        ru: 'Задает HTML‑тег для элемента компонента'
      }
    }
  },
  tagBody: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.option,
      type: 'string',
      description: {
        en: 'Sets HTML tag for the body/content container element',
        ru: 'Задает HTML‑тег для элемента контейнера тела/содержимого'
      }
    }
  },
  tagHeader: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.option,
      type: 'string',
      description: {
        en: 'Sets HTML tag for the header container element',
        ru: 'Задает HTML‑тег для элемента контейнера шапки'
      }
    }
  },
  touchClose: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.option,
      description: {
        en: 'Enables closing the component by a swipe-down gesture on mobile devices',
        ru: 'Включает закрытие компонента жестом свайпа вниз на мобильных устройствах'
      }
    }
  },
  type: {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.option,
      type: 'string',
      options: [],
      description: {
        en: 'Selects the visual type/variant of the component',
        ru: 'Выбирает визуальный тип/вариант компонента'
      }
    }
  },
  vertical: {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.option,
      type: 'string',
      options: [],
      description: {
        en: 'Sets vertical alignment of elements',
        ru: 'Задает вертикальное выравнивание элементов'
      }
    },
    isDemo: true,
    demoOptions: {
      overlap: 'rectangular'
    }
  }
}
