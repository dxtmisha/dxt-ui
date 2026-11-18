import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'
import { createdOrigins } from './createdOrigins'
import type { CmsSystemStatus } from '../../types/cmsDbTypes'

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
  /** Display title / Отображаемое название */
  name: text('name').notNull(),
  /** Permission description / Описание права доступа */
  description: text('description'),

  // System status
  /** System record status / Системный статус записи */
  systemStatus: text('system_status').$type<CmsSystemStatus>().notNull().default('active'),

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
