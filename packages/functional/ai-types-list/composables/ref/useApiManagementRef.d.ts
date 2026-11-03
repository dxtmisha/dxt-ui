// md5:0608307b6978e75af7d707cd20e1467d true
import { type ComputedRef, type Ref } from 'vue';
import { type ApiData, type ApiDataValidation, type ApiErrorItem, type ApiFetch, type ApiInstance, type ArrayToItem, type FormattersListColumns, type FormattersOptionsList, type SearchColumns, type SearchFormatList } from '@dxtmisha/functional-basic';

/**
 * Orchestrates API requests, data loading, formatting, client-side search, and mutations (POST, PUT, DELETE).
 * @note Recommended to use with `executeUse` (`executeUseProvide` or `executeUseGlobal`) for centralized state management.
 * @remarks
 * Formatting recommendations for `formattersOptions`:
 * - Recommended: Display values such as numbers, currency, dates, units, and statuses.
 * - Not recommended: Technical identifiers (ID, UUID, internal codes).
 * @example
 * const products = useApiManagementRef(
 *   { path: '/api/v1/products' },
 *   { price: (v) => `${v} USD` },
 *   { columns: ['name'] },
 *   { path: '/api/v1/products' },
 *   { path: (data) => `/api/v1/products/${data.id}` },
 *   { path: (data) => `/api/v1/products/${data.id}` }
 * );
 * @keywords api, management, request, get, post, put, delete, search, formatter
 */
export declare function useApiManagementRef<Return extends ApiManagementValue, FormattersOptions extends FormattersOptionsList, Post extends Record<string, any>, Put extends Record<string, any>, Delete extends Record<string, any>, Type extends ApiManagementValue = Return, Item extends ArrayToItem<Return> = ArrayToItem<Return>, ItemFormatters extends FormattersListColumns<Item, FormattersOptions>[number] = FormattersListColumns<Item, FormattersOptions>[number], Columns extends SearchColumns<ItemFormatters> = []>(propsGet: ApiManagementGet<Return, Type>, formattersOptions?: FormattersOptions, searchOptions?: ApiManagementSearch<Item, Columns>, postRequest?: ApiManagementRequest<Post>, putRequest?: ApiManagementRequest<Put>, deleteRequest?: ApiManagementRequest<Delete>, action?: () => Promise<void> | void, actionSuccess?: () => Promise<void> | void, actionError?: () => Promise<void> | void, apiInstance?: ApiInstance): {
  /** Whether data passed the `typeData` check. */
  isValid: ComputedRef<boolean>;
  /** Status of response contract validation. */
  isResponseContractValid: ComputedRef<boolean>;
  /** Result of response contract validation. */
  responseValidationResult: ComputedRef<ApiDataValidation | undefined>;
  /** Processed data array with skeleton, formatters, and search applied. */
  list: ComputedRef<SearchFormatList<ItemFormatters, Columns>>;
  /** Raw reactive response data. */
  readonly data: ComputedRef<ApiData<Return> | undefined>;
  /** Current request error. */
  errorItem: ComputedRef<ApiErrorItem | undefined>;
  /** Current item count in processed list. */
  readonly length: ComputedRef<number>;
  /** Total item count in raw response data. */
  lengthData: ComputedRef<number>;
  /** Initial loading flag before any data is loaded. */
  starting: ComputedRef<boolean>;
  /** Active read process status. */
  reading: Ref<boolean, boolean>;
  /** Main GET request loading state. */
  loading: Ref<boolean, boolean>;
  /** Search processing loading state. */
  loadingSearch: Ref<boolean, boolean> | undefined;
  /** POST mutation loading state. */
  loadingPost: Ref<boolean, boolean> | undefined;
  /** PUT mutation loading state. */
  loadingPut: Ref<boolean, boolean> | undefined;
  /** DELETE mutation loading state. */
  loadingDelete: Ref<boolean, boolean> | undefined;
  /** Indicates whether a search query is active. */
  isSearch: ComputedRef<boolean> | undefined;
  /** Reactive search query string proxy. */
  search: Ref<string>;
  /** Manually initializes the composable. @keywords init, manual */
  init: () => void;
  /** Initializes state for SSR context. @keywords init, ssr */
  initSsr: () => void;
  /** Resets state and forces a fresh GET request. @keywords reset, reload */
  reset: () => Promise<void>;
  /** Aborts the active network request. @keywords abort, cancel */
  abort: () => void;
  /** Executes POST mutation request. @keywords post, create, mutation */
  sendPost: (request?: ApiFetch["request"]) => Promise<ApiData<Post> | undefined>;
  /** Executes PUT mutation request. @keywords put, update, mutation */
  sendPut: (request?: ApiFetch["request"]) => Promise<ApiData<Put> | undefined>;
  /** Executes DELETE mutation request. @keywords delete, remove, mutation */
  sendDelete: (request?: ApiFetch["request"]) => Promise<ApiData<Delete> | undefined>;
};