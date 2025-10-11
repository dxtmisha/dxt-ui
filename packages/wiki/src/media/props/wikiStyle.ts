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
    }
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
  autoClose: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,

      description: {
        en: 'Closes the window/menu when clicking inside the content area',
        ru: 'Закрывает окно/меню при клике внутри области содержимого'
      }
    }
  },
  axis: {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.style,
      type: 'string',
      options: [],
      description: {
        en: 'Sets the axis direction for component layout or scrolling',
        ru: 'Задает направление оси для раскладки или прокрутки компонента'
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
  barsAttrs: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Additional attributes for the bars (header toolbar) container',
        ru: 'Дополнительные атрибуты для контейнера бара (верхней панели)'
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
  buttonAttrs: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Additional attributes for button elements',
        ru: 'Дополнительные атрибуты для элементов кнопок'
      }
    }
  },
  cellAttrs: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Additional attributes for the Cell component',
        ru: 'Дополнительные атрибуты для компонента Cell'
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
  counterShow: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,

      description: {
        en: 'Shows the counter element',
        ru: 'Показывает элемент счетчика'
      }
    }
  },
  counterTemplate: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.style,
      type: 'string',
      description: {
        en: 'Custom display template for the counter component',
        ru: 'Пользовательский шаблон отображения для компонента счетчика'
      }
    }
  },
  counterTop: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Displays the counter above the field',
        ru: 'Отображает счетчик над полем'
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
    }
  },
  dir: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,

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
    }
  },
  dynamic: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,

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

      description: {
        en: 'Enables dynamic hover effect for the component',
        ru: 'Включает динамический эффект наведения для компонента'
      }
    }
  },
  fieldCounterAttrs: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Additional attributes for the field counter component',
        ru: 'Дополнительные атрибуты для компонента счетчика поля'
      }
    }
  },
  fieldLabelAttrs: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Additional attributes for the FieldLabel element',
        ru: 'Дополнительные атрибуты для элемента FieldLabel'
      }
    }
  },
  fieldMessageAttrs: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Additional attributes for the FieldMessage element',
        ru: 'Дополнительные атрибуты для элемента FieldMessage'
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
  iconArrowDown: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Sets icon for down arrow',
        ru: 'Задает иконку стрелки вниз'
      }
    }
  },
  iconArrowLeft: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Sets icon for left arrow',
        ru: 'Задает иконку стрелки влево'
      }
    }
  },
  iconArrowRight: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Sets icon for right arrow',
        ru: 'Задает иконку стрелки вправо'
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
  iconBack: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Sets icon for back button',
        ru: 'Задает иконку для кнопки назад'
      }
    }
  },
  iconCancel: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Sets icon for cancel/clear action',
        ru: 'Задает иконку для действия отмены/очистки'
      }
    }
  },
  iconClose: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Sets icon for close button',
        ru: 'Задает иконку для кнопки закрытия'
      }
    }
  },
  iconDir: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,

      description: {
        en: 'Mirrors the icon depending on site direction (RTL/LTR)',
        ru: 'Зеркально отражает иконку в зависимости от направления сайта (RTL/LTR)'
      }
    }
  },
  iconMinus: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Sets icon for decrement / minus action',
        ru: 'Задает иконку для действия уменьшения (минус)'
      }
    }
  },
  iconPalette: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,

      description: {
        en: 'Sets icon color based on palette class',
        ru: 'Задает цвет иконки на основе класса палитры'
      }
    }
  },
  iconPlus: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Sets icon for increment / plus action',
        ru: 'Задает иконку для действия увеличения (плюс)'
      }
    }
  },
  iconTop: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,

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

      description: {
        en: 'Applies rotation only to the trailing icon',
        ru: 'Применяет поворот только к завершающей иконке'
      }
    }
  },
  inputAttrs: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Additional attributes for the native input element',
        ru: 'Дополнительные атрибуты для нативного элемента input'
      }
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
  motionTransformAttrs: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Additional attributes for the MotionTransform component',
        ru: 'Дополнительные атрибуты для компонента MotionTransform'
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
  overlay: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Adds background overlay to the component',
        ru: 'Добавляет фоновую подложку к компоненту'
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

      description: {
        en: 'Makes the component fully rounded (circular)',
        ru: 'Делает компонент полностью скругленным (круглым)'
      }
    }
  },
  scrollbarAttrs: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Sets attributes for the internal scrollbar',
        ru: 'Задает атрибуты встроенного скроллбара'
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
      options: [],
      description: {
        en: 'Sets HTML tag for the component element',
        ru: 'Задает HTML‑тег для элемента компонента'
      }
    }
  },
  template: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.style,
      type: 'string',
      description: {
        en: 'Custom display template used by the component',
        ru: 'Пользовательский шаблон отображения, используемый компонентом'
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
  type: {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.style,
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
  },
  windowAttrs: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Additional attributes for the Window root container',
        ru: 'Дополнительные атрибуты для корневого контейнера Window'
      }
    }
  }
}
