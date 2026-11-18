import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'
import type { CmsSystemStatus } from '../../types/cmsDbTypes'

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
  /** System record status / Системный статус записи */
  systemStatus: text('system_status').$type<CmsSystemStatus>().notNull().default('active'),

  // Timestamps
  /** Creation timestamp / Дата создания */
  createdAt: timestamp('created_at').defaultNow().notNull(),
  /** Last update timestamp / Дата последнего обновления */
  updatedAt: timestamp('updated_at').defaultNow().notNull()
})
