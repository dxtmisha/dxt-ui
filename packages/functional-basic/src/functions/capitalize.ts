import { Geo } from '../library'
import { isString } from './isString'

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
  if (
    isString(value)
    && value.length > 0
  ) {
    if (isLocale) {
      return value.charAt(0).toLocaleUpperCase(Geo.getLocation()) + value.slice(1)
    }

    return value.charAt(0).toUpperCase() + value.slice(1)
  }

  return value
}
