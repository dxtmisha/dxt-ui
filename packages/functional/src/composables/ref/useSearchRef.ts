import { computed, type ComputedRef, type Ref } from 'vue'
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
import type { SearchColumnsInput, SearchListInput } from '../../types/searchTypes'

/**
 * Return interface for `useSearchRef` composable /
 * Интерфейс возвращаемого значения композабла `useSearchRef`
 */
export interface UseSearchRef<
  T extends SearchItem,
  K extends SearchColumns<T>
> {
  /**
   * Whether the search is currently active (minimum character limit reached) /
   * Активен ли поиск в данный момент (достигнут ли лимит символов)
   */
  isSearch: ComputedRef<boolean>
  /** Search string ref / Ссылка на строку поиска */
  search: Ref<string>
  /**
   * Search loading status (if delay is used) /
   * Статус загрузки поиска (если используется задержка)
   */
  loading: Ref<boolean>
  /**
   * Formatted list of search results with highlights /
   * Форматированный список результатов поиска с подсветкой совпадений
   */
  listSearch: ComputedRef<SearchFormatList<T, K>>
  /**
   * Length of the search results /
   * Длина списка результатов поиска
   */
  length: ComputedRef<number>
}

/**
 * Composable for handling search logic with reactive data.
 *
 * Композабл для управления логикой поиска с реактивными данными.
 * @template T search item type / тип элемента поиска
 * @template K search columns type / тип колонок поиска
 * @param list list of items to search / список элементов для поиска
 * @param columns columns to search in / колонки, по которым ведется поиск
 * @param value reactive search string / реактивная строка поиска
 * @param options search options / настройки поиска
 * @returns reactive search state and formatted results / реактивное состояние поиска и отформатированные результаты
 */
export function useSearchRef<
  T extends SearchItem,
  K extends SearchColumns<T>
>(
  list: SearchListInput<T>,
  columns?: SearchColumnsInput<T, K>,
  value?: Ref<string>,
  options?: SearchOptions
): UseSearchRef<T, K> {
  /**
   * Get columns to search in.
   *
   * Получить колонки для поиска.
   * @returns array of search columns or undefined / массив колонок для поиска или undefined
   */
  const getColumns = (): K | undefined => getRef(executeFunction(columns))

  /** Search list instance / Экземпляр поиска */
  const item = new SearchList<T, K>(
    undefined,
    getColumns(),
    undefined,
    options
  )

  const {
    search,
    searchDelay,
    loading
  } = useSearchValueRef(item, value)

  /**
   * Get list of items to search.
   *
   * Получить список элементов для поиска.
   * @returns array of search items / массив элементов для поиска
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
      .setColumns(getColumns())
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
      .setColumns(getColumns())
      .setValue(searchDelay.value)
      .to()
  })

  /**
   * Length of the search results /
   * Длина списка результатов поиска
   */
  const length = computed<number>(() => listSearch.value.length)

  return {
    /**
     * Whether the search is currently active (minimum character limit reached) /
     * Активен ли поиск в данный момент (достигнут ли лимит символов)
     */
    isSearch,

    /** Search string ref / Ссылка на строку поиска */
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
