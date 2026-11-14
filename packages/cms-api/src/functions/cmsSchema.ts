import {
  bigint,
  boolean,
  index,
  integer,
  jsonb,
  pgTable,
  primaryKey,
  serial,
  text,
  timestamp
} from 'drizzle-orm/pg-core'
import type { CmsUserMetadata, CmsUserStatus } from '../types/cmsDbTypes'

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

  // Timestamps
  /** Creation timestamp / Дата создания */
  createdAt: timestamp('created_at').defaultNow().notNull(),
  /** Last update timestamp / Дата последнего обновления */
  updatedAt: timestamp('updated_at').defaultNow().notNull()
})

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

  // Timestamps
  /** Creation timestamp / Дата создания */
  createdAt: timestamp('created_at').defaultNow().notNull(),
  /** Last update timestamp / Дата последнего обновления */
  updatedAt: timestamp('updated_at').defaultNow().notNull()
})

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

/**
 * Users table schema for CMS /
 * Схема таблицы пользователей для CMS
 */
export const users = /* #__PURE__ */ pgTable(
  'users',
  {
    // Identifiers & contacts
    /** User identifier / Идентификатор пользователя */
    id: serial('id').primaryKey(),
    /** Unique username or author slug / Уникальный логин или slug автора */
    username: text('username').unique(),
    /** User email / Электронная почта пользователя */
    email: text('email').notNull().unique(),
    /** International phone number (digits only, E.164 without +) / Международный номер телефона (только цифры, E.164 без +) */
    phone: bigint('phone', { mode: 'number' }).unique(),

    // Profile & display
    /** User first name / Имя пользователя */
    firstName: text('first_name').notNull(),
    /** User last name / Фамилия пользователя */
    lastName: text('last_name'),
    /** User middle name or patronymic / Отчество или второе имя пользователя */
    middleName: text('middle_name'),
    /** Avatar URL or file identifier / Ссылка или идентификатор файла аватара */
    avatar: text('avatar'),
    /** User biography or position / Описание автора или должность */
    bio: text('bio'),

    // Security & verification
    /** Password hash (optional for OAuth or invited users) / Хэш пароля (опционален для OAuth или приглашённых пользователей) */
    passwordHash: text('password_hash'),
    /** Account status / Статус учётной записи */
    status: text('status').$type<CmsUserStatus>().notNull().default('active'),
    /** Email verification timestamp / Дата подтверждения электронной почты */
    emailVerifiedAt: timestamp('email_verified_at'),
    /** Phone verification timestamp / Дата подтверждения телефона */
    phoneVerifiedAt: timestamp('phone_verified_at'),
    /** Two-factor authentication flag / Флаг двухфакторной аутентификации */
    twoFactorEnabled: boolean('two_factor_enabled').notNull().default(false),

    // Activity & metadata
    /** Last login timestamp / Дата последнего входа */
    lastLoginAt: timestamp('last_login_at'),
    /** User metadata (locale, timezone, settings, soft delete, custom fields) / Метаданные пользователя (локаль, часовой пояс, настройки, мягкое удаление, кастомные поля) */
    metadata: jsonb('metadata').$type<CmsUserMetadata>().notNull().default({}),

    // Timestamps
    /** Creation timestamp / Дата создания */
    createdAt: timestamp('created_at').defaultNow().notNull(),
    /** Last update timestamp / Дата последнего обновления */
    updatedAt: timestamp('updated_at').defaultNow().notNull()
  },
  table => [
    index('users_metadata_gin_idx').using('gin', table.metadata)
  ]
)

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

/**
 * Combined CMS database schema /
 * Объединённая схема базы данных CMS
 */
export const cmsSchema = {
  permissions,
  roles,
  rolePermissions,
  users,
  userRoles
}
