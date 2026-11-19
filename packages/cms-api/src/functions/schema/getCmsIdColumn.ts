import { serial } from 'drizzle-orm/pg-core'

/**
 * Returns the standard `id` primary key column definition for CMS tables.
 *
 * Возвращает стандартное определение колонки первичного ключа `id` для таблиц CMS.
 * @returns Drizzle column map with `id` / Объект колонки Drizzle с полем `id`
 */
export function getCmsIdColumn() {
  return {
    /** Record identifier / Идентификатор записи */
    id: serial('id').primaryKey()
  }
}
