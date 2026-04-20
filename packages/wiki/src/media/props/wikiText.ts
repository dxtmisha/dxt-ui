import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiText object contains descriptions of all text properties
 *
 * Объект wikiText содержит описание всех текстовых свойств
 */
export const wikiText: StorybookArgsToList = {
  textCancel: {
    type: StorybookControl.text,
    options: {
      category: StorybookCategory.text,
      type: 'string | (() => string)',
      description: {
        en: 'Cancel text',
        ru: 'Текст отмены'
      }
    },
    hide: true
  },
  textCharacterLimit: {
    type: StorybookControl.text,
    options: {
      category: StorybookCategory.text,
      type: 'string | (() => string)',
      description: {
        en: 'Character limit exceeded text',
        ru: 'Текст о превышении лимита символов'
      }
    },
    hide: true
  },
  textCharacterRemaining: {
    type: StorybookControl.text,
    options: {
      category: StorybookCategory.text,
      type: 'string | (() => string)',
      description: {
        en: 'Remaining characters text',
        ru: 'Текст об оставшихся символах'
      }
    },
    hide: true
  },
  textClose: {
    type: StorybookControl.text,
    options: {
      category: StorybookCategory.text,
      type: 'string | (() => string)',
      description: {
        en: 'Close text',
        ru: 'Текст закрытия'
      }
    },
    hide: true
  },
  textCopiedClipboard: {
    type: StorybookControl.text,
    options: {
      category: StorybookCategory.text,
      type: 'string | (() => string)',
      description: {
        en: 'Text displayed when content is copied to clipboard',
        ru: 'Текст, отображаемый при копировании содержимого в буфер обмена'
      }
    },
    hide: true
  },
  textDecrement: {
    type: StorybookControl.text,
    options: {
      category: StorybookCategory.text,
      type: 'string | (() => string)',
      description: {
        en: 'Text for decreasing value',
        ru: 'Текст для уменьшения значения'
      }
    },
    hide: true
  },
  textEntriesMatch: {
    type: StorybookControl.text,
    options: {
      category: StorybookCategory.text,
      type: 'string | (() => string)',
      description: {
        en: 'Text for entries mismatch validation message',
        ru: 'Текст сообщения валидации о несовпадении записей'
      }
    },
    hide: true
  },
  textHide: {
    type: StorybookControl.text,
    options: {
      category: StorybookCategory.text,
      type: 'string | (() => string)',
      description: {
        en: 'Hide text',
        ru: 'Текст скрытия'
      }
    },
    hide: true
  },
  textIncrement: {
    type: StorybookControl.text,
    options: {
      category: StorybookCategory.text,
      type: 'string | (() => string)',
      description: {
        en: 'Text for increasing value',
        ru: 'Текст для увеличения значения'
      }
    },
    hide: true
  },
  textLoading: {
    type: StorybookControl.text,
    options: {
      category: StorybookCategory.text,
      type: 'string | (() => string)',
      description: {
        en: 'Loading text',
        ru: 'Текст загрузки'
      }
    },
    hide: true
  },
  textNext: {
    type: StorybookControl.text,
    options: {
      category: StorybookCategory.text,
      type: 'string | (() => string)',
      description: {
        en: 'Next text',
        ru: 'Текст следующего'
      }
    },
    hide: true
  },
  textNotifications: {
    type: StorybookControl.text,
    options: {
      category: StorybookCategory.text,
      type: 'string | (() => string)',
      description: {
        en: 'Notification text',
        ru: 'Текст уведомления'
      }
    },
    hide: true
  },
  textOk: {
    type: StorybookControl.text,
    options: {
      category: StorybookCategory.text,
      type: 'string | (() => string)',
      description: {
        en: 'OK text',
        ru: 'Текст подтверждения'
      }
    },
    hide: true
  },
  textPrevious: {
    type: StorybookControl.text,
    options: {
      category: StorybookCategory.text,
      type: 'string | (() => string)',
      description: {
        en: 'Previous text',
        ru: 'Текст предыдущего'
      }
    },
    hide: true
  },
  textShow: {
    type: StorybookControl.text,
    options: {
      category: StorybookCategory.text,
      type: 'string | (() => string)',
      description: {
        en: 'Show text',
        ru: 'Текст показа'
      }
    },
    hide: true
  }
}
