import { getItemByPath } from './getItemByPath'
import { isNull } from './isNull'
import { isNumber } from './isNumber'
import { toNumber } from './toNumber'

import type { SortColumnItem, SortFunction } from '../types/sortTypes'

/**
 * Sorts an array of items by one or more column paths, directions, or a custom comparison function.
 *
 * Сортирует массив элементов по одному или нескольким путям колонок, направлениям или пользовательской функции сравнения.
 * @param list input list array of items / входной список элементов
 * @param sortColumns list of column sorting specifications / список спецификаций сортировки колонок
 * @param customSort optional custom comparison function / необязательная пользовательская функция сравнения
 * @returns new sorted array of items / новый отсортированный массив элементов
 */
export function sortList<T = any>(
  list: T[],
  sortColumns: SortColumnItem[],
  customSort?: SortFunction<T>
): T[] {
  if (
    sortColumns.length === 0
    || list.length < 2
  ) {
    return list
  }

  const collator = typeof Intl?.Collator !== 'undefined'
    ? new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' })
    : undefined

  return [...list].sort((itemFirst: T, itemSecond: T) => {
    for (const { column, dir } of sortColumns) {
      if (!column) {
        continue
      }

      if (customSort) {
        const res = customSort(
          itemFirst,
          itemSecond,
          column,
          dir
        )

        if (res !== 0) {
          return res
        }

        continue
      }

      const valueFirst = getItemByPath<any>(itemFirst, column)
      const valueSecond = getItemByPath<any>(itemSecond, column)

      if (valueFirst === valueSecond) {
        continue
      }

      if (isNull(valueFirst)) {
        return 1
      }

      if (isNull(valueSecond)) {
        return -1
      }

      const factor = dir === 'desc' ? -1 : 1

      if (
        isNumber(valueFirst)
        && isNumber(valueSecond)
      ) {
        return (toNumber(valueFirst) - toNumber(valueSecond)) * factor
      }

      if (
        typeof valueFirst === 'boolean'
        && typeof valueSecond === 'boolean'
      ) {
        return (Number(valueFirst) - Number(valueSecond)) * factor
      }

      const strFirst = String(valueFirst)
      const strSecond = String(valueSecond)

      const compareResult = collator
        ? collator.compare(strFirst, strSecond)
        : strFirst.localeCompare(strSecond)

      return compareResult * factor
    }

    return 0
  })
}
