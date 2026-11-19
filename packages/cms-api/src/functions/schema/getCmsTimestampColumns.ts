import { getCmsCreatedAtColumn } from './getCmsCreatedAtColumn'
import { getCmsUpdatedAtColumn } from './getCmsUpdatedAtColumn'

/**
 * Returns the standard `createdAt` and `updatedAt` timestamp column definitions for CMS tables.
 *
 * Возвращает стандартные определения колонок дат `createdAt` и `updatedAt` для таблиц CMS.
 * @returns Drizzle column map with `createdAt` and `updatedAt` / Объект колонок Drizzle с полями `createdAt` и `updatedAt`
 */
export function getCmsTimestampColumns() {
  return {
    ...getCmsCreatedAtColumn(),
    ...getCmsUpdatedAtColumn()
  }
}
