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
  captionDecorative: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.technical,
      description: {
        en: 'Specifies whether the caption is purely decorative',
        ru: 'Указывает, является ли подпись чисто декоративной'
      }
    }
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
    }
  },
  embedded: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.technical,
      description: {
        en: 'The window will be displayed inside the current parent element',
        ru: 'Окно будет отображаться внутри текущего родительского элемента'
      }
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
  },
  modelOpen: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.technical,
      description: {
        en: 'Two-way binding for the open state (v-model:open)',
        ru: 'Двусторонняя привязка состояния открытия (v-model:open)'
      }
    }
  },
  modelSelected: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.technical,
      description: {
        en: 'Two-way binding for the selected state (v-model:selected)',
        ru: 'Двусторонняя привязка состояния выбора (v-model:selected)'
      }
    }
  },
  modelValue: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.technical,
      description: {
        en: 'Two-way binding for component value (v-model)',
        ru: 'Двусторонняя привязка значения компонента (v-model)'
      }
    }
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
    }
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
    }
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
    }
  }
}
