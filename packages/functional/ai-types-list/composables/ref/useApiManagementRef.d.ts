// md5:6d009ee95caa8c0df2427c4079fb4f17 true
import { Ref, ComputedRef } from 'vue';
import { FormattersOptionsList, ApiData, ApiInstance, ArrayToItem, SearchColumns, SearchFormatList, FormattersListColumns, ApiFetch, ApiDataValidation, ApiErrorItem, ApiManagementValue, ApiManagementGet, ApiManagementSearch, ApiManagementRequest } from '@dxtmisha/functional-basic';

/**
 * Manages API requests and list operations.
 * @keywords api, management, ref, request
 */
export declare function useApiManagementRef<Return extends ApiManagementValue, FormattersOptions extends FormattersOptionsList, Post extends Record<string, any>, Put extends Record<string, any>, Delete extends Record<string, any>, Type extends ApiManagementValue = Return, Item extends ArrayToItem<Return> = ArrayToItem<Return>, ItemFormatters extends FormattersListColumns<Item, FormattersOptions>[number] = FormattersListColumns<Item, FormattersOptions>[number], Columns extends SearchColumns<ItemFormatters> = []>(propsGet: ApiManagementGet<Return, Type>, formattersOptions?: FormattersOptions, searchOptions?: ApiManagementSearch<Item, Columns>, postRequest?: ApiManagementRequest<Post>, putRequest?: ApiManagementRequest<Put>, deleteRequest?: ApiManagementRequest<Delete>, action?: () => Promise<void> | void, apiInstance?: ApiInstance): {
    isValid: ComputedRef<boolean>;
    isResponseContractValid: ComputedRef<boolean>;
    responseValidationResult: ComputedRef< ApiDataValidation | undefined>;
    list: ComputedRef<SearchFormatList<ItemFormatters, Columns>>;
    readonly data: ComputedRef<ApiData<Return> | undefined>;
    errorItem: ComputedRef< ApiErrorItem | undefined>;
    readonly length: ComputedRef<number>;
    lengthData: ComputedRef<number>;
    starting: ComputedRef<boolean>;
    reading: Ref<boolean, boolean>;
    loading: Ref<boolean, boolean>;
    loadingSearch: Ref<boolean, boolean> | undefined;
    loadingPost: Ref<boolean, boolean> | undefined;
    loadingPut: Ref<boolean, boolean> | undefined;
    loadingDelete: Ref<boolean, boolean> | undefined;
    isSearch: ComputedRef<boolean> | undefined;
    search: Ref<string>;
    /** Initializes api management. @keywords init, start */
    init: () => void;
    /** Initializes server-side rendering. @keywords ssr, init */
    initSsr: () => void;
    /** Resets request state. @keywords reset, clear */
    reset: () => Promise<void>;
    /** Aborts active request. @keywords abort, cancel */
    abort: () => void;
    /** Sends POST request. @keywords post, send */
    sendPost: (request?: ApiFetch["request"]) => Promise<ApiData<Post> | undefined>;
    /** Sends PUT request. @keywords put, send */
    sendPut: (request?: ApiFetch["request"]) => Promise<ApiData<Put> | undefined>;
    /** Sends DELETE request. @keywords delete, send */
    sendDelete: (request?: ApiFetch["request"]) => Promise<ApiData<Delete> | undefined>;
};