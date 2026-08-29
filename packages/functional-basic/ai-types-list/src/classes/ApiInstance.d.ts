// md5:7c81fa3b56a60aed199a560dba39b5a2 true
/** Options for configuring ApiInstance. @keywords api, options, config */
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
/** Core HTTP client manager using Fetch API with retry, hydration, and lifecycle hooks. @keywords http, fetch, api, request */
export declare class ApiInstance {
  /** Initializes a new ApiInstance. @keywords constructor, init */
  constructor(url?: string, options?: ApiInstanceOptions);
  /** Checks if the server is running on localhost. @keywords localhost, environment */
  isLocalhost(): boolean;
  /** Returns status handler for the last request. @keywords status, state */
  getStatus(): ApiStatus;
  /** Returns the response handler instance. @keywords response, handler */
  getResponse(): ApiResponse;
  /** Returns the hydration handler instance. @keywords hydration, ssr */
  getHydration(): ApiHydration;
  /** Gets the base origin URL combined with API path. @keywords origin, base-url */
  getOrigin(): string;
  /** Constructs full URL from relative script path. @keywords url, endpoint, path */
  getUrl(path: string, api?: boolean): string;
  /** Generates body payload for request. @keywords body, payload, formdata */
  getBody(request?: ApiFetch['request'], method?: ApiMethod): string | FormData | undefined;
  /** Generates query string for GET requests. @keywords query, query-string, get */
  getBodyForGet(request: ApiFetch['request'], path?: string, method?: ApiMethod): string;
  /** Serializes hydration data into an HTML script element string. @keywords hydration, script, ssr */
  getHydrationScript(): string;
  /** Updates default request headers. @keywords headers */
  setHeaders(headers: ApiHeadersValue): this;
  /** Updates default request options. @keywords default-options, config */
  setRequestDefault(request: ApiDefaultValue): this;
  /** Sets the base path URL. @keywords url, endpoint */
  setUrl(url: string): this;
  /** Sets pre-request preparation hook. @keywords preparation, interceptor, pre-request */
  setPreparation(callback: (apiFetch: ApiFetch) => Promise<void>): this;
  /** Sets post-request response hook. @keywords post-request, interceptor, handler */
  setEnd(callback: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>): this;
  /** Sets request timeout in milliseconds. @keywords timeout, abort */
  setTimeout(timeout: number): this;
  /** Sets the origin domain and protocol. @keywords origin, domain */
  setOrigin(origin: string): this;
  /** Sets request execution wrapper function. @keywords wrapper, middleware */
  setWrapper(wrapper: <R>(callback: () => Promise<R>, apiFetch: ApiFetch) => Promise<R>): this;
  /** Executes an HTTP request with path or configuration. @keywords request, fetch, execute */
  request<T>(pathRequest: string | ApiFetch): Promise<T>;
  /** Sends a GET request. @keywords get, query */
  get<T>(request: ApiFetch): Promise<T>;
  /** Sends a POST request. @keywords post, create */
  post<T>(request: ApiFetch): Promise<T>;
  /** Sends a PUT request. @keywords put, update */
  put<T>(request: ApiFetch): Promise<T>;
  /** Sends a PATCH request. @keywords patch, update */
  patch<T>(request: ApiFetch): Promise<T>;
  /** Sends a DELETE request. @keywords delete, remove */
  delete<T>(request: ApiFetch): Promise<T>;
}