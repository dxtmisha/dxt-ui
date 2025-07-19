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
      defaultValue: false,
      description: {
        en: 'Sets the element to an active state',
        ru: 'Переводит элемент в активное состояние'
      }
    }
  },
  disabled: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.status,
      defaultValue: false,
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
  hide: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.status,
      defaultValue: false,
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
      defaultValue: false,
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
      defaultValue: false,
      description: {
        en: 'Turns the icon',
        ru: 'Поворачивает иконку'
      }
    }
  },
  loading: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.status,
      defaultValue: false,
      description: {
        en: 'Sets the element to a loading state',
        ru: 'Переводит элемент в состояние загрузки'
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
      defaultValue: false,
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
