import { getCmsIdColumn } from './getCmsIdColumn'
import { getCmsSystemStatusColumn } from './getCmsSystemStatusColumn'
import { getCmsTimestampColumns } from './getCmsTimestampColumns'

/**
 * Returns the standard base columns (`id`, `systemStatus`, `createdAt`, `updatedAt`) for CMS entity tables.
 *
 * Возвращает стандартные базовые колонки (`id`, `systemStatus`, `createdAt`, `updatedAt`) для таблиц сущностей CMS.
 * @returns Drizzle column map with `id`, `systemStatus`, `createdAt`, and `updatedAt` / Объект колонок Drizzle с полями `id`, `systemStatus`, `createdAt` и `updatedAt`
 */
export function getCmsBaseColumns() {
  return {
    ...getCmsIdColumn(),
    ...getCmsSystemStatusColumn(),
    ...getCmsTimestampColumns()
  }
}
