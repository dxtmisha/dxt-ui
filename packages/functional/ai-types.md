All these methods are in the @dxtmisha/functional library.

/** Base class for working with the constructor. */
export declare abstract class DesignAbstract<T extends Record<string, any>, C extends Record<string, any>> {
    protected readonly callback?: ((event: C) => void) | undefined;
    constructor(props: T, callback?: ((event: C) => void) | undefined, changed?: string[]);
    make(compelled?: boolean): this;
    protected is<K extends keyof T>(name: K): boolean;
    protected isChanged<K extends keyof C & string, KT extends keyof T & string>(name: K, nameProp?: KT | KT[]): boolean;
    makeCallback(compelled?: boolean): void;
    protected makeCallbackItem(): void;
    protected abstract initEvent(): void;
}
/**
export declare abstract class DesignAsyncAbstract<T extends Record<string, any>, C extends Record<string, any>> extends DesignAbstract<T, C> {
    make(compelled?: boolean): this;
    makeCallback(compelled?: boolean): Promise<void>;
    protected abstract initEvent(): Promise<void>;
}
export declare class DesignChanged<T extends Record<string, any>> {
    constructor(props: T, watch?: string[]);
    is(name: string | string[]): boolean;
    isChanged(): boolean;
    update(): void;
    protected isDifferent(name: string): boolean;
}
export declare class DesignComp<COMP extends ConstrComponent, P extends ConstrItem> extends DesignComponents<COMP, P> {}
export declare class DesignComponents<COMP extends ConstrComponent, P extends ConstrItem> {
    constructor(components?: COMP, modification?: ConstrComponentMod<P> | undefined);
    is<K extends keyof COMP>(name: K): name is K;
    get<K extends keyof COMP>(name: K): COMP[K];
    getModification<K extends keyof P>(index?: K & string | string, props?: P[K] | Record<string, any>): Record<string, any> | undefined;
    render<K extends keyof COMP, PK extends keyof P>(name: K & string, props?: P[PK] & ConstrItem | ConstrItem, children?: RawChildren | RawSlots, index?: PK & string | string): VNode[];
    renderOne<K extends keyof COMP, PK extends keyof P>(name: K & string, props?: P[PK] & ConstrItem | ConstrItem, children?: RawChildren | RawSlots, index?: PK & string | string): VNode | undefined;
    renderAdd<K extends keyof COMP, PK extends keyof P>(item: any[], name: K & string, props?: P[PK] & ConstrItem | ConstrItem, children?: RawChildren | RawSlots, index?: PK & string | string): this;
    protected computeModification<K extends keyof P>(index: K & string | string): Record<string, any>;
}
export declare abstract class DesignConstructorAbstract<E extends Element, COMP extends ConstrComponent, EMITS extends ConstrItem, EXPOSE extends ConstrItem, SLOTS extends ConstrItem, CLASSES extends ConstrClasses, P extends ConstrItem> {
    protected constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, EMITS, P> | undefined);
    protected init(): this;
    getName(): string;
    getDesign(): string;
    getSubClass(name: string | string[]): string;
    getStatusClass(name: string | string[]): string;
    getStyle(name: string | string[]): string;
    getAttrs(): ConstrItem;
    expose(): ConstrExpose<E, EXPOSE>;
    render(): () => VNode | (VNode | any)[] | undefined;
    protected abstract initExpose(): EXPOSE;
    protected abstract initClasses(): Partial<CLASSES>;
    protected abstract initStyles(): ConstrStyles;
    protected abstract initRender(): VNode | (VNode | any)[] | undefined;
    protected initSlot<K extends keyof SLOTS>(name: K, children?: any[], props?: ConstrItem): VNode | undefined;
    protected toClass(classes?: ConstrClass): ConstrClassObject;
    protected toClassName<T extends ConstrItem>(classes?: ConstrItem): T;
}
export declare class DatetimeRef {
    constructor(date: RefOrNormal<NumberOrStringOrDate>, type?: RefOrNormal<GeoDate>, code?: RefOrNormal<string>);
    getItem(): Ref<NumberOrStringOrDate>;
    getDate(): Ref<Date>;
    getDatetime(): Datetime;
    getHoursType(): ComputedRef<GeoHours>;
    getFirstDayCode(): ComputedRef<GeoFirstDay>;
    getYear(): ComputedRef<number>;
    getMonth(): ComputedRef<number>;
    getDay(): ComputedRef<number>;
    getHour(): ComputedRef<number>;
    getMinute(): ComputedRef<number>;
    getSecond(): ComputedRef<number>;
    getMaxDay(): ComputedRef<number>;
    locale(type?: GeoDate, styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions): ComputedRef<string>;
    standard(timeZone?: boolean): ComputedRef<string>;
    protected updateDate(): this;
}
export declare class EffectScopeGlobal {
    static run<T>(fn: () => T): T | undefined;
}
import { ElementOrString, ElementOrWindow, EventItem, EventListenerDetail, EventOptions } from '@dxtmisha/functional-basic';
/**
 * Class for working with events (Ref).
 *
 * Класс для работа с события (Ref).
 */
export declare class EventRef<E extends ElementOrWindow, O extends Event, D extends Record<string, any> = Record<string, any>> extends EventItem<E, O, D> {
    /**
     * Classes Constructor
     * @param elementSelector element/ элемент
     * @param elementSelectorControl control element/ элемент управления
     * @param type type/ тип
     * @param listener the object that receives a notification (an object that implements the
     * Event interface) when an event of the specified type occurs/ объект, который принимает
     * уведомление, когда событие указанного типа произошло
     * @param options object that specifies characteristics/ объект options
     * @param detail an event-dependent value associated with the event/ зависимое от события
     * значение, связанное с событием
     */
    constructor(elementSelector?: RefOrNormal<ElementOrString<E> | undefined>, elementSelectorControl?: RefOrNormal<ElementOrString<HTMLElement>>, type?: string | string[], listener?: EventListenerDetail<O, D>, options?: EventOptions, detail?: D);
}
export declare class GeoFlagRef {
    constructor(code?: RefOrNormal<string | undefined>);
    getCode(): string;
    get(code?: RefOrNormal<string>): ComputedRef<GeoFlagItem | undefined>;
    getLanguage(code?: RefOrNormal<string>): ComputedRef<GeoFlagItem | undefined>;
    getFlag(code?: RefOrNormal<string>): ComputedRef<string | undefined>;
    getList(codes?: RefOrNormal<string[] | undefined>): ComputedRef<GeoFlagItem[]>;
    getListLanguage(codes?: RefOrNormal<string[] | undefined>): ComputedRef<GeoFlagItem[]>;
    getNational(codes?: RefOrNormal<string[] | undefined>): ComputedRef<GeoFlagNational[]>;
    getNationalLanguage(codes?: RefOrNormal<string[] | undefined>): ComputedRef<GeoFlagNational[]>;
}
/**
 * Reactive class for managing the formatting of numbers and dates.
 * @remarks Avoid using this reactive class if reactive updates are not required. For non-reactive formatting, use the standard `GeoIntl` class from `@dxtmisha/functional-basic`.
 */
export declare class GeoIntlRef {
    constructor(code?: RefOrNormal<string>);
    display(value?: RefOrNormal<string>, typeOptions?: Intl.DisplayNamesOptions['type'] | Intl.DisplayNamesOptions): ComputedRef<string>;
    languageName(value?: RefOrNormal<string>, style?: Intl.RelativeTimeFormatStyle): ComputedRef<string>;
    countryName(value?: RefOrNormal<string>, style?: Intl.RelativeTimeFormatStyle): ComputedRef<string>;
    number(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    decimal(): ComputedRef<string>;
    currency(value: RefOrNormal<NumberOrString>, currencyOptions?: RefOrNormal<string | Intl.NumberFormatOptions>, numberOnly?: boolean): ComputedRef<string>;
    currencySymbol(currency: RefOrNormal<string>, currencyDisplay?: keyof Intl.NumberFormatOptionsCurrencyDisplayRegistry): ComputedRef<string>;
    unit(value: RefOrNormal<NumberOrString>, unitOptions?: string | Intl.NumberFormatOptions): ComputedRef<string>;
    sizeFile(value: RefOrNormal<NumberOrString>, unitOptions?: 'byte' | 'kilobyte' | 'megabyte' | 'gigabyte' | 'terabyte' | 'petabyte' | Intl.NumberFormatOptions): ComputedRef<string>;
    percent(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    percentBy100(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    plural(value: RefOrNormal<NumberOrString>, words: string, options?: Intl.PluralRulesOptions, optionsNumber?: Intl.NumberFormatOptions): ComputedRef<string>;
    date(value: RefOrNormal<NumberOrStringOrDate>, type?: GeoDate, styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions, hour24?: boolean): ComputedRef<string>;
    relative(value: RefOrNormal<NumberOrStringOrDate>, styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions, todayValue?: Date): ComputedRef<string>;
    relativeLimit(value: RefOrNormal<NumberOrStringOrDate>, limit: number, todayValue?: Date, relativeOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions, dateOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions, type?: GeoDate, hour24?: boolean): ComputedRef<string>;
    relativeByValue(value: RefOrNormal<NumberOrString>, unit: Intl.RelativeTimeFormatUnit, styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions): ComputedRef<string>;
    month(value?: RefOrNormal<NumberOrStringOrDate>, style?: Intl.DateTimeFormatOptions['month']): ComputedRef<string>;
    months(style?: Intl.DateTimeFormatOptions['month']): ComputedRef<ItemValue<number | undefined>[]>;
    weekday(value?: RefOrNormal<NumberOrStringOrDate>, style?: Intl.DateTimeFormatOptions['weekday']): ComputedRef<string>;
    weekdays(style?: Intl.DateTimeFormatOptions['weekday']): ComputedRef<ItemValue<number | undefined>[]>;
    time(value: RefOrNormal<NumberOrStringOrDate>): ComputedRef<string>;
    sort<T>(data: RefOrNormal<T[]>, compareFn?: (a: T, b: T) => [string, string]): ComputedRef<T[]>;
}
export declare class GeoRef {
    static get(): Ref<GeoItemFull>;
    static getCountry(): ComputedRef<string>;
    static getLanguage(): ComputedRef<string>;
    static getStandard(): ComputedRef<string>;
    static getFirstDay(): ComputedRef<string>;
    static getLocation(): ComputedRef<string>;
    static getLocationCountry(): ComputedRef<string>;
    static getLocationLanguage(): ComputedRef<string>;
    static set(code: string): void;
    static setValueDefault(code?: string | (() => string)): void;
}
export declare class GeoUnitRef {
    constructor(code?: RefOrNormal<string>);
    getLocation(): ComputedRef<string>;
    millimeter(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    centimeter(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    meter(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    kilometer(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    squareMeter(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    hectare(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    gram(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    kilogram(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    tonne(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    milliliter(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    liter(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    celsius(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    kilometerPerHour(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    format(value: RefOrNormal<NumberOrString>, unit: RefOrNormal<string>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
}
export declare class ListDataRef {
    constructor(list: RefOrNormal<ListListInput | undefined>, focus?: RefType<ListSelectedItem | undefined> | undefined, highlight?: RefType<string | undefined> | undefined, highlightLengthStart?: RefType<number | undefined> | undefined, filterMode?: RefType<boolean | undefined> | undefined, selected?: RefType<ListSelectedList | undefined> | undefined, keyValue?: RefType<string | undefined> | undefined, keyLabel?: RefType<string | undefined> | undefined, lite?: RefType<number | undefined> | undefined, min?: RefOrNormal<number | string | undefined>, max?: RefOrNormal<number | string | undefined>, parent?: string | undefined);
    readonly data: ComputedRef<ListList>;
    readonly liteData: ComputedRef<ListList>;
    readonly fullData: ComputedRef<ListDataFull>;
    readonly map: ComputedRef<ListList>;
    readonly mapItems: ComputedRef<ListList>;
    readonly items: ComputedRef<ListList>;
    readonly highlightFirstItem: ComputedRef<number>;
    readonly isSelected: ComputedRef<boolean>;
    readonly isSelectedMin: ComputedRef<boolean>;
    readonly isSelectedMax: ComputedRef<boolean>;
    readonly selectedList: ComputedRef<ListList>;
    readonly selectedListInGroup: ComputedRef<ListList>;
    readonly selectedNames: ComputedRef<ListNames>;
    readonly selectedValues: ComputedRef<any[]>;
    isLite(): boolean;
    isFocus(): boolean;
    isHighlight(): boolean;
    isHighlightActive(): boolean;
    getLength(): number;
    getLengthByMap(): number;
    getLengthByItems(): number;
    getFocus(): ListSelectedItem | undefined;
    getFocusItem(): ListDataItem | undefined;
    getHighlight(): string | undefined;
    getHighlightLengthStart(): number;
    getSelected(): ListSelectedList | undefined;
    getSelectedByStep(step: number): ListSelectedItem | undefined;
    getSelectedNext(): ListSelectedItem | undefined;
    getSelectedPrev(): ListSelectedItem | undefined;
    getItemByStep(item: ListDataItem, step: number): ListDataItem | undefined;
    getItemNext(item: ListDataItem): ListDataItem | undefined;
    getItemPrev(item: ListDataItem): ListDataItem | undefined;
    getIndexByStep(index: string, step: number): ListDataItem | undefined;
    getIndexNext(index: string): ListDataItem | undefined;
    getIndexPrev(index: string): ListDataItem | undefined;
    getItemByIndex(index?: string): {
        key: number;
        item: ListDataItem;
    } | undefined;
    getItemByKey(key: number): ListDataItem | undefined;
    getFirstItemByParent(parent: string | undefined): ListDataItem | undefined;
    getLastItemByParent(parent: string | undefined): ListDataItem | undefined;
    getSubList(item: ListDataItem): ListDataRef;
    protected isItem(item: ListDataItem): boolean;
    protected isInParent(parent: string | undefined, item: ListDataItem): boolean;
    protected getIndex(index: string | number | undefined, value: any, key: string | number | undefined, label: string | number | undefined): string | number | undefined;
    protected initItem(key: string | number, item: any): ListDataItem;
}
export declare class RouterItemRef {
    static get(): _RouterClassic;
    static getLink(name: string, params?: any, query?: any): string | undefined;
    static getHref(name?: string, params?: any, query?: any): ConstrHrefProps;
    static push(to: string | RouteLocationRaw): void;
    static set(router: Router): void;
    static setOneTime(router: Router): void;
    static rawToHref(to?: string | RouteLocationRaw): ConstrHrefProps;
}
export declare class ScrollbarWidthRef {
    readonly item: Ref<boolean | undefined, boolean | undefined>;
    readonly width: Ref<number, number>;
    constructor();
    readonly is: ComputedRef<boolean>;
}
/**
 * Asynchronous reactive composable for API requests with built-in SSR support.
 * Wraps `useApiRef` and immediately calls `initSsr()` to ensure data is pre-fetched on the server side.
 * Use this composable ONLY if you need the request to be executed on the server side during SSR.
 * For all other cases, use `useApiRef`.
 *
 * @example
 * ```typescript
 * import { Schema as S } from '@effect/schema'
 * import { useApiAsyncRef } from '@dxtmisha/functional'
 *
 * const userSchema = S.Struct({ id: S.Number, name: S.String })
 *
 * // Data will be pre-fetched on the server during SSR (onServerPrefetch)
 * const { data, loading, errorItem, isResponseContractValid } = useApiAsyncRef(
 *   '/users/1',
 *   { method: 'GET' },
 *   true, // reactivity
 *   undefined, // conditions
 *   undefined, // transformation
 *   (data) => { // validateResponseContract
 *     try {
 *       return { status: 'success', data: S.decodeUnknownSync(userSchema)(data) }
 *     } catch (e) {
 *       return { status: 'error', errors: e }
 *     }
 *   },
 *   [ // errorContract
 *     { status: 404, message: 'User not found' }
 *   ]
 * )
 * ```
 */
export declare function useApiAsyncRef<R, T = R>(path?: RefOrNormal<string | undefined>, options?: ApiOptions, reactivity?: boolean, conditions?: RefType<boolean>, transformation?: (data: T, isResponseContractValid?: ApiDataValidation) => ApiData<R>, validateResponseContract?: (data: T) => ApiDataValidation, errorContract?: ApiErrorStorageList, unmounted?: boolean, apiInstance?: ApiInstance): UseApiRef<R>;
export interface UseApiDeleteSetup<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>> extends Omit<UseApiRequestSetup<T, Request, Return>, 'method'> {
}
/**
 * Use API delete request.
 * This is a convenient wrapper over `useApiRequest` that pre-fills the DELETE method.
 */
export declare function useApiDelete<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>>(setup: UseApiDeleteSetup<T, Request, Return>): {
    loading: Ref<boolean, boolean>;
    send(request?: Request | undefined): Promise<Return | undefined>;
};
export interface UseApiGetSetup<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>> extends Omit<UseApiRequestSetup<T, Request, Return>, 'method'> {
}
/**
 * Use API get request.
 * This is a convenient wrapper over `useApiRequest` that pre-fills the GET method.
 */
export declare function useApiGet<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>>(setup: UseApiGetSetup<T, Request, Return>): {
    loading: Ref<boolean, boolean>;
    send(request?: Request | undefined): Promise<Return | undefined>;
};
import { ApiInstance, ArrayToItem, FormattersListColumns, FormattersOptionsList, SearchColumns, ApiDataValidation, SearchFormatList, ApiData, ApiErrorItem, ApiFetch } from '@dxtmisha/functional-basic';
import { ComputedRef, Ref } from 'vue';
/**
 * Asynchronous reactive composable for API management requests with built-in SSR support.
 * Wraps `useApiManagementRef` and immediately calls `initSsr()` to ensure data is pre-fetched on the server side.
 * Use this composable ONLY if you need the request to be executed on the server side during SSR.
 * For all other cases, use `useApiManagementRef`.
 *
 * Асинхронный реактивный composable для запросов управления API со встроенной поддержкой SSR.
 * Оборачивает `useApiManagementRef` и сразу вызывает `initSsr()`, чтобы гарантировать предзагрузку данных на сервере.
 * Используйте этот composable ТОЛЬКО если вам необходимо, чтобы запрос был выполнен на стороне сервера
 * во время SSR. Во всех остальных случаях используйте обычный `useApiManagementRef`.
 * @template Return type of data returned by the API / тип данных, возвращаемых API
 * @template FormattersOptions optional formatting rules / опциональные правила форматирования
 * @template Post data type for POST creation request / тип данных для POST-запроса создания
 * @template Put data type for PUT update request / тип данных для PUT-запроса обновления
 * @template Delete data type for DELETE removal request / тип данных для DELETE-запроса удаления
 * @template Type original data type (before transformation) / тип исходных данных (до трансформации)
 * @template Item type of a single item in the data list / тип одного элемента из списка данных
 * @template ItemFormatters item type after formatters are applied / тип элемента после применения форматировщиков
 * @template Columns search columns derived from formatting / колонки, по которым производится поиск
 *
 * @param propsGet main GET request settings (path, reactivity, skeleton, etc.) / настройки главного GET-запроса
 * @param formattersOptions optional reactive formatting rules / правила для реактивного форматирования данных
 * @param searchOptions optional client-side search settings / настройки для клиентского поиска по списку
 * @param postRequest optional POST mutation settings / настройки для POST-запроса создания
 * @param putRequest optional PUT mutation settings / настройки для PUT-запроса обновления
 * @param deleteRequest optional DELETE mutation settings / настройки для DELETE-запроса удаления
 * @param action common callback executed after any successful mutation / общий коллбэк после любой успешной мутации
 * @param apiInstance API instance for requests (defaults to Api.getItem()) / экземпляр API для выполнения запроса
 */
export declare function useApiManagementAsyncRef<Return extends ApiManagementValue, FormattersOptions extends FormattersOptionsList, Post extends Record<string, any>, Put extends Record<string, any>, Delete extends Record<string, any>, Type extends ApiManagementValue = Return, Item extends ArrayToItem<Return> = ArrayToItem<Return>, ItemFormatters extends FormattersListColumns<Item, FormattersOptions>[number] = FormattersListColumns<Item, FormattersOptions>[number], Columns extends SearchColumns<ItemFormatters> = []>(propsGet: ApiManagementGet<Return, Type>, formattersOptions?: FormattersOptions, searchOptions?: ApiManagementSearch<Item, Columns>, postRequest?: ApiManagementRequest<Post>, putRequest?: ApiManagementRequest<Put>, deleteRequest?: ApiManagementRequest<Delete>, action?: () => Promise<void> | void, apiInstance?: ApiInstance): {
    isValid: ComputedRef<boolean>;
    isResponseContractValid: ComputedRef<boolean>;
    responseValidationResult: ComputedRef< ApiDataValidation | undefined>;
    list: ComputedRef<SearchFormatList<ItemFormatters, Columns>>;
    readonly data: ComputedRef< ApiData<Return> | undefined>;
    errorItem: ComputedRef< ApiErrorItem | undefined>;
    readonly length: ComputedRef<number>;
    lengthData: ComputedRef<number>;
    starting: ComputedRef<boolean>;
    reading: Ref<boolean, boolean>;
    loading: Ref<boolean, boolean>;
    loadingSearch: Ref<boolean, boolean> | undefined;
    loadingPost: Ref<boolean, boolean> | undefined;
    loadingPut: Ref<boolean, boolean> | undefined;
    loadingDelete: Ref<boolean, boolean> | undefined;
    isSearch: ComputedRef<boolean> | undefined;
    search: Ref<string>;
    init: () => void;
    initSsr: () => void;
    reset: () => Promise<void>;
    abort: () => void;
    sendPost: (request?: ApiFetch["request"]) => Promise< ApiData<Post> | undefined>;
    sendPut: (request?: ApiFetch["request"]) => Promise< ApiData<Put> | undefined>;
    sendDelete: (request?: ApiFetch["request"]) => Promise< ApiData<Delete> | undefined>;
};
/**
 * A powerful composable for comprehensive API request orchestration.
 * It centrally manages data loading (GET), list formatting, client-side searching,
 * and mutations (POST, PUT, DELETE) through a single reactive interface.
 *
 * @template Return type of data returned by the API
 * @template FormattersOptions optional formatting rules
 * @template Post data type for POST creation request
 * @template Put data type for PUT update request
 * @template Delete data type for DELETE removal request
 * @template Type original data type (before transformation)
 * @template Item type of a single item in the data list
 * @template ItemFormatters item type after formatters are applied
 * @template Columns search columns derived from formatting
 *
 * @param propsGet main GET request settings (path, reactivity, skeleton, etc.)
 * @param formattersOptions optional reactive formatting rules
 * @param searchOptions optional client-side search settings
 * @param postRequest optional POST mutation settings
 * @param putRequest optional PUT mutation settings
 * @param deleteRequest optional DELETE mutation settings
 * @param action common callback executed after any successful mutation
 * @param apiInstance API instance for requests (defaults to Api.getItem())
 *
 * @returns reactive API management interface
 *
 * @note This hook is recommended to be used in tandem with `executeUse` for centralized state management.
 * By wrapping `useApiManagementRef` in `executeUseProvide` or `executeUseGlobal`, you can ensure
 * a single source of truth across the component tree or the entire application.
 *
 * @remarks
 * Data formatting guidelines for `formattersOptions`:
 * - **Recommended for formatting:** Numbers that represent values (prices, counts), dates, currency, units, and statuses.
 * - **Not recommended for formatting:** Technical identifiers such as ID, UUID, account numbers (if used for logic), types, or internal codes.
 *
 * @example
 * // 1. Comprehensive API orchestration
 * const products = useApiManagementRef(
 *   {
 *     path: '/api/v1/products',
 *     skeleton: () => Array(5).fill({ id: 0, name: 'Loading...', price: 0 })
 *   },
 *   {
 *     // Formatters for display
 *     price: (v) => `${v} USD`,
 *     created_at: (v) => new Date(v).toLocaleDateString()
 *   },
 *   {
 *     // Client-side search setup
 *     columns: ['name', 'category']
 *   },
 *   { path: '/api/v1/products' }, // POST (create)
 *   { path: (data) => `/api/v1/products/${data.id}` }, // PUT (update)
 *   { path: (data) => `/api/v1/products/${data.id}` }  // DELETE (remove)
 * );
 *
 * // Accessing data:
 * // products.list.value -> processed, formatted, and searched list
 * // products.sendPost({ name: 'New Product', price: 100 }) -> execute mutation
 */
export declare function useApiManagementRef<Return extends ApiManagementValue, FormattersOptions extends FormattersOptionsList, Post extends Record<string, any>, Put extends Record<string, any>, Delete extends Record<string, any>, Type extends ApiManagementValue = Return, Item extends ArrayToItem<Return> = ArrayToItem<Return>, ItemFormatters extends FormattersListColumns<Item, FormattersOptions>[number] = FormattersListColumns<Item, FormattersOptions>[number], Columns extends SearchColumns<ItemFormatters> = []>(propsGet: ApiManagementGet<Return, Type>, formattersOptions?: FormattersOptions, searchOptions?: ApiManagementSearch<Item, Columns>, postRequest?: ApiManagementRequest<Post>, putRequest?: ApiManagementRequest<Put>, deleteRequest?: ApiManagementRequest<Delete>, action?: () => Promise<void> | void, apiInstance?: ApiInstance): {
    isValid: ComputedRef<boolean>;
    isResponseContractValid: ComputedRef<boolean>;
    responseValidationResult: ComputedRef< ApiDataValidation | undefined>;
    list: ComputedRef<SearchFormatList<ItemFormatters, Columns>>;
    readonly data: ComputedRef<ApiData<Return> | undefined>;
    errorItem: ComputedRef< ApiErrorItem | undefined>;
    readonly length: ComputedRef<number>;
    lengthData: ComputedRef<number>;
    starting: ComputedRef<boolean>;
    reading: Ref<boolean, boolean>;
    loading: Ref<boolean, boolean>;
    loadingSearch: Ref<boolean, boolean> | undefined;
    loadingPost: Ref<boolean, boolean> | undefined;
    loadingPut: Ref<boolean, boolean> | undefined;
    loadingDelete: Ref<boolean, boolean> | undefined;
    isSearch: ComputedRef<boolean> | undefined;
    search: Ref<string>;
    init: () => void;
    initSsr: () => void;
    reset: () => Promise<void>;
    abort: () => void;
    sendPost: (request?: ApiFetch["request"]) => Promise<ApiData<Post> | undefined>;
    sendPut: (request?: ApiFetch["request"]) => Promise<ApiData<Put> | undefined>;
    sendDelete: (request?: ApiFetch["request"]) => Promise<ApiData<Delete> | undefined>;
};
export interface UseApiPostSetup<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>> extends Omit<UseApiRequestSetup<T, Request, Return>, 'method'> {
}
/**
 * Use API post request.
 * This is a convenient wrapper over `useApiRequest` that pre-fills the POST method.
 */
export declare function useApiPost<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>>(setup: UseApiPostSetup<T, Request, Return>): {
    loading: Ref<boolean, boolean>;
    send(request?: Request | undefined): Promise<Return | undefined>;
};
export interface UseApiPutSetup<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>> extends Omit<UseApiRequestSetup<T, Request, Return>, 'method'> {
}
/**
 * Use API put request.
 * This is a convenient wrapper over `useApiRequest` that pre-fills the PUT method.
 */
export declare function useApiPut<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>>(setup: UseApiPutSetup<T, Request, Return>): {
    loading: Ref<boolean, boolean>;
    send(request?: Request | undefined): Promise<Return | undefined>;
};
export interface UseApiRef<R> {
    data: ComputedRef<ApiData<R> | undefined>;
    item: Ref<ApiData<R> | undefined>;
    errorItem: ComputedRef<ApiErrorItem | undefined>;
    isResponseContractValid: ComputedRef<boolean>;
    responseValidationResult: ComputedRef<ApiDataValidation | undefined>;
    length: ComputedRef<number>;
    starting: ComputedRef<boolean>;
    loading: Ref<boolean>;
    reading: Ref<boolean>;
    isStarting(): boolean;
    isLoading(): boolean;
    isReading(): boolean;
    getItem(): ApiData<R> | undefined;
    init(): void;
    initSsr(): void;
    reset(): Promise<void>;
    stop(): void;
    abort(): void;
}
/**
 * Main reactive composable for working with API requests in Vue.
 * Automatically handles SSR, reactivity, caching, error storage, data validation, and transformation.
 *
 * @example
 * ```typescript
 * import { Schema as S } from '@effect/schema'
 * import { useApiRef } from '@dxtmisha/functional'
 *
 * // Define a schema using @effect/schema
 * const userSchema = S.Struct({ id: S.Number, name: S.String })
 *
 * const { data, loading, errorItem, isResponseContractValid } = useApiRef(
 *   '/users/1',
 *   { method: 'GET' },
 *   true, // reactivity
 *   undefined, // conditions
 *   (data) => ({ ...data, isTransformed: true }), // transformation
 *   (data) => { // validateResponseContract
 *     try {
 *       return { status: 'success', data: S.decodeUnknownSync(userSchema)(data) }
 *     } catch (e) {
 *       return { status: 'error', errors: e }
 *     }
 *   },
 *   [ // errorContract (ApiErrorStorageList)
 *     {
 *       status: 404,
 *       message: 'User not found'
 *     }
 *   ]
 * )
 * ```
 */
export declare function useApiRef<R, T = R>(path?: RefOrNormal<string | undefined>, options?: ApiOptions, reactivity?: boolean, conditions?: RefType<boolean>, transformation?: (data: T, isResponseContractValid?: ApiDataValidation) => ApiData<R>, validateResponseContract?: (data: T) => ApiDataValidation, errorContract?: ApiErrorStorageList, unmounted?: boolean, apiInstance?: ApiInstance): UseApiRef<R>;
/**
 * Defines global conditions for the API request.
 *
 * Определяет глобальные условия для API запроса.
 * @param conditions conditions for executing the request/ условия выполнения запроса
 */
export declare const setApiRefGlobalConditions: (conditions: RefType<any>) => void;
import { ApiInstance, ApiMethodItem, ApiData, ApiFetch, ApiErrorStorageList, ApiDataValidation } from '@dxtmisha/functional-basic';
import { Ref } from 'vue';
/**
 * Setup interface for API request.
 *
 * Интерфейс настроек для запроса API.
 */
export interface UseApiRequestSetup<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>> {
    /**
     * Path to the API endpoint. Can be a reactive Ref or a normal string.
     *
     * Путь к endpoint API. Может быть реактивным Ref или обычной строкой.
     */
    path?: RefOrNormal<string | undefined>;
    /**
     * HTTP method used for the request (e.g., GET, POST, PUT, DELETE). Defaults to POST.
     *
     * HTTP метод, используемый для запроса (например, GET, POST, PUT, DELETE). По умолчанию POST.
     */
    method?: ApiMethodItem;
    /**
     * Action/callback to perform after the request has successfully completed.
     * Can return a Promise for asynchronous operations.
     *
     * Действие/колбэк, выполняемое после успешного завершения запроса.
     * Может возвращать Promise для асинхронных операций.
     */
    action?: (data: Return | undefined) => Promise<void> | void;
    /**
     * Transformation function that modifies the raw response data before returning it.
     *
     * Функция трансформации, которая преобразует исходные данные ответа перед их возвратом.
     */
    transformation?: (data: T) => Return;
    /**
     * Function to validate the request payload contract. Used to ensure that the API
     * request payload matches the expected structure.
     *
     * Функция для проверки контракта данных запроса. Используется для гарантии того,
     * что отправляемая полезная нагрузка запроса API соответствует ожидаемой структуре.
     */
    validateRequestContract?: (data: Request) => ApiDataValidation & Return;
    /**
     * Function to validate response data contract. Used to ensure that the API
     * response matches the expected structure. Highly recommended to use with `@effect/schema`.
     * It should return `ApiDataValidation` containing a `status` ('success' or 'error')
     * and the parsed data or errors.
     *
     * Функция для проверки контракта данных ответа. Используется для гарантии того, что ответ API соответствует
     * ожидаемой структуре. Настоятельно рекомендуется использовать с `@effect/schema`. Должна возвращать объект
     * `ApiDataValidation`, содержащий `status` ('success' или 'error') и распарсенные данные или ошибки.
     */
    validateResponseContract?: (data: T) => ApiDataValidation & Return;
    /**
     * Array of expected error contracts for the request (`ApiErrorStorageList`).
     * Highly recommended to add if there is information about possible request errors. Allows you to predefine
     * possible errors (by code, status, or custom validation) which will be centrally processed by the application.
     *
     * Массив контрактов ожидаемых ошибок для запроса (`ApiErrorStorageList`). Желательно добавлять, если есть
     * информация о возможных ошибках запроса. Позволяет заранее описать возможные ошибки (по коду, статусу или
     * кастомной валидации) для централизованной обработки в приложении.
     */
    errorContract?: ApiErrorStorageList;
    /**
     * If true, extracts the nested 'data' field from the response object instead of returning the raw envelope.
     * Defaults to true.
     *
     * Если true, извлекает вложенное поле 'data' из объекта ответа вместо возврата исходного конверта.
     * По умолчанию true.
     */
    toData?: boolean;
    /**
     * Additional request options (headers, query params, etc.).
     *
     * Дополнительные опции запроса (заголовки, параметры запроса и т.д.).
     */
    options?: ApiOptions;
    /**
     * Custom Api instance to execute the request on. Defaults to global Api singleton instance.
     *
     * Кастомный экземпляр класса Api для выполнения запроса. По умолчанию используется глобальный синглтон Api.
     */
    apiInstance?: ApiInstance;
}
export declare function useApiRequest<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>>({ path, method, action, transformation, validateRequestContract, validateResponseContract, errorContract, toData, options, apiInstance }: UseApiRequestSetup<T, Request, Return>): {
    loading: Ref<boolean, boolean>;
    send(request?: Request): Promise<Return | undefined>;
};
type BroadcastValueItem<T> = T | string | undefined;
export declare function useBroadcastValueRef<T>(name: string, defaultValue?: T | string | (() => (T | string))): Ref<BroadcastValueItem<T>>;
export declare function useCookieRef<T>(name: string, defaultValue?: T | string | (() => (T | string)), options?: CookieOptions): Ref<T | string | undefined>;
/**
 * Composable for reactive formatting of data lists based on specified rules for each property.
 * @param list source data list (Ref or ComputedRef)
 * @param options formatting settings for each property
 */
export declare function useFormattersRef<Options extends FormattersOptionsList = FormattersOptionsList, List extends FormattersListProp = FormattersListProp>(list: RefType<List | undefined>, options: Options): {
    listFormat: ComputedRef<FormattersReturn<List, Options>>;
    length: ComputedRef<number>;
};
/**
 * Returns a class object for working with data formatting.
 *
 * @remarks
 * Avoid using this reactive composable if reactive updates are not required.
 * For non-reactive formatting, use the standard `GeoIntl` class from `@dxtmisha/functional-basic`.
 */
export declare function useGeoIntlRef(): GeoIntlRef;
export declare function useGeoUnitRef(): GeoUnitRef;
export declare function useHashRef<T>(name: string, defaultValue?: T | (() => T)): ShallowRef<T>;
export type LazyItemByMargin = {
    rootMargin: string;
    item: ReturnType<typeof useLazyRef>;
};
export declare const useLazyItemByMarginRef: (element: RefType<HTMLElement | undefined>, rootMargin?: string) => {
    lazyItemStatus: ShallowRef<boolean, boolean>;
    readonly lazyItem: LazyItem | undefined;
};
export type LazyItem = {
    status: ShallowRef<boolean>;
    ratio: ShallowRef<number>;
    entry: ShallowRef<IntersectionObserverEntry | undefined>;
    stopWatch: () => void;
};
export type LazyList = Record<string, LazyItem>;
export declare const useLazyRef: (options?: IntersectionObserverInit) => {
    intersectionObserver: IntersectionObserver | undefined;
    getItem(element?: HTMLElement): LazyItem | undefined;
    addLazyItem(element: Ref<HTMLElement | undefined>): ShallowRef<boolean, boolean>;
    removeLazyItem: (element?: HTMLElement) => void;
    disconnectLazy: () => void | undefined;
};
export declare function useLoadingRef(): ShallowRef<boolean, boolean>;
/**
 * Vue composable for reactive meta tags management with automatic DOM synchronization.
 * Uses singleton pattern - all components share the same meta state.
 */
export declare const useMeta: () => Readonly<{
    meta: Meta;
    title: Ref<string, string>;
    keyword: Ref<string, string>;
    description: Ref<string, string>;
    author: Ref<string, string>;
    image: Ref<string, string>;
    canonical: Ref<string, string>;
    robots: Ref<MetaRobots, MetaRobots>;
    siteName: Ref<string, string>;
    getHtmlMeta: () => string;
    sync: () => void;
    update: () => void;
    updateSsr: () => void;
    setTitle: (value: string) => void;
    setKeywords: (value: string) => void;
    setDescription: (value: string) => void;
    setAuthor: (value: string) => void;
    setImage: (value: string) => void;
    setCanonical: (value: string) => void;
    setRobots: (value: MetaRobots) => void;
    setSiteName: (value: string) => void;
    setSuffix: (suffix: string) => void;
} & {
    init(): Readonly<{
        meta: Meta;
        title: Ref<string, string>;
        keyword: Ref<string, string>;
        description: Ref<string, string>;
        author: Ref<string, string>;
        image: Ref<string, string>;
        canonical: Ref<string, string>;
        robots: Ref<MetaRobots, MetaRobots>;
        siteName: Ref<string, string>;
        getHtmlMeta: () => string;
        sync: () => void;
        update: () => void;
        updateSsr: () => void;
        setTitle: (value: string) => void;
        setKeywords: (value: string) => void;
        setDescription: (value: string) => void;
        setAuthor: (value: string) => void;
        setImage: (value: string) => void;
        setCanonical: (value: string) => void;
        setRobots: (value: MetaRobots) => void;
        setSiteName: (value: string) => void;
        setSuffix: (suffix: string) => void;
    }>;
    destroyExecute?(): void;
}>;
export declare function useQueryRef<T>(name: string, defaultValue?: T | (() => T)): ShallowRef<T>;
export declare const useRouterList: <T extends ListDataBasic>(list: RefType<ConstrBind<T>[] | undefined>, selected?: Ref<string> | string, hasTo?: boolean) => {
    item: ComputedRef<T | undefined>;
    selected: Ref<string, string>;
    label: ComputedRef<NumberOrString>;
    list: ComputedRef<ConstrBind<T>[]>;
    to: (name?: string) => void;
    toMain(): void;
};
/**
 * Composable for handling search logic with reactive data.
 * @param list list of items to search
 * @param columns columns to search in
 * @param value reactive search string
 * @param options search options
 */
export declare function useSearchRef<T extends SearchItem, K extends SearchColumns<T>>(list: SearchListInput<T>, columns?: SearchColumnsInput<T, K>, value?: Ref<string>, options?: SearchOptions): {
    isSearch: ComputedRef<boolean>;
    search: Ref<string, string>;
    loading: Ref<boolean, boolean>;
    listSearch: ComputedRef<SearchFormatList<T, K>>;
    length: ComputedRef<number>;
};
/**
 * Composable for managing search value state and handling delays.
 * @param item search list instance
 * @param value reactive search string (optional)
 */
export declare function useSearchValueRef<T extends SearchItem, K extends SearchColumns<T>>(item: SearchList<T, K>, value?: Ref<string>): {
    search: Ref<string, string>;
    searchDelay: Ref<string, string>;
    loading: Ref<boolean, boolean>;
};
export declare function useSessionRef<T>(name: string, defaultValue?: T | (() => T)): Ref<T | undefined>;
export declare function useStorageRef<T>(name: string, defaultValue?: T | (() => T), cache?: number): Ref<T | undefined>;
import { ShallowRef } from 'vue';
import { TranslateInstance, TranslateList } from '@dxtmisha/functional-basic';
/**
 * Getting the translated text by an array of keys or a string with a key.
 *
 * It returns a `ShallowRef` that automatically updates when the global language changes.
 * Use `as const` for arrays to ensure proper TypeScript key inference.
 *
 * ### Examples
 * ```typescript
 * // 1. Using the main composable
 * const translations = useTranslateRef(['home.title', 'home.description'] as const);
 *
 * // 2. Using the shorthand 't'
 * const labels = t(['button.save', 'button.cancel'] as const);
 * ```
 *
 * @param names a string or an array with keys
 * @param translateInstance a translate instance
 */
export declare function useTranslateRef<T extends (string | string[])[]>(names: T, translateInstance?: TranslateInstance): ShallowRef<TranslateList<T>>;
/**
 * Shorthand for useTranslateRef.
 * Use `as const` for arrays to ensure proper TypeScript key inference.
 *
 * @param names a string or an array with keys
 */
export declare const t: <T extends string[]>(names: T) => ShallowRef<TranslateList<T>>;
export declare const uiMakeFlags: () => void;
export * from '@dxtmisha/functional-basic';
import { ComputedRef, DebuggerOptions } from 'vue';
/**
 * Creates a computed property that can handle asynchronous getters.
 * @param getter Asynchronous function, synchronous function, or direct value to compute the result
 * @param initialState initial value of result
 * @param ignore values to be ignored
 * @param debugOptions Used for debugging reactive computations. Supported by Vue.js library
 */
export declare function computedAsync<R>(getter: (() => Promise<R>) | (() => R) | R, initialState?: (() => R) | R, ignore?: R, debugOptions?: DebuggerOptions): ComputedRef<R | undefined>;
import { ComputedGetter } from 'vue';
/**
 * Provides a `computed` reactive property whose value changes based on the current language or other conditions.
 * @param getter A function that provides the main value depending on the current language or other factors.
 * @param getterNone An alternative value returned if conditions are not met or the main getter returns undefined.
 * @param conditions A condition determining when the main getter/**
 * Types of initialization for a singleton
 */
export declare enum ExecuteUseType {
    global = "global",
    provide = "provide",
    local = "local"
}
/**
 * The object returned by the factory function
 */
export type ExecuteUseReturn<R> = Readonly<R & {
    init(): Readonly<R>;
    destroyExecute?(): void;
}>;
/**
 * Creates a managed singleton that encapsulates initialization logic and access mode.
 *
 * It supports three initialization strategies:
 * - `global`: A single instance for the entire application.
 * - `provide`: Shared via provide/inject in the component tree (standard for Vue 3).
 * - `local`: A single instance within the closure of the returned function.
 *
 * @template R return type of the factory function
 * @template O argument types for the factory function
 * @template RI instance type with management methods
 * @param callback initialization function
 * @param type initialization strategy (defaults to provide)
 * @returns accessor function for the singleton
 *
 * @remarks
 * Use this function in the following cases:
 * - **API Services:** Always wrap API clients to ensure a single connection point and unified state.
 * - **Resource Optimization:** For functions where creating multiple instances is undesirable (e.g., heavy objects, event buses).
 * - **Shared State:** To share reactive state within a component tree using the `provide` strategy.
 * - **External SDKs:** Initializing third-party libraries (analytics, maps, charts) that should be singletons.
 *
 * @example
 * // 1. Global API singleton (useApiGet)
 * export const useUserApi = executeUseGlobal(() => {
 *   return useApiGet('/api/user');
 * });
 *
 * @example
 * // 2. Shared Reactive State
 * export const useFeatureState = executeUseProvide(() => {
 *   const items = [];
 *   const addItem = (item) => items.push(item);
 *   return { items, addItem };
 * });
 *
 * @example
 * // 3. Local Caching
 * export const useHeavyResource = executeUseLocal((config) => {
 *   return new HeavyResource(config);
 * });
 *
 * @example
 * // 4. Complex API Service (useApiManagementRef)
 * export const useUserManagement = executeUseGlobal(() => {
 *   return useApiManagementRef(
 *     { path: '/api/users' },                 // GET setup
 *     { date: (v) => new Date(v).toLocaleString() }, // Formatters
 *     { columns: ['name', 'email'] },         // Search
 *     { path: '/api/users' },                 // POST (create)
 *     { path: (o) => `/api/users/${o.id}` },  // PUT (update)
 *     { path: (o) => `/api/users/${o.id}` }   // DELETE (remove)
 *   );
 * });
 *
 * // Usage in component:
 * // const { list, loading, sendPost, sendDelete } = useUserManagement();
 */
export declare function executeUse<R, O extends any[], RI extends ExecuteUseReturn<R> = ExecuteUseReturn<R>>(callback: (...args: O) => R, type?: ExecuteUseType): ((...args: O) => RI) | (() => RI);
/**
 * Creates a global singleton.
 *
 * @remarks
 * See {@link executeUse} for more details.
 *
 * @param callback Initialization function
 */
export declare function executeUseGlobal<R>(callback: () => R): (() => Readonly<R & {
    init(): Readonly<R>;
    destroyExecute?(): void;
}>) | (() => Readonly<R & {
    init(): Readonly<R>;
    destroyExecute?(): void;
}>);
/**
 * Creates a component-scoped singleton.
 *
 * @remarks
 * Best for sharing state within a component sub-tree.
 * See {@link executeUse} for more details.
 *
 * @param callback Initialization function
 */
export declare function executeUseProvide<R, O extends any[]>(callback: (...args: O) => R): ((...args: O) => Readonly<R & {
    init(): Readonly<R>;
    destroyExecute?(): void;
}>) | (() => Readonly<R & {
    init(): Readonly<R>;
    destroyExecute?(): void;
}>);
/**
 * Creates a local singleton.
 *
 * @remarks
 * Best for internal state preservation within a closure.
 * See {@link executeUse} for more details.
 *
 * @param callback Initialization function
 */
export declare function executeUseLocal<R, O extends any[]>(callback: (...args: O) => R): ((...args: O) => Readonly<R & {
    init(): Readonly<R>;
    destroyExecute?(): void;
}>) | (() => Readonly<R & {
    init(): Readonly<R>;
    destroyExecute?(): void;
}>);itialization function/ Функция инициализации
 */
export declare function executeUseGlobal<R>(callback: () => R): (() => Readonly<R & {
    /**
     * Returns the raw instance without management methods/
     * Возвращает чистый экземпляр без методов управления
     */
    init(): Readonly<R>;
    /**
     * Resets the cached instance (available for local and global)/
     * Сбрасывает закешированный экземпляр (доступно для local и global)
     */
    destroyExecute?(): void;
}>) | (() => Readonly<R & {
    /**
     * Returns the raw instance without management methods/
     * Возвращает чистый экземпляр без методов управления
     */
    init(): Readonly<R>;
    /**
     * Resets the cached instance (available for local and global)/
     * Сбрасывает закешированный экземпляр (доступно для local и global)
     */
    destroyExecute?(): void;
}>);
/**
 * Creates a component-scoped singleton.
 *
 * Создает компонентный синглтон.
 *
 * @remarks
 * Best for sharing state within a component sub-tree.
 * See {@link executeUse} for more details.
 *
 * Лучше всего подходит для совместного использования состояния внутри поддерева компонентов.
 * Подробнее см. {@link executeUse}.
 *
 * @param callback Initialization function/ Функция инициализации
 */
export declare function executeUseProvide<R, O extends any[]>(callback: (...args: O) => R): ((...args: O) => Readonly<R & {
    /**
     * Returns the raw instance without management methods/
     * Возвращает чистый экземпляр без методов управления
     */
    init(): Readonly<R>;
    /**
     * Resets the cached instance (available for local and global)/
     * Сбрасывает закешированный экземпляр (доступно для local и global)
     */
    destroyExecute?(): void;
}>) | (() => Readonly<R & {
    /**
     * Returns the raw instance without management methods/
     * Возвращает чистый экземпляр без методов управления
     */
    init(): Readonly<R>;
    /**
     * Resets the cached instance (available for local and global)/
     * Сбрасывает закешированный экземпляр (доступно для local и global)
     */
    destroyExecute?(): void;
}>);
/**
 * Creates a local singleton.
 *
 * Создает локальный синглтон.
 *
 * @remarks
 * Best for internal state preservation within a closure.
 * See {@link executeUse} for more details.
 *
 * Лучше всего подходит для сохранения внутреннего состояния внутри замыкания.
 * Подробнее см. {@link executeUse}.
 *
 * @param callback Initialization function/ Функция инициализации
 */
export declare function executeUseLocal<R, O extends any[]>(callback: (...args: O) => R): ((...args: O) => Readonly<R & {
    /**
     * Returns the raw instance without management methods/
     * Возвращает чистый экземпляр без методов управления
     */
    init(): Readonly<R>;
    /**
     * Resets the cached instance (available for local and global)/
     * Сбрасывает закешированный экземпляр (доступно для local и global)
     */
    destroyExecute?(): void;
}>) | (() => Readonly<R & {
    /**
     * Returns the raw instance without management methods/
     * Возвращает чистый экземпляр без методов управления
     */
    init(): Readonly<R>;
    /**
     * Resets the cached instance (available for local and global)/
     * Сбрасывает закешированный экземпляр (доступно для local и global)
     */
    destroyExecute?(): void;
}>);
export declare function executeUseGlobalInit(): void;
export declare function getInject<T>(name: string): T | undefined;
export declare const getOptions: (options?: ApiOptions) => RefOrNormal<ApiFetch>;
/**
 * Executes a function if the provided argument is a function, and unwraps the resulting Vue Ref if it is reactive.
 * If the argument is a Vue Ref or a primitive value, it unwraps or returns it directly.
 * @param data reactive reference, plain value, or a function returning them
 * @returns the resolved and unwrapped value
 */
export declare function executeFunctionRef<T>(data: RefOrNormalOrFunction<T>): T;
export declare function getApiErrorRef<R>(data: RefType<ApiData<R> | undefined>): ComputedRef<ApiErrorItem | undefined>;
export declare function getBindRef<T, R extends ItemList>(value: RefOrNormal<T | R> | undefined, nameExtra?: RefOrNormal<ItemList> | string, name?: string): ComputedRef<R>;
export declare function getRef<T>(item: RefOrNormal<T>): T;
export declare function render<T extends ItemList>(name: string | any, props?: T, children?: RawChildren | RawSlots, index?: string): VNode;
export declare function setRef<T>(item: Ref<T>, value: T): void;
export declare function toRefItem<T>(item: RefOrNormal<T>): Ref<T>;
export declare function getBind<T, R extends ItemList>(value: T | R | undefined | null, nameExtra?: ItemList | string, name?: string, except?: boolean): ConstrBind<R>;
export declare function getClassName<T extends ItemList>(props?: T): string | undefined;
/**
 * Returns or generates a new element.
 *
 * Возвращает или генерирует новый элемент.
 * @param name name of the component/ названия компонента
 * @param props property of the component/ свойство компонента
 * @param index the name of the key/ названия ключа
 */
export declare function getIndexForRender<T extends ItemList>(name: string | any, props?: T, index?: string): string | undefined;
import { ItemList } from '@dxtmisha/functional-basic';
/**
 * Merges two objects with properties, taking into account their classes and styles
 *
 * Объединяет два объекта со свойствами с учётом классов и стилей в них
 * @param extra additional property/ дополнительное свойство
 * @param value input value/ входное значение
 */
export declare function toBind<R extends ItemList = ItemList>(extra: ItemList, value: ItemList): ConstrBind<R>;
import { ItemList } from '@dxtmisha/functional-basic';
/**
 * Merges multiple objects with properties, taking into account their classes and styles
 *
 * Объединяет несколько объектов со свойствами с учётом классов и стилей в них
 * @param values list of input values/ список входных значений
 */
export declare function toBinds<R extends ItemList = ItemList>(...values: (ItemList | undefined)[]): ConstrBind<R>;
import { ApiData, ApiDataValidation, ApiDefaultValue, ApiErrorStorageList, ApiFetch, ApiMethodItem, SearchColumns, SearchItem, SearchOptions } from '@dxtmisha/functional-basic';
import { Ref } from 'vue';
/** Options for api requests/ Опции для запросов api */
export type ApiOptions = ApiMethodItem | RefOrNormal<ApiFetch>;
/**
 * Base type for API management values, either a single value or an array.
 *
 * Базовый тип для значений управления API: одиночное значение или массив.
 */
export type ApiManagementValue = ApiDefaultValue | ApiDefaultValue[];
/**
 * Configuration for the main GET request in API management.
 */
export type ApiManagementGet<Return extends ApiManagementValue, Type extends ApiManagementValue = Return> = {
    /** API endpoint path */
    path?: RefOrNormal<string | undefined>;
    /** Additional request options */
    options?: ApiOptions;
    /** Enable reactive updates when path or options change */
    reactivity?: boolean;
    /** Condition to trigger the request */
    conditions?: RefType<boolean>;
    /** Custom transformation for the fetched data */
    transformation?: (data: Type, isResponseContractValid?: ApiDataValidation) => ApiData<Return>;
    /** Function to validate response data contract */
    validateResponseContract?: (data: Type) => ApiDataValidation;
    /** Storage of response error contracts */
    errorContract?: ApiErrorStorageList;
    /** Validation function or class constructor for data */
    typeData?: ((data: Return) => boolean) | any;
    /** Whether to clear data when the component is unmounted */
    unmounted?: boolean;
    /** Function to provide skeleton data during loading */
    skeleton?: () => Return;
};
/**
 * Configuration for client-side search across API data.
 */
export type ApiManagementSearch<T extends SearchItem, K extends SearchColumns<T>> = {
    /** List of columns to search through */
    columns: K;
    /** Reactive search query */
    value?: Ref<string>;
    /** Additional search algorithm options */
    options?: SearchOptions;
};
/**
 * Configuration for mutation requests (POST, PUT, DELETE).
 */
export type ApiManagementRequest<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>> = {
    /** Target API endpoint path */
    path?: RefOrNormal<string | undefined>;
    /** Action to perform after a successful request */
    action?: (data: Return | undefined) => Promise<void> | void;
    /** Transformation before sending data */
    transformation?: (data: T) => Return;
    /** Request contract validation function */
    validateRequestContract?: (data: Request) => ApiDataValidation & Return;
    /** Response contract validation function */
    validateResponseContract?: (data: T) => ApiDataValidation & Return;
    /** Storage of response error contracts */
    errorContract?: ApiErrorStorageList;
    /** Whether to wrap the payload in a 'data' property */
    toData?: boolean;
    /** Additional mutation request options */
    options?: ApiOptions;
};
import { Ref, PropType, ComputedRef } from 'vue';
import { Undefined } from '@dxtmisha/functional-basic';
/** Generic record type for constructor items */
export type ConstrItem = Record<string, any>;
/** Constructor value wrapper with optional value property */
export type ConstrValue<T = any> = {
    /** Optional value of type T */
    value?: T;
};
/** Generic record type for constructor components */
export type ConstrComponent = Record<string, any>;
/** Constructor component modification type with reactive or normal values */
export type ConstrComponentMod<P extends ConstrItem> = ConstrItem | {
    [K in keyof P]?: RefOrNormal<P[K]>;
};
export type ConstrExpose<E extends Element, EXPOSE extends ConstrItem> = EXPOSE & {
    elementHtml?: ComputedRef<E | undefined>;
};
/** Utility type to convert union types to intersection types */
export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
/** Extract emit item type from constructor item */
export type ConstrEmitItem<T extends ConstrItem> = T[keyof T];
/** Constructor emit type with proper event handler signatures */
export type ConstrEmit<T extends ConstrItem = ConstrItem> = UnionToIntersection<ConstrEmitItem<{
    [K in keyof T]: (evt: K, ...args: T[K]) => void;
}>>;
/** Object type for CSS class names with boolean values */
export type ConstrClassObject = Record<string, boolean | undefined>;
/** Constructor class type supporting strings, arrays, and objects */
export type ConstrClass = string | (string | ConstrClass | Undefined)[] | ConstrClassObject;
/** Record type for mapping class names to class definitions */
export type ConstrClassList = Record<string, ConstrClass>;
/** Constructor classes with required main class and additional class list */
export type ConstrClasses = {
    main: ConstrClass;
} & ConstrClassList;
/** Constructor style item type for individual style properties */
export type ConstrStylesItem = string | null;
/** Constructor styles type supporting objects and arrays of style definitions */
export type ConstrStyles = Record<string, ConstrStylesItem> | ConstrStyles[];
/** Constructor options interface for component configuration */
export type ConstrOptions<COMP extends ConstrComponent, EMITS extends ConstrItem, P extends ConstrItem> = {
    /** Optional components configuration */
    components?: COMP;
    /** Optional component modifications */
    compMod?: ConstrComponentMod<P>;
    /** Optional emit handlers */
    emits?: ConstrEmit<EMITS>;
    /** Optional reactive classes */
    classes?: RefType<ConstrClasses>;
    /** Optional reactive styles */
    styles?: RefType<ConstrStyles>;
};
/** Constructor setup interface for component initialization */
export type ConstrSetup<E extends Element, CLASSES extends ConstrClasses, SETUP extends ConstrItem> = {
    /** Component name */
    name: string;
    /** Reactive element reference */
    element: Ref<E | undefined>;
    /** Reactive classes */
    classes: RefType<CLASSES>;
    /** Reactive styles */
    styles: RefType<ConstrStyles>;
} & SETUP;
/** Constructor registration configuration */
export type ConstrRegistration = {
    /** Optional flag for registration */
    flag?: boolean;
    /** Optional translation map */
    translate?: Record<string, string>;
};
/** Constructor bind type for component binding with class and style support */
export type ConstrBind<T> = T & Record<string, any> & {
    /** Optional key */
    key?: string;
    /** Optional CSS classes */
    class?: ConstrClass;
    /** Optional styles */
    style?: ConstrStyles;
};
/** Constructor prop item options for Vue prop definitions */
export type ConstrPropItemOptions<T = any> = {
    /** Vue prop type */
    type?: PropType<T>;
    /** Required flag */
    required?: boolean;
    /** Default value */
    default?: any;
    /** Custom validator function */
    validator?(value: any, props: any): boolean;
};
/** Constructor prop item type with options or direct PropType */
export type ConstrPropItem<T = any> = ConstrPropItemOptions<T> | PropType<T>;
/** Constructor props type for component prop definitions */
export type ConstrProps<P = Record<string, any>> = {
    [K in keyof P]: ConstrPropItem<P[K]>;
};
/** Props for link handling */
export type ConstrHrefProps = {
    /** Hyperlink reference */
    href?: string;
};
/** Type of list item */
export type ListType = 'item' | 'space' | 'line' | 'subtitle' | 'html' | 'menu' | 'menu-group' | 'group';
/** Basic data structure for list item */
export type ListDataBasic = {
    /** Optional display label */
    label?: NumberOrString;
    /** Any value associated with the item */
    value?: any;
    /** Search text for filtering */
    search?: string;
};
/** Extended list item with type and index */
export type ListDataItem<Item extends ListDataBasic = ListDataBasic> = ConstrBind<Item & {
    /** Parent item identifier */
    parent?: string;
    /** Type of list item */
    type: ListType;
    /** Unique item identifier */
    index: string;
    /** Whether the item is disabled */
    disabled?: boolean;
}>;
/** Array of list data items */
export type ListList<Item extends ListDataBasic = ListDataBasic> = ListDataItem<Item>[];
/** List or record structure for list data */
export type ListRecord<Item extends ListDataBasic = ListDataBasic> = Item[] | Record<string, Item>;
/** Extended list item with additional state properties */
export type ListDataFullItem<Item extends ListDataBasic = ListDataBasic> = ListDataItem<Item> & {
    /** Whether the item has focus */
    focus: boolean;
    /** Highlighted text portion */
    highlight?: string;
    /** Whether the item is selected */
    selected: boolean;
    /** Whether the item is disabled */
    disabled?: boolean;
};
/** Array of extended list items with state */
export type ListDataFull<Item extends ListDataBasic = ListDataBasic> = ListDataFullItem<Item>[];
/** Input item for list creation */
export type ListListInputItem<Item extends ListDataBasic = ListDataBasic> = ConstrBind<Item>;
/** Various input formats for list creation */
export type ListListInput<Item extends ListDataBasic = ListDataBasic> = ListListInputItem<Item>[] | string[] | Record<string, ListListInputItem<Item>> | Record<string, string>;
/** Single selected item identifier */
export type ListSelectedItem = NumberOrStringOrBoolean;
/** Single or multiple selected items */
export type ListSelectedList = ListSelectedItem | ListSelectedItem[];
/** Name of selected list item */
export type ListName = string | number | undefined;
/** Array of list item names */
export type ListNames = ListName[];
/** Union type for Vue reactive references (computed or ref) */
export type RefType<T> = ComputedRef<T> | Ref<T>;
/** Union type for Vue reactive references that can be undefined */
export type RefUndefined<T> = RefType<T | undefined>;
/** Union type that can be either a Vue reactive reference or a normal value */
export type RefOrNormal<T> = RefType<T> | T;
/** Union type that can be either a Vue reactive reference or a normal value or a function that returns a Vue reactive reference or a normal value */
export type RefOrNormalOrFunction<T> = RefOrNormal<T> | (() => RefOrNormal<T>);
/** Union type for Vue raw children content (strings, numbers, booleans, VNodes, arrays, functions) */
export type RawChildren = string | number | boolean | VNode | VNodeArrayChildren | (() => any);
/** Type for Vue raw slots with optional stability flag */
export type RawSlots = {
    /** Slot name mapping to unknown content */
    [name: string]: unknown;
    /** Optional stability flag for performance optimization */
    $stable?: boolean;
};
/** Search list data */
export type SearchListValueRef<T extends SearchItem> = RefOrNormal<SearchListValue<T>>;
/** Search list input */
export type SearchListInput<T extends SearchItem> = SearchListValueRef<T> | (() => SearchListValueRef<T>);
/** Search columns ref */
export type SearchColumnsRef<T extends SearchItem, K extends SearchColumns<T>> = RefOrNormal<K>;
/** Search columns input */
export type SearchColumnsInput<T extends SearchItem, K extends SearchColumns<T>> = SearchColumnsRef<T, K> | (() => SearchColumnsRef<T, K>);