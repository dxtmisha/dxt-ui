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
  'field.arrowCarousel': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Shows horizontal navigation arrows (carousel left/right)',
        ru: 'Отображает горизонтальные стрелки навигации (карусель влево/вправо)'
      }
    }
  },
  'field.arrowStepper': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Shows numeric step controls (+ / -) for increment / decrement',
        ru: 'Отображает числовые степперы (+ / -) для инкремента / декремента'
      }
    }
  },
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
  'field.classic': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Classic variant for Field with standard border and no fill',
        ru: 'Классический вариант Field со стандартной рамкой без заливки'
      }
    }
  },
  'field.disabledNext': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.status,
      description: {
        en: 'Disables the next navigation control (right / plus)',
        ru: 'Отключает кнопку следующего управления (вправо / плюс)'
      }
    }
  },
  'field.disabledPrevious': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.status,
      description: {
        en: 'Disables the previous navigation control (left / minus)',
        ru: 'Отключает кнопку предыдущего управления (влево / минус)'
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
