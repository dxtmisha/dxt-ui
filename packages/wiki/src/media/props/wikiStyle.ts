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
  asPalette: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      defaultValue: false,
      description: {
        en: 'Sets color based on palette class; otherwise uses default color',
        ru: 'Задает цвет на основе класса палитры; иначе используется стандартный цвет'
      }
    }
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
      defaultValue: false,
      description: {
        en: 'Enables compact display variant',
        ru: 'Включает компактный вариант отображения'
      }
    }
  },
  dir: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      defaultValue: false,
      description: {
        en: 'Mirrors the component depending on site direction (RTL/LTR)',
        ru: 'Зеркально отражает компонент в зависимости от направления сайта (RTL/LTR)'
      }
    }
  },
  divider: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      defaultValue: false,
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
      defaultValue: false,
      description: {
        en: 'Displays the component as a dot indicator',
        ru: 'Отображает компонент как точечный индикатор'
      }
    }
  },
  dynamic: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      defaultValue: false,
      description: {
        en: 'Enables dynamic reactions to hover and focus',
        ru: 'Включает динамическую реакцию на hover и focus'
      }
    }
  },
  dynamicHover: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      defaultValue: false,
      description: {
        en: 'Enables dynamic hover effect for the component',
        ru: 'Включает динамический эффект наведения для компонента'
      }
    }
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
    }
  },
  grid: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      defaultValue: false,
      description: {
        en: 'Enables grid layout mode',
        ru: 'Включает режим сетки'
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
  horizontal: {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.style,
      type: 'string',
      options: [],
      description: {
        en: 'Sets horizontal alignment of elements',
        ru: 'Задает горизонтальное выравнивание элементов'
      }
    }
  },
  iconAlign: {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.style,
      type: 'string',
      options: ['center', 'text'],
      description: {
        en: 'Sets icon alignment within the component',
        ru: 'Задает выравнивание иконки внутри компонента'
      }
    }
  },
  iconAttrs: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Sets additional attributes for the icon element',
        ru: 'Задает дополнительные атрибуты для элемента иконки'
      }
    }
  },
  iconDir: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      defaultValue: false,
      description: {
        en: 'Mirrors the icon depending on site direction (RTL/LTR)',
        ru: 'Зеркально отражает иконку в зависимости от направления сайта (RTL/LTR)'
      }
    }
  },
  iconPalette: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      defaultValue: false,
      description: {
        en: 'Sets icon color based on palette class',
        ru: 'Задает цвет иконки на основе класса палитры'
      }
    }
  },
  iconTop: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      defaultValue: false,
      description: {
        en: 'Aligns icon to the top of the container',
        ru: 'Выравнивает иконку по верхнему краю контейнера'
      }
    }
  },
  iconTrailingDirOnly: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      defaultValue: false,
      description: {
        en: 'Applies direction mirroring only to the trailing icon',
        ru: 'Применяет зеркальное отражение только к завершающей иконке'
      }
    }
  },
  iconTrailingPalette: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      defaultValue: false,
      description: {
        en: 'Sets trailing icon color based on palette class',
        ru: 'Задает цвет завершающей иконки на основе класса палитры'
      }
    }
  },
  iconTrailingTurnOnly: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      defaultValue: false,
      description: {
        en: 'Applies rotation only to the trailing icon',
        ru: 'Применяет поворот только к завершающей иконке'
      }
    }
  },
  inverse: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      defaultValue: false,
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
      defaultValue: false,
      description: {
        en: 'Displays the component in skeleton mode',
        ru: 'Отображает компонент в режиме скелетона'
      }
    }
  },
  overlay: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      defaultValue: false,
      description: {
        en: 'Adds background overlay to the component',
        ru: 'Добавляет фоновое наложение компоненту'
      }
    }
  },
  overlap: {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.style,
      type: 'string',
      options: [],
      description: {
        en: 'Defines element positioning relative to other elements',
        ru: 'Определяет расположение элемента относительно других элементов'
      }
    }
  },
  padding: {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.style,
      type: 'string',
      options: [],
      description: {
        en: 'Sets internal spacing around the content',
        ru: 'Задает внутренние отступы вокруг содержимого'
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
        en: 'Sets color palette for the element',
        ru: 'Задает цветовую палитру для элемента'
      }
    }
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
      defaultValue: false,
      description: {
        en: 'Makes the component fully rounded (circular)',
        ru: 'Делает компонент полностью скругленным (круглым)'
      }
    }
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
    }
  },
  tag: {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.style,
      type: 'string',
      defaultValue: 'div',
      options: [],
      description: {
        en: 'Sets HTML tag for the component element',
        ru: 'Задает HTML‑тег для элемента компонента'
      }
    }
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
  vertical: {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.style,
      type: 'string',
      options: [],
      description: {
        en: 'Sets vertical alignment of elements',
        ru: 'Задает вертикальное выравнивание элементов'
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
    }
  }
}
