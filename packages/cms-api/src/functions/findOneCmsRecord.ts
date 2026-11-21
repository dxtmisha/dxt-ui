import type { SQL } from 'drizzle-orm'

import type {
  CmsDbExecutor,
  CmsIdTable
} from '../types/cmsDbTypes'

/**
 * Finds a single entity record matching a SQL predicate in the specified table.
 *
 * Находит одну запись в указанной таблице по SQL-предикату.
 * @param executor Database or transaction executor / Исполнитель БД или транзакции
 * @param table Drizzle table schema / Схема таблицы Drizzle
 * @param whereCondition SQL predicate / SQL-условие поиска
 * @returns Found record or undefined / Найденная запись или undefined
 */
export async function findOneCmsRecord<TRecord>(
  executor: CmsDbExecutor,
  table: CmsIdTable,
  whereCondition: SQL | undefined
): Promise<TRecord | undefined> {
  if (!whereCondition) {
    return undefined
  }

  const foundRows = await executor
    .select()
    .from(table)
    .where(whereCondition)
    .limit(1)

  return foundRows[0] as TRecord | undefined
}
