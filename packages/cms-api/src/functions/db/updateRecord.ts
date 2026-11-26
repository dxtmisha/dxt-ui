import type { SQL } from 'drizzle-orm'

import type {
  CmsDbExecutor,
  CmsIdTable
} from '../../types/cmsDbTypes'

/**
 * Updates records matching a SQL predicate in the specified table and returns the first updated row.
 *
 * Обновляет записи в указанной таблице по SQL-предикату и возвращает первую обновлённую строку.
 * @param executor Database or transaction executor / Исполнитель БД или транзакции
 * @param table Drizzle table schema / Схема таблицы Drizzle
 * @param whereCondition SQL predicate / SQL-условие поиска
 * @param values Partial column values to set / Частичные значения колонок для обновления
 * @returns Updated record or undefined / Обновлённая запись или undefined
 */
export async function updateRecord<TRecord>(
  executor: CmsDbExecutor,
  table: CmsIdTable,
  whereCondition: SQL | undefined,
  values: Partial<CmsIdTable['$inferInsert']>
): Promise<TRecord | undefined> {
  if (!whereCondition) {
    return undefined
  }

  const updatedRows = await executor
    .update(table)
    .set(values)
    .where(whereCondition)
    .returning()

  return updatedRows[0] as TRecord | undefined
}
