/**
 * Checks if the value is an integer or a floating-point number.
 *
 * Проверяет, является ли значение числом или дробным числом.
 * @param value values for checking/ значения для проверки
 */
export function isFloat(value: any): boolean {
  switch (typeof value) {
    case 'number':
      return true
    case 'string':
      return Boolean(value.match(/^([0-9]+|[0-9]+\.[0-9]+)$/))
    default:
      return false
  }
}
