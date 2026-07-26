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
  column?: string
  /** Sorting direction ('asc' or 'desc') / Направление сортировки ('asc' или 'desc') */
  dir?: SortDir
}

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
