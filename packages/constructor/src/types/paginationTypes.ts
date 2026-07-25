/**
 * Type representing pagination properties for components and PaginationInclude.
 *
 * Тип, описывающий свойства пагинации для компонентов и PaginationInclude.
 */
export type PaginationPropsInclude<T = any> = {
  /** Input items list / Входной список элементов */
  list?: T[]

  /** Current page / Текущая страница */
  page?: number | string

  /** Number of records to display per page / Количество отображаемых записей на странице */
  rows?: number | string
}
