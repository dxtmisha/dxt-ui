import type { CmsPermissionItem } from '../classes/tables/CmsPermissionItem'
import type { CmsNewPermission } from './cmsDbTypes'

/** Input payload for creating a new CMS permission / Входные данные для создания нового права доступа CMS */
export type CmsPermissionCreateInput = Omit<CmsNewPermission, 'id' | 'createdAt' | 'updatedAt'>

/** Input payload for updating an existing CMS permission / Входные данные для редактирования существующего права доступа CMS */
export type CmsPermissionUpdateInput = Partial<Omit<CmsNewPermission, 'id' | 'createdAt' | 'updatedAt'>>

/** Filtering and pagination options for listing CMS permissions / Параметры фильтрации и пагинации списка прав доступа CMS */
export interface CmsPermissionListOptions {
  /** Case-insensitive search query across code, name, and description fields / Поисковый запрос без учёта регистра по коду, названию и описанию */
  search?: string
  /** Filter by creation origin code / Фильтр по коду источника создания */
  createdOrigin?: string
  /** Filter by assigned role identifier / Фильтр по идентификатору роли */
  roleId?: number
  /** Filter by assigned role code / Фильтр по коду роли */
  roleCode?: string
  /** Maximum number of records to return / Максимальное количество возвращаемых записей */
  limit?: number
  /** Number of records to skip / Количество пропускаемых записей */
  offset?: number
}

/** Paginated list of CMS permissions wrapped in CmsPermissionItem with total count / Постраничный список прав доступа CMS в обёртке CmsPermissionItem с общим количеством записей */
export interface CmsPermissionListResult {
  /** List of permission entity wrappers / Список экземпляров прав доступа */
  items: CmsPermissionItem[]
  /** Total number of matching permissions / Общее количество найденных прав доступа */
  total: number
  /** Applied page limit / Применённый лимит выборки */
  limit: number
  /** Applied page offset / Применённое смещение выборки */
  offset: number
}
