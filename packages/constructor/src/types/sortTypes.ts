import type { SortDir, SortFunction } from '@dxtmisha/functional'

/**
 * Target column(s) or property key(s) for sorting. /
 * Целевая колонка (колонки) или ключ (ключи) свойств для сортировки.
 */
export type SortColumn = string | string[] | Record<string, SortDir>

/**
 * Type representing sort properties for components and SortInclude.
 *
 * Тип, описывающий свойства сортировки для компонентов и SortInclude.
 */
export type SortPropsInclude<T = any> = {
  /** Input items list / Входной список элементов */
  list?: T[]

  /** Target column(s) or property key(s) for sorting / Целевая колонка (колонки) или ключ (ключи) свойств для сортировки */
  sort?: SortColumn

  /** Sorting direction ('asc' or 'desc') / Направление сортировки ('asc' или 'desc') */
  sortDir?: SortDir

  /** Custom sorting comparison function / Пользовательская функция сравнения для сортировки */
  sortFunction?: SortFunction<T>
}
