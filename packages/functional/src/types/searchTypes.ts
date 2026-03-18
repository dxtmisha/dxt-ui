import type { RefOrNormal } from './refTypes'
import type { SearchItem, SearchListValue } from '@dxtmisha/functional-basic'

/** Search list data / Данные списка поиска */
export type SearchListValueRef<T extends SearchItem> = RefOrNormal<SearchListValue<T>>

/** Search list input / Входные данные списка поиска */
export type SearchListInput<T extends SearchItem> = SearchListValueRef<T> | (() => SearchListValueRef<T>)
