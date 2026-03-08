import type { ApiData, ApiFetch, ApiMethodItem, GeoDate } from '@dxtmisha/functional-basic'
import type { RefOrNormal, RefType } from './refTypes'

/** Options for api requests/ Опции для запросов api */
export type ApiOptions = ApiMethodItem | RefOrNormal<ApiFetch>

export type ApiManagementItem<R, T = any> = {
  path?: RefOrNormal<string | undefined>
  options?: ApiOptions
  reactivity?: boolean
  conditions?: RefType<boolean>
  transformation?: (data: T) => ApiData<R>
  unmounted?: boolean
  format?: ApiManagementFormatList
  hasSkeleton?: boolean
}
