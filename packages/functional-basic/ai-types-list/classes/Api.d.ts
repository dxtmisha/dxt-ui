// md5:86780ebf43097a15a6ab87827f06e4fc true
/** HTTP client manager for making requests and configuring API settings. @keywords http, client, api, request, fetch */
export declare class Api {
    /** Checks whether the server environment is running on localhost. @keywords localhost, environment, server, check */
    static isLocalhost(): boolean;
    /** Returns the singleton ApiInstance. @keywords instance, singleton, api */
    static getItem(): ApiInstance;
    /** Retrieves the status handler of the last executed request. @keywords status, response, state */
    static getStatus(): ApiStatus;
    /** Retrieves the API response handler instance. @keywords response, handler */
    static getResponse(): ApiResponse;
    /** Retrieves the hydration handler instance. @keywords hydration, state, ssr */
    static getHydration(): ApiHydration;
    /** Generates an HTML script element string containing hydration data. @keywords hydration, script, ssr, html */
    static getHydrationScript(): string;
    /** Retrieves the base origin URL combined with the API path. @keywords origin, base-url, endpoint */
    static getOrigin(): string;
    /** Resolves the complete URL for a request path. @keywords url, path, resolve, endpoint */
    static getUrl(path: string, api?: boolean): string;
    /** Formats the payload into an appropriate HTTP request body. @keywords body, payload, formdata, request */
    static getBody(request?: ApiFetch['request'], method?: ApiMethodItem): string | FormData | undefined;
    /** Generates a query string URL for GET requests. @keywords query, query-string, get, params */
    static getBodyForGet(request: ApiFetch['request'], path?: string, method?: ApiMethodItem): string;
    /** Sets default request headers. @keywords headers, config, default */
    static setHeaders(headers: ApiHeadersValue): void;
    /** Sets default request payload data. @keywords default, payload, request */
    static setRequestDefault(request: ApiDefaultValue): void;
    /** Sets the base API path URL. @keywords url, base-path, config */
    static setUrl(url: string): void;
    /** Sets an interceptor callback executed before each request. @keywords middleware, interceptor, preparation, pre-request */
    static setPreparation(callback: (apiFetch: ApiFetch) => Promise<void>): void;
    /** Sets an interceptor callback executed after each request. @keywords middleware, interceptor, post-request, response */
    static setEnd(callback: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>): void;
    /** Sets the global request timeout duration in milliseconds. @keywords timeout, duration, abort */
    static setTimeout(timeout: number): void;
    /** Sets the default origin protocol and domain. @keywords origin, host, domain */
    static setOrigin(origin: string): void;
    /** Sets a higher-order wrapper function around API requests. @keywords wrapper, interceptor, proxy */
    static setWrapper(wrapper: <R>(callback: () => Promise<R>, apiFetch: ApiFetch) => Promise<R>): void;
    /** Applies multiple global API configuration settings. @keywords config, options, setup */
    static setConfig(config?: ApiConfig): void;
    /** Executes an HTTP request using a path string or configuration object. @keywords request, execute, http */
    static request<T>(pathRequest: string | ApiFetch): Promise<T>;
    /** Executes an HTTP GET request. @keywords get, http, fetch */
    static get<T>(request: ApiFetch): Promise<T>;
    /** Executes an HTTP POST request. @keywords post, http, fetch */
    static post<T>(request: ApiFetch): Promise<T>;
    /** Executes an HTTP PUT request. @keywords put, http, fetch */
    static put<T>(request: ApiFetch): Promise<T>;
    /** Executes an HTTP PATCH request. @keywords patch, http, fetch */
    static patch<T>(request: ApiFetch): Promise<T>;
    /** Executes an HTTP DELETE request. @keywords delete, http, fetch */
    static delete<T>(request: ApiFetch): Promise<T>;
}