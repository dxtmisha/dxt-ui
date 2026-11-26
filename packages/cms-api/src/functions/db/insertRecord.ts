import type {
  CmsDbExecutor,
  CmsIdTable
} from '../../types/cmsDbTypes'

/**
 * Inserts a new record into the specified table and returns the inserted row.
 *
 * Вставляет новую запись в указанную таблицу и возвращает вставленную строку.
 * @param executor Database or transaction executor / Исполнитель БД или транзакции
 * @param table Drizzle table schema / Схема таблицы Drizzle
 * @param values Insert column values / Значения колонок для вставки
 * @returns Inserted record or undefined / Вставленная запись или undefined
 */
export async function insertRecord<TRecord>(
  executor: CmsDbExecutor,
  table: CmsIdTable,
  values: Partial<CmsIdTable['$inferInsert']>
): Promise<TRecord | undefined> {
  const insertedRows = await executor
    .insert(table)
    .values(values as CmsIdTable['$inferInsert'])
    .returning()

  return insertedRows[0] as TRecord | undefined
}
