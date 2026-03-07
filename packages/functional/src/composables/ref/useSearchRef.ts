import { computed, type Ref } from 'vue'
import { forEach } from '@dxtmisha/functional-basic'

import { useSearchDataRef } from './useSearchDataRef'
import { useSearchValueRef } from './useSearchValueRef'

import type {
  SearchColumns,
  SearchItem,
  SearchListInput,
  SearchOptions,
  SearchFormatList
} from '../../types/searchTypes'

/**
 * Composable for handling search logic with reactive data.
 *
 * Композабл для управления логикой поиска с реактивными данными.
 * @param list list of items to search / список элементов для поиска
 * @param columns columns to search in / колонки, по которым ведется поиск
 * @param value reactive search string / реактивная строка поиска
 * @param options search options / настройки поиска
 */
export function useSearchRef<
  T extends SearchItem,
  K extends SearchColumns<T>
>(
  list: SearchListInput<T>,
  columns: K,
  value?: Ref<string>,
  options?: SearchOptions
) {
  const {
    returnEverything = false
  } = options ?? {}

  const {
    search,
    searchDelay,
    loading,
    isSearch,
    isSelection
  } = useSearchValueRef<T>(value, options)

  const {
    listCache,
    toFormatItem
  } = useSearchDataRef<T, K>(list, columns, searchDelay, options)

  return {
    /**
     * Whether the search is currently active (minimum character limit reached)/
     * Активен ли поиск в данный момент (достигнут ли лимит символов)
     */
    get isSearch() {
      return computed<boolean>(() => isSearch())
    },

    /** Search string ref/ Ссылка на строку поиска */
    search,

    /** Search loading status (if delay is used) / Статус загрузки поиска (если используется задержка) */
    loading,

    /** Formatted list of search results with highlights / Форматированный список результатов поиска с подсветкой совпадений */
    get listSearch() {
      return computed<SearchFormatList<T, K>>(() => {
        if (
          listCache.value.length > 0
        ) {
          if (isSearch()) {
            return forEach(
              listCache.value,
              (item) => {
                if (isSelection(item)) {
                  return toFormatItem(item.item, true)
                }

                if (returnEverything) {
                  return toFormatItem(item.item, false)
                }
              }
            ) as SearchFormatList<T, K>
          }

          return forEach(listCache.value, item => toFormatItem(item.item, false))
        }

        return []
      })
    }
  }
}
