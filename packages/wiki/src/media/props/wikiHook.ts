import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiHook object contains common hook properties for all components
 *
 * Объект wikiHook содержит общие hook-свойства для всех компонентов
 */
export const wikiHook: StorybookArgsToList = {
  'onUpdate:country': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.hook,
      description: {
        en: 'Event handler called on update:country with the active country ISO code',
        ru: 'Обработчик события update:country, вызывается с активным ISO-кодом страны'
      }
    },
    hide: true
  },
  'onUpdate:digits': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.hook,
      description: {
        en: 'Event handler called on update:digits with the digits-only phone number',
        ru: 'Обработчик события update:digits, вызывается с номером телефона из цифр'
      }
    },
    hide: true
  },
  'onUpdate:e164': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.hook,
      description: {
        en: 'Event handler called on update:e164 with the E.164 phone number',
        ru: 'Обработчик события update:e164, вызывается с номером телефона в формате E.164'
      }
    },
    hide: true
  },
  'onUpdate:files': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.hook,
      description: {
        en: 'Event handler called on update:files with the new files array or FileList',
        ru: 'Обработчик события update:files, вызывается с новым массивом файлов или FileList'
      }
    },
    hide: true
  },
  'onUpdate:modelCountry': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.hook,
      description: {
        en: 'Event handler called on update:modelCountry with the active country ISO code',
        ru: 'Обработчик события update:modelCountry, вызывается с активным ISO-кодом страны'
      }
    },
    hide: true
  },
  'onUpdate:modelDigits': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.hook,
      description: {
        en: 'Event handler called on update:modelDigits with the digits-only phone number',
        ru: 'Обработчик события update:modelDigits, вызывается с номером телефона из цифр'
      }
    },
    hide: true
  },
  'onUpdate:modelE164': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.hook,
      description: {
        en: 'Event handler called on update:modelE164 with the E.164 phone number',
        ru: 'Обработчик события update:modelE164, вызывается с номером телефона в формате E.164'
      }
    },
    hide: true
  },
  'onUpdate:modelFiles': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.hook,
      description: {
        en: 'Event handler called on update:modelFiles with the new files array or FileList',
        ru: 'Обработчик события update:modelFiles, вызывается с новым массивом файлов или FileList'
      }
    },
    hide: true
  },
  'onUpdate:modelOpen': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.hook,
      description: {
        en: 'Event handler called on update:modelOpen with the new boolean value',
        ru: 'Обработчик события update:modelOpen, вызывается с новым булевым значением'
      }
    },
    hide: true
  },
  'onUpdate:modelRows': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.hook,
      description: {
        en: 'Event handler called on update:modelRows with the new value',
        ru: 'Обработчик события update:modelRows, вызывается с новым значением'
      }
    },
    hide: true
  },
  'onUpdate:modelSelected': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.hook,
      description: {
        en: 'Event handler called on update:modelSelected with the new selected value',
        ru: 'Обработчик события update:modelSelected, вызывается с новым выбранным значением'
      }
    },
    hide: true
  },
  'onUpdate:modelValue': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.hook,
      description: {
        en: 'Event handler called on update:modelValue with the new value',
        ru: 'Обработчик события update:modelValue, вызывается с новым значением'
      }
    },
    hide: true
  },
  'onUpdate:open': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.hook,
      description: {
        en: 'Event handler called on update:open with the new boolean value',
        ru: 'Обработчик события update:open, вызывается с новым булевым значением'
      }
    },
    hide: true
  },
  'onUpdate:rows': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.hook,
      description: {
        en: 'Event handler called on update:rows with the new value',
        ru: 'Обработчик события update:rows, вызывается с новым значением'
      }
    },
    hide: true
  },
  'onUpdate:selected': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.hook,
      description: {
        en: 'Event handler called on update:selected with the new selected value',
        ru: 'Обработчик события update:selected, вызывается с новым выбранным значением'
      }
    },
    hide: true
  },
  'onUpdate:value': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.hook,
      description: {
        en: 'Event handler called on update:value with the new value',
        ru: 'Обработчик события update:value, вызывается с новым значением'
      }
    },
    hide: true
  }
}
