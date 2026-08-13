// md5:31a65b7693ed0059b932446bc21956cd true
import { ApiInstance, ArrayToItem, FormattersListColumns, FormattersOptionsList, SearchColumns, ApiDataValidation, SearchFormatList, ApiData, ApiErrorItem, ApiFetch } from '@dxtmisha/functional-basic';
import { ComputedRef, Ref } from 'vue';

/**
 * Asynchronous reactive composable for API management requests with SSR support.
 * @keywords api management async ssr composable fetch
 */
export declare function useApiManagementAsyncRef<Return extends ApiManagementValue, FormattersOptions extends FormattersOptionsList, Post extends Record<string, any>, Put extends Record<string, any>, Delete extends Record<string, any>, Type extends ApiManagementValue = Return, Item extends ArrayToItem<Return> = ArrayToItem<Return>, ItemFormatters extends FormattersListColumns<Item, FormattersOptions>[number] = FormattersListColumns<Item, FormattersOptions>[number], Columns extends SearchColumns<ItemFormatters> = []>(propsGet: ApiManagementGet<Return, Type>, formattersOptions?: FormattersOptions, searchOptions?: ApiManagementSearch<Item, Columns>, postRequest?: ApiManagementRequest<Post>, putRequest?: ApiManagementRequest<Put>, deleteRequest?: ApiManagementRequest<Delete>, action?: () => Promise<void> | void, apiInstance?: ApiInstance): {
    isValid: ComputedRef<boolean>;
    isResponseContractValid: ComputedRef<boolean>;
    responseValidationResult: ComputedRef< ApiDataValidation | undefined>;
    list: ComputedRef<SearchFormatList<ItemFormatters, Columns>>;
    readonly data: ComputedRef< ApiData<Return> | undefined>;
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
    init: () => void;
    initSsr: () => void;
    reset: () => Promise<void>;
    abort: () => void;
    sendPost: (request?: ApiFetch["request"]) => Promise< ApiData<Post> | undefined>;
    sendPut: (request?: ApiFetch["request"]) => Promise< ApiData<Put> | undefined>;
    sendDelete: (request?: ApiFetch["request"]) => Promise< ApiData<Delete> | undefined>;
};