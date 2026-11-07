// md5:b9e420cec71d7fd4a91f530f7f448f18 true
/** HTTP request client helper. @keywords http, api, fetch, client */
export declare class Api {
    /** Checks if server runs on localhost. @keywords localhost, environment */
    static isLocalhost(): boolean;
    /** Prepares HTTP request body payload. @keywords body, payload, formdata */
    static getBody(request?: ApiFetch['request'], method?: ApiMethod): string | FormData | undefined;
    /** Builds query string for GET requests. @keywords query, url, querystring */
    static getBodyForGet(request: ApiFetch['request'], path?: string, method?: ApiMethod): string;
    /** Gets hydration handler instance. @keywords hydration, ssr */
    static getHydration(): ApiHydration;
    /** Generates client-side hydration script tag. @keywords hydration, script, ssr */
    static getHydrationScript(): string;
    /** Gets singleton instance of ApiInstance. @keywords singleton, instance */
    static getItem(): ApiInstance;
    /** Gets base origin URL combined with API path. @keywords origin, base-url */
    static getOrigin(): string;
    /** Gets response handler instance. @keywords response, handler */
    static getResponse(): ApiResponse;
    /** Gets status of last executed request. @keywords status, request-status */
    static getStatus(): ApiStatus;
    /** Builds full URL to request endpoint. @keywords url, endpoint, path */
    static getUrl(path: string, api?: boolean): string;
    /** Configures API options. @keywords config, options, setup */
    static setConfig(config?: ApiConfig): void;
    /** Sets hook callback executed after request completes. @keywords hook, post-request, interceptor */
    static setEnd(callback: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>): void;
    /** Sets default request headers. @keywords headers, default-headers */
    static setHeaders(headers: ApiHeadersValue): void;
    /** Sets base origin URL. @keywords origin, domain, protocol */
    static setOrigin(origin: string): void;
    /** Sets hook callback executed before request starts. @keywords hook, pre-request, middleware */
    static setPreparation(callback: (apiFetch: ApiFetch) => Promise<void>): void;
    /** Sets default request options. @keywords default-request, options */
    static setRequestDefault(request: ApiDefaultValue): void;
    /** Sets request timeout in milliseconds. @keywords timeout, delay */
    static setTimeout(timeout: number): void;
    /** Sets base path for requests. @keywords url, base-path */
    static setUrl(url: string): void;
    /** Sets request wrapper interceptor function. @keywords wrapper, interceptor, middleware */
    static setWrapper(wrapper: <R>(callback: () => Promise<R>, apiFetch: ApiFetch) => Promise<R>): void;
    /** Executes an HTTP request with path or fetch configuration. @keywords request, fetch, execute */
    static request<T = unknown>(pathRequest: string | ApiFetch): Promise<T>;
    /** Executes a GET request. @keywords get, fetch, http */
    static get<T = unknown>(request: ApiFetch): Promise<T>;
    /** Executes a POST request. @keywords post, fetch, http */
    static post<T = unknown>(request: ApiFetch): Promise<T>;
    /** Executes a PUT request. @keywords put, fetch, http */
    static put<T = unknown>(request: ApiFetch): Promise<T>;
    /** Executes a PATCH request. @keywords patch, fetch, http */
    static patch<T = unknown>(request: ApiFetch): Promise<T>;
    /** Executes a DELETE request. @keywords delete, fetch, http */
    static delete<T = unknown>(request: ApiFetch): Promise<T>;
}