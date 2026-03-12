import { computed, ref, watchEffect, type Ref } from 'vue'
import {
  executeFunction,
  SearchList,
  type SearchColumns,
  type SearchFormatList,
  type SearchItem,
  type SearchOptions
} from '@dxtmisha/functional-basic'
import { getRef } from '../../functions/ref/getRef'

import { useSearchValueRef } from './useSearchValueRef'
import type { SearchListInput } from '../../types/searchTypes'

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
  const listRef = ref()
  /** Search list instance / Экземпляр поиска */
  const item = new SearchList<T, K>(
    undefined,
    columns,
    undefined,
    options
  )

  const {
    search,
    searchDelay,
    loading
  } = useSearchValueRef(item, value)

  watchEffect(() => {
    listRef.value = getRef(executeFunction(list))
    item.setList(listRef.value)
  })

  return {
    /**
     * Whether the search is currently active (minimum character limit reached)/
     * Активен ли поиск в данный момент (достигнут ли лимит символов)
     */
    get isSearch() {
      return computed<boolean>(
        () => item
          .setValue(searchDelay.value)
          .getItem()
          .isSearch()
      )
    },

    /** Search string ref/ Ссылка на строку поиска */
    search,

    /** Search loading status (if delay is used) / Статус загрузки поиска (если используется задержка) */
    loading,

    /** Formatted list of search results with highlights / Форматированный список результатов поиска с подсветкой совпадений */
    get listSearch() {
      return computed<SearchFormatList<T, K>>(() => {
        if (listRef.value) {
          return item
            .setValue(searchDelay.value)
            .to()
        }

        return []
      })
    }
  }
}
