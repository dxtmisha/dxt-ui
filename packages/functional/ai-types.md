1) All these methods are in the @dxtmisha/functional library.
2) Everything that is exported can be used.
3) Use what is in this library if it exists; do not use other libraries if there is an analogue here. Do not create new ones if an analogue already exists here.

The following is the content of "exports" from package.json:
{
  ".": {
    "import": "./dist/library.js",
    "types": "./dist/library.d.ts"
  },
  "./flags": {
    "import": "./dist/flags.js",
    "types": "./dist/flags.d.ts"
  }
}

import { ComputedRef, Ref, ShallowRef, ToRefs, VNode, DebuggerOptions, ComputedGetter, Plugin, PropType } from 'vue';
import { RouteLocationRaw, Router, _RouterClassic } from 'vue-router';
import { Datetime, GeoDate, GeoFirstDay, GeoHours, NumberOrStringOrDate, ElementOrString, ElementOrWindow, EventItem, EventListenerDetail, EventOptions, GeoFlag, GeoFlagItem, GeoFlagNational, ItemValue, NumberOrString, GeoItemFull, GeoUnit, ApiInstance, ApiData, ApiDataValidation, ApiErrorStorageList, ApiFetch, ArrayToItem, FormattersListColumns, FormattersOptionsList, SearchColumns, SearchFormatList, ApiErrorItem, ApiMethodItem, CookieOptions, FormattersListProp, FormattersReturn, MetaRobots, Meta, NumberOrStringOrBoolean, SearchItem, SearchOptions, TranslateInstance, TranslateList, ApiConfig, ErrorCenterCauseList, ErrorCenterHandlerCallback, ErrorCenterHandlerList, IconsConfig, TranslateConfig, ItemList, Undefined, ApiDefaultValue, SearchListValue } from '@dxtmisha/functional-basic';
import { InputSocialIcons } from '@dxtmisha/media';
export * from '@dxtmisha/functional-basic';
export type RefType<T> = ComputedRef<T> | Ref<T>;
export type RefUndefined<T> = RefType<T | undefined>;
export type RefOrNormal<T> = RefType<T> | T;
export type RefOrNormalOrFunction<T> = RefOrNormal<T> | (() => RefOrNormal<T>);
export type RawChildren = string | number | boolean | VNode | VNodeArrayChildren | (() => any);
export type RawSlots = { [name: string]: unknown; $stable?: boolean; };
export type ApiOptions = ApiMethodItem | RefOrNormal<ApiFetch>;
export type ApiManagementValue = ApiDefaultValue | ApiDefaultValue[];
/** Configuration for the main GET request in API management. */
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
/** Configuration for client-side search across API data. */
export type ApiManagementSearch<T extends SearchItem, K extends SearchColumns<T>> = {
    columns: K;
    value?: Ref<string>;
    options?: SearchOptions;
};
/** Configuration for mutation requests (POST, PUT, DELETE). */
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
export type ConstrValue<T = any> = { value?: T; };
export type ConstrComponent = Record<string, any>;
export type ConstrComponentMod<P extends ConstrItem> = ConstrItem | { [K in keyof P]?: RefOrNormal<P[K]>; };
export type ConstrExpose<E extends Element, EXPOSE extends ConstrItem> = EXPOSE & { elementHtml?: ComputedRef<E | undefined>; };
export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type ConstrEmitItem<T extends ConstrItem> = T[keyof T];
export type ConstrEmit<T extends ConstrItem = ConstrItem> = UnionToIntersection<ConstrEmitItem<{ [K in keyof T]: (evt: K, ...args: T[K]) => void; }>>;
export type ConstrClassObject = Record<string, boolean | undefined>;
export type ConstrClass = string | (string | ConstrClass | Undefined)[] | ConstrClassObject;
export type ConstrClassList = Record<string, ConstrClass>;
export type ConstrClasses = { main: ConstrClass; } & ConstrClassList;
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
export type ConstrProps<P = Record<string, any>> = { [K in keyof P]: ConstrPropItem<P[K]>; };
export type ConstrHrefProps = { href?: string; };
export type ListType = 'item' | 'space' | 'line' | 'subtitle' | 'html' | 'menu' | 'menu-group' | 'group';
export type ListDataBasic = { label?: NumberOrString; value?: any; search?: string; };
export type ListDataItem<Item extends ListDataBasic = ListDataBasic> = ConstrBind<Item & { parent?: string; type: ListType; index: string; disabled?: boolean; }>;
export type ListList<Item extends ListDataBasic = ListDataBasic> = ListDataItem<Item>[];
export type ListRecord<Item extends ListDataBasic = ListDataBasic> = ListList<Item> | Record<string, any>;
export type ListDataFullItem<Item extends ListDataBasic = ListDataBasic> = ListDataItem<Item> & { focus: boolean; highlight?: string; selected: boolean; disabled?: boolean; };
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
export type LazyItemByMargin = { rootMargin: string; item: ReturnType<typeof useLazyRef>; };
export type LazyItem = { status: ShallowRef<boolean>; ratio: ShallowRef<number>; entry: ShallowRef<IntersectionObserverEntry | undefined>; stopWatch: () => void; };
export type LazyList = Record<string, LazyItem>;
export interface UseApiDeleteSetup<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>> extends Omit<UseApiRequestSetup<T, Request, Return>, 'method'> {}
export interface UseApiGetSetup<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>> extends Omit<UseApiRequestSetup<T, Request, Return>, 'method'> {}
export interface UseApiPostSetup<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>> extends Omit<UseApiRequestSetup<T, Request, Return>, 'method'> {}
export interface UseApiPutSetup<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>> extends Omit<UseApiRequestSetup<T, Request, Return>, 'method'> {}
/** Interface for reactive API request instance. */
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
/** Setup interface for API request. */
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
/** Interface for functional plugin configuration options. */
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
/** Base abstract class for design constructor components managing properties, callbacks, and tracked changes. */
export declare abstract class DesignAbstract<T extends Record<string, any>, C extends Record<string, any>> {
    /**
     * Constructor
     * @param props base data
     * @param callback callback function when the value changes
     * @param changed data for tracking
     */
    constructor(props: T, callback?: ((event: C) => void) | undefined, changed?: string[]);
    /**
     * Calls the callback function.
     * @param compelled forces data to update
     */
    make(compelled?: boolean): this;
    /**
     * Calls the callback function.
     * @param compelled forces data to update
     */
    makeCallback(compelled?: boolean): void;
}
/** Base async abstract class for design components with asynchronous initialization. */
export declare abstract class DesignAsyncAbstract<T extends Record<string, any>, C extends Record<string, any>> extends DesignAbstract<T, C> {
    /**
     * Calls the callback function.
     * @param compelled forces data to update
     */
    make(compelled?: boolean): this;
    /**
     * Calls the callback function.
     * @param compelled forces data to update
     */
    makeCallback(compelled?: boolean): Promise<void>;
}
/** Class for tracking edited/changed values. */
export declare class DesignChanged<T extends Record<string, any>> {
    /**
     * Constructor
     * @param props base data
     * @param watch data for tracking
     */
    constructor(props: T, watch?: string[]);
    /**
     * Checks if the value has been updated.
     * @param name property name
     */
    is(name: string | string[]): boolean;
    /** Checks if there are changes in the data. */
    isChanged(): boolean;
    /** Updates all values. */
    update(): void;
}
/** Component wrapper class extending DesignComponents. */
export declare class DesignComp<COMP extends ConstrComponent, P extends ConstrItem> extends DesignComponents<COMP, P> {}
/** Class for working with connected components. */
export declare class DesignComponents<COMP extends ConstrComponent, P extends ConstrItem> {
    /**
     * Constructor
     * @param components list of connected components
     * @param modification data for modification
     */
    constructor(components?: COMP, modification?: ConstrComponentMod<P> | undefined);
    /**
     * Check the presence of the component.
     * @param name name of the component
     */
    is<K extends keyof COMP>(name: K): name is K;
    /**
     * Getting the object of the component.
     * @param name name of the component
     */
    get<K extends keyof COMP>(name: K): COMP[K];
    /**
     * Returns the modified input data of the connected components.
     * @param index the name of this
     * @param props basic data
     */
    getModification<K extends keyof P>(index?: K & string | string, props?: P[K] | Record<string, any>): Record<string, any> | undefined;
    /**
     * Rendering a component by its name and returning an array with one component.
     * @param name name of the component
     * @param props property of the component
     * @param children sub-elements of the component
     * @param index the name of the key
     */
    render<K extends keyof COMP, PK extends keyof P>(name: K & string, props?: P[PK] & ConstrItem | ConstrItem, children?: RawChildren | RawSlots, index?: PK & string | string): VNode[];
    /**
     * Rendering a component by its name.
     * @param name name of the component
     * @param props property of the component
     * @param children sub-elements of the component
     * @param index the name of the key
     */
    renderOne<K extends keyof COMP, PK extends keyof P>(name: K & string, props?: P[PK] & ConstrItem | ConstrItem, children?: RawChildren | RawSlots, index?: PK & string | string): VNode | undefined;
    /**
     * Rendering the component by its name.
     * @param item an array to which the rendered object will be added
     * @param name name of the component
     * @param props property of the component
     * @param children sub-elements of the component
     * @param index the name of the key
     */
    renderAdd<K extends keyof COMP, PK extends keyof P>(item: any[], name: K & string, props?: P[PK] & ConstrItem | ConstrItem, children?: RawChildren | RawSlots, index?: PK & string | string): this;
}
/** Class for collecting all functional components. */
export declare abstract class DesignConstructorAbstract<E extends Element, COMP extends ConstrComponent, EMITS extends ConstrItem, EXPOSE extends ConstrItem, SLOTS extends ConstrItem, CLASSES extends ConstrClasses, P extends ConstrItem> {
    /** Getting the class name. */
    getName(): string;
    /** Getting the design name. */
    getDesign(): string;
    /**
     * Getting the class name.
     * @param name list of class names by levels
     */
    getSubClass(name: string | string[]): string;
    /**
     * Getting the class name for the status.
     * @param name list of class names by levels
     */
    getStatusClass(name: string | string[]): string;
    /**
     * Getting the property name for the style.
     * @param name list of class names by levels
     */
    getStyle(name: string | string[]): string;
    /** Getting additional parameters. */
    getAttrs(): ConstrItem;
    /** List of available external variables. */
    expose(): ConstrExpose<E, EXPOSE>;
    /** The rendering method for the setup method. */
    render(): () => VNode | (VNode | any)[] | undefined;
}
/** A class for working with dates reactively. */
export declare class DatetimeRef {
    /**
     * Constructor
     * @param date date for processing
     * @param type type of date format for output
     * @param code country and language code
     */
    constructor(date: RefOrNormal<NumberOrStringOrDate>, type?: RefOrNormal<GeoDate>, code?: RefOrNormal<string>);
    /** Returns the basic data for the date. */
    getItem(): Ref<NumberOrStringOrDate>;
    /** Returns a Date object. */
    getDate(): Ref<Date>;
    /** Obtaining an object of the basic Datetime class. */
    getDatetime(): Datetime;
    /** Returns the format of hours. */
    getHoursType(): ComputedRef<GeoHours>;
    /** Returns the code of the first day of the week. */
    getFirstDayCode(): ComputedRef<GeoFirstDay>;
    /** The method returns the year of the specified date according to local time. */
    getYear(): ComputedRef<number>;
    /** The method returns the month in the specified date according to local time. */
    getMonth(): ComputedRef<number>;
    /** The method returns the day of the month for the specified date according to local time. */
    getDay(): ComputedRef<number>;
    /** The method returns the hour for the specified date, according to local time. */
    getHour(): ComputedRef<number>;
    /** The method returns the minutes in the specified date according to local time. */
    getMinute(): ComputedRef<number>;
    /** The method returns the seconds in the specified date according to local time. */
    getSecond(): ComputedRef<number>;
    /** Returns the last day of the week. */
    getMaxDay(): ComputedRef<number>;
    /**
     * Enables language-sensitive date and time formatting.
     * @param type type of date format for output
     * @param styleOptions the representation of the month
     */
    locale(type?: GeoDate, styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions): ComputedRef<string>;
    /**
     * Output of standard data.
     * @param timeZone add time zone
     */
    standard(timeZone?: boolean): ComputedRef<string>;
}
/** Global effect scope class. */
export declare class EffectScopeGlobal {
    /**
     * Runs a function within the global scope.
     * @param fn function
     * @returns the return value of the function
     */
    static run<T>(fn: () => T): T | undefined;
}
/** Class for working with events (Ref). */
export declare class EventRef<E extends ElementOrWindow, O extends Event, D extends Record<string, any> = Record<string, any>> extends EventItem<E, O, D> {
    /**
     * Classes Constructor
     * @param elementSelector element
     * @param elementSelectorControl control element
     * @param type type
     * @param listener event listener callback
     * @param options event listener characteristics
     * @param detail event-dependent detail value
     */
    constructor(elementSelector?: RefOrNormal<ElementOrString<E> | undefined>, elementSelectorControl?: RefOrNormal<ElementOrString<HTMLElement>>, type?: string | string[], listener?: EventListenerDetail<O, D>, options?: EventOptions, detail?: D);
}
/** Class for working with Flags. */
export declare class GeoFlagRef {
    /**
     * Constructor.
     * @param code country and language code
     */
    constructor(code?: RefOrNormal<string | undefined>);
    /**
     * Getting the country code.
     * @returns country code
     */
    getCode(): string;
    /**
     * Returns information about the country and its flag.
     * @param code country code
     */
    get(code?: RefOrNormal<string>): ComputedRef<GeoFlagItem | undefined>;
    /**
     * Returns information about the language and its flag.
     * @param code country code
     */
    getLanguage(code?: RefOrNormal<string>): ComputedRef<GeoFlagItem | undefined>;
    /**
     * Getting a link to the flag.
     * @param code country code
     */
    getFlag(code?: RefOrNormal<string>): ComputedRef<string | undefined>;
    /**
     * Getting a list of countries by an array of codes.
     * @param codes list of country codes
     */
    getList(codes?: RefOrNormal<string[] | undefined>): ComputedRef<GeoFlagItem[]>;
    /**
     * Getting a list of languages by an array of codes.
     * @param codes list of country codes
     */
    getListLanguage(codes?: RefOrNormal<string[] | undefined>): ComputedRef<GeoFlagItem[]>;
    /**
     * Getting a list of countries by an array of codes in national language.
     * @param codes list of country codes
     */
    getNational(codes?: RefOrNormal<string[] | undefined>): ComputedRef<GeoFlagNational[]>;
    /**
     * Getting a list of languages by an array of codes in national language.
     * @param codes list of country codes
     */
    getNationalLanguage(codes?: RefOrNormal<string[] | undefined>): ComputedRef<GeoFlagNational[]>;
}
/**
 * Reactive class for managing the formatting of numbers and dates.
 * @remarks
 * Avoid using this reactive class if reactive updates are not required.
 * For non-reactive formatting, use the standard `GeoIntl` class from `@dxtmisha/functional-basic`.
 */
export declare class GeoIntlRef {
    /**
     * Constructor
     * @param code country code, full form language-country or one of them
     */
    constructor(code?: RefOrNormal<string>);
    /**
     * The consistent translation of language, region and script display names.
     * @param value the code to provide depends on the type
     * @param typeOptions options object or type string
     */
    display(value?: RefOrNormal<string>, typeOptions?: Intl.DisplayNamesOptions['type'] | Intl.DisplayNamesOptions): ComputedRef<string>;
    /**
     * Get display names of language.
     * @param value the code to provide depends on the type
     * @param style the formatting style to use
     */
    languageName(value?: RefOrNormal<string>, style?: Intl.RelativeTimeFormatStyle): ComputedRef<string>;
    /**
     * Get display names of region.
     * @param value the code to provide depends on the type
     * @param style the formatting style to use
     */
    countryName(value?: RefOrNormal<string>, style?: Intl.RelativeTimeFormatStyle): ComputedRef<string>;
    /**
     * In basic use without specifying a locale, a formatted string.
     * @param value a number, bigint, or string, to format
     * @param options format options
     */
    number(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Decimal point symbol. */
    decimal(): ComputedRef<string>;
    /**
     * Currency formatting.
     * @param value a number, bigint, or string, to format
     * @param currencyOptions currency code or options
     * @param numberOnly do not display currency symbol
     */
    currency(value: RefOrNormal<NumberOrString>, currencyOptions?: RefOrNormal<string | Intl.NumberFormatOptions>, numberOnly?: boolean): ComputedRef<string>;
    /**
     * Returns the currency symbol if it exists, otherwise the currency code.
     * @param currency currency code
     * @param currencyDisplay display mode
     */
    currencySymbol(currency: RefOrNormal<string>, currencyDisplay?: keyof Intl.NumberFormatOptionsCurrencyDisplayRegistry): ComputedRef<string>;
    /**
     * Unit formatting.
     * @param value a number, bigint, or string, to format
     * @param unitOptions unit identifier or options
     */
    unit(value: RefOrNormal<NumberOrString>, unitOptions?: string | Intl.NumberFormatOptions): ComputedRef<string>;
    /**
     * Returns formatted file size.
     * @param value size number
     * @param unitOptions unit options
     */
    sizeFile(value: RefOrNormal<NumberOrString>, unitOptions?: 'byte' | 'kilobyte' | 'megabyte' | 'gigabyte' | 'terabyte' | 'petabyte' | Intl.NumberFormatOptions): ComputedRef<string>;
    /**
     * Number as a percentage.
     * @param value number to format
     * @param options format options
     */
    percent(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /**
     * Number as a percentage (unit).
     * @param value number to format
     * @param options format options
     */
    percentBy100(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /**
     * Formats plural rules based on input number and words list.
     * @param value number to format
     * @param words formatted words separated by pipeline
     * @param options plural rules options
     * @param optionsNumber number format options
     */
    plural(value: RefOrNormal<NumberOrString>, words: string, options?: Intl.PluralRulesOptions, optionsNumber?: Intl.NumberFormatOptions): ComputedRef<string>;
    /**
     * Enables language-sensitive date and time formatting.
     * @param value date to format
     * @param type type of data format
     * @param styleOptions representation of month or options
     * @param hour24 whether to use 24-hour time
     */
    date(value: RefOrNormal<NumberOrStringOrDate>, type?: GeoDate, styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions, hour24?: boolean): ComputedRef<string>;
    /**
     * Enables language-sensitive relative time formatting.
     * @param value number or date to format
     * @param styleOptions style options
     * @param todayValue reference current date
     */
    relative(value: RefOrNormal<NumberOrStringOrDate>, styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions, todayValue?: Date): ComputedRef<string>;
    /**
     * Enables relative time formatting with limit checks.
     * @param value number or date to format
     * @param limit day limit threshold
     * @param todayValue reference current date
     * @param relativeOptions relative options
     * @param dateOptions date options
     * @param type date format type
     * @param hour24 24-hour flag
     */
    relativeLimit(value: RefOrNormal<NumberOrStringOrDate>, limit: number, todayValue?: Date, relativeOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions, dateOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions, type?: GeoDate, hour24?: boolean): ComputedRef<string>;
    /**
     * Formats relative time elapsed from value.
     * @param value number to format
     * @param unit relative time unit
     * @param styleOptions style options
     */
    relativeByValue(value: RefOrNormal<NumberOrString>, unit: Intl.RelativeTimeFormatUnit, styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions): ComputedRef<string>;
    /**
     * Names of months.
     * @param value date
     * @param style month style
     */
    month(value?: RefOrNormal<NumberOrStringOrDate>, style?: Intl.DateTimeFormatOptions['month']): ComputedRef<string>;
    /**
     * List of months.
     * @param style month style
     */
    months(style?: Intl.DateTimeFormatOptions['month']): ComputedRef<ItemValue<number | undefined>[]>;
    /**
     * Returns weekday name.
     * @param value date
     * @param style weekday style
     */
    weekday(value?: RefOrNormal<NumberOrStringOrDate>, style?: Intl.DateTimeFormatOptions['weekday']): ComputedRef<string>;
    /**
     * List of weekday names.
     * @param style weekday style
     */
    weekdays(style?: Intl.DateTimeFormatOptions['weekday']): ComputedRef<ItemValue<number | undefined>[]>;
    /**
     * Formatted time string.
     * @param value date
     */
    time(value: RefOrNormal<NumberOrStringOrDate>): ComputedRef<string>;
    /**
     * Sorts strings taking into account the characteristics of countries.
     * @param data array data
     * @param compareFn comparison function
     */
    sort<T>(data: RefOrNormal<T[]>, compareFn?: (a: T, b: T) => [string, string]): ComputedRef<T[]>;
}
/** Reactive class for working with geographic data. */
export declare class GeoRef {
    /** Information about the current country. */
    static get(): Ref<GeoItemFull>;
    /** Current country code. */
    static getCountry(): ComputedRef<string>;
    /** Current language code. */
    static getLanguage(): ComputedRef<string>;
    /** Full standard locale format. */
    static getStandard(): ComputedRef<string>;
    /** First day of week code. */
    static getFirstDay(): ComputedRef<string>;
    /** Current location string. */
    static getLocation(): ComputedRef<string>;
    /** Current country code from location. */
    static getLocationCountry(): ComputedRef<string>;
    /** Current language code from location. */
    static getLocationLanguage(): ComputedRef<string>;
    /**
     * Changes the data by full code.
     * @param code location code
     */
    static set(code: string): void;
    /**
     * Sets default country code.
     * @param code default code or getter
     */
    static setValueDefault(code?: string | (() => string)): void;
}
/** Reactive class for managing localized unit formatting and automatic conversions. */
export declare class GeoUnitRef {
    /**
     * Constructor.
     * @param code location code
     */
    constructor(code?: RefOrNormal<string>);
    /** Standard location code. */
    getLocation(): ComputedRef<string>;
    /** Formats millimeter value. */
    millimeter(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats centimeter value. */
    centimeter(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats meter value. */
    meter(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats kilometer value. */
    kilometer(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats square meter value. */
    squareMeter(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats hectare value. */
    hectare(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats gram value. */
    gram(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats kilogram value. */
    kilogram(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats tonne value. */
    tonne(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats milliliter value. */
    milliliter(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats liter value. */
    liter(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats celsius value. */
    celsius(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats kilometer per hour value. */
    kilometerPerHour(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats custom unit value. */
    format(value: RefOrNormal<NumberOrString>, unit: RefOrNormal<string>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
}
/** Class for managing list data structure and navigation. */
export declare class ListDataRef {
    /**
     * Constructor
     * @param list list data
     * @param focus focus identifier
     * @param highlight search highlight text
     * @param highlightLengthStart min length to highlight
     * @param filterMode filter mode flag
     * @param selected selected identifiers
     * @param keyValue value key name
     * @param keyLabel label key name
     * @param lite lite mode threshold
     * @param min minimum selection
     * @param max maximum selection
     * @param parent parent identifier
     */
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
    getItemByIndex(index?: string): { key: number; item: ListDataItem; } | undefined;
    getItemByKey(key: number): ListDataItem | undefined;
    getFirstItemByParent(parent: string | undefined): ListDataItem | undefined;
    getLastItemByParent(parent: string | undefined): ListDataItem | undefined;
    getSubList(item: ListDataItem): ListDataRef;
}
/** Router management class. */
export declare class RouterItemRef {
    /** Get router instance. */
    static get(): _RouterClassic;
    /** Returns link by route name. */
    static getLink(name: string, params?: any, query?: any): string | undefined;
    /** Returns href properties by route name. */
    static getHref(name?: string, params?: any, query?: any): ConstrHrefProps;
    /** Changes site path. */
    static push(to: string | RouteLocationRaw): void;
    /** Sets router instance. */
    static set(router: Router): void;
    /** Sets router instance once. */
    static setOneTime(router: Router): void;
    /** Converts raw location to href properties. */
    static rawToHref(to?: string | RouteLocationRaw): ConstrHrefProps;
}
/** Class for getting scrollbar width as a reactive item. */
export declare class ScrollbarWidthRef {
    readonly item: Ref<boolean | undefined, boolean | undefined>;
    readonly width: Ref<number, number>;
    constructor();
    readonly is: ComputedRef<boolean>;
}
/**
 * Asynchronous reactive composable for API requests with built-in SSR support.
 * @example
 * ```typescript
 * const { data, loading } = useApiAsyncRef('/users/1', { method: 'GET' });
 * ```
 */
export declare function useApiAsyncRef<R, T = R>(path?: RefOrNormal<string | undefined>, options?: ApiOptions, reactivity?: boolean, conditions?: RefType<boolean>, transformation?: (data: T, isResponseContractValid?: ApiDataValidation) => ApiData<R>, validateResponseContract?: (data: T) => ApiDataValidation, errorContract?: ApiErrorStorageList, unmounted?: boolean, apiInstance?: ApiInstance): UseApiRef<R>;
/** Use API delete request helper wrapper. */
export declare function useApiDelete<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>>(setup: UseApiDeleteSetup<T, Request, Return>): {
    loading: Ref<boolean, boolean>;
    send(request?: Request | undefined): Promise<Return | undefined>;
};
/** Use API get request helper wrapper. */
export declare function useApiGet<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>>(setup: UseApiGetSetup<T, Request, Return>): {
    loading: Ref<boolean, boolean>;
    send(request?: Request | undefined): Promise<Return | undefined>;
};
/** Asynchronous reactive composable for API management requests with built-in SSR support. */
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
 * @note This hook is recommended to be used in tandem with `executeUse` for centralized state management.
 * @remarks Data formatting guidelines for `formattersOptions`:
 * - Recommended for values, dates, currencies.
 * - Not recommended for technical identifiers (IDs, UUIDs).
 * @example
 * ```typescript
 * const products = useApiManagementRef({ path: '/api/v1/products' });
 * ```
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
/** Use API post request helper wrapper. */
export declare function useApiPost<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>>(setup: UseApiPostSetup<T, Request, Return>): {
    loading: Ref<boolean, boolean>;
    send(request?: Request | undefined): Promise<Return | undefined>;
};
/** Use API put request helper wrapper. */
export declare function useApiPut<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>>(setup: UseApiPutSetup<T, Request, Return>): {
    loading: Ref<boolean, boolean>;
    send(request?: Request | undefined): Promise<Return | undefined>;
};
/**
 * Main reactive composable for working with API requests in Vue.
 * @example
 * ```typescript
 * const { data, loading } = useApiRef('/users/1');
 * ```
 */
export declare function useApiRef<R, T = R>(path?: RefOrNormal<string | undefined>, options?: ApiOptions, reactivity?: boolean, conditions?: RefType<boolean>, transformation?: (data: T, isResponseContractValid?: ApiDataValidation) => ApiData<R>, validateResponseContract?: (data: T) => ApiDataValidation, errorContract?: ApiErrorStorageList, unmounted?: boolean, apiInstance?: ApiInstance): UseApiRef<R>;
export declare const setApiRefGlobalConditions: (conditions: RefType<any>) => void;
/** Sends configured API request. */
export declare function useApiRequest<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>>({ path, method, action, transformation, validateRequestContract, validateResponseContract, errorContract, toData, options, apiInstance }: UseApiRequestSetup<T, Request, Return>): {
    loading: Ref<boolean, boolean>;
    send(request?: Request): Promise<Return | undefined>;
};
/** Creates reactive variable synced across browser tabs using BroadcastChannel. */
export declare function useBroadcastValueRef<T>(name: string, defaultValue?: T | string | (() => (T | string))): Ref<T | string | undefined>;
/** Creates reactive cookie reference. */
export declare function useCookieRef<T>(name: string, defaultValue?: T | string | (() => (T | string)), options?: CookieOptions): Ref<T | string | undefined>;
/** Composable for reactive formatting of data lists based on rules. */
export declare function useFormattersRef<Options extends FormattersOptionsList = FormattersOptionsList, List extends FormattersListProp = FormattersListProp>(list: RefType<List | undefined>, options: Options): {
    listFormat: ComputedRef<FormattersReturn<List, Options>>;
    length: ComputedRef<number>;
};
/**
 * Returns GeoIntlRef instance.
 * @remarks
 * Avoid using this reactive composable if reactive updates are not required.
 * For non-reactive formatting, use `GeoIntl` directly.
 */
export declare function useGeoIntlRef(): GeoIntlRef;
/** Returns GeoUnitRef instance. */
export declare function useGeoUnitRef(): GeoUnitRef;
/** Creates reactive hash variable. */
export declare function useHashRef<T>(name: string, defaultValue?: T | (() => T)): ShallowRef<T>;
/** Hook for initializing lazy tracking of element appearance with root margin. */
export declare const useLazyItemByMarginRef: (element: RefType<HTMLElement | undefined>, rootMargin?: string) => {
    lazyItemStatus: ShallowRef<boolean, boolean>;
    readonly lazyItem: LazyItem | undefined;
};
/** Hook for initializing lazy element appearance tracking. */
export declare const useLazyRef: (options?: IntersectionObserverInit) => {
    intersectionObserver: IntersectionObserver | undefined;
    getItem(element?: HTMLElement): LazyItem | undefined;
    addLazyItem(element: Ref<HTMLElement | undefined>): ShallowRef<boolean, boolean>;
    removeLazyItem: (element?: HTMLElement) => void;
    disconnectLazy: () => void | undefined;
};
/** Returns reactive global loading status. */
export declare function useLoadingRef(): ShallowRef<boolean, boolean>;
/** Vue composable for reactive meta tags management with DOM synchronization. */
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
};
/** Creates reactive URL query parameter reference. */
export declare function useQueryRef<T>(name: string, defaultValue?: T | (() => T)): ShallowRef<T>;
/** Managing router link list. */
export declare const useRouterList: <T extends ListDataBasic>(list: RefType<ConstrBind<T>[] | undefined>, selected?: Ref<string> | string, hasTo?: boolean) => {
    item: ComputedRef<T | undefined>;
    selected: Ref<string, string>;
    label: ComputedRef<NumberOrString>;
    list: ComputedRef<ConstrBind<T>[]>;
    to: (name?: string) => void;
    toMain(): void;
};
/** Composable for search logic with reactive data. */
export declare function useSearchRef<T extends SearchItem, K extends SearchColumns<T>>(list: SearchListInput<T>, columns?: SearchColumnsInput<T, K>, value?: Ref<string>, options?: SearchOptions): {
    isSearch: ComputedRef<boolean>;
    search: Ref<string, string>;
    loading: Ref<boolean, boolean>;
    listSearch: ComputedRef<SearchFormatList<T, K>>;
    length: ComputedRef<number>;
};
/** Composable for search value state and handling delays. */
export declare function useSearchValueRef<T extends SearchItem, K extends SearchColumns<T>>(item: SearchList<T, K>, value?: Ref<string>): {
    search: Ref<string, string>;
    searchDelay: Ref<string, string>;
    loading: Ref<boolean, boolean>;
};
/** Creates reactive session storage reference. */
export declare function useSessionRef<T>(name: string, defaultValue?: T | (() => T)): Ref<T | undefined>;
/** Creates reactive local storage reference. */
export declare function useStorageRef<T>(name: string, defaultValue?: T | (() => T), cache?: number): Ref<T | undefined>;
/**
 * Getting translated text by keys.
 * @example
 * ```typescript
 * const labels = useTranslateRef(['home.title'] as const);
 * ```
 */
export declare function useTranslateRef<T extends (string | string[])[]>(names: T, translateInstance?: TranslateInstance): ShallowRef<TranslateList<T>>;
/** Shorthand for useTranslateRef. */
export declare const t: <T extends string[]>(names: T) => ShallowRef<TranslateList<T>>;
/** Creates computed property handling async getters. */
export declare function computedAsync<R>(getter: (() => Promise<R>) | (() => R) | R, initialState?: (() => R) | R, ignore?: R, debugOptions?: DebuggerOptions): ComputedRef<R | undefined>;
/** Creates computed property dependent on current language state. */
export declare function computedByLanguage<T, R extends (T | undefined) = T | undefined>(getter: ComputedGetter<R>, getterNone?: R | (() => R), conditions?: () => boolean, debugOptions?: DebuggerOptions): ComputedRef<R>;
/** Creates cached computed property computed on demand. */
export declare function computedEternity<T>(getter: () => Promise<T> | T, initialState?: (() => T) | T): Ref<T, T>;
/**
 * Vue plugin for initializing global functional services.
 * @example
 * ```typescript
 * app.use(dxtFunctionalPlugin, { api: { url: 'https://api.example.com' } });
 * ```
 */
export declare const dxtFunctionalPlugin: Plugin;
/** Types of initialization for executeUse singleton. */
export declare enum ExecuteUseType {
    global = "global",
    provide = "provide",
    local = "local"
}
/** Return structure of executeUse singleton wrapper. */
export type ExecuteUseReturn<R> = Readonly<R & {
    init(): Readonly<R>;
    destroyExecute?(): void;
}>;
/**
 * Creates managed singleton encapsulating initialization strategy.
 * @remarks
 * Use for API services, resource optimization, and shared state.
 * @example
 * ```typescript
 * export const useUserApi = executeUseGlobal(() => useApiGet('/api/user'));
 * ```
 */
export declare function executeUse<R, O extends any[], RI extends ExecuteUseReturn<R> = ExecuteUseReturn<R>>(callback: (...args: O) => R, type?: ExecuteUseType): ((...args: O) => RI) | (() => RI);
/** Creates global singleton. */
export declare function executeUseGlobal<R>(callback: () => R): (() => Readonly<R & {
    init(): Readonly<R>;
    destroyExecute?(): void;
}>) | (() => Readonly<R & {
    init(): Readonly<R>;
    destroyExecute?(): void;
}>);
/** Creates component-scoped singleton via provide/inject. */
export declare function executeUseProvide<R, O extends any[]>(callback: (...args: O) => R): ((...args: O) => Readonly<R & {
    init(): Readonly<R>;
    destroyExecute?(): void;
}>) | (() => Readonly<R & {
    init(): Readonly<R>;
    destroyExecute?(): void;
}>);
/** Creates local singleton inside closure. */
export declare function executeUseLocal<R, O extends any[]>(callback: (...args: O) => R): ((...args: O) => Readonly<R & {
    init(): Readonly<R>;
    destroyExecute?(): void;
}>) | (() => Readonly<R & {
    init(): Readonly<R>;
    destroyExecute?(): void;
}>);
/** Initializes all registered global singletons. */
export declare function executeUseGlobalInit(): void;
/** Gets injected Vue value by key name. */
export declare function getInject<T>(name: string): T | undefined;
/** Resolves options object for API fetch calls. */
export declare const getOptions: (options?: ApiOptions) => RefOrNormal<ApiFetch>;
/** Executes argument if function and unwraps resulting Vue ref. */
export declare function executeFunctionRef<T>(data: RefOrNormalOrFunction<T>): T;
/** Returns reactive error item from API ref data. */
export declare function getApiErrorRef<R>(data: RefType<ApiData<R> | undefined>): ComputedRef<ApiErrorItem | undefined>;
/** Generates computed properties binding for subcomponent. */
export declare function getBindRef<T, R extends ItemList>(value: RefOrNormal<T | R> | undefined, nameExtra?: RefOrNormal<ItemList> | string, name?: string): ComputedRef<R>;
/** Unwraps ref value or returns raw value. */
export declare function getRef<T>(item: RefOrNormal<T>): T;
/** Renders component VNode with cached properties. */
export declare function render<T extends ItemList>(name: string | any, props?: T, children?: RawChildren | RawSlots, index?: string): VNode;
/** Updates ref value if changed. */
export declare function setRef<T>(item: Ref<T>, value: T): void;
/** Wraps value into Vue ref if not reactive. */
export declare function toRefItem<T>(item: RefOrNormal<T>): Ref<T>;
/** Merges two property objects merging classes and styles. */
export declare function getBind<T, R extends ItemList>(value: T | R | undefined | null, nameExtra?: ItemList | string, name?: string, except?: boolean): ConstrBind<R>;
/** Returns class name property from component props object. */
export declare function getClassName<T extends ItemList>(props?: T): string | undefined;
/** Returns or generates index key for VNode rendering. */
export declare function getIndexForRender<T extends ItemList>(name: string | any, props?: T, index?: string): string | undefined;
/** Merges two objects taking into account class and style arrays. */
export declare function toBind<R extends ItemList = ItemList>(extra: ItemList, value: ItemList): ConstrBind<R>;
/** Merges multiple property objects preserving classes and styles. */
export declare function toBinds<R extends ItemList = ItemList>(...values: (ItemList | undefined)[]): ConstrBind<R>;