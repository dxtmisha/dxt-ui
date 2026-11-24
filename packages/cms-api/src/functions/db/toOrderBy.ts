import {
  asc,
  type SQL
} from 'drizzle-orm'
import { isArray } from '@dxtmisha/functional-basic'
import type { CmsIdTable } from '../../types/cmsDbTypes'

/**
 * Resolves a SQL order-by expression list for a CMS table, defaulting to ascending table ID.
 *
 * Преобразует параметры сортировки SQL в список выражений для таблицы CMS с сортировкой по возрастанию ID по умолчанию.
 * @param table Drizzle table schema / Схема таблицы Drizzle
 * @param orderBy Optional SQL order-by expression or list / Необязательное выражение или список выражений сортировки SQL
 * @returns Non-empty array of SQL order-by expressions / Массив SQL-выражений сортировки
 */
export function toOrderBy(
  table: CmsIdTable,
  orderBy?: SQL | readonly SQL[]
): readonly SQL[] {
  if (orderBy === undefined) {
    return [asc(table.id)]
  }

  if (isArray(orderBy)) {
    if (orderBy.length > 0) {
      return orderBy as readonly SQL[]
    }

    return [asc(table.id)]
  }

  return [orderBy as SQL]
}
