import { toString } from './toString'

import { Geo } from '../classes/Geo'

/**
 * Capitalizes the first letter of a string.
 *
 * Делает первую букву строки заглавной.
 * @param value string to capitalize / строка для капитализации
 * @param locale use locale or explicit locale tag / использовать локаль или явный код локали
 * @returns capitalized string / капитализированная строка
 */
export function capitalize<T extends string = string>(
  value?: T,
  locale: boolean | string = false
): Capitalize<T> {
  const text = toString(value)

  if (text.length > 0) {
    const charLength = (text.codePointAt(0) ?? 0) > 0xFFFF ? 2 : 1
    const firstChar = text.slice(0, charLength)
    const restText = text.slice(charLength)

    if (locale) {
      const localeCode = typeof locale === 'string' ? locale : Geo.getLocation()
      return (firstChar.toLocaleUpperCase(localeCode) + restText) as Capitalize<T>
    }

    return (firstChar.toUpperCase() + restText) as Capitalize<T>
  }

  return text as Capitalize<T>
}
