import { text } from 'drizzle-orm/pg-core'
import { createdOrigins } from '../../media/schema/createdOrigins'

/**
 * Returns the standard `createdOrigin` foreign-key column definition referencing `created_origins.code`.
 *
 * Возвращает стандартное определение колонки внешнего ключа `createdOrigin`, ссылающейся на `created_origins.code`.
 * @returns Drizzle column map with `createdOrigin` / Объект колонки Drizzle с полем `createdOrigin`
 */
export function getCmsCreatedOriginColumn() {
  return {
    /** Creation origin code / Код источника создания записи */
    createdOrigin: text('created_origin').references(() => createdOrigins.code, {
      onUpdate: 'cascade',
      onDelete: 'set null'
    })
  }
}
