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
  'window.autoClose': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Closes window when clicking anywhere inside content',
        ru: 'Закрывает окно при клике в любом месте содержимого'
      }
    }
  },
  'window.axis': {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Sets the positioning axis for the window',
        ru: 'Задает ось позиционирования для окна'
      },
      options: []
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
  'window.closeButton': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Shows close button in header',
        ru: 'Показывает кнопку закрытия в заголовке'
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
      category: StorybookCategory.style,
      description: {
        en: 'Allows opening on right‑click (context menu)',
        ru: 'Позволяет открывать по правому клику (контекстное меню)'
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
  'window.iconClose': {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Sets icon for close button',
        ru: 'Задает иконку для кнопки закрытия'
      }
    }
  },
  'window.imagePosition': {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Defines image placement in the window layout',
        ru: 'Определяет расположение изображения в макете окна'
      },
      options: ['left', 'top']
    }
  },
  'window.imageSize': {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Sets image size inside the window',
        ru: 'Задает размер изображения внутри окна'
      },
      options: ['half', 'lg', 'md', 'quarter', 'sm']
    }
  },
  'window.inDom': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.status,
      description: {
        en: 'Indicates whether the window is in the DOM',
        ru: 'Указывает, присутствует ли окно в DOM'
      }
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
  'window.overElement': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Sets anchor element for positioning',
        ru: 'Задает опорный элемент для позиционирования'
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
      category: StorybookCategory.style,
      description: {
        en: 'Enables static mode: displays as embedded component without modal behavior, animations, or dynamic positioning',
        ru: 'Включает статичный режим: отображает как встроенный компонент без модального поведения, анимаций и динамического позиционирования'
      }
    }
  }
}
