import type { GeoDate } from './geoTypes'

export enum FormattersType {
  currency = 'currency',
  date = 'date',
  name = 'name',
  number = 'number',
  plural = 'plural',
  unit = 'unit'
}

export type FormattersOptionsCurrency = {
  currencyPropName?: string
  options?: string | Intl.NumberFormatOptions
  numberOnly?: boolean
}

export type FormattersOptionsDate = {
  type?: GeoDate
  options?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions
  hour24?: boolean
}

export type FormattersOptionsName = {
  lastPropName: string
  firstPropName: string
  surname?: string
  short?: boolean
}

export type FormattersOptionsNumber = {
  options?: Intl.NumberFormatOptions
}

export type FormattersOptionsPlural = {
  words: string
  options?: Intl.PluralRulesOptions
  optionsNumber?: Intl.NumberFormatOptions
}

export type FormattersOptionsUnit = {
  unit?: string
  options?: string | Intl.NumberFormatOptions
}

export type FormattersOptions<
  Type extends FormattersType
>
  = Type extends FormattersType.currency
    ? FormattersOptionsCurrency
    : Type extends FormattersType.date
      ? FormattersOptionsDate
      : Type extends FormattersType.name
        ? FormattersOptionsName
        : Type extends FormattersType.number
          ? FormattersOptionsNumber
          : Type extends FormattersType.plural
            ? FormattersOptionsPlural
            : Type extends FormattersType.unit
              ? FormattersOptionsUnit
              : Record<string, any>

export type FormattersItem<
  Type extends FormattersType = FormattersType,
  R = string | undefined
> = {
  prop: string
  type?: Type
  transformation?: (
    valueOriginal: any,
    item: any,
    options: FormattersOptions<Type>
  ) => R
  options?: FormattersOptions<Type>
}
export type FormattersList = FormattersItem[]

export type FormattersDataListItem = Record<string, any>
export type FormattersDataListList = FormattersDataListItem[]

export type FormattersDataPath<K, P> = K extends string
  ? P extends string
    ? `${K}.${P}`
    : never
  : never

export type FormattersDataColumn<T extends FormattersDataListItem> = {
  [K in keyof T]: T[K] extends object ? K | FormattersDataPath<K, keyof T[K]> : K
}[keyof T]

export type FormattersDataColumns<T extends FormattersDataListItem> = (FormattersDataColumn<T> & string)[]

export type FormattersDataCapitalize<K extends string> = K extends `${infer First}.${infer Rest}`
  ? `${First}${Capitalize<FormattersDataCapitalize<Rest>>}`
  : K

export type FormattersDataKey<K, A extends string = 'Format'> = K extends string ? `${FormattersDataCapitalize<K>}${A}` : never

export type FormattersDataItem<T extends FormattersDataListItem, KT extends string[]>
  = {
    [K in keyof T | FormattersDataKey<KT[number]>]: K extends keyof T ? T[K] : string
  }
  & {
    searchActive?: boolean
  }

export type FormattersDataList<T extends FormattersDataListItem, K extends string[]> = FormattersDataItem<T, K>[]
