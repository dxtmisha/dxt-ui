import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'
import { createdOrigins } from './createdOrigins'
import type { CmsStatus } from '../../types/cmsDbTypes'

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

  // Status
  /** Role status / Статус роли */
  status: text('status').$type<CmsStatus>().notNull().default('active'),

  // Origin
  /** Creation origin code / Код источника создания записи */
  createdOrigin: text('created_origin').references(() => createdOrigins.code, {
    onUpdate: 'cascade',
    onDelete: 'set null'
  }),

  // Timestamps
  /** Creation timestamp / Дата создания */
  createdAt: timestamp('created_at').defaultNow().notNull(),
  /** Last update timestamp / Дата последнего обновления */
  updatedAt: timestamp('updated_at').defaultNow().notNull()
})
