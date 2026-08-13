// md5:b400caafeb4a2cffc64a888c511887b4 true
/**
 * Supported HTTP methods for API requests.
 * Поддерживаемые HTTP-методы для API-запросов.
 */
export declare enum ApiMethodItem {
    delete = "DELETE",
    get = "GET",
    post = "POST",
    put = "PUT",
    patch = "PATCH"
}
export type ApiCacheItem<T = any> = {
    value: T;
    age?: number;
    cacheAge: number;
};
export type ApiCacheList = Record<string, ApiCacheItem>;
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
export type ApiDataValidation = {
    status?: ApiStatusType;
    code?: string | number;
    message?: string;
    error?: {
        code?: string | number;
        message?: string;
    };
};
export type ApiDataItem<T = any> = T & ApiDataValidation & {
    data?: T;
    success?: boolean;
    statusObject?: ApiStatusItem;
    errorObject?: ApiErrorItem;
};
export type ApiHeadersValue = Record<string, string> | (() => Record<string, string>);
export type ApiDefaultValue = Record<string, any> | (() => Record<string, any>);
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
export type ApiHydrationItem = {
    path: string;
    method: ApiMethod;
    request?: ApiFetch['request'];
    response: any;
};
export type ApiHydrationList = ApiHydrationItem[];
export type ApiErrorStorageItem = Record<string, any> & {
    url: string | RegExp;
    method: ApiMethodItem;
    code?: string;
    status?: number;
    validation?: (response: Response) => boolean;
    message?: string | ((response?: Response) => string);
};
export type ApiErrorStorageList = ApiErrorStorageItem[];
export type ApiMethod = string | ApiMethodItem;
export type ApiPreparationEnd = {
    reset?: boolean;
    data?: any;
};
export type ApiResponseItem = {
    path: string | RegExp;
    method: ApiMethod;
    request?: ApiFetch['request'] | '*any';
    response: any | ((request?: ApiFetch['request']) => any);
    disable?: any;
    isForGlobal?: boolean;
    lag?: any;
};
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