// md5:02815051e9f0c71a8efff5f670d6b809 true
import { Ref } from 'vue';
import { SearchList, SearchColumns, SearchItem } from '@dxtmisha/functional-basic';

/**
 * Manages search value state and handling delays.
 * @keywords useSearchValueRef, search, delay, debounce, loading
 */
export declare function useSearchValueRef<T extends SearchItem, K extends SearchColumns<T>>(item: SearchList<T, K>, value?: Ref<string>): {
    /** Current search value */
    search: Ref<string, string>;
    /** Search value with applied delay */
    searchDelay: Ref<string, string>;
    /** Loading status during delay */
    loading: Ref<boolean, boolean>;
};