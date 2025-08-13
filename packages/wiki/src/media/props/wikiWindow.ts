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
        en: 'Enables automatic window closing when clicking anywhere inside the window content.',
        ru: 'Включает автоматическое закрытие окна при клике в любом месте содержимого окна.'
      }
    }
  },
  'window.beforeClosing': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.hook,
      description: {
        en: 'Hook function called before window closing. Return false to prevent closing.',
        ru: 'Функция-хук, вызываемая перед закрытием окна. Возврат false предотвращает закрытие.'
      }
    }
  },
  'window.beforeOpening': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.hook,
      description: {
        en: 'Hook function called before window opening. Return false to prevent opening.',
        ru: 'Функция-хук, вызываемая перед открытием окна. Возврат false предотвращает открытие.'
      }
    }
  },
  'window.closeButton': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Enables display of close button in the window header.',
        ru: 'Включает отображение кнопки закрытия в заголовке окна.'
      }
    }
  },
  'window.closing': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.hook,
      description: {
        en: 'Hook function called during window closing process. Return false to interrupt closing.',
        ru: 'Функция-хук, вызываемая в процессе закрытия окна. Возврат false прерывает закрытие.'
      }
    }
  },
  'window.contextmenu': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Enables window opening on right-click (context menu).',
        ru: 'Включает открытие окна по правому клику (контекстное меню).'
      }
    }
  },
  'window.divider': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Adds divider lines at the top or bottom depending on scroll position.',
        ru: 'Добавляет разделительные линии сверху или снизу в зависимости от положения скролла.'
      }
    }
  },
  'window.flash': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Disables opening and closing animations for instant window display.',
        ru: 'Отключает анимации открытия и закрытия для мгновенного отображения окна.'
      }
    }
  },
  'window.iconClose': {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Custom icon for the close button in the window header.',
        ru: 'Пользовательская иконка для кнопки закрытия в заголовке окна.'
      }
    }
  },
  'window.inDom': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.status,
      description: {
        en: 'Indicates whether the window element is present in the DOM.',
        ru: 'Указывает, присутствует ли элемент окна в DOM.'
      }
    }
  },
  'window.indent': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Window positioning offset values from edges or reference element. Works only in menu mode (adaptive = "menu").',
        ru: 'Значения смещения позиционирования окна от краев или опорного элемента. Работает только в режиме меню (adaptive = "menu").'
      }
    }
  },
  'window.opening': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.hook,
      description: {
        en: 'Hook function called during window opening process. Return false to interrupt opening.',
        ru: 'Функция-хук, вызываемая в процессе открытия окна. Возврат false прерывает открытие.'
      }
    }
  },
  'window.overElement': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Element over which the window should be positioned.',
        ru: 'Элемент, над которым должно быть позиционировано окно.'
      }
    }
  },
  'window.persistent': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Prevents window from closing when clicking outside the window boundaries.',
        ru: 'Предотвращает закрытие окна при клике за пределами границ окна.'
      }
    }
  },
  'window.preparation': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.hook,
      description: {
        en: 'Hook function called during window preparation phase before opening.',
        ru: 'Функция-хук, вызываемая на этапе подготовки окна перед открытием.'
      }
    }
  },
  'window.staticMode': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Enables static mode - transforms window into embedded component without modal behavior, animations, or dynamic positioning.',
        ru: 'Включает статический режим - преобразует окно во встроенный компонент без модального поведения, анимаций и динамического позиционирования.'
      }
    }
  }
}
