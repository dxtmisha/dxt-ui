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
    }
  },
  buttonSecondaryAttrs: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.attributes,
      description: {
        en: 'Additional attributes for secondary button elements',
        ru: 'Дополнительные атрибуты для элементов вторичных кнопок'
      }
    }
  },
  cellAttrs: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.attributes,
      description: {
        en: 'Additional attributes for the Cell component',
        ru: 'Дополнительные атрибуты для компонента Cell'
      }
    }
  },
  chipAttrs: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.attributes,
      description: {
        en: 'Additional attributes for the Chip component',
        ru: 'Дополнительные атрибуты для компонента Chip'
      }
    }
  },
  fieldAttrs: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.attributes,
      description: {
        en: 'Additional attributes for the Field component',
        ru: 'Дополнительные атрибуты для компонента Field'
      }
    }
  },
  fieldLabelAttrs: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.attributes,
      description: {
        en: 'Additional attributes for the FieldLabel element',
        ru: 'Дополнительные атрибуты для элемента FieldLabel'
      }
    }
  },
  fieldMessageAttrs: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.attributes,
      description: {
        en: 'Additional attributes for the FieldMessage element',
        ru: 'Дополнительные атрибуты для элемента FieldMessage'
      }
    }
  },
  horizontalScrollAttrs: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.attributes,
      description: {
        en: 'Additional attributes for the HorizontalScroll component',
        ru: 'Дополнительные атрибуты для компонента HorizontalScroll'
      }
    }
  },
  inputAttrs: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.attributes,
      description: {
        en: 'Additional attributes for the native input element',
        ru: 'Дополнительные атрибуты для нативного элемента input'
      }
    }
  },
  menuAttrs: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.attributes,
      description: {
        en: 'Additional attributes for the Menu root container',
        ru: 'Дополнительные атрибуты для корневого контейнера Menu'
      }
    }
  },
  motionTransformAttrs: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.attributes,
      description: {
        en: 'Additional attributes for the MotionTransform component',
        ru: 'Дополнительные атрибуты для компонента MotionTransform'
      }
    }
  },
  scrollbarAttrs: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.attributes,
      description: {
        en: 'Sets attributes for the internal scrollbar',
        ru: 'Задает атрибуты встроенного скроллбара'
      }
    }
  },
  textareaAttrs: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.attributes,
      description: {
        en: 'Additional attributes for the native textarea element',
        ru: 'Дополнительные атрибуты для нативного элемента textarea'
      }
    }
  },
  tooltipAttrs: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.attributes,
      description: {
        en: 'Additional attributes for the Tooltip component',
        ru: 'Дополнительные атрибуты для компонента Tooltip'
      }
    }
  },
  windowAttrs: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.attributes,
      description: {
        en: 'Additional attributes for the Window root container',
        ru: 'Дополнительные атрибуты для корневого контейнера Window'
      }
    }
  }
}
