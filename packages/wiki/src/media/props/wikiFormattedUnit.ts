import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiFormattedUnit object contains descriptions of all properties for the FormattedUnit component
 *
 * Объект wikiFormattedUnit содержит описание всех свойств для компонента FormattedUnit
 */
export const wikiFormattedUnit: StorybookArgsToList = {
  'formattedUnit.value': {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.value,
      type: ['number', 'string'],
      description: {
        en: 'Value to format',
        ru: 'Значение для форматирования'
      },
      value: '1000'
    }
  },
  'formattedUnit.unit': {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.value,
      type: ['string'],
      description: {
        en: 'Unit of measurement',
        ru: 'Единица измерения'
      },
      value: 'gram'
    }
  }
}
