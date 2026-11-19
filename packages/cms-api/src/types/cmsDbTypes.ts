import type { PgColumn, PgTable } from 'drizzle-orm/pg-core'
import type { PostgresJsDatabase } from 'drizzle-orm/postgres-js'
import type {
  cmsSchema,
  createdOrigins,
  permissions,
  rolePermissions,
  roles,
  userRoles,
  users
} from '../media/schema/cmsSchema'

/** Base Drizzle PostgreSQL table constraint requiring id and systemStatus columns / Базовый тип таблицы Drizzle PostgreSQL с обязательными колонками id и systemStatus */
export type CmsIdTable = PgTable & {
  /** Primary identifier column / Колонка первичного идентификатора */
  id: PgColumn
  /** System record status column / Колонка системного статуса записи */
  systemStatus: PgColumn
  /** Optional creation timestamp column / Необязательная колонка даты создания */
  createdAt?: PgColumn
  /** Optional last update timestamp column / Необязательная колонка даты последнего обновления */
  updatedAt?: PgColumn
}

/** Timestamp values pair returned for a CMS record / Пара временных меток, возвращаемая для записи CMS */
export interface CmsTimestampValues {
  /** Creation timestamp / Дата создания */
  createdAt?: Date
  /** Last update timestamp / Дата последнего обновления */
  updatedAt?: Date
}

/** Created origin record selected from database / Запись источника создания, полученная из базы данных */
export type CmsCreatedOrigin = typeof createdOrigins.$inferSelect

/** New created origin payload for database insert / Данные нового источника создания для вставки в базу данных */
export type CmsNewCreatedOrigin = typeof createdOrigins.$inferInsert

/** Permission record selected from database / Запись права доступа, полученная из базы данных */
export type CmsPermission = typeof permissions.$inferSelect

/** New permission payload for database insert / Данные нового права доступа для вставки в базу данных */
export type CmsNewPermission = typeof permissions.$inferInsert

/** Role record selected from database / Запись роли, полученная из базы данных */
export type CmsRole = typeof roles.$inferSelect

/** New role payload for database insert / Данные новой роли для вставки в базу данных */
export type CmsNewRole = typeof roles.$inferInsert

/** New role payload with assigned permission codes for seeding / Данные новой роли со списком кодов прав доступа для инициализации */
export interface CmsRoleSeed extends CmsNewRole {
  /** List of permission codes assigned to the role / Список кодов прав доступа, назначаемых роли */
  permissions: readonly string[]
}

/** Role permission relation record selected from database / Запись связи роли и права доступа, полученная из базы данных */
export type CmsRolePermission = typeof rolePermissions.$inferSelect

/** New role permission relation payload for database insert / Данные новой связи роли и права доступа для вставки в базу данных */
export type CmsNewRolePermission = typeof rolePermissions.$inferInsert

/** System record status for main CMS entities / Системный статус записи для основных сущностей CMS */
export type CmsSystemStatus = 'active' | 'blocked' | 'deleted'

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

/** Database or transaction executor for CMS queries / Исполнитель запросов БД или транзакции для CMS */
export type CmsDbExecutor = CmsDb | Parameters<Parameters<CmsDb['transaction']>[0]>[0]

/** Options for seeding default or custom CMS records / Опции инициализации стандартных или пользовательских записей CMS */
export interface CmsSeedOptions {
  /** Custom created origins list to seed / Пользовательский список источников создания для инициализации */
  createdOrigins?: readonly CmsNewCreatedOrigin[]
  /** Custom permissions list to seed / Пользовательский список прав доступа для инициализации */
  permissions?: readonly CmsNewPermission[]
  /** Custom roles list to seed / Пользовательский список ролей для инициализации */
  roles?: readonly CmsRoleSeed[]
}

/** Result of seeding CMS database records / Результат инициализации записей базы данных CMS */
export interface CmsSeedResult {
  /** Seeded or existing created origin records / Добавленные или существующие записи источников создания */
  createdOrigins: CmsCreatedOrigin[]
  /** Seeded or existing permission records / Добавленные или существующие записи прав доступа */
  permissions: CmsPermission[]
  /** Seeded or existing role records / Добавленные или существующие записи ролей */
  roles: CmsRole[]
}
