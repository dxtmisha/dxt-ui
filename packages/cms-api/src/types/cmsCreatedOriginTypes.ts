import type { CmsCreatedOriginItem } from '../classes/CmsCreatedOriginItem'
import type { CmsNewCreatedOrigin, CmsSystemStatus } from './cmsDbTypes'

/** Input payload for creating a new CMS created origin / Входные данные для создания нового источника создания записей CMS */
export type CmsCreatedOriginCreateInput = Omit<CmsNewCreatedOrigin, 'id' | 'createdAt' | 'updatedAt'>

/** Input payload for updating an existing CMS created origin / Входные данные для редактирования существующего источника создания записей CMS */
export type CmsCreatedOriginUpdateInput = Partial<Omit<CmsNewCreatedOrigin, 'id' | 'createdAt' | 'updatedAt'>>

/** Filtering and pagination options for listing CMS created origins / Параметры фильтрации и пагинации списка источников создания записей CMS */
export interface CmsCreatedOriginListOptions {
  /** Case-insensitive search query across code, name, and description fields / Поисковый запрос без учёта регистра по коду, названию и описанию */
  search?: string
  /** Filter by system record status / Фильтр по системному статусу записи */
  systemStatus?: CmsSystemStatus
  /** Maximum number of records to return / Максимальное количество возвращаемых записей */
  limit?: number
  /** Number of records to skip / Количество пропускаемых записей */
  offset?: number
}

/** Paginated list of CMS created origins wrapped in CmsCreatedOriginItem with total count / Постраничный список источников создания записей CMS в обёртке CmsCreatedOriginItem с общим количеством записей */
export interface CmsCreatedOriginListResult {
  /** List of created origin entity wrappers / Список экземпляров источников создания записей */
  items: CmsCreatedOriginItem[]
  /** Total number of matching created origins / Общее количество найденных источников создания записей */
  total: number
  /** Applied page limit / Применённый лимит выборки */
  limit: number
  /** Applied page offset / Применённое смещение выборки */
  offset: number
}
