import type { RefOrNormal } from './refTypes'
import type { SearchColumns, SearchItem, SearchListValue } from '@dxtmisha/functional-basic'

/** Search list data / Данные списка поиска */
export type SearchListValueRef<T extends SearchItem> = RefOrNormal<SearchListValue<T>>

/** Search list input / Входные данные списка поиска */
export type SearchListInput<T extends SearchItem> = SearchListValueRef<T> | (() => SearchListValueRef<T>)

/** Search columns ref / Реактивные столбцы поиска */
export type SearchColumnsRef<T extends SearchItem, K extends SearchColumns<T>> = RefOrNormal<K>

/** Search columns input / Входные данные столбцов поиска */
export type SearchColumnsInput<T extends SearchItem, K extends SearchColumns<T>> = SearchColumnsRef<T, K> | (() => SearchColumnsRef<T, K>)
