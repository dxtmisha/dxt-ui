import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiField object contains descriptions of Field-specific style properties
 *
 * Объект wikiField содержит описание специфичных для Field свойств стиля
 */
export const wikiField: StorybookArgsToList = {
  'field.basic': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Basic variant for Field without fill and border',
        ru: 'Базовый вариант Field без заливки и рамки'
      }
    }
  },
  'field.boxed': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Boxed variant for Field with both fill and border',
        ru: 'Вариант Field с заливкой и рамкой (boxed)'
      }
    }
  },
  'field.filled': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Filled variant for Field with background fill',
        ru: 'Залитый вариант Field с фоновым заполнением'
      }
    }
  },
  'field.outlined': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Outline variant for Field with bordered style',
        ru: 'Контурный вариант Field с акцентной рамкой'
      }
    }
  },
  'field.tonal': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Tonal variant for Field with toned background and softer contrast',
        ru: 'Тональный вариант Field с приглушенной заливкой и мягким контрастом'
      }
    }
  }
}
