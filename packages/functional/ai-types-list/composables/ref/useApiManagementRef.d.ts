// md5:f278b7a42dc0dbca93a3421e8401b255 true
import { type ComputedRef, type Ref } from 'vue';
import { type FormattersOptionsList, type ApiData, type ApiInstance, type ArrayToItem, type SearchColumns, type SearchFormatList, type FormattersListColumns, type ApiFetch, type ApiDataValidation, type ApiErrorItem } from '@dxtmisha/functional-basic';
/**
 * Composable for comprehensive API request orchestration, managing GET requests, data formatting, client-side search, and CRUD mutations through a single reactive interface.
 * @keywords api, management, search, formatting, mutation, composable
 * @note Recommended to use with `executeUse` (`executeUseProvide` or `executeUseGlobal`) for centralized state management across the component tree.
 * @remarks
 * Data formatting guidelines for `formattersOptions`:
 * - Recommended: Display values (prices, counts), dates, currency, units, statuses.
 * - Not recommended: Technical identifiers (ID, UUID, account numbers), types, or internal codes.
 * @example
 * const products = useApiManagementRef(
 *   {
 *     path: '/api/v1/products',
 *     skeleton: () => Array(5).fill({ id: 0, name: 'Loading...', price: 0 })
 *   },
 *   {
 *     price: (v) => `${v} USD`,
 *     created_at: (v) => new Date(v).toLocaleDateString()
 *   },
 *   {
 *     columns: ['name', 'category']
 *   },
 *   { path: '/api/v1/products' },
 *   { path: (data) => `/api/v1/products/${data.id}` },
 *   { path: (data) => `/api/v1/products/${data.id}` }
 * );
 */
export declare function useApiManagementRef<Return extends ApiManagementValue, FormattersOptions extends FormattersOptionsList, Post extends Record<string, any>, Put extends Record<string, any>, Delete extends Record<string, any>, Type extends ApiManagementValue = Return, Item extends ArrayToItem<Return> = ArrayToItem<Return>, ItemFormatters extends FormattersListColumns<Item, FormattersOptions>[number] = FormattersListColumns<Item, FormattersOptions>[number], Columns extends SearchColumns<ItemFormatters> = []>(propsGet: ApiManagementGet<Return, Type>, formattersOptions?: FormattersOptions, searchOptions?: ApiManagementSearch<Item, Columns>, postRequest?: ApiManagementRequest<Post>, putRequest?: ApiManagementRequest<Put>, deleteRequest?: ApiManagementRequest<Delete>, action?: () => Promise<void> | void, actionSuccess?: () => Promise<void> | void, actionError?: () => Promise<void> | void, apiInstance?: ApiInstance): {
    /** Whether data passed type verification */
    isValid: ComputedRef<boolean>;
    /** Status of response contract validation */
    isResponseContractValid: ComputedRef<boolean>;
    /** Result of response validation */
    responseValidationResult: ComputedRef<ApiDataValidation | undefined>;
    /** Processed data array with skeleton, formatters, and search applied */
    list: ComputedRef<SearchFormatList<ItemFormatters, Columns>>;
    /** Raw reactive data from API request */
    readonly data: ComputedRef<ApiData<Return> | undefined>;
    /** Current request error */
    errorItem: ComputedRef<ApiErrorItem | undefined>;
    /** Current item count in processed list */
    readonly length: ComputedRef<number>;
    /** Total item count in raw data */
    lengthData: ComputedRef<number>;
    /** Initial loading state before data is received */
    starting: ComputedRef<boolean>;
    /** Active read process status */
    reading: Ref<boolean, boolean>;
    /** Main GET request loading state */
    loading: Ref<boolean, boolean>;
    /** Search processing loading state */
    loadingSearch: Ref<boolean, boolean> | undefined;
    /** POST mutation loading state */
    loadingPost: Ref<boolean, boolean> | undefined;
    /** PUT mutation loading state */
    loadingPut: Ref<boolean, boolean> | undefined;
    /** DELETE mutation loading state */
    loadingDelete: Ref<boolean, boolean> | undefined;
    /** Whether search query is active */
    isSearch: ComputedRef<boolean> | undefined;
    /** Reactive search query string proxy */
    search: Ref<string>;
    /** Manual initialization @keywords init */
    init: () => void;
    /** SSR initialization @keywords ssr, init */
    initSsr: () => void;
    /** Force reset GET request and clear state @keywords reset */
    reset: () => Promise<void>;
    /** Abort current network request @keywords abort, cancel */
    abort: () => void;
    /** Execute POST mutation request @keywords post, create */
    sendPost: (request?: ApiFetch["request"]) => Promise<Post | undefined>;
    /** Execute PUT mutation request @keywords put, update */
    sendPut: (request?: ApiFetch["request"]) => Promise<Put | undefined>;
    /** Execute DELETE mutation request @keywords delete, remove */
    sendDelete: (request?: ApiFetch["request"]) => Promise<Delete | undefined>;
};