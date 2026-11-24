import {
  sql,
  type SQL
} from 'drizzle-orm'

import type {
  CmsDbExecutor,
  CmsIdTable
} from '../../types/cmsDbTypes'

/**
 * Counts records matching an optional SQL predicate in the specified table.
 *
 * Подсчитывает количество записей в указанной таблице по необязательному SQL-предикату.
 * @param executor Database or transaction executor / Исполнитель БД или транзакции
 * @param table Drizzle table schema / Схема таблицы Drizzle
 * @param whereCondition Optional SQL predicate / Необязательное SQL-условие поиска
 * @returns Number of matching records / Количество найденных записей
 */
export async function countRecords(
  executor: CmsDbExecutor,
  table: CmsIdTable,
  whereCondition?: SQL
): Promise<number> {
  const countRows = await executor
    .select({ count: sql<number>`count(*)::int` })
    .from(table)
    .where(whereCondition)

  return countRows[0]?.count ?? 0
}
