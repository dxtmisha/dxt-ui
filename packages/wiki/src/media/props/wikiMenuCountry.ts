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
  'menuCountry.list': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.value,
      description: {
        en: 'List of country codes (ISO 3166-1 alpha-2) for filtering the country list.',
        ru: 'Список кодов стран (ISO 3166-1 alpha-2) для фильтрации списка стран.'
      }
    }
  },
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
