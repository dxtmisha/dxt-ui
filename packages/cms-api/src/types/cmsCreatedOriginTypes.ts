import type { CmsCreatedOriginItem } from '../classes/tables/CmsCreatedOriginItem'
import type {
  CmsCodeListOptions,
  CmsListResult,
  CmsNewCreatedOrigin,
  CmsSystemStatus
} from './cmsDbTypes'

/** Input payload for creating a new CMS created origin / Входные данные для создания нового источника создания записей CMS */
export type CmsCreatedOriginCreateInput = Omit<CmsNewCreatedOrigin, 'id' | 'createdAt' | 'updatedAt'>

/** Input payload for updating an existing CMS created origin / Входные данные для редактирования существующего источника создания записей CMS */
export type CmsCreatedOriginUpdateInput = Partial<Omit<CmsNewCreatedOrigin, 'id' | 'createdAt' | 'updatedAt'>>

/** Filtering and pagination options for listing CMS created origins / Параметры фильтрации и пагинации списка источников создания записей CMS */
export interface CmsCreatedOriginListOptions extends CmsCodeListOptions {
  /** Filter by system record status / Фильтр по системному статусу записи */
  systemStatus?: CmsSystemStatus
}

/** Paginated list of CMS created origins wrapped in CmsCreatedOriginItem with total count / Постраничный список источников создания записей CMS в обёртке CmsCreatedOriginItem с общим количеством записей */
export type CmsCreatedOriginListResult = CmsListResult<CmsCreatedOriginItem>
