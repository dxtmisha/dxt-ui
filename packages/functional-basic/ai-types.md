1) All these methods are in the @dxtmisha/functional-basic library.
2) Everything that is exported can be used.
3) Use what is in this library if it exists; do not use other libraries if there is an analogue here. Do not create new ones if an analogue already exists here.

The following is the content of "exports" from package.json:
{
  ".": {
    "import": "./dist/library.js",
    "types": "./dist/library.d.ts"
  }
}

// File: classes/Api.d.ts
import { ApiInstance } from './ApiInstance';
import { ApiConfig, ApiDefaultValue, ApiFetch, ApiHeadersValue, ApiMethodItem, ApiPreparationEnd } from '../types/apiTypes';
import { ApiStatus } from './ApiStatus';
import { ApiResponse } from './ApiResponse';
import { ApiHydration } from './ApiHydration';

/**
 * Class for working with HTTP requests.
 */
export declare class Api {
    static isLocalhost(): boolean;
    static getItem(): ApiInstance;
    static getStatus(): ApiStatus;
    static getResponse(): ApiResponse;
    static getHydration(): ApiHydration;
    static getHydrationScript(): string;
    static getOrigin(): string;
    static getUrl(path: string, api?: boolean): string;
    static getBody(request?: ApiFetch['request'], method?: ApiMethodItem): string | FormData | undefined;
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

// File: classes/ApiCache.d.ts
import { ApiCacheItem, ApiCacheList, ApiFetch } from '../types/apiTypes';

/**
 * Class for caching API responses.
 */
export declare class ApiCache {
    static init(getListener: (key: string) => Promise<ApiCacheItem | undefined>, setListener: (key: string, value: ApiCacheItem) => Promise<boolean>, removeListener: (key: string) => Promise<boolean>, cacheStepAgeClearOld?: number): void;
    static reset(): void;
    static get<T>(key: string): Promise<T | undefined>;
    static getByFetch<T>(fetch: ApiFetch): Promise<T | undefined>;
    static set<T>(key: string, value: T, age?: number): Promise<void>;
    static setByFetch<T>(fetch: ApiFetch, value: T): Promise<void>;
    static remove(key: string): Promise<void>;
}

// File: classes/ApiDataReturn.d.ts
import { ApiStatus } from './ApiStatus';
import { ApiErrorItem } from './ApiErrorItem';
import { ApiData, ApiFetch, ApiPreparationEnd } from '../types/apiTypes';

/**
 * Class for handling API request response data.
 */
export declare class ApiDataReturn<T = any> {
    constructor(apiFetch: ApiFetch, query: Response, end: ApiPreparationEnd, error?: ApiErrorItem | undefined);
    init(): Promise<this>;
    get(): ApiData<T>;
    getAndStatus(status: ApiStatus): ApiData<T>;
    getData(): ApiData<T> | undefined;
}

// File: classes/ApiDefault.d.ts
import { ApiDefaultValue, ApiFetch } from '../types/apiTypes';

/**
 * Class for managing default API request data.
 */
export declare class ApiDefault {
    is(): boolean;
    get(): Record<string, any> | undefined;
    request(request: ApiFetch['request']): ApiFetch['request'];
    set(request: ApiDefaultValue): this;
}

// File: classes/ApiError.d.ts
import { ApiErrorItem } from './ApiErrorItem';
import { ApiErrorStorage } from './ApiErrorStorage';
import { ApiErrorStorageItem, ApiMethodItem } from '../types/apiTypes';

/**
 * Utility for managing API error storage and creating error items.
 */
export declare class ApiError {
    static getStorage(): ApiErrorStorage;
    static add(item: Partial<ApiErrorStorageItem> | Partial<ApiErrorStorageItem>[], url?: string | RegExp, method?: ApiMethodItem): void;
    static getItem(method: ApiMethodItem, response: Response): Promise<ApiErrorItem>;
}

// File: classes/ApiErrorItem.d.ts
import { ApiErrorStorageItem, ApiMethodItem } from '../types/apiTypes';

/**
 * Manages and extracts data from API error responses.
 */
export declare class ApiErrorItem {
    constructor(method: ApiMethodItem, response: Response, error: ApiErrorStorageItem);
    getMethod(): ApiMethodItem;
    getResponse(): Response;
    getError(): ApiErrorStorageItem;
    getCode(): string | undefined;
    getMessage(): string | undefined;
    getStatus(): number;
}

// File: classes/ApiErrorStorage.d.ts
import { ApiErrorStorageList, ApiErrorStorageItem, ApiMethodItem } from '../types/apiTypes';

/**
 * Manager for handling and identifying API error states.
 */
export declare class ApiErrorStorage {
    find(method: ApiMethodItem, response: Response): Promise<ApiErrorStorageItem>;
    add(item: Partial<ApiErrorStorageItem> | Partial<ApiErrorStorageItem>[], url?: string | RegExp, method?: ApiMethodItem): this;
}

// File: classes/ApiHeaders.d.ts
import { ApiFetch, ApiHeadersValue } from '../types/apiTypes';

/**
 * Class for managing HTTP request headers.
 */
export declare class ApiHeaders {
    get(value?: Record<string, string> | null, type?: string | undefined | null): Record<string, string> | undefined;
    getByRequest(request: ApiFetch['request'], value?: Record<string, string> | null, type?: string): Record<string, string> | undefined;
    set(headers: ApiHeadersValue): this;
}

// File: classes/ApiHydration.d.ts
import { ApiResponse } from './ApiResponse';
import { ApiFetch, ApiHydrationList } from '../types/apiTypes';

/**
 * Collects API data for client-side hydration during SSR.
 */
export declare class ApiHydration {
    initResponse(response: ApiResponse): void;
    toClient<T>(apiFetch: ApiFetch, response: T): void;
    toString(): string;
}

// File: classes/ApiInstance.d.ts
import { GeoInstance } from './GeoInstance';
import { LoadingInstance } from './LoadingInstance';
import { ErrorCenterInstance } from './ErrorCenterInstance';
import { ApiDefault } from './ApiDefault';
import { ApiHeaders } from './ApiHeaders';
import { ApiHydration } from './ApiHydration';
import { ApiPreparation } from './ApiPreparation';
import { ApiResponse } from './ApiResponse';
import { ApiStatus } from './ApiStatus';
import { ApiDefaultValue, ApiFetch, ApiHeadersValue, ApiMethod, ApiPreparationEnd } from '../types/apiTypes';

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

/**
 * Core class for HTTP requests via Fetch API.
 */
export declare class ApiInstance {
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
}

// File: classes/ApiPreparation.d.ts
import { ApiFetch, ApiPreparationEnd } from '../types/apiTypes';

/**
 * Class for preparing requests.
 */
export declare class ApiPreparation {
    make(active: boolean, apiFetch: ApiFetch): Promise<void>;
    makeEnd(active: boolean, query: Response, apiFetch: ApiFetch): Promise<ApiPreparationEnd>;
    set(callback: (apiFetch: ApiFetch) => Promise<void>): this;
    setEnd(callback: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>): this;
}

// File: classes/ApiResponse.d.ts
import { ApiDefault } from './ApiDefault';
import { ApiFetch, ApiMethod, ApiResponseItem } from '../types/apiTypes';

/**
 * Class for working with API responses.
 */
export declare class ApiResponse {
    constructor(requestDefault: ApiDefault);
    get(path: string | undefined, method: ApiMethod, request?: ApiFetch['request'], devMode?: boolean): ApiResponseItem | undefined;
    getList(): (ApiResponseItem & Record<string, any>)[];
    add(response: ApiResponseItem | ApiResponseItem[]): this;
    setDevMode(devMode: boolean): this;
    emulator<T>(apiFetch: ApiFetch): Promise<T | undefined>;
    emulatorAsync<T>(apiFetch: ApiFetch): T | undefined;
}

// File: classes/ApiStatus.d.ts
import { ApiStatusItem, ApiStatusType } from '../types/apiTypes';

/**
 * Class for managing API request status.
 */
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
}

// File: classes/BroadcastMessage.d.ts
import { ErrorCenterInstance } from './ErrorCenterInstance';

/**
 * Class for working with BroadcastChannel.
 */
export declare class BroadcastMessage<Message = any> {
    constructor(name: string, callback?: ((event: MessageEvent<Message>) => void) | undefined, callbackError?: ((event: MessageEvent<Message>) => void) | undefined, errorCenter?: ErrorCenterInstance);
    getChannel(): BroadcastChannel | undefined;
    post(message: Message): this;
    setCallback(callback: (event: MessageEvent<Message>) => void): this;
    setCallbackError(callbackError: (event: MessageEvent<Message>) => void): this;
    destroy(): this;
}

// File: classes/Cache.d.ts
/**
 * @deprecated Use alternative caching mechanisms.
 */
export declare class Cache {
    get<T>(name: string, callback: () => T, comparison?: any[]): T;
    getAsync<T>(name: string, callback: () => T, comparison?: any[]): Promise<T>;
}

// File: classes/CacheItem.d.ts
/**
 * @deprecated Use alternative caching mechanisms.
 */
export declare class CacheItem<T> {
    constructor(callback: () => T);
    getCache(comparison: any[]): T;
    getCacheOld(): T | undefined;
    getCacheAsync(comparison: any[]): Promise<T>;
}

// File: classes/CacheStatic.d.ts
import { Cache } from './Cache';

/**
 * @deprecated Use alternative caching mechanisms.
 */
export declare class CacheStatic {
    static get<T>(name: string, callback: () => T, comparison?: any[]): T;
    static getAsync<T>(name: string, callback: () => T, comparison?: any[]): Promise<T>;
}

// File: classes/Cookie.d.ts
import { CookieOptions } from './CookieStorage';

/**
 * Class for managing cookies.
 */
export declare class Cookie<T> {
    static getInstance<T>(name: string): Cookie<T>;
    constructor(name: string);
    get(defaultValue?: T | string | (() => (T | string)), options?: CookieOptions): string | T | undefined;
    set(value?: T | string | (() => (T | string)), options?: CookieOptions): void;
    remove(): void;
}

// File: classes/CookieBlock.d.ts
import { CookieBlockInstance } from './CookieBlockInstance';

/**
 * Class for managing cookie access status.
 */
export declare class CookieBlock {
    static getItem(): CookieBlockInstance;
    static get(): boolean;
    static set(value: boolean): void;
}

// File: classes/CookieBlockInstance.d.ts
/**
 * Class for managing cookie access status.
 */
export declare class CookieBlockInstance {
    get(): boolean;
    set(value: boolean): void;
}

// File: classes/CookieStorage.d.ts
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
 * Class for managing cookie storage.
 */
export declare class CookieStorage {
    static init(getListener?: (key: string) => any | undefined, getListenerRaw?: () => string, setListener?: (key: string, value: any, cookie: string, options?: CookieOptions) => void): void;
    static reset(): void;
    static get<T>(name: string, defaultValue?: T | (() => T)): T | undefined;
    static set<T>(name: string, value: T | (() => T), options?: CookieOptions): T;
    static remove(name: string): void;
    static update(): void;
}

// File: classes/DataStorage.d.ts
import { ErrorCenterInstance } from './ErrorCenterInstance';

/**
 * Class for managing localStorage and sessionStorage with features like expiration.
 */
export declare class DataStorage<T> {
    static setPrefix(newPrefix: string): void;
    constructor(name: string, isSession?: boolean, errorCenter?: ErrorCenterInstance);
    get(defaultValue?: T | (() => T), cache?: number): T | undefined;
    set(value?: T | (() => T)): T | undefined;
    remove(): this;
    update(): this;
}

// File: classes/Datetime.d.ts
import { GeoIntl } from './GeoIntl';
import { NumberOrStringOrDate } from '../types/basicTypes';
import { GeoDate, GeoFirstDay, GeoHours, GeoTimeZoneStyle } from '../types/geoTypes';

/**
 * Class for date operations.
 */
export declare class Datetime {
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
}

// File: classes/ErrorCenter.d.ts
import { ErrorCenterInstance } from './ErrorCenterInstance';
import { ErrorCenterCauseItem, ErrorCenterCauseList, ErrorCenterGroup, ErrorCenterHandlerCallback, ErrorCenterHandlerList } from '../types/errorCenter';

/**
 * Class for managing error storage and handling.
 */
export declare class ErrorCenter {
    static getItem(): ErrorCenterInstance;
    static has(code: string, group?: string): boolean;
    static get(code: string, group?: string): ErrorCenterCauseItem | undefined;
    static add(cause: ErrorCenterCauseItem): void;
    static addList(causes: ErrorCenterCauseList): void;
    static addHandler(group: ErrorCenterGroup, handler: ErrorCenterHandlerCallback): void;
    static addHandlerList(handlers: ErrorCenterHandlerList): void;
    static addCallback(callback: ErrorCenterHandlerCallback): void;
    static on(cause: ErrorCenterCauseItem): void;
}

// File: classes/ErrorCenterHandler.d.ts
import { ErrorCenterCauseItem, ErrorCenterGroup, ErrorCenterHandlerCallback, ErrorCenterHandlerItem, ErrorCenterHandlerList } from '../types/errorCenter';

/**
 * Class for managing and triggering error handlers.
 */
export declare class ErrorCenterHandler {
    constructor(handlers?: ErrorCenterHandlerList);
    has(group: ErrorCenterGroup): boolean;
    get(group: ErrorCenterGroup): ErrorCenterHandlerItem | undefined;
    add(group: ErrorCenterGroup, handler: ErrorCenterHandlerCallback): this;
    addList(handlers: ErrorCenterHandlerList): this;
    addCallback(callback: ErrorCenterHandlerCallback): this;
    on(cause: ErrorCenterCauseItem): this;
}

// File: classes/ErrorCenterInstance.d.ts
import { ErrorCenterHandler } from './ErrorCenterHandler';
import { ErrorCenterCauseItem, ErrorCenterCauseList, ErrorCenterGroup, ErrorCenterHandlerCallback, ErrorCenterHandlerList } from '../types/errorCenter';

/**
 * Class for managing instance-specific error storage.
 */
export declare class ErrorCenterInstance {
    constructor(causes?: ErrorCenterCauseList, handler?: ErrorCenterHandler);
    has(code: string, group?: string): boolean;
    get(code: string, group?: string): ErrorCenterCauseItem | undefined;
    add(cause: ErrorCenterCauseItem): this;
    addList(causes: ErrorCenterCauseList): this;
    addHandler(group: ErrorCenterGroup, handler: ErrorCenterHandlerCallback): this;
    addHandlerList(handlers: ErrorCenterHandlerList): this;
    addCallback(callback: ErrorCenterHandlerCallback): this;
    on(cause: ErrorCenterCauseItem): this;
}

// File: classes/EventItem.d.ts
import { ElementOrString, ElementOrWindow, EventListenerDetail, EventOptions } from '../types/basicTypes';

/**
 * Wrapper for managing DOM event listeners.
 */
export declare class EventItem<E extends ElementOrWindow, O extends Event, D extends Record<string, any> = Record<string, any>> {
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
}

// File: classes/Formatters.d.ts
import { FormattersType, FormattersOptionsList, FormattersReturn, FormattersListProp, FormattersItemProp } from '../types/formattersTypes';

/**
 * Class for formatting data lists.
 */
export declare class Formatters<Options extends FormattersOptionsList = FormattersOptionsList, List extends FormattersListProp = FormattersListProp, Item extends FormattersItemProp<List> = FormattersItemProp<List>> {
    constructor(options: Options, list?: List | undefined);
    is(): boolean;
    isArray(): boolean;
    length(): number;
    getList(): any;
    getOptions(): Options;
    setList(list?: List): this;
    to(): FormattersReturn<List, Options>;
}

// File: classes/Geo.d.ts
import { GeoInstance } from './GeoInstance';
import { GeoItem, GeoItemFull } from '../types/geoTypes';

/**
 * Static class for geographical data.
 */
export declare class Geo {
    static getObject(): GeoInstance;
    static get(): GeoItemFull;
    static getCountry(): string;
    static getLanguage(): string;
    static getStandard(): string;
    static getFirstDay(): string;
    static getLocation(): string;
    static getLocationCountry(): string;
    static getLocationLanguage(): string;
    static getItem(): GeoItemFull;
    static getList(): GeoItem[];
    static getByCode(code?: string): GeoItemFull;
    static getByCodeFull(code: string): GeoItem | undefined;
    static getByCountry(country: string): GeoItem | undefined;
    static getByLanguage(language: string): GeoItem | undefined;
    static getTimezone(): number;
    static getTimezoneFormat(): string;
    static find(code: string): GeoItemFull;
    static toStandard(item: GeoItem): string;
    static set(code: string, save?: boolean): void;
    static setTimezone(timezone: number): void;
    static setValueDefault(code?: string | (() => string)): void;
}

// File: classes/GeoFlag.d.ts
import { GeoIntl } from './GeoIntl';
import { GeoFlagItem, GeoFlagNational } from '../types/geoTypes';

export declare const GEO_FLAG_ICON_NAME = "f";

/**
 * Manages flags and geographic info.
 */
export declare class GeoFlag {
    static flags: Record<string, string>;
    constructor(code?: string);
    get(code?: string): GeoFlagItem | undefined;
    getLanguage(code?: string): GeoFlagItem | undefined;
    getCode(): string;
    getFlag(code?: string): string | undefined;
    getList(codes?: string[], sort?: boolean): GeoFlagItem[];
    getListLanguage(codes?: string[], sort?: boolean): GeoFlagItem[];
    getNational(codes?: string[], sort?: boolean): GeoFlagNational[];
    getNationalLanguage(codes?: string[], sort?: boolean): GeoFlagNational[];
    setCode(code: string): this;
}

// File: classes/GeoInstance.d.ts
import { GeoItem, GeoItemFull } from '../types/geoTypes';

export declare const UI_GEO_COOKIE_KEY = "ui-geo-code";

/**
 * Base class for geographic data management.
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

// File: classes/GeoIntl.d.ts
import { ErrorCenterInstance } from './ErrorCenterInstance';
import { NumberOrStringOrDate, NumberOrString, ItemValue } from '../types/basicTypes';
import { GeoDate } from '../types/geoTypes';

/**
 * Internationalization wrapper.
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

// File: classes/GeoPhone.d.ts
import { GeoPhoneValue, GeoPhoneMap, GeoPhoneMapInfo } from '../types/geoTypes';

/**
 * Handles phone number masks.
 */
export declare class GeoPhone {
    static get(code: string): GeoPhoneValue | undefined;
    static getByPhone(phone: string): GeoPhoneMapInfo;
    static getByCode(code: string): GeoPhoneMap | undefined;
    static getList(): GeoPhoneValue[];
    static getMap(): Record<string, GeoPhoneMap>;
    static toMask(phone: string, masks?: string[]): string | undefined;
    static removeZero(phone: string): string;
}

// File: classes/GeoUnit.d.ts
import { NumberOrString } from '../types/basicTypes';

/**
 * Localized unit formatting and conversion.
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
}

// File: classes/Global.d.ts
/**
 * Static utility for global data.
 */
export declare class Global {
    static getItem(): Record<string, any>;
    static get<R = any>(name: string): R;
    static add(data: Record<string, any>): void;
}

// File: classes/Hash.d.ts
import { HashInstance } from './HashInstance';

/**
 * Static wrapper for URL hash data.
 */
export declare class Hash {
    static getItem(): HashInstance;
    static get<T>(name: string, defaultValue?: T | (() => T)): T;
    static set<T>(name: string, callback: T | (() => T)): void;
    static addWatch<T>(name: string, callback: (value: T) => void): void;
    static removeWatch<T>(name: string, callback: (value: T) => void): void;
    static reload(): void;
}

// File: classes/HashInstance.d.ts
import { UrlInstanceAbstract } from './UrlInstanceAbstract';

/**
 * Class for URL hash management.
 */
export declare class HashInstance extends UrlInstanceAbstract {}

// File: classes/Icons.d.ts
export type IconsItem = string | Promise<string | any> | (() => Promise<string | any>);
export type IconsConfig = {
    url?: string;
    list?: Record<string, IconsItem>;
};

/**
 * Manages application icons.
 */
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
}

// File: classes/Loading.d.ts
import { LoadingInstance, LoadingDetail } from './LoadingInstance';
import { ElementOrString, EventListenerDetail } from '../types/basicTypes';

/**
 * Global loading controller.
 */
export declare class Loading {
    static is(): boolean;
    static get(): number;
    static getItem(): LoadingInstance;
    static show(): void;
    static hide(): void;
    static registrationEvent(listener: EventListenerDetail<CustomEvent, LoadingDetail>, element?: ElementOrString<HTMLElement>): void;
    static unregistrationEvent(listener: EventListenerDetail<CustomEvent, LoadingDetail>, element?: ElementOrString<HTMLElement>): void;
}

// File: classes/LoadingInstance.d.ts
import { EventItem } from './EventItem';
import { ElementOrString, EventListenerDetail } from '../types/basicTypes';

export type LoadingDetail = { loading: boolean };

/**
 * Instance-based global loading controller.
 */
export declare class LoadingInstance {
    constructor(eventName?: string);
    is(): boolean;
    get(): number;
    show(): void;
    hide(): void;
    registrationEvent(listener: EventListenerDetail<CustomEvent, LoadingDetail>, element?: ElementOrString<HTMLElement>): void;
    unregistrationEvent(listener: EventListenerDetail<CustomEvent, LoadingDetail>, element?: ElementOrString<HTMLElement>): void;
}

// File: classes/Meta.d.ts
import { MetaManager } from './MetaManager';
import { MetaOg } from './MetaOg';
import { MetaTwitter } from './MetaTwitter';
import { MetaRobots, MetaTag } from '../types/metaTypes';

/**
 * Meta tag manager.
 */
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
}

// File: classes/MetaManager.d.ts
/**
 * Generic meta tag manager.
 */
export declare class MetaManager<T extends readonly string[], Key extends keyof any = any> {
    constructor(listMeta: T, isProperty?: boolean);
    getListMeta(): T;
    get(name: Key): string;
    getItems(): Record<string, string>;
    html(): string;
    set(name: Key, content: string): this;
    setByList(metaList: Record<string, string>): this;
}

// File: classes/MetaOg.d.ts
import { MetaManager } from './MetaManager';
import { MetaOpenGraphTag, MetaOpenGraphType } from '../types/metaTypes';

/**
 * Open Graph meta manager.
 */
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

// File: classes/MetaStatic.d.ts
import { Meta } from './Meta';
import { MetaOg } from './MetaOg';
import { MetaTwitter } from './MetaTwitter';
import { MetaRobots } from '../types/metaTypes';

/**
 * Static Meta tag manager.
 */
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

// File: classes/MetaTwitter.d.ts
import { MetaManager } from './MetaManager';
import { MetaTwitterCard, MetaTwitterTag } from '../types/metaTypes';

/**
 * Twitter Card manager.
 */
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

// File: classes/Query.d.ts
import { QueryInstance } from './QueryInstance';

/**
 * Static wrapper for URL query parameters.
 */
export declare class Query {
    static getItem(): QueryInstance;
    static get<T>(name: string, defaultValue?: T | (() => T)): T;
    static set<T>(name: string, callback: T | (() => T)): void;
    static addWatch<T>(name: string, callback: (value: T) => void): void;
    static removeWatch<T>(name: string, callback: (value: T) => void): void;
    static reload(): void;
}

// File: classes/QueryInstance.d.ts
import { UrlInstanceAbstract } from './UrlInstanceAbstract';

/**
 * Class for URL query parameter management.
 */
export declare class QueryInstance extends UrlInstanceAbstract {}

// File: classes/ResumableTimer.d.ts
import { FunctionVoid } from '../types/basicTypes';

/**
 * Timer supporting pause/resume.
 */
export declare class ResumableTimer {
    constructor(callback: FunctionVoid, delay?: number, blockStart?: boolean);
    resume(): this;
    pause(): this;
    reset(): this;
    clear(): this;
}

// File: classes/ScrollbarWidth.d.ts
import { DataStorage } from './DataStorage';

/**
 * Utility for scrollbar width.
 */
export declare class ScrollbarWidth {
    static is(): Promise<boolean>;
    static get(): Promise<number>;
    static getStorage(): DataStorage<number>;
    static getCalculate(): boolean;
}

// File: classes/SearchList.d.ts
import { SearchListData } from './SearchListData';
import { SearchListItem } from './SearchListItem';
import { SearchListMatcher } from './SearchListMatcher';
import { SearchListOptions } from './SearchListOptions';
import { SearchColumns, SearchFormatList, SearchItem, SearchListValue, SearchOptions } from '../types/searchTypes';

/**
 * Manage searchable lists.
 */
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
}

// File: classes/SearchListData.d.ts
import { SearchListItem } from './SearchListItem';
import { SearchListOptions } from './SearchListOptions';
import { SearchCache, SearchColumns, SearchFormatItem, SearchFormatList, SearchItem, SearchListValue } from '../types/searchTypes';

/**
 * Manages search data and cache.
 */
export declare class SearchListData<T extends SearchItem, K extends SearchColumns<T>> {
    constructor(list: SearchListValue<T>, columns: K | undefined, item: SearchListItem, options: SearchListOptions);
    is(): boolean;
    isList(): boolean;
    getList(): SearchListValue<T>;
    getColumns(): K | undefined;
    setList(list: SearchListValue<T>): this;
    setColumns(columns?: SearchColumns<T>): this;
    forEach(callback: (item: any, value: any) => SearchFormatItem<T, K> | undefined): SearchFormatList<T, K>;
    toFormatItem(item: T, selection: boolean): SearchFormatItem<T, K>;
}

// File: classes/SearchListItem.d.ts
import { SearchListOptions } from './SearchListOptions';

/**
 * Manages search query value state.
 */
export declare class SearchListItem {
    constructor(value: string | undefined, options: SearchListOptions);
    is(): boolean;
    isSearch(): boolean;
    get(): string;
    set(value?: string): this;
}

// File: classes/SearchListMatcher.d.ts
import { SearchListItem } from './SearchListItem';
import { SearchListOptions } from './SearchListOptions';
import { SearchCacheItem } from '../types/searchTypes';

/**
 * Matches items against search query.
 */
export declare class SearchListMatcher {
    constructor(item: SearchListItem, options: SearchListOptions);
    is(): boolean;
    isSelection(value: SearchCacheItem<any>['value']): boolean;
    get(): RegExp | undefined;
    update(): void;
}

// File: classes/SearchListOptions.d.ts
import { SearchOptions } from '../types/searchTypes';

/**
 * Manages search configurations.
 */
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

// File: classes/ServerStorage.d.ts
/**
 * SSR data storage.
 */
export declare class ServerStorage {
    static init(listener: () => Record<string, any> | undefined): typeof ServerStorage;
    static reset(): void;
    static has(key: string): boolean;
    static get<T = any>(key: string, defaultValue?: () => T, hydration?: boolean): T;
    static set<T = any>(key: string, value: () => T, hydration?: boolean): T;
    static setErrorStatus(hide: boolean): void;
    static remove(key: string): void;
    static toString(): string;
}

// File: classes/StorageCallback.d.ts
/**
 * Storage callback manager.
 */
export declare class StorageCallback<T = any, Callback = (value: T) => void | Promise<void>> {
    static getInstance<T>(name: string, group?: string): StorageCallback<T, (value: T) => void | Promise<void>>;
    constructor(name: string, group?: string);
    isLoading(): boolean;
    getName(): string;
    getLoading(): boolean;
    addCallback(callback: Callback, isOnce?: boolean): this;
    removeCallback(callback: Callback): this;
    preparation(): this;
    run(value: T): Promise<this>;
}

// File: classes/Translate.d.ts
import { TranslateInstance } from './TranslateInstance';
import { TranslateCode, TranslateConfig, TranslateDataFile, TranslateList } from '../types/translateTypes';

/**
 * Static translation manager.
 */
export declare class Translate {
    static get(name: string, replacement?: string[] | Record<string, string | number>): Promise<string>;
    static getItem(): TranslateInstance;
    static getSync(name: string, first?: boolean, replacement?: string[] | Record<string, string | number>): string;
    static getList<T extends TranslateCode[]>(names: T): Promise<TranslateList<T>>;
    static getListSync<T extends TranslateCode[]>(names: T, first?: boolean): TranslateList<T>;
    static add(names: string | string[]): Promise<void>;
    static addSync(data: Record<string, string>): void;
    static addNormalOrSync(data: Record<string, string>): Promise<void>;
    static addSyncByLocation(data: Record<string, Record<string, string>>): void;
    static addSyncByFile(data: TranslateDataFile): void;
    static setUrl(url: string): void;
    static setPropsName(name: string): void;
    static setReadApi(value: boolean): void;
    static setConfig(config: TranslateConfig): void;
}

// File: classes/TranslateFile.d.ts
import { TranslateDataFile, TranslateDataFileList } from '../types/translateTypes';

/**
 * Translation file loader.
 */
export declare class TranslateFile {
    constructor(data?: TranslateDataFile, language?: string | (() => string), location?: string | (() => string));
    isFile(): boolean;
    getLocation(): string;
    getLanguage(): string;
    getList(): Promise<TranslateDataFileList | undefined>;
    add(data: TranslateDataFile): void;
}

// File: classes/TranslateInstance.d.ts
import { TranslateFile } from './TranslateFile';
import { TranslateCode, TranslateDataFile, TranslateList } from '../types/translateTypes';

/**
 * Translation engine.
 */
export declare class TranslateInstance {
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
}

// File: classes/UrlInstanceAbstract.d.ts
/**
 * Abstract class for URL-based state.
 */
export declare abstract class UrlInstanceAbstract {
    get<T>(name: string, defaultValue?: T | (() => T)): T;
    set<T>(name: string, callback: T | (() => T)): this;
    addWatch<T>(name: string, callback: (value: T) => void): this;
    removeWatch<T>(name: string, callback: (value: T) => void): this;
    reload(): this;
}

// File: classes/UrlItem.d.ts
/**
 * Isomorphic URL helper.
 */
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

// File: functions/addTagHighlightMatch.d.ts
export declare function addTagHighlightMatch(value: string, search?: string | RegExp, className?: string, shouldEscape?: boolean): string;

// File: functions/anyToString.d.ts
export declare function anyToString<V>(value: V, isArrayString?: boolean, trim?: boolean): string;

// File: functions/applyTemplate.d.ts
export declare const applyTemplate: (text: string, replacement?: Record<string, string | number | boolean> | string[]) => string;

// File: functions/arrFill.d.ts
export declare function arrFill<T>(value: T, count: number): T[];

// File: functions/blobToBase64.d.ts
export declare function blobToBase64(blob: Blob, clean?: boolean): Promise<string | undefined>;

// File: functions/capitalize.d.ts
export declare function capitalize(value: string, isLocale?: boolean): string;

// File: functions/copyObject.d.ts
export declare function copyObject<T>(value: T): T;

// File: functions/copyObjectLite.d.ts
export declare function copyObjectLite<T, R = T>(value: T, source?: any): R;

// File: functions/createElement.d.ts
export declare function createElement<T extends HTMLElement>(parentElement?: HTMLElement, tagName?: string, options?: Partial<T> | Record<keyof T, T[keyof T]> | ((element: T) => void), referenceElement?: HTMLElement): T | undefined;

// File: functions/domQuerySelector.d.ts
export declare function domQuerySelector<E extends Element = Element>(selectors: string): E | undefined;

// File: functions/domQuerySelectorAll.d.ts
export declare function domQuerySelectorAll<E extends Element = Element>(selectors: string): NodeListOf<E> | undefined;

// File: functions/encodeAttribute.d.ts
export declare function encodeAttribute(text: string): string;

// File: functions/encodeLiteAttribute.d.ts
export declare function encodeLiteAttribute(text: string): string;

// File: functions/ensureMaxSize.d.ts
export declare function ensureMaxSize(file: Uint8Array, compress?: number, type?: string): Promise<string>;

// File: functions/escapeExp.d.ts
export declare function escapeExp(value: string): string;

// File: functions/eventStopPropagation.d.ts
export declare function eventStopPropagation(event: Event): void;

// File: functions/executeFunction.d.ts
import { FunctionArgs } from '../types/basicTypes';
export declare function executeFunction<T>(callback: T | FunctionArgs<any, T>, ...args: any[]): T;

// File: functions/executePromise.d.ts
export declare function executePromise<T>(callback: ((...args: any[]) => Promise<T>) | ((...args: any[]) => T) | T, ...args: any[]): Promise<T>;

// File: functions/forEach.d.ts
export declare function forEach<T, R, D extends T[] | Record<string, T> | Map<string, T> | Set<T> = T[] | Record<string, T> | Map<string, T> | Set<T>, K = D extends T[] ? number : string>(data: D & (T[] | Record<string, T> | Map<string, T> | Set<T>), callback: (item: T, key: K, dataMain: typeof data) => R, saveUndefined?: boolean): R[];

// File: functions/frame.d.ts
export declare function frame(callback: () => void, next?: () => boolean, end?: () => void): void;

// File: functions/getArrayHighlightMatch.d.ts
import { HighlightMatchItem } from '../types/searchTypes';
export declare function getArrayHighlightMatch(value: string, search?: string | RegExp): HighlightMatchItem[];

// File: functions/getAttributes.d.ts
import { ElementOrString, ElementOrWindow } from '../types/basicTypes';
export declare function getAttributes<E extends ElementOrWindow>(element?: ElementOrString<E>): Record<string, string | undefined>;

// File: functions/getClipboardData.d.ts
export declare function getClipboardData(event?: ClipboardEvent): Promise<string>;

// File: functions/getColumn.d.ts
import { ObjectOrArray } from '../types/basicTypes';
export declare function getColumn<T, K extends keyof T>(array: ObjectOrArray<T>, column: K): (T[K] | undefined)[];

// File: functions/getCurrentDate.d.ts
import { GeoDate } from '../types/geoTypes';
export declare function getCurrentDate(format?: GeoDate): string;

// File: functions/getCurrentTime.d.ts
export declare function getCurrentTime(): number;

// File: functions/getElement.d.ts
import { ElementOrString, ElementOrWindow } from '../types/basicTypes';
export declare function getElement<E extends ElementOrWindow, R extends Exclude<E, Window>>(element?: ElementOrString<E>): R | undefined;

// File: functions/getElementId.d.ts
import { ElementOrString, ElementOrWindow } from '../types/basicTypes';
export declare function getElementId<E extends ElementOrWindow>(element?: ElementOrString<E>, selector?: string): string;
export declare function initGetElementId(newListener: () => string | number): void;

// File: functions/getElementImage.d.ts
export declare function getElementImage(image: HTMLImageElement | string): HTMLImageElement | undefined;

// File: functions/getElementItem.d.ts
import { ElementOrString, ElementOrWindow } from '../types/basicTypes';
export declare function getElementItem<T extends ElementOrWindow, K extends keyof T, D>(element: ElementOrString<T>, index: K | string, defaultValue?: D): T[K] | D | undefined;

// File: functions/getElementOrWindow.d.ts
import { ElementOrString, ElementOrWindow } from '../types/basicTypes';
export declare function getElementOrWindow<E extends ElementOrWindow>(element?: ElementOrString<E>): E | undefined;

// File: functions/getElementSafeScript.d.ts
export declare function getElementSafeScript(id: string, data: any): string;

// File: functions/getExactSearchExp.d.ts
export declare function getExactSearchExp(search: string): RegExp;

// File: functions/getExp.d.ts
export declare function getExp(value: string, flags?: string, pattern?: string): RegExp;

// File: functions/getFirst.d.ts
export declare function getFirst<T>(value: T | T[] | Record<string, T>): T | undefined;

// File: functions/getHydrationData.d.ts
export declare function getHydrationData<T>(id: string, defaultValue: T, remove?: boolean): T;

// File: functions/getItemByPath.d.ts
export declare function getItemByPath<T extends Record<string, any>, R = string>(item: T, path: string): R | undefined;

// File: functions/getKey.d.ts
export declare function getKey(event: KeyboardEvent): string | number | undefined;

// File: functions/getLast.d.ts
export declare function getLast<T>(value: T | T[] | Record<string, T>): T | undefined;

// File: functions/getLength.d.ts
export declare function getLength(value: any): number;

// File: functions/getLengthOfAllArray.d.ts
import { ObjectOrArray } from '../types/basicTypes';
export declare function getLengthOfAllArray(value: ObjectOrArray<string>): number[];

// File: functions/getMaxLengthAllArray.d.ts
import { ObjectOrArray } from '../types/basicTypes';
export declare function getMaxLengthAllArray(data: ObjectOrArray<string>): number;

// File: functions/getMinLengthAllArray.d.ts
import { ObjectOrArray } from '../types/basicTypes';
export declare function getMinLengthAllArray(data: ObjectOrArray<string>): number;

// File: functions/getMouseClient.d.ts
import { ImageCoordinator } from '../types/basicTypes';
export declare function getMouseClient(event: MouseEvent & TouchEvent): ImageCoordinator;

// File: functions/getMouseClientX.d.ts
export declare function getMouseClientX(event: MouseEvent & TouchEvent): number;

// File: functions/getMouseClientY.d.ts
export declare function getMouseClientY(event: MouseEvent & TouchEvent): number;

// File: functions/getObjectByKeys.d.ts
export declare function getObjectByKeys<T extends Record<string, any>, K extends keyof T>(data: T, keys: K[]): Pick<T, K>;

// File: functions/getObjectNoUndefined.d.ts
export declare function getObjectNoUndefined<T extends Record<string | number, any>>(data: T, exception?: any): T;

// File: functions/getObjectOrNone.d.ts
export declare function getObjectOrNone<T>(value: T): T & Record<string, any>;

// File: functions/getOnlyText.d.ts
export declare function getOnlyText(text: any): string;

// File: functions/getRandomItem.d.ts
export declare function getRandomItem<T>(value?: T | T[] | Record<string, T>): T | undefined;

// File: functions/getRandomText.d.ts
export declare function getRandomText(min: number, max: number, symbol?: string, lengthMin?: number, lengthMax?: number): string;

// File: functions/getRequestString.d.ts
export declare function getRequestString(request: Record<string, any> | any[], sign?: string, separator?: string, subKey?: string): string;

// File: functions/getSearchExp.d.ts
export declare function getSearchExp(search: string, limit?: number): RegExp;

// File: functions/getSeparatingSearchExp.d.ts
export declare function getSeparatingSearchExp(search: string | RegExp, limit?: number): RegExp;

// File: functions/getStepPercent.d.ts
export declare function getStepPercent(min: number | undefined, max: number): number;

// File: functions/getStepValue.d.ts
export declare function getStepValue(min: number | undefined, max: number): number;

// File: functions/goScroll.d.ts
export declare function goScroll(selector: string, elementTo: HTMLElement | undefined, elementCenter?: HTMLElement): void;

// File: functions/goScrollSmooth.d.ts
export declare function goScrollSmooth<E extends HTMLElement>(element: E, options?: ScrollIntoViewOptions, shift?: number): void;

// File: functions/goScrollTo.d.ts
export declare function goScrollTo(element?: HTMLElement, elementTo?: HTMLElement, behavior?: ScrollBehavior): void;

// File: functions/handleShare.d.ts
export declare function handleShare(data: ShareData): Promise<boolean>;

// File: functions/inArray.d.ts
export declare function inArray<T>(array: T[], value: T): boolean;

// File: functions/initScrollbarOffset.d.ts
export declare function initScrollbarOffset(): Promise<void>;

// File: functions/intersectKey.d.ts
export declare function intersectKey<T, KT extends keyof T, C, KC extends keyof C>(data?: T, comparison?: C): Record<KT & KC, T[KT]>;

// File: functions/isApiSuccess.d.ts
import { ApiData } from '../types/apiTypes';
export declare const isApiSuccess: <T>(data: ApiData<T>) => boolean;

// File: functions/isArray.d.ts
export declare function isArray<T, R>(value: T): value is Extract<T, R[]>;

// File: functions/isDifferent.d.ts
import { ObjectItem } from '../types/basicTypes';
export declare function isDifferent<T>(value: ObjectItem<T>, old: ObjectItem<T>): boolean;

// File: functions/isDomData.d.ts
export declare function isDomData(): boolean;

// File: functions/isDomRuntime.d.ts
export declare function isDomRuntime(): boolean;

// File: functions/isElementVisible.d.ts
import { ElementOrString, ElementOrWindow } from '../types/basicTypes';
export declare function isElementVisible<E extends ElementOrWindow>(elementSelectors?: ElementOrString<E>): boolean;

// File: functions/isEnter.d.ts
export declare const isEnter: (event: KeyboardEvent, isInputElement?: boolean) => boolean;

// File: functions/isFilled.d.ts
import { EmptyValue } from '../types/basicTypes';
export declare function isFilled<T>(value: T, zeroTrue?: boolean): value is Exclude<T, EmptyValue>;

// File: functions/isFloat.d.ts
export declare function isFloat(value: any): boolean;

// File: functions/isFunction.d.ts
import { FunctionArgs } from '../types/basicTypes';
export declare function isFunction<T>(callback: T): callback is Extract<T, FunctionArgs<any, any>>;

// File: functions/isInDom.d.ts
import { ElementOrString, ElementOrWindow } from '../types/basicTypes';
export declare function isInDom<E extends ElementOrWindow>(element?: ElementOrString<E>): boolean;

// File: functions/isInput.d.ts
export declare const isInput: (element: HTMLElement | EventTarget | null) => boolean;

// File: functions/isIntegerBetween.d.ts
export declare function isIntegerBetween(value: number, between: number): boolean;

// File: functions/isMetaKey.d.ts
export declare const isMetaKey: (event: KeyboardEvent) => boolean;

// File: functions/isNull.d.ts
import { Undefined } from '../types/basicTypes';
export declare function isNull<T>(value: T): value is Extract<T, Undefined>;

// File: functions/isNumber.d.ts
export declare function isNumber(value: any): boolean;

// File: functions/isObject.d.ts
export declare function isObject<T>(value: T): value is Extract<T, Record<any, any>>;

// File: functions/isObjectNotArray.d.ts
export declare function isObjectNotArray<T>(value: T): value is Exclude<Extract<T, Record<any, any>>, any[] | undefined | null>;

// File: functions/isOnLine.d.ts
export declare function isOnLine(): boolean;

// File: functions/isSelected.d.ts
export declare function isSelected<T, S>(value: T, selected: T | T[] | S): boolean;

// File: functions/isSelectedByList.d.ts
export declare function isSelectedByList<T>(values: T | T[], selected: T | T[]): boolean;

// File: functions/isShare.d.ts
export declare function isShare(): boolean;

// File: functions/isString.d.ts
export declare function isString<T>(value: T): value is Extract<T, string>;

// File: functions/isTab.d.ts
export declare const isTab: (event: KeyboardEvent) => boolean;

// File: functions/isWindow.d.ts
export declare function isWindow<E>(element: E): element is Extract<E, Window>;

// File: functions/random.d.ts
export declare function random(min: number, max: number): number;

// File: functions/removeCommonPrefix.d.ts
export declare function removeCommonPrefix(mainStr: string, prefix: string): string;

// File: functions/replaceComponentName.d.ts
export declare const replaceComponentName: (text: string | undefined, name: string, componentName: string) => string | undefined;

// File: functions/replaceRecursive.d.ts
import { ObjectItem, ObjectOrArray } from '../types/basicTypes';
export declare function replaceRecursive<I>(array: ObjectItem<I>, replacement?: ObjectOrArray<I>, isMerge?: boolean): ObjectItem<I>;

// File: functions/replaceTemplate.d.ts
import { FunctionReturn } from '../types/basicTypes';
export declare function replaceTemplate(value: string, replaces: Record<string, string | FunctionReturn<string>>): string;

// File: functions/resizeImageByMax.d.ts
export declare function resizeImageByMax(image: HTMLImageElement | string, maxSize: number, type?: 'auto' | 'width' | 'height', typeData?: string): string | undefined;

// File: functions/secondToTime.d.ts
export declare function secondToTime(second: number | string | undefined, hasHour?: boolean): string;

// File: functions/setElementItem.d.ts
import { ElementOrString, ElementOrWindow } from '../types/basicTypes';
export declare function setElementItem<E extends ElementOrWindow, K extends keyof E, V extends E[K] = E[K]>(element: ElementOrString<E>, index: K, value: V | Record<string, V>): E | undefined;

// File: functions/setValues.d.ts
export declare function setValues<T>(selected: T | T[] | undefined, value: any, { multiple, maxlength, alwaysChange, notEmpty }: {
    multiple?: boolean | undefined;
    maxlength?: number | undefined;
    alwaysChange?: boolean | undefined;
    notEmpty?: boolean | undefined;
}): T | T[] | undefined;

// File: functions/sleep.d.ts
export declare function sleep(ms: number): Promise<void>;

// File: functions/splice.d.ts
import { ObjectItem } from '../types/basicTypes';
export declare function splice<I>(array: ObjectItem<I>, replacement?: ObjectItem<I> | I, indexStart?: string): ObjectItem<I>;

// File: functions/strFill.d.ts
export declare function strFill(value: string, count: number): string;

// File: functions/strSplit.d.ts
export declare function strSplit(value: number | string, separator: string, limit?: number): string[];

// File: functions/toArray.d.ts
export declare function toArray<T>(value: T): T extends any[] ? T : [T];

// File: functions/toCamelCase.d.ts
export declare function toCamelCase(value: string): string;

// File: functions/toCamelCaseFirst.d.ts
export declare function toCamelCaseFirst(value: string): string;

// File: functions/toDate.d.ts
export declare function toDate<T extends Date | number | string>(value?: T): (T & Date) | Date;

// File: functions/toKebabCase.d.ts
export declare function toKebabCase(value: string): string;

// File: functions/toNumber.d.ts
import { NumberOrString } from '../types/basicTypes';
export declare function toNumber(value?: NumberOrString): number;

// File: functions/toNumberByMax.d.ts
export declare function toNumberByMax(value: string | number, max?: string | number, formatting?: boolean, language?: string): string | number;

// File: functions/toPercent.d.ts
export declare function toPercent(maxValue: number, value: number): number;

// File: functions/toPercentBy100.d.ts
export declare function toPercentBy100(maxValue: number, value: number): number;

// File: functions/toString.d.ts
export declare function toString<T>(value: T): string;

// File: functions/transformation.d.ts
export declare function transformation(value: any, isFunction?: boolean): any;

// File: functions/uint8ArrayToBase64.d.ts
export declare function uint8ArrayToBase64(bytes: Uint8Array): string;

// File: functions/uniqueArray.d.ts
export declare function uniqueArray<T>(value: T[]): T[];

// File: functions/writeClipboardData.d.ts
export declare function writeClipboardData(text: string): Promise<void>;

// File: types/apiTypes.d.ts
import { ApiErrorItem } from '../classes/ApiErrorItem';

export declare enum ApiMethodItem {
    delete = "DELETE",
    get = "GET",
    post = "POST",
    put = "PUT",
    patch = "PATCH"
}
export type ApiCacheItem<T = any> = { value: T; age?: number; cacheAge: number; };
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
export type ApiDataValidation = { status?: ApiStatusType; code?: string | number; message?: string; error?: { code?: string | number; message?: string; }; };
export type ApiDataItem<T = any> = T & ApiDataValidation & { data?: T; success?: boolean; statusObject?: ApiStatusItem; errorObject?: ApiErrorItem; };
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
export type ApiHydrationItem = { path: string | RegExp; method: ApiMethod; request?: ApiFetch['request']; response: any; };
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
export type ApiPreparationEnd = { reset?: boolean; data?: any; };
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

// File: types/basicTypes.d.ts
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
export type Item<V> = { index: string; value: V; };
export type ItemValue<V> = { label: string; value: V; };
export type ItemName<V> = { name: string | number; value: V; };
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
export type ImageCoordinator = { x: number; y: number; };

// File: types/errorCenter.d.ts
export type ErrorCenterGroup = string | undefined;
export type ErrorCenterCauseItem<D = any> = {
    group?: ErrorCenterGroup;
    code: string;
    priority?: number;
    label?: string;
    message?: string;
    details?: D;
};
export type ErrorCenterCauseList = ErrorCenterCauseItem[];
export type ErrorCenterHandlerCallback = (cause: ErrorCenterCauseItem) => void;
export type ErrorCenterHandlerItem = {
    group?: ErrorCenterGroup;
    handlers: ErrorCenterHandlerCallback[];
};
export type ErrorCenterHandlerList = ErrorCenterHandlerItem[];

// File: types/formattersTypes.d.ts
export declare enum FormattersType {
    currency = "currency",
    date = "date",
    name = "name",
    number = "number",
    plural = "plural",
    unit = "unit"
}
export type FormattersOptionsCurrency = { currencyPropName?: string; options?: string | Intl.NumberFormatOptions; numberOnly?: boolean; };
export type FormattersOptionsDate = { type?: GeoDate; options?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions; hour24?: boolean; };
export type FormattersOptionsName = { lastPropName?: string; firstPropName?: string; surname?: string; short?: boolean; };
export type FormattersOptionsNumber = { options?: Intl.NumberFormatOptions; };
export type FormattersOptionsPlural = { words: string; options?: Intl.PluralRulesOptions; optionsNumber?: Intl.NumberFormatOptions; };
export type FormattersOptionsUnit = { unit: string | Intl.NumberFormatOptions; };
export type FormattersOptionsInformation<Type extends FormattersType> = Record<string, any>;
export type FormattersOptionsItem<Type extends FormattersType = FormattersType, R = string> = {
    type?: Type;
    transformation?: (valueOriginal: any, item: any, options?: FormattersOptionsInformation<Type>) => R;
    options?: FormattersOptionsInformation<Type>;
};
export type FormattersOptionsList = Record<string, FormattersOptionsItem>;
export type FormattersListItem = Record<string, any>;
export type FormattersList<Item extends FormattersListItem> = Item[];
export type FormattersListProp = FormattersList<FormattersListItem> | FormattersListItem;
export type FormattersItemProp<List extends FormattersListProp> = ArrayToItem<List>;
export type FormattersReturn<List extends FormattersListProp, Options extends FormattersOptionsList = FormattersOptionsList, Item extends FormattersItemProp<List> = FormattersItemProp<List>> = any;

// File: types/geoTypes.d.ts
export type GeoDate = 'full' | 'datetime' | 'date' | 'year-month' | 'year' | 'month' | 'day' | 'day-month' | 'time' | 'hour-minute' | 'hour' | 'minute' | 'second';
export type GeoFirstDay = 1 | 6 | 0;
export type GeoHours = '12' | '24';
export type GeoTimeZoneStyle = 'minute' | 'hour' | 'ISO8601' | 'RFC';
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
    unit?: Record<string, string>;
}
export interface GeoItemFull extends Omit<GeoItem, 'firstDay'> {
    standard: string;
    firstDay: string;
    location: string;
    locationCountry: string;
    locationLanguage: string;
}
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
export interface GeoFlagNational extends GeoFlagItem {
    description: string;
    nationalLanguage: string;
    nationalCountry: string;
}
export interface GeoPhoneValue {
    phone: number;
    within: number;
    mask: string[];
    value: string;
}
export interface GeoPhoneMap {
    items: GeoPhoneValue[];
    info: GeoPhoneValue | undefined;
    value: string | undefined;
    mask: string[];
    maskFull: string[];
    next: Record<string, GeoPhoneMap>;
}
export interface GeoPhoneMapInfo {
    item?: GeoPhoneMap;
    phone?: string;
}

// File: types/metaTypes.d.ts
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
export declare enum MetaOpenGraphTag {
    title = "og:title",
    type = "og:type",
    url = "og:url",
    image = "og:image",
    description = "og:description",
    locale = "og:locale",
    siteName = "og:site_name"
}
export declare enum MetaOpenGraphType {
    website = "website",
    article = "article",
    video = "video.other",
    videoTvShow = "video.tv_show",
    videoEpisode = "video.episode",
    videoMovie = "video.movie",
    musicAlbum = "music.album",
    musicPlaylist = "music.playlist",
    musicSong = "music.song",
    musicRadioStation = "music.radio_station",
    app = "app",
    product = "product",
    business = "business.business",
    place = "place",
    event = "event",
    profile = "profile",
    book = "book"
}
export declare enum MetaTwitterTag {
    card = "twitter:card",
    site = "twitter:site",
    creator = "twitter:creator",
    url = "twitter:url",
    title = "twitter:title",
    description = "twitter:description",
    image = "twitter:image"
}
export declare enum MetaTwitterCard {
    summary = "summary",
    summaryLargeImage = "summary_large_image",
    app = "app",
    player = "player",
    product = "product"
}

// File: types/searchTypes.d.ts
export type SearchItem = Record<string, any>;
export type SearchColumnPath<K, P> = K extends string ? P extends string ? `${K}.${P}` : never : never;
export type SearchColumn<T extends SearchItem> = {
    [K in keyof T]-?: NonNullable<T[K]> extends object ? K | SearchColumnPath<K, keyof NonNullable<T[K]>> : K;
}[keyof T];
export type SearchColumns<T extends SearchItem> = (SearchColumn<T> & string)[];
export type SearchFormatItem<T extends SearchItem, KT extends string[]> = any;
export type SearchFormatList<T extends SearchItem, K extends string[]> = SearchFormatItem<T, K>[];
export type SearchListValue<T extends SearchItem> = T[] | undefined;
export type SearchOptions = {
    limit?: number;
    returnEverything?: boolean;
    delay?: number;
    findExactMatch?: boolean;
    classSearchName?: string;
};
export type SearchCacheItem<T extends SearchItem> = { item: T; value: string; };
export type SearchCache<T extends SearchItem> = SearchCacheItem<T>[];
export type HighlightMatchItem = { text: string; isMatch: boolean; };

// File: types/translateTypes.d.ts
export type TranslateConfig = { url?: string; propsName?: string; readApi?: boolean; };
export type TranslateCode = string | string[];
export type TranslateList<T extends TranslateCode[]> = Record<string, string>;
export type TranslateDataFileList = Record<string, string>;
export type TranslateDataFileItem = () => Promise<TranslateDataFileList>;
export type TranslateDataFile = Record<string, TranslateDataFileItem>;
export declare const TRANSLATE_GLOBAL_PREFIX = "global";
export declare const TRANSLATE_TIME_OUT = 160;