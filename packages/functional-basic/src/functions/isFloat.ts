/**
 * Regular expression for checking if the value is an integer or floating-point number.
 *
 * Регулярное выражение для проверки, является ли значение целым или дробным числом.
 */
const FLOAT_REGEXP = /^[+-]?\d+(\.\d+)?$/

/**
 * Checks if the value is an integer or a floating-point number.
 *
 * Проверяет, является ли значение числом или дробным числом.
 * @param value values for checking / значения для проверки
 * @returns true if number / true, если число
 */
export function isFloat(value: unknown): boolean {
  switch (typeof value) {
    case 'number':
      return Number.isFinite(value)
    case 'string':
      return FLOAT_REGEXP.test(value.trim())
    default:
      return false
  }
}
