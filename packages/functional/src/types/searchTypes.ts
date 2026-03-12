import type { RefOrNormal } from './refTypes'
import type { SearchItem, SearchListValue } from '@dxtmisha/functional-basic'

/** Search list data / Данные списка поиска */
export type SearchListData<T extends SearchItem> = RefOrNormal<SearchListValue<T>>

/** Search list input / Входные данные списка поиска */
export type SearchListInput<T extends SearchItem> = SearchListData<T> | (() => SearchListData<T>)
