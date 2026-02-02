import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiStatus object contains common properties for all components in the status category
 *
 * Объект wikiStatus содержит общие свойства для всех компонентов в категории статус
 */
export const wikiStatus: StorybookArgsToList = {
  active: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.status,
      description: {
        en: 'Sets the element to an active state',
        ru: 'Переводит элемент в активное состояние'
      }
    }
  },
  cancelShow: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.status,
      description: {
        en: 'Used only when cancel=auto: allows showing cancel (обычно при наличии значения). Ignored for always.',
        ru: 'Работает только при cancel=auto: разрешает показ (обычно при значении). Игнорируется для always.'
      }
    }
  },
  clickOpen: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Enable opening on click',
        ru: 'Включение открытия по клику'
      }
    }
  },
  disabled: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.status,
      description: {
        en: 'Sets the element to an inactive state',
        ru: 'Переводит элемент в неактивное состояние'
      }
    },
    isDemo: true
  },
  error: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.status,
      description: {
        en: 'Sets the element to an error state',
        ru: 'Переводит элемент в состояние ошибки'
      }
    },
    isDemo: true
  },
  focus: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.status,
      description: {
        en: 'Visual focus state',
        ru: 'Визуальное состояние фокуса'
      }
    }
  },
  forceShow: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.status,
      description: {
        en: 'Forces the display of the element regardless of other conditions',
        ru: 'Принудительно отображает элемент независимо от других условий'
      }
    }
  },
  hide: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.status,
      description: {
        en: 'Hides the element',
        ru: 'Скрывает элемент'
      }
    }
  },
  isValue: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.status,
      description: {
        en: 'Indicates that the control has a value and adjusts visuals (e.g., floating label)',
        ru: 'Указывает, что у элемента есть значение, и корректирует визуальное состояние (например, плавающая метка)'
      }
    }
  },
  loading: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.status,
      description: {
        en: 'Sets the element to a loading state',
        ru: 'Переводит элемент в состояние загрузки'
      }
    },
    isDemo: true
  },
  open: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.status,
      description: {
        en: 'Sets the element to an open state',
        ru: 'Переводит элемент в открытое состояние'
      }
    }
  },
  readonly: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.status,
      description: {
        en: 'Read-only state of the element',
        ru: 'Состояние только для чтения элемента'
      }
    }
  },
  selected: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.status,
      description: {
        en: 'Selected state of the element',
        ru: 'Состояние выбора элемента'
      }
    },
    isDemo: true
  },
  success: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.status,
      description: {
        en: 'Sets the element to a success state',
        ru: 'Переводит элемент в состояние успеха'
      }
    },
    isDemo: true
  },
  turn: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.status,
      description: {
        en: 'Rotates the element by 180 degrees',
        ru: 'Поворачивает элемент на 180 градусов'
      }
    },
    isDemo: true
  },
  visible: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.status,
      description: {
        en: 'Controls the visibility of the component',
        ru: 'Управляет видимостью компонента'
      }
    }
  }
}
