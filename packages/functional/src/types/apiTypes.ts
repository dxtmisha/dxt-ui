import type { ApiData, ApiFetch, ApiMethodItem, FormattersOptionsList } from '@dxtmisha/functional-basic'
import type { RefOrNormal, RefType } from './refTypes'

/** Options for api requests/ Опции для запросов api */
export type ApiOptions = ApiMethodItem | RefOrNormal<ApiFetch>

export type ApiManagementProps<R, T> = {
  get: {
    path?: RefOrNormal<string | undefined>
    options?: ApiOptions
    reactivity?: boolean
    conditions?: RefType<boolean>
    transformation?: (data: T) => ApiData<R>
    unmounted?: boolean
  }

  formatters?: FormattersOptionsList
}
