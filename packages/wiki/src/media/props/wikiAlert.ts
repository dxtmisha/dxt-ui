import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiAlert object contains descriptions of all properties for the Alert component
 *
 * Объект wikiAlert содержит описание всех свойств для компонента Alert
 */
export const wikiAlert: StorybookArgsToList = {
  'alert.button': {
    type: StorybookControl.text,
    options: {
      category: StorybookCategory.value,
      description: {
        en: 'Close or action button value/label on the trailing side',
        ru: 'Значение или метка для кнопки закрытия/действия на правой стороне'
      }
    },
    isDemo: true
  },
  'alert.outline': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Outline variant of the alert with a bordered layout',
        ru: 'Контурный вариант оповещения с рамкой'
      }
    },
    isDemo: true
  },
  'alert.primary': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Primary variant of the alert for high visibility notifications',
        ru: 'Основной вариант оповещения для привлечения внимания'
      }
    },
    isDemo: true
  },
  'alert.secondary': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Secondary variant of the alert for moderate emphasis messages',
        ru: 'Второстепенный вариант оповещения с умеренным акцентом'
      }
    },
    isDemo: true
  }
}
