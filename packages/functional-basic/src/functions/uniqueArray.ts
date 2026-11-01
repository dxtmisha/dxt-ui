import { isArray } from './isArray'

/**
 * Removes duplicate entries in an array.
 *
 * Удаляет повторяющиеся записи в массиве.
 * @template [T=unknown] element type / тип элементов массива
 * @param value input array / входной массив
 * @returns array without duplicates / массив без дубликатов
 */
export function uniqueArray<T = unknown>(value?: readonly T[] | null): T[] {
  if (
    !isArray<T>(value)
    || value.length === 0
  ) {
    return []
  }

  return [...new Set(value)]
}
