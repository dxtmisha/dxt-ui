import { ApiFetch } from '@dxtmisha/functional-basic';
import { ApiMethodItem } from '@dxtmisha/functional-basic';
import { ComputedGetter } from 'vue';
import { ComputedRef } from 'vue';
import { CookieOptions } from '@dxtmisha/functional-basic';
import { Datetime } from '@dxtmisha/functional-basic';
import { DebuggerOptions } from 'vue';
import { ElementOrString } from '@dxtmisha/functional-basic';
import { ElementOrWindow } from '@dxtmisha/functional-basic';
import { EventItem } from '@dxtmisha/functional-basic';
import { EventListenerDetail } from '@dxtmisha/functional-basic';
import { EventOptions } from '@dxtmisha/functional-basic';
import { GeoDate } from '@dxtmisha/functional-basic';
import { GeoFirstDay } from '@dxtmisha/functional-basic';
import { GeoFlag } from '@dxtmisha/functional-basic';
import { GeoFlagItem } from '@dxtmisha/functional-basic';
import { GeoFlagNational } from '@dxtmisha/functional-basic';
import { GeoHours } from '@dxtmisha/functional-basic';
import { GeoItemFull } from '@dxtmisha/functional-basic';
import { ItemList } from '@dxtmisha/functional-basic';
import { ItemValue } from '@dxtmisha/functional-basic';
import { Meta } from '@dxtmisha/functional-basic';
import { MetaRobots } from '@dxtmisha/functional-basic';
import { NumberOrString } from '@dxtmisha/functional-basic';
import { NumberOrStringOrBoolean } from '@dxtmisha/functional-basic';
import { NumberOrStringOrDate } from '@dxtmisha/functional-basic';
import { PropType } from 'vue';
import { Ref } from 'vue';
import { RouteLocationRaw } from 'vue-router';
import { Router } from 'vue-router';
import { ShallowRef } from 'vue';
import { ToRefs } from 'vue';
import { TranslateList } from '@dxtmisha/functional-basic';
import { Undefined } from '@dxtmisha/functional-basic';
import { VNode } from 'vue';
import { VNodeArrayChildren } from 'vue';

declare type ApiOptions = ApiMethodItem | RefOrNormal<ApiFetch>;

declare type BroadcastValueItem<T> = T | string | undefined;

/**
 * Creates a computed property that can handle asynchronous getters.
 *
 * Создаёт вычисляемое свойство, которое может обрабатывать асинхронные геттеры.
 * @param getter Asynchronous function, synchronous function, or direct value to compute the result/
 * Асинхронная функция, синхронная функция или прямое значение для вычисления результата
 * @param debugOptions Used for debugging reactive computations. Supported by Vue.js library/
 * Используется для отладки реактивных вычислений. Поддерживается библиотекой Vue.js
 */
export declare function computedAsync<R>(getter: (() => Promise<R>) | (() => R) | R, debugOptions?: DebuggerOptions): ComputedRef<R>;

/**
 * Метод `computedByLanguage` предоставляет возможность создания реактивного свойства `computed`,
 * значение которого изменяется в зависимости от текущего языка и определённых условий.
 * @param getter Функция, которая предоставляет основное значение, зависящее от текущего языка
 * или других факторов. Этот `getter` будет вызываться для получения актуального значения
 * @param getterNone Альтернативное значение, которое будет возвращено в случаях, если:
 *   Условия не выполнены,
 *   Значение, возвращённое `getter`, равно `undefined`
 * @param conditions Условие, определяющее, когда должен быть вызван основной `getter`.
 * Если функция отсутствует, условие считается выполненным всегда
 * @param debugOptions Используется для отладки реактивных вычислений.
 * Поддерживается библиотекой Vue.js
 */
export declare function computedByLanguage<T, R extends (T | undefined)>(getter: ComputedGetter<R>, getterNone?: R | (() => R), conditions?: () => boolean, debugOptions?: DebuggerOptions): ComputedRef<R>;

/**
 * Constructor bind type for component binding with class and style support/
 * Тип привязки конструктора для привязки компонента с поддержкой классов и стилей
 */
export declare type ConstrBind<T> = T & Record<string, any> & {
    /** Optional key/ Опциональный ключ */
    key?: string;
    /** Optional CSS classes/ Опциональные CSS классы */
    class?: ConstrClass;
    /** Optional styles/ Опциональные стили */
    style?: ConstrStyles;
};

/**
 * Constructor class type supporting strings, arrays, and objects/
 * Тип класса конструктора, поддерживающий строки, массивы и объекты
 */
export declare type ConstrClass = string | (string | ConstrClass | Undefined)[] | ConstrClassObject;

/** Constructor classes with required main class and additional class list/ Классы конструктора с обязательным основным классом и дополнительным списком классов */
export declare type ConstrClasses = {
    main: ConstrClass;
} & ConstrClassList;

/** Record type for mapping class names to class definitions/ Тип записи для сопоставления имен классов с определениями классов */
export declare type ConstrClassList = Record<string, ConstrClass>;

/** Object type for CSS class names with boolean values/ Тип объекта для CSS классов с булевыми значениями */
export declare type ConstrClassObject = Record<string, boolean>;

/** Generic record type for constructor components/ Дженерик тип записи для компонентов конструктора */
export declare type ConstrComponent = Record<string, any>;

/**
 * Constructor component modification type with reactive or normal values/
 * Тип модификации компонента конструктора с реактивными или обычными значениями
 */
export declare type ConstrComponentMod<P extends ConstrItem> = ConstrItem | {
    [K in keyof P]?: RefOrNormal<P[K]>;
};

/**
 * Constructor emit type with proper event handler signatures/
 * Тип emit конструктора с правильными сигнатурами обработчиков событий
 */
export declare type ConstrEmit<T extends ConstrItem = ConstrItem> = UnionToIntersection<ConstrEmitItem<{
    [K in keyof T]: (evt: K, ...args: T[K]) => void;
}>>;

/** Extract emit item type from constructor item/ Извлечение типа элемента emit из элемента конструктора */
export declare type ConstrEmitItem<T extends ConstrItem> = T[keyof T];

/**
 * Props for link handling/ Пропсы для обработки ссылок
 */
export declare type ConstrHrefProps = {
    /** Hyperlink reference/ Гиперссылка */
    href?: string;
};

/** Generic record type for constructor items/ Дженерик тип записи для элементов конструктора */
export declare type ConstrItem = Record<string, any>;

/**
 * Constructor options interface for component configuration/
 * Интерфейс опций конструктора для конфигурации компонента
 */
export declare type ConstrOptions<COMP extends ConstrComponent, EMITS extends ConstrItem, P extends ConstrItem> = {
    /** Optional components configuration/ Опциональная конфигурация компонентов */
    components?: COMP;
    /** Optional component modifications/ Опциональные модификации компонента */
    compMod?: ConstrComponentMod<P>;
    /** Optional emit handlers/ Опциональные обработчики emit */
    emits?: ConstrEmit<EMITS>;
    /** Optional reactive classes/ Опциональные реактивные классы */
    classes?: RefType<ConstrClasses>;
    /** Optional reactive styles/ Опциональные реактивные стили */
    styles?: RefType<ConstrStyles>;
};

/** Constructor prop item type with options or direct PropType/ Тип элемента prop конструктора с опциями или прямым PropType */
export declare type ConstrPropItem<T = any> = ConstrPropItemOptions<T> | PropType<T>;

/** Constructor prop item options for Vue prop definitions/ Опции элемента prop конструктора для определений Vue prop */
export declare type ConstrPropItemOptions<T = any> = {
    /** Vue prop type/ Тип Vue prop */
    type?: PropType<T>;
    /** Required flag/ Флаг обязательности */
    required?: boolean;
    /** Default value/ Значение по умолчанию */
    default?: any;
    /** Custom validator function/ Пользовательская функция валидации */
    validator?(value: any, props: any): boolean;
};

/** Constructor props type for component prop definitions/ Тип props конструктора для определений props компонента */
export declare type ConstrProps<P = Record<string, any>> = {
    [K in keyof P]: ConstrPropItem<P[K]>;
};

/** Constructor registration configuration/ Конфигурация регистрации конструктора */
export declare type ConstrRegistration = {
    /** Optional flag for registration/ Опциональный флаг для регистрации */
    flag?: boolean;
    /** Optional translation map/ Опциональная карта переводов */
    translate?: Record<string, string>;
};

/**
 * Constructor setup interface for component initialization/
 * Интерфейс настройки конструктора для инициализации компонента
 */
export declare type ConstrSetup<E extends Element, CLASSES extends ConstrClasses, SETUP extends ConstrItem> = {
    /** Component name/ Имя компонента */
    name: string;
    /** Reactive element reference/ Реактивная ссылка на элемент */
    element: Ref<E | undefined>;
    /** Reactive classes/ Реактивные классы */
    classes: RefType<CLASSES>;
    /** Reactive styles/ Реактивные стили */
    styles: RefType<ConstrStyles>;
} & SETUP;

/**
 * Constructor styles type supporting objects and arrays of style definitions/
 * Тип стилей конструктора, поддерживающий объекты и массивы определений стилей
 */
export declare type ConstrStyles = Record<string, ConstrStylesItem> | ConstrStyles[];

/** Constructor style item type for individual style properties/ Тип элемента стиля конструктора для отдельных свойств стиля */
export declare type ConstrStylesItem = string | null;

/** Constructor value wrapper with optional value property/ Обертка значения конструктора с опциональным свойством value */
export declare type ConstrValue<T = any> = {
    /** Optional value of type T/ Опциональное значение типа T */
    value?: T;
};

/**
 * A class for working with dates.
 *
 * Класс для работы с датами.
 */
export declare class DatetimeRef {
    protected item: Ref<NumberOrStringOrDate>;
    protected type: Ref<GeoDate>;
    protected code: Ref<string>;
    protected date: Ref<Date>;
    protected datetime: Datetime;
    protected year: ComputedRef<number>;
    protected month: ComputedRef<number>;
    protected day: ComputedRef<number>;
    protected hour: ComputedRef<number>;
    protected minute: ComputedRef<number>;
    protected second: ComputedRef<number>;
    /**
     * Constructor
     * @param date date for processing. дата для обработки
     * @param type type of date format for output. тип формата даты вывода
     * @param code country and language code. код страны и языка
     */
    constructor(date: RefOrNormal<NumberOrStringOrDate>, type?: RefOrNormal<GeoDate>, code?: RefOrNormal<string>);
    /**
     * Returns the basic data for the date.
     *
     * Возвращает основные данные для даты.
     */
    getItem(): RefOrNormal<NumberOrStringOrDate>;
    /**
     * Returns a Date object.
     *
     * Возвращает объект Date.
     */
    getDate(): Ref<Date>;
    /**
     * Obtaining an object of the basic Datetime class.
     *
     * Получение объекта основного класса Datetime.
     */
    getDatetime(): Datetime;
    /**
     * Returns the format of hours.
     *
     * Возвращает формат часов.
     */
    getHoursType(): ComputedRef<GeoHours>;
    /**
     * Returns the code of the first day of the week.
     *
     * Возвращает код первого дня недели.
     */
    getFirstDayCode(): ComputedRef<GeoFirstDay>;
    /**
     * The method returns the year of the specified date according to local time.
     *
     * Метод возвращает год указанной даты по местному времени.
     */
    getYear(): ComputedRef<number>;
    /**
     * The method returns the month in the specified date according to local time,
     * as a zero-based value.
     *
     * Метод возвращает месяц указанной даты по местному времени, нумерация
     * месяцев начинается с нуля для первого месяца в году.
     */
    getMonth(): ComputedRef<number>;
    /**
     * The method returns the day of the month for the specified date according to local time.
     *
     * Метод возвращает день месяца указанной даты по местному времени.
     */
    getDay(): ComputedRef<number>;
    /**
     * The method returns the hour for the specified date, according to local time.
     *
     * Метод возвращает часы указанной даты по местному времени.
     */
    getHour(): ComputedRef<number>;
    /**
     * The method returns the minutes in the specified date according to local time.
     *
     * Метод возвращает минуты указанной даты по местному времени.
     */
    getMinute(): ComputedRef<number>;
    /**
     * The method returns the seconds in the specified date according to local time.
     *
     * Метод возвращает секунды указанной даты по местному времени.
     */
    getSecond(): ComputedRef<number>;
    /**
     * Returns the last day of the week.
     *
     * Возвращает последний день недели.
     */
    getMaxDay(): ComputedRef<number>;
    /**
     * Enables language-sensitive date and time formatting.
     *
     * Конструктором объектов, включающих языка-зависимое форматирование даты и времени.
     * @param type type of date format for output. тип формата даты вывода
     * @param styleOptions the representation of the month. представление месяца
     */
    locale(type?: GeoDate, styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions): ComputedRef<string>;
    /**
     * Output of standard data.
     *
     * Вывод стандартных данных.
     * @param timeZone add time zone. добавить временную зону
     */
    standard(timeZone?: boolean): ComputedRef<string>;
}

/**
 * Base class for working with the constructor.
 *
 * Базовый класс для работы с конструктором.
 */
export declare abstract class DesignAbstract<T extends Record<string, any>, C extends Record<string, any>> {
    protected readonly props: T;
    protected readonly callback?: ((event: C) => void) | undefined;
    protected readonly event: C;
    protected readonly changed: DesignChanged<T>;
    /**
     * Constructor
     * @param props base data/ базовые данные
     * @param callback callback function when the value changes/
     * функция обратного вызова при изменении значения
     * @param changed base data/ данный для слежения
     */
    constructor(props: T, callback?: ((event: C) => void) | undefined, changed?: string[]);
    /**
     * Calls the callback function.
     *
     * Вызывает функцию обратного вызова.
     * @param compelled forces data to update/ вынуждает обновлять данные
     */
    make(compelled?: boolean): this;
    /**
     * Checks if there are values in the property.
     *
     * Проверяет, есть ли значения в свойстве.
     * @param name property names/ названия свойств
     */
    protected is<K extends keyof T>(name: K): boolean;
    /**
     * Checks if the value has been changed by the property name.
     *
     * Проверяет, было ли изменено значение по названию свойства.
     * @param name property names/ названия свойств
     * @param nameProp names of properties of the input variable/ названия свойств входной переменной
     */
    protected isChanged<K extends keyof C & string, KT extends keyof T & string>(name: K, nameProp?: KT | KT[]): boolean;
    /**
     * Calls the callback function.
     *
     * Вызывает функцию обратного вызова.
     * @param compelled forces data to update/ вынуждает обновлять данные
     */
    makeCallback(compelled?: boolean): void;
    /**
     * The function calls an image call.
     *
     * Функция вызывает образный вызов.
     */
    protected makeCallbackItem(): void;
    /**
     * A function that is called each time the input values are changed.
     *
     * Функция, которая вызывается каждый раз, когда изменяются входные значения.
     */
    protected abstract initEvent(): void;
}

/**
 * Base class for working with the constructor.
 *
 * Базовый класс для работы с конструктором.
 */
export declare abstract class DesignAsyncAbstract<T extends Record<string, any>, C extends Record<string, any>> extends DesignAbstract<T, C> {
    /**
     * Calls the callback function.
     *
     * Вызывает функцию обратного вызова.
     * @param compelled forces data to update/ вынуждает обновлять данные
     */
    make(compelled?: boolean): this;
    /**
     * Calls the callback function.
     *
     * Вызывает функцию обратного вызова.
     * @param compelled forces data to update/ вынуждает обновлять данные
     */
    makeCallback(compelled?: boolean): Promise<void>;
    /**
     * A function that is called each time the input values are changed.
     *
     * Функция, которая вызывается каждый раз, когда изменяются входные значения.
     */
    protected abstract initEvent(): Promise<void>;
}

/**
 * The class checks the values that have been edited.
 *
 * Класс проверяет значения, которые были отредактированы.
 */
export declare class DesignChanged<T extends Record<string, any>> {
    protected readonly props: T;
    protected readonly watch: string[];
    private readonly cache;
    /**
     * Constructor
     * @param props base data/ базовые данные
     * @param watch data for tracking/ данные для слежения
     */
    constructor(props: T, watch?: string[]);
    /**
     * Checks if the value has been updated.
     *
     * Проверяет, обновлено ли значение.
     * @param name property name/ название свойства
     */
    is(name: string | string[]): boolean;
    /**
     * Checks if there are changes in the data.
     *
     * Проверяет, есть ли изменения в данных.
     */
    isChanged(): boolean;
    /**
     * Updates all values.
     *
     * Обновляет все значения.
     */
    update(): void;
    /**
     * Checking additional data.
     *
     * Проверка дополнительных данных.
     * @param name property name/ название свойства
     */
    protected isDifferent(name: string): boolean;
}

export declare class DesignComp<COMP extends ConstrComponent, P extends ConstrItem> extends DesignComponents<COMP, P> {
}

/**
 * Class for working with connected components.
 *
 * Класс для работы с подключенными компонентами.
 */
export declare class DesignComponents<COMP extends ConstrComponent, P extends ConstrItem> {
    protected readonly components: COMP;
    protected readonly modification?: ConstrComponentMod<P> | undefined;
    /** Cache for computed properties/ Кэш для вычисляемых свойств */
    protected caching: Record<string, ComputedRef<any>>;
    /**
     * Constructor
     * @param components list of connected components/ список подключенных компонентов
     * @param modification data for modification/ данные для модификации
     */
    constructor(components?: COMP, modification?: ConstrComponentMod<P> | undefined);
    /**
     * Check the presence of the component.
     *
     * Проверить наличие компонента.
     * @param name name of the component/ названия компонента
     */
    is<K extends keyof COMP>(name: K): name is K;
    /**
     * Getting the object of the component.
     *
     * Получение объекта компонента.
     * @param name name of the component/ названия компонента
     */
    get<K extends keyof COMP>(name: K): COMP[K];
    /**
     * Returns the modified input data of the connected components.
     *
     * Возвращает модифицированные входные данные у подключенных компонентов.
     * @param index the name of this/ название данного
     * @param props basic data/ базовые данные
     */
    getModification<K extends keyof P>(index?: K & string | string, props?: P[K] | Record<string, any>): Record<string, any> | undefined;
    /**
     * Rendering a component by its name and returning an array with one component.
     *
     * Рендеринг компонента по его имени и возвращение массива с одним компонентом.
     * @param name name of the component/ названия компонента
     * @param props property of the component/ свойство компонента
     * @param children sub-elements of the component/ под элементы компонента
     * @param index the name of the key/ названия ключа
     */
    render<K extends keyof COMP, PK extends keyof P>(name: K & string, props?: P[PK] & ConstrItem | ConstrItem, children?: RawChildren | RawSlots, index?: PK & string | string): VNode[];
    /**
     * Rendering a component by its name.
     *
     * Рендеринг компонента по его имени.
     * @param name name of the component/ названия компонента
     * @param props property of the component/ свойство компонента
     * @param children sub-elements of the component/ под элементы компонента
     * @param index the name of the key/ названия ключа
     */
    renderOne<K extends keyof COMP, PK extends keyof P>(name: K & string, props?: P[PK] & ConstrItem | ConstrItem, children?: RawChildren | RawSlots, index?: PK & string | string): VNode | undefined;
    /**
     * Rendering the component by its name.
     *
     * Рендеринг компонента по его имени.
     * @param item an array to which the rendered object will be added/
     * массив, по которому будет добавлять объект
     * @param name name of the component/ названия компонента
     * @param props property of the component/ свойство компонента
     * @param children sub-elements of the component/ под элементы компонента
     * @param index the name of the key/ названия ключа
     */
    renderAdd<K extends keyof COMP, PK extends keyof P>(item: any[], name: K & string, props?: P[PK] & ConstrItem | ConstrItem, children?: RawChildren | RawSlots, index?: PK & string | string): this;
    /**
     * Calculates modified input data for connected components.
     *
     * Вычисляет модифицированные входные данные для подключенных компонентов.
     * @param index the name of this/ название данного
     */
    protected computeModification<K extends keyof P>(index: K & string | string): Record<string, any>;
}

/**
 * Class for collecting all functional components.
 *
 * Класс для сбора всех функциональных компонентов.
 */
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
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     */
    protected constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, EMITS, P> | undefined);
    protected init(): this;
    /**
     * Getting the class name.
     *
     * Получение названия класса.
     */
    getName(): string;
    /**
     * Getting the class name.
     *
     * Получение названия дизайна.
     */
    getDesign(): string;
    /**
     * Getting the class name.
     *
     * Получение названия класса.
     * @param name list of class names by levels/ список названий классов по уровням
     */
    getSubClass(name: string | string[]): string;
    /**
     * Getting the class name for the status.
     *
     * Получение названия класса для статуса.
     * @param name list of class names by levels/ список названий классов по уровням
     */
    getStatusClass(name: string | string[]): string;
    /**
     * Getting the property name for the style.
     *
     * Получение названия свойства для стиля.
     * @param name list of class names by levels/ список названий классов по уровням
     */
    getStyle(name: string | string[]): string;
    /**
     * Getting additional parameters.
     *
     * Получение дополнительных параметров.
     */
    getAttrs(): ConstrItem;
    /**
     * List of available external variables.
     *
     * Список доступных переменных извне.
     */
    expose(): EXPOSE;
    /**
     * The rendering method for the setup method.
     *
     * Метод рендеринга для метода настройки.
     */
    render(): () => VNode | (VNode | any)[] | undefined;
    /**
     * Initialization of all the necessary properties for work
     *
     * Инициализация всех необходимых свойств для работы.
     */
    protected abstract initExpose(): EXPOSE;
    /**
     * Improvement of the obtained list of classes.
     *
     * Доработка полученного списка классов.
     */
    protected abstract initClasses(): Partial<CLASSES>;
    /**
     * Refinement of the received list of styles.
     *
     * Доработка полученного списка стилей.
     */
    protected abstract initStyles(): ConstrStyles;
    /**
     * A method for rendering.
     *
     * Метод для рендеринга.
     */
    protected abstract initRender(): VNode | (VNode | any)[] | undefined;
    /**
     * Initializes the slot.
     *
     * Инициализирует слот.
     * @param name slot name/ название слота
     * @param children if you pass this element, the slot will be added to it/
     * если передать этот элемент, то слот добавится в него
     * @param props property for the slot/ свойство для слота
     */
    protected initSlot<K extends keyof SLOTS>(name: K, children?: any[], props?: ConstrItem): VNode | undefined;
    /**
     * Transformation of the class value into an object.
     *
     * Преобразование значения класса в объект.
     * @param classes list of classes for transformation/ список классов для преобразования
     */
    protected toClass(classes?: ConstrClass): ConstrClassObject;
    /**
     * Converts the class name to standard for the current component.
     *
     * Преобразовывает название класса в стандартное для текущего компонента.
     * @param classes list of classes/ список классов
     */
    protected toClassName<T extends ConstrItem>(classes?: ConstrItem): T;
    /**
     * Getting component names as an array.
     *
     * Получение названий компонентов в виде массива.
     * @param name component name for transformation/ название компонента для преобразования
     */
    private initName;
    /**
     * Updating data about the class.
     *
     * Обновление данных об классе.
     */
    private updateClasses;
    /**
     * Refinement of the received list of styles.
     *
     * Доработка полученного списка стилей.
     */
    private updateStyles;
}

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

/**
 * Returns a function for use during the initialization of control methods.
 *
 * Возвращает функцию для использования при инициализации методов управления.
 * @param callback function or any value/ функция или любое значение
 * @param unmounted delete data from the cache/ удалить ли данные из кеша
 * @param isGlobal is the object global?/ является ли объект глобальным?
 * @param isProvide execution as a component inheritance/ выполнение как наследие компонента
 */
export declare function executeUse<R, O extends any[], RI extends Readonly<Readonly<R> & {
    init(): Readonly<R>;
}>>(callback: (...args: O) => R, unmounted?: boolean, isGlobal?: boolean, isProvide?: boolean): ((...args: O) => RI) | (() => RI);

export declare function executeUseGlobalInit(): void;

/**
 * Class for working with Flags.
 *
 * Класс для работы с Флагами.
 */
export declare class GeoFlagRef {
    protected code: Ref<string>;
    protected flag: GeoFlag;
    /**
     * Constructor
     * @param code country and language code/ код страны и языка
     */
    constructor(code?: RefOrNormal<string>);
    /**
     * Obtaining a reactive object with the country code.
     *
     * Получение реактивного объекта с кодом страны.
     */
    getCode(): Ref<string>;
    /**
     * Returns information about the country and its flag.
     *
     * Возвращает информацию о стране и её флаге.
     * @param code country code/ код страны
     */
    get(code?: string): ComputedRef<GeoFlagItem | undefined>;
    /**
     * Getting a link to the flag.
     *
     * Получение ссылки на флаг.
     * @param code country code/ код страны
     */
    getFlag(code?: string): ComputedRef<string | undefined>;
    /**
     * Getting a list of countries by an array of codes.
     *
     * Получение списка стран по массиву с кодами.
     * @param codes country code/ код страны
     */
    getList(codes?: string[]): ComputedRef<GeoFlagItem[]>;
    /**
     * Getting a list of countries by an array of codes in national language.
     *
     * Получение списка стран по массиву с кодами на национальный язык.
     * @param codes country code/ код страны.
     */
    getNational(codes?: string[]): ComputedRef<GeoFlagNational[]>;
}

/**
 * Reactive class for managing the formatting of numbers and dates.
 *
 * Реактивный класс для управления форматированием чисел и дат.
 */
export declare class GeoIntlRef {
    private location;
    private intl;
    /**
     * Constructor
     * @param code country code, full form language-country or one of them/
     * код страны, полный вид язык-страна или один из них
     */
    constructor(code?: RefOrNormal<string>);
    /**
     * The consistent translation of language, region and script display names.
     *
     * Последовательный перевод отображаемых названий языка, региона и скрипта.
     * @param value the code to provide depends on the type/ предоставляемый код зависит от типа
     * @param typeOptions an object with some or all of the following properties/
     * объект с некоторыми или всеми из следующих свойств
     */
    display(value?: RefOrNormal<string>, typeOptions?: Intl.DisplayNamesOptions['type'] | Intl.DisplayNamesOptions): ComputedRef<string>;
    /**
     * Get display names of language.
     *
     * Получить отображаемые имена языка.
     * @param value the code to provide depends on the type/ предоставляемый код зависит от типа
     * @param style the formatting style to use/ используемый стиль форматирования
     */
    languageName(value?: RefOrNormal<string>, style?: Intl.RelativeTimeFormatStyle): ComputedRef<string>;
    /**
     * Get display names of region.
     *
     * Получить отображаемые имена региона.
     * @param value the code to provide depends on the type/ предоставляемый код зависит от типа
     * @param style the formatting style to use/ используемый стиль форматирования
     */
    countryName(value?: RefOrNormal<string>, style?: Intl.RelativeTimeFormatStyle): ComputedRef<string>;
    /**
     * In basic use without specifying a locale, a formatted string.
     *
     * При обычном использовании без указания локали форматированная строка
     *
     * @param value a number, bigint, or string, to format/ число для форматирования
     * @param options an object with some or all properties/ объект с некоторыми
     * или всеми свойствами
     */
    number(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /**
     * Decimal point symbol.
     *
     * Символ десятичной точки.
     */
    decimal(): ComputedRef<string>;
    /**
     * Currency formatting.
     *
     * Форматирование валюты.
     * @param value a number, bigint, or string, to format/ число для форматирования
     * @param currencyOptions the currency to use in currency formatting/
     * валюта для использования в форматировании валюты
     * @param numberOnly do not display the currency symbol/ не выводить значок валюты
     */
    currency(value: RefOrNormal<NumberOrString>, currencyOptions?: RefOrNormal<string | Intl.NumberFormatOptions>, numberOnly?: boolean): ComputedRef<string>;
    /**
     * Unit formatting.
     * If the style is 'unit', a unit property must be provided.
     *
     * Форматирование юнитов.
     * @param value a number, bigint, or string, to format/ число для форматирования
     * @param unitOptions the unit to use in unit formatting/ блок для использования
     * в форматировании блока
     */
    unit(value: RefOrNormal<NumberOrString>, unitOptions?: string | Intl.NumberFormatOptions): ComputedRef<string>;
    /**
     * Number as a percentage.
     *
     * Число в виде процента.
     * @param value a number, bigint, or string, to format/ число для форматирования
     * @param options an object with some or all properties/ объект с некоторыми или всеми свойствами
     */
    percent(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /**
     * Number as a percentage (unit).
     *
     * Число в виде процента (единица).
     * @param value a number, bigint, or string, to format/ число для форматирования
     * @param options an object with some or all properties/
     * объект с некоторыми или всеми свойствами
     */
    percentBy100(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /**
     * Enables language-sensitive date and time formatting.
     *
     * Конструктором объектов, включающих языка-зависимое форматирование даты и времени.
     * @param value the date to format/ дата для форматирования
     * @param type type of data format/ тип формата data
     * @param styleOptions the representation of the month/ представление месяца
     * @param hour24 whether to use 12-hour time/ использовать ли 12-часовое время
     */
    date(value: RefOrNormal<NumberOrStringOrDate>, type?: GeoDate, styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions, hour24?: boolean): ComputedRef<string>;
    /**
     * Enables language-sensitive relative time formatting.
     *
     * Включает форматирование относительного времени с учетом языка.
     * @param value a number, bigint, or string, to format/ число для форматирования
     * @param styleOptions the length of the internationalized message/
     * длина интернационализированного сообщения
     * @param todayValue current day/ текущий день
     */
    relative(value: RefOrNormal<NumberOrStringOrDate>, styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions, todayValue?: Date): ComputedRef<string>;
    /**
     * Enables language-sensitive relative time formatting
     * Including the ability to add a limit to output the standard time format if the value
     * exceeds the allowable limit.
     *
     * Включает форматирование относительного времени с учетом языка.
     * Включая возможность добавления лимита, чтобы выводить уже стандартный формат времени,
     * если значение вышло за пределы допустимого.
     * @param value a number, bigint, or string, to format/ число для форматирования
     * @param limit values that determine the output limit (values per day)/
     * значения, по которым определяем предел вывода (значения в день)
     * @param todayValue current day/ текущий день
     * @param relativeOptions the length of the internationalized message/
     * длина интернационализированного сообщения
     * @param dateOptions the representation of the month/ представление месяца
     * @param type type of data format/ тип формата data
     * @param hour24 whether to use 12-hour time/ использовать ли 12-часовое время
     */
    relativeLimit(value: RefOrNormal<NumberOrStringOrDate>, limit: number, todayValue?: Date, relativeOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions, dateOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions, type?: GeoDate, hour24?: boolean): ComputedRef<string>;
    /**
     * Names of months.
     *
     * Названия месяцев.
     * @param value the date to format/ дата для форматирования
     * @param style the representation of the month/ представление месяца
     */
    month(value?: RefOrNormal<NumberOrStringOrDate>, style?: Intl.DateTimeFormatOptions['month']): ComputedRef<string>;
    /**
     * Array to list of months.
     *
     * Массив в список месяцев.
     * @param style the representation of the month/ представление месяца
     */
    months(style?: Intl.DateTimeFormatOptions['month']): ComputedRef<ItemValue<number | undefined>[]>;
    /**
     * Returns names of days of the week.
     *
     * Возвращает названия дней недели.
     * @param value the date to format/ дата для форматирования
     * @param style the representation of the weekday/ представление о дне недели
     */
    weekday(value?: RefOrNormal<NumberOrStringOrDate>, style?: Intl.DateTimeFormatOptions['weekday']): ComputedRef<string>;
    /**
     * An array of the list of names of the days of the week.
     *
     * Массив из списка названий дней недели.
     * @param style the representation of the weekday/ представление о дне недели
     */
    weekdays(style?: Intl.DateTimeFormatOptions['weekday']): ComputedRef<ItemValue<number | undefined>[]>;
    /**
     * Time.
     *
     * Время.
     * @param value the date to format/ дата для форматирования
     */
    time(value: RefOrNormal<NumberOrStringOrDate>): ComputedRef<string>;
}

/**
 * Reactive class for working with geographic data.
 *
 * Реактивный класс для работы с географическими данными.
 */
export declare class GeoRef {
    private static readonly item;
    private static readonly country;
    private static readonly language;
    private static readonly standard;
    private static readonly firstDay;
    /**
     * Information about the current country.
     *
     * Информация об текущей стране.
     */
    static get(): Ref<GeoItemFull>;
    /**
     * Current country.
     *
     * Текущая страна.
     */
    static getCountry(): ComputedRef<string>;
    /**
     * Current language.
     *
     * Текущий язык.
     */
    static getLanguage(): ComputedRef<string>;
    /**
     * Full format according to the standard.
     *
     * Полный формат согласно стандарту.
     */
    static getStandard(): ComputedRef<string>;
    /**
     * Returns the first day of the week.
     *
     * Возвращает первый день недели.
     */
    static getFirstDay(): ComputedRef<string>;
    /**
     * Changes the data by the full code.
     *
     * Изменяет данные по полному коду.
     * @param code country code, full form language-country or one of them/
     * код страны, полный вид язык-страна или один из них
     */
    static set(code: string): void;
}

/**
 * A method for generating properties for a subcomponent.
 *
 * Метод для генерации свойств для под компонента.
 * @param value input value. Can be an object if you need to pass multiple properties/
 * входное значение. Может быть объектом, если надо передать несколько свойств
 * @param nameExtra additional parameter or property name/ дополнительный параметр или имя свойства
 * @param name property name/ имя свойства
 * @param except exclude the rule requiring the presence of a primary key/
 * исключить правило обязательности наличия главного ключа
 */
export declare function getBind<T, R extends ItemList>(value: T | R | undefined | null, nameExtra?: ItemList | string, name?: string, except?: boolean): ConstrBind<R>;

/**
 * A method for generating properties for a subcomponent.
 *
 * Метод для генерации свойств для под компонента.
 * @param value input value. Can be an object if you need to pass multiple properties/
 * входное значение. Может быть объектом, если надо передать несколько свойств
 * @param nameExtra additional parameter or property name/ дополнительный параметр или имя свойства
 * @param name property name/ имя свойства
 */
export declare function getBindRef<T, R extends ItemList>(value: RefOrNormal<T | R> | undefined, nameExtra?: RefOrNormal<ItemList> | string, name?: string): ComputedRef<R>;

/**
 * Returns the name of the class from the property.
 *
 * Возвращает название класса из свойства.
 * @param props property of the component/ свойство компонента
 */
export declare function getClassName<T extends ItemList>(props?: T): string | undefined;

/**
 * Processes an asynchronous method for wrapping in computed.
 *
 * Обрабатывает асинхронный метод для обёртки в computed.
 * @param callback callback function/ функция обратного вызова
 * @param ignore values to be ignored/ значения для исключения из обработки
 */
export declare const getComputedAsync: <T, I = undefined>(callback: () => Promise<Ref<T | I> | T | I>, ignore?: I) => ComputedRef<T | undefined>;

/**
 * Returns or generates a new element.
 *
 * Возвращает или генерирует новый элемент.
 * @param name name of the component/ названия компонента
 * @param props property of the component/ свойство компонента
 * @param index the name of the key/ названия ключа
 */
export declare function getIndexForRender<T extends ItemList>(name: string, props?: T, index?: string): string;

/**
 * You return the values of the ref variable or the variable itself if it is not reactive.
 *
 * Возвращаешь значения ref переменной или саму переменную, если она не реактивная.
 * @param item reactive variable or ordinary value/ реактивная переменная или обычное значение
 */
export declare function getRef<T>(item: RefOrNormal<T>): T;

export declare type LazyItem = {
    status: ShallowRef<boolean>;
    ratio: ShallowRef<number>;
    entry: ShallowRef<IntersectionObserverEntry | undefined>;
    stopWatch: () => void;
};

export declare type LazyItemByMargin = {
    rootMargin: string;
    item: any;
};

export declare type LazyList = Record<string, LazyItem>;

/** Basic data structure for list item/ Базовая структура данных для элемента списка */
export declare type ListDataBasic = {
    /** Optional display label/ Опциональная отображаемая метка */
    label?: NumberOrString;
    /** Any value associated with the item/ Любое значение, связанное с элементом */
    value?: any;
    /** Search text for filtering/ Текст поиска для фильтрации */
    search?: string;
};

/**
 * Array of extended list items with state/
 * Массив расширенных элементов списка с состоянием
 */
export declare type ListDataFull<Item extends ListDataBasic = ListDataBasic> = ListDataFullItem<Item>[];

/**
 * Extended list item with additional state properties/
 * Расширенный элемент списка с дополнительными свойствами состояния
 */
export declare type ListDataFullItem<Item extends ListDataBasic = ListDataBasic> = ListDataItem<Item> & {
    /** Whether the item has focus/ Имеет ли элемент фокус */
    focus: boolean;
    /** Highlighted text portion/ Выделенная часть текста */
    highlight?: string;
    /** Whether the item is selected/ Выбран ли элемент */
    selected: boolean;
    /** Whether the item is disabled/ Отключен ли элемент */
    disabled?: boolean;
};

/** Extended list item with type and index/ Расширенный элемент списка с типом и индексом */
export declare type ListDataItem<Item extends ListDataBasic = ListDataBasic> = ConstrBind<Item & {
    /** Parent item identifier/ Идентификатор родительского элемента */
    parent?: string;
    /** Type of list item/ Тип элемента списка */
    type: ListType;
    /** Unique item identifier/ Уникальный идентификатор элемента */
    index: string;
}>;

/**
 * Class for managing the data list.
 *
 * Класс для управления списком данных.
 */
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
     * Creates an instance of ListData for managing list data.
     *
     * Создает экземпляр ListData для управления данными списка.
     * @param list List data / данные списка
     * @param focus Focused item / элемент в фокусе
     * @param highlight Search text for highlighting / текст поиска для выделения
     * @param highlightLengthStart Minimum length to start highlighting / минимальная длина для начала выделения
     * @param filterMode Filter mode / режим фильтрации
     * @param selected Selected items / выбранные элементы
     * @param keyValue Key for getting item value / ключ для получения значения элемента
     * @param keyLabel Key for getting item label / ключ для получения метки элемента
     * @param lite Threshold for lite mode / порог для облегченного режима
     * @param min Minimum number of selections / минимальное количество выделений
     * @param max Maximum number of selections / максимальное количество выделений
     * @param parent Parent identifier / идентификатор родителя
     */
    constructor(list: RefOrNormal<ListListInput | undefined>, focus?: RefType<ListSelectedItem | undefined> | undefined, highlight?: RefType<string | undefined> | undefined, highlightLengthStart?: RefType<number | undefined> | undefined, filterMode?: RefType<boolean | undefined> | undefined, selected?: RefType<ListSelectedList | undefined> | undefined, keyValue?: RefType<string | undefined> | undefined, keyLabel?: RefType<string | undefined> | undefined, lite?: RefType<number | undefined> | undefined, min?: RefOrNormal<number | string | undefined>, max?: RefOrNormal<number | string | undefined>, parent?: string | undefined);
    /**
     * Returns a list for forming a list.
     *
     * Возвращает список для формирования списка.
     */
    readonly data: ComputedRef<ListList>;
    /**
     * Returns a simplified list for quick loading.
     *
     * Возвращает упрощенный список для быстрой загрузки.
     */
    readonly liteData: ComputedRef<ListList>;
    /**
     * Returns a list of records with all additional data.
     *
     * Возвращает список записей со всеми дополнительными данными.
     */
    readonly fullData: ComputedRef<ListDataFull>;
    /**
     * Returns a map of all entries.
     *
     * Возвращает карту всех записей.
     */
    readonly map: ComputedRef<ListList>;
    /**  Returns a list consisting only of items/ Возвращает список, состоящий только из элементов. */
    readonly mapItems: ComputedRef<ListList>;
    /**
     * Returns a list consisting only of values for selection.
     *
     * Возвращает список, состоящий только из значений для выбора.
     */
    readonly items: ComputedRef<ListList>;
    /**
     * Finds the first element that meets the search conditions.
     *
     * Находит первый элемент, соответствующий условиям поиска.
     */
    readonly highlightFirstItem: ComputedRef<number>;
    /**
     * Is there a selected item.
     *
     * Есть ли выбранный элемент.
     */
    readonly isSelected: ComputedRef<boolean>;
    /** Is the minimum selection reached/ Достигнуто ли минимальное выделение */
    readonly isSelectedMin: ComputedRef<boolean>;
    /** Is the maximum selection reached/ Достигнуто ли максимальное выделение */
    readonly isSelectedMax: ComputedRef<boolean>;
    /**
     * Returns a list of selected items on the map/
     * Возвращает список выделенных элементов на карте
     */
    readonly selectedList: ComputedRef<ListList>;
    /**
     * Returns a list of selected items in the current group/
     * Возвращает список выделенных элементов в текущей группе
     */
    readonly selectedListInGroup: ComputedRef<ListList>;
    /**
     * Returns a list of selected items on the map.
     *
     * Возвращает список выделенных элементов на карте.
     */
    readonly selectedNames: ComputedRef<ListNames>;
    /**
     * Returns a list of selected item values on the map.
     *
     * Возвращает список значений выделенных элементов на карте.
     */
    readonly selectedValues: ComputedRef<any[]>;
    /**
     * Checks whether it is necessary to first display a simplified version.
     *
     * Проверяет, надо ли сначала вывести упрощенную версию.
     */
    isLite(): boolean;
    /**
     * Checks if an element is in focus.
     *
     * Проверяет, есть ли элемент в фокусе.
     */
    isFocus(): boolean;
    /**
     * Checks if there is a selected item.
     *
     * Проверяет, есть ли выделенный элемент.
     */
    isHighlight(): boolean;
    /**
     * Checks if highlighting is active.
     *
     * Проверяет, активно ли выделение.
     */
    isHighlightActive(): boolean;
    /**
     * Returns the number of records.
     *
     * Возвращает количество записей.
     */
    getLength(): number;
    /**
     * Returns the number of all available records.
     *
     * Возвращает количество всех доступных записей.
     */
    getLengthByMap(): number;
    /**
     * Returns the number of all available records.
     *
     * Возвращает количество всех доступных записей.
     */
    getLengthByItems(): number;
    /**
     * Returns the values in focus.
     *
     * Возвращает значения в фокусе.
     */
    getFocus(): ListSelectedItem | undefined;
    /**
     * Returns the selected value.
     *
     * Возвращает выделенного значение.
     */
    getHighlight(): string | undefined;
    /**
     * Returns the minimum length for highlight to start.
     *
     * Возвращает минимальную длину для начала выделения.
     */
    getHighlightLengthStart(): number;
    /**
     * Returns the selected value.
     *
     * Возвращает выбранное значение.
     */
    getSelected(): ListSelectedList | undefined;
    /**
     * Returns an item by moving a certain number of steps from the selected item.
     *
     * Возвращает элемент, перемещаясь на определенное количество шагов от выбранного элемента.
     * @param step number of steps/ количество шагов
     */
    getSelectedByStep(step: number): ListSelectedItem | undefined;
    /**
     * Returns an item by its index.
     *
     * Возвращает элемент по его индексу.
     * @param index item index/ индекс элемента
     */
    getItemByIndex(index?: string): {
        key: number;
        item: ListDataItem;
    } | undefined;
    /**
     * Returns an item by its key.
     *
     * Возвращает элемент по его ключу.
     * @param key item key/ ключ элемента
     */
    getItemByKey(key: number): ListDataItem | undefined;
    /**
     * Returns the first item with the specified parent.
     *
     * Возвращает первый элемент с указанным родителем.
     * @param parent parent identifier to search for / идентификатор родителя для поиска
     */
    getFirstItemByParent(parent: string): ListDataItem | undefined;
    /**
     * Returns the last item with the specified parent.
     *
     * Возвращает последний элемент с указанным родителем.
     * @param parent parent identifier to search for / идентификатор родителя для поиска
     */
    getLastItemByParent(parent: string): ListDataItem | undefined;
    /**
     * Returns a sublist object for a group item.
     *
     * Возвращает объект подсписка для группового элемента.
     * @param item List item data/ данные элемента списка
     */
    getSubList(item: ListDataItem): ListDataRef;
    /**
     * Checks if the item is an item, group, or menu.
     *
     * Проверяет, является ли элемент элементом, группой или меню.
     * @param item List item data/ данные элемента списка
     */
    protected isItem(item: ListDataItem): boolean;
    /**
     * Checks if the item is in the specified parent.
     *
     * Проверяет, находится ли элемент в указанном родителе.
     * @param parent parent identifier to search for / идентификатор родителя для поиска
     * @param item List item data/ данные элемента списка
     */
    protected isInParent(parent: string, item: ListDataItem): boolean;
    /**
     * Returns the index for the list item.
     *
     * Возвращает индекс для элемента списка.
     * @param index current index / текущий индекс
     * @param value item value / значение элемента
     * @param key item key / ключ элемента
     * @param label item label / метка элемента
     */
    protected getIndex(index: string | number | undefined, value: any, key: string | number | undefined, label: string | number | undefined): string | number | undefined;
    /**
     * Creates an object of the record element.
     *
     * Создает объект элемента записи.
     * @param key the value of the key in the element/ значения ключа у элемента
     * @param item selected element/ выбранный элемент
     */
    protected initItem(key: string | number, item: any): ListDataItem;
}

/** Array of list data items/ Массив элементов данных списка */
export declare type ListList<Item extends ListDataBasic = ListDataBasic> = ListDataItem<Item>[];

/**
 * Various input formats for list creation/
 * Различные форматы входных данных для создания списка
 */
export declare type ListListInput<Item extends ListDataBasic = ListDataBasic> = ListListInputItem<Item>[] | string[] | Record<string, ListListInputItem<Item>> | Record<string, string>;

/** Input item for list creation/ Входной элемент для создания списка */
export declare type ListListInputItem<Item extends ListDataBasic = ListDataBasic> = ConstrBind<Item>;

/** Name of selected list item/ Название выбранного элемента списка */
export declare type ListName = string | number | undefined;

/** Array of list item names/ Массив названий выбранных элементов списка */
export declare type ListNames = ListName[];

/**
 * List or record structure for list data/
 * Структура списка или записи для данных списка
 */
export declare type ListRecord<Item extends ListDataBasic = ListDataBasic> = ListList<Item> | Record<string, any>;

/** Single selected item identifier/ Идентификатор одного выбранного элемента */
export declare type ListSelectedItem = NumberOrStringOrBoolean;

/** Single or multiple selected items/ Один или несколько выбранных элементов */
export declare type ListSelectedList = ListSelectedItem | ListSelectedItem[];

/** Type of list item/ Тип элемента списка */
export declare type ListType = 'item' | 'space' | 'line' | 'subtitle' | 'html' | 'menu' | 'menu-group' | 'group';

/**
 * Union type for Vue raw children content
 * (strings, numbers, booleans, VNodes, arrays, functions)/
 * Объединенный тип для Vue сырого содержимого дочерних элементов
 * (строки, числа, булевы, VNode, массивы, функции)
 */
export declare type RawChildren = string | number | boolean | VNode | VNodeArrayChildren | (() => any);

/**
 * Type for Vue raw slots with optional stability flag/
 * Тип для Vue сырых слотов с опциональным флагом стабильности
 */
export declare type RawSlots = {
    /** Slot name mapping to unknown content/ Маппинг имени слота к неизвестному содержимому */
    [name: string]: unknown;
    /**
     * Optional stability flag for performance optimization/
     * Опциональный флаг стабильности для оптимизации производительности
     */
    $stable?: boolean;
};

/**
 * Union type that can be either a Vue reactive reference or a normal value/
 * Объединенный тип, который может быть либо Vue реактивной ссылкой, либо обычным значением
 */
export declare type RefOrNormal<T> = RefType<T> | T;

/**
 * Union type for Vue reactive references (computed or ref)/
 * Объединенный тип для Vue реактивных ссылок (computed или ref)
 */
export declare type RefType<T> = ComputedRef<T> | Ref<T>;

/**
 * Union type for Vue reactive references that can be undefined/
 * Объединенный тип для Vue реактивных ссылок, которые могут быть undefined
 */
export declare type RefUndefined<T> = RefType<T | undefined>;

/**
 * Getting cached, immutable data.
 *
 * Получение кешированных, неизменяемых данных.
 * @param name name of the component/ названия компонента
 * @param props property of the component/ свойство компонента
 * @param children sub-elements of the component/ под элементы компонента
 * @param index the name of the key/ названия ключа
 */
export declare function render<T extends ItemList>(name: string, props?: T, children?: RawChildren | RawSlots, index?: string): VNode;

/**
 * Router management class.
 *
 * Класс управления роутером.
 */
export declare class RouterItemRef {
    protected static router?: Router;
    /**
     * Get router instance.
     *
     * Получить экземпляр роутера.
     */
    static get(): Router | undefined;
    /**
     * Returns the link by name.
     *
     * Возвращает ссылку по имени.
     * @param name route name/ имя маршрута
     * @param params route parameters/ параметры маршрута
     * @param query route query/ запрос маршрута
     */
    static getLink(name: string, params?: any, query?: any): string | undefined;
    /**
     * Returns the link property by name.
     *
     * Возвращает свойство ссылки по имени.
     * @param name route name/ имя маршрута
     * @param params route parameters/ параметры маршрута
     * @param query route query/ запрос маршрута
     */
    static getHref(name?: string, params?: any, query?: any): ConstrHrefProps;
    /**
     * Site path change.
     *
     * Изменение пути сайта.
     * @param to new path/ новый путь
     */
    static push(to: string | RouteLocationRaw): void;
    /**
     * Set router instance.
     *
     * Установить экземпляр роутера.
     * @param router router instance/ экземпляр роутера
     */
    static set(router: Router): void;
    /**
     * Set router instance only once.
     *
     * Установить экземпляр роутера только один раз.
     * @param router router instance/ экземпляр роутера
     */
    static setOneTime(router: Router): void;
    /**
     * Converts the raw route location to href properties.
     *
     * Преобразует необработанное местоположение маршрута в свойства href.
     * @param to raw route location/ необработанное местоположение маршрута
     */
    static rawToHref(to?: string | RouteLocationRaw): ConstrHrefProps;
}

/**
 * Class for getting the scroll width as a reactive item.
 *
 * Класс для получения ширины скролла в виде реактивного элемента.
 */
export declare class ScrollbarWidthRef {
    /**
     * Reactive item.
     *
     * Реактивный элемент.
     */
    readonly item: Ref<boolean | undefined, boolean | undefined>;
    /**
     * Constructor
     */
    constructor();
    /**
     * Checks whether the scroll width is defined.
     *
     * Проверяет, определена ли ширина скролла.
     */
    readonly is: ComputedRef<boolean>;
}

export declare const setApiRefGlobalConditions: (conditions: RefType<any>) => void;

/**
 * Changing the value for the reactive method.
 *
 * Изменение значения для реактивного метода.
 * @param item reactive element/ реактивный элемент
 * @param value values for replacement/ значения для замены
 */
export declare function setRef<T>(item: Ref<T>, value: T): void;

/**
 * Getting the translated text by an array of keys or a string with a key.
 *
 * Получение переведенного текста по массиву ключей или строке с ключом.
 * @param names a string or an array with keys/ строка или массив с ключами
 */
export declare const t: <T extends string[]>(names: T) => ShallowRef<TranslateList<T>>;

/**
 * Merges two objects with properties, taking into account their classes and styles
 *
 * Объединяет два объекта со свойствами с учётом классов и стилей в них
 * @param extra additional property/ дополнительное свойство
 * @param value input value/ входное значение
 */
export declare function toBind<R extends ItemList = ItemList>(extra: ItemList, value: ItemList): ConstrBind<R>;

/**
 * Merges multiple objects with properties, taking into account their classes and styles
 *
 * Объединяет несколько объектов со свойствами с учётом классов и стилей в них
 * @param values list of input values/ список входных значений
 */
export declare function toBinds<R extends ItemList = ItemList>(...values: (ItemList | undefined)[]): ConstrBind<R>;

/**
 * Packs reactive values into computed to prohibit editing.
 *
 * Упаковывает реактивные значения в computed для запрета редактирования.
 * @param callback callback function/ функция обратного вызова
 */
export declare function toComputed<T>(callback: () => Ref<T>): ComputedRef<T>;

/**
 * Returns a regular variable or wraps it in a regular variable if it is an ordinary variable.
 *
 * Возвращает регулярный переменный или оборачивает его в регулярный переменный, если является обычным переменным.
 * @param item
 */
export declare function toRefItem<T>(item: RefOrNormal<T>): Ref<T>;

/** Utility type to convert union types to intersection types/ Утилитарный тип для преобразования объединенных типов в пересеченные */
export declare type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

export declare interface UseApiRef<R> {
    data: Ref<R | undefined>;
    isStarting: ComputedRef<boolean>;
    loading: ComputedRef<boolean>;
    reading: ComputedRef<boolean>;
    reset(): Promise<void>;
}

/**
 * Returns data for working with requests.
 *
 * Возвращает данные для работы с запросами.
 * @param path path to request/ путь к запрос
 * @param options data for the request/ данные для запроса
 * @param reactivity should reactivity be enabled/ включить ли реактивность
 * @param conditions conditions for executing the request/ условия выполнения запроса
 * @param transformation transforms the received request/ преобразовывает полученный запрос
 * @param unmounted delete data from the cache/ удалить ли данные из кеша
 */
export declare function useApiRef<R, T = any>(path?: RefOrNormal<string | undefined>, options?: ApiOptions, reactivity?: boolean, conditions?: RefType<boolean>, transformation?: (data: T) => R, unmounted?: boolean): UseApiRef<R>;

/**
 * Creates a reactive variable to manage data between browser tabs.
 *
 * Создает реактивную переменную для управления данными между вкладками браузера.
 * @param name value name/ название значения
 * @param defaultValue default value/ значение по умолчанию
 */
export declare function useBroadcastValueRef<T>(name: string, defaultValue?: T | string | (() => (T | string))): Ref<BroadcastValueItem<T>>;

/**
 * Creates a reactive variable to manage cookies.
 *
 * Создает реактивную переменную для управления cookie.
 * @param name cookie name/ название cookie
 * @param defaultValue value or function to change data/ значение или функция для изменения данных
 * @param options additional parameters/ дополнительные параметры
 */
export declare function useCookieRef<T>(name: string, defaultValue?: T | string | (() => (T | string)), options?: CookieOptions): Ref<T | string | undefined>;

/**
 * Returns a class object for working with data formatting.
 *
 * Возвращает объект класса для работы с форматированием данных.
 */
export declare function useGeoIntlRef(): GeoIntlRef;

/**
 * Creates a reactive variable to manage the hash.
 *
 * Создает реактивную переменную для управления хэшем.
 * @param name value name/ название значения
 * @param defaultValue default value/ значение по умолчанию
 */
export declare function useHashRef<T>(name: string, defaultValue?: T | (() => T)): Ref<any, any> | undefined;

/**
 * Hook for initializing the tracking of an element's appearance on the screen by margin.
 *
 * Хук для инициализации отслеживания появления элемента на экране по отступу.
 * @param element element for tracking/ элемента для отслеживания
 * @param rootMargin root margin for IntersectionObserver/ отступ для IntersectionObserver
 */
export declare const useLazyItemByMarginRef: (element: RefType<HTMLElement | undefined>, rootMargin: string) => {
    /** Lazy item status/ Статус ленивого элемента */
    lazyItemStatus: any;
    /**
     * Getting a tracked lazy item.
     *
     * Получение отслеживаемого ленивого элемента.
     */
    readonly lazyItem: any;
};

/**
 * Hook for initializing the tracking of an element's appearance on the screen.
 *
 * Хук для инициализации отслеживания появления элемента на экране.
 */
export declare const useLazyRef: (options?: IntersectionObserverInit) => {
    intersectionObserver: IntersectionObserver | undefined;
    /**
     * Getting a tracked element.
     *
     * Получение отслеживаемого элемента.
     * @param element tracked element/ отслеживаемый элемент
     */
    getItem(element: HTMLElement): LazyItem | undefined;
    /**
     * Adding an element for tracking.
     *
     * Добавление элемента для отслеживания.
     * @param element element for tracking/ элемента для отслеживания
     */
    addLazyItem(element: Ref<HTMLElement | undefined>): ShallowRef<boolean, boolean>;
    /**
     * Removing an element from tracking.
     *
     * Удаление элемента из отслеживания.
     */
    removeLazyItem: (element?: HTMLElement) => void;
    /**
     * Removing all elements from tracking.
     *
     * Удаление всех элементов из отслеживания.
     */
    disconnectLazy: () => void | undefined;
};

/**
 * Returns the loading status.
 *
 * Возвращает статус загрузки.
 */
export declare function useLoadingRef(): ShallowRef<boolean, boolean>;

/**
 * Vue composable for reactive meta tags management with automatic DOM synchronization.
 * Uses singleton pattern - all components share the same meta state.
 *
 * Vue композабл для реактивного управления мета-тегами с автоматической синхронизацией DOM.
 * Использует паттерн singleton - все компоненты используют одно состояние мета-тегов.
 */
export declare const useMeta: () => Readonly<Readonly<{
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
    }>;
}>;

/**
 * Creates a reactive variable to manage session storage.
 *
 * Создает реактивную переменную для управления сессией хранения.
 * @param name value name/ название значения
 * @param defaultValue default value/ значение по умолчанию
 */
export declare function useSessionRef<T>(name: string, defaultValue?: T | (() => T)): Ref<T | undefined>;

/**
 * Creates a reactive variable to manage a local storage.
 *
 * Создает реактивный переменный для управления локальным хранилищем.
 * @param name value name/ название значения
 * @param defaultValue default value/ значение по умолчанию
 * @param cache cache time/ время кэширования
 */
export declare function useStorageRef<T>(name: string, defaultValue?: T | (() => T), cache?: number): Ref<T | undefined>;

/**
 * Getting the translated text by an array of keys or a string with a key.
 *
 * Получение переведенного текста по массиву ключей или строке с ключом.
 * @param names a string or an array with keys/ строка или массив с ключами
 */
export declare function useTranslateRef<T extends (string | string[])[]>(names: T): ShallowRef<TranslateList<T>>;


export * from "@dxtmisha/functional-basic";

export { }
