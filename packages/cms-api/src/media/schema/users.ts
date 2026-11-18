import {
  bigint,
  boolean,
  index,
  jsonb,
  pgTable,
  serial,
  text,
  timestamp
} from 'drizzle-orm/pg-core'
import { getCmsCreatedOriginColumn } from '../../functions/schema/getCmsCreatedOriginColumn'
import { getCmsSystemStatusColumn } from '../../functions/schema/getCmsSystemStatusColumn'
import { getCmsTimestampColumns } from '../../functions/schema/getCmsTimestampColumns'
import type {
  CmsUserMetadata,
  CmsUserStatus
} from '../../types/cmsDbTypes'

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

    // System status
    ...getCmsSystemStatusColumn(),

    // Origin
    ...getCmsCreatedOriginColumn(),

    // Timestamps
    ...getCmsTimestampColumns()
  },
  table => [
    index('users_metadata_gin_idx').using('gin', table.metadata)
  ]
)
