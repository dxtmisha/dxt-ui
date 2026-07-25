import type { SearchOptions } from '@dxtmisha/functional'

/**
 * Type representing search properties for components and SearchInclude.
 *
 * Тип, описывающий свойства поиска для компонентов и SearchInclude.
 */
export type SearchPropsInclude<T = any> = {
  /** Input items list / Входной список элементов */
  list?: T[]

  /** Search string query / Строка поискового запроса */
  search?: string

  /** Columns or field names to search in / Колонки или названия полей для поиска */
  searchColumns?: string[]

  /** Additional search options / Дополнительные настройки поиска */
  searchOptions?: SearchOptions
}
