import { isFilled } from './isFilled'

/**
 * Capitalizes the first letter of a string.
 *
 * Делает первую букву строки заглавной.
 * @param value string to capitalize / строка для капитализации
 * @returns capitalized string / капитализированная строка
 */
export function capitalize(value: string): string {
  if (isFilled(value)) {
    return value.charAt(0).toUpperCase() + value.slice(1)
  }

  return value
}
