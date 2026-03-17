import { computed, type Ref } from 'vue'
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

  /**
   * Get list of items to search
   *
   * Получить список элементов для поиска
   */
  const getList = (): T[] => {
    const listRead = getRef(executeFunction(list))

    if (listRead) {
      return listRead
    }

    return []
  }

  /**
   * Whether the search is currently active (minimum character limit reached) /
   * Активен ли поиск в данный момент (достигнут ли лимит символов)
   */
  const isSearch = computed<boolean>(
    () => item
      .setValue(searchDelay.value)
      .getItem()
      .isSearch()
  )

  /**
   * Formatted list of search results with highlights /
   * Форматированный список результатов поиска с подсветкой совпадений
   */
  const listSearch = computed<SearchFormatList<T, K>>(() => {
    return item
      .setList(getList())
      .setValue(searchDelay.value)
      .to()
  })

  /**
   * Length of the search results /
   * Длина списка результатов поиска
   */
  const length = computed(() => listSearch.value.length)

  return {
    /**
     * Whether the search is currently active (minimum character limit reached)/
     * Активен ли поиск в данный момент (достигнут ли лимит символов)
     */
    isSearch,

    /** Search string ref/ Ссылка на строку поиска */
    search,

    /**
     * Search loading status (if delay is used) /
     * Статус загрузки поиска (если используется задержка)
     */
    loading,

    /**
     * Formatted list of search results with highlights /
     * Форматированный список результатов поиска с подсветкой совпадений
     */
    listSearch,

    /**
     * Length of the search results /
     * Длина списка результатов поиска
     */
    length
  }
}
