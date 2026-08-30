// md5:af789b7c9317e9309c0b251d6548aefe true
/** Class for managing HTTP requests and global API configuration. @keywords api, http, request, fetch */
export declare class Api {
    /** Checks if the current server environment is running on localhost. @keywords localhost, environment, check */
    static isLocalhost(): boolean;
    /** Returns the singleton instance of the ApiInstance class. @keywords singleton, instance */
    static getItem(): ApiInstance;
    /** Returns the status handler for the last executed request. @keywords status, response_status */
    static getStatus(): ApiStatus;
    /** Returns the response processor and handler instance. @keywords response, handler */
    static getResponse(): ApiResponse;
    /** Returns the API hydration handler. @keywords hydration, ssr */
    static getHydration(): ApiHydration;
    /** Returns a serialized HTML script tag containing client hydration data. @keywords hydration_script, ssr, script */
    static getHydrationScript(): string;
    /** Returns the base origin URL combined with the API path. @keywords origin, base_url, endpoint */
    static getOrigin(): string;
    /** Returns the full URL for a given script path. @keywords url, endpoint, path */
    static getUrl(path: string, api?: boolean): string;
    /** Formats and retrieves request body data for non-GET requests. @keywords body, payload, form_data */
    static getBody(request?: ApiFetch['request'], method?: ApiMethodItem): string | FormData | undefined;
    /** Builds a query string or appended URL for GET requests. @keywords query_string, get_params, url_query */
    static getBodyForGet(request: ApiFetch['request'], path?: string, method?: ApiMethodItem): string;
    /** Updates default global HTTP request headers. @keywords headers, default_headers, config */
    static setHeaders(headers: ApiHeadersValue): void;
    /** Sets default request parameter values. @keywords defaults, request_defaults */
    static setRequestDefault(request: ApiDefaultValue): void;
    /** Sets the default base script URL path. @keywords base_url, path, endpoint */
    static setUrl(url: string): void;
    /** Sets a hook callback to be executed before executing requests. @keywords preparation, interceptor, pre_request */
    static setPreparation(callback: (apiFetch: ApiFetch) => Promise<void>): void;
    /** Sets a hook callback to be executed after receiving a response. @keywords post_request, response_interceptor, end_hook */
    static setEnd(callback: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>): void;
    /** Sets global request timeout in milliseconds. @keywords timeout, request_timeout */
    static setTimeout(timeout: number): void;
    /** Sets the base origin protocol and domain. @keywords origin, domain, host */
    static setOrigin(origin: string): void;
    /** Sets a custom execution wrapper around requests. @keywords wrapper, middleware, interceptor */
    static setWrapper(wrapper: <R>(callback: () => Promise<R>, apiFetch: ApiFetch) => Promise<R>): void;
    /** Applies multiple API configuration options at once. @keywords config, options, setup */
    static setConfig(config?: ApiConfig): void;
    /** Executes an HTTP request using a path string or request config. @keywords request, http, fetch */
    static request<T>(pathRequest: string | ApiFetch): Promise<T>;
    /** Sends a GET HTTP request. @keywords get, fetch */
    static get<T>(request: ApiFetch): Promise<T>;
    /** Sends a POST HTTP request. @keywords post, fetch */
    static post<T>(request: ApiFetch): Promise<T>;
    /** Sends a PUT HTTP request. @keywords put, fetch */
    static put<T>(request: ApiFetch): Promise<T>;
    /** Sends a PATCH HTTP request. @keywords patch, fetch */
    static patch<T>(request: ApiFetch): Promise<T>;
    /** Sends a DELETE HTTP request. @keywords delete, fetch */
    static delete<T>(request: ApiFetch): Promise<T>;
}