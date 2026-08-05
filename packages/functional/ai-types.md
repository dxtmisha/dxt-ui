All these methods are in the @dxtmisha/functional library.

import { ComputedRef, Ref, ShallowRef, ToRefs, VNode, VNodeArrayChildren, ComputedGetter, DebuggerOptions, Plugin, PropType } from 'vue';
import { Datetime, GeoDate, GeoFirstDay, GeoHours, NumberOrStringOrDate, ElementOrString, ElementOrWindow, EventItem, EventListenerDetail, EventOptions, GeoFlag, GeoFlagItem, GeoFlagNational, ItemValue, NumberOrString, GeoItemFull, GeoUnit, ApiInstance, ApiData, ApiDataValidation, ApiErrorStorageList, ApiErrorItem, ApiFetch, FormattersListColumns, FormattersOptionsList, SearchColumns, SearchFormatList, FormattersListProp, FormattersReturn, MetaRobots, Meta, SearchItem, SearchOptions, TranslateInstance, TranslateList, ApiConfig, ErrorCenterCauseList, ErrorCenterHandlerCallback, ErrorCenterHandlerList, IconsConfig, TranslateConfig, ItemList, ApiDefaultValue, ApiMethodItem, Undefined, NumberOrStringOrBoolean, SearchListValue } from '@dxtmisha/functional-basic';
import { InputSocialIcons } from '@dxtmisha/media';
import { RouteLocationRaw, Router, _RouterClassic } from 'vue-router';
export type RefType<T> = ComputedRef<T> | Ref<T>;
export type RefUndefined<T> = RefType<T | undefined>;
export type RefOrNormal<T> = RefType<T> | T;
export type RefOrNormalOrFunction<T> = RefOrNormal<T> | (() => RefOrNormal<T>);
export type RawChildren = string | number | boolean | VNode | VNodeArrayChildren | (() => any);
export type RawSlots = {
    [name: string]: unknown;
    $stable?: boolean;
};
export type ApiOptions = ApiMethodItem | RefOrNormal<ApiFetch>;
export type ApiManagementValue = ApiDefaultValue | ApiDefaultValue[];
export type ApiManagementGet<Return extends ApiManagementValue, Type extends ApiManagementValue = Return> = {
    path?: RefOrNormal<string | undefined>;
    options?: ApiOptions;
    reactivity?: boolean;
    conditions?: RefType<boolean>;
    transformation?: (data: Type, isResponseContractValid?: ApiDataValidation) => ApiData<Return>;
    validateResponseContract?: (data: Type) => ApiDataValidation;
    errorContract?: ApiErrorStorageList;
    typeData?: ((data: Return) => boolean) | any;
    unmounted?: boolean;
    skeleton?: () => Return;
};
export type ApiManagementSearch<T extends SearchItem, K extends SearchColumns<T>> = {
    columns: K;
    value?: Ref<string>;
    options?: SearchOptions;
};
export type ApiManagementRequest<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>> = {
    path?: RefOrNormal<string | undefined>;
    action?: (data: Return | undefined) => Promise<void> | void;
    transformation?: (data: T) => Return;
    validateRequestContract?: (data: Request) => ApiDataValidation & Return;
    validateResponseContract?: (data: T) => ApiDataValidation & Return;
    errorContract?: ApiErrorStorageList;
    toData?: boolean;
    options?: ApiOptions;
};
export type ConstrItem = Record<string, any>;
export type ConstrValue<T = any> = {
    value?: T;
};
export type ConstrComponent = Record<string, any>;
export type ConstrComponentMod<P extends ConstrItem> = ConstrItem | {
    [K in keyof P]?: RefOrNormal<P[K]>;
};
export type ConstrExpose<E extends Element, EXPOSE extends ConstrItem> = EXPOSE & {
    elementHtml?: ComputedRef<E | undefined>;
};
export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type ConstrEmitItem<T extends ConstrItem> = T[keyof T];
export type ConstrEmit<T extends ConstrItem = ConstrItem> = UnionToIntersection<ConstrEmitItem<{
    [K in keyof T]: (evt: K, ...args: T[K]) => void;
}>>;
export type ConstrClassObject = Record<string, boolean | undefined>;
export type ConstrClass = string | (string | ConstrClass | Undefined)[] | ConstrClassObject;
export type ConstrClassList = Record<string, ConstrClass>;
export type ConstrClasses = {
    main: ConstrClass;
} & ConstrClassList;
export type ConstrStylesItem = string | null;
export type ConstrStyles = Record<string, ConstrStylesItem> | ConstrStyles[];
export type ConstrOptions<COMP extends ConstrComponent, EMITS extends ConstrItem, P extends ConstrItem> = {
    components?: COMP;
    compMod?: ConstrComponentMod<P>;
    emits?: ConstrEmit<EMITS>;
    classes?: RefType<ConstrClasses>;
    styles?: RefType<ConstrStyles>;
};
export type ConstrSetup<E extends Element, CLASSES extends ConstrClasses, SETUP extends ConstrItem> = {
    name: string;
    element: Ref<E | undefined>;
    classes: RefType<CLASSES>;
    styles: RefType<ConstrStyles>;
} & SETUP;
export type ConstrRegistration = {
    flag?: boolean;
    translate?: Record<string, string>;
};
export type ConstrBind<T> = T & Record<string, any> & {
    key?: string;
    class?: ConstrClass;
    style?: ConstrStyles;
};
export type ConstrPropItemOptions<T = any> = {
    type?: PropType<T>;
    required?: boolean;
    default?: any;
    validator?(value: any, props: any): boolean;
};
export type ConstrPropItem<T = any> = ConstrPropItemOptions<T> | PropType<T>;
export type ConstrProps<P = Record<string, any>> = {
    [K in keyof P]: ConstrPropItem<P[K]>;
};
export type ConstrHrefProps = {
    href?: string;
};
export type ListType = 'item' | 'space' | 'line' | 'subtitle' | 'html' | 'menu' | 'menu-group' | 'group';
export type ListDataBasic = {
    label?: NumberOrString;
    value?: any;
    search?: string;
};
export type ListDataItem<Item extends ListDataBasic = ListDataBasic> = ConstrBind<Item & {
    parent?: string;
    type: ListType;
    index: string;
    disabled?: boolean;
}>;
export type ListList<Item extends ListDataBasic = ListDataBasic> = ListDataItem<Item>[];
export type ListRecord<Item extends ListDataBasic = ListDataBasic> = ListList<Item> | Record<string, any>;
export type ListDataFullItem<Item extends ListDataBasic = ListDataBasic> = ListDataItem<Item> & {
    focus: boolean;
    highlight?: string;
    selected: boolean;
    disabled?: boolean;
};
export type ListDataFull<Item extends ListDataBasic = ListDataBasic> = ListDataFullItem<Item>[];
export type ListListInputItem<Item extends ListDataBasic = ListDataBasic> = ConstrBind<Item>;
export type ListListInput<Item extends ListDataBasic = ListDataBasic> = ListListInputItem<Item>[] | string[] | Record<string, ListListInputItem<Item>> | Record<string, string>;
export type ListSelectedItem = NumberOrStringOrBoolean;
export type ListSelectedList = ListSelectedItem | ListSelectedItem[];
export type ListName = string | number | undefined;
export type ListNames = ListName[];
export type SearchListValueRef<T extends SearchItem> = RefOrNormal<SearchListValue<T>>;
export type SearchListInput<T extends SearchItem> = SearchListValueRef<T> | (() => SearchListValueRef<T>);
export type SearchColumnsRef<T extends SearchItem, K extends SearchColumns<T>> = RefOrNormal<K>;
export type SearchColumnsInput<T extends SearchItem, K extends SearchColumns<T>> = SearchColumnsRef<T, K> | (() => SearchColumnsRef<T, K>);
export declare abstract class DesignAbstract<T extends Record<string, any>, C extends Record<string, any>> {
    constructor(props: T, callback?: ((event: C) => void) | undefined, changed?: string[]);
    make(compelled?: boolean): this;
    makeCallback(compelled?: boolean): void;
}
export declare abstract class DesignAsyncAbstract<T extends Record<string, any>, C extends Record<string, any>> extends DesignAbstract<T, C> {
    make(compelled?: boolean): this;
    makeCallback(compelled?: boolean): Promise<void>;
}
export declare class DesignChanged<T extends Record<string, any>> {
    constructor(props: T, watch?: string[]);
    is(name: string | string[]): boolean;
    isChanged(): boolean;
    update(): void;
}
export declare class DesignComp<COMP extends ConstrComponent, P extends ConstrItem> extends DesignComponents<COMP, P> {
}
export declare class DesignComponents<COMP extends ConstrComponent, P extends ConstrItem> {
    constructor(components?: COMP, modification?: ConstrComponentMod<P> | undefined);
    is<K extends keyof COMP>(name: K): name is K;
    get<K extends keyof COMP>(name: K): COMP[K];
    getModification<K extends keyof P>(index?: K & string | string, props?: P[K] | Record<string, any>): Record<string, any> | undefined;
    render<K extends keyof COMP, PK extends keyof P>(name: K & string, props?: P[PK] & ConstrItem | ConstrItem, children?: RawChildren | RawSlots, index?: PK & string | string): VNode[];
    renderOne<K extends keyof COMP, PK extends keyof P>(name: K & string, props?: P[PK] & ConstrItem | ConstrItem, children?: RawChildren | RawSlots, index?: PK & string | string): VNode | undefined;
    renderAdd<K extends keyof COMP, PK extends keyof P>(item: any[], name: K & string, props?: P[PK] & ConstrItem | ConstrItem, children?: RawChildren | RawSlots, index?: PK & string | string): this;
}
export declare abstract class DesignConstructorAbstract<E extends Element, COMP extends ConstrComponent, EMITS extends ConstrItem, EXPOSE extends ConstrItem, SLOTS extends ConstrItem, CLASSES extends ConstrClasses, P extends ConstrItem> {
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, EMITS, P> | undefined);
    getName(): string;
    getDesign(): string;
    getSubClass(name: string | string[]): string;
    getStatusClass(name: string | string[]): string;
    getStyle(name: string | string[]): string;
    getAttrs(): ConstrItem;
    expose(): ConstrExpose<E, EXPOSE>;
    render(): () => VNode | (VNode | any)[] | undefined;
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
}
export declare class EffectScopeGlobal {
    static run<T>(fn: () => T): T | undefined;
}
export declare class EventRef<E extends ElementOrWindow, O extends Event, D extends Record<string, any> = Record<string, any>> extends EventItem<E, O, D> {
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
 * const { data, loading, errorItem, isResponseContractValid } = useApiAsyncRef(
 *   '/users/1',
 *   { method: 'GET' },
 *   true,
 *   undefined,
 *   undefined,
 *   (data) => {
 *     try {
 *       return { status: 'success', data: S.decodeUnknownSync(userSchema)(data) }
 *     } catch (e) {
 *       return { status: 'error', errors: e }
 *     }
 *   },
 *   [
 *     { status: 404, message: 'User not found' }
 *   ]
 * )
 * ```
 */
export declare function useApiAsyncRef<R, T = R>(path?: RefOrNormal<string | undefined>, options?: ApiOptions, reactivity?: boolean, conditions?: RefType<boolean>, transformation?: (data: T, isResponseContractValid?: ApiDataValidation) => ApiData<R>, validateResponseContract?: (data: T) => ApiDataValidation, errorContract?: ApiErrorStorageList, unmounted?: boolean, apiInstance?: ApiInstance): UseApiRef<R>;
export interface UseApiDeleteSetup<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>> extends Omit<UseApiRequestSetup<T, Request, Return>, 'method'> {
}
export declare function useApiDelete<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>>(setup: UseApiDeleteSetup<T, Request, Return>): {
    loading: Ref<boolean, boolean>;
    send(request?: Request | undefined): Promise<Return | undefined>;
};
export interface UseApiGetSetup<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>> extends Omit<UseApiRequestSetup<T, Request, Return>, 'method'> {
}
export declare function useApiGet<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>>(setup: UseApiGetSetup<T, Request, Return>): {
    loading: Ref<boolean, boolean>;
    send(request?: Request | undefined): Promise<Return | undefined>;
};
/**
 * Asynchronous reactive composable for API management requests with built-in SSR support.
 * Wraps `useApiManagementRef` and immediately calls `initSsr()` to ensure data is pre-fetched on the server side.
 * Use this composable ONLY if you need the request to be executed on the server side during SSR.
 * For all other cases, use `useApiManagementRef`.
 */
export declare function useApiManagementAsyncRef<Return extends ApiManagementValue, FormattersOptions extends FormattersOptionsList, Post extends Record<string, any>, Put extends Record<string, any>, Delete extends Record<string, any>, Type extends ApiManagementValue = Return, Item extends ArrayToItem<Return> = ArrayToItem<Return>, ItemFormatters extends FormattersListColumns<Item, FormattersOptions>[number] = FormattersListColumns<Item, FormattersOptions>[number], Columns extends SearchColumns<ItemFormatters> = []>(propsGet: ApiManagementGet<Return, Type>, formattersOptions?: FormattersOptions, searchOptions?: ApiManagementSearch<Item, Columns>, postRequest?: ApiManagementRequest<Post>, putRequest?: ApiManagementRequest<Put>, deleteRequest?: ApiManagementRequest<Delete>, action?: () => Promise<void> | void, apiInstance?: ApiInstance): {
    isValid: ComputedRef<boolean>;
    isResponseContractValid: ComputedRef<boolean>;
    responseValidationResult: ComputedRef<ApiDataValidation | undefined>;
    list: ComputedRef<SearchFormatList<ItemFormatters, Columns>>;
    readonly data: ComputedRef<ApiData<Return> | undefined>;
    errorItem: ComputedRef<ApiErrorItem | undefined>;
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
/**
 * A powerful composable for comprehensive API request orchestration.
 * It centrally manages data loading (GET), list formatting, client-side searching,
 * and mutations (POST, PUT, DELETE) through a single reactive interface.
 *
 * @note This hook is recommended to be used in tandem with `executeUse` for centralized state management.
 * By wrapping `useApiManagementRef` in `executeUseProvide` or `executeUseGlobal`, you can ensure
 * a single source of truth across the component tree or the entire application.
 *
 * @remarks
 * Data formatting guidelines for `formattersOptions`:
 * - Recommended for formatting: Numbers that represent values (prices, counts), dates, currency, units, and statuses.
 * - Not recommended for formatting: Technical identifiers such as ID, UUID, account numbers, types, or internal codes.
 *
 * @example
 * const products = useApiManagementRef(
 *   {
 *     path: '/api/v1/products',
 *     skeleton: () => Array(5).fill({ id: 0, name: 'Loading...', price: 0 })
 *   },
 *   {
 *     price: (v) => `${v} USD`,
 *     created_at: (v) => new Date(v).toLocaleDateString()
 *   },
 *   {
 *     columns: ['name', 'category']
 *   },
 *   { path: '/api/v1/products' },
 *   { path: (data) => `/api/v1/products/${data.id}` },
 *   { path: (data) => `/api/v1/products/${data.id}` }
 * );
 */
export declare function useApiManagementRef<Return extends ApiManagementValue, FormattersOptions extends FormattersOptionsList, Post extends Record<string, any>, Put extends Record<string, any>, Delete extends Record<string, any>, Type extends ApiManagementValue = Return, Item extends ArrayToItem<Return> = ArrayToItem<Return>, ItemFormatters extends FormattersListColumns<Item, FormattersOptions>[number] = FormattersListColumns<Item, FormattersOptions>[number], Columns extends SearchColumns<ItemFormatters> = []>(propsGet: ApiManagementGet<Return, Type>, formattersOptions?: FormattersOptions, searchOptions?: ApiManagementSearch<Item, Columns>, postRequest?: ApiManagementRequest<Post>, putRequest?: ApiManagementRequest<Put>, deleteRequest?: ApiManagementRequest<Delete>, action?: () => Promise<void> | void, apiInstance?: ApiInstance): {
    isValid: ComputedRef<boolean>;
    isResponseContractValid: ComputedRef<boolean>;
    responseValidationResult: ComputedRef<ApiDataValidation | undefined>;
    list: ComputedRef<SearchFormatList<ItemFormatters, Columns>>;
    readonly data: ComputedRef<ApiData<Return> | undefined>;
    errorItem: ComputedRef<ApiErrorItem | undefined>;
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
export declare function useApiPost<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>>(setup: UseApiPostSetup<T, Request, Return>): {
    loading: Ref<boolean, boolean>;
    send(request?: Request | undefined): Promise<Return | undefined>;
};
export interface UseApiPutSetup<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>> extends Omit<UseApiRequestSetup<T, Request, Return>, 'method'> {
}
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
 * const userSchema = S.Struct({ id: S.Number, name: S.String })
 *
 * const { data, loading, errorItem, isResponseContractValid } = useApiRef(
 *   '/users/1',
 *   { method: 'GET' },
 *   true,
 *   undefined,
 *   (data) => ({ ...data, isTransformed: true }),
 *   (data) => {
 *     try {
 *       return { status: 'success', data: S.decodeUnknownSync(userSchema)(data) }
 *     } catch (e) {
 *       return { status: 'error', errors: e }
 *     }
 *   },
 *   [
 *     {
 *       status: 404,
 *       message: 'User not found'
 *     }
 *   ]
 * )
 * ```
 */
export declare function useApiRef<R, T = R>(path?: RefOrNormal<string | undefined>, options?: ApiOptions, reactivity?: boolean, conditions?: RefType<boolean>, transformation?: (data: T, isResponseContractValid?: ApiDataValidation) => ApiData<R>, validateResponseContract?: (data: T) => ApiDataValidation, errorContract?: ApiErrorStorageList, unmounted?: boolean, apiInstance?: ApiInstance): UseApiRef<R>;
export declare const setApiRefGlobalConditions: (conditions: RefType<any>) => void;
export interface UseApiRequestSetup<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>> {
    path?: RefOrNormal<string | undefined>;
    method?: ApiMethodItem;
    action?: (data: Return | undefined) => Promise<void> | void;
    transformation?: (data: T) => Return;
    validateRequestContract?: (data: Request) => ApiDataValidation & Return;
    validateResponseContract?: (data: T) => ApiDataValidation & Return;
    errorContract?: ApiErrorStorageList;
    toData?: boolean;
    options?: ApiOptions;
    apiInstance?: ApiInstance;
}
export declare function useApiRequest<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>>({ path, method, action, transformation, validateRequestContract, validateResponseContract, errorContract, toData, options, apiInstance }: UseApiRequestSetup<T, Request, Return>): {
    loading: Ref<boolean, boolean>;
    send(request?: Request): Promise<Return | undefined>;
};
type BroadcastValueItem<T> = T | string | undefined;
export declare function useBroadcastValueRef<T>(name: string, defaultValue?: T | string | (() => (T | string))): Ref<BroadcastValueItem<T>>;
export declare function useCookieRef<T>(name: string, defaultValue?: T | string | (() => (T | string)), options?: CookieOptions): Ref<T | string | undefined>;
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
}> & {
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
export declare function useSearchRef<T extends SearchItem, K extends SearchColumns<T>>(list: SearchListInput<T>, columns?: SearchColumnsInput<T, K>, value?: Ref<string>, options?: SearchOptions): {
    isSearch: ComputedRef<boolean>;
    search: Ref<string, string>;
    loading: Ref<boolean, boolean>;
    listSearch: ComputedRef<SearchFormatList<T, K>>;
    length: ComputedRef<number>;
};
export declare function useSearchValueRef<T extends SearchItem, K extends SearchColumns<T>>(item: SearchList<T, K>, value?: Ref<string>): {
    search: Ref<string, string>;
    searchDelay: Ref<string, string>;
    loading: Ref<boolean, boolean>;
};
export declare function useSessionRef<T>(name: string, defaultValue?: T | (() => T)): Ref<T | undefined>;
export declare function useStorageRef<T>(name: string, defaultValue?: T | (() => T), cache?: number): Ref<T | undefined>;
/**
 * Getting the translated text by an array of keys or a string with a key.
 * Returns a `ShallowRef` that automatically updates when the global language changes.
 * Use `as const` for arrays to ensure proper TypeScript key inference.
 *
 * @example
 * ```typescript
 * const translations = useTranslateRef(['home.title', 'home.description'] as const);
 * const labels = t(['button.save', 'button.cancel'] as const);
 * ```
 */
export declare function useTranslateRef<T extends (string | string[])[]>(names: T, translateInstance?: TranslateInstance): ShallowRef<TranslateList<T>>;
export declare const t: <T extends string[]>(names: T) => ShallowRef<TranslateList<T>>;
export declare const uiMakeFlags: () => void;
export * from '@dxtmisha/functional-basic';
export declare function computedAsync<R>(getter: (() => Promise<R>) | (() => R) | R, initialState?: (() => R) | R, ignore?: R, debugOptions?: DebuggerOptions): ComputedRef<R | undefined>;
export declare function computedByLanguage<T, R extends (T | undefined) = T | undefined>(getter: ComputedGetter<R>, getterNone?: R | (() => R), conditions?: () => boolean, debugOptions?: DebuggerOptions): ComputedRef<R>;
export declare function computedEternity<T>(getter: () => Promise<T> | T, initialState?: (() => T) | T): Ref<T, T>;
export interface FunctionalPluginOptions {
    api?: ApiConfig;
    translate?: TranslateConfig;
    location?: string | (() => string);
    metaSuffix?: string;
    icons?: IconsConfig;
    iconsSocial?: InputSocialIcons;
    router?: Router;
    errorCauses?: ErrorCenterCauseList;
    errorHandlers?: ErrorCenterHandlerList;
    errorCallbacks?: ErrorCenterHandlerCallback[];
}
/**
 * Vue plugin for initializing and configuring global functional services
 * (Api, Translate, Icons, Meta).
 *
 * @example
 * ```typescript
 * import { createApp } from 'vue'
 * import { dxtFunctionalPlugin } from '@dxtmisha/functional'
 * import router from './router'
 *
 * const app = createApp(App)
 * app.use(dxtFunctionalPlugin, {
 *   api: { url: 'https://api.example.com' },
 *   metaSuffix: ' | My App',
 *   router
 * })
 * ```
 */
export declare const dxtFunctionalPlugin: Plugin;
export declare enum ExecuteUseType {
    global = "global",
    provide = "provide",
    local = "local"
}
export type ExecuteUseReturn<R> = Readonly<R & {
    init(): Readonly<R>;
    destroyExecute?(): void;
}>;
/**
 * Creates a managed singleton that encapsulates initialization logic and access mode.
 * Supports initialization strategies: 'global', 'provide', 'local'.
 *
 * @remarks
 * Use this function for API services, shared reactive states, and singleton resource optimizations.
 *
 * @example
 * export const useUserApi = executeUseGlobal(() => {
 *   return useApiGet('/api/user');
 * });
 *
 * export const useFeatureState = executeUseProvide(() => {
 *   const items = [];
 *   const addItem = (item) => items.push(item);
 *   return { items, addItem };
 * });
 */
export declare function executeUse<R, O extends any[], RI extends ExecuteUseReturn<R> = ExecuteUseReturn<R>>(callback: (...args: O) => R, type?: ExecuteUseType): ((...args: O) => RI) | (() => RI);

/**
 * Creates a global singleton.
 * @remarks See {@link executeUse} for more details.
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
 * @remarks Best for sharing state within a component sub-tree. See {@link executeUse} for more details.
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
 * @remarks Best for internal state preservation within a closure. See {@link executeUse} for more details.
 */
export declare function executeUseLocal<R, O extends any[]>(callback: (...args: O) => R): ((...args: O) => Readonly<R & {
    init(): Readonly<R>;
    destroyExecute?(): void;
}>) | (() => Readonly<R & {
    init(): Readonly<R>;
    destroyExecute?(): void;
}>);

export declare function executeUseGlobalInit(): void;
export declare function getInject<T>(name: string): T | undefined;
export declare const getOptions: (options?: ApiOptions) => RefOrNormal<ApiFetch>;
export declare function executeFunctionRef<T>(data: RefOrNormalOrFunction<T>): T;
export declare function getApiErrorRef<R>(data: RefType<ApiData<R> | undefined>): ComputedRef<ApiErrorItem | undefined>;
export declare function getBindRef<T, R extends ItemList>(value: RefOrNormal<T | R> | undefined, nameExtra?: RefOrNormal<ItemList> | string, name?: string): ComputedRef<R>;
export declare function getRef<T>(item: RefOrNormal<T>): T;
export declare function render<T extends ItemList>(name: string | any, props?: T, children?: RawChildren | RawSlots, index?: string): VNode;
export declare function setRef<T>(item: Ref<T>, value: T): void;
export declare function toRefItem<T>(item: RefOrNormal<T>): Ref<T>;
export declare function getBind<T, R extends ItemList>(value: T | R | undefined | null, nameExtra?: ItemList | string, name?: string, except?: boolean): ConstrBind<R>;
export declare function getClassName<T extends ItemList>(props?: T): string | undefined;
export declare function getIndexForRender<T extends ItemList>(name: string | any, props?: T, index?: string): string | undefined;
export declare function toBind<R extends ItemList = ItemList>(extra: ItemList, value: ItemList): ConstrBind<R>;
export declare function toBinds<R extends ItemList = ItemList>(...values: (ItemList | undefined)[]): ConstrBind<R>;