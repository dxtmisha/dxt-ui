import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiStyle object contains common properties for all components in the style category.
 *
 * Объект wikiStyle содержит общие свойства для всех компонентов в категории стиль.
 */
export const wikiStyle: StorybookArgsToList = {
  adaptive: {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.style,
      type: 'string',
      options: [],
      description: {
        en: 'Controls adaptive display behavior for different screen sizes and media queries',
        ru: 'Управляет адаптивным поведением отображения для разных размеров экрана и медиа‑запросов'
      }
    }

  },
  align: {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.style,
      type: 'string',
      options: [],
      description: {
        en: 'General alignment depending on component semantics',
        ru: 'Общее выравнивание в зависимости от семантики компонента'
      }
    },
    isDemo: true
  },
  asPalette: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,

      description: {
        en: 'Sets color based on palette class; otherwise uses default color',
        ru: 'Задает цвет на основе класса палитры; иначе используется стандартный цвет'
      }
    }
  },
  autosize: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,

      description: {
        en: 'Automatically adjusts the component size based on content',
        ru: 'Автоматически подстраивает размер компонента под содержимое'
      }
    }
  },
  barsAdaptive: {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Indicates whether the bars (header toolbar) should be shown',
        ru: 'Показывает, нужно ли отображать бар (верхнюю панель)'
      }
    }
  },
  block: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Enables block mode (component expands to full width)',
        ru: 'Включает блочный режим (компонент растягивается на всю ширину)'
      }
    }
  },
  closeButton: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Shows a close button in the header',
        ru: 'Показывает кнопку закрытия в заголовке'
      }
    },
    isDemo: true
  },
  container: {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.style,
      type: 'string',
      options: [],
      description: {
        en: 'Controls container‑based layout behavior with adaptive width constraints',
        ru: 'Управляет контейнерной раскладкой с адаптивными ограничениями ширины'
      }
    }
  },
  dense: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Enables compact display variant',
        ru: 'Включает компактный вариант отображения'
      }
    },
    isDemo: true
  },
  divider: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,

      description: {
        en: 'Enables visual divider between elements',
        ru: 'Включает визуальный разделитель между элементами'
      }
    }
  },
  dividerLabel: {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.style,
      type: 'string',
      description: {
        en: 'Adds divider only under the label',
        ru: 'Добавляет разделитель только под меткой'
      }
    }
  },
  dot: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,

      description: {
        en: 'Displays the component as a dot indicator',
        ru: 'Отображает компонент как точечный индикатор'
      }
    },
    isDemo: true
  },
  fill: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.style,
      type: 'string',
      description: {
        en: 'Sets fill color for the component',
        ru: 'Задает цвет заливки компонента'
      }
    },
    isDemo: true,
    demo: 'oklch(53.2% 0.157 131.589)'
  },
  flexible: {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Enables flexible layout behavior that automatically adapts to available space',
        ru: 'Включает гибкое поведение раскладки, автоматически адаптирующееся к доступному пространству'
      }
    }
  },
  height: {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.style,
      type: 'string',
      options: [],
      description: {
        en: 'Sets component height',
        ru: 'Задает высоту компонента'
      }
    }
  },
  imagePosition: {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Defines image placement within the window layout',
        ru: 'Определяет расположение изображения внутри макета окна'
      },
      options: ['left', 'top']
    },
    isDemo: true,
    demoOptions: {
      image: 'https://drscdn.500px.org/photo/294267357/q%3D90_m%3D2048/v2?sig=adb52b9add18ad21ab4a86b99695377f2a18821c609d42149b3426dfb99cf924'
    }
  },
  inverse: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,

      description: {
        en: 'Inverts component colors',
        ru: 'Инвертирует цвета компонента'
      }
    }
  },
  isSkeleton: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,

      description: {
        en: 'Displays the component in skeleton mode',
        ru: 'Отображает компонент в режиме скелетона'
      }
    }
  },
  maxWidth: {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.style,
      type: 'string',
      options: [],
      description: {
        en: 'Sets the maximum width of the component',
        ru: 'Задает максимальную ширину компонента'
      }
    },
    isDemo: true
  },
  overlay: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Adds background overlay to the component',
        ru: 'Добавляет фоновую подложку к компоненту'
      }
    },
    isDemo: true
  },
  padding: {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.style,
      type: 'string',
      options: [],
      description: {
        en: 'Sets internal spacing around the content. If `paddingByIndent` is enabled, the `padding` value is ignored.',
        ru: 'Задает внутренние отступы вокруг содержимого. Если включен `paddingByIndent`, значение `padding` игнорируется.'
      }
    },
    isDemo: true,
    demoOptions: {
      paddingByIndent: false
    }
  },
  paddingByIndent: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Applies horizontal padding based on grid indent values',
        ru: 'Применяет горизонтальные отступы на основе значений отступов сетки'
      }
    }
  },
  palette: {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.style,
      options: [],
      type: 'string',
      description: {
        en: 'Sets a color palette for the element',
        ru: 'Задает цветовую палитру для элемента'
      }
    }
  },
  position: {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.style,
      type: 'string',
      options: [],
      description: {
        en: 'Sets the positioning method for the element',
        ru: 'Задает метод позиционирования элемента'
      }
    },
    isDemo: true
  },
  rounded: {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.style,
      options: [],
      type: 'string',
      description: {
        en: 'Adds rounded corners to the component',
        ru: 'Добавляет скругленные углы компоненту'
      }
    }
  },
  roundedFull: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,

      description: {
        en: 'Makes the component fully rounded (circular)',
        ru: 'Делает компонент полностью скругленным (круглым)'
      }
    },
    isDemo: true
  },
  size: {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.style,
      options: [],
      type: 'string',
      description: {
        en: 'Sets component size',
        ru: 'Задает размер компонента'
      }
    },
    isDemo: true
  },
  textAlign: {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.style,
      type: 'string',
      options: [],
      description: {
        en: 'Sets text alignment within the element',
        ru: 'Задает выравнивание текста внутри элемента'
      }
    }
  },
  width: {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.style,
      type: 'string',
      options: [],
      description: {
        en: 'Sets component width',
        ru: 'Задает ширину компонента'
      }
    },
    isDemo: true
  },
  wrap: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      type: 'boolean',
      description: {
        en: 'Controls text wrapping behavior',
        ru: 'Управляет поведением переноса текста'
      }
    },
    isDemo: true
  }
}
