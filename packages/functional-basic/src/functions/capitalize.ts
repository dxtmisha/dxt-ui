import { Geo } from '../classes/Geo'

/**
 * Capitalizes the first letter of a string.
 *
 * Делает первую букву строки заглавной.
 * @param value string to capitalize / строка для капитализации
 * @param isLocale use locale / использовать локаль
 * @returns capitalized string / капитализированная строка
 */
export function capitalize(
  value: string,
  isLocale: boolean = false
): string {
  const text = String(value)

  if (text.length > 0) {
    if (isLocale) {
      return text.charAt(0).toLocaleUpperCase(Geo.getLocation()) + text.slice(1)
    }

    return text.charAt(0).toUpperCase() + text.slice(1)
  }

  return text
}
