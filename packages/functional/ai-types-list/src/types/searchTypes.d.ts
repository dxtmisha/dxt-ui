// md5:002d120e8042f4cf835412e3eba1031e true
import type { SearchColumns, SearchItem, SearchListValue } from '@dxtmisha/functional-basic';

export type SearchListValueRef<T extends SearchItem> = RefOrNormal<SearchListValue<T>>;
export type SearchListInput<T extends SearchItem> = SearchListValueRef<T> | (() => SearchListValueRef<T>);
export type SearchColumnsRef<T extends SearchItem, K extends SearchColumns<T>> = RefOrNormal<K>;
export type SearchColumnsInput<T extends SearchItem, K extends SearchColumns<T>> = SearchColumnsRef<T, K> | (() => SearchColumnsRef<T, K>);