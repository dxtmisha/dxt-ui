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

/** Drizzle PostgreSQL table constraint extending CmsIdTable with unique code, name, and description columns / Тип таблицы Drizzle PostgreSQL, расширяющий CmsIdTable колонками code, name и description */
export type CmsCodeTable = CmsIdTable & {
  /** Unique record code column / Колонка уникального кода записи */
  code: PgColumn
  /** Display name or translation key column / Колонка отображаемого названия или ключа перевода */
  name: PgColumn
  /** Optional description column / Колонка описания */
  description: PgColumn
}

/** Drizzle PostgreSQL table constraint extending CmsCodeTable with a createdOrigin column / Тип таблицы Drizzle PostgreSQL, расширяющий CmsCodeTable колонкой createdOrigin */
export type CmsCodeCreatedOriginTable = CmsCodeTable & {
  /** Creation origin code column / Колонка кода источника создания */
  createdOrigin: PgColumn
}

/** Base pagination options for CMS entity lists / Базовые параметры пагинации списков сущностей CMS */
export interface CmsListOptions {
  /** Maximum number of records to return / Максимальное количество возвращаемых записей */
  limit?: number
  /** Number of records to skip / Количество пропускаемых записей */
  offset?: number
}

/** Base filtering and pagination options for CMS code entity lists / Базовые параметры фильтрации и пагинации списков сущностей CMS с кодом */
export interface CmsCodeListOptions extends CmsListOptions {
  /** Case-insensitive search query across code, name, and description fields / Поисковый запрос без учёта регистра по коду, названию и описанию */
  search?: string
}

/** Paginated list result wrapper for CMS entity items / Постраничный список обёрток записей сущностей CMS */
export interface CmsListResult<TItem> {
  /** List of entity item wrappers / Список экземпляров сущностей */
  items: TItem[]
  /** Total number of matching records / Общее количество найденных записей */
  total: number
  /** Applied page limit / Применённый лимит выборки */
  limit: number
  /** Applied page offset / Применённое смещение выборки */
  offset: number
  /** Whether more matching records exist beyond the current page / Существуют ли ещё подходящие записи за пределами текущей страницы */
  hasMore: boolean
}

/** Timestamp values pair returned for a CMS record / Пара временных меток, возвращаемая для записи CMS */
export interface CmsTimestampValues {
  /** Creation timestamp / Дата создания */
  createdAt?: Date
  /** Last update timestamp / Дата последнего обновления */
  updatedAt?: Date
}

/** Base CMS entity record shape containing identifier, system status, and timestamp fields / Базовая структура записи сущности CMS с полями идентификатора, системного статуса и временных меток */
export interface CmsDbItemData {
  /** Primary identifier / Первичный идентификатор */
  id: number
  /** System record status / Системный статус записи */
  systemStatus: CmsSystemStatus
  /** Creation timestamp / Дата создания */
  createdAt: Date
  /** Last update timestamp / Дата последнего обновления */
  updatedAt: Date
}

/** Base CMS code entity record shape containing code, name, and description fields / Базовая структура записи сущности CMS с полями кода, названия и описания */
export interface CmsDbCodeItemData extends CmsDbItemData {
  /** Unique record code / Уникальный код записи */
  code: string
  /** Display name or translation key / Отображаемое название или ключ перевода */
  name: string
  /** Optional description / Необязательное описание */
  description: string | null
}

/** CMS code entity record shape with creation origin / Структура записи сущности CMS с кодом и источником создания */
export interface CmsDbCodeCreatedOriginItemData extends CmsDbCodeItemData {
  /** Creation origin code or null / Код источника создания или null */
  createdOrigin: string | null
}

/** Base input payload for creating a CMS code entity / Базовые входные данные для создания сущности CMS с кодом */
export interface CmsCodeCreateInput {
  /** Unique record code / Уникальный код записи */
  code: string
  /** Display name or translation key / Отображаемое название или ключ перевода */
  name: string
  /** Optional description / Необязательное описание */
  description?: string | null
  /** Optional system record status / Необязательный системный статус записи */
  systemStatus?: CmsSystemStatus
}

/** Input payload for creating a CMS code entity with creation origin / Входные данные для создания сущности CMS с кодом и источником создания */
export interface CmsCodeCreatedOriginCreateInput extends CmsCodeCreateInput {
  /** Optional creation origin code / Необязательный код источника создания */
  createdOrigin?: string | null
}

/** Base input payload for updating a CMS code entity / Базовые входные данные для обновления сущности CMS с кодом */
export interface CmsCodeUpdateInput {
  /** Unique record code / Уникальный код записи */
  code?: string
  /** Display name or translation key / Отображаемое название или ключ перевода */
  name?: string
  /** Optional description / Необязательное описание */
  description?: string | null
  /** Optional system record status / Необязательный системный статус записи */
  systemStatus?: CmsSystemStatus
}

/** Input payload for updating a CMS code entity with creation origin / Входные данные для обновления сущности CMS с кодом и источником создания */
export interface CmsCodeCreatedOriginUpdateInput extends CmsCodeUpdateInput {
  /** Optional creation origin code / Необязательный код источника создания */
  createdOrigin?: string | null
}

/** Validated Drizzle insert payload for a CMS code entity / Валидированные данные вставки для сущности CMS с кодом */
export interface CmsCodeInsertValues {
  /** Normalized unique record code / Нормализованный уникальный код записи */
  code: string
  /** Normalized display name / Нормализованное отображаемое название */
  name: string
  /** Normalized optional description or null / Нормализованное описание или null */
  description?: string | null
  /** Optional system record status / Необязательный системный статус записи */
  systemStatus?: CmsSystemStatus
}

/** Validated Drizzle insert payload for a CMS code entity with creation origin / Валидированные данные вставки для сущности CMS с кодом и источником создания */
export interface CmsCodeCreatedOriginInsertValues extends CmsCodeInsertValues {
  /** Normalized creation origin code or null / Нормализованный код источника создания или null */
  createdOrigin?: string | null
}

/** Validator/normalizer function applied to a column value before database update / Функция валидации и нормализации значения колонки перед обновлением в базе данных */
export type CmsDbUpdateValidator = (value: unknown) => unknown

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
