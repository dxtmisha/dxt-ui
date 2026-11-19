import { jsonb } from 'drizzle-orm/pg-core'

/**
 * Returns the standard `metadata` JSONB column definition for CMS tables.
 *
 * Возвращает стандартное определение JSONB-колонки `metadata` для таблиц CMS.
 * @returns Drizzle column map with `metadata` / Объект колонки Drizzle с полем `metadata`
 */
export function getCmsMetadataColumn<
  TMetadata extends Record<string, unknown> = Record<string, unknown>
>() {
  return {
    /** Record metadata / Метаданные записи */
    metadata: jsonb('metadata').$type<TMetadata>().notNull().default({} as TMetadata)
  }
}
