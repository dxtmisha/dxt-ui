import type { CmsPermissionItem } from '../classes/tables/CmsPermissionItem'
import type {
  CmsCodeListOptions,
  CmsListResult,
  CmsNewPermission
} from './cmsDbTypes'

/** Input payload for creating a new CMS permission / Входные данные для создания нового права доступа CMS */
export type CmsPermissionCreateInput = Omit<CmsNewPermission, 'id' | 'createdAt' | 'updatedAt'>

/** Input payload for updating an existing CMS permission / Входные данные для редактирования существующего права доступа CMS */
export type CmsPermissionUpdateInput = Partial<Omit<CmsNewPermission, 'id' | 'createdAt' | 'updatedAt'>>

/** Filtering and pagination options for listing CMS permissions / Параметры фильтрации и пагинации списка прав доступа CMS */
export interface CmsPermissionListOptions extends CmsCodeListOptions {
  /** Filter by creation origin code / Фильтр по коду источника создания */
  createdOrigin?: string
  /** Filter by assigned role identifier / Фильтр по идентификатору роли */
  roleId?: number
  /** Filter by assigned role code / Фильтр по коду роли */
  roleCode?: string
}

/** Paginated list of CMS permissions wrapped in CmsPermissionItem with total count / Постраничный список прав доступа CMS в обёртке CmsPermissionItem с общим количеством записей */
export type CmsPermissionListResult = CmsListResult<CmsPermissionItem>
