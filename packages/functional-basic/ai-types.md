All these methods are in the @dxtmisha/functional-basic (v1.8.7) library.

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

/** Manages API response caching. @keywords api cache storage */
export declare class ApiCache {
    /** Initializes storage with custom listeners and options. @keywords init listeners */
    static init(getListener: (key: string) => Promise<ApiCacheItem | undefined>, setListener: (key: string, value: ApiCacheItem) => Promise<boolean>, removeListener: (key: string) => Promise<boolean>, cacheStepAgeClearOld?: number): void;
    /** Resets the cache by clearing memory items and listeners. @keywords reset cache */
    static reset(): void;
    /** Gets data from cache by key. @keywords get cache */
    static get<T>(key: string): Promise<T | undefined>;
    /** Gets data from cache using fetch options. @keywords fetch cache */
    static getByFetch<T>(fetch: ApiFetch): Promise<T | undefined>;
    /** Saves data to cache by key. @keywords set cache */
    static set<T>(key: string, value: T, age?: number): Promise<void>;
    /** Saves data to cache using fetch options. @keywords set fetch cache */
    static setByFetch<T>(fetch: ApiFetch, value: T): Promise<void>;
    /** Removes data from cache by key. @keywords remove cache */
    static remove(key: string): Promise<void>;
}

/** Processes and formats API response data @keywords api, response, data, transform */
export declare class ApiDataReturn<T = any> {
    /** Creates ApiDataReturn instance @keywords constructor, api */
    constructor(apiFetch: ApiFetch, query: Response, end: ApiPreparationEnd, error?: ApiErrorItem | undefined);
    /** Initializes response data @keywords init, parse */
    init(): Promise<this>;
    /** Returns processed data @keywords get, data */
    get(): ApiData<T>;
    /** Returns processed data with status object @keywords get, status */
    getAndStatus(status: ApiStatus): ApiData<T>;
    /** Returns raw API data @keywords get, raw, data */
    getData(): ApiData<T> | undefined;
}

/** Manages default request data and parameters. @keywords api default request parameters */
export declare class ApiDefault {
    /** Checks if default request data is defined. @keywords api check default */
    is(): boolean;
    /** Gets default request data. @keywords api get default */
    get(): Record<string, any> | undefined;
    /** Merges default data into request. @keywords api request merge */
    request(request: ApiFetch['request']): ApiFetch['request'];
    /** Sets default request data. @keywords api set default */
    set(request: ApiDefaultValue): this;
    /** Adds default data to FormData. @keywords api form data add */
    protected addByFormData(request: FormData, value: ApiDefaultValue): this;
}

/** Manages API error storage and error items. @keywords api error storage handler */
export declare class ApiError {
    /** Gets the API error storage instance. @keywords get storage error */
    static getStorage(): ApiErrorStorage;
    /** Adds error items to storage. @keywords add error item */
    static add(item: Partial<ApiErrorStorageItem> | Partial<ApiErrorStorageItem>[], url?: string | RegExp, method?: ApiMethodItem): void;
    /** Gets structured error item from response. @keywords get error item response */
    static getItem(method: ApiMethodItem, response: Response): Promise<ApiErrorItem>;
}

/** Retrieves or manages API error response details. @keywords api error item response status */
export declare class ApiErrorItem {
    /** Creates an instance of ApiErrorItem. @keywords create constructor api error item */
    constructor(method: ApiMethodItem, response: Response, error: ApiErrorStorageItem);
    /** Gets the HTTP request method. @keywords get method http */
    getMethod(): ApiMethodItem;
    /** Gets the raw fetch response object. @keywords get response fetch */
    getResponse(): Response;
    /** Gets the matched error storage item. @keywords get error storage item */
    getError(): ApiErrorStorageItem;
    /** Gets the error code. @keywords get error code */
    getCode(): string | undefined;
    /** Gets the error message. @keywords get error message */
    getMessage(): string | undefined;
    /** Gets the HTTP response status code. @keywords get status code */
    getStatus(): number;
}

/** Manager for handling and identifying API error states @keywords api error storage matcher */
export declare class ApiErrorStorage {
    /** Finds a matching error item in the storage by analyzing the response @keywords find api error */
    find(method: ApiMethodItem, response: Response): Promise<ApiErrorStorageItem>;
    /** Adds error items or lists to internal storage @keywords add api error */
    add(item: Partial<ApiErrorStorageItem> | Partial<ApiErrorStorageItem>[], url?: string | RegExp, method?: ApiMethodItem): this;
}

/**
 * Manages HTTP request headers.
 * @keywords api headers request content-type
 */
export declare class ApiHeaders {
    /**
     * Retrieves request headers.
     * @keywords get headers content-type
     */
    get(value?: Record<string, string> | null, type?: string | undefined | null): Record<string, string> | undefined;
    /**
     * Retrieves headers based on request data.
     * @keywords get headers request content-type
     */
    getByRequest(request: ApiFetch['request'], value?: Record<string, string> | null, type?: string): Record<string, string> | undefined;
    /**
     * Sets default headers.
     * @keywords set headers defaults
     */
    set(headers: ApiHeadersValue): this;
}

/**
 * Manages API response hydration for server-side rendering (SSR).
 * @keywords api, hydration, ssr, client, cache
 */
export declare class ApiHydration {
    /**
     * Initializes response collection from client data.
     * @keywords init, response, hydration
     */
    initResponse(response: ApiResponse): void;
    /**
     * Stores API fetch and response pair for client hydration.
     * @keywords to, client, hydration, save
     */
    toClient<T>(apiFetch: ApiFetch, response: T): void;
    /**
     * Serializes hydration data into a script string.
     * @keywords to, string, serialize, html
     */
    toString(): string;
}

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

/** Class for preparing requests. @keywords api, preparation, request */
export declare class ApiPreparation {
	/** Executes preparation before the request. @keywords api, make, preparation */
	make(active: boolean, apiFetch: ApiFetch): Promise<void>;
	/** Analyzes the request after execution. @keywords api, makeEnd, response */
	makeEnd(active: boolean, query: Response, apiFetch: ApiFetch): Promise<ApiPreparationEnd>;
	/** Modifies the function to be called before the request. @keywords api, set, callback */
	set(callback: (apiFetch: ApiFetch) => Promise<void>): this;
	/** Modifies the function to be called after the request. @keywords api, setEnd, callback */
	setEnd(callback: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>): this;
}

/** Class for working with API responses. @keywords api, response, emulator */
export declare class ApiResponse {
    /** Constructor @keywords constructor */
    constructor(requestDefault: ApiDefault);
    /** Checks for global cached request and returns it if found. @keywords get, cache, response */
    get(path: string | undefined, method: ApiMethod, request?: ApiFetch['request'], devMode?: boolean): ApiResponseItem | undefined;
    /** Returns list of cached API responses excluding global ones. @keywords list, cache, response */
    getList(): (ApiResponseItem & Record<string, any>)[];
    /** Adds cached requests. @keywords add, cache, response */
    add(response: ApiResponseItem | ApiResponseItem[]): this;
    /** Sets developer mode flag. @keywords set, devMode, developer */
    setDevMode(devMode: boolean): this;
    /** Executes emulator if available. @keywords emulator, fetch, async */
    emulator<T>(apiFetch: ApiFetch): Promise<T | undefined>;
    /** Executes emulator synchronously if available. @keywords emulator, sync, fetch */
    emulatorAsync<T>(apiFetch: ApiFetch): T | undefined;
    /** Checks if cached item is disabled. @keywords check, disable, item */
    protected isDisable(item: ApiResponseItem): boolean;
    /** Checks if path matches cached one. @keywords check, path, match */
    protected isPath(item: ApiResponseItem, path: string): boolean;
    /** Checks if developer mode is active. @keywords check, devMode, mode */
    protected isDevMode(devMode?: boolean): boolean;
    /** Checks if request is first. @keywords check, first, request */
    protected isFirst(item: ApiResponseItem, devMode?: boolean): boolean;
    /** Checks if request matches cached one. @keywords check, response, match */
    protected isResponse(item: ApiResponseItem, request?: ApiFetch['request']): boolean;
    /** Reads cached data configuration. @keywords read, data, cache */
    protected readData(apiFetch: ApiFetch): {
        response: ApiResponseItem;
        request: string | Record<string, any> | FormData | undefined;
    } | undefined;
    /** Emulates execution request. @keywords fetch, emulate, request */
    protected fetch<T>(response: ApiResponseItem, request?: ApiFetch['request']): Promise<T>;
    /** Emulates execution request synchronously. @keywords fetch, emulate, sync */
    protected fetchAsync<T>(response: ApiResponseItem): T;
    /** Enables loading for request emulation. @keywords start, loading, response */
    protected startResponseLoading(): void;
    /** Disables loading for request emulation. @keywords stop, loading, response */
    protected stopResponseLoading(): void;
}

/** Manages API request status and tracking. @keywords api status tracker */
export declare class ApiStatus {
    /** Gets the current API status data. @keywords get status */
    get(): ApiStatusItem | undefined;
    /** Gets the HTTP response status code. @keywords get status code */
    getStatus(): number | undefined;
    /** Gets the HTTP response status text. @keywords get status text */
    getStatusText(): string | undefined;
    /** Gets the last status type. @keywords get status type */
    getStatusType(): ApiStatusType | undefined;
    /** Gets the last error code. @keywords get code */
    getCode(): string | undefined;
    /** Gets the current error string. @keywords get error */
    getError(): string | undefined;
    /** Gets the last response data payload. @keywords get response data */
    getResponse<T>(): T | undefined;
    /** Gets the last response message string. @keywords get message */
    getMessage(): string;
    /** Sets full status data object. @keywords set status data */
    set(data: ApiStatusItem): this;
    /** Sets HTTP status code and optional text. @keywords set status */
    setStatus(status?: number, statusText?: string): this;
    /** Sets the error message state. @keywords set error */
    setError(error?: string): this;
    /** Sets the last response and extracts metadata. @keywords set last response */
    setLastResponse(response?: any): this;
    /** Sets the last status type. @keywords set last status */
    setLastStatus(status?: ApiStatusType): this;
    /** Sets the last execution code. @keywords set last code */
    setLastCode(code?: string): this;
    /** Sets the last response message. @keywords set last message */
    setLastMessage(message?: string): this;
}

/** BroadcastChannel message handler utility @keywords broadcast, channel, message, worker */
export declare class BroadcastMessage<Message = any> {
    /** @keywords constructor, init, channel */
    constructor(name: string, callback?: ((event: MessageEvent<Message>) => void) | undefined, callbackError?: ((event: MessageEvent<Message>) => void) | undefined, errorCenter?: ErrorCenterInstance);
    /** Gets the underlying BroadcastChannel instance @keywords get, channel, broadcast */
    getChannel(): BroadcastChannel | undefined;
    /** Posts a message to the channel @keywords post, send, message */
    post(message: Message): this;
    /** Sets the message reception callback @keywords set, callback, message */
    setCallback(callback: (event: MessageEvent<Message>) => void): this;
    /** Sets the message error callback @keywords set, callback, error */
    setCallbackError(callbackError: (event: MessageEvent<Message>) => void): this;
    /** Destroys the channel connection @keywords destroy, close, channel */
    destroy(): this;
}

/** Simple in-memory cache class for computed values @keywords cache, memory, compute */
export declare class Cache {
    /** Gets cached value or computes and stores it @keywords get, cache, value */
    get<T>(name: string, callback: () => T, comparison?: any[]): T;
    /** Asynchronously gets cached value or computes and stores it @keywords get, async, cache */
    getAsync<T>(name: string, callback: () => T, comparison?: any[]): Promise<T>;
}

/** Manages cached value with dependency tracking @keywords cache, item, memory, memoize */
export declare class CacheItem<T> {
    /** Creates a CacheItem instance @keywords constructor, create */
    constructor(callback: () => T);
    /** Gets cached value, recomputing if dependencies change @keywords get, cache, memoize */
    getCache(comparison: any[]): T;
    /** Gets previous cached value before last update @keywords get, cache, old, previous */
    getCacheOld(): T | undefined;
    /** Asynchronously gets cached value, recomputing if dependencies change @keywords get, cache, async */
    getCacheAsync(comparison: any[]): Promise<T>;
}

/** Static cache class using ServerStorage. @keywords cache static storage */
export declare class CacheStatic {
	/** Retrieves the Cache instance. @keywords get item storage */
	protected static getItem(): Cache;
	/** Returns cached value or computes it via callback. @keywords get cache value */
	static get<T>(name: string, callback: () => T, comparison?: any[]): T;
	/** Asynchronously returns cached value or computes it via callback. @keywords get async cache */
	static getAsync<T>(name: string, callback: () => T, comparison?: any[]): Promise<T>;
}

/** Cookie options definition @keywords cookie_options, options */
export type CookieOptions = {
    /** Max age in seconds @keywords max_age, age */
    age?: number;
    /** SameSite policy @keywords same_site, policy */
    sameSite?: 'Strict' | 'Lax' | 'None';
    /** Cookie path @keywords path */
    path?: string;
    /** Cookie domain @keywords domain */
    domain?: string;
    /** Secure flag @keywords secure */
    secure?: boolean;
    /** HttpOnly flag @keywords httponly */
    httpOnly?: boolean;
    /** Partitioned flag @keywords partitioned */
    partitioned?: boolean;
    /** Additional cookie arguments @keywords arguments */
    arguments?: Record<string, any> | string[];
};

/** Class for working with cookies @keywords cookie, storage, browser */
export declare class Cookie<T> {
    /** Cookie value @keywords value */
    value: string | T | undefined;
    /** Cookie options @keywords options */
    options: CookieOptions;
    /** Cookie name @keywords name */
    name: string;
    /** Returns an instance of the class according to the specified cookie name @keywords get_instance, cookie */
    static getInstance<T>(name: string): Cookie<T>;
    /** Creates a cookie instance @keywords constructor, cookie */
    constructor(name: string);
    /** Gets cookie data or sets default value if undefined @keywords get, cookie */
    get(defaultValue?: T | string | (() => (T | string)), options?: CookieOptions): string | T | undefined;
    /** Sets cookie value and options @keywords set, cookie */
    set(value?: T | string | (() => (T | string)), options?: CookieOptions): void;
    /** Removes the cookie @keywords remove, delete, cookie */
    remove(): void;
    /** Updates the cookie with current value and options @keywords update, cookie */
    update(): void;
}

/** Class for changing cookie access status. @keywords cookie, block, status */
export declare class CookieBlock {
    /** Returns a request-isolated instance of CookieBlockInstance. @keywords instance, get, item */
    static getItem(): CookieBlockInstance;
    /** Obtaining status. @keywords get, status, blocked */
    static get(): boolean;
    /** Changing status. @keywords set, status, block */
    static set(value: boolean): void;
}

/** Cookie block instance class @keywords cookie, block, status */
export declare class CookieBlockInstance {
    /** Gets cookie block status @keywords get, cookie, block */
    get(): boolean;
    /** Sets cookie block status @keywords set, cookie, block */
    set(value: boolean): void;
}

export type CookieSameSite = 'strict' | 'lax';

export type CookieOptions = {
    age?: number;
    sameSite?: CookieSameSite;
    path?: string;
    domain?: string;
    secure?: boolean;
    httpOnly?: boolean;
    partitioned?: boolean;
    arguments?: string[] | Record<string, string | number | boolean>;
};

/**
 * Cookie storage management class with DOM and SSR support.
 * @keywords cookie storage manager web storage
 */
export declare class CookieStorage {
    protected static getListener?: (key: string) => any | undefined;
    protected static getListenerRaw?: () => string;
    protected static setListener?: (key: string, value: any, cookie: string, options?: CookieOptions) => void;

    /**
     * Initializes storage listeners.
     * @keywords cookie init storage
     */
    static init(getListener?: (key: string) => any | undefined, getListenerRaw?: () => string, setListener?: (key: string, value: any, cookie: string, options?: CookieOptions) => void): void;

    /**
     * Resets storage state and clears items.
     * @keywords cookie reset storage
     */
    static reset(): void;

    /**
     * Gets cookie value by name.
     * @keywords cookie get value
     */
    static get<T>(name: string, defaultValue?: T | (() => T)): T | undefined;

    /**
     * Sets cookie value.
     * @keywords cookie set value
     */
    static set<T>(name: string, value: T | (() => T), options?: CookieOptions): T;

    /**
     * Removes cookie by name.
     * @keywords cookie remove delete
     */
    static remove(name: string): void;

    /**
     * Updates cookies from DOM.
     * @keywords cookie update
     */
    static update(): void;

    protected static format(name: string, value: string, options?: CookieOptions): string;

    protected static hasDom(): boolean;

    protected static parse(cookie: string): Record<string, any>;

    protected static initItems(): Record<string, any>;

    protected static toMaxAge(stringValue: string, age?: CookieOptions['age']): string;

    protected static toSameSite(sameSite?: CookieOptions['sameSite']): string;

    protected static toPath(path?: CookieOptions['path']): string;

    protected static toDomain(domain?: CookieOptions['domain']): string | undefined;

    protected static toSecure(secure?: CookieOptions['secure']): string | undefined;

    protected static toHttpOnly(httpOnly?: CookieOptions['httpOnly']): string | undefined;

    protected static toPartitioned(partitioned?: CookieOptions['partitioned']): string | undefined;

    protected static toArguments(args?: CookieOptions['arguments']): string[];
}

/** Class for managing localStorage and sessionStorage with prefix, expiration, and SSR isolation support. @keywords storage local session cache */
export declare class DataStorage<T> {
    /** Sets a custom prefix for storage keys. @keywords prefix key */
    static setPrefix(newPrefix: string): void;
    /** Initializes a storage instance. @keywords constructor storage */
    constructor(name: string, isSession?: boolean, errorCenter?: ErrorCenterInstance);
    /** Retrieves value from storage with optional cache duration and default fallback. @keywords get read storage */
    get(defaultValue?: T | (() => T), cache?: number): T | undefined;
    /** Sets a value in storage. @keywords set write storage */
    set(value?: T | (() => T)): T | undefined;
    /** Removes the item from storage. @keywords remove delete storage */
    remove(): this;
    /** Updates or reloads storage data. @keywords update refresh storage */
    update(): this;
}

/**
 * A class for working with dates.
 * @keywords date datetime calendar timezone format
 */
export declare class Datetime {
    protected watch?: (date: Date, type: GeoDate, hour24: boolean) => void;
    constructor(date?: NumberOrStringOrDate, type?: GeoDate, code?: string);
    /** Returns an object for working with formatting. */
    getIntl(): GeoIntl;
    /** Returns a Date object. */
    getDate(): Date;
    /** Returns the type of data output. */
    getType(): GeoDate;
    /** Returns the format of hours. */
    getHoursType(): GeoHours;
    /** Whether to use 24-hour time format. */
    getHour24(): boolean;
    /** Returns the time zone offset in minutes. */
    getTimeZoneOffset(): number;
    /** Returns the time zone as a string. */
    getTimeZone(style?: GeoTimeZoneStyle): string;
    /** Returns the code of the first day of the week. */
    getFirstDayCode(): GeoFirstDay;
    /** Returns the year of the specified date. */
    getYear(): number;
    /** Returns the month of the specified date (1-12). */
    getMonth(): number;
    /** Returns the day of the month (1-31). */
    getDay(): number;
    /** Returns the hour (0-23). */
    getHour(): number;
    /** Returns the minutes (0-59). */
    getMinute(): number;
    /** Returns the seconds (0-59). */
    getSecond(): number;
    /** Returns the last day of the month (28-31). */
    getMaxDay(): number;
    /** Formats date and time according to locale. */
    locale(type?: GeoDate, styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions): string;
    /** Returns the formatted year. */
    localeYear(style?: Intl.DateTimeFormatOptions['year']): string;
    /** Returns the formatted month. */
    localeMonth(style?: Intl.DateTimeFormatOptions['month']): string;
    /** Returns the formatted day. */
    localeDay(style?: Intl.DateTimeFormatOptions['day']): string;
    /** Returns the formatted hour. */
    localeHour(style?: Intl.DateTimeFormatOptions['hour']): string;
    /** Returns the formatted minute. */
    localeMinute(style?: Intl.DateTimeFormatOptions['minute']): string;
    /** Returns the formatted second. */
    localeSecond(style?: Intl.DateTimeFormatOptions['second']): string;
    /** Returns standard date format string. */
    standard(timeZone?: boolean): string;
    /** Sets the date completely. */
    setDate(value: NumberOrStringOrDate): this;
    /** Sets the type of data output. */
    setType(value: GeoDate): this;
    /** Sets whether to use 24-hour time format. */
    setHour24(value: boolean): this;
    /** Sets the location code. */
    setCode(code: string): this;
    /** Sets the update watch callback. */
    setWatch(watch: (date: Date, type: GeoDate, hour24: boolean) => void): this;
    /** Sets the full year. */
    setYear(value: number): this;
    /** Sets the month (1-12). */
    setMonth(value: number): this;
    /** Sets the day of the month. */
    setDay(value: number): this;
    /** Sets the hours. */
    setHour(value: number): this;
    /** Sets the minutes. */
    setMinute(value: number): this;
    /** Sets the seconds. */
    setSecond(value: number): this;
    /** Shifts the date by years. */
    moveByYear(value: number): this;
    /** Shifts the date by months. */
    moveByMonth(value: number): this;
    /** Shifts the date by days. */
    moveByDay(value: number): this;
    /** Shifts the date by hours. */
    moveByHour(value: number): this;
    /** Shifts the date by minutes. */
    moveByMinute(value: number): this;
    /** Shifts the date by seconds. */
    moveBySecond(value: number): this;
    /** Moves to January of the current year. */
    moveMonthFirst(): this;
    /** Moves to December of the current year. */
    moveMonthLast(): this;
    /** Moves to the first day of the next month. */
    moveMonthNext(): this;
    /** Moves to the first day of the previous month. */
    moveMonthPrevious(): this;
    /** Moves to the first day of the week. */
    moveWeekdayFirst(): this;
    /** Moves to the last day of the week. */
    moveWeekdayLast(): this;
    /** Moves to the first weekday of the month. */
    moveWeekdayFirstByMonth(): this;
    /** Moves to the last weekday of the month. */
    moveWeekdayLastByMonth(): this;
    /** Moves to the next week. */
    moveWeekdayNext(): this;
    /** Moves to the previous week. */
    moveWeekdayPrevious(): this;
    /** Moves to the first day of the month. */
    moveDayFirst(): this;
    /** Moves to the last day of the month. */
    moveDayLast(): this;
    /** Moves to the next day. */
    moveDayNext(): this;
    /** Moves to the previous day. */
    moveDayPrevious(): this;
    /** Clones the Date object. */
    clone(): Date;
    /** Clones the Datetime instance. */
    cloneClass(): Datetime;
    /** Clones and moves to the first month. */
    cloneMonthFirst(): Datetime;
    /** Clones and moves to the last month. */
    cloneMonthLast(): Datetime;
    /** Clones and moves to the next month. */
    cloneMonthNext(): Datetime;
    /** Clones and moves to the previous month. */
    cloneMonthPrevious(): Datetime;
    /** Clones and moves to the first day of the week. */
    cloneWeekdayFirst(): Datetime;
    /** Clones and moves to the last day of the week. */
    cloneWeekdayLast(): Datetime;
    /** Clones and moves to the first weekday of the month. */
    cloneWeekdayFirstByMonth(): Datetime;
    /** Clones and moves to the last weekday of the month. */
    cloneWeekdayLastByMonth(): Datetime;
    /** Clones and moves to the next week. */
    cloneWeekdayNext(): Datetime;
    /** Clones and moves to the previous week. */
    cloneWeekdayPrevious(): Datetime;
    /** Clones and moves to the first day of the month. */
    cloneDayFirst(): Datetime;
    /** Clones and moves to the last day of the month. */
    cloneDayLast(): Datetime;
    /** Clones and moves to the next day. */
    cloneDayNext(): Datetime;
    /** Clones and moves to the previous day. */
    cloneDayPrevious(): Datetime;
    protected toTimeZoneHourFormat(hour: number): string;
    protected update(): this;
}

/** Error management and storage class @keywords error center handler */
export declare class ErrorCenter {
    /** Returns request-isolated ErrorCenterInstance @keywords get item instance */
    static getItem(): ErrorCenterInstance;
    /** Checks if error cause exists @keywords has check error */
    static has(code: string, group?: string): boolean;
    /** Gets specific error cause @keywords get error cause */
    static get(code: string, group?: string): ErrorCenterCauseItem | undefined;
    /** Adds error cause @keywords add error cause */
    static add(cause: ErrorCenterCauseItem): void;
    /** Adds list of error causes @keywords add list causes */
    static addList(causes: ErrorCenterCauseList): void;
    /** Registers error handler @keywords add handler */
    static addHandler(group: ErrorCenterGroup, handler: ErrorCenterHandlerCallback): void;
    /** Registers list of error handlers @keywords add handler list */
    static addHandlerList(handlers: ErrorCenterHandlerList): void;
    /** Adds global error callback @keywords add callback */
    static addCallback(callback: ErrorCenterHandlerCallback): void;
    /** Sets console output configuration @keywords set console */
    static setIsConsole(isConsole: ErrorCenterHandlerIsConsole): void;
    /** Triggers error event handling @keywords on error */
    static on(cause: ErrorCenterCauseItem): void;
}

/** ErrorCenterHandler class for managing and triggering error handlers. @keywords error center handler */
export declare class ErrorCenterHandler {
    /** Constructor @keywords constructor error handler */
    constructor(handlers?: ErrorCenterHandlerList, isConsole?: ErrorCenterHandlerIsConsole);
    /** Checks if handlers exist for a group. @keywords has error group */
    has(group: ErrorCenterGroup): boolean;
    /** Gets handlers for a group. @keywords get error group */
    get(group: ErrorCenterGroup): ErrorCenterHandlerItem | undefined;
    /** Adds a handler for a specific group. @keywords add error handler */
    add(group: ErrorCenterGroup, handler: ErrorCenterHandlerCallback): this;
    /** Adds a list of group-based handlers. @keywords add error handler list */
    addList(handlers: ErrorCenterHandlerList): this;
    /** Adds a callback to be executed on any error. @keywords add error callback */
    addCallback(callback: ErrorCenterHandlerCallback): this;
    /** Sets console output flag or filter function. @keywords set error console */
    setIsConsole(isConsole: ErrorCenterHandlerIsConsole): this;
    /** Triggers handlers for a group and logs to console. @keywords trigger error on */
    on(cause: ErrorCenterCauseItem): this;
}

/** Manage error storage and handling within an instance @keywords error_center instance handler */
export declare class ErrorCenterInstance {
    /** @keywords constructor init */
    constructor(causes?: ErrorCenterCauseList, handler?: ErrorCenterHandler);
    /** Check if error cause exists @keywords check exists error cause */
    has(code: string, group?: string): boolean;
    /** Get specific error cause item @keywords get error cause */
    get(code: string, group?: string): ErrorCenterCauseItem | undefined;
    /** Add error cause to storage @keywords add error cause */
    add(cause: ErrorCenterCauseItem): this;
    /** Add list of error causes to storage @keywords add error cause list */
    addList(causes: ErrorCenterCauseList): this;
    /** Register new error handler @keywords add error handler */
    addHandler(group: ErrorCenterGroup, handler: ErrorCenterHandlerCallback): this;
    /** Register list of error handlers @keywords add error handler list */
    addHandlerList(handlers: ErrorCenterHandlerList): this;
    /** Add global error callback @keywords add error callback */
    addCallback(callback: ErrorCenterHandlerCallback): this;
    /** Set console output option @keywords set console output */
    setIsConsole(isConsole: ErrorCenterHandlerIsConsole): this;
    /** Trigger error handling @keywords trigger handle error */
    on(cause: ErrorCenterCauseItem): this;
    /** Merge cause with stored data @keywords assign merge error cause */
    protected assign(cause: ErrorCenterCauseItem): ErrorCenterCauseItem;
}

/**
 * Advanced wrapper for managing event listeners on DOM elements or window.
 * @keywords event_item dom_events event_listener resize scroll
 */
export declare class EventItem<E extends ElementOrWindow, O extends Event, D extends Record<string, any> = Record<string, any>> {
    /** Event listener callback wrapper */
    protected listenerRecent: (event?: O | ResizeObserverEntry) => void;
    /**
     * Create an EventItem instance.
     * @keywords constructor
     */
    constructor(elementSelector?: ElementOrString<E>, type?: string | string[], listener?: EventListenerDetail<O, D> | undefined, options?: EventOptions, detail?: D | undefined);
    /** Check whether event listening is currently enabled @keywords is_active */
    isActive(): boolean;
    /** Return the target element @keywords get_element */
    getElement(): E | undefined;
    /** Change of an element for tracking @keywords set_element */
    setElement(elementSelector?: ElementOrString<E>): this;
    /** Modify the control element for DOM safety checks @keywords set_element_control */
    setElementControl<EC extends HTMLElement>(elementSelector?: ElementOrString<EC>): this;
    /** Change the type of the handled event @keywords set_type */
    setType(type: string | string[]): this;
    /** Modify the listener function @keywords set_listener */
    setListener(listener: EventListenerDetail<O, D>): this;
    /** Modify the options object that defines event listener characteristics @keywords set_options */
    setOptions(options?: EventOptions): this;
    /** Modify additional data provided to the listener @keywords set_detail */
    setDetail(detail?: D): this;
    /** Trigger events on the target element @keywords dispatch custom_event */
    dispatch(detail?: D | undefined): this;
    /** Start event listening @keywords start */
    start(): this;
    /** Stop event listening @keywords stop */
    stop(): this;
    /** Toggle event handler state @keywords toggle */
    toggle(activity: boolean): this;
    /** Reset listening events @keywords reset */
    reset(): this;
    /** Check if ResizeObserver exists @keywords is_observer */
    protected isObserver(): boolean;
    /** Implementation of resize event @keywords make_resize */
    protected makeResize(): boolean;
    /** Implementation of scroll event @keywords make_scroll */
    protected makeScroll(): boolean;
}

/** @keywords formatters, format_data, formatting */
export declare class Formatters<Options extends FormattersOptionsList = FormattersOptionsList, List extends FormattersListProp = FormattersListProp, Item extends FormattersItemProp<List> = FormattersItemProp<List>> {
	/** @keywords constructor, init */
	constructor(options: Options, list?: List | undefined);
	/** @keywords is, check, exists */
	is(): boolean;
	/** @keywords is_array, check */
	isArray(): this is this & {
		list: FormattersList<Item>;
	};
	/** @keywords length, count */
	length(): number;
	/** @keywords get_list, array */
	getList(): FormattersList<Item>;
	/** @keywords get_options, config */
	getOptions(): Options;
	/** @keywords set_list, update */
	setList(list?: List): this;
	/** @keywords to, format, transform */
	to(): FormattersReturn<List, Options>;
	/** @keywords get_format_data, record */
	protected getFormatData(item: Item): Record<string, string>;
	/** @keywords transformation, format */
	protected transformation<Type extends FormattersType>(valueOriginal: any, item: any, type?: Type, options?: FormattersOptionsInformation<Type>): string;
	/** @keywords format_currency, money */
	protected formatCurrency(value: any, item: Item, options?: FormattersOptionsCurrency): string;
	/** @keywords format_date, time */
	protected formatDate(value: any, options?: FormattersOptionsDate): string;
	/** @keywords format_name, person */
	protected formatName(item: Item, options?: FormattersOptionsName): string;
	/** @keywords format_number, digit */
	protected formatNumber(value: any, options?: FormattersOptionsNumber): string;
	/** @keywords format_plural, words */
	protected formatPlural(value: any, options?: FormattersOptionsPlural): string;
	/** @keywords format_unit, measurement */
	protected formatUnit(value: any, options?: FormattersOptionsUnit): string;
}

/** @keywords Geo, localization, country, timezone, language */
export declare class Geo {
    /** @keywords getObject, instance */
    static getObject(): GeoItemInstance;
    /** @keywords get, current, geo */
    static get(): GeoItemFull;
    /** @keywords getCountry, country */
    static getCountry(): string;
    /** @keywords getLanguage, language */
    static getLanguage(): string;
    /** @keywords getStandard, standard, locale */
    static getStandard(): string;
    /** @keywords getFirstDay, week */
    static getFirstDay(): string;
    /** @keywords getLocation, location */
    static getLocation(): string;
    /** @keywords getLocationCountry, country */
    static getLocationCountry(): string;
    /** @keywords getLocationLanguage, language */
    static getLocationLanguage(): string;
    /** @keywords getItem, geo */
    static getItem(): GeoItemFull;
    /** @keywords getList, countries, regions */
    static getList(): GeoItem[];
    /** @keywords getByCode, geo */
    static getByCode(code?: string): GeoItemFull;
    /** @keywords getByCodeFull, locale */
    static getByCodeFull(code: string): GeoItem | undefined;
    /** @keywords getByCountry, country */
    static getByCountry(country: string): GeoItem | undefined;
    /** @keywords getByLanguage, language */
    static getByLanguage(language: string): GeoItem | undefined;
    /** @keywords getTimezone, timezone */
    static getTimezone(): number;
    /** @keywords getTimezoneFormat, timezone */
    static getTimezoneFormat(): string;
    /** @keywords find, geo */
    static find(code: string): GeoItemFull;
    /** @keywords toStandard, geo */
    static toStandard(item: GeoItem): string;
    /** @keywords set, location */
    static set(code: string, save?: boolean): void;
    /** @keywords setTimezone, timezone */
    static setTimezone(timezone: number): void;
    /** @keywords setValueDefault, default */
    static setValueDefault(code?: string | (() => string)): void;
}

export declare const GEO_FLAG_ICON_NAME = "f";
/** GeoFlag helper for country codes and flag icons. @keywords geo, flag, country, language */
export declare class GeoFlag {
    /** @keywords constructor */
    constructor(code?: string);
    /** Gets country item and flag. @keywords get, flag, country */
    get(code?: string): GeoFlagItem | undefined;
    /** Gets language item and flag. @keywords get, language, flag */
    getLanguage(code?: string): GeoFlagItem | undefined;
    /** Gets current flag code. @keywords get, code */
    getCode(): string;
    /** Gets flag icon name. @keywords get, flag, icon */
    getFlag(code?: string): string | undefined;
    /** Gets country list. @keywords get, list, country */
    getList(codes?: string[], sort?: boolean): GeoFlagItem[];
    /** Gets language list. @keywords get, list, language */
    getListLanguage(codes?: string[], sort?: boolean): GeoFlagItem[];
    /** Gets national country list. @keywords get, national, country */
    getNational(codes?: string[], sort?: boolean): GeoFlagNational[];
    /** Gets national language list. @keywords get, national, language */
    getNationalLanguage(codes?: string[], sort?: boolean): GeoFlagNational[];
    /** Sets current code. @keywords set, code */
    setCode(code: string): this;
    /** Gets GeoIntl instance. @keywords get, location, intl */
    protected getLocation(): GeoIntl;
    /** Gets codes array. @keywords get, codes */
    protected getCodes(codes?: string[]): string[];
    /** Gets language name. @keywords get, language, name */
    protected getLanguageName(data: GeoItemFull): string;
    /** Gets country name. @keywords get, country, name */
    protected getCountry(data: GeoItemFull): string;
}

export declare const UI_GEO_COOKIE_KEY = "ui-geo-code";
/**
 * Base class for working with geographic data.
 * @keywords geo location country language timezone
 */
export declare class GeoInstance {
    /**
     * Initializes the location and related data.
     * @keywords constructor geo instance
     */
    constructor();
    /**
     * Getting information about the current country.
     * @keywords get geo item
     */
    get(): GeoItemFull;
    /**
     * Getting the current country code.
     * @keywords get country code
     */
    getCountry(): string;
    /**
     * Getting the current language code.
     * @keywords get language code
     */
    getLanguage(): string;
    /**
     * Getting the full format according to the standard (language-country).
     * @keywords get standard string
     */
    getStandard(): string;
    /**
     * Getting the first day of the week for the current country.
     * @keywords get first day week
     */
    getFirstDay(): string;
    /**
     * Getting the current location string.
     * @keywords get location string
     */
    getLocation(): string;
    /**
     * Getting the country code from the location.
     * @keywords get location country
     */
    getLocationCountry(): string;
    /**
     * Getting the language code from the location.
     * @keywords get location language
     */
    getLocationLanguage(): string;
    /**
     * Getting processed data including the current language.
     * @keywords get geo item full
     */
    getItem(): GeoItemFull;
    /**
     * Returns the full list of available countries.
     * @keywords get list countries
     */
    getList(): GeoItem[];
    /**
     * Returns data about the country by its code.
     * @keywords get by code geo
     */
    getByCode(code?: string): GeoItemFull;
    /**
     * Returns full data by language and country combination.
     * @keywords get by code full
     */
    getByCodeFull(code: string): GeoItem | undefined;
    /**
     * Returns full data by country code.
     * @keywords get by country
     */
    getByCountry(country: string): GeoItem | undefined;
    /**
     * Returns full data by language code.
     * @keywords get by language
     */
    getByLanguage(language: string): GeoItem | undefined;
    /**
     * Returns the current time zone offset in minutes.
     * @keywords get timezone offset
     */
    getTimezone(): number;
    /**
     * Returns the current time zone offset in a formatted string.
     * @keywords get timezone format
     */
    getTimezoneFormat(): string;
    /**
     * Finds the country data by its code or name.
     * @keywords find geo
     */
    find(code: string): GeoItemFull;
    /**
     * Converts a geo item to its standard string representation.
     * @keywords to standard geo
     */
    toStandard(item: GeoItem, language?: string): string;
    /**
     * Updates the current location and related data.
     * @keywords set geo location
     */
    set(code: string, save?: boolean): void;
    /**
     * Updates the default time zone offset.
     * @keywords set timezone
     */
    setTimezone(timezone: number): void;
    /**
     * Sets the default value for the country code.
     * @keywords set value default
     */
    setValueDefault(code?: string | (() => string)): void;
}

/** Intl internationalization and localization helper class. @keywords geo, intl, format, locale */
export declare class GeoIntl {
    /** Checks if an instance exists for the specified country code. @keywords geo, intl, check */
    static isItem(code?: string): boolean;
    /** Returns the standard location code. @keywords geo, intl, location */
    static getLocation(code?: string): string;
    /** Returns an instance of the class for the specified country code. @keywords geo, intl, instance */
    static getInstance(code?: string): GeoIntl;
    constructor(code?: string, errorCenter?: ErrorCenterInstance);
    /** Returns the location code. @keywords intl, location */
    getLocation(): string;
    /** Returns the first day of the week. @keywords intl, first_day, calendar */
    getFirstDay(): string;
    /** Translates language, region, and script display names. @keywords intl, display, name */
    display(value?: string, typeOptions?: Intl.DisplayNamesOptions['type'] | Intl.DisplayNamesOptions): string;
    /** Get display names of language. @keywords intl, language, name */
    languageName(value?: string, style?: Intl.RelativeTimeFormatStyle): string;
    /** Get display names of region. @keywords intl, country, region, name */
    countryName(value?: string, style?: Intl.RelativeTimeFormatStyle): string;
    /** Returns a string containing the full name in a specific format. @keywords intl, full_name, person */
    fullName(last: string, first: string, surname?: string, short?: boolean): string;
    /** Formats a number using locale options. @keywords intl, number, format */
    number(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Returns the decimal point symbol. @keywords intl, decimal, symbol */
    decimal(): string;
    /** Formats a currency value. @keywords intl, currency, money */
    currency(value: NumberOrString, currencyOptions?: string | Intl.NumberFormatOptions, numberOnly?: boolean): string;
    /** Returns the currency symbol or code. @keywords intl, currency, symbol */
    currencySymbol(currency: string, currencyDisplay?: keyof Intl.NumberFormatOptionsCurrencyDisplayRegistry): string;
    /** Formats a unit value. @keywords intl, unit, format */
    unit(value: NumberOrString, unitOptions?: string | Intl.NumberFormatOptions): string;
    /** Formats a file size value. @keywords intl, file_size, unit */
    sizeFile(value: NumberOrString, unitOptions?: 'byte' | 'kilobyte' | 'megabyte' | 'gigabyte' | 'terabyte' | 'petabyte' | Intl.NumberFormatOptions): string;
    /** Formats a number as a percentage. @keywords intl, percent, number */
    percent(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats a number as a percentage by 100. @keywords intl, percent, number */
    percentBy100(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats text with plural rules and language specifics. @keywords intl, plural, rules */
    plural(value: NumberOrString, words: string, options?: Intl.PluralRulesOptions, optionsNumber?: Intl.NumberFormatOptions): string;
    /** Formats date and time. @keywords intl, date, time, format */
    date(value: NumberOrStringOrDate, type?: GeoDate, styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions, hour24?: boolean): string;
    /** Formats relative time. @keywords intl, relative, time */
    relative(value: NumberOrStringOrDate, styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions, todayValue?: Date): string;
    /** Formats relative time with a limit fallback to standard date. @keywords intl, relative, limit, date */
    relativeLimit(value: NumberOrStringOrDate, limit: number, todayValue?: Date, relativeOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions, dateOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions, type?: GeoDate, hour24?: boolean): string;
    /** Formats relative time by numerical value and unit. @keywords intl, relative, value, unit */
    relativeByValue(value: NumberOrString, unit: Intl.RelativeTimeFormatUnit, styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions): string;
    /** Returns the formatted name of a month. @keywords intl, month, name */
    month(value?: NumberOrStringOrDate, style?: Intl.DateTimeFormatOptions['month']): string;
    /** Returns an array of months. @keywords intl, months, list */
    months(style?: Intl.DateTimeFormatOptions['month']): ItemValue<number | undefined>[];
    /** Returns the formatted name of a weekday. @keywords intl, weekday, name */
    weekday(value?: NumberOrStringOrDate, style?: Intl.DateTimeFormatOptions['weekday']): string;
    /** Returns an array of weekdays. @keywords intl, weekdays, list */
    weekdays(style?: Intl.DateTimeFormatOptions['weekday']): ItemValue<number | undefined>[];
    /** Formats time. @keywords intl, time, format */
    time(value: NumberOrStringOrDate): string;
    /** Sorts an array of items considering locale rules. @keywords intl, sort, collator */
    sort<T>(data: T[], compareFn?: (a: T, b: T) => [string, string]): T[];
}

/** Stores and processes phone number masks @keywords geophone phone mask country code */
export declare class GeoPhone {
    /** Retrieves phone info by country code @keywords get phone info country */
    static get(code: string): GeoPhoneValue | undefined;
    /** Retrieves phone info by phone number @keywords get by phone number */
    static getByPhone(phone: string): GeoPhoneMapInfo;
    /** Retrieves mask data by country code @keywords get by code country */
    static getByCode(code: string): GeoPhoneMap | undefined;
    /** Retrieves list of all phone values @keywords get list phone values */
    static getList(): GeoPhoneValue[];
    /** Retrieves tree map sorted by code @keywords get map tree */
    static getMap(): Record<string, GeoPhoneMap>;
    /** Converts number to phone mask @keywords to mask format */
    static toMask(phone: string, masks?: string[]): string | undefined;
    /** Removes country code from phone number @keywords remove zero prefix */
    static removeZero(phone: string): string;
}

/**
 * Class for localized unit formatting and automatic conversions.
 * @keywords geo unit format convert metric imperial
 */
export declare class GeoUnit {
    /** Returns a request-isolated instance of GeoUnit or cached instance. @keywords get instance geo unit */
    static getInstance(code?: string): GeoUnit;
    /** Constructor. @keywords constructor geo unit */
    constructor(code?: string);
    /** Returns the standard location code. @keywords get location standard */
    getLocation(): string;
    /** Formats millimeter value, converting to inches if overridden by locale unit settings. @keywords format millimeter inch */
    millimeter(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats centimeter value, converting to inches if overridden by locale unit settings. @keywords format centimeter inch */
    centimeter(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats meter value, converting to feet if overridden by locale unit settings. @keywords format meter foot */
    meter(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats kilometer value, converting to miles if overridden by locale unit settings. @keywords format kilometer mile */
    kilometer(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats square meter value, converting to square feet if overridden by locale unit settings. @keywords format square meter foot */
    squareMeter(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats hectare value, converting to acres if overridden by locale unit settings. @keywords format hectare acre */
    hectare(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats gram value, converting to ounces if overridden by locale unit settings. @keywords format gram ounce */
    gram(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats kilogram value, converting to pounds if overridden by locale unit settings. @keywords format kilogram pound */
    kilogram(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats tonne value, converting to short tons if overridden by locale unit settings. @keywords format tonne ton */
    tonne(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats milliliter value, converting to fluid ounces if overridden by locale unit settings. @keywords format milliliter fluid ounce */
    milliliter(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats liter value, converting to gallons if overridden by locale unit settings. @keywords format liter gallon */
    liter(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats celsius value, converting to fahrenheit if overridden by locale unit settings. @keywords format celsius fahrenheit temperature */
    celsius(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats kilometer per hour value, converting to miles per hour if overridden by locale unit settings. @keywords format speed kmh mph */
    kilometerPerHour(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats the value for the specified unit, converting and formatting it according to the locale. @keywords format unit value */
    format(value: NumberOrString, unit: string, options?: Intl.NumberFormatOptions): string;
}

/** Static utility class for storing application-wide global data. @keywords global, storage, data */
export declare class Global {
	/** Returns the global data store instance. @keywords get, item, store */
	static getItem(): Record<string, any>;
	/** Returns a value by name. @keywords get, property, value */
	static get<R = any>(name: string): R;
	/** Adds global data once. @keywords add, data, set */
	static add(data: Record<string, any>): void;
}

/** Static class for working with URL hash data. @keywords hash, url, parameters, state */
export declare class Hash {
    /** Returns HashInstance item. @keywords get, instance, item */
    static getItem(): HashInstance;
    /** Gets value by name from hash. @keywords get, read, value */
    static get<T>(name: string, defaultValue?: T | (() => T)): T;
    /** Sets value by name in hash. @keywords set, write, update */
    static set<T>(name: string, callback: T | (() => T)): void;
    /** Adds watch callback for hash property. @keywords watch, event, listener, add */
    static addWatch<T>(name: string, callback: (value: T) => void): void;
    /** Removes watch callback for hash property. @keywords watch, event, listener, remove */
    static removeWatch<T>(name: string, callback: (value: T) => void): void;
    /** Reloads hash state. @keywords reload, refresh, update */
    static reload(): void;
}

import { UrlInstanceAbstract } from "@dxtmisha/media";

/** Class for working with URL hash data. @keywords hash, url, instance */
export declare class HashInstance extends UrlInstanceAbstract {
    /** Initializes hash data and registers hashchange listener. @keywords init, hash */
    protected init(): this;
    /** Obtains data from the URL hash string. @keywords get, location, hash */
    protected getLocation(): Record<string, any>;
    /** Updates the hash string in the URL. @keywords update, hash */
    protected update(): this;
}

/** @keywords icon item type */
export type IconsItem = string | Promise<string | any> | (() => Promise<string | any>);

/** @keywords icon configuration */
export type IconsConfig = {
    url?: string;
    list?: Record<string, IconsItem>;
};

/** @keywords icons manager, svg */
export declare class Icons {
    /** @keywords check icon existence */
    static is(index: string): boolean;
    /** @keywords get icon value or promise */
    static get(index: string, url?: string, wait?: number): Promise<string>;
    /** @keywords get icon async */
    static getAsync(index: string, url?: string): string;
    /** @keywords get icon name list */
    static getNameList(): string[];
    /** @keywords get global url */
    static getUrlGlobal(): string;
    /** @keywords add icon */
    static add(index: string, file: IconsItem): void;
    /** @keywords add icon load */
    static addLoad(index: string): void;
    /** @keywords add global icon */
    static addGlobal(index: string, file: string): void;
    /** @keywords add icons by list */
    static addByList(list: Record<string, IconsItem>): void;
    /** @keywords set icons url */
    static setUrl(url: string): void;
    /** @keywords set icons config */
    static setConfig(config: IconsConfig): void;
}

/** Class for working with global loading. @keywords loading loader global */
export declare class Loading {
    /** Check if the loader is active. @keywords loading active check */
    static is(): boolean;
    /** Get current loading value. @keywords loading get count */
    static get(): number;
    /** Get LoadingInstance item. @keywords loading instance item */
    static getItem(): LoadingInstance;
    /** Show the loader. @keywords loading show start */
    static show(): void;
    /** Hide the loader. @keywords loading hide stop */
    static hide(): void;
    /** Register loading event. @keywords loading event register */
    static registrationEvent(listener: EventListenerDetail<CustomEvent, LoadingDetail>, element?: ElementOrString<HTMLElement>): void;
    /** Unregister loading event. @keywords loading event unregister */
    static unregistrationEvent(listener: EventListenerDetail<CustomEvent, LoadingDetail>, element?: ElementOrString<HTMLElement>): void;
}

export type LoadingDetail = {
    loading: boolean;
};
export type LoadingRegistrationItem = {
    item: EventItem<Window, CustomEvent, LoadingDetail>;
    listener: EventListenerDetail<CustomEvent, LoadingDetail>;
    element?: ElementOrString<HTMLElement>;
};
/** Loading instance manager class @keywords loading, loader, spinner, global */
export declare class LoadingInstance {
    /** Create loading instance @keywords constructor, init */
    constructor(eventName?: string);
    /** Check if loading is active @keywords is, active, check */
    is(): boolean;
    /** Get current loading counter value @keywords get, count, value */
    get(): number;
    /** Show loading indicator @keywords show, start, loading */
    show(): void;
    /** Hide loading indicator @keywords hide, stop, loading */
    hide(): void;
    /** Register loading event listener @keywords register, event, listener */
    registrationEvent(listener: EventListenerDetail<CustomEvent, LoadingDetail>, element?: ElementOrString<HTMLElement>): void;
    /** Unregister loading event listener @keywords unregister, remove, event */
    unregistrationEvent(listener: EventListenerDetail<CustomEvent, LoadingDetail>, element?: ElementOrString<HTMLElement>): void;
}

/** Unified class for managing all types of meta tags. @keywords meta, seo, openGraph, twitter */
export declare class Meta extends MetaManager<MetaTag[]> {
    /** Creates an instance of Meta with integrated Open Graph and Twitter Card support. @keywords meta, constructor */
    constructor();
    /** Gets the MetaOg instance for advanced Open Graph operations. @keywords og, openGraph */
    getOg(): MetaOg;
    /** Gets the MetaTwitter instance for advanced Twitter Card operations. @keywords twitter, card */
    getTwitter(): MetaTwitter;
    /** Gets the page title without suffix. @keywords title, get */
    getTitle(): string;
    /** Gets the keywords meta tag. @keywords keywords, seo */
    getKeywords(): string;
    /** Gets the description meta tag. @keywords description, seo */
    getDescription(): string;
    /** Gets the Open Graph image URL. @keywords image, og */
    getImage(): string;
    /** Gets the canonical URL. @keywords canonical, url */
    getCanonical(): string;
    /** Gets the robots meta tag value. @keywords robots, index */
    getRobots(): MetaRobots;
    /** Gets the author meta tag. @keywords author, meta */
    getAuthor(): string;
    /** Gets the Open Graph site name. @keywords siteName, og */
    getSiteName(): string;
    /** Gets the Open Graph locale. @keywords locale, og */
    getLocale(): string;
    /** Sets the page title (with suffix) and updates Open Graph and Twitter Card titles. @keywords title, set */
    setTitle(title: string): this;
    /** Sets the keywords meta tag. @keywords keywords, set */
    setKeywords(keywords: string | string[]): this;
    /** Sets the description meta tag. @keywords description, set */
    setDescription(description: string): this;
    /** Sets the image for Open Graph and Twitter Card. @keywords image, set */
    setImage(image: string): this;
    /** Sets the canonical URL and updates Open Graph and Twitter Card URLs. @keywords canonical, set */
    setCanonical(canonical: string): this;
    /** Sets the robots meta tag. @keywords robots, set */
    setRobots(robots: MetaRobots): this;
    /** Sets the author meta tag. @keywords author, set */
    setAuthor(author: string): this;
    /** Sets the site name for Open Graph and Twitter Card. @keywords siteName, set */
    setSiteName(siteName: string): this;
    /** Sets the locale for Open Graph. @keywords locale, set */
    setLocale(locale: string): this;
    /** Sets the suffix to append to page title. @keywords suffix, title */
    setSuffix(suffix?: string): void;
    /** Generates the complete HTML for all meta-tags including Open Graph and Twitter Card. @keywords html, render */
    html(): string;
    /** Generates the title as an HTML-safe string. @keywords html, title */
    htmlTitle(): string;
}

type MetaList<T extends readonly string[]> = {
    [K in T[number]]?: string;
};
/** @keywords MetaManager meta tags management */
export declare class MetaManager<T extends readonly string[], Key extends keyof MetaList<T> = keyof MetaList<T>> {
    /** @keywords constructor MetaManager */
    constructor(listMeta: T, isProperty?: boolean);
    /** @keywords getListMeta meta list */
    getListMeta(): T;
    /** @keywords get meta value */
    get(name: Key): string;
    /** @keywords getItems all meta tags */
    getItems(): MetaList<T>;
    /** @keywords html render meta tags */
    html(): string;
    /** @keywords set meta value */
    set(name: Key, content: string): this;
    /** @keywords setByList multiple meta tags */
    setByList(metaList: MetaList<T>): this;
}
export {};

export declare class MetaOg extends MetaManager<MetaOpenGraphTag[]> {
    /** Creates MetaOg instance. @keywords constructor, open, graph */
    constructor();
    /** Gets the Open Graph title. @keywords get, title, og */
    getTitle(): string;
    /** Gets the Open Graph type. @keywords get, type, og */
    getType(): MetaOpenGraphType;
    /** Gets the Open Graph URL. @keywords get, url, og */
    getUrl(): string;
    /** Gets the Open Graph image URL. @keywords get, image, og */
    getImage(): string;
    /** Gets the Open Graph description. @keywords get, description, og */
    getDescription(): string;
    /** Gets the Open Graph locale. @keywords get, locale, og */
    getLocale(): string;
    /** Gets the Open Graph site name. @keywords get, site, name, og */
    getSiteName(): string;
    /** Sets the Open Graph title. @keywords set, title, og */
    setTitle(title: string): this;
    /** Sets the Open Graph type. @keywords set, type, og */
    setType(type: MetaOpenGraphType): this;
    /** Sets the Open Graph URL. @keywords set, url, og */
    setUrl(url: string): this;
    /** Sets the Open Graph image URL. @keywords set, image, og */
    setImage(url: string): this;
    /** Sets the Open Graph description. @keywords set, description, og */
    setDescription(description: string): this;
    /** Sets the Open Graph locale. @keywords set, locale, og */
    setLocale(locale: string): this;
    /** Sets the Open Graph site name. @keywords set, site, name, og */
    setSiteName(siteName: string): this;
}

/** Static class for managing page meta tags @keywords meta static manager tags */
export declare class MetaStatic {
    /** Gets singleton instance @keywords meta singleton item */
    static getItem(): At;
    /** Gets Open Graph instance @keywords meta og get */
    static getOg(): Ot;
    /** Gets Twitter Card instance @keywords meta twitter get */
    static getTwitter(): kt;
    /** Gets page title @keywords meta title get */
    static getTitle(): string;
    /** Gets meta keywords @keywords meta keywords get */
    static getKeywords(): string;
    /** Gets meta description @keywords meta description get */
    static getDescription(): string;
    /** Gets image URL @keywords meta image get */
    static getImage(): string;
    /** Gets canonical URL @keywords meta canonical get */
    static getCanonical(): string;
    /** Gets robots directive @keywords meta robots get */
    static getRobots(): MetaRobots;
    /** Gets author name @keywords meta author get */
    static getAuthor(): string;
    /** Gets site name @keywords meta sitename get */
    static getSiteName(): string;
    /** Gets locale @keywords meta locale get */
    static getLocale(): string;
    /** Sets page title @keywords meta title set */
    static setTitle(e: string): typeof MetaStatic;
    /** Sets meta keywords @keywords meta keywords set */
    static setKeywords(e: string | string[]): typeof MetaStatic;
    /** Sets meta description @keywords meta description set */
    static setDescription(e: string): typeof MetaStatic;
    /** Sets image URL @keywords meta image set */
    static setImage(e: string): typeof MetaStatic;
    /** Sets canonical URL @keywords meta canonical set */
    static setCanonical(e: string): typeof MetaStatic;
    /** Sets robots directive @keywords meta robots set */
    static setRobots(e: MetaRobots): typeof MetaStatic;
    /** Sets author name @keywords meta author set */
    static setAuthor(e: string): typeof MetaStatic;
    /** Sets site name @keywords meta sitename set */
    static setSiteName(e: string): typeof MetaStatic;
    /** Sets locale @keywords meta locale set */
    static setLocale(e: string): typeof MetaStatic;
    /** Sets title suffix @keywords meta suffix set */
    static setSuffix(e?: string): typeof MetaStatic;
    /** Generates meta tags HTML @keywords meta html generate */
    static html(): string;
    /** Generates safe title HTML @keywords meta title html */
    static htmlTitle(): string;
}

/** Manage Twitter Card meta tags @keywords meta twitter card tags */
export declare class MetaTwitter extends MetaManager<MetaTwitterTag[]> {
	/** Initialize MetaTwitter instance @keywords constructor create */
	constructor();
	/** Get Twitter Card type @keywords get card type */
	getCard(): MetaTwitterCard;
	/** Get website or brand username @keywords get site username */
	getSite(): string;
	/** Get content creator username @keywords get creator username */
	getCreator(): string;
	/** Get page URL @keywords get url */
	getUrl(): string;
	/** Get card title @keywords get title */
	getTitle(): string;
	/** Get card description @keywords get description */
	getDescription(): string;
	/** Get card image URL @keywords get image */
	getImage(): string;
	/** Set Twitter Card type @keywords set card type */
	setCard(card: MetaTwitterCard): this;
	/** Set website or brand username @keywords set site username */
	setSite(site: string): this;
	/** Set content creator username @keywords set creator username */
	setCreator(creator: string): this;
	/** Set page URL @keywords set url */
	setUrl(url: string): this;
	/** Set card title @keywords set title */
	setTitle(title: string): this;
	/** Set card description @keywords set description */
	setDescription(description: string): this;
	/** Set card image URL @keywords set image */
	setImage(image: string): this;
}

/** Static class for working with URL query parameters. @keywords query, url, parameters, search */
export declare class Query {
    /** Returns the QueryInstance item. @keywords query, instance, storage */
    static getItem(): QueryInstance;
    /** Gets data from query parameters. @keywords query, get, read */
    static get<T>(name: string, defaultValue?: T | (() => T)): T;
    /** Sets data in query parameters. @keywords query, set, update */
    static set<T>(name: string, callback: T | (() => T)): void;
    /** Adds a change watcher for query parameters. @keywords query, watch, event */
    static addWatch<T>(name: string, callback: (value: T) => void): void;
    /** Removes a change watcher. @keywords query, unwatch, remove */
    static removeWatch<T>(name: string, callback: (value: T) => void): void;
    /** Reloads query data from URL. @keywords query, reload, refresh */
    static reload(): void;
}

/** Class for working with data stored in URL query parameters. @keywords query, url, search_params */
export declare class QueryInstance extends UrlInstanceAbstract {
    /** Initializes query data and registers popstate listener. @keywords init, query, popstate */
    protected init(): this;
    /** Obtains data from the URL string. @keywords get, location, query */
    protected getLocation(): Record<string, any>;
    /** Updates query string in URL. @keywords update, url, query */
    protected update(): this;
}

/** Timer that can be paused and resumed @keywords timer resumable pause resume delay */
export declare class ResumableTimer {
    /** Creates a resumable timer */
    constructor(callback: FunctionVoid, delay?: number, blockStart?: boolean);
    /** Resumes the timer @keywords resume start timer */
    resume(): this;
    /** Pauses the timer @keywords pause timer */
    pause(): this;
    /** Resets and restarts the timer @keywords reset restart */
    reset(): this;
    /** Clears the timer and resets state @keywords clear */
    clear(): this;
    /** Gets the remaining time */
    protected getRemaining(): number;
    /** Gets the start time */
    protected getStartTime(): number;
    /** Executes the callback */
    protected go(): this;
    /** Updates the remaining time */
    protected updateRemaining(): this;
    /** Updates the start time */
    protected updateStartTime(): this;
    /** Stops the timer */
    protected stop(): this;
}

/** Scrollbar width helper utility @keywords scrollbar, width, scroll */
export declare class ScrollbarWidth {
    /** Checks whether to enable scroll hiding @keywords scrollbar, hide, check */
    static is(): Promise<boolean>;
    /** Returns the width of the scroll @keywords scrollbar, width, size */
    static get(): Promise<number>;
    /** Returns the storage for scroll width @keywords scrollbar, storage */
    static getStorage(): DataStorage<number>;
    /** Returns the calculation flag @keywords scrollbar, calculate, state */
    static getCalculate(): boolean;
    /** Creates elements to check the width of the scroll @keywords scrollbar, element, create */
    static createElement(): HTMLElement | void;
}

/**
 * Manages searchable list with options, state, and matching logic.
 * @keywords search, list, filter, match
 */
export declare class SearchList<T extends SearchItem, K extends SearchColumns<T>> {
    /** @keywords constructor, init */
    constructor(list: SearchListValue<T>, columns?: K, value?: string, options?: SearchOptions);
    /** Retrieves search data management instance. @keywords get, data */
    getData(): SearchListData<T, K>;
    /** Retrieves current items list. @keywords get, list */
    getList(): SearchListValue<T>;
    /** Retrieves current search columns. @keywords get, columns */
    getColumns(): K | undefined;
    /** Retrieves search item instance. @keywords get, item */
    getItem(): SearchListItem;
    /** Retrieves current search value string. @keywords get, value */
    getValue(): string | undefined;
    /** Retrieves search options instance. @keywords get, options */
    getOptions(): SearchListOptions;
    /** Updates item list and resets cache. @keywords set, list */
    setList(list: SearchListValue<T>): this;
    /** Updates search columns and resets cache. @keywords set, columns */
    setColumns(columns?: K): this;
    /** Updates search value and matcher. @keywords set, value */
    setValue(value?: string): this;
    /** Updates search options and matcher. @keywords set, options */
    setOptions(options: SearchOptions): this;
    /** Processes and formats items based on search state. @keywords process, format, to */
    to(): SearchFormatList<T, K>;
    /** Processes item when search is active. @keywords callback, selection */
    protected readonly callbackToSelection: (item: SearchCacheItem<T>["item"], value: SearchCacheItem<T>["value"]) => SearchFormatItem<T, K> | undefined;
    /** Processes item when search is inactive. @keywords callback, none */
    protected readonly callbackToNone: (item: SearchCacheItem<T>["item"]) => SearchFormatItem<T, K>;
}

/** @keywords search list data cache format */
export declare class SearchListData<T extends SearchItem, K extends SearchColumns<T>> {
    /** @keywords constructor init */
    constructor(list: SearchListValue<T>, columns: K | undefined, item: SearchListItem, options: SearchListOptions);
    /** @keywords check ready */
    is(): this is this & {
        list: T[];
        columns: string[];
    };
    /** @keywords check list */
    isList(): this is this & {
        list: T[];
    };
    /** @keywords get list */
    getList(): SearchListValue<T>;
    /** @keywords get columns */
    getColumns(): K | undefined;
    /** @keywords get cache */
    protected getCache(): SearchCache<T>;
    /** @keywords set list */
    setList(list: SearchListValue<T>): this;
    /** @keywords set columns */
    setColumns(columns?: SearchColumns<T>): this;
    /** @keywords find cache item */
    findCacheItem(item: T): SearchCacheItem<T> | undefined;
    /** @keywords iterate foreach */
    forEach(callback: (item: SearchCacheItem<T>['item'], value: SearchCacheItem<T>['value']) => SearchFormatItem<T, K> | undefined): SearchFormatList<T, K>;
    /** @keywords format item */
    toFormatItem(item: T, selection: boolean): SearchFormatItem<T, K>;
    /** @keywords get column name */
    protected getColumnName(column: string): string;
    /** @keywords add tag highlight */
    protected addTag(value: any): string;
    /** @keywords generate cache */
    protected generateCache(): SearchCache<T>;
    /** @keywords init cache */
    protected initCache(): void;
    /** @keywords reset cache */
    protected resetCache(): void;
}

/** Search item value and state @keywords search_item, value */
export declare class SearchListItem {
    /** Creates SearchListItem @keywords constructor, init */
    constructor(value: string | undefined, options: SearchListOptions);
    /** Checks if value is filled @keywords check, exists */
    is(): this is this & {
        value: string;
    };
    /** Checks if search length meets limit @keywords search, limit */
    isSearch(): boolean;
    /** Returns current search value @keywords get, value */
    get(): string;
    /** Sets new search value @keywords set, value */
    set(value?: string): this;
}

/** Matches search values against dataset using regex. @keywords search list matcher filter regex */
export declare class SearchListMatcher {
    /** Creates a search list matcher instance. */
    constructor(item: SearchListItem, options: SearchListOptions);
    /** Checks if the matcher is initialized. */
    is(): boolean;
    /** Checks if value matches search expression. */
    isSelection(value: SearchCacheItem<any>['value']): boolean;
    /** Returns current regular expression matcher. */
    get(): RegExp | undefined;
    /** Updates matcher based on current item and options. */
    update(): void;
    /** Initializes or resets regular expression matcher. */
    protected initMatcher(): void;
}

/** Manage search list options @keywords search_list_options search_options */
export declare class SearchListOptions {
    /** @keywords constructor search_list_options */
    constructor(options?: SearchOptions | undefined);
    /** Get current search options @keywords get_options search_options */
    getOptions(): SearchOptions;
    /** Get minimum character limit for search @keywords get_limit search_limit */
    getLimit(): number;
    /** Check if all items should be returned regardless of match @keywords get_return_everything search_all */
    getReturnEverything(): boolean;
    /** Get search delay in milliseconds @keywords get_delay search_delay */
    getDelay(): number;
    /** Check if exact match search is enabled @keywords get_find_exact_match exact_search */
    getFindExactMatch(): boolean;
    /** Get CSS class name for match highlighting @keywords get_class_name search_highlight_class */
    getClassName(): string;
    /** Set new search options @keywords set_options search_options */
    setOptions(options: SearchOptions): this;
}

type ServerStorageItem = {
    value: any;
    hydration: boolean;
};
type ServerStorageList = Record<string, ServerStorageItem>;
/** @keywords ServerStorage, SSR, storage, isolation */
export declare class ServerStorage {
    /** @keywords init, context, listener */
    static init(listener: () => Record<string, any> | undefined): typeof ServerStorage;
    /** @keywords reset, clear */
    static reset(): void;
    /** @keywords has, check, key */
    static has(key: string): boolean;
    /** @keywords get, retrieve, value */
    static get<T = any>(key: string, defaultValue?: () => T, hydration?: boolean): T;
    /** @keywords set, save, store */
    static set<T = any>(key: string, value: () => T, hydration?: boolean, storageList?: ServerStorageList): T;
    /** @keywords error, status, hide */
    static setErrorStatus(hide: boolean): void;
    /** @keywords remove, delete */
    static remove(key: string): void;
    /** @keywords toString, hydration, html */
    static toString(): string;
}
export {};

/** Storage callback manager @keywords storage callback manager register run */
export declare class StorageCallback<T = any, Callback = (value: T) => void | Promise<void>> {
	/** Returns StorageCallback instance by name @keywords get instance storage callback */
	static getInstance<T>(name: string, group?: string): StorageCallback<T, (value: T) => void | Promise<void>>;
	constructor(name: string, group?: string);
	/** Returns loading state @keywords is loading state */
	isLoading(): boolean;
	/** Returns storage name @keywords get name */
	getName(): string;
	/** Returns loading state @keywords get loading state */
	getLoading(): boolean;
	/** Adds callback to list @keywords add callback */
	addCallback(callback: Callback, isOnce?: boolean): this;
	/** Removes callback from list @keywords remove callback */
	removeCallback(callback: Callback): this;
	/** Prepares before run @keywords preparation */
	preparation(): this;
	/** Executes all callbacks @keywords run execute */
	run(value: T): Promise<this>;
}

/** Class for getting the translated text. @keywords translate, i18n, localization */
export declare class Translate {
    /** Gets translated text by code. @keywords get, translate */
    static get(name: string, replacement?: string[] | Record<string, string | number>): Promise<string>;
    /** Returns TranslateInstance singleton. @keywords get, instance, translate */
    static getItem(): TranslateInstance;
    /** Gets translated text by code synchronously. @keywords get, sync, translate */
    static getSync(name: string, first?: boolean, replacement?: string[] | Record<string, string | number>): string;
    /** Gets a list of translations by codes. @keywords get, list, translate */
    static getList<T extends TranslateCode[]>(names: T): Promise<TranslateList<T>>;
    /** Gets a list of translations by codes synchronously. @keywords get, list, sync, translate */
    static getListSync<T extends TranslateCode[]>(names: T, first?: boolean): TranslateList<T>;
    /** Adds translations. @keywords add, translate */
    static add(names: string | string[]): Promise<void>;
    /** Adds translations synchronously. @keywords add, sync, translate */
    static addSync(data: Record<string, string>): void;
    /** Adds translations normally or synchronously based on environment. @keywords add, normal, sync, translate */
    static addNormalOrSync(data: Record<string, string>): Promise<void>;
    /** Adds translations synchronously by location. @keywords add, location, sync, translate */
    static addSyncByLocation(data: Record<string, Record<string, string>>): void;
    /** Adds translations synchronously from file. @keywords add, file, sync, translate */
    static addSyncByFile(data: TranslateDataFile): void;
    /** Sets the translation endpoint URL. @keywords set, url, translate */
    static setUrl(url: string): void;
    /** Sets the property name for request payload. @keywords set, props, name, translate */
    static setPropsName(name: string): void;
    /** Enables or disables API reading mode. @keywords set, api, read, translate */
    static setReadApi(value: boolean): void;
    /** Sets the translation configuration. @keywords set, config, translate */
    static setConfig(config: TranslateConfig): void;
}

/** Manages translation files and loading data @keywords translate, file, localization */
export declare class TranslateFile {
    protected language: string | (() => string);
    protected location: string | (() => string);
    /** Creates an instance of the class. @keywords constructor, translate */
    constructor(data?: TranslateDataFile, language?: string | (() => string), location?: string | (() => string));
    /** Checks if files exist for the current location or language. @keywords isFile, check, translate */
    isFile(): boolean;
    /** Returns the current location. @keywords getLocation, location, translate */
    getLocation(): string;
    /** Returns the current language. @keywords getLanguage, language, translate */
    getLanguage(): string;
    /** Returns translation list for the current location. @keywords getList, translations, load */
    getList(): Promise<TranslateDataFileList | undefined>;
    /** Adds a list of translation files. @keywords add, files, translate */
    add(data: TranslateDataFile): void;
}

/** Class for managing translations and fetching localized text. @keywords translate translation i18n localization */
export declare class TranslateInstance {
    /** @param url URL for getting translations @param propsName Property name for getting translations @param files List of files with translations */
    constructor(url?: string, propsName?: string, files?: TranslateFile);
    /** Gets translated text by its code. @keywords translate text get */
    get(name: string, replacement?: string[] | Record<string, string | number>): Promise<string>;
    /** Gets translated text synchronously by its code. @keywords translate text sync */
    getSync(name: string, first?: boolean, replacement?: string[] | Record<string, string | number>): string;
    /** Gets a list of translations by an array of codes. @keywords translate list async */
    getList<T extends TranslateCode[]>(names: T): Promise<TranslateList<T>>;
    /** Gets a list of translations synchronously by an array of codes. @keywords translate list sync */
    getListSync<T extends TranslateCode[]>(names: T, first?: boolean): TranslateList<T>;
    /** Adds a list of translated texts. @keywords translate add */
    add(names: string | string[]): Promise<void>;
    /** Adds texts in synchronous mode. @keywords translate add sync */
    addSync(data: Record<string, string>): void;
    /** Adds data via query or directly based on runtime environment. @keywords translate add normal sync */
    addNormalOrSync(data: Record<string, string>): Promise<void>;
    /** Adds texts synchronously by location. @keywords translate add location */
    addSyncByLocation(data: Record<string, Record<string, string>>): void;
    /** Adds texts synchronously from a file. @keywords translate add file */
    addSyncByFile(data: TranslateDataFile): void;
    /** Sets the translation endpoint URL. @keywords translate url set */
    setUrl(url: string): this;
    /** Sets the translation property name. @keywords translate propsName set */
    setPropsName(name: string): this;
    /** Sets the API read mode. @keywords translate readApi set */
    setReadApi(value: boolean): this;
}

/** Base abstract class for URL-based state management. @keywords url_instance abstract state */
export declare abstract class UrlInstanceAbstract {
    /** Watchers map for URL state variables */
    protected watch: Record<string, ((value: any) => void)[]>;
    /** Update block flag */
    protected block: boolean;
    /** Timeout identifier */
    protected time: any;
    /** Data record storage */
    protected data: Record<string, any> | undefined;
    /** Get data by name with optional default value. @keywords get data */
    get<T>(name: string, defaultValue?: T | (() => T)): T;
    /** Set data value by name. @keywords set data */
    set<T>(name: string, callback: T | (() => T)): this;
    /** Add a watch callback for a specific property. @keywords add watch event */
    addWatch<T>(name: string, callback: (value: T) => void): this;
    /** Remove a watch callback. @keywords remove watch event */
    removeWatch<T>(name: string, callback: (value: T) => void): this;
    /** Reload state data. @keywords reload data */
    reload(): this;
    /** Get internal data record. @keywords get data record */
    protected getData(): Record<string, any>;
    /** Initialize internal data. @keywords init data */
    protected initData(): this;
    /** Trigger watch callbacks on change. @keywords make watch */
    protected makeWatch(location: Record<string, any>): this;
    /** Initialize instance and listeners. @keywords init */
    protected abstract init(): this;
    /** Get location data from URL. @keywords get location */
    protected abstract getLocation(): Record<string, any>;
    /** Update URL state representation. @keywords update */
    protected abstract update(): this;
}

/** Isomorphic utility class for working with URLs. @keywords url, parse, query, params */
export declare class UrlItem {
    /** Returns a request-isolated instance of UrlItem. @keywords instance, singleton, url */
    static getInstance(): UrlItem;
    /** Constructs a new UrlItem instance. @keywords constructor, url */
    constructor(url?: string | URL);
    /** Full URL string. @keywords href, url */
    get href(): string;
    /** Protocol including trailing colon. @keywords protocol, url */
    get protocol(): string;
    /** Username. @keywords username, auth, url */
    get username(): string;
    /** Password. @keywords password, auth, url */
    get password(): string;
    /** Host (hostname and port). @keywords host, url */
    get host(): string;
    /** Hostname (excluding port). @keywords hostname, url */
    get hostname(): string;
    /** Port. @keywords port, url */
    get port(): string;
    /** Path name. @keywords pathname, path, url */
    get pathname(): string;
    /** Search string including leading question mark. @keywords search, query, url */
    get search(): string;
    /** Readonly search params object. @keywords searchParams, query, url */
    get searchParams(): URLSearchParams;
    /** Hash string including leading hash sign. @keywords hash, anchor, url */
    get hash(): string;
    /** Origin of the URL. @keywords origin, url */
    get origin(): string;
    /** Checks if the specified query parameter exists. @keywords hasParam, query, check */
    hasParam(name: string): boolean;
    /** Returns the value of a query parameter. @keywords getParam, query, value */
    getParam(name: string): string | undefined;
    /** Returns all query parameters as an object with transformed types. @keywords getParams, query, object */
    getParams(): Record<string, any>;
    /** Updates the URL value. @keywords set, url */
    set(url?: string | URL): this;
    /** Sets the value of a query parameter. @keywords setParam, query, update */
    setParam(name: string, value: string): this;
    /** Replaces all query parameters with the specified object. @keywords setParams, query, replace */
    setParams(params: Record<string, any>): this;
    /** Deletes a query parameter. @keywords deleteParam, query, remove */
    deleteParam(name: string): this;
    /** Converts the Url instance to its string representation. @keywords toString, string, url */
    toString(): string;
    /** Converts the Url instance to JSON string representation. @keywords toJSON, json, url */
    toJSON(): string;
}

/** Adds a tag to highlight matching text within a string. @keywords highlight match search wrap tag @param value target string @param search search query or pattern */
export declare function addTagHighlightMatch(value: string, search?: string | RegExp, className?: string, shouldEscape?: boolean): string;

/** Converts a value to a string. @keywords convert, string, to_string */
export declare function anyToString<V>(value: V, isArrayString?: boolean, trim?: boolean): string;

/** Applies a template to text, replacing keys with values. @keywords apply template replace string format */
export declare const applyTemplate: (text: string, replacement?: Record<string, string | number | boolean> | string[]) => string;

/** Creates an array of elements filled with the specified value. @keywords array fill generate repeat */
export declare function arrFill<T>(value: T, count: number): T[];

/** Converts a Blob to a Base64 string. @keywords blob base64 convert */
export declare function blobToBase64(blob: Blob, clean?: boolean): Promise<string | undefined>;

/** Capitalizes the first letter of a string @keywords capitalize string formatting */
export declare function capitalize(value: string, isLocale?: boolean): string;

/** Creates a deep copy of an object. @keywords copy clone object mutate */
export declare function copyObject<T>(value: T): T;

/** Copies a simple object. @keywords copy object lite clone @param value Object for copying @param source Additional properties for copying */
export declare function copyObjectLite<T, R = T>(value: T, source?: any): R;

/**
 * Creates a DOM element with the specified tag name, attributes, and options. @keywords createElement dom html tag
 */
export declare function createElement<T extends HTMLElement>(parentElement?: HTMLElement, tagName?: string, options?: Partial<T> | Record<keyof T, T[keyof T]> | ((element: T) => void), referenceElement?: HTMLElement): T | undefined;

/** Executes callback when DOM is loaded or immediately if already ready @keywords dom content loaded ready */
export declare function domContentLoaded<T = void>(callback: () => T | Promise<T>): Promise<T>;

/**
 * Selects the first element matching the specified selectors.
 * @keywords querySelector, dom, element, select
 */
export declare function domQuerySelector<E extends Element = Element>(selectors: string): E | undefined;

/** Selects all elements matching the given CSS selector. @keywords dom query selector all list elements */
export declare function domQuerySelectorAll<E extends Element = Element>(selectors: string): NodeListOf<E> | undefined;

/** @keywords encode, attribute, html, escape */
export declare function encodeAttribute(text: string): string;

/** Encodes special characters in a string for safe use in HTML attributes. @keywords encode, attribute, html, escape */
export declare function encodeLiteAttribute(text: string): string;

/** Ensures maximum image size by resizing. @keywords image, resize, max, size, compress */
export declare function ensureMaxSize(file: Uint8Array, compress?: number, type?: string): Promise<string>;

/** Escapes special regex characters in a string. @keywords escape, regex, regexp */
export declare function escapeExp(value: string): string;

/** Stop event propagation and default behavior @keywords stop propagation event prevent default */
export declare function eventStopPropagation(event: Event): void;

/** Executes the argument if it is a function, otherwise returns it as is. @keywords execute, function, callback */
export declare function executeFunction<T>(callback: T | FunctionArgs<any, T>, ...args: any[]): T;

/** Safely executes a function and awaits its result if it returns a Promise. @keywords execute, promise, async, function */
export declare function executePromise<T>(callback: ((...args: any[]) => Promise<T>) | ((...args: any[]) => T) | T, ...args: any[]): Promise<T>;

/** Executes a callback for each element in an object or collection and returns the results. @keywords foreach iterate collection map array object */
export declare function forEach<T, R, D extends T[] | Record<string, T> | Map<string, T> | Set<T> = T[] | Record<string, T> | Map<string, T> | Set<T>, K = D extends T[] ? number : string>(data: D & (T[] | Record<string, T> | Map<string, T> | Set<T>), callback: (item: T, key: K, dataMain: typeof data) => R, saveUndefined?: boolean): R[];

/**
 * Cyclically calls requestAnimationFrame until next returns true.
 * @keywords frame animation requestAnimationFrame loop
 */
export declare function frame(callback: () => void, next?: () => boolean, end?: () => void): void;

/** Split a string into an array of objects to highlight matches. @keywords highlight match search array */
export declare function getArrayHighlightMatch(value: string, search?: string | RegExp): HighlightMatchItem[];

/**
 * Gets a list of attributes of an element.
 * @keywords get_attributes element dom
 */
export declare function getAttributes<E extends ElementOrWindow>(element?: ElementOrString<E>): Record<string, string | undefined>;

/**
 * Retrieves drag or clipboard text data.
 * @keywords clipboard, read, text, get
 */
export declare function getClipboardData(event?: ClipboardEvent): Promise<string>;

/** Returns column values from an array or object. @keywords get_column, column, array */
export declare function getColumn<T, K extends keyof T>(array: ObjectOrArray<T>, column: K): (T[K] | undefined)[];

/** Returns the current date in the specified format. @keywords getCurrentDate, date, time */
export declare function getCurrentDate(format?: GeoDate): string;

/** Returns the current time in milliseconds. @keywords getCurrentTime time milliseconds timestamp */
export declare function getCurrentTime(): number;

/**
 * Returns the first Element matching the specified selector or element.
 * @keywords getElement querySelector dom element
 */
export declare function getElement<E extends ElementOrWindow, R extends Exclude<E, Window>>(element?: ElementOrString<E>): R | undefined;

/**
 * Returns the identifier (ID) of the element or creates it if missing.
 * @keywords getElementId, element, id, dom
 * @param element element to get ID from
 * @param selector optional selector suffix
 */
export declare function getElementId<E extends ElementOrWindow>(element?: ElementOrString<E>, selector?: string): string;

/**
 * Initializes the getElementId function with a custom listener.
 * @keywords initGetElementId, id, generator, ssr
 * @warning Initialization is mandatory for correct SSR functioning.
 */
export declare function initGetElementId(newListener: () => string | number): void;

/**
 * Get image element from HTMLImageElement or string source.
 * @keywords getElementImage, image, html, element
 */
export declare function getElementImage(image: HTMLImageElement | string): HTMLImageElement | undefined;

/**
 * Returns element property value or default value.
 * @keywords getElementItem, element property, value
 */
export declare function getElementItem<T extends ElementOrWindow, K extends keyof T, D>(element: ElementOrString<T>, index: K | string, defaultValue?: D): T[K] | D | undefined;

/** Returns window or element @keywords element, window, match */
export declare function getElementOrWindow<E extends ElementOrWindow>(element?: ElementOrString<E>): E | undefined;

/** Generates a safe script tag for data hydration. @keywords hydration script tag data @param id script tag ID @param data data to be stored */
export declare function getElementSafeScript(id: string, data: any): string;

/** Creates a case-insensitive regular expression for exact match of a phrase. @keywords exact search expression regular expression */
export declare function getExactSearchExp(search: string): RegExp;

/**
 * Creates a regular expression object to match text against a pattern.
 * @keywords regex, regular expression, pattern matching, getExp
 */
export declare function getExp(value: string, flags?: string, pattern?: string): RegExp;

/** Returns the first element of an array or object. @keywords get first element array object */
export declare function getFirst<T>(value: T | T[] | Record<string, T>): T | undefined;

/** Retrieves and parses JSON data from a DOM script tag. @keywords hydration, json, script, dom */
export declare function getHydrationData<T>(id: string, defaultValue: T, remove?: boolean): T;

/**
 * Returns data by path.
 * @keywords get item by path, object path resolver
 */
export declare function getItemByPath<T extends Record<string, any>, R = string>(item: T, path: string): R | undefined;

/** Returns the pressed key from keyboard event. @keywords key, keyboard, event */
export declare function getKey(event: KeyboardEvent): string | number | undefined;

/**
 * Returns the last element of an array or object.
 * @keywords last, element, array, object
 * @param value input value
 */
export declare function getLast<T>(value: T | T[] | Record<string, T>): T | undefined;

/** Returns the length or size of various data types including Arrays, Objects, Maps, Sets, and Strings. @keywords length size count getLength */
export declare function getLength(value: any): number;

/** Returns lengths of all elements in an array. @keywords getLengthOfAllArray array lengths */
export declare function getLengthOfAllArray(value: ObjectOrArray<string>): number[];

/** Searches for the longest string in the array and returns its length. @keywords getMaxLengthAllArray max length array string */
export declare function getMaxLengthAllArray(data: ObjectOrArray<string>): number;

/**
 * Returns the minimum length among all string values in an object or array.
 * @keywords getMinLengthAllArray, min_length, array, length
 */
export declare function getMinLengthAllArray(data: ObjectOrArray<string>): number;

/** Returns mouse client coordinates from event. @keywords mouse, coordinates, clientX, clientY */
export declare function getMouseClient(event: MouseEvent & TouchEvent): ImageCoordinator;

/**
 * Returns the client X coordinate from mouse or touch events.
 * @keywords mouse client x coordinate touch clientX
 */
export declare function getMouseClientX(event: MouseEvent & TouchEvent): number;

/** Returns mouse client Y coordinate or click location. @keywords mouse y client cursor coordinate */
export declare function getMouseClientY(event: MouseEvent & TouchEvent): number;

/** Filter object by keys @keywords getObjectByKeys pick keys */
export declare function getObjectByKeys<T extends Record<string, any>, K extends keyof T>(data: T, keys: K[]): Pick<T, K>;

/** Removes properties equal to the exception value from the object. @keywords object filter remove undefined */
export declare function getObjectNoUndefined<T extends Record<string | number, any>>(data: T, exception?: any): T;

/** Returns the object if values are set, otherwise an empty object. @keywords object none check @param value The value to evaluate */
export declare function getObjectOrNone<T>(value: T): T & Record<string, any>;

/** Returns only letters, numbers, and spaces from a string. @keywords get only text sanitize alphanumeric */
export declare function getOnlyText(text: any): string;

/**
 * Returns a random element from an array, object, or value.
 * @keywords random element, get random, pick item
 */
export declare function getRandomItem<T>(value?: T | T[] | Record<string, T>): T | undefined;

/**
 * Generates random text.
 * @keywords generate text random string
 */
export declare function getRandomText(min: number, max: number, symbol?: string, lengthMin?: number, lengthMax?: number): string;

/** Returns a key-value request string @keywords request string query encode */
export declare function getRequestString(request: Record<string, any> | any[], sign?: string, separator?: string, subKey?: string): string;

/**
 * Builds a case-insensitive global RegExp for multi-word search matching all terms.
 * @keywords get_search_exp, regexp, search, filter
 * @param search Search string with space-separated words
 * @param limit Maximum search string length
 */
export declare function getSearchExp(search: string, limit?: number): RegExp;

/** Creates a separating search expression for word-based searching. @keywords search, regex, separator, words */
export declare function getSeparatingSearchExp(search: string | RegExp, limit?: number): RegExp;

/** Returns the percentage step value between min and max. @keywords getStepPercent step percent calculation */
export declare function getStepPercent(min: number | undefined, max: number): number;

/** Returns the step value relative to the given minimum and maximum. @keywords getStepValue step value minimum maximum */
export declare function getStepValue(min: number | undefined, max: number): number;

/** Quick scroll element to target. @keywords scroll, element */
export declare function goScroll(selector: string, elementTo: HTMLElement | undefined, elementCenter?: HTMLElement): void;

/**
 * Smooth scrolling to the target element.
 * @keywords scroll, smooth, element, animation
 */
export declare function goScrollSmooth<E extends HTMLElement>(element: E, options?: ScrollIntoViewOptions, shift?: number): void;

/** Scrolls the container to make the target element visible. @keywords scroll container target visible @param element container element @param elementTo target element @param behavior scroll behavior */
export declare function goScrollTo(element?: HTMLElement, elementTo?: HTMLElement, behavior?: ScrollBehavior): void;

/** Invokes Web Share API native sharing mechanism. @keywords share api web_share */
export declare function handleShare(data: ShareData): Promise<boolean>;

/** Checks if the value is in the current array. @keywords inArray array search contains */
export declare function inArray<T>(array: T[], value: T): boolean;

/**
 * Initialization of data for scroll control. @keywords init scrollbar offset layout ui
 */
export declare function initScrollbarOffset(): Promise<void>;

/** Computes the intersection of object keys. @keywords intersect key object */
export declare function intersectKey<T, KT extends keyof T, C, KC extends keyof C>(data?: T, comparison?: C): Record<KT & KC, T[KT]>;

/** Checks if API response is successful @keywords api, success, validate */
export declare const isApiSuccess: <T>(data: ApiData<T>) => boolean;

/** Checks if the value is an array @keywords isArray, array, type_check */
export declare function isArray<T, R>(value: T): value is Extract<T, R[]>;

/** Checks if the values of two objects are different. @keywords isDifferent object compare */
export declare function isDifferent<T>(value: ObjectItem<T>, old: ObjectItem<T>): boolean;

/** Checks if the current environment is a data URL. @keywords isDomData, data url, dom */
export declare function isDomData(): boolean;

/** Checks if code is running in a browser environment with window available. @keywords dom runtime browser window */
export declare function isDomRuntime(): boolean;

/** Checks if an element is visible in DOM and not hidden by CSS. @keywords isElementVisible visible element check dom */
export declare function isElementVisible<E extends ElementOrWindow>(elementSelectors?: ElementOrString<E>): boolean;

/** Checks if the pressed key is Enter or Space. @keywords enter, space, keyboard, key */
export declare const isEnter: (event: KeyboardEvent, isInputElement?: boolean) => boolean;

/** Checks if field is filled. @keywords isFilled, check, filled, empty */
export declare function isFilled<T>(value: T, zeroTrue?: boolean): value is Exclude<T, EmptyValue>;

/** Checks if the value is an integer or floating-point number. @keywords isFloat number check */
export declare function isFloat(value: any): boolean;

/** Checks if the value is a function. @keywords isFunction, function, callback */
export declare function isFunction<T>(callback: T): callback is Extract<T, FunctionArgs<any, any>>;

/**
 * Checks if an element is still in the DOM tree.
 * @keywords isInDom dom element check connected
 */
export declare function isInDom<E extends ElementOrWindow>(element?: ElementOrString<E>): boolean;

/** Checks if the element is an input field or editable. @keywords isInput input editable form @param element The element to check */
export declare const isInput: (element: HTMLElement | EventTarget | null) => boolean;

/**
 * Checks if the value is between integers. @keywords isIntegerBetween, integer, between, range, check */
export declare function isIntegerBetween(value: number, between: number): boolean;

/** Checks if a key event contains active modifier/meta keys. @keywords meta_key modifier_key keyboard */
export declare const isMetaKey: (event: KeyboardEvent) => boolean;

/** Checks if value is null or undefined. @keywords isNull null undefined */
export declare function isNull<T>(value: T): value is Extract<T, undefined>;

/** Checks if the value is a number. @keywords isNumber check number numeric */
export declare function isNumber(value: any): boolean;

/** Checks if a value is an object. @keywords isObject object type check */
export declare function isObject<T>(value: T): value is Extract<T, Record<any, any>>;

/** Checks if value is an object and not an array. @keywords isObjectNotArray object check */
export declare function isObjectNotArray<T>(value: T): value is Exclude<Extract<T, Record<any, any>>, any[] | undefined | null>;

/** Check if the device is online. @keywords online status connection network */
export declare function isOnLine(): boolean;

/**
 * Checks if value is selected within an array or equals a string.
 * @keywords isSelected, check, selected, value, match
 */
export declare function isSelected<T, S>(value: T, selected: T | T[] | S): boolean;

/** Checks if all values in the list are selected. @keywords isSelectedByList, select, match */
export declare function isSelectedByList<T>(values: T | T[], selected: T | T[]): boolean;

/** Checks if the Web Share API is supported in the current environment. @keywords share api support */
export declare function isShare(): boolean;

/** Checks if value is a string. @keywords isString, string, type */
export declare function isString<T>(value: T): value is Extract<T, string>;

/** Checks if the pressed key is Tab. @keywords tab key keyboard event */
export declare const isTab: (event: KeyboardEvent) => boolean;

/** Checks if object is Window. @keywords isWindow window dom */
export declare function isWindow<E>(element: E): element is Extract<E, Window>;

/** Generate a random integer. @keywords random integer number */
export declare function random(min: number, max: number): number;

/** Removes common prefix from string. @keywords remove_prefix string */
export declare function removeCommonPrefix(mainStr: string, prefix: string): string;

/** Replaces component name in text @keywords replace component name */
export declare const replaceComponentName: (text: string | undefined, name: string, componentName: string) => string | undefined;

/** Recursively merges objects and arrays. @keywords merge, replace, object, array */
export declare function replaceRecursive<I>(array: ObjectItem<I>, replacement?: ObjectOrArray<I>, isMerge?: boolean): ObjectItem<I>;

/** Replaces template placeholders with values. @keywords replace template string */
export declare function replaceTemplate(value: string, replaces: Record<string, string | FunctionReturn<string>>): string;

/** Resize type for image scaling. @keywords resize, image, scale, max */
type ResizeImageByMaxType = 'auto' | 'width' | 'height';
/** Resizes an image to fit within a maximum size constraint. @keywords resize, image, scale, max, dimensions */
export declare function resizeImageByMax(image: HTMLImageElement | string, maxSize: number, type?: ResizeImageByMaxType, typeData?: string): string | undefined;
export {};

/** Converts seconds into a time string. @keywords time, seconds, format, clock @param second specified seconds @param hasHour whether to include hours */
export declare function secondToTime(second: number | string | undefined, hasHour?: boolean): string;

/** Modifies the value of an element identified by its key. @keywords set element property value */
export declare function setElementItem<E extends ElementOrWindow, K extends keyof E, V extends E[K] = E[K]>(element: ElementOrString<E>, index: K, value: V | Record<string, V>): E | undefined;

/** Modifies data according to its type and settings. @keywords set values modify multiple */
export declare function setValues<T>(selected: T | T[] | undefined, value: any, { multiple, maxlength, alwaysChange, notEmpty }: {
    multiple?: boolean | undefined;
    maxlength?: number | undefined;
    alwaysChange?: boolean | undefined;
    notEmpty?: boolean | undefined;
}): T | T[] | undefined;

/** Pause execution for specified milliseconds. @keywords sleep delay timer timeout */
export declare function sleep(ms: number): Promise<void>;

/** Sorts an array of items by specified columns or custom comparison function. @keywords sort, order, array */
export declare function sortList<T = any>(list: T[], sortColumns: SortColumnItem[], customSort?: SortFunction<T>): T[];

/** Copies enumerable properties from source to target object. @keywords splice, object, copy, merge */
export declare function splice<I>(array: ObjectItem<I>, replacement?: ObjectItem<I> | I, indexStart?: string): ObjectItem<I>;

/**
 * The method creates a string of length count, consisting of the characters value. @keywords string fill repeat characters @param value character for filling @param count length of the string */
export declare function strFill(value: string, count: number): string;

/** Splits a string by a separator with an optional limit. @keywords string split divide limit */
export declare function strSplit(value: number | string, separator: string, limit?: number): string[];

/**
 * Converts a value to an array.
 * @keywords toArray array convert wrap
 */
export declare function toArray<T>(value: T): T extends any[] ? T : [T];

/** Convert a string to Upper Camel Case. @keywords toCamelCase upper camel case format case */
export declare function toCamelCase(value: string): string;

/** Convert string to camel case with first letter uppercase @keywords to_camel_case_first, camelcase, string */
export declare function toCamelCaseFirst(value: string): string;

/**
 * Conversion to Date object.
 * @keywords toDate, date, parse, time, transform
 */
export declare function toDate<T extends Date | number | string>(value?: T): (T & Date) | Date;

/** Converts a string to kebab-case format. @keywords kebab case dash string format */
export declare function toKebabCase(value: string): string;

/** Converts a value to a finite number @keywords number, parse, float, toNumber */
export declare function toNumber(value?: NumberOrString): number;

/** Converts data to a number considering the maximum value. @keywords toNumberByMax, limit, number */
export declare function toNumberByMax(value: string | number, max?: string | number, formatting?: boolean, language?: string): string | number;

/** Converts a value to a positive finite number (> 0), or returns default value if invalid. @keywords toNumberPositive positive number validate */
export declare function toNumberPositive(value?: number | string | null, defaultValue?: number): number;

/** Converts values to percentages @keywords toPercent percent ratio calculate */
export declare function toPercent(maxValue: number, value: number): number;

/** Convert values to percentages with 100 multiplier @keywords percentage percent math value */
export declare function toPercentBy100(maxValue: number, value: number): number;

/** Converts the value to a string. @keywords to_string convert string */
export declare function toString<T>(value: T): string;

/** Transforms a string or value into its corresponding data type. @keywords transformation, parse, cast, data_type */
export declare function transformation(value: any, isFunction?: boolean): any;

/**
 * Converts a Uint8Array to a base64 encoded string.
 * @keywords uint8array, base64, encode, binary
 */
export declare function uint8ArrayToBase64(bytes: Uint8Array): string;

/**
 * Removes duplicate entries in an array.
 * @keywords unique array duplicates remove
 */
export declare function uniqueArray<T>(value: T[]): T[];

/** Writes data to the clipboard. @keywords write clipboard text copy */
export declare function writeClipboardData(text: string): Promise<void>;



/** Error cause list configuration array. @keywords error, cause, list, configuration */
export declare const errorCauseList: ErrorCenterCauseList;

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

export type Undefined = undefined | null;
export type EmptyValue = Undefined | 0 | false | '' | 'undefined' | 'null' | '0' | 'false' | '[]';
export type NumberOrString = number | string;
export type NumberOrStringOrBoolean = number | string | boolean;
export type NumberOrStringOrDate = NumberOrString | Date;
export type NormalOrArray<T = NumberOrString> = T | T[];
export type NormalOrPromise<T> = T | Promise<T>;
export type ObjectItem<T = any> = Record<string, T>;
export type ObjectOrArray<T = any> = T[] | ObjectItem<T>;
export type ArrayToItem<T> = T extends any[] ? T[number] : T;
export type FunctionReturn<R = any> = () => R;
export type FunctionVoid = () => void;
export type FunctionArgs<T, R> = (...args: T[]) => R;
export type FunctionAnyType<T = any, R = any> = (...args: T[]) => R;
export type ItemList<T = any> = Record<string, T>;
export type Item<V> = {
    index: string;
    value: V;
};
export type ItemValue<V> = {
    label: string;
    value: V;
};
export type ItemName<V> = {
    name: string | number;
    value: V;
};
export type ElementOrWindow = HTMLElement | Window;
export type ElementOrString<E extends ElementOrWindow> = E | string;
export type EventOptions = AddEventListenerOptions | boolean | undefined;
export type EventListenerDetail<O extends Event, D extends Record<string, any>> = (event: O, detail?: D) => void;
export type EventActivityItem<E extends ElementOrWindow> = {
    element: E | undefined;
    type: string;
    listener?: (event: any | Event) => void;
    observer?: ResizeObserver;
};
export type ImageCoordinator = {
    x: number;
    y: number;
};

/** Manages error groups, codes, handlers, and console reporting. @keywords error_center, handler, management */
export declare class ErrorCenterHandler {
    /** List of error handlers grouped by category. @keywords error_handlers, group */
    handlers: ErrorCenterHandlerItem[];
    /** Global callbacks executed on any error. @keywords error_callbacks, global */
    callbacks: ErrorCenterHandlerCallback[];
    /** Configuration for console logging. @keywords console_logging, config */
    isConsole: ErrorCenterHandlerIsConsole;
    /** Initializes error center handler with optional initial list and console setting. @keywords constructor, init */
    constructor(e?: ErrorCenterHandlerList, t?: ErrorCenterHandlerIsConsole);
    /** Checks if a handler group exists. @keywords has_group, check */
    has(e: ErrorCenterGroup): boolean;
    /** Retrieves handler item by group. @keywords get_handler, lookup */
    get(e: ErrorCenterGroup): ErrorCenterHandlerItem | undefined;
    /** Adds a callback handler for a specific group. @keywords add_handler, register */
    add(e: ErrorCenterGroup, t: ErrorCenterHandlerCallback): this;
    /** Adds a list of handlers. @keywords add_list, batch */
    addList(e: ErrorCenterHandlerList): this;
    /** Adds a global error callback. @keywords add_callback, global */
    addCallback(e: ErrorCenterHandlerCallback): this;
    /** Sets console logging behavior. @keywords set_console, config */
    setIsConsole(e: ErrorCenterHandlerIsConsole): this;
    /** Triggers error handling for a given cause. @keywords trigger_error, dispatch */
    on(e: ErrorCenterCauseItem): this;
    /** Outputs error details to the console if enabled. @keywords log_console, print */
    toConsole(e: ErrorCenterCauseItem): this;
}
/** Manages causes and error handling pipelines. @keywords error_cause_manager, pipeline */
export declare class ErrorCenterInstance {
    /** Internal error handler instance. @keywords handler_instance, error_center */
    handler: ErrorCenterHandler;
    /** List of known error causes. @keywords causes_list, errors */
    causes: ErrorCenterCauseList;
    /** Initializes error instance with causes and handler. @keywords constructor, init */
    constructor(e?: ErrorCenterCauseList, t?: ErrorCenterHandler);
    /** Checks if a specific error cause exists. @keywords has_cause, check */
    has(e: string, t?: ErrorCenterGroup): boolean;
    /** Retrieves a specific error cause item. @keywords get_cause, lookup */
    get(e: string, t?: ErrorCenterGroup): ErrorCenterCauseItem | undefined;
    /** Adds a new error cause. @keywords add_cause, register */
    add(e: ErrorCenterCauseItem): this;
    /** Adds a list of error causes. @keywords add_causes, batch */
    addList(e: ErrorCenterCauseList): this;
    /** Adds an error handler for a group. @keywords add_handler, register */
    addHandler(e: ErrorCenterGroup, t: ErrorCenterHandlerCallback): this;
    /** Adds a list of error handlers. @keywords add_handlers, batch */
    addHandlerList(e: ErrorCenterHandlerList): this;
    /** Adds a global error callback. @keywords add_callback, global */
    addCallback(e: ErrorCenterHandlerCallback): this;
    /** Sets console logging behavior. @keywords set_console, config */
    setIsConsole(e: ErrorCenterHandlerIsConsole): this;
    /** Dispatches an error through the handler pipeline. @keywords trigger_error, dispatch */
    on(e: ErrorCenterCauseItem): this;
    /** Assigns or merges error details with a registered cause template. @keywords assign_cause, merge */
    assign(e: ErrorCenterCauseItem): ErrorCenterCauseItem;
}
/** Static accessor for global error management. @keywords error_center_static, global */
export declare class ErrorCenter {
    /** Retrieves the global error instance. @keywords get_item, instance */
    static getItem(): ErrorCenterInstance;
    /** Checks if a specific error cause exists globally. @keywords has_cause, check */
    static has(e: string, t?: ErrorCenterGroup): boolean;
    /** Retrieves a global error cause item. @keywords get_cause, lookup */
    static get(e: string, t?: ErrorCenterGroup): ErrorCenterCauseItem | undefined;
    /** Adds a global error cause. @keywords add_cause, register */
    static add(e: ErrorCenterCauseItem): void;
    /** Adds a list of global error causes. @keywords add_causes, batch */
    static addList(e: ErrorCenterCauseList): void;
    /** Adds a global error handler. @keywords add_handler, register */
    static addHandler(e: ErrorCenterGroup, t: ErrorCenterHandlerCallback): void;
    /** Adds a list of global error handlers. @keywords add_handlers, batch */
    static addHandlerList(e: ErrorCenterHandlerList): void;
    /** Adds a global error callback. @keywords add_callback, global */
    static addCallback(e: ErrorCenterHandlerCallback): void;
    /** Sets global console logging behavior. @keywords set_console, config */
    static setIsConsole(e: ErrorCenterHandlerIsConsole): void;
    /** Dispatches a global error. @keywords trigger_error, dispatch */
    static on(e: ErrorCenterCauseItem): void;
}
/** Error group identifier / Идентификатор группы ошибок */
export type ErrorCenterGroup = string | undefined;
/** Interface for an error item / Интерфейс для элемента ошибки */
export type ErrorCenterCauseItem<D = any> = {
    group?: ErrorCenterGroup;
    code: string;
    priority?: number;
    label?: string;
    message?: string;
    details?: D;
};
/** List of error items / Список элементов ошибок */
export type ErrorCenterCauseList = ErrorCenterCauseItem[];
/** Callback function for error handling / Функция обратного вызова для обработки ошибок */
export type ErrorCenterHandlerCallback = (cause: ErrorCenterCauseItem) => void;
/** Interface for error handler storage / Интерфейс для хранения обработчика ошибок */
export type ErrorCenterHandlerItem = {
    group?: ErrorCenterGroup;
    handlers: ErrorCenterHandlerCallback[];
};
/** List of error handlers / Список обработчиков ошибок */
export type ErrorCenterHandlerList = ErrorCenterHandlerItem[];
/** Callback function to check whether to log error to console / Функция обратного вызова для проверки вывода ошибки в консоль */
export type ErrorCenterHandlerIsConsoleCallback = (cause: ErrorCenterCauseItem) => boolean;
/** Type for console logging configuration / Тип для конфигурации вывода в консоль */
export type ErrorCenterHandlerIsConsole = boolean | ErrorCenterHandlerIsConsoleCallback;

export declare enum FormattersType {
	currency = "currency",
	date = "date",
	name = "name",
	number = "number",
	plural = "plural",
	unit = "unit"
}
export type FormattersOptionsCurrency = {
	currencyPropName?: string;
	options?: string | Intl.NumberFormatOptions;
	numberOnly?: boolean;
};
export type FormattersOptionsDate = {
	type?: GeoDate;
	options?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions;
	hour24?: boolean;
};
export type FormattersOptionsName = {
	lastPropName?: string;
	firstPropName?: string;
	surname?: string;
	short?: boolean;
};
export type FormattersOptionsNumber = {
	options?: Intl.NumberFormatOptions;
};
export type FormattersOptionsPlural = {
	words: string;
	options?: Intl.PluralRulesOptions;
	optionsNumber?: Intl.NumberFormatOptions;
};
export type FormattersOptionsUnit = {
	unit: string | Intl.NumberFormatOptions;
};
export type FormattersOptionsInformation<Type extends FormattersType> = Type extends FormattersType.currency ? FormattersOptionsCurrency : Type extends FormattersType.date ? FormattersOptionsDate : Type extends FormattersType.name ? FormattersOptionsName : Type extends FormattersType.number ? FormattersOptionsNumber : Type extends FormattersType.plural ? FormattersOptionsPlural : Type extends FormattersType.unit ? FormattersOptionsUnit : Record<string, any>;
export type FormattersOptionsItem<Type extends FormattersType = FormattersType, R = string> = {
	type?: Type;
	transformation?: (valueOriginal: any, item: any, options?: FormattersOptionsInformation<Type>) => R;
	options?: FormattersOptionsInformation<Type>;
};
export type FormattersOptionsList = Record<string, FormattersOptionsItem>;
export type FormattersListItem = Record<string, any>;
export type FormattersList<Item extends FormattersListItem> = Item[];
export type FormattersCapitalize<K extends string> = K extends `${infer First}.${infer Rest}` ? `${First}${Capitalize<FormattersCapitalize<Rest>>}` : K;
export type FormattersColumns<T extends FormattersOptionsList> = (keyof T & string)[];
export type FormattersKey<K, A extends string = 'Format'> = K extends string ? `${FormattersCapitalize<K>}${A}` : never;
export type FormattersDataItem<T extends FormattersListItem, KT extends string[]> = {
	[K in keyof T | FormattersKey<KT[number]>]: K extends keyof T ? T[K] : string;
};
export type FormattersListFormat<T extends FormattersListItem, K extends string[]> = FormattersDataItem<T, K>[];
export type FormattersListColumnItem<T extends FormattersListItem, O extends FormattersOptionsList> = FormattersDataItem<T, FormattersColumns<O>>;
export type FormattersListColumns<T extends FormattersListItem, O extends FormattersOptionsList> = FormattersListFormat<T, FormattersColumns<O>>;
export type FormattersListProp = FormattersList<FormattersListItem> | FormattersListItem;
export type FormattersItemProp<List extends FormattersListProp> = ArrayToItem<List>;
export type FormattersReturn<List extends FormattersListProp, Options extends FormattersOptionsList = FormattersOptionsList, Item extends FormattersItemProp<List> = FormattersItemProp<List>> = List extends any[] ? FormattersListColumns<Item, Options> : (FormattersListColumnItem<Item, Options> | undefined);
/** Formatters utility class for transforming data lists and items. @keywords formatters transform data ui */
export declare class Formatters {
	/** @keywords constructor init */
	constructor(options: FormattersOptionsList, list: FormattersListProp);
	/** @keywords is list available */
	is(): boolean;
	/** @keywords check if list is array */
	isArray(): boolean;
	/** @keywords get list length */
	length(): number;
	/** @keywords get list array */
	getList(): FormattersListItem[];
	/** @keywords get options */
	getOptions(): FormattersOptionsList;
	/** @keywords set list data */
	setList(e: FormattersListProp): this;
	/** @keywords apply formatting */
	to(): any;
	/** @keywords get format data */
	getFormatData(e: any): Record<string, any>;
	/** @keywords transform value */
	transformation(e: any, t: any, n?: FormattersType, r?: any): any;
	/** @keywords format currency */
	formatCurrency(e: any, t: any, n?: FormattersOptionsCurrency): string;
	/** @keywords format date */
	formatDate(e: any, t?: FormattersOptionsDate): string;
	/** @keywords format name */
	formatName(e: any, t?: FormattersOptionsName): string;
	/** @keywords format number */
	formatNumber(e: any, t?: Intl.NumberFormatOptions): string;
	/** @keywords format plural */
	formatPlural(e: any, t?: FormattersOptionsPlural): string;
	/** @keywords format unit */
	formatUnit(e: any, t?: FormattersOptionsUnit): string;
}

/** @keywords geo, date, format, types */
export type GeoDate = 'full' | 'datetime' | 'date' | 'year-month' | 'year' | 'month' | 'day' | 'day-month' | 'time' | 'hour-minute' | 'hour' | 'minute' | 'second';
/** @keywords geo, weekday, first, day */
export type GeoFirstDay = 1 | 6 | 0;
/** @keywords geo, hours, time, format */
export type GeoHours = '12' | '24';
/** @keywords geo, timezone, style, format */
export type GeoTimeZoneStyle = 'minute' | 'hour' | 'ISO8601' | 'RFC';
/** @keywords geo, item, country, language */
export interface GeoItem {
    country: string;
    countryAlternative?: string[];
    language: string;
    languageAlternative?: string[];
    firstDay?: string | null;
    zone?: string | null;
    phoneCode?: string;
    phoneWithin?: string;
    phoneMask?: string | string[];
    nameFormat?: 'fl' | 'fsl' | 'lf' | 'lsf' | string;
    unit?: {
        'millimeter'?: string;
        'centimeter'?: string;
        'meter'?: string;
        'kilometer'?: string;
        'square-meter'?: string;
        'hectare'?: string;
        'gram'?: string;
        'kilogram'?: string;
        'tonne'?: string;
        'milliliter'?: string;
        'liter'?: string;
        'celsius'?: string;
        'kilometer-per-hour'?: string;
    };
}
/** @keywords geo, item, full, standard */
export interface GeoItemFull extends Omit<GeoItem, 'firstDay'> {
    standard: string;
    firstDay: string;
    location: string;
    locationCountry: string;
    locationLanguage: string;
}
/** @keywords geo, flag, item, country */
export interface GeoFlagItem {
    language: string;
    languageCode: string;
    country: string;
    countryCode: string;
    standard: string;
    icon?: string;
    label: string;
    value: string;
    phoneCode?: string;
}
/** @keywords geo, flag, national, language */
export interface GeoFlagNational extends GeoFlagItem {
    description: string;
    nationalLanguage: string;
    nationalCountry: string;
}
/** @keywords geo, phone, value, metadata */
export interface GeoPhoneValue {
    phone: number;
    within: number;
    mask: string[];
    value: string;
}
/** @keywords geo, phone, map, trie */
export interface GeoPhoneMap {
    items: GeoPhoneValue[];
    info: GeoPhoneValue | undefined;
    value: string | undefined;
    mask: string[];
    maskFull: string[];
    next: Record<string, GeoPhoneMap>;
}
/** @keywords geo, phone, map, info */
export interface GeoPhoneMapInfo {
    item?: GeoPhoneMap;
    phone?: string;
}

/** Standard HTML meta tags @keywords meta_tag title description keywords robots author */
export declare enum MetaTag {
    /** Page title */
    title = "title",
    /** Page description */
    description = "description",
    /** Keywords */
    keywords = "keywords",
    /** Canonical URL */
    canonical = "canonical",
    /** Search engine instructions */
    robots = "robots",
    /** Content author */
    author = "author"
}

/** Search engine crawler directives @keywords robots_directive index follow archive snippet */
export declare enum MetaRobots {
    /** Allow indexing and following links */
    indexFollow = "index, follow",
    /** Do not index the page, but follow its links */
    noIndexFollow = "noindex, follow",
    /** Index the page, but do not follow its links */
    indexNoFollow = "index, nofollow",
    /** Do not index the page and do not follow its links */
    noIndexNoFollow = "noindex, nofollow",
    /** Prevent caching of the page */
    noArchive = "noarchive",
    /** Do not show a snippet or description in search results */
    noSnippet = "nosnippet",
    /** Do not display image preview in search results */
    noImageIndex = "noimageindex",
    /** Allow indexing images only */
    images = "images",
    /** Do not show cached version or translation link */
    noTranslate = "notranslate",
    /** Prevent page being shown in preview */
    noPreview = "nopreview",
    /** Allow only text content indexing */
    textOnly = "textonly",
    /** Do not index subpages or parameters */
    noIndexSubpages = "noindex, noarchive",
    /** Use meta directives from HTTP headers */
    none = "none"
}

/** Open Graph metadata tags @keywords open_graph og_tag social_meta */
export declare enum MetaOpenGraphTag {
    /** Page title */
    title = "og:title",
    /** Content type */
    type = "og:type",
    /** Canonical URL of the page */
    url = "og:url",
    /** Preview image URL */
    image = "og:image",
    /** Brief page description */
    description = "og:description",
    /** Page language */
    locale = "og:locale",
    /** Site name */
    siteName = "og:site_name",
    /** Alternative language versions */
    localeAlternate = "og:locale:alternate",
    /** Alternative form of image */
    imageUrl = "og:image:url",
    /** HTTPS version of the image */
    imageSecureUrl = "og:image:secure_url",
    /** Image MIME type */
    imageType = "og:image:type",
    /** Image width in pixels */
    imageWidth = "og:image:width",
    /** Image height in pixels */
    imageHeight = "og:image:height",
    /** Alternative image text */
    imageAlt = "og:image:alt",
    /** Video URL */
    video = "og:video",
    /** Alternative video URL */
    videoUrl = "og:video:url",
    /** HTTPS version of video */
    videoSecureUrl = "og:video:secure_url",
    /** Video MIME type */
    videoType = "og:video:type",
    /** Video width */
    videoWidth = "og:video:width",
    /** Video height */
    videoHeight = "og:video:height",
    /** Audio file URL */
    audio = "og:audio",
    /** HTTPS version of audio */
    audioSecureUrl = "og:audio:secure_url",
    /** Audio MIME type */
    audioType = "og:audio:type",
    /** Publication date */
    articlePublishedTime = "article:published_time",
    /** Last update date */
    articleModifiedTime = "article:modified_time",
    /** Expiration date */
    articleExpirationTime = "article:expiration_time",
    /** Author */
    articleAuthor = "article:author",
    /** Article category */
    articleSection = "article:section",
    /** Tags or keywords */
    articleTag = "article:tag",
    /** Book author */
    bookAuthor = "book:author",
    /** Book ISBN */
    bookIsbn = "book:isbn",
    /** Book publication date */
    bookReleaseDate = "book:release_date",
    /** Topics or tags */
    bookTag = "book:tag",
    /** Track duration in seconds */
    musicDuration = "music:duration",
    /** Album URL */
    musicAlbum = "music:album",
    /** Disc number */
    musicAlbumDisc = "music:album:disc",
    /** Track number in album */
    musicAlbumTrack = "music:album:track",
    /** Musician */
    musicMusician = "music:musician",
    /** Song URL */
    musicSong = "music:song",
    /** Disc number where the song is */
    musicSongDisc = "music:song:disc",
    /** Track number in song */
    musicSongTrack = "music:song:track",
    /** Release date */
    musicReleaseDate = "music:release_date",
    /** Content creator */
    musicCreator = "music:creator",
    /** Actor */
    videoActor = "video:actor",
    /** Actor's role */
    videoActorRole = "video:actor:role",
    /** Director */
    videoDirector = "video:director",
    /** Screenwriter */
    videoWriter = "video:writer",
    /** Video duration in seconds */
    videoDuration = "video:duration",
    /** Video release date */
    videoReleaseDate = "video:release_date",
    /** Tags or topics */
    videoTag = "video:tag",
    /** Series to which the episode belongs */
    videoSeries = "video:series",
    /** First name */
    profileFirstName = "profile:first_name",
    /** Last name */
    profileLastName = "profile:last_name",
    /** Username or login */
    profileUsername = "profile:username",
    /** Gender */
    profileGender = "profile:gender",
    /** Brand name */
    productBrand = "product:brand",
    /** Product availability */
    productAvailability = "product:availability",
    /** Product condition */
    productCondition = "product:condition",
    /** Price amount */
    productPriceAmount = "product:price:amount",
    /** Currency code */
    productPriceCurrency = "product:price:currency",
    /** Internal product ID */
    productRetailerItemId = "product:retailer_item_id",
    /** Product category */
    productCategory = "product:category",
    /** EAN code */
    productEan = "product:ean",
    /** ISBN if product is a book */
    productIsbn = "product:isbn",
    /** Manufacturer part number */
    productMfrPartNo = "product:mfr_part_no",
    /** UPC code */
    productUpc = "product:upc",
    /** Weight value */
    productWeightValue = "product:weight:value",
    /** Weight units */
    productWeightUnits = "product:weight:units",
    /** Product color */
    productColor = "product:color",
    /** Product material */
    productMaterial = "product:material",
    /** Pattern or design */
    productPattern = "product:pattern",
    /** Age group */
    productAgeGroup = "product:age_group",
    /** Gender target */
    productGender = "product:gender"
}

/** Open Graph content types @keywords og_type website article video product */
export declare enum MetaOpenGraphType {
    /** Regular web page or article */
    website = "website",
    /** News article or blog post */
    article = "article",
    /** Video content */
    video = "video.other",
    /** Entire TV series */
    videoTvShow = "video.tv_show",
    /** Specific TV series episode */
    videoEpisode = "video.episode",
    /** Movie */
    videoMovie = "video.movie",
    /** Music album */
    musicAlbum = "music.album",
    /** Music playlist */
    musicPlaylist = "music.playlist",
    /** Individual track or song */
    musicSong = "music.song",
    /** Radio station or audio stream */
    musicRadioStation = "music.radio_station",
    /** Application */
    app = "app",
    /** Product or item */
    product = "product",
    /** Brand, company, or organization */
    business = "business.business",
    /** Place or geolocation */
    place = "place",
    /** Event or meeting */
    event = "event",
    /** User profile */
    profile = "profile",
    /** Book page */
    book = "book"
}

/** Product availability states @keywords availability stock preorder */
export declare enum MetaOpenGraphAvailability {
    /** In stock and available */
    inStock = "in stock",
    /** Out of stock */
    outOfStock = "out of stock",
    /** Available for pre-order */
    preorder = "preorder",
    /** Backordered and temporarily out of stock */
    backorder = "backorder",
    /** Discontinued and no longer available */
    discontinued = "discontinued",
    /** Pending availability status */
    pending = "pending"
}

/** Product condition states @keywords condition new used refurbished */
export declare enum MetaOpenGraphCondition {
    /** Brand new product */
    new = "new",
    /** Used product */
    used = "used",
    /** Refurbished product */
    refurbished = "refurbished"
}

/** Product age groups @keywords age_group newborn infant toddler kids adult */
export declare enum MetaOpenGraphAge {
    /** For newborns */
    newborn = "newborn",
    /** For infants */
    infant = "infant",
    /** For toddlers */
    toddler = "toddler",
    /** For kids */
    kids = "kids",
    /** For adults */
    adult = "adult"
}

/** Product gender categories @keywords gender female male unisex */
export declare enum MetaOpenGraphGender {
    /** For women */
    female = "female",
    /** For men */
    male = "male",
    /** Universal for everyone */
    unisex = "unisex"
}

/** Twitter Card meta-properties @keywords twitter_tag card site creator */
export declare enum MetaTwitterTag {
    /** Type of card */
    card = "twitter:card",
    /** Website or brand username */
    site = "twitter:site",
    /** Content creator username */
    creator = "twitter:creator",
    /** Page URL */
    url = "twitter:url",
    /** Title of the card */
    title = "twitter:title",
    /** Short description of the card */
    description = "twitter:description",
    /** Main image for the card */
    image = "twitter:image",
    /** Alternative text for the image */
    imageAlt = "twitter:image:alt",
    /** Alternative image source */
    imageSrc = "twitter:image:src",
    /** Image width */
    imageWidth = "twitter:image:width",
    /** Image height */
    imageHeight = "twitter:image:height",
    /** Custom label 1 */
    label1 = "twitter:label1",
    /** Custom value 1 */
    data1 = "twitter:data1",
    /** Custom label 2 */
    label2 = "twitter:label2",
    /** Custom value 2 */
    data2 = "twitter:data2",
    /** iPhone app name */
    appNameIphone = "twitter:app:name:iphone",
    /** iPhone app ID */
    appIdIphone = "twitter:app:id:iphone",
    /** iPhone app URL */
    appUrlIphone = "twitter:app:url:iphone",
    /** iPad app name */
    appNameIpad = "twitter:app:name:ipad",
    /** iPad app ID */
    appIdIpad = "twitter:app:id:ipad",
    /** iPad app URL */
    appUrlIpad = "twitter:app:url:ipad",
    /** Google Play app name */
    appNameGooglePlay = "twitter:app:name:googleplay",
    /** Google Play app ID */
    appIdGooglePlay = "twitter:app:id:googleplay",
    /** Google Play app URL */
    appUrlGooglePlay = "twitter:app:url:googleplay",
    /** Player iframe URL */
    player = "twitter:player",
    /** Player width */
    playerWidth = "twitter:player:width",
    /** Player height */
    playerHeight = "twitter:player:height",
    /** Direct media stream URL */
    playerStream = "twitter:player:stream",
    /** MIME type of the media stream */
    playerStreamContentType = "twitter:player:stream:content_type"
}

/** Twitter Card types @keywords twitter_card summary large_image app player */
export declare enum MetaTwitterCard {
    /** Summary card with small image */
    summary = "summary",
    /** Summary card with large image */
    summaryLargeImage = "summary_large_image",
    /** App card for mobile applications */
    app = "app",
    /** Player card for rich media */
    player = "player",
    /** Product card for e-commerce */
    product = "product",
    /** Gallery card for multiple images */
    gallery = "gallery",
    /** Photo card */
    photo = "photo",
    /** Lead generation card */
    leadGeneration = "lead_generation",
    /** Audio card */
    audio = "audio",
    /** Poll card */
    poll = "poll"
}

/** Search item type @keywords search item, record */
export type SearchItem = Record<string, any>;
/** Type for generating a column path @keywords search column path */
export type SearchColumnPath<K, P> = K extends string ? P extends string ? `${K}.${P}` : never : never;
/** Type for getting a column @keywords search column */
export type SearchColumn<T extends SearchItem> = {
    [K in keyof T]-?: NonNullable<T[K]> extends object ? K | SearchColumnPath<K, keyof NonNullable<T[K]>> : K;
}[keyof T];
/** Type for a list of columns @keywords search columns */
export type SearchColumns<T extends SearchItem> = (SearchColumn<T> & string)[];
/** Type for formatting the key @keywords search format capitalize */
export type SearchFormatCapitalize<K extends string> = K extends `${infer First}.${infer Rest}` ? `${First}${Capitalize<SearchFormatCapitalize<Rest>>}` : K;
/** Type for generating a search key @keywords search format key */
export type SearchFormatKey<K> = K extends string ? `${SearchFormatCapitalize<K>}Search` : never;
/** Type for a formatted search item @keywords search format item */
export type SearchFormatItem<T extends SearchItem, KT extends string[]> = {
    [K in keyof T | SearchFormatKey<KT[number]>]: K extends keyof T ? T[K] : string;
} & {
    searchActive?: boolean;
};
/** Type for a list of formatted search items @keywords search format list */
export type SearchFormatList<T extends SearchItem, K extends string[]> = SearchFormatItem<T, K>[];
/** Search list value @keywords search list value */
export type SearchListValue<T extends SearchItem> = T[] | undefined;
/** Search options @keywords search options, limit, delay */
export type SearchOptions = {
    limit?: number;
    returnEverything?: boolean;
    delay?: number;
    findExactMatch?: boolean;
    classSearchName?: string;
};
/** Search cache item @keywords search cache item */
export type SearchCacheItem<T extends SearchItem> = {
    item: T;
    value: string;
};
/** Search cache list @keywords search cache */
export type SearchCache<T extends SearchItem> = SearchCacheItem<T>[];
/** Highlight match item type @keywords highlight match item */
export type HighlightMatchItem = {
    text: string;
    isMatch: boolean;
};

/** Sort direction @keywords sort direction asc desc */
export type SortDir = 'asc' | 'desc';
/** Single column sorting specification item @keywords sort column item */
export type SortColumnItem = {
    /** Column or property key for sorting @keywords sort column property */
    column?: string;
    /** Sorting direction @keywords sort dir */
    dir?: SortDir;
};
/** Custom sort function signature @keywords custom sort function */
export type SortFunction<T = any> = (a: T, b: T, column?: string, dir?: SortDir) => number;

export type TranslateConfig = {
    url?: string;
    propsName?: string;
    readApi?: boolean;
};
export type TranslateCode = string | string[];
export type TranslateList<T extends TranslateCode[]> = {
    [K in T[number] as K extends readonly string[] ? K[0] : K]: string;
};
export type TranslateItemOrList<T extends TranslateCode> = T extends string[] ? TranslateList<T> : string;
export type TranslateDataFileList = Record<string, string>;
export type TranslateDataFileItem = () => Promise<TranslateDataFileList>;
export type TranslateDataFile = Record<string, TranslateDataFileItem>;
/** Global translation prefix @keywords prefix, global, translate */
export declare const TRANSLATE_GLOBAL_PREFIX = "global";
/** Request timeout for batch loading @keywords timeout, delay, translate */
export declare const TRANSLATE_TIME_OUT = 160;