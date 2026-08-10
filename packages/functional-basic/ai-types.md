All these methods are in the @dxtmisha/functional-basic library.

/** HTTP requests wrapper and singleton manager */
export declare class Api {
    static isLocalhost(): boolean;
    static getItem(): ApiInstance;
    static getStatus(): ApiStatus;
    static getResponse(): ApiResponse;
    static getHydration(): ApiHydration;
    static getHydrationScript(): string;
    static getOrigin(): string;
    static getUrl(path: string, api?: boolean): string;
    /** Extracts body data for non-GET requests or FormData */
    static getBody(request?: ApiFetch['request'], method?: ApiMethodItem): string | FormData | undefined;
    /** Constructs query string for GET methods */
    static getBodyForGet(request: ApiFetch['request'], path?: string, method?: ApiMethodItem): string;
    static setHeaders(headers: ApiHeadersValue): void;
    static setRequestDefault(request: ApiDefaultValue): void;
    static setUrl(url: string): void;
    static setPreparation(callback: (apiFetch: ApiFetch) => Promise<void>): void;
    static setEnd(callback: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>): void;
    static setTimeout(timeout: number): void;
    static setOrigin(origin: string): void;
    static setWrapper(wrapper: <R>(callback: () => Promise<R>, apiFetch: ApiFetch) => Promise<R>): void;
    static setConfig(config?: ApiConfig): void;
    static request<T>(pathRequest: string | ApiFetch): Promise<T>;
    static get<T>(request: ApiFetch): Promise<T>;
    static post<T>(request: ApiFetch): Promise<T>;
    static put<T>(request: ApiFetch): Promise<T>;
    static patch<T>(request: ApiFetch): Promise<T>;
    static delete<T>(request: ApiFetch): Promise<T>;
}
/** API response caching manager */
export declare class ApiCache {
    protected static getListener?: (key: string) => Promise<ApiCacheItem | undefined>;
    protected static setListener?: (key: string, value: ApiCacheItem) => Promise<boolean>;
    protected static removeListener?: (key: string) => Promise<boolean>;
    /** Initializes storage listeners and sets the data retrieval count before cache cleaning */
    static init(getListener: (key: string) => Promise<ApiCacheItem | undefined>, setListener: (key: string, value: ApiCacheItem) => Promise<boolean>, removeListener: (key: string) => Promise<boolean>, cacheStepAgeClearOld?: number): void;
    static reset(): void;
    static get<T>(key: string): Promise<T | undefined>;
    static getByFetch<T>(fetch: ApiFetch): Promise<T | undefined>;
    static set<T>(key: string, value: T, age?: number): Promise<void>;
    static setByFetch<T>(fetch: ApiFetch, value: T): Promise<void>;
    static remove(key: string): Promise<void>;
    protected static isCache(fetch: ApiFetch): boolean;
    protected static isAge(item?: ApiCacheItem): boolean;
    protected static isItem(key: string): boolean;
    protected static generateKey(fetch: ApiFetch): string;
    protected static getItemOrListener(key: string): Promise<ApiCacheItem | undefined>;
    protected static getList(): ApiCacheList;
    protected static setItemOrListener(key: string, value: ApiCacheItem): Promise<void>;
    protected static removeItemOrListener(key: string): Promise<void>;
    protected static clearOld(): Promise<void>;
}
/** Formats and processes API response raw data */
export declare class ApiDataReturn<T = any> {
    constructor(apiFetch: ApiFetch, query: Response, end: ApiPreparationEnd, error?: ApiErrorItem | undefined);
    init(): Promise<this>;
    get(): ApiData<T>;
    getAndStatus(status: ApiStatus): ApiData<T>;
    getData(): ApiData<T> | undefined;
    protected readData<T>(): Promise<ApiData<T>>;
    protected initData(): ApiData<T>;
    /** Initializes result and merges metadata from raw response data */
    protected initItem(data: Record<string, any>): ApiData<T>;
}
/** Default API request data manager */
export declare class ApiDefault {
    is(): boolean;
    get(): Record<string, any> | undefined;
    request(request: ApiFetch['request']): ApiFetch['request'];
    set(request: ApiDefaultValue): this;
    protected addByFormData(request: FormData, value: ApiDefaultValue): this;
}
/** API error storage and response wrapper utility */
export declare class ApiError {
    static getStorage(): ApiErrorStorage;
    static add(item: Partial<ApiErrorStorageItem> | Partial<ApiErrorStorageItem>[], url?: string | RegExp, method?: ApiMethodItem): void;
    /** Creates an ApiErrorItem matching response against stored error criteria */
    static getItem(method: ApiMethodItem, response: Response): Promise<ApiErrorItem>;
}
/** Encapsulates request method, raw response, and identified error criteria for processing */
export declare class ApiErrorItem {
    constructor(method: ApiMethodItem, response: Response, error: ApiErrorStorageItem);
    getMethod(): ApiMethodItem;
    getResponse(): Response;
    getError(): ApiErrorStorageItem;
    getCode(): string | undefined;
    getMessage(): string | undefined;
    getStatus(): number;
}
/** Centralized storage manager to identify errors by matching status, code, method, and URL */
export declare class ApiErrorStorage {
    find(method: ApiMethodItem, response: Response): Promise<ApiErrorStorageItem>;
    add(item: Partial<ApiErrorStorageItem> | Partial<ApiErrorStorageItem>[], url?: string | RegExp, method?: ApiMethodItem): this;
    protected findItem(method: ApiMethodItem, response: Response, code?: string): ApiErrorStorageItem | undefined;
    protected isUrl(url: string, pattern: string | RegExp): boolean;
    protected getBody(response: Response): Promise<any>;
    protected getDataByKey<R = string>(body: any, key: string): R | undefined;
    protected getCode(body: any): string | undefined;
    protected getMessage(body: any): string | undefined;
}
/** API request headers manager */
export declare class ApiHeaders {
    get(value?: Record<string, string> | null, type?: string | undefined | null): Record<string, string> | undefined;
    getByRequest(request: ApiFetch['request'], value?: Record<string, string> | null, type?: string): Record<string, string> | undefined;
    set(headers: ApiHeadersValue): this;
}
/** Collects API data for SSR client hydration */
export declare class ApiHydration {
    initResponse(response: ApiResponse): void;
    toClient<T>(apiFetch: ApiFetch, response: T): void;
    toString(): string;
    protected getListByClient(): ApiHydrationList;
}
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
/** Core class for managing HTTP requests using the Fetch API */
export declare class ApiInstance {
    protected wrapper?: <R>(callback: () => Promise<R>, apiFetch: ApiFetch) => Promise<R>;
    constructor(url?: string, options?: ApiInstanceOptions);
    isLocalhost(): boolean;
    getStatus(): ApiStatus;
    getResponse(): ApiResponse;
    getHydration(): ApiHydration;
    getOrigin(): string;
    getUrl(path: string, api?: boolean): string;
    getBody(request?: ApiFetch['request'], method?: ApiMethod): string | FormData | undefined;
    getBodyForGet(request: ApiFetch['request'], path?: string, method?: ApiMethod): string;
    getHydrationScript(): string;
    setHeaders(headers: ApiHeadersValue): this;
    setRequestDefault(request: ApiDefaultValue): this;
    setUrl(url: string): this;
    setPreparation(callback: (apiFetch: ApiFetch) => Promise<void>): this;
    setEnd(callback: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>): this;
    setTimeout(timeout: number): this;
    setOrigin(origin: string): this;
    setWrapper(wrapper: <R>(callback: () => Promise<R>, apiFetch: ApiFetch) => Promise<R>): this;
    request<T>(pathRequest: string | ApiFetch): Promise<T>;
    get<T>(request: ApiFetch): Promise<T>;
    post<T>(request: ApiFetch): Promise<T>;
    put<T>(request: ApiFetch): Promise<T>;
    patch<T>(request: ApiFetch): Promise<T>;
    delete<T>(request: ApiFetch): Promise<T>;
    protected getRetryDelay(retryCount: number, retryDelay: number): number;
    protected fetch<T>(apiFetch: ApiFetch, retryCount?: number): Promise<T>;
    protected makeQuery(apiFetch: ApiFetch, pathToApi: string): Promise<{
        query: Response;
        timeoutId: any;
    }>;
    protected makeError(error: Record<string, any> & {
        name: string;
    }, group?: string): void;
    protected makeErrorQuery(error: ApiErrorItem | Response): void;
    protected initController(apiFetch: ApiFetch, fetchInit: RequestInit): any;
}
/** Class for preparing requests */
export declare class ApiPreparation {
    protected callback?: (apiFetch: ApiFetch) => Promise<void>;
    protected callbackEnd?: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>;
    make(active: boolean, apiFetch: ApiFetch): Promise<void>;
    makeEnd(active: boolean, query: Response, apiFetch: ApiFetch): Promise<ApiPreparationEnd>;
    set(callback: (apiFetch: ApiFetch) => Promise<void>): this;
    setEnd(callback: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>): this;
    protected go(apiFetch: ApiFetch, limit?: number): Promise<void>;
}
/** Manager for working with API responses and cache emulation */
export declare class ApiResponse {
    constructor(requestDefault: ApiDefault);
    get(path: string | undefined, method: ApiMethod, request?: ApiFetch['request'], devMode?: boolean): ApiResponseItem | undefined;
    getList(): (ApiResponseItem & Record<string, any>)[];
    add(response: ApiResponseItem | ApiResponseItem[]): this;
    setDevMode(devMode: boolean): this;
    emulator<T>(apiFetch: ApiFetch): Promise<T | undefined>;
    emulatorAsync<T>(apiFetch: ApiFetch): T | undefined;
    protected isDisable(item: ApiResponseItem): boolean;
    protected isPath(item: ApiResponseItem, path: string): boolean;
    protected isDevMode(devMode?: boolean): boolean;
    protected isFirst(item: ApiResponseItem, devMode?: boolean): boolean;
    protected isResponse(item: ApiResponseItem, request?: ApiFetch['request']): boolean;
    protected readData(apiFetch: ApiFetch): {
        response: ApiResponseItem;
        request: string | Record<string, any> | FormData | undefined;
    } | undefined;
    protected fetch<T>(response: ApiResponseItem, request?: ApiFetch['request']): Promise<T>;
    protected fetchAsync<T>(response: ApiResponseItem): T;
    protected startResponseLoading(): void;
    protected stopResponseLoading(): void;
}
/** API request status manager */
export declare class ApiStatus {
    get(): ApiStatusItem | undefined;
    getStatus(): number | undefined;
    getStatusText(): string | undefined;
    getStatusType(): ApiStatusType | undefined;
    getCode(): string | undefined;
    getError(): string | undefined;
    getResponse<T>(): T | undefined;
    getMessage(): string;
    set(data: ApiStatusItem): this;
    setStatus(status?: number, statusText?: string): this;
    setError(error?: string): this;
    setLastResponse(response?: any): this;
    setLastStatus(status?: ApiStatusType): this;
    setLastCode(code?: string): this;
    setLastMessage(message?: string): this;
    protected setValue<K extends keyof ApiStatusItem>(name: K, value?: ApiStatusItem[K]): void;
}
/** Class for working with BroadcastChannel messages */
export declare class BroadcastMessage<Message = any> {
    protected callback?: ((event: MessageEvent<Message>) => void) | undefined;
    protected callbackError?: ((event: MessageEvent<Message>) => void) | undefined;
    constructor(name: string, callback?: ((event: MessageEvent<Message>) => void) | undefined, callbackError?: ((event: MessageEvent<Message>) => void) | undefined, errorCenter?: ErrorCenterInstance);
    getChannel(): BroadcastChannel | undefined;
    post(message: Message): this;
    setCallback(callback: (event: MessageEvent<Message>) => void): this;
    setCallbackError(callbackError: (event: MessageEvent<Message>) => void): this;
    destroy(): this;
    protected readonly update: (event: MessageEvent<Message>) => this;
    protected readonly updateError: (event: MessageEvent<Message>) => this;
}
/** Simple in-memory cache class that stores computed values by key
 * @deprecated This class is obsolete and should not be used
 */
export declare class Cache {
    get<T>(name: string, callback: () => T, comparison?: any[]): T;
    getAsync<T>(name: string, callback: () => T, comparison?: any[]): Promise<T>;
}
/** Class for managing a single cached value with dependency tracking
 * @deprecated This class is obsolete and should not be used
 */
export declare class CacheItem<T> {
    constructor(callback: () => T);
    getCache(comparison: any[]): T;
    getCacheOld(): T | undefined;
    getCacheAsync(comparison: any[]): Promise<T>;
}
/** Static cache class that uses ServerStorage for persistent caching across the application
 * @deprecated This class is obsolete and should not be used
 */
export declare class CacheStatic {
    protected static getItem(): Cache;
    static get<T>(name: string, callback: () => T, comparison?: any[]): T;
    static getAsync<T>(name: string, callback: () => T, comparison?: any[]): Promise<T>;
}
/** Class for working with cookies */
export declare class Cookie<T> {
    static getInstance<T>(name: string): Cookie<T>;
    constructor(name: string);
    get(defaultValue?: T | string | (() => (T | string)), options?: CookieOptions): string | T | undefined;
    set(value?: T | string | (() => (T | string)), options?: CookieOptions): void;
    remove(): void;
}
/** Class for changing cookie access status */
export declare class CookieBlock {
    static getItem(): CookieBlockInstance;
    static get(): boolean;
    static set(value: boolean): void;
}
/** Class for changing cookie access status */
export declare class CookieBlockInstance {
    get(): boolean;
    set(value: boolean): void;
}
/** Cookie sameSite attribute */
export type CookieSameSite = 'strict' | 'lax';
/** Cookie options */
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
 * Class for managing cookie storage with support for custom listeners.
 * Useful for consistent cookie handling across different environments (DOM, SSR).
 */
export declare class CookieStorage {
    protected static getListener?: (key: string) => any | undefined;
    protected static getListenerRaw?: () => string;
    protected static setListener?: (key: string, value: any, cookie: string, options?: CookieOptions) => void;
    static init(getListener?: (key: string) => any | undefined, getListenerRaw?: () => string, setListener?: (key: string, value: any, cookie: string, options?: CookieOptions) => void): void;
    static reset(): void;
    static get<T>(name: string, defaultValue?: T | (() => T)): T | undefined;
    static set<T>(name: string, value: T | (() => T), options?: CookieOptions): T;
    static remove(name: string): void;
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
/**
 * Class for working with localStorage and sessionStorage.
 * Includes support for prefixes, expiration time, and request isolation in SSR.
 */
export declare class DataStorage<T> {
    static setPrefix(newPrefix: string): void;
    constructor(name: string, isSession?: boolean, errorCenter?: ErrorCenterInstance);
    get(defaultValue?: T | (() => T), cache?: number): T | undefined;
    set(value?: T | (() => T)): T | undefined;
    remove(): this;
    update(): this;
}
/**
 * A class for working with dates.
 *
 * @remarks
 * Creating a `Datetime` instance without a specific date (using the current time)
 * for rendering in SSR may lead to hydration mismatches because the time or time zone
 * on the server may differ from the time on the client.
 */
export declare class Datetime {
    protected watch?: (date: Date, type: GeoDate, hour24: boolean) => void;
    constructor(date?: NumberOrStringOrDate, type?: GeoDate, code?: string);
    getIntl(): GeoIntl;
    getDate(): Date;
    getType(): GeoDate;
    getHoursType(): GeoHours;
    getHour24(): boolean;
    getTimeZoneOffset(): number;
    getTimeZone(style?: GeoTimeZoneStyle): string;
    getFirstDayCode(): GeoFirstDay;
    getYear(): number;
    getMonth(): number;
    getDay(): number;
    getHour(): number;
    getMinute(): number;
    getSecond(): number;
    getMaxDay(): number;
    locale(type?: GeoDate, styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions): string;
    localeYear(style?: Intl.DateTimeFormatOptions['year']): string;
    localeMonth(style?: Intl.DateTimeFormatOptions['month']): string;
    localeDay(style?: Intl.DateTimeFormatOptions['day']): string;
    localeHour(style?: Intl.DateTimeFormatOptions['hour']): string;
    localeMinute(style?: Intl.DateTimeFormatOptions['minute']): string;
    localeSecond(style?: Intl.DateTimeFormatOptions['second']): string;
    standard(timeZone?: boolean): string;
    setDate(value: NumberOrStringOrDate): this;
    setType(value: GeoDate): this;
    setHour24(value: boolean): this;
    setCode(code: string): this;
    setWatch(watch: (date: Date, type: GeoDate, hour24: boolean) => void): this;
    setYear(value: number): this;
    setMonth(value: number): this;
    setDay(value: number): this;
    setHour(value: number): this;
    setMinute(value: number): this;
    setSecond(value: number): this;
    moveByYear(value: number): this;
    moveByMonth(value: number): this;
    moveByDay(value: number): this;
    moveByHour(value: number): this;
    moveByMinute(value: number): this;
    moveBySecond(value: number): this;
    moveMonthFirst(): this;
    moveMonthLast(): this;
    moveMonthNext(): this;
    moveMonthPrevious(): this;
    moveWeekdayFirst(): this;
    moveWeekdayLast(): this;
    moveWeekdayFirstByMonth(): this;
    moveWeekdayLastByMonth(): this;
    moveWeekdayNext(): this;
    moveWeekdayPrevious(): this;
    moveDayFirst(): this;
    moveDayLast(): this;
    moveDayNext(): this;
    moveDayPrevious(): this;
    clone(): Date;
    cloneClass(): Datetime;
    cloneMonthFirst(): Datetime;
    cloneMonthLast(): Datetime;
    cloneMonthNext(): Datetime;
    cloneMonthPrevious(): Datetime;
    cloneWeekdayFirst(): Datetime;
    cloneWeekdayLast(): Datetime;
    cloneWeekdayFirstByMonth(): Datetime;
    cloneWeekdayLastByMonth(): Datetime;
    cloneWeekdayNext(): Datetime;
    cloneWeekdayPrevious(): Datetime;
    cloneDayFirst(): Datetime;
    cloneDayLast(): Datetime;
    cloneDayNext(): Datetime;
    cloneDayPrevious(): Datetime;
    protected toTimeZoneHourFormat(hour: number): string;
    protected update(): this;
}
/** Class for managing error storage and handling */
export declare class ErrorCenter {
    static getItem(): ErrorCenterInstance;
    static has(code: string, group?: string): boolean;
    static get(code: string, group?: string): ErrorCenterCauseItem | undefined;
    static add(cause: ErrorCenterCauseItem): void;
    static addList(causes: ErrorCenterCauseList): void;
    static addHandler(group: ErrorCenterGroup, handler: ErrorCenterHandlerCallback): void;
    static addHandlerList(handlers: ErrorCenterHandlerList): void;
    static addCallback(callback: ErrorCenterHandlerCallback): void;
    static setIsConsole(isConsole: ErrorCenterHandlerIsConsole): void;
    static on(cause: ErrorCenterCauseItem): void;
}
/** Class for managing and triggering error handlers */
export declare class ErrorCenterHandler {
    constructor(handlers?: ErrorCenterHandlerList, isConsole?: ErrorCenterHandlerIsConsole);
    has(group: ErrorCenterGroup): boolean;
    get(group: ErrorCenterGroup): ErrorCenterHandlerItem | undefined;
    add(group: ErrorCenterGroup, handler: ErrorCenterHandlerCallback): this;
    addList(handlers: ErrorCenterHandlerList): this;
    addCallback(callback: ErrorCenterHandlerCallback): this;
    setIsConsole(isConsole: ErrorCenterHandlerIsConsole): this;
    on(cause: ErrorCenterCauseItem): this;
    protected toConsole(cause: ErrorCenterCauseItem): this;
}
/** Class for managing error storage and handling within an instance */
export declare class ErrorCenterInstance {
    constructor(causes?: ErrorCenterCauseList, handler?: ErrorCenterHandler);
    has(code: string, group?: string): boolean;
    get(code: string, group?: string): ErrorCenterCauseItem | undefined;
    add(cause: ErrorCenterCauseItem): this;
    addList(causes: ErrorCenterCauseList): this;
    addHandler(group: ErrorCenterGroup, handler: ErrorCenterHandlerCallback): this;
    addHandlerList(handlers: ErrorCenterHandlerList): this;
    addCallback(callback: ErrorCenterHandlerCallback): this;
    setIsConsole(isConsole: ErrorCenterHandlerIsConsole): this;
    on(cause: ErrorCenterCauseItem): this;
    protected assign(cause: ErrorCenterCauseItem): ErrorCenterCauseItem;
}
/**
 * Advanced wrapper for managing event listeners on DOM elements or the `window` object.
 *
 * `EventItem` simplifies the entire event lifecycle (start, stop, toggle, reset), provides
 * built-in optimizations for high-frequency events, and ensures DOM safety by automatically
 * checking if elements are still in the document.
 *
 * ### Key Features:
 * - **Lifecycle Control**: Easily `start`, `stop`, `toggle`, or `reset` event listeners.
 * - **DOM Safety**: Automatically halts the event if the target element is removed from the DOM.
 * - **Specialized Optimizations**:
 *   - `resize`: Uses `ResizeObserver` for any HTML element (not limited to `window`).
 *   - `scroll-sync`: High-performance scroll tracking using `requestAnimationFrame`.
 * - **Dynamic Configuration**: Chained setters for target element, event type, listener, and options.
 * - **Custom Event Dispatching**: Built-in support for triggering events with custom data via `dispatch`.
 * - **Strict Typing**: Generic support for elements, event objects, and custom detail data.
 *
 * ### Usage Examples:
 *
 * #### 1. Basic Listener
 * ```typescript
 * const clickEvent = new EventItem('.btn', 'click', (e) => console.log('Clicked!'));
 * clickEvent.start();
 * ```
 *
 * #### 2. Specialized 'resize' and 'scroll-sync'
 * ```typescript
 * // Tracks any element's size
 * const resizeEvent = new EventItem('.box', 'resize', (entry) => console.log('New size:', entry));
 *
 * // Performance-optimized scroll
 * const scrollEvent = new EventItem(window, 'scroll-sync', () => console.log('Scrolling...'));
 *
 * resizeEvent.start();
 * scrollEvent.start();
 * ```
 *
 * #### 3. Custom Data and Dispatching
 * ```typescript
 * interface UserData { id: number }
 * const emitter = new EventItem<Window, CustomEvent, UserData>(window, 'user-update');
 *
 * emitter.setListener((e, detail) => {
 *   console.log('Update received for ID:', detail?.id);
 * });
 *
 * emitter.start();
 *
 * // Trigger manually with data
 * emitter.dispatch({ id: 456 });
 * ```
 *
 * #### 4. Chaining and Dynamic Updates
 * ```typescript
 * const tracker = new EventItem('.item-1', 'mousemove', (e) => console.log(e.clientX));
 *
 * // Switch element on the fly
 * tracker.start().setElement('.item-2');
 * ```
 */
export declare class EventItem<E extends ElementOrWindow, O extends Event, D extends Record<string, any> = Record<string, any>> {
    protected listenerRecent: (event?: O | ResizeObserverEntry) => void;
    constructor(elementSelector?: ElementOrString<E>, type?: string | string[], listener?: EventListenerDetail<O, D> | undefined, options?: EventOptions, detail?: D | undefined);
    isActive(): boolean;
    getElement(): E | undefined;
    setElement(elementSelector?: ElementOrString<E>): this;
    setElementControl<EC extends HTMLElement>(elementSelector?: ElementOrString<EC>): this;
    setType(type: string | string[]): this;
    setListener(listener: EventListenerDetail<O, D>): this;
    setOptions(options?: EventOptions): this;
    setDetail(detail?: D): this;
    dispatch(detail?: D | undefined): this;
    start(): this;
    stop(): this;
    toggle(activity: boolean): this;
    reset(): this;
    protected isObserver(): boolean;
    protected makeResize(): boolean;
    protected makeScroll(): boolean;
}
/** Class for formatting a list of data based on provided options.
 * @template Options type of formatting options.
 * @template List type of the list of items (can be an array or a single item).
 * @template Item type of a single item in the list.
 */
export declare class Formatters<Options extends FormattersOptionsList = FormattersOptionsList, List extends FormattersListProp = FormattersListProp, Item extends FormattersItemProp<List> = FormattersItemProp<List>> {
    /** Constructor
     * @param options formatting options for each column/property
     * @param list initial list of data to format
     */
    constructor(options: Options, list?: List | undefined);
    /** Checks if the list is set. */
    is(): boolean;
    /** Checks if the list is an array. */
    isArray(): this is this & {
        list: FormattersList<Item>;
    };
    /** Returns the count of records in the list. */
    length(): number;
    /** Returns the current list of data as an array. */
    getList(): FormattersList<Item>;
    /** Returns the current formatting options. */
    getOptions(): Options;
    /** Sets the list of data to be formatted. */
    setList(list?: List): this;
    /** Formats the entire list or a single item based on the provided options.
     * Adds formatted values with the suffix 'Format' to each item.
     * @returns formatted data (list or single item)
     */
    to(): FormattersReturn<List, Options>;
    /** Generates formatted data for a single item based on options.
     * @param item item to format
     * @returns object with formatted fields
     * @protected
     */
    protected getFormatData(item: Item): Record<string, string>;
    /** Router-like method to delegate formatting to specific type formatters.
     * @param valueOriginal original value to format
     * @param item entire item context
     * @param type type of formatter to use
     * @param options additional options for the specific formatter
     * @protected
     * @returns Formatted string
     */
    protected transformation<Type extends FormattersType>(valueOriginal: any, item: any, type?: Type, options?: FormattersOptionsInformation<Type>): string;
    /** Formats a value as currency.
     * @param value value to format
     * @param item item context
     * @param options currency formatting options
     * @protected
     * @returns Formatted currency string
     */
    protected formatCurrency(value: any, item: Item, options?: FormattersOptionsCurrency): string;
    /** Formats a value as a date.
     * @param value value to format
     * @param options date formatting options
     * @protected
     * @returns Formatted date string
     */
    protected formatDate(value: any, options?: FormattersOptionsDate): string;
    /** Formats full name from multiple property names.
     * @param item item context containing name components
     * @param options name formatting options (prop names for first, last, surname)
     * @protected
     * @returns Formatted name string or empty string if components are missing
     */
    protected formatName(item: Item, options?: FormattersOptionsName): string;
    /** Formats a value as a number.
     * @param value value to format
     * @param options number formatting options
     * @protected
     * @returns Formatted number string
     */
    protected formatNumber(value: any, options?: FormattersOptionsNumber): string;
    /** Formats a value based on plural rules.
     * @param value numeric value for pluralization
     * @param options plural formatting options (words and rules)
     * @protected
     * @returns Formatted plural string
     */
    protected formatPlural(value: any, options?: FormattersOptionsPlural): string;
    /** Formats a value with a specific unit.
     * @param value value to format
     * @param options unit formatting options
     * @protected
     * @returns Formatted unit string
     */
    protected formatUnit(value: any, options?: FormattersOptionsUnit): string;
}
/** Static class for working with geographical data.
 * Provides a centralized interface for managing locale, country, and time zone.
 */
export declare class Geo {
    /** Returns a request-isolated instance of GeoInstance. */
    static getObject(): GeoInstance;
    /** Returns information about the current country and language. */
    static get(): GeoItemFull;
    /** Returns the 2-letter code of the current country. */
    static getCountry(): string;
    /** Returns the 2-letter code of the current language. */
    static getLanguage(): string;
    /** Returns the combined locale string in the standard format (e.g., 'en-US'). */
    static getStandard(): string;
    /** Returns the code for the first day of the week for the current locale. */
    static getFirstDay(): string;
    /** Returns the current location string. */
    static getLocation(): string;
    /** Returns the country code extracted from the location string. */
    static getLocationCountry(): string;
    /** Returns the language code extracted from the location string. */
    static getLocationLanguage(): string;
    /** Returns fully processed geo data updated with the current language. */
    static getItem(): GeoItemFull;
    /** Returns the complete list of available countries and regions. */
    static getList(): GeoItem[];
    /** Returns geo data by country or language code from the global database.
     * @param code country or language code
     */
    static getByCode(code?: string): GeoItemFull;
    /** Returns exact geo data by searching for the full locale match (e.g., 'en-US').
     * @param code full locale string
     */
    static getByCodeFull(code: string): GeoItem | undefined;
    /** Returns geo data for a specific country by its code.
     * @param country country code
     */
    static getByCountry(country: string): GeoItem | undefined;
    /** Returns geo data for a specific language by its code.
     * @param language language code
     */
    static getByLanguage(language: string): GeoItem | undefined;
    /** Returns the time zone offset in minutes for the current context. */
    static getTimezone(): number;
    /** Returns the formatted time zone string (e.g., '+00:00') for the current context. */
    static getTimezoneFormat(): string;
    /** Finds or determines the geo data for a given code. Alias for getByCode.
     * @param code country or language code
     */
    static find(code: string): GeoItemFull;
    /** Returns a standard concatenated string for a geo item (e.g., 'en-US').
     * @param item geo item data
     */
    static toStandard(item: GeoItem): string;
    /** Sets the current geographical location. Updates the instance state.
     * @param code location code
     * @param save whether to persist the change in storage
     */
    static set(code: string, save?: boolean): void;
    /** Sets a custom time zone offset for the current context.
     * @param timezone timezone offset in minutes
     */
    static setTimezone(timezone: number): void;
    /** Sets the default value for the country code.
     * @param code default code value
     */
    static setValueDefault(code?: string | (() => string)): void;
}
export declare const GEO_FLAG_ICON_NAME = "f";
/** Class for working with flags and geographic information.
 * Provides methods for retrieving country names, languages, and flag icons.
 */
export declare class GeoFlag {
    /** Constructor
     * @param code country and language code
     */
    constructor(code?: string);
    /** Returns information about the country and its flag.
     * @param code country code
     */
    get(code?: string): GeoFlagItem | undefined;
    /** Returns information about the language and its flag.
     * @param code country code
     */
    getLanguage(code?: string): GeoFlagItem | undefined;
    /** Returns the country code. */
    getCode(): string;
    /** Returns the identifier of the flag icon.
     * @param code country code
     */
    getFlag(code?: string): string | undefined;
    /** Returns a list of countries based on the provided codes.
     * If no codes are provided, returns all available countries.
     * @param codes array of country codes
     * @param sort whether to sort the list
     */
    getList(codes?: string[], sort?: boolean): GeoFlagItem[];
    /** Returns a list of languages based on the provided codes.
     * If no codes are provided, returns all available languages.
     * @param codes array of country codes
     * @param sort whether to sort the list
     */
    getListLanguage(codes?: string[], sort?: boolean): GeoFlagItem[];
    /** Returns a list of countries in their national languages.
     * @param codes array of country codes
     * @param sort whether to sort the list
     */
    getNational(codes?: string[], sort?: boolean): GeoFlagNational[];
    /** Returns a list of languages in their national names.
     * @param codes array of country codes
     * @param sort whether to sort the list
     */
    getNationalLanguage(codes?: string[], sort?: boolean): GeoFlagNational[];
    /** Changes the current locale/location.
     * @param code country and language code
     */
    setCode(code: string): this;
    /** Returns a special object for formatting and translations.
     * @protected
     */
    protected getLocation(): GeoIntl;
    /** Returns a list of country codes to retrieve data from.
     * @param codes optional array of codes
     * @protected
     */
    protected getCodes(codes?: string[]): string[];
    /** Getting the name of the language.
     * @param data object with information of data
     */
    protected getLanguageName(data: GeoItemFull): string;
    /** Getting the name of the country.
     * @param data object with information of data
     */
    protected getCountry(data: GeoItemFull): string;
}
/** Cookie key for storing the geo code */
export declare const UI_GEO_COOKIE_KEY = "ui-geo-code";
/** Base class for working with geographic data.
 * Includes methods for determining location, language, and time zone.
 */
export declare class GeoInstance {
    constructor();
    get(): GeoItemFull;
    getCountry(): string;
    getLanguage(): string;
    getStandard(): string;
    getFirstDay(): string;
    getLocation(): string;
    getLocationCountry(): string;
    getLocationLanguage(): string;
    getItem(): GeoItemFull;
    getList(): GeoItem[];
    getByCode(code?: string): GeoItemFull;
    getByCodeFull(code: string): GeoItem | undefined;
    getByCountry(country: string): GeoItem | undefined;
    getByLanguage(language: string): GeoItem | undefined;
    getTimezone(): number;
    getTimezoneFormat(): string;
    find(code: string): GeoItemFull;
    toStandard(item: GeoItem, language?: string): string;
    set(code: string, save?: boolean): void;
    setTimezone(timezone: number): void;
    setValueDefault(code?: string | (() => string)): void;
}
/**
 * The Intl namespace object contains several constructors as well as functionality common
 * to the internationalization constructors and other language sensitive functions. Collectively,
 * they comprise the ECMAScript Internationalization API, which provides language sensitive
 * string comparison, number formatting, date and time formatting, and more
 */
export declare class GeoIntl {
    static isItem(code?: string): boolean;
    static getLocation(code?: string): string;
    static getInstance(code?: string): GeoIntl;
    constructor(code?: string, errorCenter?: ErrorCenterInstance);
    getLocation(): string;
    getFirstDay(): string;
    display(value?: string, typeOptions?: Intl.DisplayNamesOptions['type'] | Intl.DisplayNamesOptions): string;
    languageName(value?: string, style?: Intl.RelativeTimeFormatStyle): string;
    countryName(value?: string, style?: Intl.RelativeTimeFormatStyle): string;
    fullName(last: string, first: string, surname?: string, short?: boolean): string;
    number(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    decimal(): string;
    currency(value: NumberOrString, currencyOptions?: string | Intl.NumberFormatOptions, numberOnly?: boolean): string;
    currencySymbol(currency: string, currencyDisplay?: keyof Intl.NumberFormatOptionsCurrencyDisplayRegistry): string;
    unit(value: NumberOrString, unitOptions?: string | Intl.NumberFormatOptions): string;
    sizeFile(value: NumberOrString, unitOptions?: 'byte' | 'kilobyte' | 'megabyte' | 'gigabyte' | 'terabyte' | 'petabyte' | Intl.NumberFormatOptions): string;
    percent(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    percentBy100(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    plural(value: NumberOrString, words: string, options?: Intl.PluralRulesOptions, optionsNumber?: Intl.NumberFormatOptions): string;
    date(value: NumberOrStringOrDate, type?: GeoDate, styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions, hour24?: boolean): string;
    relative(value: NumberOrStringOrDate, styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions, todayValue?: Date): string;
    relativeLimit(value: NumberOrStringOrDate, limit: number, todayValue?: Date, relativeOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions, dateOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions, type?: GeoDate, hour24?: boolean): string;
    relativeByValue(value: NumberOrString, unit: Intl.RelativeTimeFormatUnit, styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions): string;
    month(value?: NumberOrStringOrDate, style?: Intl.DateTimeFormatOptions['month']): string;
    months(style?: Intl.DateTimeFormatOptions['month']): ItemValue<number | undefined>[];
    weekday(value?: NumberOrStringOrDate, style?: Intl.DateTimeFormatOptions['weekday']): string;
    weekdays(style?: Intl.DateTimeFormatOptions['weekday']): ItemValue<number | undefined>[];
    time(value: NumberOrStringOrDate): string;
    sort<T>(data: T[], compareFn?: (a: T, b: T) => [string, string]): T[];
}
/** A class for storing and processing phone number masks */
export declare class GeoPhone {
    static get(code: string): GeoPhoneValue | undefined;
    static getByPhone(phone: string): GeoPhoneMapInfo;
    static getByCode(code: string): GeoPhoneMap | undefined;
    static getList(): GeoPhoneValue[];
    static getMap(): Record<string, GeoPhoneMap>;
    static toMask(phone: string, masks?: string[]): string | undefined;
    static removeZero(phone: string): string;
    protected static getWithinSymbol(within: number | string): string;
    protected static getUnnecessaryLength(mask: string): number;
    protected static makeList(): void;
    protected static makeMap(): void;
    protected static toNumber(value: string): string[];
    protected static toStandard(phone: string, mask: string): string;
    protected static toWithin(mask: string, within: number | string): string;
}
/**
 * Class for localized unit formatting and automatic conversions.
 * Automatically translates metric units (like gram, meter) to local equivalents
 * (like ounce, foot) for non-metric regions (US, MM, LR) and formats them.
 */
export declare class GeoUnit {
    static getInstance(code?: string): GeoUnit;
    constructor(code?: string);
    getLocation(): string;
    millimeter(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    centimeter(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    meter(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    kilometer(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    squareMeter(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    hectare(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    gram(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    kilogram(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    tonne(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    milliliter(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    liter(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    celsius(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    kilometerPerHour(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    format(value: NumberOrString, unit: string, options?: Intl.NumberFormatOptions): string;
    protected isCelsiusToFahrenheit(from: string, to: string): boolean;
    protected getTargetUnit(sourceUnit: string): string;
    protected formatUnit(value: NumberOrString, sourceUnit: string, options?: Intl.NumberFormatOptions): string;
    protected convert(value: number, from: string, to: string): number;
    protected celsiusToFahrenheit(value: number): number;
}
/** Static utility class for storing and retrieving application-wide global data */
export declare class Global {
    static getItem(): Record<string, any>;
    static get<R = any>(name: string): R;
    static add(data: Record<string, any>): void;
}
/** Static class for working with data stored in the URL hash */
export declare class Hash {
    static getItem(): HashInstance;
    static get<T>(name: string, defaultValue?: T | (() => T)): T;
    static set<T>(name: string, callback: T | (() => T)): void;
    static addWatch<T>(name: string, callback: (value: T) => void): void;
    static removeWatch<T>(name: string, callback: (value: T) => void): void;
    static reload(): void;
}
/** Class for working with data stored in the URL hash */
export declare class HashInstance extends UrlInstanceAbstract {
    protected init(): this;
    protected getLocation(): Record<string, any>;
    protected update(): this;
}
export type IconsItem = string | Promise<string | any> | (() => Promise<string | any>);
export type IconsConfig = {
    /** URL to the icons storage / URL к хранилищу иконок */
    url?: string;
    /** List of custom icons / Список пользовательских иконок */
    list?: Record<string, IconsItem>;
};
/** Class for managing icons */
export declare class Icons {
    static is(index: string): boolean;
    static get(index: string, url?: string, wait?: number): Promise<string>;
    static getAsync(index: string, url?: string): string;
    static getNameList(): string[];
    static getUrlGlobal(): string;
    static add(index: string, file: IconsItem): void;
    static addLoad(index: string): void;
    static addGlobal(index: string, file: string): void;
    static addByList(list: Record<string, IconsItem>): void;
    static setUrl(url: string): void;
    static setConfig(config: IconsConfig): void;
    protected static getName(index: string): string;
    protected static getRaw(index: string, url?: string): IconsItem;
    protected static wait(): Promise<void>;
}
/** Class for working with global loading */
export declare class Loading {
    static is(): boolean;
    static get(): number;
    static getItem(): LoadingInstance;
    static show(): void;
    static hide(): void;
    static registrationEvent(listener: EventListenerDetail<CustomEvent, LoadingDetail>, element?: ElementOrString<HTMLElement>): void;
    static unregistrationEvent(listener: EventListenerDetail<CustomEvent, LoadingDetail>, element?: ElementOrString<HTMLElement>): void;
}
/**
 * Data for the loading event.
 *
 * Данные для события загрузки.
 */
export type LoadingDetail = {
    /** Loading status / Статус загрузки */
    loading: boolean;
};
/**
 * Registration item for the loading event.
 *
 * Элемент регистрации для события загрузки.
 */
export type LoadingRegistrationItem = {
    /** Event item / Элемент события */
    item: EventItem<Window, CustomEvent, LoadingDetail>;
    /** Event listener / Слушатель события */
    listener: EventListenerDetail<CustomEvent, LoadingDetail>;
    /** Element / Элемент */
    element?: ElementOrString<HTMLElement>;
};
/** Class for working with global loading */
export declare class LoadingInstance {
    constructor(eventName?: string);
    is(): boolean;
    get(): number;
    show(): void;
    hide(): void;
    registrationEvent(listener: EventListenerDetail<CustomEvent, LoadingDetail>, element?: ElementOrString<HTMLElement>): void;
    unregistrationEvent(listener: EventListenerDetail<CustomEvent, LoadingDetail>, element?: ElementOrString<HTMLElement>): void;
    protected dispatch(): void;
}
/** Unified class for managing all types of meta tags (standard HTML, Open Graph, Twitter Card) */
export declare class Meta extends MetaManager<MetaTag[]> {
    constructor();
    getOg(): MetaOg;
    getTwitter(): MetaTwitter;
    getTitle(): string;
    getKeywords(): string;
    getDescription(): string;
    getImage(): string;
    getCanonical(): string;
    getRobots(): MetaRobots;
    getAuthor(): string;
    getSiteName(): string;
    getLocale(): string;
    setTitle(title: string): this;
    setKeywords(keywords: string | string[]): this;
    setDescription(description: string): this;
    setImage(image: string): this;
    setCanonical(canonical: string): this;
    setRobots(robots: MetaRobots): this;
    setAuthor(author: string): this;
    setSiteName(siteName: string): this;
    setLocale(locale: string): this;
    setSuffix(suffix?: string): void;
    html(): string;
    htmlTitle(): string;
    protected getSuffix(): string;
}
type MetaList<T extends readonly string[]> = {
    [K in T[number]]?: string;
};
/** Class for working with meta tags */
export declare class MetaManager<T extends readonly string[], Key extends keyof MetaList<T> = keyof MetaList<T>> {
    constructor(listMeta: T, isProperty?: boolean);
    getListMeta(): T;
    get(name: Key): string;
    getItems(): MetaList<T>;
    html(): string;
    set(name: Key, content: string): this;
    setByList(metaList: MetaList<T>): this;
    protected getAttributeName(): string;
    protected findMetaElement(name: string): HTMLMetaElement | undefined;
    protected setItem(name: Key, content: string): this;
    protected setMeta(name: Key): this;
    protected toHtmlString(name: Key): string;
    protected toHtmlTitle(title: string): string;
    protected update(): this;
}
export {};
/** Class for working with Open Graph meta tags */
export declare class MetaOg extends MetaManager<MetaOpenGraphTag[]> {
    constructor();
    getTitle(): string;
    getType(): MetaOpenGraphType;
    getUrl(): string;
    getImage(): string;
    getDescription(): string;
    getLocale(): string;
    getSiteName(): string;
    setTitle(title: string): this;
    setType(type: MetaOpenGraphType): this;
    setUrl(url: string): this;
    setImage(url: string): this;
    setDescription(description: string): this;
    setLocale(locale: string): this;
    setSiteName(siteName: string): this;
}
/** Static class for managing meta tags */
export declare class MetaStatic {
    static getItem(): Meta;
    static getOg(): MetaOg;
    static getTwitter(): MetaTwitter;
    static getTitle(): string;
    static getKeywords(): string;
    static getDescription(): string;
    static getImage(): string;
    static getCanonical(): string;
    static getRobots(): MetaRobots;
    static getAuthor(): string;
    static getSiteName(): string;
    static getLocale(): string;
    static setTitle(title: string): typeof MetaStatic;
    static setKeywords(keywords: string | string[]): typeof MetaStatic;
    static setDescription(description: string): typeof MetaStatic;
    static setImage(image: string): typeof MetaStatic;
    static setCanonical(canonical: string): typeof MetaStatic;
    static setRobots(robots: MetaRobots): typeof MetaStatic;
    static setAuthor(author: string): typeof MetaStatic;
    static setSiteName(siteName: string): typeof MetaStatic;
    static setLocale(locale: string): typeof MetaStatic;
    static setSuffix(suffix?: string): typeof MetaStatic;
    static html(): string;
    static htmlTitle(): string;
}
/** Class for working with Twitter Card meta tags */
export declare class MetaTwitter extends MetaManager<MetaTwitterTag[]> {
    constructor();
    getCard(): MetaTwitterCard;
    getSite(): string;
    getCreator(): string;
    getUrl(): string;
    getTitle(): string;
    getDescription(): string;
    getImage(): string;
    setCard(card: MetaTwitterCard): this;
    setSite(site: string): this;
    setCreator(creator: string): this;
    setUrl(url: string): this;
    setTitle(title: string): this;
    setDescription(description: string): this;
    setImage(image: string): this;
}
/** Static class for working with data stored in the URL query parameters */
export declare class Query {
    static getItem(): QueryInstance;
    static get<T>(name: string, defaultValue?: T | (() => T)): T;
    static set<T>(name: string, callback: T | (() => T)): void;
    static addWatch<T>(name: string, callback: (value: T) => void): void;
    static removeWatch<T>(name: string, callback: (value: T) => void): void;
    static reload(): void;
}
/** Class for working with data stored in the URL query parameters */
export declare class QueryInstance extends UrlInstanceAbstract {
    protected init(): this;
    protected getLocation(): Record<string, any>;
    protected update(): this;
}
/** Class for creating a timer that can be paused and resumed */
export declare class ResumableTimer {
    constructor(callback: FunctionVoid, delay?: number, blockStart?: boolean);
    resume(): this;
    pause(): this;
    reset(): this;
    clear(): this;
    protected getRemaining(): number;
    protected getStartTime(): number;
    protected go(): this;
    protected updateRemaining(): this;
    protected updateStartTime(): this;
    protected stop(): this;
}
/** Class for getting the scroll width */
export declare class ScrollbarWidth {
    static is(): Promise<boolean>;
    static get(): Promise<number>;
    static getStorage(): DataStorage<number>;
    static getCalculate(): boolean;
}
/** Main class for managing a searchable list */
export declare class SearchList<T extends SearchItem, K extends SearchColumns<T>> {
    constructor(list: SearchListValue<T>, columns?: K, value?: string, options?: SearchOptions);
    getData(): SearchListData<T, K>;
    getList(): SearchListValue<T>;
    getColumns(): K | undefined;
    getItem(): SearchListItem;
    getValue(): string | undefined;
    getOptions(): SearchListOptions;
    setList(list: SearchListValue<T>): this;
    setColumns(columns?: K): this;
    setValue(value?: string): this;
    setOptions(options: SearchOptions): this;
    to(): SearchFormatList<T, K>;
    protected readonly callbackToSelection: (item: SearchCacheItem<T>["item"], value: SearchCacheItem<T>["value"]) => SearchFormatItem<T, K> | undefined;
    protected readonly callbackToNone: (item: SearchCacheItem<T>["item"]) => SearchFormatItem<T, K>;
}
/** Class for managing and formatting the search data list and its cache */
export declare class SearchListData<T extends SearchItem, K extends SearchColumns<T>> {
    constructor(list: SearchListValue<T>, columns: K | undefined, item: SearchListItem, options: SearchListOptions);
    is(): this is this & {
        list: T[];
        columns: string[];
    };
    isList(): this is this & {
        list: T[];
    };
    getList(): SearchListValue<T>;
    getColumns(): K | undefined;
    protected getCache(): SearchCache<T>;
    setList(list: SearchListValue<T>): this;
    setColumns(columns?: SearchColumns<T>): this;
    findCacheItem(item: T): SearchCacheItem<T> | undefined;
    forEach(callback: (item: SearchCacheItem<T>['item'], value: SearchCacheItem<T>['value']) => SearchFormatItem<T, K> | undefined): SearchFormatList<T, K>;
    toFormatItem(item: T, selection: boolean): SearchFormatItem<T, K>;
    protected getColumnName(column: string): string;
    protected addTag(value: any): string;
    protected generateCache(): SearchCache<T>;
    protected initCache(): void;
    protected resetCache(): void;
}
/** Class representing a single search item's value and its search-related state */
export declare class SearchListItem {
    constructor(value: string | undefined, options: SearchListOptions);
    is(): this is this & {
        value: string;
    };
    isSearch(): boolean;
    get(): string;
    set(value?: string): this;
}
/** Class responsible for matching search values against the search list data */
export declare class SearchListMatcher {
    constructor(item: SearchListItem, options: SearchListOptions);
    is(): boolean;
    isSelection(value: SearchCacheItem<any>['value']): boolean;
    get(): RegExp | undefined;
    update(): void;
    protected initMatcher(): void;
}
/** Class for managing search list options */
export declare class SearchListOptions {
    constructor(options?: SearchOptions | undefined);
    getOptions(): SearchOptions;
    getLimit(): number;
    getReturnEverything(): boolean;
    getDelay(): number;
    getFindExactMatch(): boolean;
    getClassName(): string;
    setOptions(options: SearchOptions): this;
}
/** Item stored in the server storage */
type ServerStorageItem = {
    value: any;
    hydration: boolean;
};
type ServerStorageList = Record<string, ServerStorageItem>;
/** Class for managing data storage during server-side rendering (SSR) */
export declare class ServerStorage {
    protected static listener?: () => Record<string, any> | undefined;
    static init(listener: () => Record<string, any> | undefined): typeof ServerStorage;
    static reset(): void;
    static has(key: string): boolean;
    static get<T = any>(key: string, defaultValue?: () => T, hydration?: boolean): T;
    static set<T = any>(key: string, value: () => T, hydration?: boolean, storageList?: ServerStorageList): T;
    static setErrorStatus(hide: boolean): void;
    static remove(key: string): void;
    static toString(): string;
    protected static getStorage(isInit?: boolean, status?: string): ServerStorageList;
    protected static getStorageDom(): ServerStorageList;
    protected static getDataForHydration(): Record<string, any>;
}
export {};
/** A class for working with callback lists for storage. */
export declare class StorageCallback<T = any, Callback = (value: T) => void | Promise<void>> {
    /** Returns an instance of the class by name.
     * @param name storage name
     * @param group storage group
     * @returns StorageCallback instance
     */
    static getInstance<T>(name: string, group?: string): StorageCallback<T, (value: T) => void | Promise<void>>;
    protected callbacks: {
        callback: Callback;
        isOnce?: boolean;
    }[];
    /** Constructor for initialization.
     * @param name storage name
     * @param group storage group
     */
    constructor(name: string, group?: string);
    /** Returns the loading state.
     * @returns loading state
     */
    isLoading(): boolean;
    /** Returns the storage name.
     * @returns storage name
     */
    getName(): string;
    /** Returns the loading state.
     * @returns loading state
     */
    getLoading(): boolean;
    /** Adds a callback to the list.
     * @param callback function for callbacks
     * @param isOnce whether the callback should only be called once
     */
    addCallback(callback: Callback, isOnce?: boolean): this;
    /** Removes a callback from the list.
     * @param callback function for callbacks
     */
    removeCallback(callback: Callback): this;
    /** Preparation of data before launch. */
    preparation(): this;
    /** Execution of all callbacks.
     * @param value storage data
     */
    run(value: T): Promise<this>;
}
/** Class for getting the translated text. */
export declare class Translate {
    /** Getting the translation text by its code.
     * @param name code name
     * @param replacement If set, replaces the text with the specified values
     * @returns translation text
     */
    static get(name: string, replacement?: string[] | Record<string, string | number>): Promise<string>;
    /** Returns a request-isolated instance of TranslateInstance.
     * @returns TranslateInstance instance
     */
    static getItem(): TranslateInstance;
    /** Getting the translation text by its code (Sync).
     * @param name code name
     * @param first If set to false, returns an empty string if there is no text
     * @param replacement If set, replaces the text with the specified values
     * @returns translation text
     */
    static getSync(name: string, first?: boolean, replacement?: string[] | Record<string, string | number>): string;
    /** Getting a list of translations by an array of text codes.
     * @param names list of codes to get translations
     * @returns object with translations
     */
    static getList<T extends TranslateCode[]>(names: T): Promise<TranslateList<T>>;
    /** Getting a list of translations by an array of text codes.
     * @param names list of codes to get translations
     * @param first If set to false, returns an empty string if there is no text
     * @returns object with translations
     */
    static getListSync<T extends TranslateCode[]>(names: T, first?: boolean): TranslateList<T>;
    /** Added a list of translated texts.
     * @param names list of codes to get translations
     */
    static add(names: string | string[]): Promise<void>;
    /** Adds texts in sync mode.
     * @param data list of texts in the form of key-value
     */
    static addSync(data: Record<string, string>): void;
    /** Adding data in the form of a query or directly, depending on the execution environment.
     * @param data list of texts in the form of key-value
     */
    static addNormalOrSync(data: Record<string, string>): Promise<void>;
    /** Adds texts synchronously by location.
     * @param data list of texts by location
     */
    static addSyncByLocation(data: Record<string, Record<string, string>>): void;
    /** Adds texts synchronously from the file.
     * @param data file with translations
     */
    static addSyncByFile(data: TranslateDataFile): void;
    /** Change the path to the script for obtaining the translation.
     * @param url path to the script
     */
    static setUrl(url: string): void;
    /** Change the name of the property to get the translation.
     * @param name property name
     */
    static setPropsName(name: string): void;
    /** Change the read mode from the API.
     * @param value read mode
     */
    static setReadApi(value: boolean): void;
    /** Set the configuration for the translation.
     * @param config configuration
     */
    static setConfig(config: TranslateConfig): void;
}
/** Class for working with translation files. */
export declare class TranslateFile {
    protected language: string | (() => string);
    protected location: string | (() => string);
    /** List of files with translations */
    /** Creates an instance of the class.
     * @param data list of files
     * @param language language
     * @param location location
     */
    constructor(data?: TranslateDataFile, language?: string | (() => string), location?: string | (() => string));
    /** Checks if there are files for the current location or language. */
    isFile(): boolean;
    /** Returns the location. */
    getLocation(): string;
    /** Returns the language. */
    getLanguage(): string;
    /** Returns a list of translations from the file for the current location.
     * @returns promise with list of translations
     */
    getList(): Promise<TranslateDataFileList | undefined>;
    /** Adds a list of files with translations.
     * @param data list of files
     */
    add(data: TranslateDataFile): void;
    /** Returns the key for the current location from the list of files.
     * @returns file key or undefined
     */
    protected getIndex(): string | undefined;
    /** Returns a list of translations from the cache.
     * @param index file key
     * @returns list of translations or undefined
     */
    protected getByData(index: string): TranslateDataFileList | undefined;
    /** Returns a list of translations from the file and caches the result.
     * @param index file key
     * @returns promise with list of translations or undefined
     */
    protected getByFile(index: string): Promise<TranslateDataFileList | undefined>;
}
/** Class for getting the translated text */
export declare class TranslateInstance {
    protected resolveList: (() => void)[];
    constructor(url?: string, propsName?: string, files?: TranslateFile);
    get(name: string, replacement?: string[] | Record<string, string | number>): Promise<string>;
    getSync(name: string, first?: boolean, replacement?: string[] | Record<string, string | number>): string;
    getList<T extends TranslateCode[]>(names: T): Promise<TranslateList<T>>;
    getListSync<T extends TranslateCode[]>(names: T, first?: boolean): TranslateList<T>;
    add(names: string | string[]): Promise<void>;
    addSync(data: Record<string, string>): void;
    addNormalOrSync(data: Record<string, string>): Promise<void>;
    addSyncByLocation(data: Record<string, Record<string, string>>): void;
    addSyncByFile(data: TranslateDataFile): void;
    setUrl(url: string): this;
    setPropsName(name: string): this;
    setReadApi(value: boolean): this;
    protected hasName(name: string): boolean;
    protected getText(name: string): string | undefined;
    protected getName(name: string): string;
    protected getNameByLanguage(name: string): string;
    protected getNameByGlobal(name: string): string;
    protected getNamesNone(names: string | string[]): string[];
    protected getResponse(): Promise<Record<string, string>>;
    protected replacement(text: string, replacement?: string[] | Record<string, string | number>): any;
    protected make(): Promise<void>;
    protected makeList(list: Record<string, string>): void;
}
/** Base abstract class for working with URL-based states (Hash, Query) */
export declare abstract class UrlInstanceAbstract {
    protected watch: Record<string, ((value: any) => void)[]>;
    get<T>(name: string, defaultValue?: T | (() => T)): T;
    set<T>(name: string, callback: T | (() => T)): this;
    addWatch<T>(name: string, callback: (value: T) => void): this;
    removeWatch<T>(name: string, callback: (value: T) => void): this;
    reload(): this;
    protected getData(): Record<string, any>;
    protected initData(): this;
    protected makeWatch(location: Record<string, any>): this;
    protected abstract init(): this;
    protected abstract getLocation(): Record<string, any>;
    protected abstract update(): this;
}
/** Isomorphic utility class for working with URLs */
export declare class UrlItem {
    static getInstance(): UrlItem;
    constructor(url?: string | URL);
    get href(): string;
    get protocol(): string;
    get username(): string;
    get password(): string;
    get host(): string;
    get hostname(): string;
    get port(): string;
    get pathname(): string;
    get search(): string;
    get searchParams(): URLSearchParams;
    get hash(): string;
    get origin(): string;
    hasParam(name: string): boolean;
    getParam(name: string): string | undefined;
    getParams(): Record<string, any>;
    set(url?: string | URL): this;
    setParam(name: string, value: string): this;
    setParams(params: Record<string, any>): this;
    deleteParam(name: string): this;
    toString(): string;
    toJSON(): string;
}
/** Adds a tag to highlight the match in the string */
export declare function addTagHighlightMatch(value: string, search?: string | RegExp, className?: string, shouldEscape?: boolean): string;
/** Conversion of a value to a string */
export declare function anyToString<V>(value: V, isArrayString?: boolean, trim?: boolean): string;
/** Applies a template to the text, replacing keys with values from the replacement object */
export declare const applyTemplate: (text: string, replacement?: Record<string, string | number | boolean> | string[]) => string;
/** The method creates an array of "count" elements with values equal to `value` */
export declare function arrFill<T>(value: T, count: number): T[];
/** Convert a Blob to a Base64 string */
export declare function blobToBase64(blob: Blob, clean?: boolean): Promise<string | undefined>;
/** Capitalizes the first letter of a string */
export declare function capitalize(value: string, isLocale?: boolean): string;
/** Creates a deep copy of an object for independent data management */
export declare function copyObject<T>(value: T): T;
/** Copies a simple object */
export declare function copyObjectLite<T, R = T>(value: T, source?: any): R;
/**
 * In HTML documents, creates an element with the tag that is specified in the argument
 * @remarks
 * When running on the server, the function always returns `undefined`.
 * If you use it within a component's rendering logic, it may lead to hydration mismatches.
 * It is recommended to call this function only inside lifecycle hooks that run exclusively on the client (e.g., `onMounted` in Vue or `useEffect` in React).
 */
export declare function createElement<T extends HTMLElement>(parentElement?: HTMLElement, tagName?: string, options?: Partial<T> | Record<keyof T, T[keyof T]> | ((element: T) => void), referenceElement?: HTMLElement): T | undefined;
/** Executes a callback function when the DOMContentLoaded event is fired */
export declare function domContentLoaded<T = void>(callback: () => T | Promise<T>): Promise<T>;
/** Selects the first element that matches the specified selectors */
export declare function domQuerySelector<E extends Element = Element>(selectors: string): E | undefined;
/** Selects all elements that match the specified selectors */
export declare function domQuerySelectorAll<E extends Element = Element>(selectors: string): NodeListOf<E> | undefined;
/** Encodes special characters in a string for safe use in HTML attributes */
export declare function encodeAttribute(text: string): string;
/** Encodes special characters in a string for safe use in HTML attributes */
export declare function encodeLiteAttribute(text: string): string;
/** Ensures that an image does not exceed the maximum size by resizing it if needed */
export declare function ensureMaxSize(file: Uint8Array, compress?: number, type?: string): Promise<string>;
/** Escapes special regex characters in a string so it can be used safely in a RegExp */
export declare function escapeExp(value: string): string;
/** Stop listening to events in depth */
export declare function eventStopPropagation(event: Event): void;
/** Flexible utility that executes the provided argument if it is a function, otherwise returns it as is */
export declare function executeFunction<T>(callback: T | FunctionArgs<any, T>, ...args: any[]): T;
/**
 * Safely executes a function and awaits its result if it returns a Promise.
 * If the provided value is a static value or a synchronous function, it returns the result immediately wrapped in a Promise.
 */
export declare function executePromise<T>(callback: ((...args: any[]) => Promise<T>) | ((...args: any[]) => T) | T, ...args: any[]): Promise<T>;
/** The function performs the specified function once for each element in the object and returns an array with the results of executing the function */
export declare function forEach<T, R, D extends T[] | Record<string, T> | Map<string, T> | Set<T> = T[] | Record<string, T> | Map<string, T> | Set<T>, K = D extends T[] ? number : string>(data: D & (T[] | Record<string, T> | Map<string, T> | Set<T>), callback: (item: T, key: K, dataMain: typeof data) => R, saveUndefined?: boolean): R[];
/** Cyclically calls requestAnimationFrame until next returns true */
export declare function frame(callback: () => void, next?: () => boolean, end?: () => void): void;
/** Split a string into an array of objects to highlight matches */
export declare function getArrayHighlightMatch(value: string, search?: string | RegExp): HighlightMatchItem[];
/** Gets a list of attributes of an element */
export declare function getAttributes<E extends ElementOrWindow>(element?: ElementOrString<E>): Record<string, string | undefined>;
/**
 * The method retrieves drag data (as a string) for the specified type.
 * If the drag operation does not include data, this method returns an empty string.
 */
export declare function getClipboardData(event?: ClipboardEvent): Promise<string>;
/** Returns an array of values for a specific column in the input array */
export declare function getColumn<T, K extends keyof T>(array: ObjectOrArray<T>, column: K): (T[K] | undefined)[];
/**
 * Returns the current date in the specified format
 * @remarks
 * Using this function for rendering in SSR may lead to hydration mismatches
 * because the time or time zone on the server may differ from the time on the client.
 * It is recommended to use this function inside client-side hooks only (e.g., `onMounted` in Vue or `useEffect` in React).
 */
export declare function getCurrentDate(format?: GeoDate): string;
/**
 * Returns the current time in milliseconds
 * @remarks
 * **Warning (SSR):** Using this function for rendering in SSR will almost certainly lead to hydration mismatches
 * because the timestamp on the server will differ from the timestamp on the client.
 */
export declare function getCurrentTime(): number;
/** Returns the first Element in the document that matches the specified selector or the element */
export declare function getElement<E extends ElementOrWindow, R extends Exclude<E, Window>>(element?: ElementOrString<E>): R | undefined;
/** Returns the identifier (ID) of the element or creates it if the element has no ID */
export declare function getElementId<E extends ElementOrWindow>(element?: ElementOrString<E>, selector?: string): string;
/**
 * Initializes the getElementId function with a listener
 * @warning Initialization is mandatory for correct functioning of SSR on both server and client sides.
 * @example
 * ```typescript
 * import { useId } from 'vue'
 * import { initGetElementId } from '@dxtmisha/functional-basic'
 *
 * initGetElementId(() => useId())
 * ```
 */
export declare function initGetElementId(newListener: () => string | number): void;
/** Get image element from HTMLImageElement or string source */
export declare function getElementImage(image: HTMLImageElement | string): HTMLImageElement | undefined;
/** Returns the value of an element by its key */
export declare function getElementItem<T extends ElementOrWindow, K extends keyof T, D>(element: ElementOrString<T>, index: K | string, defaultValue?: D): T[K] | D | undefined;
/** Returns window or element */
export declare function getElementOrWindow<E extends ElementOrWindow>(element?: ElementOrString<E>): E | undefined;
/** Generates a safe script tag for data hydration */
export declare function getElementSafeScript(id: string, data: any): string;
/** Creates a case-insensitive regular expression for an exact match of a phrase (without anchors) */
export declare function getExactSearchExp(search: string): RegExp;
/** The object is used for matching text with a pattern */
export declare function getExp(value: string, flags?: string, pattern?: string): RegExp;
/** Returns the first element of an array or object */
export declare function getFirst<T>(value: T | T[] | Record<string, T>): T | undefined;
/** Retrieves and parses JSON data from a script tag in the DOM */
export declare function getHydrationData<T>(id: string, defaultValue: T, remove?: boolean): T;
/** Returns data by their path */
export declare function getItemByPath<T extends Record<string, any>, R = string>(item: T, path: string): R | undefined;
/** Returns the pressed key */
export declare function getKey(event: KeyboardEvent): string | number | undefined;
/** Returns the last element of an array or object */
export declare function getLast<T>(value: T | T[] | Record<string, T>): T | undefined;
/**
 * Returns the length or size of various data types including Arrays, Objects, Maps, Sets, and Strings.
 * If the value is null, undefined, or an unsupported type (e.g. number, boolean), it returns 0.
 */
export declare function getLength(value: any): number;
/** Returns the length of all elements in an array */
export declare function getLengthOfAllArray(value: ObjectOrArray<string>): number[];
/** Searches for the longest string in the array and returns its length */
export declare function getMaxLengthAllArray(data: ObjectOrArray<string>): number;
/** Searches for the shortest string in the array and returns its length */
export declare function getMinLengthAllArray(data: ObjectOrArray<string>): number;
/** Returns the position of the mouse cursor or the location of the click */
export declare function getMouseClient(event: MouseEvent & TouchEvent): ImageCoordinator;
/** Returns the position of the mouse cursor or the location of the click (X) */
export declare function getMouseClientX(event: MouseEvent & TouchEvent): number;
/** Returns the position of the mouse cursor or the location of the click (Y) */
export declare function getMouseClientY(event: MouseEvent & TouchEvent): number;
/** Returns a new object with keys from the keys list */
export declare function getObjectByKeys<T extends Record<string, any>, K extends keyof T>(data: T, keys: K[]): Pick<T, K>;
/** Removes from the object all properties belonging to the exception type */
export declare function getObjectNoUndefined<T extends Record<string | number, any>>(data: T, exception?: any): T;
/** Returns the object if the object’s values are set */
export declare function getObjectOrNone<T>(value: T): T & Record<string, any>;
/** Returns only letters, numbers, and spaces from a string */
export declare function getOnlyText(text: any): string;
/**
 * Returns a random element from an array, object, or value.
 * If the input is empty or invalid, returns undefined.
 */
export declare function getRandomItem<T>(value?: T | T[] | Record<string, T>): T | undefined;
/** Generates text.
 * @param min minimum word
 * @param max maximum word
 * @param symbol symbol for replacing a letter
 * @param lengthMin minimum word length
 * @param lengthMax maximum word length
 * @returns generated text
 */
export declare function getRandomText(min: number, max: number, symbol?: string, lengthMin?: number, lengthMax?: number): string;
/** Returns a string in the form of key-value.
 * @param request data for conversion
 * @param sign delimiter sign of key and value
 * @param separator variable delimiter sign
 * @param subKey nested key for array elements
 * @returns formatted request string
 */
export declare function getRequestString(request: Record<string, any> | any[], sign?: string, separator?: string, subKey?: string): string;
/** Builds a case-insensitive global `RegExp` for multi-word "contains all words" search.
 * Each word in the search string is escaped and wrapped in a lookahead `(?=.*?word)`,
 * so the result matches a string only if it contains every word (in any order).
 * @param search search string with one or more space-separated words
 * @param limit maximum search string length
 */
export declare function getSearchExp(search: string, limit?: number): RegExp;
/** Creates a case-insensitive regular expression for a search by words (separating by space).
 * @param search search string or RegExp
 * @param limit maximum search string length
 * @returns `RegExp` for search
 */
export declare function getSeparatingSearchExp(search: string | RegExp, limit?: number): RegExp;
/** Returns the unit of measurement for 1 step
 * @param min minimum value
 * @param max maximum value
 * @returns step value in percent
 */
export declare function getStepPercent(min: number | undefined, max: number): number;
/** Returns the unit of measurement for a single step relative to the given value
 * @param min minimum value
 * @param max maximum value
 * @returns step value
 */
export declare function getStepValue(min: number | undefined, max: number): number;
/** Quick change of scroll at the element to the required element.
 * @param selector the selected an element, the scroll position of which needs to be changed
 * @param elementTo the element to which you need to scroll
 * @param elementCenter the element that needs to be centered
 */
export declare function goScroll(selector: string, elementTo: HTMLElement | undefined, elementCenter?: HTMLElement): void;
/** Smooth scrolling to the element.
 * @param element target element
 * @param options scroll options
 * @param shift shift from the top
 */
export declare function goScrollSmooth<E extends HTMLElement>(element: E, options?: ScrollIntoViewOptions, shift?: number): void;
/** Scrolls the container to make the target element visible */
export declare function goScrollTo(element?: HTMLElement, elementTo?: HTMLElement, behavior?: ScrollBehavior): void;
/**
 * The method invokes the native sharing mechanism of the device as part of the Web Share API.
 * If the Web Share API is not supported by the browser or the data cannot be shared, the method returns false.
 */
export declare function handleShare(data: ShareData): Promise<boolean>;
/** Checks if the value is in the current array */
export declare function inArray<T>(array: T[], value: T): boolean;
/** Initialization of data for scroll control */
export declare function initScrollbarOffset(): Promise<void>;
/** Computes the intersection of arrays using keys for comparison */
export declare function intersectKey<T, KT extends keyof T, C, KC extends keyof C>(data?: T, comparison?: C): Record<KT & KC, T[KT]>;
/** Checks if the API response is successful */
export declare const isApiSuccess: <T>(data: ApiData<T>) => boolean;
/** Checks if the values are arrays */
export declare function isArray<T, R>(value: T): value is Extract<T, R[]>;
/** Checks if the values of two objects are different */
export declare function isDifferent<T>(value: ObjectItem<T>, old: ObjectItem<T>): boolean;
/** Checks if the current environment is a data URL */
export declare function isDomData(): boolean;
/**
 * Checks if the code is running in a browser where the `window` object is available.
 * Returns `true` if `window` is defined, indicating the code is running in a browser.
 */
export declare function isDomRuntime(): boolean;
/**
 * Checks if an element is visible (not hidden by CSS and is in the DOM).
 * An element can be off-screen and still be considered visible.
 */
export declare function isElementVisible<E extends ElementOrWindow>(elementSelectors?: ElementOrString<E>): boolean;
/** Checks if the pressed key is Enter or Space */
export declare const isEnter: (event: KeyboardEvent, isInputElement?: boolean) => boolean;
/** Checks if the field is filled */
export declare function isFilled<T>(value: T, zeroTrue?: boolean): value is Exclude<T, EmptyValue>;
/** Checks if the value is an integer or a floating-point number */
export declare function isFloat(value: any): boolean;
/** Checks if the function is a callback function */
export declare function isFunction<T>(callback: T): callback is Extract<T, FunctionArgs<any, any>>;
/** Checks if an element is still in the DOM tree */
export declare function isInDom<E extends ElementOrWindow>(element?: ElementOrString<E>): boolean;
/** Checks if the element is an input field or editable */
export declare const isInput: (element: HTMLElement | EventTarget | null) => boolean;
/** Checks if the value is between integers */
export declare function isIntegerBetween(value: number, between: number): boolean;
/** Checks if a key event contains active modifier/meta keys */
export declare const isMetaKey: (event: KeyboardEvent) => boolean;
/** Is the variable equal to null or undefined */
export declare function isNull<T>(value: T): value is Extract<T, Undefined>;
/** Checks if the value is a number */
export declare function isNumber(value: any): boolean;
/** Checks if a value is an object */
export declare function isObject<T>(value: T): value is Extract<T, Record<any, any>>;
/** Checks if the value is an object or not an array */
export declare function isObjectNotArray<T>(value: T): value is Exclude<Extract<T, Record<any, any>>, any[] | undefined | null>;
/** Check if the device is online */
export declare function isOnLine(): boolean;
/** Checks if value is in the array selected or if value equals selected, if selected is a string */
export declare function isSelected<T, S>(value: T, selected: T | T[] | S): boolean;
/** Testing isSelected property for the entire list of values */
export declare function isSelectedByList<T>(values: T | T[], selected: T | T[]): boolean;
/** Checks if the Web Share API is supported in the current environment */
export declare function isShare(): boolean;
/** Checks if the value is of type string */
export declare function isString<T>(value: T): value is Extract<T, string>;
/** Checks if the pressed key is Tab */
export declare const isTab: (event: KeyboardEvent) => boolean;
/** Checks if object is Window */
export declare function isWindow<E>(element: E): element is Extract<E, Window>;
/** Generate a random integer */
export declare function random(min: number, max: number): number;
/** Removes the common prefix from the main string */
export declare function removeCommonPrefix(mainStr: string, prefix: string): string;
/** Replaces the component name in the text */
export declare const replaceComponentName: (text: string | undefined, name: string, componentName: string) => string | undefined;
/** Merge one or more arrays recursively */
export declare function replaceRecursive<I>(array: ObjectItem<I>, replacement?: ObjectOrArray<I>, isMerge?: boolean): ObjectItem<I>;
/** Replacing the value from replaces in value */
export declare function replaceTemplate(value: string, replaces: Record<string, string | FunctionReturn<string>>): string;
/** Resize type for image scaling */
type ResizeImageByMaxType = 'auto' | 'width' | 'height';
/** Resizes an image to fit within a maximum size constraint */
export declare function resizeImageByMax(image: HTMLImageElement | string, maxSize: number, type?: ResizeImageByMaxType, typeData?: string): string | undefined;
export {};
/** Converts seconds into a time string */
export declare function secondToTime(second: number | string | undefined, hasHour?: boolean): string;
/** Modifies the value of an element identified by its key */
export declare function setElementItem<E extends ElementOrWindow, K extends keyof E, V extends E[K] = E[K]>(element: ElementOrString<E>, index: K, value: V | Record<string, V>): E | undefined;
/** Modifies data according to its type and settings */
export declare function setValues<T>(selected: T | T[] | undefined, value: any, { multiple, maxlength, alwaysChange, notEmpty }: {
    multiple?: boolean | undefined;
    maxlength?: number | undefined;
    alwaysChange?: boolean | undefined;
    notEmpty?: boolean | undefined;
}): T | T[] | undefined;
/** Pause execution for a specified number of milliseconds */
export declare function sleep(ms: number): Promise<void>;
/** Sorts an array of items by one or more column paths, directions, or a custom comparison function */
export declare function sortList<T = any>(list: T[], sortColumns: SortColumnItem[], customSort?: SortFunction<T>): T[];
/**
 * This method is used to copy the values of all enumerable own properties from one source object to a target object.
 * In priority according to the processing list.
 */
export declare function splice<I>(array: ObjectItem<I>, replacement?: ObjectItem<I> | I, indexStart?: string): ObjectItem<I>;
/** The method creates a string of length count, consisting of the characters value */
export declare function strFill(value: string, count: number): string;
/**
 * Splits a string by a separator, limited to a certain number of elements.
 * If a limit is specified, the last element will contain the remainder of the string.
 */
export declare function strSplit(value: number | string, separator: string, limit?: number): string[];
/**
 * Converts a value to an array.
 * If the value is already an array, it returns it as is.
 * Otherwise, it wraps the value in an array.
 */
export declare function toArray<T>(value: T): T extends any[] ? T : [T];
/** Convert a String to Camel Case (upper) */
export declare function toCamelCase(value: string): string;
/** Convert a String to Camel Case (+ first letter) */
export declare function toCamelCaseFirst(value: string): string;
/** Conversion to Date object */
export declare function toDate<T extends Date | number | string>(value?: T): (T & Date) | Date;
/**
 * Converts a string to kebab-case.
 * It converts uppercase letters to lowercase, replaces spaces and other characters with dashes.
 */
export declare function toKebabCase(value: string): string;
/**
 * Converts a string or number to a finite floating-point number.
 * Handles various separators (spaces, commas, dots) and strips non-numeric characters.
 * Safe for use in SSR (Server-Side Rendering) environments.
 * @example
 * toNumber("1 234,56") // 1234.56
 * toNumber("1,234.56") // 1234.56
 * toNumber("1,234")    // 1.234
 */
export declare function toNumber(value?: NumberOrString): number;
/** Converts the data into a number, taking into account the maximum permissible value */
export declare function toNumberByMax(value: string | number, max?: string | number, formatting?: boolean, language?: string): string | number;
/** Converts a value to a positive finite number (> 0), or returns default value (0) if invalid */
export declare function toNumberPositive(value?: number | string | null, defaultValue?: number): number;
/** Converts values to percentages */
export declare function toPercent(maxValue: number, value: number): number;
/** Converts values to percentages (three-digit) */
export declare function toPercentBy100(maxValue: number, value: number): number;
/** Converts the given value to a string. Returns an empty string if the value is null or undefined */
export declare function toString<T>(value: T): string;
/**
 * Transforms a string into the corresponding data type.
 * Based on the string content, it may be transformed into `undefined`,
 * `null`, `true`, `false`, object, number, or function.
 */
export declare function transformation(value: any, isFunction?: boolean): any;
/** Converts a Uint8Array to a base64 encoded string */
export declare function uint8ArrayToBase64(bytes: Uint8Array): string;
/** Removes duplicate entries in an array */
export declare function uniqueArray<T>(value: T[]): T[];
/** Writes data to the clipboard */
export declare function writeClipboardData(text: string): Promise<void>;
export declare const errorCauseList: ErrorCenterCauseList;
/** Supported HTTP methods for API requests */
export declare enum ApiMethodItem {
    /** HTTP DELETE — used to delete resources */
    delete = "DELETE",
    /** HTTP GET — used to retrieve resources (no request body) */
    get = "GET",
    /** HTTP POST — used to create resources or send data */
    post = "POST",
    /** HTTP PUT — used to update/replace resources */
    put = "PUT",
    /** HTTP PATCH — used to partially update resources */
    patch = "PATCH"
}
/** Saved value in cache */
export type ApiCacheItem<T = any> = {
    /** Saved value */
    value: T;
    /** Age of the cache */
    age?: number;
    /** Cache age in seconds */
    cacheAge: number;
};
/** List of saved values in cache */
export type ApiCacheList = Record<string, ApiCacheItem>;
/** API configuration */
export type ApiConfig = {
    /** Base URL for API requests */
    urlRoot?: string;
    /** Base origin for API requests (protocol and domain) */
    origin?: string;
    /** Default headers for API requests */
    headers?: ApiHeadersValue;
    /** Default request data for API requests */
    requestDefault?: ApiDefaultValue;
    /** Function to call before request */
    preparation?: (apiFetch: ApiFetch) => Promise<void>;
    /** Function to call after request */
    end?: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>;
    /** Timeout for the request in milliseconds */
    timeout?: number;
    /** Enable development logging */
    devMode?: boolean;
    /** Wrapper function for requests */
    wrapper?: <R>(callback: () => Promise<R>, apiFetch: ApiFetch) => Promise<R>;
};
/** Shape of API response data wrapper */
export type ApiData<T = any> = T extends any[] ? T : ApiDataItem<T>;
/** API response validation result */
export type ApiDataValidation = {
    status?: ApiStatusType;
    code?: string | number;
    message?: string;
    error?: {
        code?: string | number;
        message?: string;
    };
};
/** Type of API response data item */
export type ApiDataItem<T = any> = T & ApiDataValidation & {
    /** Primary payload */
    data?: T;
    success?: boolean;
    statusObject?: ApiStatusItem;
    errorObject?: ApiErrorItem;
};
/** Type for API request headers */
export type ApiHeadersValue = Record<string, string> | (() => Record<string, string>);
/** Default API request data type */
export type ApiDefaultValue = Record<string, any> | (() => Record<string, any>);
/** Options for making API requests */
export type ApiFetch = {
    /** Use base API URL */
    api?: boolean;
    /** Endpoint path relative to base URL */
    path?: string;
    /** Complete URL (overrides api + path) */
    pathFull?: string;
    method?: ApiMethod;
    /** Request body data or query parameters */
    request?: FormData | Record<string, any> | string;
    /** Include authentication headers */
    auth?: boolean;
    /** Custom headers */
    headers?: Record<string, string> | null;
    /** Content-Type header value */
    type?: string;
    /** Extract 'data' field from response */
    toData?: boolean;
    /** Use global response cache */
    global?: boolean;
    devMode?: boolean;
    hideError?: boolean;
    hideLoading?: boolean;
    retry?: number;
    retryDelay?: number;
    /** Custom response processor */
    queryReturn?: (query: Response) => Promise<any | ApiDataValidation>;
    /** Run global preparation hooks */
    globalPreparation?: boolean;
    /** Run global end hooks */
    globalEnd?: boolean;
    /** Additional fetch() options */
    init?: RequestInit;
    initError?: boolean;
    timeout?: number;
    controller?: AbortController;
    /** Cache age in seconds */
    cache?: number;
    enableClientCache?: boolean;
    /** Cache ID for grouping */
    cacheId?: number | string;
    /** Limit of end reset */
    endResetLimit?: number;
    /** Wrapper function for requests */
    wrapper?: <R>(callback: () => Promise<R>, apiFetch: ApiFetch) => Promise<R>;
};
/** Type of API hydration item */
export type ApiHydrationItem = {
    /** Path string or RegExp to match request URL */
    path: string;
    method: ApiMethod;
    /** Expected request payload or special marker '*any' */
    request?: ApiFetch['request'];
    /** Static response or factory function */
    response: any;
};
/** List of API hydration items */
export type ApiHydrationList = ApiHydrationItem[];
/** Item for API error storage */
export type ApiErrorStorageItem = Record<string, any> & {
    /** URL string or RegExp to match request URL */
    url: string | RegExp;
    method: ApiMethodItem;
    code?: string;
    status?: number;
    /** Validation function */
    validation?: (response: Response) => boolean;
    /** Error message or function that returns message */
    message?: string | ((response?: Response) => string);
};
/** List of API error storage items */
export type ApiErrorStorageList = ApiErrorStorageItem[];
/** Supported HTTP methods type */
export type ApiMethod = string | ApiMethodItem;
/** Result of global preparation/end hooks */
export type ApiPreparationEnd = {
    /** Reset flag to indicate state reset */
    reset?: boolean;
    /** Arbitrary data returned by hook */
    data?: any;
};
/** Mock API response descriptor */
export type ApiResponseItem = {
    /** Path string or RegExp to match request URL */
    path: string | RegExp;
    method: ApiMethod;
    /** Expected request payload or special marker '*any' */
    request?: ApiFetch['request'] | '*any';
    /** Static response or factory function */
    response: any | ((request?: ApiFetch['request']) => any);
    /** Disable this mock */
    disable?: any;
    /** Mark as global mock */
    isForGlobal?: boolean;
    /** Simulate network lag */
    lag?: any;
};
export type ApiStatusItem = {
    status?: number;
    statusText?: string;
    error?: string;
    /** Last response */
    lastResponse?: any;
    /** Last status */
    lastStatus?: ApiStatusType;
    /** Last code */
    lastCode?: string;
    /** Last message */
    lastMessage?: string;
};
/** API status type */
export type ApiStatusType = 'success' | 'error' | 'warning' | 'info';
/** Union type for undefined and null values */
export type Undefined = undefined | null;
/** Union type for all "empty" values including falsy primitives and string representations */
export type EmptyValue = Undefined | 0 | false | '' | 'undefined' | 'null' | '0' | 'false' | '[]';
/** Union type for numeric and string values */
export type NumberOrString = number | string;
/** Union type for numeric, string, and boolean values */
export type NumberOrStringOrBoolean = number | string | boolean;
/** Union type for numeric, string, and Date values */
export type NumberOrStringOrDate = NumberOrString | Date;
/** Generic type that can be either a single value or an array of values */
export type NormalOrArray<T = NumberOrString> = T | T[];
/** Generic type that can be either a direct value or a Promise resolving to that value */
export type NormalOrPromise<T> = T | Promise<T>;
/** Generic record/object type with string keys */
export type ObjectItem<T = any> = Record<string, T>;
/** Generic type that can be either an array or an object */
export type ObjectOrArray<T = any> = T[] | ObjectItem<T>;
/** Converts an array type to an item type (extracts the item type from an array) */
export type ArrayToItem<T> = T extends any[] ? T[number] : T;
/** Function type that returns a value of type R */
export type FunctionReturn<R = any> = () => R;
/** Function type that returns void */
export type FunctionVoid = () => void;
/** Function type that accepts multiple arguments of type T and returns type R */
export type FunctionArgs<T, R> = (...args: T[]) => R;
/** Most generic function type that accepts any arguments and returns any value */
export type FunctionAnyType<T = any, R = any> = (...args: T[]) => R;
/** Generic record type for lists with string keys */
export type ItemList<T = any> = Record<string, T>;
/** Generic item type with index and value properties */
export type Item<V> = {
    /** Unique string identifier for the item */
    index: string;
    /** The actual value of the item */
    value: V;
};
/** Generic item type with label and value properties */
export type ItemValue<V> = {
    /** Display text for the item */
    label: string;
    /** The actual value of the item */
    value: V;
};
/** Generic item type with name and value properties */
export type ItemName<V> = {
    name: string | number;
    value: V;
};
/** Union type for HTML elements and Window object */
export type ElementOrWindow = HTMLElement | Window;
/** Generic type that can be either an element or a string selector */
export type ElementOrString<E extends ElementOrWindow> = E | string;
/** Type for event listener options */
export type EventOptions = AddEventListenerOptions | boolean | undefined;
/** Generic event listener function type with additional detail parameter */
export type EventListenerDetail<O extends Event, D extends Record<string, any>> = (event: O, detail?: D) => void;
/** Type for tracking active event listeners and observers */
export type EventActivityItem<E extends ElementOrWindow> = {
    element: E | undefined;
    type: string;
    listener?: (event: any | Event) => void;
    observer?: ResizeObserver;
};
/** Type for 2D coordinates */
export type ImageCoordinator = {
    x: number;
    y: number;
};
/** Error group identifier */
export type ErrorCenterGroup = string | undefined;
/** Interface for an error item */
export type ErrorCenterCauseItem<D = any> = {
    group?: ErrorCenterGroup;
    code: string;
    priority?: number;
    label?: string;
    message?: string;
    details?: D;
};
/** List of error items */
export type ErrorCenterCauseList = ErrorCenterCauseItem[];
/** Callback function for error handling */
export type ErrorCenterHandlerCallback = (cause: ErrorCenterCauseItem) => void;
/** Interface for error handler storage */
export type ErrorCenterHandlerItem = {
    group?: ErrorCenterGroup;
    handlers: ErrorCenterHandlerCallback[];
};
/** List of error handlers */
export type ErrorCenterHandlerList = ErrorCenterHandlerItem[];
/** Callback function to check whether to log error to console */
export type ErrorCenterHandlerIsConsoleCallback = (cause: ErrorCenterCauseItem) => boolean;
/** Type for console logging configuration */
export type ErrorCenterHandlerIsConsole = boolean | ErrorCenterHandlerIsConsoleCallback;
/** Enumeration of available formatter types */
export declare enum FormattersType {
    currency = "currency",
    date = "date",
    name = "name",
    number = "number",
    plural = "plural",
    unit = "unit"
}
/** Options for currency formatting */
export type FormattersOptionsCurrency = {
    currencyPropName?: string;
    options?: string | Intl.NumberFormatOptions;
    numberOnly?: boolean;
};
/** Options for date formatting */
export type FormattersOptionsDate = {
    type?: GeoDate;
    options?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions;
    hour24?: boolean;
};
/** Options for name formatting */
export type FormattersOptionsName = {
    lastPropName?: string;
    firstPropName?: string;
    surname?: string;
    short?: boolean;
};
/** Options for number formatting */
export type FormattersOptionsNumber = {
    options?: Intl.NumberFormatOptions;
};
/** Options for plural forms formatting */
export type FormattersOptionsPlural = {
    words: string;
    options?: Intl.PluralRulesOptions;
    optionsNumber?: Intl.NumberFormatOptions;
};
/** Options for unit formatting */
export type FormattersOptionsUnit = {
    unit: string | Intl.NumberFormatOptions;
};
/** Mapping of formatter types to their respective option types.
 * @template Type - The formatter type.
 */
export type FormattersOptionsInformation<Type extends FormattersType> = Type extends FormattersType.currency ? FormattersOptionsCurrency : Type extends FormattersType.date ? FormattersOptionsDate : Type extends FormattersType.name ? FormattersOptionsName : Type extends FormattersType.number ? FormattersOptionsNumber : Type extends FormattersType.plural ? FormattersOptionsPlural : Type extends FormattersType.unit ? FormattersOptionsUnit : Record<string, any>;
/** Configuration for a single property formatter */
export type FormattersOptionsItem<Type extends FormattersType = FormattersType, R = string> = {
    type?: Type;
    transformation?: (valueOriginal: any, item: any, options?: FormattersOptionsInformation<Type>) => R;
    options?: FormattersOptionsInformation<Type>;
};
/** A dictionary mapping property paths to their formatting configurations */
export type FormattersOptionsList = Record<string, FormattersOptionsItem>;
/** Represents a single data item as a key-value record */
export type FormattersListItem = Record<string, any>;
/** An array of data items to be formatted */
export type FormattersList<Item extends FormattersListItem> = Item[];
/** Utility type to capitalize a camelCase or dot-notated string */
export type FormattersCapitalize<K extends string> = K extends `${infer First}.${infer Rest}` ? `${First}${Capitalize<FormattersCapitalize<Rest>>}` : K;
/** Utility type to extract column keys from formatting options */
export type FormattersColumns<T extends FormattersOptionsList> = (keyof T & string)[];
/** Utility type to generate a formatted property key */
export type FormattersKey<K, A extends string = 'Format'> = K extends string ? `${FormattersCapitalize<K>}${A}` : never;
/** Represents a data item with additional formatted properties */
export type FormattersDataItem<T extends FormattersListItem, KT extends string[]> = {
    [K in keyof T | FormattersKey<KT[number]>]: K extends keyof T ? T[K] : string;
};
/** An array of data items with additional formatted properties */
export type FormattersListFormat<T extends FormattersListItem, K extends string[]> = FormattersDataItem<T, K>[];
/** A single data item formatted based on the provided options list */
export type FormattersListColumnItem<T extends FormattersListItem, O extends FormattersOptionsList> = FormattersDataItem<T, FormattersColumns<O>>;
/** A list of data items formatted based on the provided options list */
export type FormattersListColumns<T extends FormattersListItem, O extends FormattersOptionsList> = FormattersListFormat<T, FormattersColumns<O>>;
/** Possible formats for input data: either a single item or a list of items */
export type FormattersListProp = FormattersList<FormattersListItem> | FormattersListItem;
/** Extracts the single item type from a single item or a list of items */
export type FormattersItemProp<List extends FormattersListProp> = ArrayToItem<List>;
/** The return type of the formatter, matching the structure of the input data */
export type FormattersReturn<List extends FormattersListProp, Options extends FormattersOptionsList = FormattersOptionsList, Item extends FormattersItemProp<List> = FormattersItemProp<List>> = List extends any[] ? FormattersListColumns<Item, Options> : (FormattersListColumnItem<Item, Options> | undefined);
/** Union type for date format options in geographic context */
export type GeoDate = 'full' | 'datetime' | 'date' | 'year-month' | 'year' | 'month' | 'day' | 'day-month' | 'time' | 'hour-minute' | 'hour' | 'minute' | 'second';
/** First day of week code (0 = Sunday, 1 = Monday, 6 = Saturday) */
export type GeoFirstDay = 1 | 6 | 0;
/** Hour format type (12-hour or 24-hour) */
export type GeoHours = '12' | '24';
/** Timezone display style options */
export type GeoTimeZoneStyle = 'minute' | 'hour' | 'ISO8601' | 'RFC';
/** Geographic item interface for country and language data */
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
/** Extended geographic item with required fields */
export interface GeoItemFull extends Omit<GeoItem, 'firstDay'> {
    standard: string;
    firstDay: string;
    location: string;
    locationCountry: string;
    locationLanguage: string;
}
/** Geographic flag item for country flag display */
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
/** Extended geographic flag item with national language information */
export interface GeoFlagNational extends GeoFlagItem {
    description: string;
    nationalLanguage: string;
    nationalCountry: string;
}
/** Phone configuration metadata for a country */
export interface GeoPhoneValue {
    phone: number;
    within: number;
    mask: string[];
    value: string;
}
/** Node in the internal phone prefix tree (Trie) */
export interface GeoPhoneMap {
    items: GeoPhoneValue[];
    info: GeoPhoneValue | undefined;
    value: string | undefined;
    mask: string[];
    maskFull: string[];
    next: Record<string, GeoPhoneMap>;
}
/** Result of searching a country by phone number */
export interface GeoPhoneMapInfo {
    item?: GeoPhoneMap;
    phone?: string;
}
/** Standard HTML meta tags */
export declare enum MetaTag {
    title = "title",
    description = "description",
    keywords = "keywords",
    canonical = "canonical",
    robots = "robots",
    author = "author"
}
export declare enum MetaRobots {
    indexFollow = "index, follow",
    noIndexFollow = "noindex, follow",
    indexNoFollow = "index, nofollow",
    noIndexNoFollow = "noindex, nofollow",
    noArchive = "noarchive",
    noSnippet = "nosnippet",
    noImageIndex = "noimageindex",
    images = "images",
    noTranslate = "notranslate",
    noPreview = "nopreview",
    textOnly = "textonly",
    noIndexSubpages = "noindex, noarchive",
    none = "none"
}
/** Enumeration of Open Graph tags for metadata */
export declare enum MetaOpenGraphTag {
    title = "og:title",
    type = "og:type",
    url = "og:url",
    image = "og:image",
    description = "og:description",
    locale = "og:locale",
    siteName = "og:site_name",
    localeAlternate = "og:locale:alternate",
    imageUrl = "og:image:url",
    imageSecureUrl = "og:image:secure_url",
    imageType = "og:image:type",
    imageWidth = "og:image:width",
    imageHeight = "og:image:height",
    imageAlt = "og:image:alt",
    video = "og:video",
    videoUrl = "og:video:url",
    videoSecureUrl = "og:video:secure_url",
    videoType = "og:video:type",
    videoWidth = "og:video:width",
    videoHeight = "og:video:height",
    audio = "og:audio",
    audioSecureUrl = "og:audio:secure_url",
    audioType = "og:audio:type",
    articlePublishedTime = "article:published_time",
    articleModifiedTime = "article:modified_time",
    articleExpirationTime = "article:expiration_time",
    articleAuthor = "article:author",
    articleSection = "article:section",
    articleTag = "article:tag",
    bookAuthor = "book:author",
    bookIsbn = "book:isbn",
    bookReleaseDate = "book:release_date",
    bookTag = "book:tag",
    musicDuration = "music:duration",
    musicAlbum = "music:album",
    musicAlbumDisc = "music:album:disc",
    musicAlbumTrack = "music:album:track",
    musicMusician = "music:musician",
    musicSong = "music:song",
    musicSongDisc = "music:song:disc",
    musicSongTrack = "music:song:track",
    musicReleaseDate = "music:release_date",
    musicCreator = "music:creator",
    videoActor = "video:actor",
    videoActorRole = "video:actor:role",
    videoDirector = "video:director",
    videoWriter = "video:writer",
    videoDuration = "video:duration",
    videoReleaseDate = "video:release_date",
    videoTag = "video:tag",
    videoSeries = "video:series",
    profileFirstName = "profile:first_name",
    profileLastName = "profile:last_name",
    profileUsername = "profile:username",
    profileGender = "profile:gender",
    productBrand = "product:brand",
    productAvailability = "product:availability",
    productCondition = "product:condition",
    productPriceAmount = "product:price:amount",
    productPriceCurrency = "product:price:currency",
    productRetailerItemId = "product:retailer_item_id",
    productCategory = "product:category",
    productEan = "product:ean",
    productIsbn = "product:isbn",
    productMfrPartNo = "product:mfr_part_no",
    productUpc = "product:upc",
    productWeightValue = "product:weight:value",
    productWeightUnits = "product:weight:units",
    productColor = "product:color",
    productMaterial = "product:material",
    productPattern = "product:pattern",
    productAgeGroup = "product:age_group",
    /** Gender (for whom — male, female, unisex) */
    productGender = "product:gender"
}
/** Possible content types for Open Graph (og:type) */
export declare enum MetaOpenGraphType {
    /** Regular web page or article */
    website = "website",
    /** News article, blog post, or other text material */
    article = "article",
    /** Video (e.g., clip, film, series, music video) */
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
    /** Individual track (song) */
    musicSong = "music.song",
    /** Radio station or audio stream */
    musicRadioStation = "music.radio_station",
    /** Application (web, mobile, or desktop) */
    app = "app",
    /** Product or item (e.g., in a store) */
    product = "product",
    /** Brand, company, organization */
    business = "business.business",
    /** Place (geolocation, point on a map) */
    place = "place",
    /** Event (event, meeting, concert, etc.) */
    event = "event",
    /** User profile (personal page, author, etc.) */
    profile = "profile",
    /** Book page */
    book = "book"
}
/** Product availability states */
export declare enum MetaOpenGraphAvailability {
    /** In stock, available for purchase */
    inStock = "in stock",
    /** Out of stock, currently unavailable */
    outOfStock = "out of stock",
    /** Available for pre-order */
    preorder = "preorder",
    /** Backordered, temporarily out of stock */
    backorder = "backorder",
    /** Discontinued, no longer available */
    discontinued = "discontinued",
    /** Pending availability status */
    pending = "pending"
}
/** Product condition states */
export declare enum MetaOpenGraphCondition {
    /** Brand new product, never used */
    new = "new",
    /** Used product, previously owned */
    used = "used",
    /** Refurbished / restored product */
    refurbished = "refurbished"
}
/** Age groups for products */
export declare enum MetaOpenGraphAge {
    /** For newborns (0–12 months) */
    newborn = "newborn",
    /** For infants (0–24 months) */
    infant = "infant",
    /** For toddlers (approximately 2–4 years) */
    toddler = "toddler",
    /** For kids (approximately 4–12 years) */
    kids = "kids",
    /** For adults */
    adult = "adult"
}
/** Gender categories for products */
export declare enum MetaOpenGraphGender {
    /** For women */
    female = "female",
    /** For men */
    male = "male",
    /** Universal / suitable for everyone */
    unisex = "unisex"
}
/** Twitter Card meta-properties */
export declare enum MetaTwitterTag {
    /** Type of card (summary, summary_large_image, app, player, product) */
    card = "twitter:card",
    /** Website or brand @username */
    site = "twitter:site",
    /** Content creator @username */
    creator = "twitter:creator",
    /** Page URL */
    url = "twitter:url",
    /** Title of the card */
    title = "twitter:title",
    /** Short description of the card */
    description = "twitter:description",
    /** Main image for the card */
    image = "twitter:image",
    /** Alternative text for the image (for accessibility) */
    imageAlt = "twitter:image:alt",
    /** Alternative way to define image source */
    imageSrc = "twitter:image:src",
    /** Image width (optional) */
    imageWidth = "twitter:image:width",
    /** Image height (optional) */
    imageHeight = "twitter:image:height",
    /** Custom label 1 (used in summary/product cards) */
    label1 = "twitter:label1",
    /** Custom value 1 (used with label1) */
    data1 = "twitter:data1",
    /** Custom label 2 (used in summary/product cards) */
    label2 = "twitter:label2",
    /** Custom value 2 (used with label2) */
    data2 = "twitter:data2",
    /** iPhone app name */
    appNameIphone = "twitter:app:name:iphone",
    /** iPhone app ID (App Store ID) */
    appIdIphone = "twitter:app:id:iphone",
    /** iPhone app URL (deep link) */
    appUrlIphone = "twitter:app:url:iphone",
    /** iPad app name */
    appNameIpad = "twitter:app:name:ipad",
    /** iPad app ID (App Store ID) */
    appIdIpad = "twitter:app:id:ipad",
    /** iPad app URL (deep link) */
    appUrlIpad = "twitter:app:url:ipad",
    /** Google Play app name */
    appNameGooglePlay = "twitter:app:name:googleplay",
    /** Google Play app ID (package name) */
    appIdGooglePlay = "twitter:app:id:googleplay",
    /** Google Play app URL (deep link) */
    appUrlGooglePlay = "twitter:app:url:googleplay",
    /** Player iframe URL */
    player = "twitter:player",
    /** Player width */
    playerWidth = "twitter:player:width",
    /** Player height */
    playerHeight = "twitter:player:height",
    /** Direct media stream URL (video/audio) */
    playerStream = "twitter:player:stream",
    /** MIME type of the media stream */
    playerStreamContentType = "twitter:player:stream:content_type"
}
/** Twitter Card types */
export declare enum MetaTwitterCard {
    /** Summary card — small image, short title and description */
    summary = "summary",
    /** Summary card with large image — most popular card type */
    summaryLargeImage = "summary_large_image",
    /** App card — used for promoting mobile applications (iOS / Android) */
    app = "app",
    /** Player card — for embedding video, audio, or other rich media */
    player = "player",
    /** Product card (deprecated) — used for e-commerce products */
    product = "product",
    /** Gallery card (deprecated) — used for displaying multiple images */
    gallery = "gallery",
    /** Photo card (deprecated) — single image card, replaced by summary_large_image */
    photo = "photo",
    /** Lead generation card (deprecated) — for collecting user data (via CTA) */
    leadGeneration = "lead_generation",
    /** Audio card (experimental) — similar to player, but focused on audio players */
    audio = "audio",
    /** Poll card (internal/experimental) — used for Twitter polls */
    poll = "poll"
}
/** Search item type */
export type SearchItem = Record<string, any>;
/** Type for generating a column path */
export type SearchColumnPath<K, P> = K extends string ? P extends string ? `${K}.${P}` : never : never;
/** Type for getting a column */
export type SearchColumn<T extends SearchItem> = {
    [K in keyof T]-?: NonNullable<T[K]> extends object ? K | SearchColumnPath<K, keyof NonNullable<T[K]>> : K;
}[keyof T];
/** Type for a list of columns */
export type SearchColumns<T extends SearchItem> = (SearchColumn<T> & string)[];
/** Type for formatting the key */
export type SearchFormatCapitalize<K extends string> = K extends `${infer First}.${infer Rest}` ? `${First}${Capitalize<SearchFormatCapitalize<Rest>>}` : K;
/** Type for generating a search key */
export type SearchFormatKey<K> = K extends string ? `${SearchFormatCapitalize<K>}Search` : never;
/** Type for a formatted search item */
export type SearchFormatItem<T extends SearchItem, KT extends string[]> = {
    [K in keyof T | SearchFormatKey<KT[number]>]: K extends keyof T ? T[K] : string;
} & {
    searchActive?: boolean;
};
/** Type for a list of formatted search items */
export type SearchFormatList<T extends SearchItem, K extends string[]> = SearchFormatItem<T, K>[];
/** Search list value */
export type SearchListValue<T extends SearchItem> = T[] | undefined;
/** Search options */
export type SearchOptions = {
    limit?: number;
    returnEverything?: boolean;
    delay?: number;
    findExactMatch?: boolean;
    classSearchName?: string;
};
/** Search cache item */
export type SearchCacheItem<T extends SearchItem> = {
    item: T;
    value: string;
};
/** Search cache list */
export type SearchCache<T extends SearchItem> = SearchCacheItem<T>[];
/** Highlight match item type */
export type HighlightMatchItem = {
    text: string;
    isMatch: boolean;
};
/** Sorting direction */
export type SortDir = 'asc' | 'desc';
/** Single column sorting specification item */
export type SortColumnItem = {
    column?: string;
    dir?: SortDir;
};
/** Custom sort function signature */
export type SortFunction<T = any> = (a: T, b: T, column?: string, dir?: SortDir) => number;
/** Interface for the functional plugin options */
export type TranslateConfig = {
    url?: string;
    propsName?: string;
    readApi?: boolean;
};
/** Translation code or a list of translation codes for template replacement */
export type TranslateCode = string | string[];
/** Object with translated strings, where the keys are the names of the translation codes */
export type TranslateList<T extends TranslateCode[]> = {
    [K in T[number] as K extends readonly string[] ? K[0] : K]: string;
};
/** Return type for translation retrieval: an object if a list was requested, or a string for a single key */
export type TranslateItemOrList<T extends TranslateCode> = T extends string[] ? TranslateList<T> : string;
/** A simple key-value record of translations from a file */
export type TranslateDataFileList = Record<string, string>;
/** Asynchronous loader function for a translation file */
export type TranslateDataFileItem = () => Promise<TranslateDataFileList>;
/** A mapping of locale strings to their respective translation file loaders */
export type TranslateDataFile = Record<string, TranslateDataFileItem>;
/** Prefix for global translations */
export declare const TRANSLATE_GLOBAL_PREFIX = "global";
/** Request timeout for batch loading (ms) */
export declare const TRANSLATE_TIME_OUT = 160;