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
        en: 'Adaptive display mode for different screen sizes',
        ru: 'Адаптивный режим отображения для разных размеров экрана'
      }
    }
  },
  asPalette: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      defaultValue: false,
      description: {
        en: 'Changes the color depending on the palette class; otherwise, uses the default color',
        ru: 'Изменяет цвет в зависимости от класса палитры; иначе используется стандартный цвет'
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
        en: 'Mirrors the component depending on the site direction (RTL/LTR)',
        ru: 'Зеркально отражает компонент в зависимости от направления сайта (RTL/LTR)'
      }
    }
  },
  dynamic: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      defaultValue: false,
      description: {
        en: 'Makes the component dynamic, reacting to events like hover and focus',
        ru: 'Делает компонент динамичным, реагируя на события, такие как hover и focus'
      }
    }
  },
  grid: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      defaultValue: false,
      description: {
        en: 'Grid layout mode',
        ru: 'Режим сеточной разметки'
      }
    }
  },
  iconAttrs: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Additional attributes for the icon element',
        ru: 'Дополнительные атрибуты для элемента иконки'
      }
    }
  },
  iconDir: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      defaultValue: false,
      description: {
        en: 'Mirrors the icon depending on the site direction (RTL/LTR)',
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
        en: 'Changes the icon color depending on the palette class',
        ru: 'Изменяет цвет иконки в зависимости от класса палитры'
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
        en: 'Changes the trailing icon color depending on the palette class',
        ru: 'Изменяет цвет завершающей иконки в зависимости от класса палитры'
      }
    }
  },
  iconTrailingTurnOnly: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      defaultValue: false,
      description: {
        en: 'Applies turn only to the trailing icon',
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
        en: 'Inverts the colors of the component',
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
        en: 'Adds a background overlay to the component',
        ru: 'Добавляет наложение фона компоненту'
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
        en: 'Sets the color palette for the element',
        ru: 'Устанавливает цветовую палитру для элемента'
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
        en: 'Specifies the dimensions of the element',
        ru: 'Определяет размеры элемента'
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
        en: 'HTML tag for the component element',
        ru: 'HTML тег для элемента компонента'
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
        en: 'Text alignment within the element',
        ru: 'Выравнивание текста внутри элемента'
      }
    }
  }
}
