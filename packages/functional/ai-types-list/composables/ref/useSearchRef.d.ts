// md5:600925fa025c62123c8b21ec60396e31 true
import { type ComputedRef, type Ref } from 'vue';
import { type SearchColumns, type SearchFormatList, type SearchItem, type SearchOptions } from '@dxtmisha/functional-basic';
/** Composable for managing reactive search logic, match highlights, and loading status. @keywords vue search filter reactive useSearchRef */
export declare function useSearchRef<T extends SearchItem, K extends SearchColumns<T>>(list: SearchListInput<T>, columns?: SearchColumnsInput<T, K>, value?: Ref<string>, options?: SearchOptions): {
    /** Whether search is currently active and meets character threshold. @keywords isSearch active */
    isSearch: ComputedRef<boolean>;
    /** Reactive search query string reference. @keywords search query */
    search: Ref<string, string>;
    /** Search loading status during delayed execution. @keywords loading status */
    loading: Ref<boolean, boolean>;
    /** Formatted list of search results with match highlights. @keywords listSearch results highlight */
    listSearch: ComputedRef<SearchFormatList<T, K>>;
    /** Total count of matching search results. @keywords length count */
    length: ComputedRef<number>;
};