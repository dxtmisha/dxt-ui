import { type Ref, type ToRefs } from 'vue'
import { useSearchRef, type SearchOptions } from '@dxtmisha/functional'

import type { TableProps } from './props'
import type { TableList } from './basicTypes'
import type { TableColumns } from './TableColumns'

/**
 * Class representing table search logic.
 * Manages search filtering and query state for table rows using useSearchRef.
 *
 * Класс, представляющий логику поиска таблицы.
 * Управляет фильтрацией поиска и состоянием запроса для строк таблицы с использованием useSearchRef.
 */
export class TableSearch {
  /** Search composable instance / Экземпляр композабла поиска */
  readonly search: ReturnType<typeof useSearchRef>

  /**
   * Constructor for TableSearch.
   * @param props input table properties / входные свойства таблицы
   * @param refs input table properties in the form of reactive references / входные свойства таблицы в виде реактивных ссылок
   * @param columns table columns manager instance / экземпляр менеджера колонок таблицы
   */
  constructor(
    protected readonly props: TableProps,
    protected readonly refs: ToRefs<TableProps>,
    protected readonly columns?: TableColumns
  ) {
    this.search = useSearchRef(
      () => this.props.list ?? [],
      this.props.searchColumns ?? (this.columns?.list ?? []),
      this.refs.search as Ref<string>,
      this.props.searchOptions as SearchOptions | undefined
    )
  }

  /**
   * Whether search is currently active. /
   * Активен ли поиск в данный момент.
   */
  get isSearch(): boolean {
    return this.search.isSearch.value
  }

  /**
   * Returns search filtered list of items. /
   * Возвращает список элементов, отфильтрованный поиском.
   */
  get list(): TableList<any> {
    return this.search.listSearch.value
  }
}
