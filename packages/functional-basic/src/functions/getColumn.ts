import { forEach } from './forEach'

import { type ObjectItem } from '../types/basicTypes'

/**
 * Returns an array of values for a specific column in the input array.
 *
 * Возвращает массив значений для определенного столбца входного массива.
 * @template T item type / тип элемента
 * @template K column key type / тип ключа столбца
 * @param array array or dictionary with nullable items, or a nullish collection / массив или словарь, где коллекция и элементы могут быть null или undefined
 * @param column the column of values to return / ключ столбца, значения которого нужно вернуть
 * @returns list of values for the column / список значений для столбца
 */
export function getColumn<T, K extends keyof T>(
  array: readonly (T | null | undefined)[] | ObjectItem<T | null | undefined> | null | undefined,
  column: K
): (T[K] | undefined)[] {
  if (!array) {
    return []
  }

  return forEach(array, item => item?.[column], true)
}
