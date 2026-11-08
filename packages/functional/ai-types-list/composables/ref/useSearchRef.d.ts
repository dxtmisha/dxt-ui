// md5:69d1b3ddbc9ca98fc0d7ca76d771e40b true
import { type ComputedRef, type Ref } from 'vue';
import { type SearchColumns, type SearchFormatList, type SearchItem, type SearchOptions } from '@dxtmisha/functional-basic';

/** Reactive search state and formatted results contract. @keywords search, reactive, filter */
export interface UseSearchRef<T extends SearchItem, K extends SearchColumns<T>> {
  /** Whether the search query meets the minimum length threshold to be active. */
  isSearch: ComputedRef<boolean>;
  /** Reactive search query string. */
  search: Ref<string>;
  /** Search loading state during debounced query processing. */
  loading: Ref<boolean>;
  /** Formatted search results with match highlights. */
  listSearch: ComputedRef<SearchFormatList<T, K>>;
  /** Total count of matching results. */
  length: ComputedRef<number>;
}

/** Reactive search composable for filtering items with debouncing and highlight formatting. @keywords search, filter, reactive, composable, highlight */
export declare function useSearchRef<T extends SearchItem, K extends SearchColumns<T>>(list: SearchListInput<T>, columns?: SearchColumnsInput<T, K>, value?: Ref<string>, options?: SearchOptions): UseSearchRef<T, K>;