import type { SQL } from 'drizzle-orm'

import type {
  CmsDbExecutor,
  CmsIdTable
} from '../../types/cmsDbTypes'

/**
 * Updates records matching a SQL predicate in the specified table and returns whether any rows were updated.
 *
 * Обновляет записи в указанной таблице по SQL-предикату и возвращает признак того, была ли обновлена хотя бы одна запись.
 * @param executor Database or transaction executor / Исполнитель БД или транзакции
 * @param table Drizzle table schema / Схема таблицы Drizzle
 * @param whereCondition SQL predicate / SQL-условие поиска
 * @param values Partial column values to set / Частичные значения колонок для обновления
 * @returns True if at least one record was updated / True, если обновлена хотя бы одна запись
 */
export async function updateRecord(
  executor: CmsDbExecutor,
  table: CmsIdTable,
  whereCondition: SQL | undefined,
  values: Partial<CmsIdTable['$inferInsert']>
): Promise<boolean> {
  if (!whereCondition) {
    return false
  }

  const updatedRows = await executor
    .update(table)
    .set(values)
    .where(whereCondition)
    .returning({ id: table.id })

  return updatedRows.length > 0
}
