import { pgTable, serial, text } from 'drizzle-orm/pg-core'
import { getCmsCreatedOriginColumn } from '../../functions/schema/getCmsCreatedOriginColumn'
import { getCmsSystemStatusColumn } from '../../functions/schema/getCmsSystemStatusColumn'
import { getCmsTimestampColumns } from '../../functions/schema/getCmsTimestampColumns'

/**
 * Roles table schema for CMS /
 * Схема таблицы ролей для CMS
 */
export const roles = /* #__PURE__ */ pgTable('roles', {
  // Identifiers
  /** Role identifier / Идентификатор роли */
  id: serial('id').primaryKey(),
  /** Unique role code / Уникальный код роли */
  code: text('code').notNull().unique(),

  // Basic info
  /** Display title / Отображаемое название */
  name: text('name').notNull(),
  /** Role description / Описание роли */
  description: text('description'),

  // System status
  ...getCmsSystemStatusColumn(),

  // Origin
  ...getCmsCreatedOriginColumn(),

  // Timestamps
  ...getCmsTimestampColumns()
})
