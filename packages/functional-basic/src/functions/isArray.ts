/**
 * Checks if the values are arrays.
 *
 * Проверяет, являются ли значения массивами.
 * @param value input value/ входное значение
 * @returns true if array / true, если массив
 */
export function isArray<T = unknown>(value: unknown): value is T[] {
  return Array.isArray(value)
}
