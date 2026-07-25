import { executeFunction, toNumberPositive } from '@dxtmisha/functional'

import type { PaginationPropsInclude } from '../types/paginationTypes'
import { computed } from 'vue'

/**
 * Class representing pagination logic across components.
 * Manages calculating page number, row limit, and list slicing for pagination.
 *
 * Класс для управления логикой пагинации в компонентах.
 * Управляет вычислением номера страницы, лимита строк и нарезкой списка для пагинации.
 */
export class PaginationInclude<T = any> {
  /**
   * Constructor for PaginationInclude.
   *
   * Конструктор для PaginationInclude.
   * @param props input pagination properties / входные свойства пагинации
   * @param targetList target list array or callback function returning list / целевой массив списка или функция обратного вызова, возвращающая список
   */
  constructor(
    protected readonly props: PaginationPropsInclude<T>,
    protected readonly targetList?: T[] | (() => T[] | undefined)
  ) { }

  /**
   * Returns maximum available page number based on list length and rows per page.
   *
   * Возвращает максимально доступный номер страницы на основе длины списка и строк на страницу.
   * @returns maximum available page number / максимально доступный номер страницы
   */
  get max(): number {
    const sourceList = this.sourceList.value
    const rows = this.rows

    if (rows && sourceList.length > 0) {
      return Math.ceil(sourceList.length / rows)
    }

    return 1
  }

  /**
   * Returns current page number (capped at maximum available page).
   *
   * Возвращает номер текущей страницы (ограниченный максимально доступной страницей).
   * @returns current page number / номер текущей страницы
   */
  get page(): number {
    const page = toNumberPositive(this.props.page, 1)

    return Math.min(page, this.max)
  }

  /**
   * Returns number of rows per page, or 0 if full list should be displayed.
   *
   * Возвращает количество строк на странице или 0, если нужно отображать полный список.
   * @returns rows per page limit / количество строк на странице
   */
  get rows(): number {
    return toNumberPositive(this.props.rows)
  }

  /**
   * Returns paginated or full list of items.
   *
   * Возвращает пагинированный или полный список элементов.
   * @returns paginated or full list of items / пагинированный или полный список элементов
   */
  get list(): T[] {
    const sourceList = this.sourceList.value
    const rows = this.rows

    if (
      rows
      && sourceList.length > rows
    ) {
      const start = (this.page - 1) * rows
      return sourceList.slice(start, start + rows)
    }

    return sourceList
  }

  /**
   * Returns source list array from targetList callback or props list.
   *
   * Возвращает исходный массив списка из callback-функции targetList или props list.
   * @returns source list array / исходный массив списка
   */
  protected readonly sourceList = computed<T[]>(() => {
    return executeFunction(this.targetList) ?? this.props.list ?? []
  })
}
