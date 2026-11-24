import type { SQL } from 'drizzle-orm'

import { findOneRecord } from './findOneRecord'
import type {
  CmsDbExecutor,
  CmsIdTable
} from '../../types/cmsDbTypes'

/**
 * Checks whether at least one record matching a SQL predicate exists in the specified table.
 *
 * Проверяет существование хотя бы одной записи в указанной таблице по SQL-предикату.
 * @param executor Database or transaction executor / Исполнитель БД или транзакции
 * @param table Drizzle table schema / Схема таблицы Drizzle
 * @param whereCondition SQL predicate / SQL-условие поиска
 * @returns True if a matching record exists / True, если подходящая запись существует
 */
export async function hasRecord(
  executor: CmsDbExecutor,
  table: CmsIdTable,
  whereCondition: SQL | undefined
): Promise<boolean> {
  const found = await findOneRecord<{ id: number }>(
    executor,
    table,
    whereCondition,
    { id: table.id }
  )

  return Boolean(found)
}
