import { text } from 'drizzle-orm/pg-core'

/**
 * Returns the standard unique `code` column definition for CMS tables.
 *
 * Возвращает стандартное определение уникальной колонки `code` для таблиц CMS.
 * @returns Drizzle column map with `code` / Объект колонки Drizzle с полем `code`
 */
export function getCmsCodeColumn() {
  return {
    /** Unique record code / Уникальный код записи */
    code: text('code').notNull().unique()
  }
}
