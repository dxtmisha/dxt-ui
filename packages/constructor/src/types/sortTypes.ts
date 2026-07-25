/**
 * Sorting direction. /
 * Направление сортировки.
 */
export type SortDir = 'asc' | 'desc'

/**
 * Single column sorting specification item. /
 * Элемент спецификации сортировки по отдельной колонке.
 */
export type SortColumnItem = {
  /** Column or property key for sorting / Колонка или ключ свойства для сортировки */
  column: string

  /** Sorting direction ('asc' or 'desc') / Направление сортировки ('asc' или 'desc') */
  dir: SortDir
}

/**
 * Target column(s) or property key(s) for sorting. /
 * Целевая колонка (колонки) или ключ (ключи) свойств для сортировки.
 */
export type SortColumn = string | string[] | Record<string, SortDir>

/**
 * Custom sort function signature. /
 * Сигнатура пользовательской функции сортировки.
 */
export type SortFunction<T = any> = (
  a: T,
  b: T,
  column?: string,
  dir?: SortDir
) => number

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
