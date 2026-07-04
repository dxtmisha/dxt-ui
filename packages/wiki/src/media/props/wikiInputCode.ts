import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiInputCode object contains descriptions of all properties for the InputCode component
 *
 * Объект wikiInputCode содержит описание всех свойств для компонента InputCode
 */
export const wikiInputCode: StorybookArgsToList = {
  'inputCode.length': {
    type: StorybookControl.number,
    options: {
      category: StorybookCategory.value,
      type: 'number',
      description: {
        en: 'Code length (number of input characters)',
        ru: 'Длина кода (количество вводимых символов)'
      }
    }
  },
  'inputCode.match': {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.value,
      type: 'RegExp',
      description: {
        en: 'RegExp for input verification',
        ru: 'Регулярное выражение для проверки ввода'
      }
    }
  }
}
