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
export declare class Api {
    static isLocalhost(): boolean;
    static getItem(): any;
    static getStatus(): any;
    static getResponse(): any;
    static getHydration(): any;
    static getHydrationScript(): string;
    static getOrigin(): string;
    static getUrl(path: string, api?: boolean): string;
    static getBody(request?: any, method?: any): string | FormData | undefined;
    static getBodyForGet(request: any, path?: string, method?: any): string;
    static setHeaders(headers: any): void;
    static setRequestDefault(request: any): void;
    static setUrl(url: string): void;
    static setPreparation(callback: (apiFetch: any) => Promise<void>): void;
    static setEnd(callback: (query: Response, apiFetch: any) => Promise<any>): void;
    static setTimeout(timeout: number): void;
    static setOrigin(origin: string): void;
    static setWrapper(wrapper: <R>(callback: () => Promise<R>, apiFetch: any) => Promise<R>): void;
    static setConfig(config?: any): void;
    static request<T>(pathRequest: string | any): Promise<T>;
    static get<T>(request: any): Promise<T>;
    static post<T>(request: any): Promise<T>;
    static put<T>(request: any): Promise<T>;
    static patch<T>(request: any): Promise<T>;
    static delete<T>(request: any): Promise<T>;
}

// File: classes/ApiCache.d.ts
export declare class ApiCache {
    static init(getListener: (key: string) => Promise<any | undefined>, setListener: (key: string, value: any) => Promise<boolean>, removeListener: (key: string) => Promise<boolean>, cacheStepAgeClearOld?: number): void;
    static reset(): void;
    static get<T>(key: string): Promise<T | undefined>;
    static getByFetch<T>(fetch: any): Promise<T | undefined>;
    static set<T>(key: string, value: T, age?: number): Promise<void>;
    static setByFetch<T>(fetch: any, value: T): Promise<void>;
    static remove(key: string): Promise<void>;
}

// File: classes/ApiDataReturn.d.ts
export declare class ApiDataReturn<T = any> {
    constructor(apiFetch: any, query: Response, end: any, error?: any);
    init(): Promise<this>;
    get(): any;
    getAndStatus(status: any): any;
    getData(): any | undefined;
}

// File: classes/ApiDefault.d.ts
export declare class ApiDefault {
    is(): boolean;
    get(): Record<string, any> | undefined;
    request(request: any): any;
    set(request: any): this;
}

// File: classes/ApiError.d.ts
export declare class ApiError {
    static getStorage(): any;
    static add(item: any | any[], url?: string | RegExp, method?: any): void;
    static getItem(method: any, response: Response): Promise<any>;
}

// File: classes/ApiErrorItem.d.ts
export declare class ApiErrorItem {
    constructor(method: any, response: Response, error: any);
    getMethod(): any;
    getResponse(): Response;
    getError(): any;
    getCode(): string | undefined;
    getMessage(): string | undefined;
    getStatus(): number;
}

// File: classes/ApiErrorStorage.d.ts
export declare class ApiErrorStorage {
    find(method: any, response: Response): Promise<any>;
    add(item: any | any[], url?: string | RegExp, method?: any): this;
}

// File: classes/ApiHeaders.d.ts
export declare class ApiHeaders {
    get(value?: Record<string, string> | null, type?: string | undefined | null): Record<string, string> | undefined;
    getByRequest(request: any, value?: Record<string, string> | null, type?: string): Record<string, string> | undefined;
    set(headers: any): this;
}

// File: classes/ApiHydration.d.ts
export declare class ApiHydration {
    initResponse(response: any): void;
    toClient<T>(apiFetch: any, response: T): void;
    toString(): string;
}

// File: classes/ApiInstance.d.ts
export type ApiInstanceOptions = {
    headersClass?: any;
    requestDefaultClass?: any;
    statusClass?: any;
    responseClass?: any;
    preparationClass?: any;
    loadingClass?: any;
    errorCenterClass?: any;
    hydrationClass?: any;
    wrapper?: <R>(callback: () => Promise<R>, apiFetch: any) => Promise<R>;
};
export declare class ApiInstance {
    constructor(url?: string, options?: ApiInstanceOptions);
    isLocalhost(): boolean;
    getStatus(): any;
    getResponse(): any;
    getHydration(): any;
    getOrigin(): string;
    getUrl(path: string, api?: boolean): string;
    getBody(request?: any, method?: any): string | FormData | undefined;
    getBodyForGet(request: any, path?: string, method?: any): string;
    getHydrationScript(): string;
    setHeaders(headers: any): this;
    setRequestDefault(request: any): this;
    setUrl(url: string): this;
    setPreparation(callback: (apiFetch: any) => Promise<void>): this;
    setEnd(callback: (query: Response, apiFetch: any) => Promise<any>): this;
    setTimeout(timeout: number): this;
    setOrigin(origin: string): this;
    setWrapper(wrapper: <R>(callback: () => Promise<R>, apiFetch: any) => Promise<R>): this;
    request<T>(pathRequest: string | any): Promise<T>;
    get<T>(request: any): Promise<T>;
    post<T>(request: any): Promise<T>;
    put<T>(request: any): Promise<T>;
    patch<T>(request: any): Promise<T>;
    delete<T>(request: any): Promise<T>;
}

// File: classes/ApiPreparation.d.ts
export declare class ApiPreparation {
    make(active: boolean, apiFetch: any): Promise<void>;
    makeEnd(active: boolean, query: Response, apiFetch: any): Promise<any>;
    set(callback: (apiFetch: any) => Promise<void>): this;
    setEnd(callback: (query: Response, apiFetch: any) => Promise<any>): this;
}

// File: classes/ApiResponse.d.ts
export declare class ApiResponse {
    constructor(requestDefault: any);
    get(path: string | undefined, method: any, request?: any, devMode?: boolean): any | undefined;
    getList(): any[];
    add(response: any | any[]): this;
    setDevMode(devMode: boolean): this;
    emulator<T>(apiFetch: any): Promise<T | undefined>;
    emulatorAsync<T>(apiFetch: any): T | undefined;
}

// File: classes/ApiStatus.d.ts
export declare class ApiStatus {
    get(): any | undefined;
    getStatus(): number | undefined;
    getStatusText(): string | undefined;
    getStatusType(): any | undefined;
    getCode(): string | undefined;
    getError(): string | undefined;
    getResponse<T>(): T | undefined;
    getMessage(): string;
    set(data: any): this;
    setStatus(status?: number, statusText?: string): this;
    setError(error?: string): this;
    setLastResponse(response?: any): this;
    setLastStatus(status?: any): this;
    setLastCode(code?: string): this;
    setLastMessage(message?: string): this;
}

// File: classes/BroadcastMessage.d.ts
export declare class BroadcastMessage<Message = any> {
    constructor(name: string, callback?: ((event: MessageEvent<Message>) => void) | undefined, callbackError?: ((event: MessageEvent<Message>) => void) | undefined, errorCenter?: any);
    getChannel(): BroadcastChannel | undefined;
    post(message: Message): this;
    setCallback(callback: (event: MessageEvent<Message>) => void): this;
    setCallbackError(callbackError: (event: MessageEvent<Message>) => void): this;
    destroy(): this;
}

// File: classes/Cache.d.ts
export declare class Cache {
    get<T>(name: string, callback: () => T, comparison?: any[]): T;
    getAsync<T>(name: string, callback: () => T, comparison?: any[]): Promise<T>;
}

// File: classes/CacheItem.d.ts
export declare class CacheItem<T> {
    constructor(callback: () => T);
    getCache(comparison: any[]): T;
    getCacheOld(): T | undefined;
    getCacheAsync(comparison: any[]): Promise<T>;
}

// File: classes/CacheStatic.d.ts
export declare class CacheStatic {
    static get<T>(name: string, callback: () => T, comparison?: any[]): T;
    static getAsync<T>(name: string, callback: () => T, comparison?: any[]): Promise<T>;
}

// File: classes/Cookie.d.ts
export declare class Cookie<T> {
    static getInstance<T>(name: string): Cookie<T>;
    constructor(name: string);
    get(defaultValue?: T | string | (() => (T | string)), options?: any): string | T | undefined;
    set(value?: T | string | (() => (T | string)), options?: any): void;
    remove(): void;
}

// File: classes/CookieBlock.d.ts
export declare class CookieBlock {
    static getItem(): any;
    static get(): boolean;
    static set(value: boolean): void;
}

// File: classes/CookieBlockInstance.d.ts
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
export declare class CookieStorage {
    static init(getListener?: (key: string) => any | undefined, getListenerRaw?: () => string, setListener?: (key: string, value: any, cookie: string, options?: CookieOptions) => void): void;
    static reset(): void;
    static get<T>(name: string, defaultValue?: T | (() => T)): T | undefined;
    static set<T>(name: string, value: T | (() => T), options?: CookieOptions): T;
    static remove(name: string): void;
    static update(): void;
}

// File: classes/DataStorage.d.ts
export declare class DataStorage<T> {
    static setPrefix(newPrefix: string): void;
    constructor(name: string, isSession?: boolean, errorCenter?: any);
    get(defaultValue?: T | (() => T), cache?: number): T | undefined;
    set(value?: T | (() => T)): T | undefined;
    remove(): this;
    update(): this;
}

// File: classes/Datetime.d.ts
export declare class Datetime {
    constructor(date?: any, type?: any, code?: string);
    getIntl(): any;
    getDate(): Date;
    getType(): any;
    getHoursType(): any;
    getHour24(): boolean;
    getTimeZoneOffset(): number;
    getTimeZone(style?: any): string;
    getFirstDayCode(): any;
    getYear(): number;
    getMonth(): number;
    getDay(): number;
    getHour(): number;
    getMinute(): number;
    getSecond(): number;
    getMaxDay(): number;
    locale(type?: any, styleOptions?: any): string;
    localeYear(style?: any): string;
    localeMonth(style?: any): string;
    localeDay(style?: any): string;
    localeHour(style?: any): string;
    localeMinute(style?: any): string;
    localeSecond(style?: any): string;
    standard(timeZone?: boolean): string;
    setDate(value: any): this;
    setType(value: any): this;
    setHour24(value: boolean): this;
    setCode(code: string): this;
    setWatch(watch: (date: Date, type: any, hour24: boolean) => void): this;
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
export declare class ErrorCenter {
    static getItem(): any;
    static has(code: string, group?: string): boolean;
    static get(code: string, group?: string): any | undefined;
    static add(cause: any): void;
    static addList(causes: any[]): void;
    static addHandler(group: string | undefined, handler: (cause: any) => void): void;
    static addHandlerList(handlers: any[]): void;
    static addCallback(callback: (cause: any) => void): void;
    static on(cause: any): void;
}

// File: classes/ErrorCenterHandler.d.ts
export declare class ErrorCenterHandler {
    constructor(handlers?: any[]);
    has(group: string | undefined): boolean;
    get(group: string | undefined): any | undefined;
    add(group: string | undefined, handler: (cause: any) => void): this;
    addList(handlers: any[]): this;
    addCallback(callback: (cause: any) => void): this;
    on(cause: any): this;
}

// File: classes/ErrorCenterInstance.d.ts
export declare class ErrorCenterInstance {
    constructor(causes?: any[], handler?: any);
    has(code: string, group?: string): boolean;
    get(code: string, group?: string): any | undefined;
    add(cause: any): this;
    addList(causes: any[]): this;
    addHandler(group: string | undefined, handler: (cause: any) => void): this;
    addHandlerList(handlers: any[]): this;
    addCallback(callback: (cause: any) => void): this;
    on(cause: any): this;
}

// File: classes/EventItem.d.ts
export declare class EventItem<E extends any, O extends Event, D extends Record<string, any> = Record<string, any>> {
    constructor(elementSelector?: any, type?: string | string[], listener?: ((event: O, detail?: D) => void) | undefined, options?: any, detail?: D | undefined);
    isActive(): boolean;
    getElement(): E | undefined;
    setElement(elementSelector?: any): this;
    setElementControl<EC extends HTMLElement>(elementSelector?: any): this;
    setType(type: string | string[]): this;
    setListener(listener: (event: O, detail?: D) => void): this;
    setOptions(options?: any): this;
    setDetail(detail?: D): this;
    dispatch(detail?: D | undefined): this;
    start(): this;
    stop(): this;
    toggle(activity: boolean): this;
    reset(): this;
}

// File: classes/Formatters.d.ts
export declare class Formatters<Options extends any = any, List extends any = any, Item extends any = any> {
    constructor(options: Options, list?: List | undefined);
    is(): boolean;
    isArray(): boolean;
    length(): number;
    getList(): any[];
    getOptions(): Options;
    setList(list?: List): this;
    to(): any;
}

// File: classes/Geo.d.ts
export declare class Geo {
    static getObject(): any;
    static get(): any;
    static getCountry(): string;
    static getLanguage(): string;
    static getStandard(): string;
    static getFirstDay(): string;
    static getLocation(): string;
    static getLocationCountry(): string;
    static getLocationLanguage(): string;
    static getItem(): any;
    static getList(): any[];
    static getByCode(code?: string): any;
    static getByCodeFull(code: string): any | undefined;
    static getByCountry(country: string): any | undefined;
    static getByLanguage(language: string): any | undefined;
    static getTimezone(): number;
    static getTimezoneFormat(): string;
    static find(code: string): any;
    static toStandard(item: any): string;
    static set(code: string, save?: boolean): void;
    static setTimezone(timezone: number): void;
    static setValueDefault(code?: string | (() => string)): void;
}

// File: classes/GeoFlag.d.ts
export declare class GeoFlag {
    static flags: Record<string, string>;
    constructor(code?: string);
    get(code?: string): any | undefined;
    getLanguage(code?: string): any | undefined;
    getCode(): string;
    getFlag(code?: string): string | undefined;
    getList(codes?: string[], sort?: boolean): any[];
    getListLanguage(codes?: string[], sort?: boolean): any[];
    getNational(codes?: string[], sort?: boolean): any[];
    getNationalLanguage(codes?: string[], sort?: boolean): any[];
    setCode(code: string): this;
}

// File: classes/GeoInstance.d.ts
export declare class GeoInstance {
    constructor();
    get(): any;
    getCountry(): string;
    getLanguage(): string;
    getStandard(): string;
    getFirstDay(): string;
    getLocation(): string;
    getLocationCountry(): string;
    getLocationLanguage(): string;
    getItem(): any;
    getList(): any[];
    getByCode(code?: string): any;
    getByCodeFull(code: string): any | undefined;
    getByCountry(country: string): any | undefined;
    getByLanguage(language: string): any | undefined;
    getTimezone(): number;
    getTimezoneFormat(): string;
    find(code: string): any;
    toStandard(item: any, language?: string): string;
    set(code: string, save?: boolean): void;
    setTimezone(timezone: number): void;
    setValueDefault(code?: string | (() => string)): void;
}

// File: classes/GeoIntl.d.ts
export declare class GeoIntl {
    static isItem(code?: string): boolean;
    static getLocation(code?: string): string;
    static getInstance(code?: string): GeoIntl;
    constructor(code?: string, errorCenter?: any);
    getLocation(): string;
    getFirstDay(): string;
    display(value?: string, typeOptions?: any): string;
    languageName(value?: string, style?: any): string;
    countryName(value?: string, style?: any): string;
    fullName(last: string, first: string, surname?: string, short?: boolean): string;
    number(value: any, options?: Intl.NumberFormatOptions): string;
    decimal(): string;
    currency(value: any, currencyOptions?: string | Intl.NumberFormatOptions, numberOnly?: boolean): string;
    currencySymbol(currency: string, currencyDisplay?: any): string;
    unit(value: any, unitOptions?: string | Intl.NumberFormatOptions): string;
    sizeFile(value: any, unitOptions?: any): string;
    percent(value: any, options?: Intl.NumberFormatOptions): string;
    percentBy100(value: any, options?: Intl.NumberFormatOptions): string;
    plural(value: any, words: string, options?: Intl.PluralRulesOptions, optionsNumber?: Intl.NumberFormatOptions): string;
    date(value: any, type?: any, styleOptions?: any, hour24?: boolean): string;
    relative(value: any, styleOptions?: any, todayValue?: Date): string;
    relativeLimit(value: any, limit: number, todayValue?: Date, relativeOptions?: any, dateOptions?: any, type?: any, hour24?: boolean): string;
    relativeByValue(value: any, unit: any, styleOptions?: any): string;
    month(value?: any, style?: any): string;
    months(style?: any): any[];
    weekday(value?: any, style?: any): string;
    weekdays(style?: any): any[];
    time(value: any): string;
    sort<T>(data: T[], compareFn?: (a: T, b: T) => [string, string]): T[];
}

// File: classes/GeoPhone.d.ts
export declare class GeoPhone {
    static get(code: string): any | undefined;
    static getByPhone(phone: string): any;
    static getByCode(code: string): any | undefined;
    static getList(): any[];
    static getMap(): Record<string, any>;
    static toMask(phone: string, masks?: string[]): string | undefined;
    static removeZero(phone: string): string;
}

// File: classes/GeoUnit.d.ts
export declare class GeoUnit {
    static getInstance(code?: string): GeoUnit;
    constructor(code?: string);
    getLocation(): string;
    millimeter(value: any, options?: Intl.NumberFormatOptions): string;
    centimeter(value: any, options?: Intl.NumberFormatOptions): string;
    meter(value: any, options?: Intl.NumberFormatOptions): string;
    kilometer(value: any, options?: Intl.NumberFormatOptions): string;
    squareMeter(value: any, options?: Intl.NumberFormatOptions): string;
    hectare(value: any, options?: Intl.NumberFormatOptions): string;
    gram(value: any, options?: Intl.NumberFormatOptions): string;
    kilogram(value: any, options?: Intl.NumberFormatOptions): string;
    tonne(value: any, options?: Intl.NumberFormatOptions): string;
    milliliter(value: any, options?: Intl.NumberFormatOptions): string;
    liter(value: any, options?: Intl.NumberFormatOptions): string;
    celsius(value: any, options?: Intl.NumberFormatOptions): string;
    kilometerPerHour(value: any, options?: Intl.NumberFormatOptions): string;
    format(value: any, unit: string, options?: Intl.NumberFormatOptions): string;
}

// File: classes/Global.d.ts
export declare class Global {
    static getItem(): Record<string, any>;
    static get<R = any>(name: string): R;
    static add(data: Record<string, any>): void;
}

// File: classes/Hash.d.ts
export declare class Hash {
    static getItem(): any;
    static get<T>(name: string, defaultValue?: T | (() => T)): T;
    static set<T>(name: string, callback: T | (() => T)): void;
    static addWatch<T>(name: string, callback: (value: T) => void): void;
    static removeWatch<T>(name: string, callback: (value: T) => void): void;
    static reload(): void;
}

// File: classes/HashInstance.d.ts
export declare class HashInstance extends any {
}

// File: classes/Icons.d.ts
export declare class Icons {
    static is(index: string): boolean;
    static get(index: string, url?: string, wait?: number): Promise<string>;
    static getAsync(index: string, url?: string): string;
    static getNameList(): string[];
    static getUrlGlobal(): string;
    static add(index: string, file: any): void;
    static addLoad(index: string): void;
    static addGlobal(index: string, file: string): void;
    static addByList(list: Record<string, any>): void;
    static setUrl(url: string): void;
    static setConfig(config: any): void;
}

// File: classes/Loading.d.ts
export declare class Loading {
    static is(): boolean;
    static get(): number;
    static getItem(): any;
    static show(): void;
    static hide(): void;
    static registrationEvent(listener: (event: any, detail?: any) => void, element?: any): void;
    static unregistrationEvent(listener: (event: any, detail?: any) => void, element?: any): void;
}

// File: classes/LoadingInstance.d.ts
export declare class LoadingInstance {
    constructor(eventName?: string);
    is(): boolean;
    get(): number;
    show(): void;
    hide(): void;
    registrationEvent(listener: (event: any, detail?: any) => void, element?: any): void;
    unregistrationEvent(listener: (event: any, detail?: any) => void, element?: any): void;
}

// File: classes/Meta.d.ts
export declare class Meta extends any {
    constructor();
    getOg(): any;
    getTwitter(): any;
    getTitle(): string;
    getKeywords(): string;
    getDescription(): string;
    getImage(): string;
    getCanonical(): string;
    getRobots(): any;
    getAuthor(): string;
    getSiteName(): string;
    getLocale(): string;
    setTitle(title: string): this;
    setKeywords(keywords: string | string[]): this;
    setDescription(description: string): this;
    setImage(image: string): this;
    setCanonical(canonical: string): this;
    setRobots(robots: any): this;
    setAuthor(author: string): this;
    setSiteName(siteName: string): this;
    setLocale(locale: string): this;
    setSuffix(suffix?: string): void;
    html(): string;
    htmlTitle(): string;
}

// File: classes/MetaManager.d.ts
export declare class MetaManager<T extends readonly string[], Key extends any = any> {
    constructor(listMeta: T, isProperty?: boolean);
    getListMeta(): T;
    get(name: Key): string;
    getItems(): any;
    html(): string;
    set(name: Key, content: string): this;
    setByList(metaList: any): this;
}

// File: classes/MetaOg.d.ts
export declare class MetaOg extends any {
    constructor();
    getTitle(): string;
    getType(): any;
    getUrl(): string;
    getImage(): string;
    getDescription(): string;
    getLocale(): string;
    getSiteName(): string;
    setTitle(title: string): this;
    setType(type: any): this;
    setUrl(url: string): this;
    setImage(url: string): this;
    setDescription(description: string): this;
    setLocale(locale: string): this;
    setSiteName(siteName: string): this;
}

// File: classes/MetaStatic.d.ts
export declare class MetaStatic {
    static getItem(): any;
    static getOg(): any;
    static getTwitter(): any;
    static getTitle(): string;
    static getKeywords(): string;
    static getDescription(): string;
    static getImage(): string;
    static getCanonical(): string;
    static getRobots(): any;
    static getAuthor(): string;
    static getSiteName(): string;
    static getLocale(): string;
    static setTitle(title: string): typeof MetaStatic;
    static setKeywords(keywords: string | string[]): typeof MetaStatic;
    static setDescription(description: string): typeof MetaStatic;
    static setImage(image: string): typeof MetaStatic;
    static setCanonical(canonical: string): typeof MetaStatic;
    static setRobots(robots: any): typeof MetaStatic;
    static setAuthor(author: string): typeof MetaStatic;
    static setSiteName(siteName: string): typeof MetaStatic;
    static setLocale(locale: string): typeof MetaStatic;
    static setSuffix(suffix?: string): typeof MetaStatic;
    static html(): string;
    static htmlTitle(): string;
}

// File: classes/MetaTwitter.d.ts
export declare class MetaTwitter extends any {
    constructor();
    getCard(): any;
    getSite(): string;
    getCreator(): string;
    getUrl(): string;
    getTitle(): string;
    getDescription(): string;
    getImage(): string;
    setCard(card: any): this;
    setSite(site: string): this;
    setCreator(creator: string): this;
    setUrl(url: string): this;
    setTitle(title: string): this;
    setDescription(description: string): this;
    setImage(image: string): this;
}

// File: classes/Query.d.ts
export declare class Query {
    static getItem(): any;
    static get<T>(name: string, defaultValue?: T | (() => T)): T;
    static set<T>(name: string, callback: T | (() => T)): void;
    static addWatch<T>(name: string, callback: (value: T) => void): void;
    static removeWatch<T>(name: string, callback: (value: T) => void): void;
    static reload(): void;
}

// File: classes/QueryInstance.d.ts
export declare class QueryInstance extends any {
}

// File: classes/ResumableTimer.d.ts
export declare class ResumableTimer {
    constructor(callback: () => void, delay?: number, blockStart?: boolean);
    resume(): this;
    pause(): this;
    reset(): this;
    clear(): this;
}

// File: classes/ScrollbarWidth.d.ts
export declare class ScrollbarWidth {
    static is(): Promise<boolean>;
    static get(): Promise<number>;
    static getStorage(): any;
    static getCalculate(): boolean;
}

// File: classes/SearchList.d.ts
export declare class SearchList<T extends any, K extends any> {
    constructor(list: any, columns?: K, value?: string, options?: any);
    getData(): any;
    getList(): any;
    getColumns(): K | undefined;
    getItem(): any;
    getValue(): string | undefined;
    getOptions(): any;
    setList(list: any): this;
    setColumns(columns?: K): this;
    setValue(value?: string): this;
    setOptions(options: any): this;
    to(): any;
}

// File: classes/SearchListData.d.ts
export declare class SearchListData<T extends any, K extends any> {
    constructor(list: any, columns: K | undefined, item: any, options: any);
    is(): boolean;
    isList(): boolean;
    getList(): any;
    getColumns(): K | undefined;
    setList(list: any): this;
    setColumns(columns?: any): this;
    findCacheItem(item: T): any | undefined;
    forEach(callback: (item: any, value: any) => any | undefined): any;
    toFormatItem(item: T, selection: boolean): any;
}

// File: classes/SearchListItem.d.ts
export declare class SearchListItem {
    constructor(value: string | undefined, options: any);
    is(): boolean;
    isSearch(): boolean;
    get(): string;
    set(value?: string): this;
}

// File: classes/SearchListMatcher.d.ts
export declare class SearchListMatcher {
    constructor(item: any, options: any);
    is(): boolean;
    isSelection(value: any): boolean;
    get(): RegExp | undefined;
    update(): void;
}

// File: classes/SearchListOptions.d.ts
export declare class SearchListOptions {
    constructor(options?: any);
    getOptions(): any;
    getLimit(): number;
    getReturnEverything(): boolean;
    getDelay(): number;
    getFindExactMatch(): boolean;
    getClassName(): string;
    setOptions(options: any): this;
}

// File: classes/ServerStorage.d.ts
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
export declare class Translate {
    static get(name: string, replacement?: string[] | Record<string, string | number>): Promise<string>;
    static getItem(): any;
    static getSync(name: string, first?: boolean, replacement?: string[] | Record<string, string | number>): string;
    static getList<T extends string[]>(names: T): Promise<any>;
    static getListSync<T extends string[]>(names: T, first?: boolean): any;
    static add(names: string | string[]): Promise<void>;
    static addSync(data: Record<string, string>): void;
    static addNormalOrSync(data: Record<string, string>): Promise<void>;
    static addSyncByLocation(data: Record<string, Record<string, string>>): void;
    static addSyncByFile(data: any): void;
    static setUrl(url: string): void;
    static setPropsName(name: string): void;
    static setReadApi(value: boolean): void;
    static setConfig(config: any): void;
}

// File: classes/TranslateFile.d.ts
export declare class TranslateFile {
    constructor(data?: any, language?: string | (() => string), location?: string | (() => string));
    isFile(): boolean;
    getLocation(): string;
    getLanguage(): string;
    getList(): Promise<any | undefined>;
    add(data: any): void;
}

// File: classes/TranslateInstance.d.ts
export declare class TranslateInstance {
    constructor(url?: string, propsName?: string, files?: any);
    get(name: string, replacement?: string[] | Record<string, string | number>): Promise<string>;
    getSync(name: string, first?: boolean, replacement?: string[] | Record<string, string | number>): string;
    getList<T extends string[]>(names: T): Promise<any>;
    getListSync<T extends string[]>(names: T, first?: boolean): any;
    add(names: string | string[]): Promise<void>;
    addSync(data: Record<string, string>): void;
    addNormalOrSync(data: Record<string, string>): Promise<void>;
    addSyncByLocation(data: Record<string, Record<string, string>>): void;
    addSyncByFile(data: any): void;
    setUrl(url: string): this;
    setPropsName(name: string): this;
    setReadApi(value: boolean): this;
}

// File: classes/UrlInstanceAbstract.d.ts
export declare abstract class UrlInstanceAbstract {
    get<T>(name: string, defaultValue?: T | (() => T)): T;
    set<T>(name: string, callback: T | (() => T)): this;
    addWatch<T>(name: string, callback: (value: T) => void): this;
    removeWatch<T>(name: string, callback: (value: T) => void): this;
    reload(): this;
}

// File: classes/UrlItem.d.ts
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
export declare function createElement<T extends HTMLElement>(parentElement?: HTMLElement, tagName?: string, options?: any, referenceElement?: HTMLElement): T | undefined;

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
export declare function executeFunction<T>(callback: T | ((...args: any[]) => T), ...args: any[]): T;

// File: functions/executePromise.d.ts
export declare function executePromise<T>(callback: ((...args: any[]) => Promise<T>) | ((...args: any[]) => T) | T, ...args: any[]): Promise<T>;

// File: functions/forEach.d.ts
export declare function forEach<T, R>(data: any, callback: (item: T, key: any, dataMain: any) => R, saveUndefined?: boolean): R[];

// File: functions/frame.d.ts
export declare function frame(callback: () => void, next?: () => boolean, end?: () => void): void;

// File: functions/getArrayHighlightMatch.d.ts
export declare function getArrayHighlightMatch(value: string, search?: string | RegExp): any[];

// File: functions/getAttributes.d.ts
export declare function getAttributes<E extends any>(element?: any): Record<string, string | undefined>;

// File: functions/getClipboardData.d.ts
export declare function getClipboardData(event?: ClipboardEvent): Promise<string>;

// File: functions/getColumn.d.ts
export declare function getColumn<T, K extends keyof T>(array: any, column: K): (T[K] | undefined)[];

// File: functions/getCurrentDate.d.ts
export declare function getCurrentDate(format?: any): string;

// File: functions/getCurrentTime.d.ts
export declare function getCurrentTime(): number;

// File: functions/getElement.d.ts
export declare function getElement<E extends any, R extends Exclude<E, Window>>(element?: any): R | undefined;

// File: functions/getElementId.d.ts
export declare function getElementId<E extends any>(element?: any, selector?: string): string;
export declare function initGetElementId(newListener: () => string | number): void;

// File: functions/getElementImage.d.ts
export declare function getElementImage(image: HTMLImageElement | string): HTMLImageElement | undefined;

// File: functions/getElementItem.d.ts
export declare function getElementItem<T extends any, K extends keyof T, D>(element: any, index: K | string, defaultValue?: D): T[K] | D | undefined;

// File: functions/getElementOrWindow.d.ts
export declare function getElementOrWindow<E extends any>(element?: any): E | undefined;

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

// File: functions/getLength.d.ts
export declare function getLength(value: any): number;

// File: functions/getLengthOfAllArray.d.ts
export declare function getLengthOfAllArray(value: any): number[];

// File: functions/getMaxLengthAllArray.d.ts
export declare function getMaxLengthAllArray(data: any): number;

// File: functions/getMinLengthAllArray.d.ts
export declare function getMinLengthAllArray(data: any): number;

// File: functions/getMouseClient.d.ts
export declare function getMouseClient(event: MouseEvent & TouchEvent): any;

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
export declare function intersectKey<T, KT extends keyof T, C, KC extends keyof C>(data?: T, comparison?: C): Record<string, any>;

// File: functions/isApiSuccess.d.ts
export declare const isApiSuccess: <T>(data: any) => boolean;

// File: functions/isArray.d.ts
export declare function isArray<T, R>(value: T): boolean;

// File: functions/isDifferent.d.ts
export declare function isDifferent<T>(value: any, old: any): boolean;

// File: functions/isDomData.d.ts
export declare function isDomData(): boolean;

// File: functions/isDomRuntime.d.ts
export declare function isDomRuntime(): boolean;

// File: functions/isElementVisible.d.ts
export declare function isElementVisible<E extends any>(elementSelectors?: any): boolean;

// File: functions/isEnter.d.ts
export declare const isEnter: (event: KeyboardEvent, isInputElement?: boolean) => boolean;

// File: functions/isFilled.d.ts
export declare function isFilled<T>(value: T, zeroTrue?: boolean): boolean;

// File: functions/isFloat.d.ts
export declare function isFloat(value: any): boolean;

// File: functions/isFunction.d.ts
export declare function isFunction<T>(callback: T): boolean;

// File: functions/isInDom.d.ts
export declare function isInDom<E extends any>(element?: any): boolean;

// File: functions/isInput.d.ts
export declare const isInput: (element: HTMLElement | EventTarget | null) => boolean;

// File: functions/isIntegerBetween.d.ts
export declare function isIntegerBetween(value: number, between: number): boolean;

// File: functions/isMetaKey.d.ts
export declare const isMetaKey: (event: KeyboardEvent) => boolean;

// File: functions/isNull.d.ts
export declare function isNull<T>(value: T): boolean;

// File: functions/isNumber.d.ts
export declare function isNumber(value: any): boolean;

// File: functions/isObject.d.ts
export declare function isObject<T>(value: T): boolean;

// File: functions/isObjectNotArray.d.ts
export declare function isObjectNotArray<T>(value: T): boolean;

// File: functions/isOnLine.d.ts
export declare function isOnLine(): boolean;

// File: functions/isSelected.d.ts
export declare function isSelected<T, S>(value: T, selected: T | T[] | S): boolean;

// File: functions/isSelectedByList.d.ts
export declare function isSelectedByList<T>(values: T | T[], selected: T | T[]): boolean;

// File: functions/isShare.d.ts
export declare function isShare(): boolean;

// File: functions/isString.d.ts
export declare function isString<T>(value: T): boolean;

// File: functions/isTab.d.ts
export declare const isTab: (event: KeyboardEvent) => boolean;

// File: functions/isWindow.d.ts
export declare function isWindow<E>(element: E): boolean;

// File: functions/random.d.ts
export declare function random(min: number, max: number): number;

// File: functions/removeCommonPrefix.d.ts
export declare function removeCommonPrefix(mainStr: string, prefix: string): string;

// File: functions/replaceComponentName.d.ts
export declare const replaceComponentName: (text: string | undefined, name: string, componentName: string) => string | undefined;

// File: functions/replaceRecursive.d.ts
export declare function replaceRecursive<I>(array: any, replacement?: any, isMerge?: boolean): any;

// File: functions/replaceTemplate.d.ts
export declare function replaceTemplate(value: string, replaces: Record<string, string | (() => string)>): string;

// File: functions/resizeImageByMax.d.ts
export declare function resizeImageByMax(image: HTMLImageElement | string, maxSize: number, type?: any, typeData?: string): string | undefined;

// File: functions/secondToTime.d.ts
export declare function secondToTime(second: number | string | undefined, hasHour?: boolean): string;

// File: functions/setElementItem.d.ts
export declare function setElementItem<E extends any, K extends keyof E, V extends E[K] = E[K]>(element: any, index: K, value: V | Record<string, V>): E | undefined;

// File: functions/setValues.d.ts
export declare function setValues<T>(selected: T | T[] | undefined, value: any, options: {
    multiple?: boolean;
    maxlength?: number;
    alwaysChange?: boolean;
    notEmpty?: boolean;
}): T | T[] | undefined;

// File: functions/sleep.d.ts
export declare function sleep(ms: number): Promise<void>;

// File: functions/splice.d.ts
export declare function splice<I>(array: any, replacement?: any, indexStart?: string): any;

// File: functions/strFill.d.ts
export declare function strFill(value: string, count: number): string;

// File: functions/strSplit.d.ts
export declare function strSplit(value: number | string, separator: string, limit?: number): string[];

// File: functions/toArray.d.ts
export declare function toArray<T>(value: T): any;

// File: functions/toCamelCase.d.ts
export declare function toCamelCase(value: string): string;

// File: functions/toCamelCaseFirst.d.ts
export declare function toCamelCaseFirst(value: string): string;

// File: functions/toDate.d.ts
export declare function toDate<T extends Date | number | string>(value?: T): Date;

// File: functions/toKebabCase.d.ts
export declare function toKebabCase(value: string): string;

// File: functions/toNumber.d.ts
export declare function toNumber(value?: any): number;

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
export type ApiConfig = any;
export type ApiData<T = any> = any;
export type ApiDataValidation = any;
export type ApiDataItem<T = any> = any;
export type ApiHeadersValue = Record<string, string> | (() => Record<string, string>);
export type ApiDefaultValue = Record<string, any> | (() => Record<string, any>);
export type ApiFetch = any;
export type ApiHydrationItem = any;
export type ApiHydrationList = ApiHydrationItem[];
export type ApiErrorStorageItem = any;
export type ApiErrorStorageList = ApiErrorStorageItem[];
export type ApiMethod = string | ApiMethodItem;
export type ApiPreparationEnd = any;
export type ApiResponseItem = any;
export type ApiStatusItem = any;
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
export type EventActivityItem<E extends ElementOrWindow> = any;
export type ImageCoordinator = {
    x: number;
    y: number;
};

// File: types/errorCenter.d.ts
export type ErrorCenterGroup = string | undefined;
export type ErrorCenterCauseItem<D = any> = any;
export type ErrorCenterCauseList = ErrorCenterCauseItem[];
export type ErrorCenterHandlerCallback = (cause: ErrorCenterCauseItem) => void;
export type ErrorCenterHandlerItem = any;
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
export type FormattersOptionsCurrency = any;
export type FormattersOptionsDate = any;
export type FormattersOptionsName = any;
export type FormattersOptionsNumber = any;
export type FormattersOptionsPlural = any;
export type FormattersOptionsUnit = any;
export type FormattersOptionsInformation<Type extends FormattersType> = any;
export type FormattersOptionsItem<Type extends FormattersType = FormattersType, R = string> = any;
export type FormattersOptionsList = Record<string, FormattersOptionsItem>;
export type FormattersListItem = Record<string, any>;
export type FormattersList<Item extends FormattersListItem> = Item[];
export type FormattersCapitalize<K extends string> = any;
export type FormattersColumns<T extends FormattersOptionsList> = (keyof T & string)[];
export type FormattersKey<K, A extends string = 'Format'> = any;
export type FormattersDataItem<T extends FormattersListItem, KT extends string[]> = any;
export type FormattersListFormat<T extends FormattersListItem, K extends string[]> = any;
export type FormattersListColumnItem<T extends FormattersListItem, O extends FormattersOptionsList> = any;
export type FormattersListColumns<T extends FormattersListItem, O extends FormattersOptionsList> = any;
export type FormattersListProp = FormattersList<FormattersListItem> | FormattersListItem;
export type FormattersItemProp<List extends FormattersListProp> = any;
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
    unit?: any;
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
    productGender = "product:gender"
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
export declare enum MetaOpenGraphAvailability {
    inStock = "in stock",
    outOfStock = "out of stock",
    preorder = "preorder",
    backorder = "backorder",
    discontinued = "discontinued",
    pending = "pending"
}
export declare enum MetaOpenGraphCondition {
    new = "new",
    used = "used",
    refurbished = "refurbished"
}
export declare enum MetaOpenGraphAge {
    newborn = "newborn",
    infant = "infant",
    toddler = "toddler",
    kids = "kids",
    adult = "adult"
}
export declare enum MetaOpenGraphGender {
    female = "female",
    male = "male",
    unisex = "unisex"
}
export declare enum MetaTwitterTag {
    card = "twitter:card",
    site = "twitter:site",
    creator = "twitter:creator",
    url = "twitter:url",
    title = "twitter:title",
    description = "twitter:description",
    image = "twitter:image",
    imageAlt = "twitter:image:alt",
    imageSrc = "twitter:image:src",
    imageWidth = "twitter:image:width",
    imageHeight = "twitter:image:height",
    label1 = "twitter:label1",
    data1 = "twitter:data1",
    label2 = "twitter:label2",
    data2 = "twitter:data2",
    appNameIphone = "twitter:app:name:iphone",
    appIdIphone = "twitter:app:id:iphone",
    appUrlIphone = "twitter:app:url:iphone",
    appNameIpad = "twitter:app:name:ipad",
    appIdIpad = "twitter:app:id:ipad",
    appUrlIpad = "twitter:app:url:ipad",
    appNameGooglePlay = "twitter:app:name:googleplay",
    appIdGooglePlay = "twitter:app:id:googleplay",
    appUrlGooglePlay = "twitter:app:url:googleplay",
    player = "twitter:player",
    playerWidth = "twitter:player:width",
    playerHeight = "twitter:player:height",
    playerStream = "twitter:player:stream",
    playerStreamContentType = "twitter:player:stream:content_type"
}
export declare enum MetaTwitterCard {
    summary = "summary",
    summaryLargeImage = "summary_large_image",
    app = "app",
    player = "player",
    product = "product",
    gallery = "gallery",
    photo = "photo",
    leadGeneration = "lead_generation",
    audio = "audio",
    poll = "poll"
}

// File: types/searchTypes.d.ts
export type SearchItem = Record<string, any>;
export type SearchColumnPath<K, P> = any;
export type SearchColumn<T extends SearchItem> = any;
export type SearchColumns<T extends SearchItem> = any;
export type SearchFormatCapitalize<K extends string> = any;
export type SearchFormatKey<K> = any;
export type SearchFormatItem<T extends SearchItem, KT extends string[]> = any;
export type SearchFormatList<T extends SearchItem, K extends string[]> = any;
export type SearchListValue<T extends SearchItem> = T[] | undefined;
export type SearchOptions = any;
export type SearchCacheItem<T extends SearchItem> = any;
export type SearchCache<T extends SearchItem> = SearchCacheItem<T>[];
export type HighlightMatchItem = any;

// File: types/translateTypes.d.ts
export type TranslateConfig = any;
export type TranslateCode = string | string[];
export type TranslateList<T extends TranslateCode[]> = any;
export type TranslateItemOrList<T extends TranslateCode> = any;
export type TranslateDataFileList = Record<string, string>;
export type TranslateDataFileItem = () => Promise<TranslateDataFileList>;
export type TranslateDataFile = Record<string, TranslateDataFileItem>;
export declare const TRANSLATE_GLOBAL_PREFIX = "global";
export declare const TRANSLATE_TIME_OUT = 160;