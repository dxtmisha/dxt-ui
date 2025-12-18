import { type StorybookArgsToList, StorybookCategory, StorybookControl } from '../../types/storybookTypes'

export const wikiInformation: StorybookArgsToList = {
  buttonClose: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.information,
      type: ['string', 'ConstrBind<ButtonPropsBasic>', 'null'],
      description: {
        en: 'Close button configuration (string for label or full button props object, null to hide)',
        ru: 'Конфигурация кнопки закрытия (строка для метки или объект свойств кнопки, null для скрытия)'
      }
    }
  },
  buttonOk: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.information,
      type: ['string', 'ConstrBind<ButtonPropsBasic>', 'null'],
      description: {
        en: 'OK button configuration (string for label or full button props object, null to hide)',
        ru: 'Конфигурация кнопки OK (строка для метки или объект свойств кнопки, null для скрытия)'
      }
    }
  },
  caption: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.information,
      type: 'string',
      description: {
        en: 'Caption text for additional information',
        ru: 'Текст подписи для дополнительной информации'
      }
    }
  },
  description: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.information,
      type: 'string',
      description: {
        en: 'Description text providing additional context',
        ru: 'Текст описания, предоставляющий дополнительный контекст'
      },
      value: 'Here is a detailed description of the component'
    }
  },
  forceShowMessage: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.information,
      description: {
        en: 'Forces display of helper / validation message ignoring usual visibility rules',
        ru: 'Принудительно показывает сообщение (helper / validation), игнорируя обычные условия видимости'
      }
    }
  },
  headline: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.information,
      type: 'string',
      description: {
        en: 'Headline text',
        ru: 'Текст заголовка'
      }
    }
  },
  helperMessage: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.information,
      type: 'string',
      description: {
        en: 'Helper text providing guidance or additional information',
        ru: 'Вспомогательный текст, предоставляющий руководство или дополнительную информацию'
      },
      value: 'This is a helpful message'
    }
  },
  image: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.information,
      type: 'string | File | ImageProps',
      description: {
        en: 'Specifies the image value for the component',
        ru: 'Указывает значение изображения для компонента'
      }
    }
  },
  label: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.information,
      type: 'string',
      description: {
        en: 'Text label for the component',
        ru: 'Текстовая метка для компонента'
      },
      value: 'Label'
    }
  },
  labelMax: {
    type: StorybookControl.number,
    options: {
      category: StorybookCategory.information,
      type: 'number',
      description: {
        en: 'Maximum length of the label text before truncation',
        ru: 'Максимальная длина текста метки перед обрезкой'
      }
    }
  },
  placeholder: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.information,
      type: 'string',
      description: {
        en: 'Placeholder text shown when the input is empty',
        ru: 'Текст подсказки, отображаемый при пустом вводе'
      }
    }
  },
  prefix: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.information,
      type: 'string',
      description: {
        en: 'Prefix text displayed before the main content',
        ru: 'Текст префикса, отображаемый перед основным содержимым'
      }
    }
  },
  suffix: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.information,
      type: 'string',
      description: {
        en: 'Suffix text displayed after the main content',
        ru: 'Текст суффикса, отображаемый после основного содержимого'
      }
    }
  },
  validationMessage: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.information,
      type: 'string',
      description: {
        en: 'Error or validation message text',
        ru: 'Текст сообщения об ошибке или валидации'
      }
    }
  }
}
