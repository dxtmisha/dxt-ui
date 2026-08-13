// md5:e6bb589140330657fdae7822ef5ce343 true
import { SearchColumns, SearchItem, SearchListValue } from '@dxtmisha/functional-basic';
/** Search list value reference @keywords search list value ref */
export type SearchListValueRef<T extends SearchItem> = RefOrNormal<SearchListValue<T>>;
/** Search list input configuration @keywords search list input */
export type SearchListInput<T extends SearchItem> = SearchListValueRef<T> | (() => SearchListValueRef<T>);
/** Search columns reference @keywords search columns ref */
export type SearchColumnsRef<T extends SearchItem, K extends SearchColumns<T>> = RefOrNormal<K>;
/** Search columns input configuration @keywords search columns input */
export type SearchColumnsInput<T extends SearchItem, K extends SearchColumns<T>> = SearchColumnsRef<T, K> | (() => SearchColumnsRef<T, K>);