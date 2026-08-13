// md5:3828fdafd3bdba08307c98d8ae1d1c45 true
import { Ref, ComputedRef } from 'vue';
import { SearchColumns, SearchFormatList, SearchItem, SearchOptions } from '@dxtmisha/functional-basic';

/**
 * Composable for handling search logic with reactive data.
 * @keywords search ref reactive list columns
 */
export declare function useSearchRef<T extends SearchItem, K extends SearchColumns<T>>(list: SearchListInput<T>, columns?: SearchColumnsInput<T, K>, value?: Ref<string>, options?: SearchOptions): {
    /** Whether search is currently active. @keywords isSearch active */
    isSearch: ComputedRef<boolean>;
    /** Search string reference. @keywords search string */
    search: Ref<string, string>;
    /** Search loading status reference. @keywords loading status */
    loading: Ref<boolean, boolean>;
    /** Formatted search results list. @keywords list search results */
    listSearch: ComputedRef<SearchFormatList<T, K>>;
    /** Length of search results. @keywords length count */
    length: ComputedRef<number>;
};