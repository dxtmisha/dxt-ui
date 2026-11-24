import type { SQL } from 'drizzle-orm'

import type {
  CmsDbExecutor,
  CmsIdTable
} from '../../types/cmsDbTypes'

/**
 * Deletes records matching a SQL predicate in the specified table and returns whether any rows were deleted.
 *
 * Удаляет записи в указанной таблице по SQL-предикату и возвращает признак того, была ли удалена хотя бы одна запись.
 * @param executor Database or transaction executor / Исполнитель БД или транзакции
 * @param table Drizzle table schema / Схема таблицы Drizzle
 * @param whereCondition SQL predicate / SQL-условие поиска
 * @returns True if at least one record was deleted / True, если удалена хотя бы одна запись
 */
export async function deleteRecord(
  executor: CmsDbExecutor,
  table: CmsIdTable,
  whereCondition: SQL | undefined
): Promise<boolean> {
  if (!whereCondition) {
    return false
  }

  const deletedRows = await executor
    .delete(table)
    .where(whereCondition)
    .returning({ id: table.id })

  return deletedRows.length > 0
}
