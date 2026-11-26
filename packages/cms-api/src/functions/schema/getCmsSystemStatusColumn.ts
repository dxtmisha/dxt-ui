import { text } from 'drizzle-orm/pg-core'
import { CmsSystemStatus } from '../../types/cmsDbTypes'

/**
 * Returns the standard `systemStatus` column definition for CMS tables.
 *
 * Возвращает стандартное определение колонки `systemStatus` для таблиц CMS.
 * @returns Drizzle column map with `systemStatus` / Объект колонки Drizzle с полем `systemStatus`
 */
export function getCmsSystemStatusColumn() {
  return {
    /** System record status / Системный статус записи */
    systemStatus: text('system_status').$type<CmsSystemStatus>().notNull().default(CmsSystemStatus.active)
  }
}
