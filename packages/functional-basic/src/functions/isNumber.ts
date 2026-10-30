/**
 * Regular expression for checking if the value is a number /
 * Регулярное выражение для проверки, является ли значение числом
 */
const NUMBER_REGEXP = /^[+-]?[0-9]+(\.[0-9]+)?$/

/**
 * Checks if the value is a number, numeric string, or bigint.
 *
 * Проверяет, является ли значение числом, числовой строкой или bigint.
 * @param value value to check / проверяемое значение
 * @returns true if number, numeric string, or bigint / true, если число, числовая строка или bigint
 */
export function isNumber(value?: unknown): value is number | string | bigint {
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
