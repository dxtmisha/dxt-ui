import { type StorybookArgsToList, StorybookCategory, StorybookControl } from '../../types/storybookTypes'

export const wikiInformation: StorybookArgsToList = {
  caption: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.information,
      type: 'string',
      description: {
        en: 'Caption text for additional information',
        ru: 'Текст подписи для дополнительной информации'
      },
      value: 'Caption'
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
  prefix: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.information,
      type: 'string',
      description: {
        en: 'Prefix text displayed before the main content',
        ru: 'Текст префикса, отображаемый перед основным содержимым'
      },
      value: 'Prefix'
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
      },
      value: 'Suffix'
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
