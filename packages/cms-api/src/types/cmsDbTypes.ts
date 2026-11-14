import type { PostgresJsDatabase } from 'drizzle-orm/postgres-js'
import type {
  cmsSchema,
  permissions,
  rolePermissions,
  roles,
  userRoles,
  users
} from '../media/schema/cmsSchema'

/** Permission record selected from database / Запись права доступа, полученная из базы данных */
export type CmsPermission = typeof permissions.$inferSelect

/** New permission payload for database insert / Данные нового права доступа для вставки в базу данных */
export type CmsNewPermission = typeof permissions.$inferInsert

/** Role record selected from database / Запись роли, полученная из базы данных */
export type CmsRole = typeof roles.$inferSelect

/** New role payload for database insert / Данные новой роли для вставки в базу данных */
export type CmsNewRole = typeof roles.$inferInsert

/** Role permission relation record selected from database / Запись связи роли и права доступа, полученная из базы данных */
export type CmsRolePermission = typeof rolePermissions.$inferSelect

/** New role permission relation payload for database insert / Данные новой связи роли и права доступа для вставки в базу данных */
export type CmsNewRolePermission = typeof rolePermissions.$inferInsert

/** User account status / Статус учётной записи пользователя */
export type CmsUserStatus = 'active' | 'invited' | 'blocked' | 'suspended'

/** User metadata and preferences stored in JSONB / Метаданные и персональные настройки пользователя в JSONB */
export interface CmsUserMetadata {
  /** Preferred interface locale / Предпочитаемая локаль интерфейса */
  locale?: string
  /** Preferred user timezone / Предпочитаемый часовой пояс пользователя */
  timezone?: string
  /** Admin UI settings and preferences / Настройки интерфейса админки */
  settings?: Record<string, unknown>
  /** Soft delete ISO timestamp / Дата мягкого удаления в формате ISO */
  deletedAt?: string
  /** Custom project fields / Произвольные дополнительные поля проекта */
  [key: string]: unknown
}

/** User record selected from database / Запись пользователя, полученная из базы данных */
export type CmsUser = typeof users.$inferSelect

/** New user payload for database insert / Данные нового пользователя для вставки в базу данных */
export type CmsNewUser = typeof users.$inferInsert

/** User role relation record selected from database / Запись связи пользователя и роли, полученная из базы данных */
export type CmsUserRole = typeof userRoles.$inferSelect

/** New user role relation payload for database insert / Данные новой связи пользователя и роли для вставки в базу данных */
export type CmsNewUserRole = typeof userRoles.$inferInsert

/** Typed Drizzle database instance for CMS / Типизированный экземпляр базы данных Drizzle для CMS */
export type CmsDb = PostgresJsDatabase<typeof cmsSchema>
