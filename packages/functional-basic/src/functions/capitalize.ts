import { isString } from './isString'
import { toString } from './toString'

import { Geo } from '../classes/Geo'

/**
 * Maximum code point in the Basic Multilingual Plane (BMP).
 *
 * Максимальная кодовая точка в базовой многоязычной плоскости (BMP).
 */
const UNICODE_MAX_BMP = 0xFFFF

/**
 * Capitalizes the first letter of a string.
 *
 * Делает первую букву строки заглавной.
 * @param value string to capitalize / строка для капитализации
 * @param locale use locale or explicit locale tag / использовать локаль или явный код локали
 * @returns capitalized string / капитализированная строка
 */
export function capitalize<T = string>(
  value?: T,
  locale: boolean | string = false
): T extends string ? Capitalize<T> : string {
  const text = toString(value)

  if (text.length > 0) {
    const charLength = (text.codePointAt(0) ?? 0) > UNICODE_MAX_BMP ? 2 : 1
    const firstChar = text.slice(0, charLength)
    const restText = text.slice(charLength)

    if (locale) {
      const localeCode = isString(locale) ? locale : Geo.getLocation()
      return (firstChar.toLocaleUpperCase(localeCode) + restText) as T extends string ? Capitalize<T> : string
    }

    return (firstChar.toUpperCase() + restText) as T extends string ? Capitalize<T> : string
  }

  return text as T extends string ? Capitalize<T> : string
}
