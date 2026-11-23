import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiTechnical object contains common technical properties for all components
 *
 * Объект wikiTechnical содержит общие технические свойства для всех компонентов
 */
export const wikiTechnical: StorybookArgsToList = {
  area: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.technical,
      type: 'string',
      description: {
        en: 'Area identifier for the component',
        ru: 'Идентификатор области для компонента'
      }
    },
    hide: true
  },
  areaDefault: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.technical,
      type: 'string',
      description: {
        en: 'Default area identifier',
        ru: 'Идентификатор области по умолчанию'
      },
      value: 'default'
    },
    hide: true
  },
  clientOnly: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.technical,
      description: {
        en: 'Specifies whether the component should only be rendered on the client side',
        ru: 'Указывает, должен ли компонент отображаться только на стороне клиента'
      }
    },
    hide: true
  },
  captionDecorative: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.technical,
      description: {
        en: 'Specifies whether the caption is purely decorative',
        ru: 'Указывает, является ли подпись чисто декоративной'
      }
    },
    hide: true
  },
  control: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.technical,
      description: {
        en: 'Control object for managing list state and behavior. Provides programmatic access to list operations like navigation, selection, and focus management.',
        ru: 'Объект управления для контроля состояния и поведения списка. Предоставляет программный доступ к операциям списка, таким как навигация, выбор и управление фокусом.'
      }
    },
    hide: true
  },
  descriptionId: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.technical,
      type: 'string',
      description: {
        en: 'Unique identifier for the description element',
        ru: 'Уникальный идентификатор для элемента описания'
      }
    },
    hide: true
  },
  embedded: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.technical,
      description: {
        en: 'The window will be displayed inside the current parent element',
        ru: 'Окно будет отображаться внутри текущего родительского элемента'
      }
    },
    hide: true
  },
  helperId: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.technical,
      type: 'string',
      description: {
        en: 'Unique identifier for the helper message element',
        ru: 'Уникальный идентификатор для элемента вспомогательного сообщения'
      }
    },
    hide: true
  },
  id: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.technical,
      type: 'string',
      description: {
        en: 'Unique identifier attribute for the element',
        ru: 'Уникальный идентификатор атрибута для элемента'
      }
    },
    hide: true
  },
  index: {
    type: StorybookControl.number,
    options: {
      category: StorybookCategory.technical,
      type: 'number',
      description: {
        en: 'Index value for the component',
        ru: 'Значение индекса для компонента'
      }
    },
    hide: true
  },
  isSelectedByValue: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.technical,
      description: {
        en: 'Enables v-model support for selected value with two-way data binding.',
        ru: 'Включает поддержку v-model для выбранного значения с двусторонней привязкой данных.'
      }
    },
    hide: true
  },
  keyItem: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.technical,
      type: 'string',
      description: {
        en: 'Unique key identifier for the list item or table row',
        ru: 'Уникальный ключ-идентификатор для элемента списка или строки таблицы'
      }
    },
    hide: true
  },
  labelId: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.technical,
      type: 'string',
      description: {
        en: 'Unique identifier for the label element',
        ru: 'Уникальный идентификатор для элемента метки'
      }
    },
    hide: true
  },
  language: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.technical,
      type: 'string',
      description: {
        en: 'Language/locale code (BCP 47) used for formatting values (e.g., en-US, ru-RU)',
        ru: 'Код языка/локали (BCP 47) для форматирования значений (например, ru-RU, en-US)'
      }
    },
    hide: true
  },
  messageId: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.technical,
      type: 'string',
      description: {
        en: 'Unique identifier for the message element',
        ru: 'Уникальный идентификатор для элемента сообщения'
      }
    },
    hide: true
  },
  modelCountry: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.technical,
      description: {
        en: 'Two-way binding for the active country ISO code (v-model:country)',
        ru: 'Двусторонняя привязка активного ISO-кода страны (v-model:country)'
      }
    },
    hide: true
  },
  modelDigits: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.technical,
      description: {
        en: 'Two-way binding for the digits-only phone number (v-model:digits)',
        ru: 'Двусторонняя привязка номера телефона в формате только цифр (v-model:digits)'
      }
    },
    hide: true
  },
  modelE164: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.technical,
      description: {
        en: 'Two-way binding for the E.164 formatted phone number (v-model:e164)',
        ru: 'Двусторонняя привязка номера телефона в формате E.164 (v-model:e164)'
      }
    },
    hide: true
  },
  modelOpen: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.technical,
      description: {
        en: 'Two-way binding for the open state (v-model:open)',
        ru: 'Двусторонняя привязка состояния открытия (v-model:open)'
      }
    },
    hide: true
  },
  modelFiles: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.technical,
      description: {
        en: 'Two-way binding for selected/dropped files (v-model:files)',
        ru: 'Двусторонняя привязка для выбранных/перетащенных файлов (v-model:files)'
      }
    },
    hide: true
  },
  modelRows: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.technical,
      description: {
        en: 'Two-way binding for the rows per page limit (v-model:rows)',
        ru: 'Двусторонняя привязка для количества строк на странице (v-model:rows)'
      }
    },
    hide: true
  },
  modelSelected: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.technical,
      description: {
        en: 'Two-way binding for the selected state (v-model:selected)',
        ru: 'Двусторонняя привязка состояния выбора (v-model:selected)'
      }
    },
    hide: true
  },
  modelValue: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.technical,
      description: {
        en: 'Two-way binding for component value (v-model)',
        ru: 'Двусторонняя привязка значения компонента (v-model)'
      }
    },
    hide: true
  },
  prefixId: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.technical,
      type: 'string',
      description: {
        en: 'Unique identifier for the prefix element',
        ru: 'Уникальный идентификатор для элемента префикса'
      }
    },
    hide: true
  },
  suffixId: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.technical,
      type: 'string',
      description: {
        en: 'Unique identifier for the suffix element',
        ru: 'Уникальный идентификатор для элемента суффикса'
      }
    },
    hide: true
  },
  validationId: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.technical,
      type: 'string',
      description: {
        en: 'Unique identifier for the validation message element',
        ru: 'Уникальный идентификатор для элемента сообщения валидации'
      }
    },
    hide: true
  },
  warningId: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.technical,
      type: 'string',
      description: {
        en: 'Unique identifier for the warning message element',
        ru: 'Уникальный идентификатор для элемента предупреждающего сообщения'
      }
    },
    hide: true
  }
}
