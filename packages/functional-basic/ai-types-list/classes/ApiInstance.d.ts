// md5:683ae08c224c34d4c9b05aa5accd85be true
/** Options for the API instance @keywords api,options,config */
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

/** Core class for managing HTTP requests using the Fetch API. @keywords api,client,fetch,request */
export declare class ApiInstance {
    protected wrapper?: <R>(callback: () => Promise<R>, apiFetch: ApiFetch) => Promise<R>;
    /** @keywords constructor,init */
    constructor(url?: string, options?: ApiInstanceOptions);
    /** Checks if the server is running on localhost. @keywords localhost,env */
    isLocalhost(): boolean;
    /** Returns the status of the last request. @keywords status,state */
    getStatus(): ApiStatus;
    /** Gets the response handler. @keywords response,handler */
    getResponse(): ApiResponse;
    /** Gets the hydration handler. @keywords hydration,ssr */
    getHydration(): ApiHydration;
    /** Gets the base origin URL combined with the API path. @keywords origin,url */
    getOrigin(): string;
    /** Gets the full path to the request script. @keywords url,path */
    getUrl(path: string, api?: boolean): string;
    /** Gets data for the request body. @keywords body,payload */
    getBody(request?: ApiFetch['request'], method?: ApiMethod): string | FormData | undefined;
    /** Gets query string for GET method requests. @keywords query,params,get */
    getBodyForGet(request: ApiFetch['request'], path?: string, method?: ApiMethod): string;
    /** Returns a string representation of the hydration data for the client. @keywords hydration,script */
    getHydrationScript(): string;
    /** Modifies the default header data. @keywords headers,config */
    setHeaders(headers: ApiHeadersValue): this;
    /** Modifies the default request data. @keywords request,default */
    setRequestDefault(request: ApiDefaultValue): this;
    /** Changes the base path to the script. @keywords url,base */
    setUrl(url: string): this;
    /** Modifies the function to be called before the request. @keywords preparation,hook */
    setPreparation(callback: (apiFetch: ApiFetch) => Promise<void>): this;
    /** Modifies the function to be called after the request. @keywords end,hook */
    setEnd(callback: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>): this;
    /** Changes the timeout for the request in milliseconds. @keywords timeout,delay */
    setTimeout(timeout: number): this;
    /** Changes the origin (protocol and domain) for the base URL. @keywords origin,domain */
    setOrigin(origin: string): this;
    /** Sets the wrapper function for requests. @keywords wrapper,middleware */
    setWrapper(wrapper: <R>(callback: () => Promise<R>, apiFetch: ApiFetch) => Promise<R>): this;
    /** Executes a request with the given path or configuration. @keywords request,fetch */
    request<T>(pathRequest: string | ApiFetch): Promise<T>;
    /** Sends a GET method request. @keywords get,request */
    get<T>(request: ApiFetch): Promise<T>;
    /** Sends a POST method request. @keywords post,request */
    post<T>(request: ApiFetch): Promise<T>;
    /** Sends a PUT method request. @keywords put,request */
    put<T>(request: ApiFetch): Promise<T>;
    /** Sends a PATCH method request. @keywords patch,request */
    patch<T>(request: ApiFetch): Promise<T>;
    /** Sends a DELETE method request. @keywords delete,request */
    delete<T>(request: ApiFetch): Promise<T>;
    /** Gets retry delay with jitter. @keywords retry,delay */
    protected getRetryDelay(retryCount: number, retryDelay: number): number;
    /** Execute API request with retry support. @keywords fetch,retry */
    protected fetch<T>(apiFetch: ApiFetch, retryCount?: number): Promise<T>;
    /** Executing the HTTP request. @keywords makeQuery,fetch */
    protected makeQuery(apiFetch: ApiFetch, pathToApi: string): Promise<{
        query: Response;
        timeoutId: any;
    }>;
    /** Processing an error. @keywords error,handle */
    protected makeError(error: Record<string, any> & {
        name: string;
    }, group?: string): void;
    /** Processes an error response. @keywords error,query */
    protected makeErrorQuery(error: ApiErrorItem | Response): void;
    /** Initialize controller for request with timeout support. @keywords controller,timeout */
    protected initController(apiFetch: ApiFetch, fetchInit: RequestInit): any;
}