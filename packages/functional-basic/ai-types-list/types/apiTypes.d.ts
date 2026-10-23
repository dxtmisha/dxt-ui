// md5:e88dcaf1a0f244447c3c840f0ed808ba true
/** HTTP request methods. @keywords http, method, rest, verb */
export declare enum ApiMethodItem {
    delete = "DELETE",
    get = "GET",
    post = "POST",
    put = "PUT",
    patch = "PATCH"
}
/** Cached API response structure. @keywords cache, response, ttl, storage */
export type ApiCacheItem<T = any> = {
    value: T;
    age?: number;
    cacheAge: number;
};
export type ApiCacheList = Record<string, ApiCacheItem>;
/** Configuration options for the API client. @keywords api, config, options, client */
export type ApiConfig = {
    urlRoot?: string;
    origin?: string;
    headers?: ApiHeadersValue;
    requestDefault?: ApiDefaultValue;
    preparation?: (apiFetch: ApiFetch) => Promise<void>;
    end?: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>;
    timeout?: number;
    devMode?: boolean;
    wrapper?: <R>(callback: () => Promise<R>, apiFetch: ApiFetch) => Promise<R>;
};
export type ApiData<T = any> = T extends any[] ? T : ApiDataItem<T>;
/** API response validation metadata. @keywords validation, response, status, error */
export type ApiDataValidation = {
    status?: ApiStatusType;
    code?: string | number;
    message?: string;
    error?: {
        code?: string | number;
        message?: string;
    };
};
/** Unified API response payload wrapped with status and error metadata. @keywords response, wrapper, payload, data */
export type ApiDataItem<T = any> = T & ApiDataValidation & {
    data?: T;
    success?: boolean;
    statusObject?: ApiStatusItem;
    errorObject?: ApiErrorItem;
};
export type ApiHeadersValue = Record<string, string> | (() => Record<string, string>);
export type ApiDefaultValue = Record<string, any> | (() => Record<string, any>);
/** Parameters and execution options for API fetch requests. @keywords fetch, request, options, http */
export type ApiFetch = {
    api?: boolean;
    path?: string;
    pathFull?: string;
    method?: ApiMethod;
    request?: FormData | Record<string, any> | string;
    auth?: boolean;
    headers?: Record<string, string> | null;
    type?: string;
    toData?: boolean;
    global?: boolean;
    devMode?: boolean;
    hideError?: boolean;
    hideLoading?: boolean;
    retry?: number;
    retryDelay?: number;
    queryReturn?: (query: Response) => Promise<any | ApiDataValidation>;
    globalPreparation?: boolean;
    globalEnd?: boolean;
    init?: RequestInit;
    initError?: boolean;
    timeout?: number;
    controller?: AbortController;
    cache?: number;
    enableClientCache?: boolean;
    cacheId?: number | string;
    endResetLimit?: number;
    wrapper?: <R>(callback: () => Promise<R>, apiFetch: ApiFetch) => Promise<R>;
};
/** SSR hydration record for matching and preloading API responses. @keywords hydration, ssr, match */
export type ApiHydrationItem = {
    path: string;
    method: ApiMethod;
    request?: ApiFetch['request'];
    response: any;
};
export type ApiHydrationList = ApiHydrationItem[];
/** Error matching rule descriptor for API error management. @keywords error, handler, matcher, storage */
export type ApiErrorStorageItem = Record<string, any> & {
    url: string | RegExp;
    method: ApiMethodItem;
    code?: string | number;
    status?: number;
    validation?: (response: Response) => boolean;
    message?: string | ((response?: Response) => string);
};
export type ApiErrorStorageList = ApiErrorStorageItem[];
export type ApiMethod = string | ApiMethodItem;
/** Hook return value containing state reset flag and payload data. @keywords hook, lifecycle, reset */
export type ApiPreparationEnd = {
    reset?: boolean;
    data?: any;
};
/** Mock API response rule descriptor. @keywords mock, response, test, stub */
export type ApiResponseItem = {
    path: string | RegExp;
    method: ApiMethod;
    request?: ApiFetch['request'] | '*any';
    response: any | ((request?: ApiFetch['request']) => any);
    disable?: any;
    isForGlobal?: boolean;
    lag?: any;
};
/** Execution status state and metadata for the last API request. @keywords status, error, response, state */
export type ApiStatusItem = {
    status?: number;
    statusText?: string;
    error?: string;
    lastResponse?: any;
    lastStatus?: ApiStatusType;
    lastCode?: string;
    lastMessage?: string;
};
export type ApiStatusType = 'success' | 'error' | 'warning' | 'info';