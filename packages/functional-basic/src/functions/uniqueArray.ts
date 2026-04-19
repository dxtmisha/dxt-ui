/**
 * Removes duplicate entries in an array.
 *
 * Удаляет повторяющиеся записи в массиве.
 * @param value input value/ входное значение
 * @returns array without duplicates / массив без дубликатов
 */
export function uniqueArray<T>(value: T[]): T[] {
  return [...new Set(value)]
}
