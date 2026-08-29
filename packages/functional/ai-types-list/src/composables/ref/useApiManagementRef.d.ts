// md5:eec646580fc8752365d3903179347d1a true
import type { ComputedRef, Ref } from 'vue';
import type { ApiData, ApiDataValidation, ApiErrorItem, ApiFetch, ApiInstance, ArrayToItem, FormattersListColumns, FormattersOptionsList, SearchColumns, SearchFormatList } from '@dxtmisha/functional-basic';

/**
 * Centrally manages data loading (GET), list formatting, client-side searching, and mutations (POST, PUT, DELETE) through a reactive interface.
 * @note Recommended for use in tandem with `executeUse` for centralized state management.
 * @remarks Format values (prices, dates, currency); do not format technical identifiers (IDs, UUIDs).
 * @example
 * const products = useApiManagementRef(
 *   { path: '/api/v1/products' },
 *   { price: (v) => `${v} USD` },
 *   { columns: ['name', 'category'] },
 *   { path: '/api/v1/products' }
 * );
 * @keywords api, management, orchestration, crud, fetch, search, format, mutation
 */
export declare function useApiManagementRef<Return extends ApiManagementValue, FormattersOptions extends FormattersOptionsList, Post extends Record<string, any>, Put extends Record<string, any>, Delete extends Record<string, any>, Type extends ApiManagementValue = Return, Item extends ArrayToItem<Return> = ArrayToItem<Return>, ItemFormatters extends FormattersListColumns<Item, FormattersOptions>[number] = FormattersListColumns<Item, FormattersOptions>[number], Columns extends SearchColumns<ItemFormatters> = []>(propsGet: ApiManagementGet<Return, Type>, formattersOptions?: FormattersOptions, searchOptions?: ApiManagementSearch<Item, Columns>, postRequest?: ApiManagementRequest<Post>, putRequest?: ApiManagementRequest<Put>, deleteRequest?: ApiManagementRequest<Delete>, action?: () => Promise<void> | void, apiInstance?: ApiInstance): {
  /** Whether data passed the `typeData` check. */
  isValid: ComputedRef<boolean>;
  /** Status of response contract validation. */
  isResponseContractValid: ComputedRef<boolean>;
  /** Result of response validation. */
  responseValidationResult: ComputedRef<ApiDataValidation | undefined>;
  /** Processed data array supporting skeleton, formatters, and search. */
  list: ComputedRef<SearchFormatList<ItemFormatters, Columns>>;
  /** Raw reactive data from request. */
  readonly data: ComputedRef<ApiData<Return> | undefined>;
  /** Current error from request. */
  errorItem: ComputedRef<ApiErrorItem | undefined>;
  /** Current number of items in `list`. */
  readonly length: ComputedRef<number>;
  /** Total number of items in raw `data`. */
  lengthData: ComputedRef<number>;
  /** Initial loading flag before data is available. */
  starting: ComputedRef<boolean>;
  /** Active read process flag. */
  reading: Ref<boolean>;
  /** Loading state for the main GET request. */
  loading: Ref<boolean>;
  /** Loading state during search processing. */
  loadingSearch: Ref<boolean> | undefined;
  /** Loading state for POST mutation. */
  loadingPost: Ref<boolean> | undefined;
  /** Loading state for PUT mutation. */
  loadingPut: Ref<boolean> | undefined;
  /** Loading state for DELETE mutation. */
  loadingDelete: Ref<boolean> | undefined;
  /** Whether search is currently active. */
  isSearch: ComputedRef<boolean> | undefined;
  /** Reactive search string proxy. */
  search: Ref<string>;
  /** Manually initializes API request. */
  init: () => void;
  /** Initializes API request during SSR. */
  initSsr: () => void;
  /** Force resets GET request and clears state. */
  reset: () => Promise<void>;
  /** Aborts current network request. */
  abort: () => void;
  /** Executes POST mutation request. */
  sendPost: (request?: ApiFetch['request']) => Promise<ApiData<Post> | undefined>;
  /** Executes PUT mutation request. */
  sendPut: (request?: ApiFetch['request']) => Promise<ApiData<Put> | undefined>;
  /** Executes DELETE mutation request. */
  sendDelete: (request?: ApiFetch['request']) => Promise<ApiData<Delete> | undefined>;
};