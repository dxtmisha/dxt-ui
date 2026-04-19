/**
 * Checks if the values are arrays.
 *
 * Проверяет, являются ли значения массивами.
 * @param value input value/ входное значение
 * @returns true if array / true, если массив
 */
export function isArray<T, R>(value: T): value is Extract<T, R[]> {
  return Array.isArray(value)
}
