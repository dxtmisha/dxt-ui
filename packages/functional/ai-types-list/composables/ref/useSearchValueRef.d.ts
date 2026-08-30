// md5:f4a168fa1cba30dfbeaa139a602286ea true
import { type Ref } from 'vue';
import { SearchList, type SearchColumns, type SearchItem } from '@dxtmisha/functional-basic';

/** Manages search query state, debounce delay, and loading status. @keywords search, query, debounce, delay, loading, search list */
export declare function useSearchValueRef<T extends SearchItem, K extends SearchColumns<T>>(item: SearchList<T, K>, value?: Ref<string>): {
    /** Current search value */
    search: Ref<string, string>;
    /** Search value with applied debounce delay */
    searchDelay: Ref<string, string>;
    /** Loading state during debounce delay */
    loading: Ref<boolean, boolean>;
};