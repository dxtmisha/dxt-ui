import { type StorybookArgsToList, StorybookCategory, StorybookControl } from '../../types/storybookTypes'

export const wikiIconInclude: StorybookArgsToList = {
  icon: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.icon,
      type: ['string', 'File'],
      description: {
        en: 'Value of the main icon',
        ru: 'Значение основной иконки'
      },
      value: 'home'
    }
  },
  iconAlign: {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.icon,
      type: 'string',
      options: ['center', 'text'],
      description: {
        en: 'Sets icon alignment within the component',
        ru: 'Задает выравнивание иконки внутри компонента'
      }
    }
  },
  iconArrowDown: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.icon,
      description: {
        en: 'Sets icon for down arrow',
        ru: 'Задает иконку стрелки вниз'
      }
    }
  },
  iconArrowLeft: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.icon,
      description: {
        en: 'Sets icon for left arrow',
        ru: 'Задает иконку стрелки влево'
      }
    }
  },
  iconArrowRight: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.icon,
      description: {
        en: 'Sets icon for right arrow',
        ru: 'Задает иконку стрелки вправо'
      }
    }
  },
  iconAttrs: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.icon,
      description: {
        en: 'Sets additional attributes for the icon element',
        ru: 'Задает дополнительные атрибуты для элемента иконки'
      }
    }
  },
  iconBack: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.icon,
      description: {
        en: 'Sets icon for back button',
        ru: 'Задает иконку для кнопки назад'
      }
    }
  },
  iconCancel: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.icon,
      description: {
        en: 'Sets icon for cancel/clear action',
        ru: 'Задает иконку для действия отмены/очистки'
      }
    }
  },
  iconClose: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.icon,
      description: {
        en: 'Sets icon for close button',
        ru: 'Задает иконку для кнопки закрытия'
      }
    }
  },
  iconDir: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.icon,

      description: {
        en: 'Mirrors the icon depending on site direction (RTL/LTR)',
        ru: 'Зеркально отражает иконку в зависимости от направления сайта (RTL/LTR)'
      }
    }
  },
  iconError: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.icon,
      description: {
        en: 'Sets icon displayed in error state',
        ru: 'Задает иконку, отображаемую в состоянии ошибки'
      }
    }
  },
  iconHide: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.icon,

      description: {
        en: 'Hides the icon',
        ru: 'Скрывает иконку'
      }
    }
  },
  iconMinus: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.icon,
      description: {
        en: 'Sets icon for decrement / minus action',
        ru: 'Задает иконку для действия уменьшения (минус)'
      }
    }
  },
  iconPalette: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.icon,

      description: {
        en: 'Sets icon color based on palette class',
        ru: 'Задает цвет иконки на основе класса палитры'
      }
    }
  },
  iconPlus: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.icon,
      description: {
        en: 'Sets icon for increment / plus action',
        ru: 'Задает иконку для действия увеличения (плюс)'
      }
    }
  },
  iconSearch: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.icon,
      type: ['string', 'File'],
      description: {
        en: 'Sets icon for search action',
        ru: 'Задает иконку для действия поиска'
      },
      value: 'search'
    }
  },
  iconShow: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Controls visibility of icons in displayed items',
        ru: 'Управляет видимостью иконок в отображаемых элементах'
      }
    }
  },
  iconSuccess: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.icon,
      description: {
        en: 'Sets icon displayed in success state',
        ru: 'Задает иконку, отображаемую в состоянии успеха'
      }
    }
  },
  iconTop: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.icon,

      description: {
        en: 'Aligns icon to the top of the container',
        ru: 'Выравнивает иконку по верхнему краю контейнера'
      }
    }
  },
  iconTrailing: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.icon,
      type: ['string', 'File'],
      description: {
        en: 'Value of the trailing icon',
        ru: 'Значение завершающей иконки'
      }
    }
  },
  iconTrailingDirOnly: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.icon,

      description: {
        en: 'Applies direction mirroring only to the trailing icon',
        ru: 'Применяет зеркальное отражение только к завершающей иконке'
      }
    }
  },
  iconTrailingPalette: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.icon,

      description: {
        en: 'Sets trailing icon color based on palette class',
        ru: 'Задает цвет завершающей иконки на основе класса палитры'
      }
    }
  },
  iconTrailingTurnOnly: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.icon,

      description: {
        en: 'Applies rotation only to the trailing icon',
        ru: 'Применяет поворот только к завершающей иконке'
      }
    }
  },
  iconTurn: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.icon,

      description: {
        en: 'Turns the icon',
        ru: 'Поворачивает иконку'
      }
    }
  },
  iconVisibility: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.icon,
      description: {
        en: 'Sets icon for visibility on state (show password)',
        ru: 'Задает иконку для состояния видимости (показать пароль)'
      }
    }
  },
  iconVisibilityOff: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.icon,
      description: {
        en: 'Sets icon for visibility off state (hide password)',
        ru: 'Задает иконку для состояния скрытия (скрыть пароль)'
      }
    }
  },
  iconWhenSelected: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.icon,
      description: {
        en: 'Shows the icon only when the element is selected',
        ru: 'Показывает иконку только при выборе элемента'
      }
    }
  }
}
