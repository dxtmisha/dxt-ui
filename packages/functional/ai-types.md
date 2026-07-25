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

// File: classes/design/DesignAbstract.d.ts
export declare abstract class DesignAbstract<T extends Record<string, any>, C extends Record<string, any>> {
    protected readonly props: T;
    protected readonly callback?: ((event: C) => void) | undefined;
    protected readonly event: C;
    protected readonly changed: DesignChanged<T>;
    /**
     * @param props Base data
     * @param callback Called on value change
     * @param changed Data to track
     */
    constructor(props: T, callback?: ((event: C) => void) | undefined, changed?: string[]);
    /**
     * Calls callback.
     * @param compelled Force update
     */
    make(compelled?: boolean): this;
    /**
     * Calls callback.
     * @param compelled Force update
     */
    makeCallback(compelled?: boolean): void;
}

// File: classes/design/DesignAsyncAbstract.d.ts
import { DesignAbstract } from './DesignAbstract';
export declare abstract class DesignAsyncAbstract<T extends Record<string, any>, C extends Record<string, any>> extends DesignAbstract<T, C> {
    /**
     * Calls callback.
     * @param compelled Force update
     */
    make(compelled?: boolean): this;
    /**
     * Calls callback.
     * @param compelled Force update
     */
    makeCallback(compelled?: boolean): Promise<void>;
}

// File: classes/design/DesignChanged.d.ts
export declare class DesignChanged<T extends Record<string, any>> {
    protected readonly props: T;
    protected readonly watch: string[];
    /**
     * @param props Base data
     * @param watch Tracking data
     */
    constructor(props: T, watch?: string[]);
    /**
     * Checks if value updated.
     * @param name Property name
     */
    is(name: string | string[]): boolean;
    /** Checks for data changes. */
    isChanged(): boolean;
    /** Updates all values. */
    update(): void;
}

// File: classes/design/DesignComp.d.ts
import { DesignComponents } from './DesignComponents';
import { ConstrComponent, ConstrItem } from '../../types/constructorTypes';
export declare class DesignComp<COMP extends ConstrComponent, P extends ConstrItem> extends DesignComponents<COMP, P> {
}

// File: classes/design/DesignComponents.d.ts
import { ComputedRef, VNode } from 'vue';
import { RawChildren, RawSlots } from '../../types/refTypes';
import { ConstrComponent, ConstrComponentMod, ConstrItem } from '../../types/constructorTypes';
export declare class DesignComponents<COMP extends ConstrComponent, P extends ConstrItem> {
    protected readonly components: COMP;
    protected readonly modification?: ConstrComponentMod<P> | undefined;
    protected caching: Record<string, ComputedRef<any>>;
    /**
     * @param components Connected components
     * @param modification Modification data
     */
    constructor(components?: COMP, modification?: ConstrComponentMod<P> | undefined);
    /**
     * Check component presence.
     * @param name Component name
     */
    is<K extends keyof COMP>(name: K): name is K;
    /**
     * Get component object.
     * @param name Component name
     */
    get<K extends keyof COMP>(name: K): COMP[K];
    /**
     * Returns modified component data.
     * @param index Data name
     * @param props Base data
     */
    getModification<K extends keyof P>(index?: K & string | string, props?: P[K] | Record<string, any>): Record<string, any> | undefined;
    /**
     * Renders component as array.
     * @param name Component name
     * @param props Component properties
     * @param children Sub-elements
     * @param index Key name
     */
    render<K extends keyof COMP, PK extends keyof P>(name: K & string, props?: P[PK] & ConstrItem | ConstrItem, children?: RawChildren | RawSlots, index?: PK & string | string): VNode[];
    /**
     * Renders single component.
     * @param name Component name
     * @param props Component properties
     * @param children Sub-elements
     * @param index Key name
     */
    renderOne<K extends keyof COMP, PK extends keyof P>(name: K & string, props?: P[PK] & ConstrItem | ConstrItem, children?: RawChildren | RawSlots, index?: PK & string | string): VNode | undefined;
    /**
     * Renders and adds to array.
     * @param item Target array
     * @param name Component name
     * @param props Component properties
     * @param children Sub-elements
     * @param index Key name
     */
    renderAdd<K extends keyof COMP, PK extends keyof P>(item: any[], name: K & string, props?: P[PK] & ConstrItem | ConstrItem, children?: RawChildren | RawSlots, index?: PK & string | string): this;
}

// File: classes/design/DesignConstructorAbstract.d.ts
import { ComputedRef, ToRefs, VNode, Ref } from 'vue';
import { DesignComponents } from './DesignComponents';
import { ConstrClass, ConstrClassObject, ConstrComponent, ConstrEmit, ConstrExpose, ConstrItem, ConstrOptions, ConstrStyles } from '../../types/constructorTypes';
export declare abstract class DesignConstructorAbstract<E extends Element, COMP extends ConstrComponent, EMITS extends ConstrItem, EXPOSE extends ConstrItem, SLOTS extends ConstrItem, CLASSES extends ConstrClasses, P extends ConstrItem> {
    protected readonly props: Readonly<P>;
    protected readonly options?: ConstrOptions<COMP, EMITS, P> | undefined;
    protected readonly name: string[];
    protected readonly element: Ref<E | undefined, E | undefined>;
    protected readonly refs: ToRefs<P>;
    protected readonly components: DesignComponents<COMP, P>;
    protected readonly emits?: ConstrEmit<EMITS>;
    protected readonly classes?: ComputedRef<CLASSES>;
    protected classesSub?: ComputedRef<Partial<CLASSES>>;
    protected readonly styles?: ComputedRef<ConstrStyles>;
    protected stylesSub?: ComputedRef<ConstrStyles>;
    protected attrs?: ConstrItem;
    protected slots?: SLOTS;
    protected dataExpose?: EXPOSE;
    /**
     * @param name Class name
     * @param props Properties
     * @param options Additional parameters
     */
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
    protected initSlot<K extends keyof SLOTS>(name: K, children?: any[], props?: ConstrItem): VNode | undefined;
    protected toClass(classes?: ConstrClass): ConstrClassObject;
    protected toClassName<T extends ConstrItem>(classes?: ConstrItem): T;
}

// File: classes/ref/DatetimeRef.d.ts
import { ComputedRef, Ref } from 'vue';
import { Datetime, GeoDate, GeoFirstDay, GeoHours, NumberOrStringOrDate } from '@dxtmisha/functional-basic';
import { RefOrNormal } from '../../types/refTypes';
export declare class DatetimeRef {
    protected item: Ref<NumberOrStringOrDate>;
    protected type: Ref<GeoDate>;
    protected code: Ref<string>;
    protected date: Ref<Date>;
    protected datetime: Datetime;
    protected year: Ref<number, number>;
    protected month: Ref<number, number>;
    protected day: Ref<number, number>;
    protected hour: Ref<number, number>;
    protected minute: Ref<number, number>;
    protected second: Ref<number, number>;
    /**
     * @param date Date for processing
     * @param type Output format type
     * @param code Country and language code
     */
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

// File: classes/ref/EffectScopeGlobal.d.ts
export declare class EffectScopeGlobal {
    /**
     * Run in global scope.
     * @param fn Target function
     */
    static run<T>(fn: () => T): T | undefined;
}

// File: classes/ref/EventRef.d.ts
import { RefOrNormal } from '../../types/refTypes';
import { ElementOrString, ElementOrWindow, EventItem, EventListenerDetail, EventOptions } from '@dxtmisha/functional-basic';
export declare class EventRef<E extends ElementOrWindow, O extends Event, D extends Record<string, any> = Record<string, any>> extends EventItem<E, O, D> {
    /**
     * @param elementSelector Element
     * @param elementSelectorControl Control element
     * @param type Event type
     * @param listener Notification receiver
     * @param options Event options
     * @param detail Event-dependent data
     */
    constructor(elementSelector?: RefOrNormal<ElementOrString<E> | undefined>, elementSelectorControl?: RefOrNormal<ElementOrString<HTMLElement>>, type?: string | string[], listener?: EventListenerDetail<O, D>, options?: EventOptions, detail?: D);
}

// File: classes/ref/GeoFlagRef.d.ts
import { ComputedRef } from 'vue';
import { GeoFlag, GeoFlagItem, GeoFlagNational } from '@dxtmisha/functional-basic';
import { RefOrNormal } from '../../types/refTypes';
export declare class GeoFlagRef {
    protected flag: ComputedRef<GeoFlag>;
    /** @param code Country/Language code */
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

// File: classes/ref/GeoIntlRef.d.ts
import { ComputedRef } from 'vue';
import { GeoDate, ItemValue, NumberOrString, NumberOrStringOrDate } from '@dxtmisha/functional-basic';
import { RefOrNormal } from '../../types/refTypes';
export declare class GeoIntlRef {
    private location;
    private intl;
    /** @param code Country/Language code */
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

// File: classes/ref/GeoRef.d.ts
import { ComputedRef, Ref } from 'vue';
import { GeoItemFull } from '@dxtmisha/functional-basic';
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

// File: classes/ref/GeoUnitRef.d.ts
import { ComputedRef, Ref } from 'vue';
import { GeoUnit, NumberOrString } from '@dxtmisha/functional-basic';
import { RefOrNormal } from '../../types/refTypes';
export declare class GeoUnitRef {
    protected location: Ref<string | undefined>;
    protected unitInstance: ComputedRef<GeoUnit>;
    /** @param code Country/Language code */
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

// File: classes/ref/ListDataRef.d.ts
import { RefOrNormal, RefType } from '../../types/refTypes';
import { ListDataFull, ListDataItem, ListList, ListListInput, ListNames, ListSelectedItem, ListSelectedList } from '../../types/listTypes';
import { ComputedRef } from 'vue';
export declare class ListDataRef {
    protected readonly list: RefOrNormal<ListListInput | undefined>;
    protected readonly focus?: RefType<ListSelectedItem | undefined> | undefined;
    protected readonly highlight?: RefType<string | undefined> | undefined;
    protected readonly highlightLengthStart?: RefType<number | undefined> | undefined;
    protected readonly filterMode?: RefType<boolean | undefined> | undefined;
    protected readonly selected?: RefType<ListSelectedList | undefined> | undefined;
    protected readonly keyValue?: RefType<string | undefined> | undefined;
    protected readonly keyLabel?: RefType<string | undefined> | undefined;
    protected readonly lite?: RefType<number | undefined> | undefined;
    protected readonly min: RefOrNormal<number | string | undefined>;
    protected readonly max: RefOrNormal<number | string | undefined>;
    protected readonly parent?: string | undefined;
    protected subList: Record<any, ListDataRef>;
    /**
     * @param list List data
     * @param focus Focused item
     * @param highlight Search text
     * @param highlightLengthStart Min length to highlight
     * @param filterMode Filter mode
     * @param selected Selected items
     * @param keyValue Item value key
     * @param keyLabel Item label key
     * @param lite Lite mode threshold
     * @param min Min selections
     * @param max Max selections
     * @param parent Parent identifier
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
    getSelectedByStep(step: number): ListDataItem | undefined;
    getSelectedNext(): ListSelectedItem | undefined;
    getSelectedPrev(): ListDataItem | undefined;
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

// File: classes/ref/RouterItemRef.d.ts
import { RouteLocationRaw, Router, _RouterClassic } from 'vue-router';
import { ConstrHrefProps } from '../../types/constructorTypes';
export declare class RouterItemRef {
    static get(): _RouterClassic;
    static getLink(name: string, params?: any, query?: any): string | undefined;
    static getHref(name?: string, params?: any, query?: any): ConstrHrefProps;
    static push(to: string | RouteLocationRaw): void;
    static set(router: Router): void;
    static setOneTime(router: Router): void;
    static rawToHref(to?: string | RouteLocationRaw): ConstrHrefProps;
}

// File: classes/ref/ScrollbarWidthRef.d.ts
import { Ref, ComputedRef } from 'vue';
export declare class ScrollbarWidthRef {
    readonly item: Ref<boolean | undefined, boolean | undefined>;
    readonly width: Ref<number, number>;
    constructor();
    readonly is: ComputedRef<boolean>;
}

// File: composables/ref/useApiAsyncRef.d.ts
import { ApiInstance, ApiData, ApiDataValidation, ApiErrorStorageList } from '@dxtmisha/functional-basic';
import { UseApiRef } from './useApiRef';
import { RefOrNormal, RefType } from '../../types/refTypes';
import { ApiOptions } from '../../types/apiTypes';
/**
 * Async API request for SSR.
 * @param path Request path
 * @param options Request options
 * @param reactivity Enable reactivity
 * @param conditions Conditions for execution
 * @param transformation Data transform
 * @param validateResponseContract Response validation
 * @param errorContract Error contracts
 * @param unmounted Clear on unmount
 * @param apiInstance API instance
 */
export declare function useApiAsyncRef<R, T = R>(path?: RefOrNormal<string | undefined>, options?: ApiOptions, reactivity?: boolean, conditions?: RefType<boolean>, transformation?: (data: T, isResponseContractValid?: ApiDataValidation) => ApiData<R>, validateResponseContract?: (data: T) => ApiDataValidation, errorContract?: ApiErrorStorageList, unmounted?: boolean, apiInstance?: ApiInstance): UseApiRef<R>;

// File: composables/ref/useApiDelete.d.ts
import { ApiData, ApiFetch } from '@dxtmisha/functional-basic';
import { UseApiRequestSetup } from './useApiRequest';
import { Ref } from 'vue';
export interface UseApiDeleteSetup<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>> extends Omit<UseApiRequestSetup<T, Request, Return>, 'method'> {
}
/**
 * API Delete request wrapper.
 * @param setup Request params
 */
export declare function useApiDelete<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>>(setup: UseApiDeleteSetup<T, Request, Return>): {
    loading: Ref<boolean, boolean>;
    send(request?: Request | undefined): Promise<Return | undefined>;
};

// File: composables/ref/useApiGet.d.ts
import { ApiData, ApiFetch } from '@dxtmisha/functional-basic';
import { UseApiRequestSetup } from './useApiRequest';
import { Ref } from 'vue';
export interface UseApiGetSetup<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>> extends Omit<UseApiRequestSetup<T, Request, Return>, 'method'> {
}
/**
 * API Get request wrapper.
 * @param setup Request params
 */
export declare function useApiGet<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>>(setup: UseApiGetSetup<T, Request, Return>): {
    loading: Ref<boolean, boolean>;
    send(request?: Request | undefined): Promise<Return | undefined>;
};

// File: composables/ref/useApiManagementAsyncRef.d.ts
import { ApiInstance, ArrayToItem, FormattersListColumns, FormattersOptionsList, SearchColumns, ApiDataValidation, SearchFormatList, ApiData, ApiErrorItem, ApiFetch } from '@dxtmisha/functional-basic';
import { ApiManagementGet, ApiManagementRequest, ApiManagementSearch, ApiManagementValue } from '../../types/apiTypes';
import { ComputedRef, Ref } from 'vue';
/**
 * Async API management for SSR.
 * @param propsGet GET settings
 * @param formattersOptions Formatting rules
 * @param searchOptions Search settings
 * @param postRequest POST settings
 * @param putRequest PUT settings
 * @param deleteRequest DELETE settings
 * @param action Post-mutation callback
 * @param apiInstance API instance
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

// File: composables/ref/useApiManagementRef.d.ts
import { Ref, ComputedRef } from 'vue';
import { FormattersOptionsList, ApiData, ApiInstance, ArrayToItem, SearchColumns, SearchFormatList, FormattersListColumns, ApiFetch, ApiDataValidation, ApiErrorItem } from '@dxtmisha/functional-basic';
import { ApiManagementGet, ApiManagementRequest, ApiManagementSearch, ApiManagementValue } from '../../types/apiTypes';
/**
 * Orchestrates API orchestration.
 * @param propsGet GET settings
 * @param formattersOptions Formatting rules
 * @param searchOptions Search settings
 * @param postRequest POST settings
 * @param putRequest PUT settings
 * @param deleteRequest DELETE settings
 * @param action Post-mutation callback
 * @param apiInstance API instance
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

// File: composables/ref/useApiPost.d.ts
import { ApiData, ApiFetch } from '@dxtmisha/functional-basic';
import { UseApiRequestSetup } from './useApiRequest';
import { Ref } from 'vue';
export interface UseApiPostSetup<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>> extends Omit<UseApiRequestSetup<T, Request, Return>, 'method'> {
}
/**
 * API Post request wrapper.
 * @param setup Request params
 */
export declare function useApiPost<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>>(setup: UseApiPostSetup<T, Request, Return>): {
    loading: Ref<boolean, boolean>;
    send(request?: Request | undefined): Promise<Return | undefined>;
};

// File: composables/ref/useApiPut.d.ts
import { ApiData, ApiFetch } from '@dxtmisha/functional-basic';
import { UseApiRequestSetup } from './useApiRequest';
import { Ref } from 'vue';
export interface UseApiPutSetup<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>> extends Omit<UseApiRequestSetup<T, Request, Return>, 'method'> {
}
/**
 * API Put request wrapper.
 * @param setup Request params
 */
export declare function useApiPut<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>>(setup: UseApiPutSetup<T, Request, Return>): {
    loading: Ref<boolean, boolean>;
    send(request?: Request | undefined): Promise<Return | undefined>;
};

// File: composables/ref/useApiRef.d.ts
import { ComputedRef, Ref } from 'vue';
import { ApiInstance, ApiData, ApiDataValidation, ApiErrorStorageList, ApiErrorItem } from '@dxtmisha/functional-basic';
import { ApiOptions } from '../../types/apiTypes';
import { RefOrNormal, RefType } from '../../types/refTypes';
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
 * Main reactive API composable.
 * @param path Request path
 * @param options Request options
 * @param reactivity Enable reactivity
 * @param conditions Conditions for execution
 * @param transformation Data transform
 * @param validateResponseContract Response validation
 * @param errorContract Error contracts
 * @param unmounted Clear on unmount
 * @param apiInstance API instance
 */
export declare function useApiRef<R, T = R>(path?: RefOrNormal<string | undefined>, options?: ApiOptions, reactivity?: boolean, conditions?: RefType<boolean>, transformation?: (data: T, isResponseContractValid?: ApiDataValidation) => ApiData<R>, validateResponseContract?: (data: T) => ApiDataValidation, errorContract?: ApiErrorStorageList, unmounted?: boolean, apiInstance?: ApiInstance): UseApiRef<R>;
export declare const setApiRefGlobalConditions: (conditions: RefType<any>) => void;

// File: composables/ref/useApiRequest.d.ts
import { ApiInstance, ApiMethodItem, ApiData, ApiFetch, ApiErrorStorageList, ApiDataValidation } from '@dxtmisha/functional-basic';
import { ApiOptions } from '../../types/apiTypes';
import { RefOrNormal } from '../../types/refTypes';
import { Ref } from 'vue';
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
/**
 * Use API request.
 * @param setup Request params
 */
export declare function useApiRequest<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>>({ path, method, action, transformation, validateRequestContract, validateResponseContract, errorContract, toData, options, apiInstance }: UseApiRequestSetup<T, Request, Return>): {
    loading: Ref<boolean, boolean>;
    send(request?: Request): Promise<Return | undefined>;
};

// File: composables/ref/useBroadcastValueRef.d.ts
import { Ref } from 'vue';
type BroadcastValueItem<T> = T | string | undefined;
/**
 * Manage data between browser tabs.
 * @param name Value name
 * @param defaultValue Default value
 */
export declare function useBroadcastValueRef<T>(name: string, defaultValue?: T | string | (() => (T | string))): Ref<BroadcastValueItem<T>>;
export {};

// File: composables/ref/useCookieRef.d.ts
import { Ref } from 'vue';
import { CookieOptions } from '@dxtmisha/functional-basic';
/**
 * Manage cookie state.
 * @param name Cookie name
 * @param defaultValue Default value
 * @param options Cookie options
 */
export declare function useCookieRef<T>(name: string, defaultValue?: T | string | (() => (T | string)), options?: CookieOptions): Ref<T | string | undefined>;

// File: composables/ref/useFormattersRef.d.ts
import { FormattersListProp, FormattersOptionsList, FormattersReturn } from '@dxtmisha/functional-basic';
import { RefType } from '../../types/refTypes';
import { ComputedRef } from 'vue';
/**
 * Reactive data list formatting.
 * @param list Source list
 * @param options Format settings
 */
export declare function useFormattersRef<Options extends FormattersOptionsList = FormattersOptionsList, List extends FormattersListProp = FormattersListProp>(list: RefType<List | undefined>, options: Options): {
    listFormat: ComputedRef<FormattersReturn<List, Options>>;
    length: ComputedRef<number>;
};

// File: composables/ref/useGeoIntlRef.d.ts
import { GeoIntlRef } from '../../classes/ref/GeoIntlRef';
export declare function useGeoIntlRef(): GeoIntlRef;

// File: composables/ref/useGeoUnitRef.d.ts
import { GeoUnitRef } from '../../classes/ref/GeoUnitRef';
export declare function useGeoUnitRef(): GeoUnitRef;

// File: composables/ref/useHashRef.d.ts
import { ShallowRef } from 'vue';
/**
 * Manage hash state.
 * @param name Value name
 * @param defaultValue Default value
 */
export declare function useHashRef<T>(name: string, defaultValue?: T | (() => T)): ShallowRef<T>;

// File: composables/ref/useLazyItemByMarginRef.d.ts
import { useLazyRef, LazyItem } from './useLazyRef';
import { RefType } from '../../types/refTypes';
import { ShallowRef } from 'vue';
export type LazyItemByMargin = {
    rootMargin: string;
    item: ReturnType<typeof useLazyRef>;
};
/**
 * Track element appearance by margin.
 * @param element Target element
 * @param rootMargin Observer margin
 */
export declare const useLazyItemByMarginRef: (element: RefType<HTMLElement | undefined>, rootMargin?: string) => {
    lazyItemStatus: ShallowRef<boolean, boolean>;
    readonly lazyItem: LazyItem | undefined;
};

// File: composables/ref/useLazyRef.d.ts
import { Ref, ShallowRef } from 'vue';
export type LazyItem = {
    status: ShallowRef<boolean>;
    ratio: ShallowRef<number>;
    entry: ShallowRef<IntersectionObserverEntry | undefined>;
    stopWatch: () => void;
};
export type LazyList = Record<string, LazyItem>;
/** Track element appearance. */
export declare const useLazyRef: (options?: IntersectionObserverInit) => {
    intersectionObserver: IntersectionObserver | undefined;
    getItem(element?: HTMLElement): LazyItem | undefined;
    addLazyItem(element: Ref<HTMLElement | undefined>): ShallowRef<boolean, boolean>;
    removeLazyItem: (element?: HTMLElement) => void;
    disconnectLazy: () => void | undefined;
};

// File: composables/ref/useLoadingRef.d.ts
import { ShallowRef } from 'vue';
export declare function useLoadingRef(): ShallowRef<boolean, boolean>;

// File: composables/ref/useMeta.d.ts
import { MetaRobots, Meta } from '@dxtmisha/functional-basic';
import { Ref } from 'vue';
/** Manages meta tags reactively. */
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
    init(): any;
    destroyExecute?(): void;
}>;

// File: composables/ref/useQueryRef.d.ts
import { ShallowRef } from 'vue';
/**
 * Manage query parameters.
 * @param name Value name
 * @param defaultValue Default value
 */
export declare function useQueryRef<T>(name: string, defaultValue?: T | (() => T)): ShallowRef<T>;

// File: composables/ref/useRouterList.d.ts
import { Ref, ComputedRef } from 'vue';
import { NumberOrString } from '@dxtmisha/functional-basic';
import { ConstrBind } from '../../types/constructorTypes';
import { ListDataBasic } from '../../types/listTypes';
import { RefType } from '../../types/refTypes';
/**
 * Router link list management.
 * @param list Items list
 * @param selected Selected item
 * @param hasTo Has 'to' prop
 */
export declare const useRouterList: <T extends ListDataBasic>(list: RefType<ConstrBind<T>[] | undefined>, selected?: Ref<string> | string, hasTo?: boolean) => {
    item: ComputedRef<T | undefined>;
    selected: Ref<string, string>;
    label: ComputedRef<NumberOrString>;
    list: ComputedRef<ConstrBind<T>[]>;
    to: (name?: string) => void;
    toMain(): void;
};

// File: composables/ref/useSearchRef.d.ts
import { Ref, ComputedRef } from 'vue';
import { SearchColumns, SearchFormatList, SearchItem, SearchOptions } from '@dxtmisha/functional-basic';
import { SearchColumnsInput, SearchListInput } from '../../types/searchTypes';
/**
 * Handle search logic.
 * @param list Items list
 * @param columns Search columns
 * @param value Search string
 * @param options Search options
 */
export declare function useSearchRef<T extends SearchItem, K extends SearchColumns<T>>(list: SearchListInput<T>, columns?: SearchColumnsInput<T, K>, value?: Ref<string>, options?: SearchOptions): {
    isSearch: ComputedRef<boolean>;
    search: Ref<string, string>;
    loading: Ref<boolean, boolean>;
    listSearch: ComputedRef<SearchFormatList<T, K>>;
    length: ComputedRef<number>;
};

// File: composables/ref/useSearchValueRef.d.ts
import { Ref } from 'vue';
import { SearchList, SearchColumns, SearchItem } from '@dxtmisha/functional-basic';
/**
 * Manage search value state.
 * @param item Search instance
 * @param value Reactive search string
 */
export declare function useSearchValueRef<T extends SearchItem, K extends SearchColumns<T>>(item: SearchList<T, K>, value?: Ref<string>): {
    search: Ref<string, string>;
    searchDelay: Ref<string, string>;
    loading: Ref<boolean, boolean>;
};

// File: composables/ref/useSessionRef.d.ts
import { Ref } from 'vue';
/**
 * Manage session state.
 * @param name Value name
 * @param defaultValue Default value
 */
export declare function useSessionRef<T>(name: string, defaultValue?: T | (() => T)): Ref<T | undefined>;

// File: composables/ref/useStorageRef.d.ts
import { Ref } from 'vue';
/**
 * Manage local storage.
 * @param name Value name
 * @param defaultValue Default value
 * @param cache Cache time
 */
export declare function useStorageRef<T>(name: string, defaultValue?: T | (() => T), cache?: number): Ref<T | undefined>;

// File: composables/ref/useTranslateRef.d.ts
import { ShallowRef } from 'vue';
import { TranslateInstance, TranslateList } from '@dxtmisha/functional-basic';
/**
 * Translated text by keys.
 * @param names Key strings/arrays
 * @param translateInstance Instance
 */
export declare function useTranslateRef<T extends (string | string[])[]>(names: T, translateInstance?: TranslateInstance): ShallowRef<TranslateList<T>>;
export declare const t: <T extends string[]>(names: T) => ShallowRef<TranslateList<T>>;

// File: flags.d.ts
export declare const uiMakeFlags: () => void;

// File: functions/basic.d.ts
export * from '@dxtmisha/functional-basic';

// File: functions/computedAsync.d.ts
import { ComputedRef, DebuggerOptions } from 'vue';
/**
 * Handle async computed properties.
 * @param getter Async getter
 * @param initialState Initial value
 * @param ignore Values to ignore
 * @param debugOptions Debug options
 */
export declare function computedAsync<R>(getter: (() => Promise<R>) | (() => R) | R, initialState?: (() => R) | R, ignore?: R, debugOptions?: DebuggerOptions): ComputedRef<R | undefined>;

// File: functions/computedByLanguage.d.ts
import { ComputedGetter, ComputedRef, DebuggerOptions } from 'vue';
/**
 * Language-aware computed property.
 * @param getter Main getter
 * @param getterNone Fallback
 * @param conditions Condition to run
 * @param debugOptions Debug options
 */
export declare function computedByLanguage<T, R extends (T | undefined) = T | undefined>(getter: ComputedGetter<R>, getterNone?: R | (() => R), conditions?: () => boolean, debugOptions?: DebuggerOptions): ComputedRef<R>;

// File: functions/computedEternity.d.ts
import { Ref } from 'vue';
/**
 * Computed computed-on-demand.
 * @param getter Value getter
 * @param initialState Initial value
 */
export declare function computedEternity<T>(getter: () => Promise<T> | T, initialState?: (() => T) | T): Ref<T, T>;

// File: functions/dxtFunctionalPlugin.d.ts
import { Plugin } from 'vue';
import { InputSocialIcons } from '@dxtmisha/media';
import { ApiConfig, ErrorCenterCauseList, ErrorCenterHandlerCallback, ErrorCenterHandlerList, IconsConfig, TranslateConfig } from '@dxtmisha/functional-basic';
import { Router } from 'vue-router';
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
/** Plugin for global services. */
export declare const dxtFunctionalPlugin: Plugin;

// File: functions/executeUse.d.ts
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
 * Managed singleton factory.
 * @param callback Init function
 * @param type Access strategy
 */
export declare function executeUse<R, O extends any[], RI extends ExecuteUseReturn<R> = ExecuteUseReturn<R>>(callback: (...args: O) => R, type?: ExecuteUseType): ((...args: O) => RI) | (() => RI);
export declare function executeUseGlobal<R>(callback: () => R): any;
export declare function executeUseProvide<R, O extends any[]>(callback: (...args: O) => R): any;
export declare function executeUseLocal<R, O extends any[]>(callback: (...args: O) => R): any;
export declare function executeUseGlobalInit(): void;

// File: functions/getInject.d.ts
export declare function getInject<T>(name: string): T | undefined;

// File: functions/getOptions.d.ts
import { ApiFetch } from '@dxtmisha/functional-basic';
import { ApiOptions } from '../types/apiTypes';
import { RefOrNormal } from '../types/refTypes';
export declare const getOptions: (options?: ApiOptions) => RefOrNormal<ApiFetch>;

// File: functions/ref/executeFunctionRef.d.ts
import { RefOrNormalOrFunction } from '../../types/refTypes';
/**
 * Execute function and unwrap result.
 * @param data Data or function
 */
export declare function executeFunctionRef<T>(data: RefOrNormalOrFunction<T>): T;

// File: functions/ref/getApiErrorRef.d.ts
import { ComputedRef } from 'vue';
import { ApiData, ApiErrorItem } from '@dxtmisha/functional-basic';
import { RefType } from '../../types/refTypes';
/**
 * Get error item for API.
 * @param data Data
 */
export declare function getApiErrorRef<R>(data: RefType<ApiData<R> | undefined>): ComputedRef<ApiErrorItem | undefined>;

// File: functions/ref/getBindRef.d.ts
import { ComputedRef } from 'vue';
import { ItemList } from '@dxtmisha/functional-basic';
import { RefOrNormal } from '../../types/refTypes';
/**
 * Generate subcomponent props.
 * @param value Input value
 * @param nameExtra Extra param
 * @param name Property name
 */
export declare function getBindRef<T, R extends ItemList>(value: RefOrNormal<T | R> | undefined, nameExtra?: RefOrNormal<ItemList> | string, name?: string): ComputedRef<R>;

// File: functions/ref/getRef.d.ts
import { RefOrNormal } from '../../types/refTypes';
/**
 * Extract ref value.
 * @param item Ref or value
 */
export declare function getRef<T>(item: RefOrNormal<T>): T;

// File: functions/ref/render.d.ts
import { VNode } from 'vue';
import { ItemList } from '@dxtmisha/functional-basic';
import { RawChildren, RawSlots } from '../../types/refTypes';
/**
 * Get cached component data.
 * @param name Component name
 * @param props Props
 * @param children Children
 * @param index Key
 */
export declare function render<T extends ItemList>(name: string | any, props?: T, children?: RawChildren | RawSlots, index?: string): VNode;

// File: functions/ref/setRef.d.ts
import { Ref } from 'vue';
/**
 * Set reactive value.
 * @param item Ref
 * @param value Value
 */
export declare function setRef<T>(item: Ref<T>, value: T): void;

// File: functions/ref/toRefItem.d.ts
import { Ref } from 'vue';
import { RefOrNormal } from '../../types/refTypes';
/**
 * Wrap item in Ref.
 * @param item Value
 */
export declare function toRefItem<T>(item: RefOrNormal<T>): Ref<T>;

// File: functions/render/getBind.d.ts
import { ItemList } from '@dxtmisha/functional-basic';
import { ConstrBind } from '../../types/constructorTypes';
/**
 * Generate subcomponent props.
 * @param value Input value
 * @param nameExtra Extra param
 * @param name Property name
 * @param except Exclude key rule
 */
export declare function getBind<T, R extends ItemList>(value: T | R | undefined | null, nameExtra?: ItemList | string, name?: string, except?: boolean): ConstrBind<R>;

// File: functions/render/getClassName.d.ts
import { ItemList } from '@dxtmisha/functional-basic';
/**
 * Extract class name.
 * @param props Props
 */
export declare function getClassName<T extends ItemList>(props?: T): string | undefined;

// File: functions/render/getIndexForRender.d.ts
import { ItemList } from '@dxtmisha/functional-basic';
/**
 * Generate component index.
 * @param name Name
 * @param props Props
 * @param index Key
 */
export declare function getIndexForRender<T extends ItemList>(name: string | any, props?: T, index?: string): string | undefined;

// File: functions/toBind.d.ts
import { ItemList } from '@dxtmisha/functional-basic';
import { ConstrBind } from '../types/constructorTypes';
/**
 * Merge props.
 * @param extra Extra props
 * @param value Input props
 */
export declare function toBind<R extends ItemList = ItemList>(extra: ItemList, value: ItemList): ConstrBind<R>;

// File: functions/toBinds.d.ts
import { ItemList } from '@dxtmisha/functional-basic';
import { ConstrBind } from '../types/constructorTypes';
/**
 * Merge multiple props.
 * @param values Props list
 */
export declare function toBinds<R extends ItemList = ItemList>(...values: (ItemList | undefined)[]): ConstrBind<R>;

// File: library.d.ts
export * from './classes/design/DesignAbstract';
export * from './classes/design/DesignAsyncAbstract';
export * from './classes/design/DesignChanged';
export * from './classes/design/DesignComp';
export * from './classes/design/DesignComponents';
export * from './classes/design/DesignConstructorAbstract';
export * from './classes/ref/DatetimeRef';
export * from './classes/ref/EffectScopeGlobal';
export * from './classes/ref/EventRef';
export * from './classes/ref/GeoFlagRef';
export * from './classes/ref/GeoIntlRef';
export * from './classes/ref/GeoRef';
export * from './classes/ref/GeoUnitRef';
export * from './classes/ref/ListDataRef';
export * from './classes/ref/RouterItemRef';
export * from './classes/ref/ScrollbarWidthRef';
export * from './composables/ref/useApiAsyncRef';
export * from './composables/ref/useApiDelete';
export * from './composables/ref/useApiGet';
export * from './composables/ref/useApiManagementAsyncRef';
export * from './composables/ref/useApiManagementRef';
export * from './composables/ref/useApiPost';
export * from './composables/ref/useApiPut';
export * from './composables/ref/useApiRef';
export * from './composables/ref/useApiRequest';
export * from './composables/ref/useBroadcastValueRef';
export * from './composables/ref/useCookieRef';
export * from './composables/ref/useFormattersRef';
export * from './composables/ref/useGeoIntlRef';
export * from './composables/ref/useGeoUnitRef';
export * from './composables/ref/useHashRef';
export * from './composables/ref/useLazyItemByMarginRef';
export * from './composables/ref/useLazyRef';
export * from './composables/ref/useLoadingRef';
export * from './composables/ref/useMeta';
export * from './composables/ref/useQueryRef';
export * from './composables/ref/useRouterList';
export * from './composables/ref/useSearchRef';
export * from './composables/ref/useSearchValueRef';
export * from './composables/ref/useSessionRef';
export * from './composables/ref/useStorageRef';
export * from './composables/ref/useTranslateRef';
export * from './functions/basic';
export * from './functions/computedAsync';
export * from './functions/computedByLanguage';
export * from './functions/computedEternity';
export * from './functions/dxtFunctionalPlugin';
export * from './functions/executeUse';
export * from './functions/getInject';
export * from './functions/getOptions';
export * from './functions/ref/executeFunctionRef';
export * from './functions/ref/getApiErrorRef';
export * from './functions/ref/getBindRef';
export * from './functions/ref/getRef';
export * from './functions/ref/render';
export * from './functions/ref/setRef';
export * from './functions/ref/toRefItem';
export * from './functions/render/getBind';
export * from './functions/render/getClassName';
export * from './functions/render/getIndexForRender';
export * from './functions/toBind';
export * from './functions/toBinds';
export * from './types/apiTypes';
export * from './types/constructorTypes';
export * from './types/listTypes';
export * from './types/refTypes';
export * from './types/searchTypes';

// File: types/apiTypes.d.ts
import { ApiData, ApiDataValidation, ApiDefaultValue, ApiErrorStorageList, ApiFetch, ApiMethodItem, SearchColumns, SearchItem, SearchOptions } from '@dxtmisha/functional-basic';
import { RefOrNormal, RefType } from './refTypes';
import { Ref } from 'vue';
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

// File: types/constructorTypes.d.ts
import { Ref, PropType, ComputedRef } from 'vue';
import { Undefined } from '@dxtmisha/functional-basic';
import { RefOrNormal, RefType } from './refTypes';
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
export type ConstrRegistration = { flag?: boolean; translate?: Record<string, string>; };
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

// File: types/listTypes.d.ts
import { NumberOrString, NumberOrStringOrBoolean } from '@dxtmisha/functional-basic';
import { ConstrBind } from './constructorTypes';
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

// File: types/refTypes.d.ts
import { ComputedRef, Ref, VNode, VNodeArrayChildren } from 'vue';
export type RefType<T> = ComputedRef<T> | Ref<T>;
export type RefUndefined<T> = RefType<T | undefined>;
export type RefOrNormal<T> = RefType<T> | T;
export type RefOrNormalOrFunction<T> = RefOrNormal<T> | (() => RefOrNormal<T>);
export type RawChildren = string | number | boolean | VNode | VNodeArrayChildren | (() => any);
export type RawSlots = { [name: string]: unknown; $stable?: boolean; };

// File: types/searchTypes.d.ts
import { RefOrNormal } from './refTypes';
import { SearchColumns, SearchItem, SearchListValue } from '@dxtmisha/functional-basic';
export type SearchListValueRef<T extends SearchItem> = RefOrNormal<SearchListValue<T>>;
export type SearchListInput<T extends SearchItem> = SearchListValueRef<T> | (() => SearchListValueRef<T>);
export type SearchColumnsRef<T extends SearchItem, K extends SearchColumns<T>> = RefOrNormal<K>;
export type SearchColumnsInput<T extends SearchItem, K extends SearchColumns<T>> = SearchColumnsRef<T, K> | (() => SearchColumnsRef<T, K>);