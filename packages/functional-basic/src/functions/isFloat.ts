/**
 * Checks if the value is an integer or a floating-point number.
 *
 * Проверяет, является ли значение числом или дробным числом.
 * @param value values for checking/ значения для проверки
 * @returns true if number/ true, если число
 */
export function isFloat(value: any): boolean {
  switch (typeof value) {
    case 'number':
      return true
    case 'string':
      return /^-?\d+(\.\d+)?$/.test(value)
    default:
      return false
  }
}
