import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiFormattedNumber object contains descriptions of all properties for the FormattedNumber component
 *
 * Объект wikiFormattedNumber содержит описание всех свойств для компонента FormattedNumber
 */
export const wikiFormattedNumber: StorybookArgsToList = {
  'formattedNumber.value': {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.value,
      type: ['number', 'string'],
      description: {
        en: 'Value to format',
        ru: 'Значение для форматирования'
      },
      value: '123456.78'
    }
  }
}
