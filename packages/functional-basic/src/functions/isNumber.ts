/**
 * Regular expression for checking if the value is a number.
 *
 * Регулярное выражение для проверки, является ли значение числом.
 */
const NUMBER_REGEXP = /^[+-]?[0-9]+(\.[0-9]+)?$/

/**
 * Checks if the value is a number.
 *
 * Проверяет, является ли значение числом.
 * @param value values for checking / значения для проверки
 * @returns true if number / true, если число
 */
export function isNumber(value: unknown): value is number | string {
  switch (typeof value) {
    case 'number':
      return Number.isFinite(value)
    case 'bigint':
      return true
    case 'string':
      return NUMBER_REGEXP.test(value.trim())
    default:
      return false
  }
}
