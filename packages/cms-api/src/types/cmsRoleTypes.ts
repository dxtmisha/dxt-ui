import type { CmsRoleItem } from '../classes/tables/CmsRoleItem'
import type {
  CmsCodeListOptions,
  CmsListResult,
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
export interface CmsRoleListOptions extends CmsCodeListOptions {
  /** Filter by creation origin code / Фильтр по коду источника создания */
  createdOrigin?: string
  /** Filter by assigned permission identifier / Фильтр по идентификатору назначенного права доступа */
  permissionId?: number
  /** Filter by assigned permission code / Фильтр по коду назначенного права доступа */
  permissionCode?: string
  /** Filter by assigned user identifier / Фильтр по идентификатору пользователя */
  userId?: number
}

/** Paginated list of CMS roles wrapped in CmsRoleItem with total count / Постраничный список ролей CMS в обёртке CmsRoleItem с общим количеством записей */
export type CmsRoleListResult = CmsListResult<CmsRoleItem>
