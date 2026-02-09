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
    },
    isDemo: true,
    demo: 'Caption text'
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
        en: 'Forces display of a helper / validation message ignoring usual visibility rules',
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
    },
    isDemo: true,
    demo: 'https://drscdn.500px.org/photo/294267357/q%3D90_m%3D2048/v2?sig=adb52b9add18ad21ab4a86b99695377f2a18821c609d42149b3426dfb99cf924'
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
  placeholder: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.information,
      type: 'string',
      description: {
        en: 'Placeholder text shown when the input is empty',
        ru: 'Текст подсказки, отображаемый при пустом вводе'
      }
    },
    isDemo: true,
    demo: 'Placeholder text'
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
    },
    isDemo: true,
    demo: 'Prefix text'
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
    },
    isDemo: true,
    demo: 'Suffix text',
    demoOptions: {
      value: 'Value'
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
    },
    isDemo: true,
    demo: 'Validation message'
  }
}
