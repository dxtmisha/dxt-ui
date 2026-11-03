import { forEach } from './forEach'

import { type ObjectOrArray } from '../types/basicTypes'

/**
 * Returns an array of values for a specific column in the input array.
 *
 * Возвращает массив значений для определенного столбца входного массива.
 * @template T item type / тип элемента
 * @template K column key type / тип ключа столбца
 * @param array a multi-dimensional array or an array of objects, or null / многомерный массив или массив объектов, или null
 * @param column the column of values to return / ключ столбца, значения которого нужно вернуть
 * @returns list of values for the column / список значений для столбца
 */
export function getColumn<T, K extends keyof T>(
  array: ObjectOrArray<T> | null | undefined,
  column: K
): (T[K] | undefined)[] {
  if (!array) {
    return []
  }

  return forEach(array, item => item?.[column], true)
}
