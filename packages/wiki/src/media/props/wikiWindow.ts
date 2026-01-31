import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiWindow object contains descriptions of all properties for the Window component
 *
 * Объект wikiWindow содержит описание всех свойств для компонента Window
 */
export const wikiWindow: StorybookArgsToList = {
  'window.alignment': {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Places window in viewport: center, edges or corners',
        ru: 'Позиционирует окно во вьюпорте: центр, края или углы'
      },
      options: []
    }
  },
  'window.axis': {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.option,
      description: {
        en: 'Primary positioning axis relative to anchor or cursor; works only in menu mode (adaptive = "menu")',
        ru: 'Основная ось позиционирования относительно якоря или курсора; работает только в режиме меню (adaptive = "menu")'
      },
      options: []
    }
  },
  'window.autoClose': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.option,
      description: {
        en: 'Closes window when clicking anywhere inside content',
        ru: 'Закрывает окно при клике в любом месте содержимого'
      }
    }
  },
  'window.beforeClosing': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.hook,
      description: {
        en: 'Hook called before closing; return false to prevent closing',
        ru: 'Хук вызывается перед закрытием; возврат false предотвращает закрытие'
      }
    }
  },
  'window.beforeOpening': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.hook,
      description: {
        en: 'Hook called before opening; return false to prevent opening',
        ru: 'Хук вызывается перед открытием; возврат false предотвращает открытие'
      }
    }
  },
  'window.closeMobileHide': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Hides close control on mobile',
        ru: 'Скрывает управление закрытием на мобильных'
      }
    }
  },
  'window.closing': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.hook,
      description: {
        en: 'Hook called during closing; return false to interrupt',
        ru: 'Хук вызывается во время закрытия; возврат false прерывает процесс'
      }
    }
  },
  'window.contextmenu': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.option,
      description: {
        en: 'Allows opening on right‑click (context menu)',
        ru: 'Позволяет открывать по правому клику (контекстное меню)'
      }
    }
  },
  'window.dense': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Compact layout: reduces internal paddings for a denser window',
        ru: 'Компактное оформление: уменьшает внутренние отступы для более плотного окна'
      }
    }
  },
  'window.divider': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Displays top/bottom divider depending on scroll position',
        ru: 'Отображает разделитель сверху/снизу в зависимости от положения скролла'
      }
    }
  },
  'window.flash': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Disables animations for instant display',
        ru: 'Отключает анимации для мгновенного отображения'
      }
    }
  },
  'window.fullscreen': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Fills the screen without margins',
        ru: 'Заполняет экран без отступов'
      }
    }
  },
  'window.imageSize': {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Controls the relative size of the image area in the layout without tying to concrete values',
        ru: 'Управляет относительным размером области изображения в макете без привязки к конкретным значениям'
      },
      options: ['half', 'lg', 'md', 'quarter', 'sm']
    }
  },
  'window.indent': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Sets offsets for positioning relative to edges or anchor; works only in menu mode (adaptive = "menu")',
        ru: 'Задает отступы для позиционирования относительно краев или якоря; работает только в режиме меню (adaptive = "menu")'
      }
    }
  },
  'window.opening': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.hook,
      description: {
        en: 'Hook called during opening; return false to interrupt',
        ru: 'Хук вызывается в процессе открытия; возврат false прерывает процесс'
      }
    }
  },
  'window.origin': {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Sets transform origin for opening animation',
        ru: 'Задает точку трансформации для анимации открытия'
      },
      options: []
    }
  },
  'window.overElement': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.option,
      description: {
        en: 'Sets anchor element for positioning',
        ru: 'Задает опорный элемент для позиционирования'
      }
    }
  },
  'window.overscroll': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.technical,
      description: {
        en: 'Keeps horizontal scrolling inside the window',
        ru: 'Удерживает горизонтальный скролл внутри окна'
      }
    }
  },
  'window.persistent': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Prevents closing when clicking outside',
        ru: 'Предотвращает закрытие при клике за пределами окна'
      }
    }
  },
  'window.preparation': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.hook,
      description: {
        en: 'Hook called during preparation before opening',
        ru: 'Хук вызывается на этапе подготовки перед открытием'
      }
    }
  },
  'window.staticMode': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.option,
      description: {
        en: 'Enables static mode: displays as embedded component without modal behavior, animations, or dynamic positioning',
        ru: 'Включает статичный режим: отображает как встроенный компонент без модального поведения, анимаций и динамического позиционирования'
      }
    }
  },
  'window.widthMatch': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Matches window width to control width (menu)',
        ru: 'Подгоняет ширину окна под ширину контрола (меню)'
      }
    }
  }
}
