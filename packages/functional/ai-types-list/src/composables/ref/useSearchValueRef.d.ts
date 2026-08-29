// md5:f4a168fa1cba30dfbeaa139a602286ea true
import { type Ref } from 'vue';
import { SearchList, type SearchColumns, type SearchItem } from '@dxtmisha/functional-basic';

/** Manages reactive search input state, debounced delays, and search loading status. @keywords search, debounce, searchDelay, loading, useSearchValueRef */
export declare function useSearchValueRef<T extends SearchItem, K extends SearchColumns<T>>(item: SearchList<T, K>, value?: Ref<string>): {
    search: Ref<string, string>;
    searchDelay: Ref<string, string>;
    loading: Ref<boolean, boolean>;
};