/**
 * Checks if the value is a number.
 *
 * Проверяет, является ли значение числом.
 * @param value values for checking/ значения для проверки
 */
export function isNumber(value: any): boolean {
  switch (typeof value) {
    case 'number':
      return true
    case 'string':
      return Boolean(value.match(/^[0-9]+$/))
    default:
      return false
  }
}
