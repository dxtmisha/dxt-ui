import { isString } from './isString'
import { toCountry } from './toCountry'
import { toLanguage } from './toLanguage'
import { toLocale } from './toLocale'

import { GeoList } from '../classes/GeoList'

import { type GeoItem } from '../types/geoTypes'

/**
 * Regular expression for matching full language-country or country-language codes /
 * Регулярное выражение для проверки полного кода язык-страна или страна-язык
 */
const REGEXP_CODE_FULL = /[a-zA-Z]{2,3}[-_][a-zA-Z0-9]/

/**
 * Finds geographical country and locale data by a language-country code, country code, or language code.
 *
 * Находит географические данные страны и локали по коду язык-страна, коду страны или коду языка.
 * @param code country code, full form language-country or one of them / код страны, полный вид язык-страна или один из них
 * @returns geo item or undefined / гео-объект или undefined
 */
export function toGeoItem(code?: unknown): GeoItem | undefined {
  if (!isString(code)) {
    return undefined
  }

  if (REGEXP_CODE_FULL.test(code)) {
    const item = GeoList.getByCodeFull(toLocale(code))

    if (item) {
      return item
    }
  }

  const country = toCountry(code)

  if (country) {
    const item = GeoList.getByCountry(country)

    if (item) {
      return item
    }
  }

  const language = toLanguage(code)

  if (language) {
    return GeoList.getByLanguage(language)
  }

  return undefined
}
