import type { ApiData, ApiDefaultValue, ApiFetch, ApiMethodItem, SearchColumns, SearchItem, SearchOptions } from '@dxtmisha/functional-basic'
import type { RefOrNormal, RefType } from './refTypes'
import type { Ref } from 'vue'

/** Options for api requests/ Опции для запросов api */
export type ApiOptions = ApiMethodItem | RefOrNormal<ApiFetch>

export type ApiManagementValue = ApiDefaultValue | ApiDefaultValue[]

export type ApiManagementGet<
  Return extends ApiManagementValue,
  Type extends ApiManagementValue = Return
> = {
  path?: RefOrNormal<string | undefined>
  options?: ApiOptions
  reactivity?: boolean
  conditions?: RefType<boolean>
  transformation?: (data: Type) => ApiData<Return>
  unmounted?: boolean
  skeleton?: () => Return
}

export type ApiManagementSearch<
  T extends SearchItem,
  K extends SearchColumns<T>
> = {
  columns: K
  value?: Ref<string>
  options?: SearchOptions
}

export type ApiManagementRequest<
  T,
  Return extends ApiData<T> = ApiData<T>
> = {
  path?: RefOrNormal<string | undefined>
  action?: (data: Return | undefined) => Promise<void> | void
  transformation?: (data: T) => Return
  toData?: boolean
  options?: ApiOptions
}
