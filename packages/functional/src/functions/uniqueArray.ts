/**
 * Removes duplicate entries in an array.
 *
 * Удаляет повторяющиеся записи в массиве.
 * @param value input value / входное значение
 */
export function uniqueArray<T>(value: T[]): T[] {
  return [...new Set(value)]
}
