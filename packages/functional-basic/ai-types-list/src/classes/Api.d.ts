// md5:af789b7c9317e9309c0b251d6548aefe true
/** Utility class for configuring and executing HTTP requests. @keywords api, http, fetch, request, rest */
export declare class Api {
    /** Checks if the server is running on localhost environment. @keywords localhost, environment, check */
    static isLocalhost(): boolean;
    /** Returns the singleton instance of the ApiInstance class. @keywords singleton, instance */
    static getItem(): ApiInstance;
    /** Returns the status handler of the last request. @keywords status, response */
    static getStatus(): ApiStatus;
    /** Gets the response handler instance. @keywords response, handler */
    static getResponse(): ApiResponse;
    /** Gets the hydration handler instance. @keywords hydration, ssr */
    static getHydration(): ApiHydration;
    /** Returns an HTML script tag string containing client hydration data. @keywords hydration, script, ssr */
    static getHydrationScript(): string;
    /** Gets the base origin URL combined with the API path. @keywords origin, base-url, path */
    static getOrigin(): string;
    /** Gets the full URL path for the request. @keywords url, endpoint, path */
    static getUrl(path: string, api?: boolean): string;
    /** Formats and retrieves the request body payload. @keywords body, payload, formdata */
    static getBody(request?: ApiFetch['request'], method?: ApiMethodItem): string | FormData | undefined;
    /** Constructs a query string for GET requests. @keywords query, search-params, get */
    static getBodyForGet(request: ApiFetch['request'], path?: string, method?: ApiMethodItem): string;
    /** Updates default HTTP headers for subsequent requests. @keywords headers, default, config */
    static setHeaders(headers: ApiHeadersValue): void;
    /** Updates default request parameters. @keywords default, request, config */
    static setRequestDefault(request: ApiDefaultValue): void;
    /** Sets the base endpoint path for requests. @keywords url, endpoint, base */
    static setUrl(url: string): void;
    /** Sets a pre-request interceptor hook function. @keywords interceptor, preparation, middleware */
    static setPreparation(callback: (apiFetch: ApiFetch) => Promise<void>): void;
    /** Sets a post-request hook function. @keywords interceptor, end, response, callback */
    static setEnd(callback: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>): void;
    /** Sets the default request timeout in milliseconds. @keywords timeout, delay, abort */
    static setTimeout(timeout: number): void;
    /** Sets the base origin protocol and domain. @keywords origin, domain, host */
    static setOrigin(origin: string): void;
    /** Sets a global execution wrapper for all requests. @keywords wrapper, middleware, executor */
    static setWrapper(wrapper: <R>(callback: () => Promise<R>, apiFetch: ApiFetch) => Promise<R>): void;
    /** Sets multiple API configuration options at once. @keywords config, options, setup */
    static setConfig(config?: ApiConfig): void;
    /** Executes an HTTP request with the given path or configuration. @keywords request, fetch, execute */
    static request<T>(pathRequest: string | ApiFetch): Promise<T>;
    /** Executes an HTTP GET request. @keywords get, fetch, request */
    static get<T>(request: ApiFetch): Promise<T>;
    /** Executes an HTTP POST request. @keywords post, fetch, request */
    static post<T>(request: ApiFetch): Promise<T>;
    /** Executes an HTTP PUT request. @keywords put, fetch, request */
    static put<T>(request: ApiFetch): Promise<T>;
    /** Executes an HTTP PATCH request. @keywords patch, fetch, request */
    static patch<T>(request: ApiFetch): Promise<T>;
    /** Executes an HTTP DELETE request. @keywords delete, fetch, request */
    static delete<T>(request: ApiFetch): Promise<T>;
}