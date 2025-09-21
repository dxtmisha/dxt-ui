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
  'mask.currencyHide': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.value,
      description: {
        en: 'Hide the currency symbol in the formatted value',
        ru: 'Скрывать символ валюты в форматированном значении'
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
  }
}
