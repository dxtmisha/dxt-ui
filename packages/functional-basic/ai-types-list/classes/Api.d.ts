// md5:6b28e9b75c79c5c3ee9ba17825867aa0 true
/** Check if server runs on localhost @keywords api, localhost */
export declare class Api {
    /** Check if server is running on localhost. @keywords api, localhost */
    static isLocalhost(): boolean;
    /** Get ApiInstance singleton. @keywords api, instance */
    static getItem(): ApiInstance;
    /** Get last request status. @keywords api, status */
    static getStatus(): ApiStatus;
    /** Get response handler. @keywords api, response */
    static getResponse(): ApiResponse;
    /** Get hydration handler. @keywords api, hydration */
    static getHydration(): ApiHydration;
    /** Get hydration data script string. @keywords api, hydration, script */
    static getHydrationScript(): string;
    /** Get base origin URL. @keywords api, origin, url */
    static getOrigin(): string;
    /** Get full request URL. @keywords api, url */
    static getUrl(path: string, api?: boolean): string;
    /** Get request body data. @keywords api, body, request */
    static getBody(request?: ApiFetch['request'], method?: ApiMethodItem): string | FormData | undefined;
    /** Get query string for GET requests. @keywords api, query, get */
    static getBodyForGet(request: ApiFetch['request'], path?: string, method?: ApiMethodItem): string;
    /** Set default headers. @keywords api, headers */
    static setHeaders(headers: ApiHeadersValue): void;
    /** Set default request data. @keywords api, request, default */
    static setRequestDefault(request: ApiDefaultValue): void;
    /** Set base URL. @keywords api, url */
    static setUrl(url: string): void;
    /** Set preparation callback. @keywords api, preparation */
    static setPreparation(callback: (apiFetch: ApiFetch) => Promise<void>): void;
    /** Set end callback. @keywords api, end */
    static setEnd(callback: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>): void;
    /** Set request timeout. @keywords api, timeout */
    static setTimeout(timeout: number): void;
    /** Set base origin. @keywords api, origin */
    static setOrigin(origin: string): void;
    /** Set request wrapper function. @keywords api, wrapper */
    static setWrapper(wrapper: <R>(callback: () => Promise<R>, apiFetch: ApiFetch) => Promise<R>): void;
    /** Set API configuration. @keywords api, config */
    static setConfig(config?: ApiConfig): void;
    /** Execute HTTP request. @keywords api, request */
    static request<T>(pathRequest: string | ApiFetch): Promise<T>;
    /** Execute GET request. @keywords api, get, request */
    static get<T>(request: ApiFetch): Promise<T>;
    /** Execute POST request. @keywords api, post, request */
    static post<T>(request: ApiFetch): Promise<T>;
    /** Execute PUT request. @keywords api, put, request */
    static put<T>(request: ApiFetch): Promise<T>;
    /** Execute PATCH request. @keywords api, patch, request */
    static patch<T>(request: ApiFetch): Promise<T>;
    /** Execute DELETE request. @keywords api, delete, request */
    static delete<T>(request: ApiFetch): Promise<T>;
}