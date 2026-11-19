import { text } from 'drizzle-orm/pg-core'

/**
 * Returns the standard `name` column definition for CMS tables.
 *
 * Возвращает стандартное определение колонки названия `name` для таблиц CMS.
 * @returns Drizzle column map with `name` / Объект колонки Drizzle с полем `name`
 */
export function getCmsNameColumn() {
  return {
    /** Display title or translation key / Отображаемое название или ключ перевода */
    name: text('name').notNull()
  }
}
