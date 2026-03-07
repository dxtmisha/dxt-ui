import type { ApiData, ApiFetch, ApiMethodItem, GeoDate } from '@dxtmisha/functional-basic'
import type { RefOrNormal, RefType } from './refTypes'

/** Options for api requests/ Опции для запросов api */
export type ApiOptions = ApiMethodItem | RefOrNormal<ApiFetch>

export enum ApiManagementFormatType {
  currency = 'currency',
  date = 'date',
  name = 'name',
  number = 'number',
  plural = 'plural',
  unit = 'unit'
}

export type ApiManagementFormatOptionsCurrency = {
  currencyPropName?: string
  options?: string | Intl.NumberFormatOptions
  numberOnly?: boolean
}

export type ApiManagementFormatOptionsDate = {
  type?: GeoDate
  options?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions
  hour24?: boolean
}

export type ApiManagementFormatOptionsName = {
  lastPropName: string
  firstPropName: string
  surname?: string
  short?: boolean
}

export type ApiManagementFormatOptionsNumber = {
  options?: Intl.NumberFormatOptions
}

export type ApiManagementFormatOptionsPlural = {
  words: string
  options?: Intl.PluralRulesOptions
  optionsNumber?: Intl.NumberFormatOptions
}

export type ApiManagementFormatOptionsUnit = {
  unit?: string
  options?: string | Intl.NumberFormatOptions
}

export type ApiManagementFormatOptions<
  Type extends ApiManagementFormatType
>
  = Type extends ApiManagementFormatType.currency
    ? ApiManagementFormatOptionsCurrency
    : Type extends ApiManagementFormatType.date
      ? ApiManagementFormatOptionsDate
      : Type extends ApiManagementFormatType.name
        ? ApiManagementFormatOptionsName
        : Type extends ApiManagementFormatType.number
          ? ApiManagementFormatOptionsNumber
          : Type extends ApiManagementFormatType.plural
            ? ApiManagementFormatOptionsPlural
            : Type extends ApiManagementFormatType.unit
              ? ApiManagementFormatOptionsUnit
              : Record<string, any>

export type ApiManagementFormatItem<
  Type extends ApiManagementFormatType = ApiManagementFormatType,
  R = string | undefined
> = {
  prop: string
  type?: Type
  transformation?: (
    valueOriginal: any,
    item: any,
    options: ApiManagementFormatOptions<Type>
  ) => R
  options?: ApiManagementFormatOptions<Type>
}
export type ApiManagementFormatList = ApiManagementFormatItem[]

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
