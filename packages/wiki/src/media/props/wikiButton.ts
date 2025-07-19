import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiButton object contains descriptions of all properties for the button component
 *
 * Объект wikiButton содержит описание всех свойств для компонента кнопки
 */
export const wikiButton: StorybookArgsToList = {
  'button.outline': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      defaultValue: false,
      description: {
        en: 'Outline button style',
        ru: 'Стиль кнопки с обводкой'
      }
    }
  },
  'button.primary': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      defaultValue: false,
      description: {
        en: 'Primary button style',
        ru: 'Основной стиль кнопки'
      }
    }
  },
  'button.secondary': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      defaultValue: false,
      description: {
        en: 'Secondary button style',
        ru: 'Вторичный стиль кнопки'
      }
    }
  },
  'button.text': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      defaultValue: false,
      description: {
        en: 'Text button style',
        ru: 'Текстовый стиль кнопки'
      }
    }
  }
}
