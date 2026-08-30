// md5:7c81fa3b56a60aed199a560dba39b5a2 true
/** Options for configuring an ApiInstance. @keywords api, options, config */
export type ApiInstanceOptions = {
    headersClass?: typeof ApiHeaders;
    requestDefaultClass?: typeof ApiDefault;
    statusClass?: typeof ApiStatus;
    responseClass?: typeof ApiResponse;
    preparationClass?: typeof ApiPreparation;
    loadingClass?: LoadingInstance;
    errorCenterClass?: ErrorCenterInstance;
    hydrationClass?: typeof ApiHydration;
    wrapper?: <R>(callback: () => Promise<R>, apiFetch: ApiFetch) => Promise<R>;
};
/** Core class for managing HTTP requests using the Fetch API. @keywords api, fetch, http, client */
export declare class ApiInstance {
    /** Creates an ApiInstance with an optional base URL and configuration options. @keywords constructor, init */
    constructor(url?: string, options?: ApiInstanceOptions);
    /** Checks if the server is running on localhost. @keywords localhost, environment, host */
    isLocalhost(): boolean;
    /** Returns the status handler of the last request. @keywords status, state */
    getStatus(): ApiStatus;
    /** Gets the response handler instance. @keywords response, handler */
    getResponse(): ApiResponse;
    /** Gets the hydration handler instance. @keywords hydration, ssr */
    getHydration(): ApiHydration;
    /** Gets the base origin URL combined with the API path. @keywords origin, url, base */
    getOrigin(): string;
    /** Gets the full URL path for a request script. @keywords url, endpoint, path */
    getUrl(path: string, api?: boolean): string;
    /** Serializes request data into a body payload or FormData. @keywords body, payload, formdata */
    getBody(request?: ApiFetch['request'], method?: ApiMethod): string | FormData | undefined;
    /** Generates a formatted query string for GET requests. @keywords query, search_params, url_params */
    getBodyForGet(request: ApiFetch['request'], path?: string, method?: ApiMethod): string;
    /** Returns a script tag string containing client hydration data. @keywords hydration, script, ssr */
    getHydrationScript(): string;
    /** Updates default headers applied to requests. @keywords headers, config */
    setHeaders(headers: ApiHeadersValue): this;
    /** Updates default request configuration parameters. @keywords default, config, options */
    setRequestDefault(request: ApiDefaultValue): this;
    /** Sets the base script path. @keywords url, endpoint, base */
    setUrl(url: string): this;
    /** Sets an interceptor callback to run before request execution. @keywords interceptor, preparation, middleware */
    setPreparation(callback: (apiFetch: ApiFetch) => Promise<void>): this;
    /** Sets an interceptor callback to run after request completion. @keywords interceptor, response, callback */
    setEnd(callback: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>): this;
    /** Sets the default request timeout in milliseconds. @keywords timeout, delay */
    setTimeout(timeout: number): this;
    /** Sets the base origin protocol and domain. @keywords origin, domain, host */
    setOrigin(origin: string): this;
    /** Sets a wrapper function wrapping request execution. @keywords wrapper, middleware */
    setWrapper(wrapper: <R>(callback: () => Promise<R>, apiFetch: ApiFetch) => Promise<R>): this;
    /** Executes an HTTP request with the given path or configuration. @keywords request, fetch, http */
    request<T>(pathRequest: string | ApiFetch): Promise<T>;
    /** Sends an HTTP GET request. @keywords get, fetch, query */
    get<T>(request: ApiFetch): Promise<T>;
    /** Sends an HTTP POST request. @keywords post, submit, mutation */
    post<T>(request: ApiFetch): Promise<T>;
    /** Sends an HTTP PUT request. @keywords put, update */
    put<T>(request: ApiFetch): Promise<T>;
    /** Sends an HTTP PATCH request. @keywords patch, update */
    patch<T>(request: ApiFetch): Promise<T>;
    /** Sends an HTTP DELETE request. @keywords delete, remove */
    delete<T>(request: ApiFetch): Promise<T>;
}