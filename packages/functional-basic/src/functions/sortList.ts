import { getItemByPath } from './getItemByPath'
import { isArray } from './isArray'
import { isNull } from './isNull'
import { isNumber } from './isNumber'
import { toNumber } from './toNumber'

import type { SortColumnItem, SortFunction } from '../types/sortTypes'

/** Cached Intl.Collator instance for natural string comparison / Кэшированный экземпляр Intl.Collator для естественного сравнения строк */
let cachedCollator: Intl.Collator | undefined

/**
 * Returns a cached Intl.Collator instance for natural string sorting.
 *
 * Возвращает кэшированный экземпляр Intl.Collator для естественной сортировки строк.
 * @returns Intl.Collator instance or undefined in environments without Intl / экземпляр Intl.Collator или undefined в средах без Intl
 */
function getCollator(): Intl.Collator | undefined {
  if (typeof Intl?.Collator === 'undefined') {
    return undefined
  }

  if (!cachedCollator) {
    cachedCollator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' })
  }

  return cachedCollator
}

/**
 * Sorts an array of items by one or more column paths, directions, or a custom comparison function.
 *
 * Сортирует массив элементов по одному или нескольким путям колонок, направлениям или пользовательской функции сравнения.
 * @param list input list array of items / входной список элементов
 * @param sortColumns list of column sorting specifications / список спецификаций сортировки колонок
 * @param customSort optional custom comparison function / необязательная пользовательская функция сравнения
 * @returns new sorted array of items / новый отсортированный массив элементов
 */
export function sortList<T = Record<string, unknown>>(
  list: T[],
  sortColumns: SortColumnItem[],
  customSort?: SortFunction<T>
): T[] {
  if (
    !isArray(list)
    || list.length < 2
    || !isArray(sortColumns)
    || sortColumns.length === 0
  ) {
    return isArray(list) ? [...list] : []
  }

  const collator = getCollator()

  return [...list].sort((itemFirst: T, itemSecond: T) => {
    for (const { column, dir } of sortColumns) {
      if (!column) {
        continue
      }

      if (customSort) {
        const customResult = customSort(
          itemFirst,
          itemSecond,
          column,
          dir
        )

        if (customResult !== 0) {
          return customResult
        }

        continue
      }

      const valueFirst = getItemByPath<Record<string, unknown>, unknown>(itemFirst as Record<string, unknown>, column)
      const valueSecond = getItemByPath<Record<string, unknown>, unknown>(itemSecond as Record<string, unknown>, column)

      if (
        valueFirst === valueSecond
        || (isNull(valueFirst) && isNull(valueSecond))
      ) {
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

      if (
        valueFirst instanceof Date
        && valueSecond instanceof Date
      ) {
        const timeFirst = valueFirst.getTime()
        const timeSecond = valueSecond.getTime()

        if (!Number.isNaN(timeFirst) && !Number.isNaN(timeSecond)) {
          return (timeFirst - timeSecond) * factor
        }
      }

      const stringFirst = String(valueFirst)
      const stringSecond = String(valueSecond)

      const compareResult = collator
        ? collator.compare(stringFirst, stringSecond)
        : stringFirst.localeCompare(stringSecond)

      return compareResult * factor
    }

    return 0
  })
}
