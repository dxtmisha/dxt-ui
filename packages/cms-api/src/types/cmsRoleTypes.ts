import type { CmsRoleItem } from '../classes/CmsRoleItem'
import type {
  CmsNewRole,
  CmsPermission,
  CmsRole
} from './cmsDbTypes'

/** Role record with assigned CMS permissions / Запись роли с назначенными правами доступа CMS */
export interface CmsRoleWithPermissions extends CmsRole {
  /** Assigned CMS permissions / Назначенные права доступа CMS */
  permissions: CmsPermission[]
}

/** Permission assignment fields for creating or updating a CMS role / Поля назначения прав доступа при создании или редактировании роли CMS */
export interface CmsRolePermissionAssignmentInput {
  /** Permission identifiers to assign / Идентификаторы прав доступа для назначения */
  permissionIds?: readonly number[]
  /** Permission codes to assign / Коды прав доступа для назначения */
  permissionCodes?: readonly string[]
}

/** Input payload for creating a new CMS role / Входные данные для создания новой роли CMS */
export type CmsRoleCreateInput = Omit<CmsNewRole, 'id' | 'createdAt' | 'updatedAt'> & CmsRolePermissionAssignmentInput

/** Input payload for updating an existing CMS role / Входные данные для редактирования существующей роли CMS */
export type CmsRoleUpdateInput = Partial<Omit<CmsNewRole, 'id' | 'createdAt' | 'updatedAt'>> & CmsRolePermissionAssignmentInput

/** Filtering and pagination options for listing CMS roles / Параметры фильтрации и пагинации списка ролей CMS */
export interface CmsRoleListOptions {
  /** Case-insensitive search query across code, name, and description fields / Поисковый запрос без учёта регистра по коду, названию и описанию */
  search?: string
  /** Filter by assigned permission identifier / Фильтр по идентификатору назначенного права доступа */
  permissionId?: number
  /** Filter by assigned permission code / Фильтр по коду назначенного права доступа */
  permissionCode?: string
  /** Filter by assigned user identifier / Фильтр по идентификатору пользователя */
  userId?: number
  /** Maximum number of records to return / Максимальное количество возвращаемых записей */
  limit?: number
  /** Number of records to skip / Количество пропускаемых записей */
  offset?: number
}

/** Paginated list of CMS roles wrapped in CmsRoleItem with total count / Постраничный список ролей CMS в обёртке CmsRoleItem с общим количеством записей */
export interface CmsRoleListResult {
  /** List of role entity wrappers / Список экземпляров ролей */
  items: CmsRoleItem[]
  /** Total number of matching roles / Общее количество найденных ролей */
  total: number
  /** Applied page limit / Применённый лимит выборки */
  limit: number
  /** Applied page offset / Применённое смещение выборки */
  offset: number
}
