import type { SQL } from 'drizzle-orm'
import type { SelectedFields } from 'drizzle-orm/pg-core'

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
 * @param select Optional selected columns map / Необязательный набор выбираемых колонок
 * @returns Found record or undefined / Найденная запись или undefined
 */
export async function findOneCmsRecord<TRecord>(
  executor: CmsDbExecutor,
  table: CmsIdTable,
  whereCondition: SQL | undefined,
  select?: SelectedFields
): Promise<TRecord | undefined> {
  if (!whereCondition) {
    return undefined
  }

  const foundRows = await (select ? executor.select(select) : executor.select())
    .from(table)
    .where(whereCondition)
    .limit(1)

  return foundRows[0] as TRecord | undefined
}
