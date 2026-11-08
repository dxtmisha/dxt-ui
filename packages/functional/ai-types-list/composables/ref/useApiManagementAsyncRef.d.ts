// md5:fde7050aed2c3f33abe7309987059377 true
import { type ApiInstance, type ArrayToItem, type FormattersListColumns, type FormattersOptionsList, type SearchColumns } from '@dxtmisha/functional-basic';
/** Asynchronous reactive API management composable with built-in SSR pre-fetching. @note Use only when server-side pre-fetching during SSR is required. @keywords api, management, ssr, composable, async */
export declare function useApiManagementAsyncRef<Return extends ApiManagementValue, FormattersOptions extends FormattersOptionsList, Post extends Record<string, any>, Put extends Record<string, any>, Delete extends Record<string, any>, Type extends ApiManagementValue = Return, Item extends ArrayToItem<Return> = ArrayToItem<Return>, ItemFormatters extends FormattersListColumns<Item, FormattersOptions>[number] = FormattersListColumns<Item, FormattersOptions>[number], Columns extends SearchColumns<ItemFormatters> = []>(propsGet: ApiManagementGet<Return, Type>, formattersOptions?: FormattersOptions, searchOptions?: ApiManagementSearch<Item, Columns>, postRequest?: ApiManagementRequest<Post>, putRequest?: ApiManagementRequest<Put>, deleteRequest?: ApiManagementRequest<Delete>, action?: () => Promise<void> | void, actionSuccess?: () => Promise<void> | void, actionError?: () => Promise<void> | void, apiInstance?: ApiInstance): {
    isValid: import("vue").ComputedRef<boolean>;
    isResponseContractValid: import("vue").ComputedRef<boolean>;
    responseValidationResult: import("vue").ComputedRef<import("@dxtmisha/functional-basic").ApiDataValidation | undefined>;
    list: import("vue").ComputedRef<import("@dxtmisha/functional-basic").SearchFormatList<ItemFormatters, Columns>>;
    readonly data: import("vue").ComputedRef<import("@dxtmisha/functional-basic").ApiData<Return> | undefined>;
    errorItem: import("vue").ComputedRef<import("@dxtmisha/functional-basic").ApiErrorItem | undefined>;
    readonly length: import("vue").ComputedRef<number>;
    lengthData: import("vue").ComputedRef<number>;
    starting: import("vue").ComputedRef<boolean>;
    reading: import("vue").Ref<boolean, boolean>;
    loading: import("vue").Ref<boolean, boolean>;
    loadingSearch: import("vue").Ref<boolean, boolean> | undefined;
    loadingPost: import("vue").Ref<boolean, boolean> | undefined;
    loadingPut: import("vue").Ref<boolean, boolean> | undefined;
    loadingDelete: import("vue").Ref<boolean, boolean> | undefined;
    isSearch: import("vue").ComputedRef<boolean> | undefined;
    search: import("vue").Ref<string>;
    init: () => void;
    initSsr: () => void;
    reset: () => Promise<void>;
    abort: () => void;
    sendPost: (request?: import("@dxtmisha/functional-basic").ApiFetch["request"]) => Promise<Post | undefined>;
    sendPut: (request?: import("@dxtmisha/functional-basic").ApiFetch["request"]) => Promise<Put | undefined>;
    sendDelete: (request?: import("@dxtmisha/functional-basic").ApiFetch["request"]) => Promise<Delete | undefined>;
};