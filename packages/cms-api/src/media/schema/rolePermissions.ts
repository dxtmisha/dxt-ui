import { index, integer, pgTable, primaryKey, timestamp } from 'drizzle-orm/pg-core'
import { permissions } from './permissions'
import { roles } from './roles'

/**
 * Role permissions junction table schema for CMS (many-to-many) /
 * Связующая таблица прав ролей для CMS (многие ко многим)
 */
export const rolePermissions = /* #__PURE__ */ pgTable(
  'role_permissions',
  {
    // Relations
    /** Role identifier / Идентификатор роли */
    roleId: integer('role_id')
      .notNull()
      .references(() => roles.id, { onDelete: 'cascade' }),
    /** Permission identifier / Идентификатор права доступа */
    permissionId: integer('permission_id')
      .notNull()
      .references(() => permissions.id, { onDelete: 'cascade' }),

    // Timestamps
    /** Assignment timestamp / Дата назначения права */
    createdAt: timestamp('created_at').defaultNow().notNull()
  },
  table => [
    primaryKey({ columns: [table.roleId, table.permissionId] }),
    index('role_permissions_permission_idx').on(table.permissionId)
  ]
)
