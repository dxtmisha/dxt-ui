import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiMenuLanguage object contains descriptions of all properties for the MenuLanguage component
 *
 * Объект wikiMenuLanguage содержит описание всех свойств для компонента MenuLanguage
 */
export const wikiMenuLanguage: StorybookArgsToList = {
  'menuLanguage.list': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.value,
      description: {
        en: 'List of country/language codes (ISO 3166-1 alpha-2 / ISO 639-1) for filtering the language menu.',
        ru: 'Список кодов стран/языков (ISO 3166-1 alpha-2 / ISO 639-1) для фильтрации языкового меню.'
      }
    }
  }
}
