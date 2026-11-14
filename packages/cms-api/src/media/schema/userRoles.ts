import { index, integer, pgTable, primaryKey, timestamp } from 'drizzle-orm/pg-core'
import { roles } from './roles'
import { users } from './users'

/**
 * User roles junction table schema for CMS (many-to-many) /
 * Связующая таблица ролей пользователей для CMS (многие ко многим)
 */
export const userRoles = /* #__PURE__ */ pgTable(
  'user_roles',
  {
    // Relations
    /** User identifier / Идентификатор пользователя */
    userId: integer('user_id')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    /** Role identifier / Идентификатор роли */
    roleId: integer('role_id')
      .notNull()
      .references(() => roles.id, { onDelete: 'cascade' }),

    // Timestamps
    /** Assignment timestamp / Дата назначения роли */
    createdAt: timestamp('created_at').defaultNow().notNull()
  },
  table => [
    primaryKey({ columns: [table.userId, table.roleId] }),
    index('user_roles_role_idx').on(table.roleId)
  ]
)
