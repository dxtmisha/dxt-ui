import { timestamp } from 'drizzle-orm/pg-core'

/**
 * Returns the standard `updatedAt` timestamp column definition for CMS tables.
 *
 * Возвращает стандартное определение колонки даты последнего обновления `updatedAt` для таблиц CMS.
 * @returns Drizzle column map with `updatedAt` / Объект колонок Drizzle с полем `updatedAt`
 */
export function getCmsUpdatedAtColumn() {
  return {
    /** Last update timestamp / Дата последнего обновления */
    updatedAt: timestamp('updated_at').defaultNow().notNull()
  }
}
