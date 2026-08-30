// md5:eec646580fc8752365d3903179347d1a true
import { type ComputedRef, type Ref } from 'vue';
import {
  type ApiData,
  type ApiDataValidation,
  type ApiErrorItem,
  type ApiFetch,
  type ApiInstance,
  type ArrayToItem,
  type FormattersListColumns,
  type FormattersOptionsList,
  type SearchColumns,
  type SearchFormatList
} from '@dxtmisha/functional-basic';

/**
 * Orchestrates API requests, data loading (GET), list formatting, client-side search, and mutations (POST, PUT, DELETE).
 * @note Recommended for use with `executeUse` for centralized state management.
 * @remarks
 * Data formatting guidelines for `formattersOptions`:
 * - Recommended: values (prices, counts), dates, currency, units, statuses.
 * - Not recommended: technical identifiers (ID, UUID, internal codes).
 * @example
 * const products = useApiManagementRef(
 *   { path: '/api/v1/products', skeleton: () => Array(5).fill({ id: 0, name: 'Loading...', price: 0 }) },
 *   { price: (v) => `${v} USD`, created_at: (v) => new Date(v).toLocaleDateString() },
 *   { columns: ['name', 'category'] },
 *   { path: '/api/v1/products' },
 *   { path: (data) => `/api/v1/products/${data.id}` },
 *   { path: (data) => `/api/v1/products/${data.id}` }
 * );
 * @keywords api, management, fetch, mutations, search, formatters, reactive
 */
export declare function useApiManagementRef<
  Return extends ApiManagementValue,
  FormattersOptions extends FormattersOptionsList,
  Post extends Record<string, any>,
  Put extends Record<string, any>,
  Delete extends Record<string, any>,
  Type extends ApiManagementValue = Return,
  Item extends ArrayToItem<Return> = ArrayToItem<Return>,
  ItemFormatters extends FormattersListColumns<Item, FormattersOptions>[number] = FormattersListColumns<Item, FormattersOptions>[number],
  Columns extends SearchColumns<ItemFormatters> = []
>(
  propsGet: ApiManagementGet<Return, Type>,
  formattersOptions?: FormattersOptions,
  searchOptions?: ApiManagementSearch<Item, Columns>,
  postRequest?: ApiManagementRequest<Post>,
  putRequest?: ApiManagementRequest<Put>,
  deleteRequest?: ApiManagementRequest<Delete>,
  action?: () => Promise<void> | void,
  apiInstance?: ApiInstance
): {
  /** Whether data passed type verification check. @keywords valid, validation */
  isValid: ComputedRef<boolean>;
  /** Status of response contract validation. @keywords contract, validation */
  isResponseContractValid: ComputedRef<boolean>;
  /** Result of response schema validation. @keywords response, validation, result */
  responseValidationResult: ComputedRef<ApiDataValidation | undefined>;
  /** Processed data array with skeleton, formatters, and search applied. @keywords list, formatted, search */
  list: ComputedRef<SearchFormatList<ItemFormatters, Columns>>;
  /** Raw reactive response data. @keywords raw data, response */
  readonly data: ComputedRef<ApiData<Return> | undefined>;
  /** Current request error item. @keywords error */
  errorItem: ComputedRef<ApiErrorItem | undefined>;
  /** Current number of items in filtered list. @keywords length, count */
  readonly length: ComputedRef<number>;
  /** Total number of items in raw data. @keywords total length, raw count */
  lengthData: ComputedRef<number>;
  /** Initial loading flag before data is first fetched. @keywords starting, initial load */
  starting: ComputedRef<boolean>;
  /** Active read operation flag. @keywords reading, fetching */
  reading: Ref<boolean, boolean>;
  /** Loading state for the main GET request. @keywords loading, state */
  loading: Ref<boolean, boolean>;
  /** Loading state during search processing. @keywords search loading */
  loadingSearch: Ref<boolean, boolean> | undefined;
  /** Loading state for POST mutation. @keywords post loading */
  loadingPost: Ref<boolean, boolean> | undefined;
  /** Loading state for PUT mutation. @keywords put loading */
  loadingPut: Ref<boolean, boolean> | undefined;
  /** Loading state for DELETE mutation. @keywords delete loading */
  loadingDelete: Ref<boolean, boolean> | undefined;
  /** Indicates whether search filter is active. @keywords is search, searching */
  isSearch: ComputedRef<boolean> | undefined;
  /** Reactive search query string proxy. @keywords search query */
  search: Ref<string>;
  /** Manually initializes API request. @keywords init, manual init */
  init: () => void;
  /** Initializes API request for SSR. @keywords ssr init */
  initSsr: () => void;
  /** Resets GET request and clears state. @keywords reset, reload */
  reset: () => Promise<void>;
  /** Aborts active network request. @keywords abort, cancel */
  abort: () => void;
  /** Executes POST mutation request. @keywords send post, create */
  sendPost: (request?: ApiFetch['request']) => Promise<ApiData<Post> | undefined>;
  /** Executes PUT mutation request. @keywords send put, update */
  sendPut: (request?: ApiFetch['request']) => Promise<ApiData<Put> | undefined>;
  /** Executes DELETE mutation request. @keywords send delete, remove */
  sendDelete: (request?: ApiFetch['request']) => Promise<ApiData<Delete> | undefined>;
};