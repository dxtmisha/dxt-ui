// md5:600925fa025c62123c8b21ec60396e31 true
import { type ComputedRef, type Ref } from 'vue';
import { type SearchColumns, type SearchFormatList, type SearchItem, type SearchOptions } from '@dxtmisha/functional-basic';

/** Composable for managing search logic with reactive data. @keywords search, reactive, filter, list, composable */
export declare function useSearchRef<T extends SearchItem, K extends SearchColumns<T>>(list: SearchListInput<T>, columns?: SearchColumnsInput<T, K>, value?: Ref<string>, options?: SearchOptions): {
    /** Whether search is currently active. @keywords isSearch, active */
    isSearch: ComputedRef<boolean>;
    /** Reactive search query string. @keywords search, query */
    search: Ref<string>;
    /** Loading status during delayed search execution. @keywords loading, debounce */
    loading: Ref<boolean>;
    /** Formatted search results with highlights. @keywords listSearch, results, highlighted */
    listSearch: ComputedRef<SearchFormatList<T, K>>;
    /** Number of matching search results. @keywords length, count */
    length: ComputedRef<number>;
};