import { isString } from './isString'

/**
 * Capitalizes the first letter of a string.
 *
 * Делает первую букву строки заглавной.
 * @param value string to capitalize / строка для капитализации
 * @returns capitalized string / капитализированная строка
 */
export function capitalize(value: string): string {
  if (
    isString(value)
    && value.length > 0
  ) {
    const [first, ...text] = value
    return first.toUpperCase() + text.join('')
  }

  return value
}
