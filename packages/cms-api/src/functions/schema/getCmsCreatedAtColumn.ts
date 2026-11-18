import { timestamp } from 'drizzle-orm/pg-core'

/**
 * Returns the standard `createdAt` timestamp column definition for CMS tables.
 *
 * Возвращает стандартное определение колонки даты создания `createdAt` для таблиц CMS.
 * @returns Drizzle column map with `createdAt` / Объект колонки Drizzle с полем `createdAt`
 */
export function getCmsCreatedAtColumn() {
  return {
    /** Creation timestamp / Дата создания */
    createdAt: timestamp('created_at').defaultNow().notNull()
  }
}
