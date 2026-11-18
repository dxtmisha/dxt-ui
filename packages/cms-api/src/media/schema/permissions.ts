import { pgTable, serial, text } from 'drizzle-orm/pg-core'
import { getCmsCreatedOriginColumn } from '../../functions/schema/getCmsCreatedOriginColumn'
import { getCmsSystemStatusColumn } from '../../functions/schema/getCmsSystemStatusColumn'
import { getCmsTimestampColumns } from '../../functions/schema/getCmsTimestampColumns'

/**
 * Permissions table schema for CMS /
 * Схема таблицы прав доступа для CMS
 */
export const permissions = /* #__PURE__ */ pgTable('permissions', {
  // Identifiers
  /** Permission identifier / Идентификатор права доступа */
  id: serial('id').primaryKey(),
  /** Unique permission code / Уникальный код права доступа */
  code: text('code').notNull().unique(),

  // Basic info
  /** Display title / Отобраемое название */
  name: text('name').notNull(),
  /** Permission description / Описание права доступа */
  description: text('description'),

  // System status
  ...getCmsSystemStatusColumn(),

  // Origin
  ...getCmsCreatedOriginColumn(),

  // Timestamps
  ...getCmsTimestampColumns()
})
