import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiAttributes object contains descriptions of all attribute properties
 *
 * Объект wikiAttributes содержит описание всех свойств атрибутов
 */
export const wikiAttributes: StorybookArgsToList = {
  buttonAttrs: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.attributes,
      description: {
        en: 'Additional attributes for button elements',
        ru: 'Дополнительные атрибуты для элементов кнопок'
      }
    },
    hide: true
  },
  buttonSecondaryAttrs: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.attributes,
      description: {
        en: 'Additional attributes for secondary button elements',
        ru: 'Дополнительные атрибуты для элементов вторичных кнопок'
      }
    },
    hide: true
  },
  cellAttrs: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.attributes,
      description: {
        en: 'Additional attributes for the Cell component',
        ru: 'Дополнительные атрибуты для компонента Cell'
      }
    },
    hide: true
  },
  chipAttrs: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.attributes,
      description: {
        en: 'Additional attributes for the Chip component',
        ru: 'Дополнительные атрибуты для компонента Chip'
      }
    },
    hide: true
  },
  fieldAttrs: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.attributes,
      description: {
        en: 'Additional attributes for the Field component',
        ru: 'Дополнительные атрибуты для компонента Field'
      }
    },
    hide: true
  },
  fieldLabelAttrs: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.attributes,
      description: {
        en: 'Additional attributes for the FieldLabel element',
        ru: 'Дополнительные атрибуты для элемента FieldLabel'
      }
    },
    hide: true
  },
  fieldMessageAttrs: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.attributes,
      description: {
        en: 'Additional attributes for the FieldMessage element',
        ru: 'Дополнительные атрибуты для элемента FieldMessage'
      }
    },
    hide: true
  },
  horizontalScrollAttrs: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.attributes,
      description: {
        en: 'Additional attributes for the HorizontalScroll component',
        ru: 'Дополнительные атрибуты для компонента HorizontalScroll'
      }
    },
    hide: true
  },
  inputAttrs: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.attributes,
      description: {
        en: 'Additional attributes for the native input element',
        ru: 'Дополнительные атрибуты для нативного элемента input'
      }
    },
    hide: true
  },
  menuAttrs: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.attributes,
      description: {
        en: 'Additional attributes for the Menu root container',
        ru: 'Дополнительные атрибуты для корневого контейнера Menu'
      }
    },
    hide: true
  },
  motionAxisAttrs: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.attributes,
      description: {
        en: 'Additional attributes for the MotionAxis component',
        ru: 'Дополнительные атрибуты для компонента MotionAxis'
      }
    },
    hide: true
  },
  motionTransformAttrs: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.attributes,
      description: {
        en: 'Additional attributes for the MotionTransform component',
        ru: 'Дополнительные атрибуты для компонента MotionTransform'
      }
    },
    hide: true
  },
  scrollbarAttrs: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.attributes,
      description: {
        en: 'Sets attributes for the internal scrollbar',
        ru: 'Задает атрибуты встроенного скроллбара'
      }
    },
    hide: true
  },
  tabItemAttrs: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.attributes,
      description: {
        en: 'Additional attributes for the TabItem component',
        ru: 'Дополнительные атрибуты для компонента TabItem'
      }
    },
    hide: true
  },
  tabsNavigationAttrs: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.attributes,
      description: {
        en: 'Additional attributes for the TabsNavigation component',
        ru: 'Дополнительные атрибуты для компонента TabsNavigation'
      }
    },
    hide: true
  },
  textareaAttrs: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.attributes,
      description: {
        en: 'Additional attributes for the native textarea element',
        ru: 'Дополнительные атрибуты для нативного элемента textarea'
      }
    },
    hide: true
  },
  tooltipAttrs: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.attributes,
      description: {
        en: 'Additional attributes for the Tooltip component',
        ru: 'Дополнительные атрибуты для компонента Tooltip'
      }
    },
    hide: true
  },
  windowAttrs: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.attributes,
      description: {
        en: 'Additional attributes for the Window root container',
        ru: 'Дополнительные атрибуты для корневого контейнера Window'
      }
    },
    hide: true
  }
}
