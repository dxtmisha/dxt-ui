import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiMask object contains descriptions of all properties for the mask component
 *
 * Объект wikiMask содержит описание всех свойств для компонента маски (Mask)
 */
export const wikiMask: StorybookArgsToList = {
  'mask.check': {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.value,
      type: ['string', 'object', 'function'],
      description: {
        en: 'Global validation pattern applied after mask completion for additional input checking',
        ru: 'Глобальный паттерн валидации, применяемый после завершения маски для дополнительной проверки ввода'
      }
    }
  },
  'mask.match': {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.value,
      type: ['string', 'object', 'function'],
      description: {
        en: 'Global match pattern for allowed characters (RegExp|string or per-group map)',
        ru: 'Глобальный паттерн допустимых символов (RegExp|строка или карта по группам)'
      }
    }
  },
  'mask.fullOnly': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.value,
      description: {
        en: 'Treat input as valid only when the mask is fully completed',
        ru: 'Считать ввод валидным только при полном заполнении маски'
      }
    }
  },
  'mask.groupSave': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Controls cursor behavior when moving between different special character groups in the mask',
        ru: 'Управляет поведением курсора при переходе между разными группами специальных символов в маске'
      },
      value: true
    }
  },
  'mask.mask': {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.value,
      type: ['string', 'string[]'],
      description: {
        en: 'Mask pattern: string or array. Special chars define input groups; others are literals. With multiple masks, the best match is chosen.',
        ru: 'Шаблон маски: строка или массив. Спецсимволы — группы ввода, прочие — литералы. При нескольких масках выбирается подходящая.'
      },
      value: '+1 (***) ***-****'
    }
  },
  'mask.pattern': {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.value,
      type: ['string', 'object', 'function'],
      description: {
        en: 'Pattern definition for mask groups, defining allowed characters and validation rules per group',
        ru: 'Определение паттернов для групп маски, задающее допустимые символы и правила валидации по группам'
      }
    }
  },
  'mask.special': {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.value,
      type: ['string', 'string[]', 'object'],
      description: {
        en: 'Special characters definition for mask groups with advanced properties (rubber, defaults, patterns)',
        ru: 'Определение специальных символов для групп маски с расширенными свойствами (резиновость, значения по умолчанию, паттерны)'
      },
      value: '*'
    }
  },
  'mask.view': {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.style,
      type: 'string',
      description: {
        en: 'Display character used for placeholders in the mask view',
        ru: 'Отображаемый символ, используемый как плейсхолдер в представлении маски'
      }
    }
  },
  'mask.visible': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Controls complete visibility of the mask component and its placeholder characters',
        ru: 'Управляет полной видимостью компонента маски и символов-заполнителей'
      },
      value: true
    }
  },
  'mask.visiblePartly': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Controls partial visibility of mask placeholder characters, showing only filled positions',
        ru: 'Управляет частичной видимостью символов-заполнителей маски, показывая только заполненные позиции'
      }
    }
  }
}
