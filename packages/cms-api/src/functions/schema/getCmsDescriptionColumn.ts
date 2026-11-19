import { text } from 'drizzle-orm/pg-core'

/**
 * Returns the standard `description` column definition for CMS tables.
 *
 * Возвращает стандартное определение колонки описания `description` для таблиц CMS.
 * @returns Drizzle column map with `description` / Объект колонки Drizzle с полем `description`
 */
export function getCmsDescriptionColumn() {
  return {
    /** Record description / Описание записи */
    description: text('description')
  }
}
