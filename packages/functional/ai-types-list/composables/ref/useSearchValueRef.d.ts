// md5:5a6e66172e043a7a365a59253fcc462b true
import { type Ref } from 'vue';
import { SearchList, type SearchColumns, type SearchItem } from '@dxtmisha/functional-basic';

export interface UseSearchValueRef {
    search: Ref<string>;
    searchDelay: Ref<string>;
    loading: Ref<boolean>;
}

/** Manages search input state, loading status, and debounced query delay. @keywords search, query, debounce, delay, filter */
export declare function useSearchValueRef<T extends SearchItem, K extends SearchColumns<T>>(item: SearchList<T, K>, value?: Ref<string>): UseSearchValueRef;