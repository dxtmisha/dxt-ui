import { toRefs, type Ref } from 'vue'
import {
  executeFunction,
  useSearchRef,
  type SearchColumns,
  type SearchFormatList,
  type SearchItem
} from '@dxtmisha/functional'

import type { SearchPropsInclude } from '../types/searchTypes'

/**
 * Class for managing search logic across components.
 * Wraps useSearchRef to filter reactive lists by query and columns.
 *
 * Класс для управления логикой поиска в компонентах.
 * Оборачивает useSearchRef для фильтрации реактивных списков по запросу и колонкам.
 */
export class SearchInclude<T extends SearchItem = any> {
  /** Search composable instance / Экземпляр композабла поиска */
  readonly item: ReturnType<typeof useSearchRef<T, SearchColumns<T>>>

  /**
   * Constructor for SearchInclude.
   *
   * Конструктор для SearchInclude.
   * @param props input search properties / входные свойства поиска
   * @param columns fallback columns array or callback function returning columns / резервный массив колонок или функция обратного вызова, возвращающая колонки
   */
  constructor(
    protected readonly props: SearchPropsInclude<T>,
    protected readonly columns?: SearchColumns<T> | (() => SearchColumns<T>)
  ) {
    const { search } = toRefs(props)

    this.item = useSearchRef(
      () => this.props.list,
      () => this.getSearchColumns(),
      search as Ref<string>,
      this.props.searchOptions
    )
  }

  /**
   * Returns search filtered list of items.
   *
   * Возвращает список элементов, отфильтрованный поиском.
   * @returns search filtered list of items / отфильтрованный список элементов
   */
  get list(): SearchFormatList<T, SearchColumns<T>> {
    return this.item.listSearch.value
  }

  /**
   * Returns number of search results.
   *
   * Возвращает количество результатов поиска.
   * @returns number of search results / количество результатов поиска
   */
  get length(): number {
    return this.item.length.value
  }

  /**
   * Returns current search query string.
   *
   * Возвращает текущую строку поиска.
   * @returns current search query string / текущая строка поиска
   */
  get search(): string {
    return this.item.search.value
  }

  /**
   * Returns whether search is currently in loading state.
   *
   * Возвращает, находится ли поиск в состоянии загрузки.
   * @returns loading status / статус загрузки
   */
  get loading(): boolean {
    return this.item.loading.value
  }

  /**
   * Checks whether search is currently active.
   *
   * Проверяет, активен ли поиск в данный момент.
   * @returns search active state / состояние активности поиска
   */
  isSearch(): boolean {
    return this.item.isSearch.value
  }

  /**
   * Gets the search columns list from props or fallback callback/array.
   *
   * Получает список колонок поиска из props или резервного callback/массива.
   * @returns search columns array / массив колонок поиска
   */
  protected getSearchColumns(): SearchColumns<T> {
    if (
      this.props.searchColumns
      && this.props.searchColumns.length > 0
    ) {
      return this.props.searchColumns
    }

    return executeFunction(this.columns) ?? []
  }
}
