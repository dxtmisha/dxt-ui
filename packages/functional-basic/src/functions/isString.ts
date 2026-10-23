/**
 * Checks if the value is of type string.
 *
 * Проверяет, является ли значение типом строки.
 * @param value input value/ входное значение
 * @returns true if string / true, если строка
 */
export function isString(value: unknown): value is string {
  return typeof value === 'string'
}
