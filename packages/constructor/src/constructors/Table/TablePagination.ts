import { toNumberPositive } from '@dxtmisha/functional'

import type { TableProps } from './props'
import type { TableList } from './basicTypes'
import type { TableSearch } from './TableSearch'

/**
 * Class representing table pagination logic.
 * Manages calculating page number, row limit, and list slicing for table pagination.
 *
 * Класс, представляющий логику пагинации таблицы.
 * Управляет вычислением номера страницы, лимита строк и нарезкой списка для пагинации таблицы.
 */
export class TablePagination {
  /**
   * Constructor for TablePagination.
   * @param props input table properties / входные свойства таблицы
   * @param search table search manager instance / экземпляр менеджера поиска таблицы
   */
  constructor(
    protected readonly props: TableProps,
    protected readonly search?: TableSearch
  ) {}

  /**
   * Returns current page number. /
   * Возвращает номер текущей страницы.
   */
  get page(): number {
    return toNumberPositive(this.props.page, 1)
  }

  /**
   * Returns number of rows per page, or 0 if full list should be displayed. /
   * Возвращает количество строк на странице или 0, если нужно отображать полный список.
   */
  get rows(): number {
    return toNumberPositive(this.props.rows)
  }

  /**
   * Returns paginated or full list of table items. /
   * Возвращает пагинированный или полный список элементов таблицы.
   */
  get list(): TableList<any> {
    const sourceList = this.search?.list ?? this.props.list

    if (!sourceList) {
      return []
    }

    const rows = this.rows

    if (rows) {
      const start = (this.page - 1) * rows
      return sourceList.slice(start, start + rows)
    }

    return sourceList
  }
}
