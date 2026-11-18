import { pgTable, serial, text } from 'drizzle-orm/pg-core'
import { getCmsSystemStatusColumn } from '../../functions/schema/getCmsSystemStatusColumn'
import { getCmsTimestampColumns } from '../../functions/schema/getCmsTimestampColumns'

/**
 * Created origins table schema for CMS /
 * Схема таблицы источников создания записей для CMS
 */
export const createdOrigins = /* #__PURE__ */ pgTable('created_origins', {
  // Identifiers
  /** Origin identifier / Идентификатор источника */
  id: serial('id').primaryKey(),
  /** Unique origin code / Уникальный код источника */
  code: text('code').notNull().unique(),

  // Basic info
  /** Display title or translation key / Отображаемое название или ключ перевода */
  name: text('name').notNull(),
  /** Origin description / Описание источника */
  description: text('description'),

  // System status
  ...getCmsSystemStatusColumn(),

  // Timestamps
  ...getCmsTimestampColumns()
})
