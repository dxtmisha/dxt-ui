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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
  }
}
