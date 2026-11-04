import { toLanguage } from './toLanguage'

import { type GeoItem } from '../types/geoTypes'

/**
 * Converts a geo item to its standard string representation (language-country).
 *
 * Преобразует гео-объект в его стандартное строковое представление (язык-страна).
 * @param item geo item data / данные гео-объекта
 * @param language optional language override / опциональное переопределение языка
 * @param raw whether to skip language processing / не обрабатывать ли язык
 * @returns standard code string or empty string / строка стандартного кода или пустая строка
 */
export function toGeoStandard(
  item?: GeoItem | null,
  language?: string | null,
  raw?: boolean
): string {
  if (!item) {
    return ''
  }

  if (language) {
    if (raw) {
      return `${language}-${item.country}`
    }

    const selectedLanguage = toLanguage(language)

    if (selectedLanguage) {
      return `${selectedLanguage}-${item.country}`
    }
  }

  return `${item.language}-${item.country}`
}
