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
  barsBackHide: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.status,

      description: {
        en: 'Hides the back button in the bars header',
        ru: 'Скрывает кнопку «назад» в заголовке бара'
      }
    }
  },
  barsHide: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.status,

      description: {
        en: 'Hides the bars (header toolbar)',
        ru: 'Скрывает бар (верхнюю панель)'
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
    }
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
  forceShowMessage: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.status,
      description: {
        en: 'Forces display of helper / validation message ignoring usual visibility rules',
        ru: 'Принудительно показывает сообщение (helper / validation), игнорируя обычные условия видимости'
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
  iconHide: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.status,

      description: {
        en: 'Hides the icon',
        ru: 'Скрывает иконку'
      }
    }
  },
  iconTurn: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.status,

      description: {
        en: 'Turns the icon',
        ru: 'Поворачивает иконку'
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
    }
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
    }
  },
  turn: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.status,

      description: {
        en: 'Rotates the element by 180 degrees',
        ru: 'Поворачивает элемент на 180 градусов'
      }
    }
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
