import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiMenuCountry object contains descriptions of all properties for the MenuCountry component
 *
 * Объект wikiMenuCountry содержит описание всех свойств для компонента MenuCountry
 */
export const wikiMenuCountry: StorybookArgsToList = {
  'menuCountry.selected': {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.status,
      type: ['string', 'string[]'],
      description: {
        en: 'Selected country code (ISO 3166-1 alpha-2) or an array of selected country codes.',
        ru: 'Код выбранной страны (ISO 3166-1 alpha-2) или массив кодов выбранных стран.'
      }
    }
  }
}
