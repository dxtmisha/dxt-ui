import { shallowRef, watchEffect, type Ref } from 'vue'
import {
  addTagHighlightMatch,
  anyToString,
  executeFunction,
  forEach,
  getItemByPath,
  isFilled
} from '@dxtmisha/functional-basic'
import { getRef } from '../../functions/ref/getRef'

import type {
  SearchColumns,
  SearchItem,
  SearchListInput,
  SearchCache,
  SearchOptions
} from '../../types/searchTypes'

/**
 * Composable for preparing and formatting search data.
 *
 * Композабл для подготовки и форматирования данных для поиска.
 * @param list source list / исходный список
 * @param columns columns to index / колонки для индексации
 * @param searchDelay delayed search value for highlighting / значение поиска с задержкой для подсветки
 * @param options search options / настройки поиска
 */
export function useSearchDataRef<
  T extends SearchItem,
  K extends SearchColumns<T>
>(
  list: SearchListInput<T>,
  columns: K,
  searchDelay: Ref<string>,
  options?: SearchOptions
) {
  const {
    classSearchName = 'sys-search-selection'
  } = options ?? {}

  const listCache = shallowRef<SearchCache<T>>([])

  const getColumnName = (column: string) => column.replace(
    /\.([a-z0-9])/i,
    (_: string, char: string) => char.toUpperCase()
  ) + 'Search'

  const addTag = (value: any) => addTagHighlightMatch(
    anyToString(value),
    searchDelay.value,
    classSearchName
  )

  watchEffect(() => {
    const listReader = getRef(executeFunction(list))

    if (isFilled(listReader)) {
      listCache.value = forEach(
        listReader,
        (item) => {
          let valueAll = ''

          for (const column of columns) {
            const value = getItemByPath(item, column)

            if (isFilled(value)) {
              valueAll += ` ${anyToString(value)}`
            }
          }

          return {
            item,
            value: valueAll
          }
        }
      )
    }
  })

  return {
    /** Cached list with combined search values / Кэшированный список с объединенными значениями для поиска */
    listCache,

    /**
     * Finds a cached item by original item reference.
     *
     * Находит закэшированный элемент по ссылке на исходный объект.
     * @param item original item / исходный элемент
     */
    findCacheItem(item: T) {
      return listCache.value.find(cache => cache.item === item)
    },

    /**
     * Formats an item for display, optionally adding match highlighting.
     *
     * Форматирует элемент для отображения, опционально добавляя подсветку совпадений.
     * @param item item to format / элемент для форматирования
     * @param selection whether to highlight matches / нужно ли подсвечивать совпадения
     */
    toFormatItem(item: T, selection: boolean) {
      const format: Record<string, string> = {}

      columns.forEach((column) => {
        const name = getColumnName(column)
        const value = getItemByPath(item, column)

        format[name] = isFilled(value) && selection
          ? addTag(value)
          : anyToString(value)
      })

      return {
        ...item,
        ...format,
        searchActive: selection
      }
    }
  }
}
