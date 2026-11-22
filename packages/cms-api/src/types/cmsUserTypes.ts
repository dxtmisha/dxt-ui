import type { CmsUserItem } from '../classes/tables/CmsUserItem'
import type {
  CmsNewUser,
  CmsUser,
  CmsUserStatus
} from './cmsDbTypes'
import type { CmsRoleWithPermissions } from './cmsRoleTypes'

/** Public user record without password hash / Публичная запись пользователя без хэша пароля */
export type CmsUserPublic = Omit<CmsUser, 'passwordHash'>

/** Public user record with assigned CMS roles and their permissions / Публичная запись пользователя с назначенными ролями CMS и их правами доступа */
export interface CmsUserWithRoles extends CmsUserPublic {
  /** Assigned CMS roles with permissions / Назначенные роли CMS с правами доступа */
  roles: CmsRoleWithPermissions[]
}

/** Role assignment fields for creating or updating a CMS user / Поля назначения ролей при создании или редактировании пользователя CMS */
export interface CmsUserRoleAssignmentInput {
  /** Role identifiers to assign / Идентификаторы ролей для назначения */
  roleIds?: readonly number[]
  /** Role codes to assign / Коды ролей для назначения */
  roleCodes?: readonly string[]
}

/** Input payload for creating a new CMS user / Входные данные для создания нового пользователя CMS */
export type CmsUserCreateInput = Omit<CmsNewUser, 'id' | 'createdAt' | 'updatedAt'> & CmsUserRoleAssignmentInput

/** Input payload for updating an existing CMS user / Входные данные для редактирования существующего пользователя CMS */
export type CmsUserUpdateInput = Partial<Omit<CmsNewUser, 'id' | 'createdAt' | 'updatedAt'>> & CmsUserRoleAssignmentInput

/** Filtering and pagination options for listing CMS users / Параметры фильтрации и пагинации списка пользователей CMS */
export interface CmsUserListOptions {
  /** Case-insensitive search query across email, username, and name fields / Поисковый запрос без учёта регистра по email, логину и ФИО */
  search?: string
  /** Filter by single status or list of statuses / Фильтр по одному статусу или списку статусов */
  status?: CmsUserStatus | readonly CmsUserStatus[]
  /** Filter by creation origin code / Фильтр по коду источника создания */
  createdOrigin?: string
  /** Filter by assigned role identifier / Фильтр по идентификатору назначенной роли */
  roleId?: number
  /** Filter by assigned role code / Фильтр по коду назначенной роли */
  roleCode?: string
  /** Filter by assigned permission identifier (via roles) / Фильтр по идентификатору права доступа (через роли) */
  permissionId?: number
  /** Filter by assigned permission code (via roles) / Фильтр по коду права доступа (через роли) */
  permissionCode?: string
  /** Include soft-deleted users in results / Включать ли мягко удалённых пользователей в выборку */
  includeDeleted?: boolean
  /** Maximum number of records to return / Максимальное количество возвращаемых записей */
  limit?: number
  /** Number of records to skip / Количество пропускаемых записей */
  offset?: number
}

/** Paginated list of CMS users wrapped in CmsUserItem with total count / Постраничный список пользователей CMS в обёртке CmsUserItem с общим количеством записей */
export interface CmsUserListResult {
  /** List of user entity wrappers / Список экземпляров пользователей */
  items: CmsUserItem[]
  /** Total number of matching users / Общее количество найденных пользователей */
  total: number
  /** Applied page limit / Применённый лимит выборки */
  limit: number
  /** Applied page offset / Применённое смещение выборки */
  offset: number
}

/** Options for deleting a CMS user / Параметры удаления пользователя CMS */
export interface CmsUserDeleteOptions {
  /** Permanently delete user record instead of soft delete / Безвозвратно удалить запись из базы вместо мягкого удаления */
  hard?: boolean
}
