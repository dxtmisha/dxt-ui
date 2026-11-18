import { timestamp } from 'drizzle-orm/pg-core'
import { getCmsCreatedAtColumn } from './getCmsCreatedAtColumn'

/**
 * Returns the standard `createdAt` and `updatedAt` timestamp column definitions for CMS tables.
 *
 * Возвращает стандартные определения колонок дат `createdAt` и `updatedAt` для таблиц CMS.
 * @returns Drizzle column map with `createdAt` and `updatedAt` / Объект колонок Drizzle с полями `createdAt` и `updatedAt`
 */
export function getCmsTimestampColumns() {
  return {
    ...getCmsCreatedAtColumn(),
    /** Last update timestamp / Дата последнего обновления */
    updatedAt: timestamp('updated_at').defaultNow().notNull()
  }
}
