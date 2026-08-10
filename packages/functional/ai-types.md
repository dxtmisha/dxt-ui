All these methods are in the @dxtmisha/functional library.

/**
 * Base class for working with the constructor.
 *
 * Базовый класс для работы с конструктором.
 */
export declare abstract class DesignAbstract<T extends Record<string, any>, C extends Record<string, any>> {
    protected readonly callback?: ((event: C) => void) | undefined;
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
import { ComputedRef, VNode } from 'vue';
/**
 * Class for working with connected components.
 *
 * Класс для работы с подключенными компонентами.
 */
export declare class DesignComponents<COMP extends ConstrComponent, P extends ConstrItem> {
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
import { ComputedRef, ToRefs, VNode, Ref } from 'vue';
/**
 * Class for collecting all functional components.
 *
 * Класс для сбора всех функциональных компонентов.
 */
export declare abstract class DesignConstructorAbstract<E extends Element, COMP extends ConstrComponent, EMITS extends ConstrItem, EXPOSE extends ConstrItem, SLOTS extends ConstrItem, CLASSES extends ConstrClasses, P extends ConstrItem> {
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
    expose(): ConstrExpose<E, EXPOSE>;
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
}
import { ComputedRef, Ref } from 'vue';
import { Datetime, GeoDate, GeoFirstDay, GeoHours, NumberOrStringOrDate } from '@dxtmisha/functional-basic';
/**
 * A class for working with dates.
 *
 * Класс для работы с датами.
 */
export declare class DatetimeRef {
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
    getItem(): Ref<NumberOrStringOrDate>;
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
    /**
     * Updates all reactive date values.
     *
     * Обновляет все реактивные значения даты.
     */
    protected updateDate(): this;
}
/**
 * Global effect scope class.
 *
 * Глобальный класс для области действия эффекта.
 */
export declare class EffectScopeGlobal {
    /**
     * Runs a function within the global scope.
     *
     * Запускает функцию в глобальной области.
     * @param fn function/ функция
     * @returns the return value of the function/ возвращаемое значение функции
     */
    static run<T>(fn: () => T): T | undefined;
    /**
     * Gets the global effect scope instance.
     *
     * Получает экземпляр глобальной области действия эффекта.
     * @returns the global effect scope instance/ экземпляр глобальной области действия эффекта
     */
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
import { ComputedRef } from 'vue';
import { GeoFlag, GeoFlagItem, GeoFlagNational } from '@dxtmisha/functional-basic';
/**
 * Class for working with Flags.
 *
 * Класс для работы с Флагами.
 */
export declare class GeoFlagRef {
    /** Instance for working with flags / Экземпляр для работы с флагами */
    /**
     * Constructor.
     *
     * Конструктор.
     * @param code country and language code / код страны и языка
     */
    constructor(code?: RefOrNormal<string | undefined>);
    /**
     * Getting the country code.
     *
     * Получение кода страны.
     * @returns country code / код страны
     */
    getCode(): string;
    /**
     * Returns information about the country and its flag.
     *
     * Возвращает информацию о стране и её флаге.
     * @param code country code / код страны
     * @returns reactive object with country information / реактивный объект с информацией о стране
     */
    get(code?: RefOrNormal<string>): ComputedRef<GeoFlagItem | undefined>;
    /**
     * Returns information about the language and its flag.
     *
     * Возвращает информацию о языке и его флаге.
     * @param code country code / код страны
     * @returns reactive object with language information / реактивный объект с информацией о языке
     */
    getLanguage(code?: RefOrNormal<string>): ComputedRef<GeoFlagItem | undefined>;
    /**
     * Getting a link to the flag.
     *
     * Получение ссылки на флаг.
     * @param code country code / код страны
     * @returns reactive link to the flag / реактивная ссылка на флаг
     */
    getFlag(code?: RefOrNormal<string>): ComputedRef<string | undefined>;
    /**
     * Getting a list of countries by an array of codes.
     *
     * Получение списка стран по массиву с кодами.
     * @param codes list of country codes / список кодов стран
     * @returns reactive list of country flag items / реактивный список элементов флагов стран
     */
    getList(codes?: RefOrNormal<string[] | undefined>): ComputedRef<GeoFlagItem[]>;
    /**
     * Getting a list of languages by an array of codes.
     *
     * Получение списка языков по массиву с кодами.
     * @param codes list of country codes / список кодов стран
     * @returns reactive list of language flag items / реактивный список элементов флагов языков
     */
    getListLanguage(codes?: RefOrNormal<string[] | undefined>): ComputedRef<GeoFlagItem[]>;
    /**
     * Getting a list of countries by an array of codes in national language.
     *
     * Получение списка стран по массиву с кодами на национальном языке.
     * @param codes list of country codes / список кодов стран
     * @returns reactive list of country flag items in national language / реактивный список элементов флагов стран на национальном языке
     */
    getNational(codes?: RefOrNormal<string[] | undefined>): ComputedRef<GeoFlagNational[]>;
    /**
     * Getting a list of languages by an array of codes in national language.
     *
     * Получение списка языков по массиву с кодами на национальном языке.
     * @param codes list of country codes / список кодов стран
     * @returns reactive list of language flag items in national language / реактивный список элементов флагов языков на национальном языке
     */
    getNationalLanguage(codes?: RefOrNormal<string[] | undefined>): ComputedRef<GeoFlagNational[]>;
}
import { ComputedRef } from 'vue';
import { GeoDate, ItemValue, NumberOrString, NumberOrStringOrDate } from '@dxtmisha/functional-basic';
/**
 * Reactive class for managing the formatting of numbers and dates.
 *
 * Реактивный класс для управления форматированием чисел и дат.
 *
 * @remarks
 * Avoid using this reactive class if reactive updates are not required.
 * For non-reactive formatting, use the standard `GeoIntl` class from `@dxtmisha/functional-basic`.
 *
 * Старайтесь избегать этого класса, если не требуется реактивная переменная.
 * Для нереактивного форматирования используйте обычный `GeoIntl` из `@dxtmisha/functional-basic`.
 */
export declare class GeoIntlRef {
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
     * Returns the currency symbol if it exists, otherwise the currency code.
     *
     * Возвращает символ для валюты, если он есть, или сам код валюты.
     * @param currency the currency to use in currency formatting/
     * валюта для использования в форматировании валюты
     * @param currencyDisplay how to display the currency in currency formatting/
     * как отобразить валюту в формате валюты
     */
    currencySymbol(currency: RefOrNormal<string>, currencyDisplay?: keyof Intl.NumberFormatOptionsCurrencyDisplayRegistry): ComputedRef<string>;
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
     * Возвращает отформатированный размер файла
     * @param value a number, bigint, or string, to format /<br>число для форматирования
     * @param unitOptions the unit to use in unit formatting /<br>блок для использования
     * в форматировании блока
     */
    sizeFile(value: RefOrNormal<NumberOrString>, unitOptions?: 'byte' | 'kilobyte' | 'megabyte' | 'gigabyte' | 'terabyte' | 'petabyte' | Intl.NumberFormatOptions): ComputedRef<string>;
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
     * Применять форматирование, учитывающее множественное число, и языковые правила, связанные с множественным числом
     * @param value a number, bigint, or string, to format/ число для форматирования
     * @param words list of words for formatting (in the format one|two|few|many|other|zero)/
     * список слов для форматирования (в формате `one|two|few|many|other|zero`)
     * @param options Property for PluralRules/ свойство для PluralRules
     * @param optionsNumber an object with some or all properties/ объект с некоторыми или всеми свойствами
     */
    plural(value: RefOrNormal<NumberOrString>, words: string, options?: Intl.PluralRulesOptions, optionsNumber?: Intl.NumberFormatOptions): ComputedRef<string>;
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
     * Возвращает отформатированное значение времени, прошедшего с момента события
     * @param value a number, bigint, or string, to format/ число для форматирования
     * @param unit time unit/ единица времени
     * @param styleOptions additional option or formatting style/ дополнительная опция или стиль форматирования
     */
    relativeByValue(value: RefOrNormal<NumberOrString>, unit: Intl.RelativeTimeFormatUnit, styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions): ComputedRef<string>;
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
    /**
     * Sorts strings taking into account the characteristics of countries.
     *
     * Сортирует строки с учетом особенностей стран.
     * @param data an array with data/ массив с данными
     * @param compareFn a function for sorting/ функция для сортировки
     */
    sort<T>(data: RefOrNormal<T[]>, compareFn?: (a: T, b: T) => [string, string]): ComputedRef<T[]>;
}
import { ComputedRef, Ref } from 'vue';
import { GeoItemFull } from '@dxtmisha/functional-basic';
/**
 * Reactive class for working with geographic data.
 *
 * Реактивный класс для работы с географическими данными.
 */
export declare class GeoRef {
    /**
     * Information about the current country.
     *
     * Информация об текущей стране.
     * @returns reactive object with full geographic information/ реактивный объект с полной географической информацией
     */
    static get(): Ref<GeoItemFull>;
    /**
     * Current country.
     *
     * Текущая страна.
     * @returns reactive string with the current country code/ реактивная строка с кодом текущей страны
     */
    static getCountry(): ComputedRef<string>;
    /**
     * Current language.
     *
     * Текущий язык.
     * @returns reactive string with the current language code/ реактивная строка с кодом текущего языка
     */
    static getLanguage(): ComputedRef<string>;
    /**
     * Full format according to the standard.
     *
     * Полный формат согласно стандарту.
     * @returns reactive string with the full standard locale format/
     * реактивная строка с полным форматом стандарта локали
     */
    static getStandard(): ComputedRef<string>;
    /**
     * Returns the first day of the week.
     *
     * Возвращает первый день недели.
     * @returns reactive string representing the first day of the week/
     * реактивная строка, представляющая первый день недели
     */
    static getFirstDay(): ComputedRef<string>;
    /**
     * Current location string.
     *
     * Текущее местоположение.
     * @returns reactive string with the current location/ реактивная строка с текущим местоположением
     */
    static getLocation(): ComputedRef<string>;
    /**
     * Current country code from the location.
     *
     * Текущий код страны из местоположения.
     * @returns reactive string with the current country code from location/ реактивная строка с кодом текущей страны из местоположения
     */
    static getLocationCountry(): ComputedRef<string>;
    /**
     * Current language code from the location.
     *
     * Текущий код языка из местоположения.
     * @returns reactive string with the current language code from location/ реактивная строка с кодом текущего языка из местоположения
     */
    static getLocationLanguage(): ComputedRef<string>;
    /**
     * Changes the data by the full code.
     *
     * Изменяет данные по полному коду.
     * @param code country code, full form language-country or one of them/
     * код страны, полный вид язык-страна или один из них
     */
    static set(code: string): void;
    /**
     * Sets the default value for the country code.
     *
     * Устанавливает значение по умолчанию для кода страны.
     * @param code default code value / значение кода по умолчанию
     */
    static setValueDefault(code?: string | (() => string)): void;
}
import { ComputedRef, Ref } from 'vue';
import { GeoUnit, NumberOrString } from '@dxtmisha/functional-basic';
/**
 * Reactive class for managing localized unit formatting and automatic conversions.
 *
 * Реактивный класс для управления локализованным форматированием единиц измерения и автоматической конвертацией.
 */
export declare class GeoUnitRef {
    /** Location reference / Ссылка на локацию */
    /**
     * Constructor.
     * @param code country code, full form language-country or one of them / код страны, полный вид язык-страна или один из них
     */
    constructor(code?: RefOrNormal<string>);
    /**
     * Returns the standard location code.
     *
     * Возвращает стандартный код местоположения.
     * @returns standard location code / стандартный код местоположения
     */
    getLocation(): ComputedRef<string>;
    /**
     * Formats millimeter value, converting to inches if overridden by locale unit settings.
     *
     * Форматирует значение в миллиметрах, конвертируя в дюймы, если это переопределено настройками локали.
     * @param value numeric value to format / числовое значение для форматирования
     * @param options formatting options / параметры форматирования
     * @returns computed formatted unit string / вычисляемая отформатированная строка единицы измерения
     */
    millimeter(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /**
     * Formats centimeter value, converting to inches if overridden by locale unit settings.
     *
     * Форматирует значение в сантиметрах, конвертируя в дюймы, если это переопределено настройками локали.
     * @param value numeric value to format / числовое значение для форматирования
     * @param options formatting options / параметры форматирования
     * @returns computed formatted unit string / вычисляемая отформатированная строка единицы измерения
     */
    centimeter(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /**
     * Formats meter value, converting to feet if overridden by locale unit settings.
     *
     * Форматирует значение в метрах, конвертируя в футы, если это переопределено настройками локали.
     * @param value numeric value to format / числовое значение для форматирования
     * @param options formatting options / параметры форматирования
     * @returns computed formatted unit string / вычисляемая отформатированная строка единицы измерения
     */
    meter(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /**
     * Formats kilometer value, converting to miles if overridden by locale unit settings.
     *
     * Форматирует значение в километрах, конвертируя в мили, если это переопределено настройками локали.
     * @param value numeric value to format / числовое значение для форматирования
     * @param options formatting options / параметры форматирования
     * @returns computed formatted unit string / вычисляемая отформатированная строка единицы измерения
     */
    kilometer(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /**
     * Formats square meter value, converting to square feet if overridden by locale unit settings.
     *
     * Форматирует значение в квадратных метрах, конвертируя в квадратные футы, если это переопределено настройками локали.
     * @param value numeric value to format / числовое значение для форматирования
     * @param options formatting options / параметры форматирования
     * @returns computed formatted unit string / вычисляемая отформатированная строка единицы измерения
     */
    squareMeter(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /**
     * Formats hectare value, converting to acres if overridden by locale unit settings.
     *
     * Форматирует значение в гектарах, конвертируя в акры, если это переопределено настройками локали.
     * @param value numeric value to format / числовое значение для форматирования
     * @param options formatting options / параметры форматирования
     * @returns computed formatted unit string / вычисляемая отформатированная строка единицы измерения
     */
    hectare(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /**
     * Formats gram value, converting to ounces if overridden by locale unit settings.
     *
     * Форматирует значение в граммах, конвертируя в унции, если это переопределено настройками локали.
     * @param value numeric value to format / числовое значение для форматирования
     * @param options formatting options / параметры форматирования
     * @returns computed formatted unit string / вычисляемая отформатированная строка единицы измерения
     */
    gram(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /**
     * Formats kilogram value, converting to pounds if overridden by locale unit settings.
     *
     * Форматирует значение в килограммах, конвертируя в фунты, если это переопределено настройками локали.
     * @param value numeric value to format / числовое значение для форматирования
     * @param options formatting options / параметры форматирования
     * @returns computed formatted unit string / вычисляемая отформатированная строка единицы измерения
     */
    kilogram(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /**
     * Formats tonne value, converting to short tons if overridden by locale unit settings.
     *
     * Форматирует значение в тоннах, конвертируя в короткие тонны, если это переопределено настройками локали.
     * @param value numeric value to format / числовое значение для форматирования
     * @param options formatting options / параметры форматирования
     * @returns computed formatted unit string / вычисляемая отформатированная строка единицы измерения
     */
    tonne(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /**
     * Formats milliliter value, converting to fluid ounces if overridden by locale unit settings.
     *
     * Форматирует значение в миллилитрах, конвертируя в жидкие унции, если это переопределено настройками локали.
     * @param value numeric value to format / числовое значение для форматирования
     * @param options formatting options / параметры форматирования
     * @returns computed formatted unit string / вычисляемая отформатированная строка единицы измерения
     */
    milliliter(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /**
     * Formats liter value, converting to gallons if overridden by locale unit settings.
     *
     * Форматирует значение в литрах, конвертируя в галлоны, если это переопределено настройками локали.
     * @param value numeric value to format / числовое значение для форматирования
     * @param options formatting options / параметры форматирования
     * @returns computed formatted unit string / вычисляемая отформатированная строка единицы измерения
     */
    liter(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /**
     * Formats celsius value, converting to fahrenheit if overridden by locale unit settings.
     *
     * Форматирует значение в градусах Цельсия, конвертируя в градусы Фаренгейта, если это переопределено настройками локали.
     * @param value numeric value to format / числовое значение для форматирования
     * @param options formatting options / параметры форматирования
     * @returns computed formatted unit string / вычисляемая отформатированная строка единицы измерения
     */
    celsius(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /**
     * Formats kilometer per hour value, converting to miles per hour if overridden by locale unit settings.
     *
     * Форматирует значение в километрах в час, конвертируя в мили в час, если это переопределено настройками локали.
     * @param value numeric value to format / числовое значение для форматирования
     * @param options formatting options / параметры форматирования
     * @returns computed formatted unit string / вычисляемая отформатированная строка единицы измерения
     */
    kilometerPerHour(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /**
     * Formats the value for the specified unit reactively, converting and formatting it according to the locale.
     *
     * Форматирует значение для указанной единицы измерения реактивно, преобразуя и форматируя его в соответствии с локалью.
     * @param value numeric value to format / числовое значение для форматирования
     * @param unit unit of measurement / единица измерения
     * @param options formatting options / параметры форматирования
     * @returns computed formatted unit string / вычисляемая отформатированная строка единицы измерения
     */
    format(value: RefOrNormal<NumberOrString>, unit: RefOrNormal<string>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
}
import { ComputedRef } from 'vue';
/**
 * Class for managing the data list.
 *
 * Класс для управления списком данных.
 */
export declare class ListDataRef {
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
     * @returns reactive list of items/ реактивный список элементов
     */
    readonly data: ComputedRef<ListList>;
    /**
     * Returns a simplified list for quick loading.
     *
     * Возвращает упрощенный список для быстрой загрузки.
     * @returns simplified reactive list/ упрощенный реактивный список
     */
    readonly liteData: ComputedRef<ListList>;
    /**
     * Returns a list of records with all additional data (focus, selection, disabled status).
     *
     * Возвращает список записей со всеми дополнительными данными (фокус, выделение, статус активности).
     * @returns full reactive list/ полный реактивный список
     */
    readonly fullData: ComputedRef<ListDataFull>;
    /**
     * Returns a flat map of all entries including sublists.
     *
     * Возвращает плоскую карту всех записей, включая подсписки.
     * @returns reactive flat list/ реактивный плоский список
     */
    readonly map: ComputedRef<ListList>;
    /**  Returns a list consisting only of items/ Возвращает список, состоящий только из элементов. */
    readonly mapItems: ComputedRef<ListList>;
    /**
     * Returns a list consisting only of values for selection (item, group, menu).
     *
     * Возвращает список, состоящий только из значений для выбора (item, group, menu).
     * @returns reactive list/ реактивный список
     */
    readonly items: ComputedRef<ListList>;
    /**
     * Finds the first element that meets the search conditions.
     *
     * Находит первый элемент, соответствующий условиям поиска.
     * @returns first found index/ первый найденный индекс
     */
    readonly highlightFirstItem: ComputedRef<number>;
    /**
     * Is there a selected item.
     *
     * Есть ли выбранный элемент.
     * @returns true if selection exists/ true, если есть выбор
     */
    readonly isSelected: ComputedRef<boolean>;
    /**
     * Is the minimum selection reached.
     *
     * Достигнуто ли минимальное выделение.
     * @returns true if minimum reached/ true, если минимум достигнут
     */
    readonly isSelectedMin: ComputedRef<boolean>;
    /**
     * Is the maximum selection reached.
     *
     * Достигнуто ли максимальное выделение.
     * @returns true if maximum reached/ true, если максимум достигнут
     */
    readonly isSelectedMax: ComputedRef<boolean>;
    /**
     * Returns a list of selected items on the map.
     *
     * Возвращает список выделенных элементов на карте.
     * @returns reactive list of selected items/ реактивный список выделенных элементов
     */
    readonly selectedList: ComputedRef<ListList>;
    /**
     * Returns a list of selected items in the current group.
     *
     * Возвращает список выделенных элементов в текущей группе.
     * @returns reactive list of selected items in group/ реактивный список выделенных элементов в группе
     */
    readonly selectedListInGroup: ComputedRef<ListList>;
    /**
     * Returns a list of selected labels on the map.
     *
     * Возвращает список названий выделенных элементов на карте.
     * @returns reactive list of labels/ реактивный список названий
     */
    readonly selectedNames: ComputedRef<ListNames>;
    /**
     * Returns a list of selected values on the map.
     *
     * Возвращает список значений выделенных элементов на карте.
     * @returns reactive list of values/ реактивный список значений
     */
    readonly selectedValues: ComputedRef<any[]>;
    /**
     * Checks whether it is necessary to first display a simplified version.
     *
     * Проверяет, надо ли сначала вывести упрощенную версию.
     * @returns true if lite mode is active/ true, если активен облегченный режим
     */
    isLite(): boolean;
    /**
     * Checks if an element is in focus.
     *
     * Проверяет, есть ли элемент в фокусе.
     * @returns true if focus exists/ true, если есть фокус
     */
    isFocus(): boolean;
    /**
     * Checks if there is a highlighted item (search results).
     *
     * Проверяет, есть ли найденный элемент (результаты поиска).
     * @returns true if highlight exists/ true, если есть совпадения
     */
    isHighlight(): boolean;
    /**
     * Checks if highlighting is active (minimum length reached).
     *
     * Проверяет, активно ли выделение (достигнута минимальная длина).
     * @returns true if active/ true, если активно
     */
    isHighlightActive(): boolean;
    /**
     * Returns the number of records in the current list.
     *
     * Возвращает количество записей в текущем списке.
     * @returns length/ количество
     */
    getLength(): number;
    /**
     * Returns the number of all available records in the map.
     *
     * Возвращает количество всех доступных записей в карте.
     * @returns length/ количество
     */
    getLengthByMap(): number;
    /**
     * Returns the number of all available records (items).
     *
     * Возвращает количество всех доступных записей (элементы).
     * @returns length/ количество
     */
    getLengthByItems(): number;
    /**
     * Returns the identifier in focus.
     *
     * Возвращает идентификатор в фокусе.
     * @returns focus identifier/ идентификатор в фокусе
     */
    getFocus(): ListSelectedItem | undefined;
    /**
     * Returns the item in focus.
     *
     * Возвращает элемент в фокусе.
     * @returns item in focus/ элемент в фокусе
     */
    getFocusItem(): ListDataItem | undefined;
    /**
     * Returns the highlight text.
     *
     * Возвращает текст для выделения.
     * @returns text/ текст
     */
    getHighlight(): string | undefined;
    /**
     * Returns the minimum length for highlight to start.
     *
     * Возвращает минимальную длину для начала выделения.
     * @returns length/ длина
     */
    getHighlightLengthStart(): number;
    /**
     * Returns the selected identifiers list.
     *
     * Возвращает список выбранных идентификаторов.
     * @returns list/ список
     */
    getSelected(): ListSelectedList | undefined;
    /**
     * Returns an item by moving a certain number of steps from the selected item.
     *
     * Возвращает элемент, перемещаясь на определенное количество шагов от выбранного элемента.
     * @param step number of steps/ количество шагов
     * @returns target item index/ индекс целевого элемента
     */
    getSelectedByStep(step: number): ListSelectedItem | undefined;
    /**
     * Returns the next item from the selected one.
     *
     * Возвращает следующий элемент от выбранного.
     * @returns next item index/ индекс следующего элемента
     */
    getSelectedNext(): ListSelectedItem | undefined;
    /**
     * Returns the previous item from the selected one.
     *
     * Возвращает предыдущий элемент от выбранного.
     * @returns previous item index/ индекс предыдущего элемента
     */
    getSelectedPrev(): ListSelectedItem | undefined;
    /**
     * Returns an item by moving a certain number of steps from the specified item.
     *
     * Возвращает элемент, перемещаясь на определенное количество шагов от указанного элемента.
     * @param item item/ элемент
     * @param step number of steps/ количество шагов
     * @returns target item/ целевой элемент
     */
    getItemByStep(item: ListDataItem, step: number): ListDataItem | undefined;
    /**
     * Returns the next item from the specified one.
     *
     * Возвращает следующий элемент от указанного.
     * @param item item/ элемент
     * @returns next item/ следующий элемент
     */
    getItemNext(item: ListDataItem): ListDataItem | undefined;
    /**
     * Returns the previous item from the specified one.
     *
     * Возвращает предыдущий элемент от указанного.
     * @param item item/ элемент
     * @returns previous item/ предыдущий элемент
     */
    getItemPrev(item: ListDataItem): ListDataItem | undefined;
    /**
     * Returns an item by moving a certain number of steps from the specified index.
     *
     * Возвращает элемент, перемещаясь на определенное количество шагов от указанного индекса.
     * @param index item index/ индекс элемента
     * @param step number of steps/ количество шагов
     * @returns target item/ целевой элемент
     */
    getIndexByStep(index: string, step: number): ListDataItem | undefined;
    /**
     * Returns the next item from the specified index.
     *
     * Возвращает следующий элемент от указанного индекса.
     * @param index item index/ индекс элемента
     * @returns next item/ следующий элемент
     */
    getIndexNext(index: string): ListDataItem | undefined;
    /**
     * Returns the previous item from the specified index.
     *
     * Возвращает предыдущий элемент от указанного индекса.
     * @param index item index/ индекс элемента
     * @returns previous item/ предыдущий элемент
     */
    getIndexPrev(index: string): ListDataItem | undefined;
    /**
     * Returns an item by its index.
     *
     * Возвращает элемент по его индексу.
     * @param index item index/ индекс элемента
     * @returns found item details/ информация о найденном элементе
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
     * @returns found item/ найденный элемент
     */
    getItemByKey(key: number): ListDataItem | undefined;
    /**
     * Returns the first item with the specified parent.
     *
     * Возвращает первый элемент с указанным родителем.
     * @param parent parent identifier to search for / идентификатор родителя для поиска
     * @returns first item/ первый элемент
     */
    getFirstItemByParent(parent: string | undefined): ListDataItem | undefined;
    /**
     * Returns the last item with the specified parent.
     *
     * Возвращает последний элемент с указанным родителем.
     * @param parent parent identifier to search for / идентификатор родителя для поиска
     * @returns last item/ последний элемент
     */
    getLastItemByParent(parent: string | undefined): ListDataItem | undefined;
    /**
     * Returns a sublist object for a group item.
     *
     * Возвращает объект подсписка для группового элемента.
     * @param item List item data/ данные элемента списка
     * @returns sublist instance/ экземпляр подсписка
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
    protected isInParent(parent: string | undefined, item: ListDataItem): boolean;
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
import { RouteLocationRaw, Router, _RouterClassic } from 'vue-router';
/**
 * Router management class.
 *
 * Класс управления роутером.
 */
export declare class RouterItemRef {
    /**
     * Get router instance.
     *
     * Получить экземпляр роутера.
     */
    static get(): _RouterClassic;
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
import { Ref, ComputedRef } from 'vue';
/**
 * Class for getting the scroll width as a reactive item.
 *
 * Класс для получения ширины скролла в виде реактивного элемента.
 */
export declare class ScrollbarWidthRef {
    /** Reactive item/ Реактивный элемент */
    readonly item: Ref<boolean | undefined, boolean | undefined>;
    /** Reactive width/ Реактивная ширина */
    readonly width: Ref<number, number>;
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
import { ApiInstance, ApiData, ApiDataValidation, ApiErrorStorageList } from '@dxtmisha/functional-basic';
/**
 * Asynchronous reactive composable for API requests with built-in SSR support.
 * Wraps `useApiRef` and immediately calls `initSsr()` to ensure data is pre-fetched on the server side.
 * Use this composable ONLY if you need the request to be executed on the server side during SSR.
 * For all other cases, use `useApiRef`.
 *
 * Асинхронный реактивный composable для API запросов со встроенной поддержкой SSR.
 * Оборачивает `useApiRef` и сразу вызывает `initSsr()`, чтобы гарантировать предзагрузку данных на сервере.
 * Используйте этот composable ТОЛЬКО если вам необходимо, чтобы запрос был выполнен на стороне сервера
 * во время SSR. Во всех остальных случаях используйте обычный `useApiRef`.
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
 *
 * @param path path to request (can be a Ref or Getter) / путь к запросу (может быть Ref или Getter)
 * @param options data for the request (headers, method, etc.) / данные для запроса (заголовки, метод и т.д.)
 * @param reactivity should reactivity be enabled (automatically re-fetch on deps change) /
 * включить ли реактивность (автоматически повторять запрос при изменении зависимостей)
 * @param conditions conditions for executing the request (request will wait until true) /
 * условия выполнения запроса (запрос будет ждать пока не станет true)
 * @param transformation transforms the received response data / преобразовывает полученные данные ответа
 * @param validateResponseContract function to validate response data contract. Used to ensure that the API
 * response matches the expected structure. Highly recommended to use with `@effect/schema`.
 * It should return `ApiDataValidation` containing a `status` ('success' or 'error')
 * and the parsed data or errors. /
 * Функция для проверки контракта данных ответа. Используется для гарантии того, что ответ API соответствует
 * ожидаемой структуре. Настоятельно рекомендуется использовать с `@effect/schema`. Должна возвращать объект
 * `ApiDataValidation`, содержащий `status` ('success' или 'error') и распарсенные данные или ошибки.
 * @param errorContract array of expected error contracts for the request (`ApiErrorStorageList`).
 * Highly recommended to add if there is information about possible request errors. Allows you to predefine
 * possible errors (by code, status, or custom validation). If an error occurs matching one of these contracts,
 * it will be automatically processed and made available via the `errorItem` computed property. /
 * Массив контрактов ожидаемых ошибок для запроса (`ApiErrorStorageList`). Желательно добавлять, если есть
 * информация о возможных ошибках запроса. Позволяет заранее описать возможные ошибки (по коду, статусу или
 * кастомной валидации). Если возникает ошибка, совпадающая с одним из контрактов, она автоматически
 * обрабатывается и становится доступной через вычисляемое свойство `errorItem` для удобного отображения в UI.
 * @param unmounted whether to stop the request and clear data from cache when component is unmounted /
 * нужно ли останавливать запрос и удалять данные из кеша при размонтировании компонента
 * @param apiInstance Api instance (defaults to global Api instance) /
 * Экземпляр Api (по умолчанию используется глобальный экземпляр Api)
 */
export declare function useApiAsyncRef<R, T = R>(path?: RefOrNormal<string | undefined>, options?: ApiOptions, reactivity?: boolean, conditions?: RefType<boolean>, transformation?: (data: T, isResponseContractValid?: ApiDataValidation) => ApiData<R>, validateResponseContract?: (data: T) => ApiDataValidation, errorContract?: ApiErrorStorageList, unmounted?: boolean, apiInstance?: ApiInstance): UseApiRef<R>;
import { ApiData, ApiFetch } from '@dxtmisha/functional-basic';
import { Ref } from 'vue';
/**
 * Setup interface for API DELETE request.
 *
 * Интерфейс настроек для DELETE запроса API.
 */
export interface UseApiDeleteSetup<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>> extends Omit<UseApiRequestSetup<T, Request, Return>, 'method'> {
}
/**
 * Use API delete request.
 * This is a convenient wrapper over `useApiRequest` that pre-fills the DELETE method.
 *
 * Использование API delete запроса.
 * Это удобная обертка над `useApiRequest`, которая предустанавливает метод DELETE.
 * @param setup Configured parameters as a single object / Настроенные параметры в виде единого объекта
 * @returns Object with loading state and send method / Объект с состоянием загрузки и методом отправки
 */
export declare function useApiDelete<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>>(setup: UseApiDeleteSetup<T, Request, Return>): {
    loading: Ref<boolean, boolean>;
    send(request?: Request | undefined): Promise<Return | undefined>;
};
import { ApiData, ApiFetch } from '@dxtmisha/functional-basic';
import { Ref } from 'vue';
/**
 * Setup interface for API GET request.
 *
 * Интерфейс настроек для GET запроса API.
 */
export interface UseApiGetSetup<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>> extends Omit<UseApiRequestSetup<T, Request, Return>, 'method'> {
}
/**
 * Use API get request.
 * This is a convenient wrapper over `useApiRequest` that pre-fills the GET method.
 *
 * Использование API get запроса.
 * Это удобная обертка над `useApiRequest`, которая предустанавливает метод GET.
 * @param setup Configured parameters as a single object / Настроенные параметры в виде единого объекта
 * @returns Object with loading state and send method / Объект с состоянием загрузки и методом отправки
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
import { Ref, ComputedRef } from 'vue';
import { FormattersOptionsList, ApiData, ApiInstance, ArrayToItem, SearchColumns, SearchFormatList, FormattersListColumns, ApiFetch, ApiDataValidation, ApiErrorItem } from '@dxtmisha/functional-basic';
/**
 * A powerful composable for comprehensive API request orchestration.
 * It centrally manages data loading (GET), list formatting, client-side searching,
 * and mutations (POST, PUT, DELETE) through a single reactive interface.
 *
 * Мощный композабл для комплексной оркестрации API-запросов.
 * Он централизованно управляет загрузкой данных (GET), форматированием списков,
 * клиентским поиском и мутациями (POST, PUT, DELETE) через единый реактивный интерфейс.
 *
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
 *
 * @returns reactive API management interface / реактивный интерфейс управления API
 *
 * @note This hook is recommended to be used in tandem with `executeUse` for centralized state management.
 * By wrapping `useApiManagementRef` in `executeUseProvide` or `executeUseGlobal`, you can ensure
 * a single source of truth across the component tree or the entire application.
 *
 * Рекомендуется использовать этот хук в тандеме с `executeUse` для централизованного управления состоянием.
 * Обернув `useApiManagementRef` в `executeUseProvide` или `executeUseGlobal`, вы обеспечите
 * единый источник истины в дереве компонентов или во всем приложении.
 *
 * @remarks
 * Data formatting guidelines for `formattersOptions`:
 * - **Recommended for formatting:** Numbers that represent values (prices, counts), dates, currency, units, and statuses.
 * - **Not recommended for formatting:** Technical identifiers such as ID, UUID, account numbers (if used for logic), types, or internal codes.
 *
 * Рекомендации по форматированию данных для `formattersOptions`:
 * - **Рекомендуется для форматирования:** Числа, представляющие значения (цены, количества), даты, валюта, единицы измерения и статусы.
 * - **Не рекомендуется для форматирования:** Технические идентификаторы, такие как ID, UUID, номера счетов (если они используются для логики), типы или внутренние коды.
 *
 * @example
 * // 1. Comprehensive API orchestration/ Комплексная оркестрация API
 * const products = useApiManagementRef(
 *   {
 *     path: '/api/v1/products',
 *     skeleton: () => Array(5).fill({ id: 0, name: 'Loading...', price: 0 })
 *   },
 *   {
 *     // Formatters for display/ Форматтеры для отображения
 *     price: (v) => `${v} USD`,
 *     created_at: (v) => new Date(v).toLocaleDateString()
 *   },
 *   {
 *     // Client-side search setup/ Настройка поиска на стороне клиента
 *     columns: ['name', 'category']
 *   },
 *   { path: '/api/v1/products' }, // POST (create)
 *   { path: (data) => `/api/v1/products/${data.id}` }, // PUT (update)
 *   { path: (data) => `/api/v1/products/${data.id}` }  // DELETE (remove)
 * );
 *
 * // Accessing data/ Доступ к данным:
 * // products.list.value -> processed, formatted, and searched list
 * // products.sendPost({ name: 'New Product', price: 100 }) -> execute mutation
 */
export declare function useApiManagementRef<Return extends ApiManagementValue, FormattersOptions extends FormattersOptionsList, Post extends Record<string, any>, Put extends Record<string, any>, Delete extends Record<string, any>, Type extends ApiManagementValue = Return, Item extends ArrayToItem<Return> = ArrayToItem<Return>, ItemFormatters extends FormattersListColumns<Item, FormattersOptions>[number] = FormattersListColumns<Item, FormattersOptions>[number], Columns extends SearchColumns<ItemFormatters> = []>(propsGet: ApiManagementGet<Return, Type>, formattersOptions?: FormattersOptions, searchOptions?: ApiManagementSearch<Item, Columns>, postRequest?: ApiManagementRequest<Post>, putRequest?: ApiManagementRequest<Put>, deleteRequest?: ApiManagementRequest<Delete>, action?: () => Promise<void> | void, apiInstance?: ApiInstance): {
    /** Whether data passed the `typeData` check / `true`, если данные прошли проверку `typeData` */
    isValid: ComputedRef<boolean>;
    /** Status of response contract validation / Статус валидации контракта ответа */
    isResponseContractValid: ComputedRef<boolean>;
    /** Result of response validation / Результат валидации ответа */
    responseValidationResult: ComputedRef< ApiDataValidation | undefined>;
    /** Processed data array (supports Skeleton, formatters, and search) / Обработанный массив данных (поддерживает Skeleton, форматтеры и поиск) */
    list: ComputedRef<SearchFormatList<ItemFormatters, Columns>>;
    /** Raw reactive data from `useApiRef` / «Сырые» реактивные данные из `useApiRef` */
    readonly data: ComputedRef<ApiData<Return> | undefined>;
    /** Current error from request / Текущая ошибка ответа */
    errorItem: ComputedRef< ApiErrorItem | undefined>;
    /** Current number of items in `list` (changes with search) / Текущее количество элементов в `list` (меняется при поиске) */
    readonly length: ComputedRef<number>;
    /** Total number of items in raw `data` / Общее количество элементов в исходном `data` */
    lengthData: ComputedRef<number>;
    /** Initial loading flag (true when no data yet) / Флаг первичной загрузки (когда данных еще нет) */
    starting: ComputedRef<boolean>;
    /** Active read process flag / Флаг активного процесса чтения данных */
    reading: Ref<boolean, boolean>;
    /** Loading state for the main GET request / Общее состояние загрузки главного GET-запроса */
    loading: Ref<boolean, boolean>;
    /** Loading state during search processing / Состояние загрузки в процессе поиска */
    loadingSearch: Ref<boolean, boolean> | undefined;
    /** Loading state for POST mutation / Состояние загрузки для POST мутации */
    loadingPost: Ref<boolean, boolean> | undefined;
    /** Loading state for PUT mutation / Состояние загрузки для PUT мутации */
    loadingPut: Ref<boolean, boolean> | undefined;
    /** Loading state for DELETE mutation / Состояние загрузки для DELETE мутации */
    loadingDelete: Ref<boolean, boolean> | undefined;
    /** Whether search is currently active / Активен ли поиск (есть ли поисковый запрос) */
    isSearch: ComputedRef<boolean> | undefined;
    /** Reactive search string (Proxy to `searchOptions.value`) / Реактивная строка поиска (Proxy к переданному `searchOptions.value`) */
    search: Ref<string>;
    /**
     * Manual initialization
     *
     * Ручная инициализация
     */
    init: () => void;
    /**
     * SSR initialization
     *
     * Инициализация SSR
     */
    initSsr: () => void;
    /**
     * Default reset
     *
     * Сброс по умолчанию
     */
    /**
     * Force reset the GET request and clear state.
     *
     * Принудительный перезапуск GET-запроса и очистка состояния.
     */
    reset: () => Promise<void>;
    /**
     * Abort the current network request.
     *
     * Прекращение текущего сетевого запроса.
     */
    abort: () => void;
    /**
     * Execute POST mutation request.
     *
     * Выполнить POST запрос мутации.
     * @param request request data / данные запроса
     */
    sendPost: (request?: ApiFetch["request"]) => Promise<ApiData<Post> | undefined>;
    /**
     * Execute PUT mutation request.
     *
     * Выполнить PUT запрос мутации.
     * @param request request data / данные запроса
     */
    sendPut: (request?: ApiFetch["request"]) => Promise<ApiData<Put> | undefined>;
    /**
     * Execute DELETE mutation request.
     *
     * Выполнить DELETE запрос мутации.
     * @param request request data / данные запроса
     */
    sendDelete: (request?: ApiFetch["request"]) => Promise<ApiData<Delete> | undefined>;
};
import { ApiData, ApiFetch } from '@dxtmisha/functional-basic';
import { Ref } from 'vue';
/**
 * Setup interface for API POST request.
 *
 * Интерфейс настроек для POST запроса API.
 */
export interface UseApiPostSetup<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>> extends Omit<UseApiRequestSetup<T, Request, Return>, 'method'> {
}
/**
 * Use API post request.
 * This is a convenient wrapper over `useApiRequest` that pre-fills the POST method.
 *
 * Использование API post запроса.
 * Это удобная обертка над `useApiRequest`, которая предустанавливает метод POST.
 * @param setup Configured parameters as a single object / Настроенные параметры в виде единого объекта
 * @returns Object with loading state and send method / Объект с состоянием загрузки и методом отправки
 */
export declare function useApiPost<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>>(setup: UseApiPostSetup<T, Request, Return>): {
    loading: Ref<boolean, boolean>;
    send(request?: Request | undefined): Promise<Return | undefined>;
};
import { ApiData, ApiFetch } from '@dxtmisha/functional-basic';
import { Ref } from 'vue';
/**
 * Setup interface for API PUT request.
 *
 * Интерфейс настроек для PUT запроса API.
 */
export interface UseApiPutSetup<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>> extends Omit<UseApiRequestSetup<T, Request, Return>, 'method'> {
}
/**
 * Use API put request.
 * This is a convenient wrapper over `useApiRequest` that pre-fills the PUT method.
 *
 * Использование API put запроса.
 * Это удобная обертка над `useApiRequest`, которая предустанавливает метод PUT.
 * @param setup Configured parameters as a single object / Настроенные параметры в виде единого объекта
 * @returns Object with loading state and send method / Объект с состоянием загрузки и методом отправки
 */
export declare function useApiPut<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>>(setup: UseApiPutSetup<T, Request, Return>): {
    loading: Ref<boolean, boolean>;
    send(request?: Request | undefined): Promise<Return | undefined>;
};
import { ComputedRef, Ref } from 'vue';
import { ApiInstance, ApiData, ApiDataValidation, ApiErrorStorageList, ApiErrorItem } from '@dxtmisha/functional-basic';
/**
 * Use api ref return type.
 *
 * Тип возвращаемого значения для useApiRef.
 */
export interface UseApiRef<R> {
    /** Reactive data (Computed) / Реактивные данные (Computed) */
    data: ComputedRef<ApiData<R> | undefined>;
    /** Item (Ref) / Элемент (Ref) */
    item: Ref<ApiData<R> | undefined>;
    /** Error item (Computed) / Элемент ошибки (Computed) */
    errorItem: ComputedRef<ApiErrorItem | undefined>;
    /**
     * Status of response contract validation.
     *
     * Статус валидации контракта ответа.
     */
    isResponseContractValid: ComputedRef<boolean>;
    /**
     * Result of response validation.
     *
     * Результат валидации ответа.
     */
    responseValidationResult: ComputedRef<ApiDataValidation | undefined>;
    /** Length of the list (Computed) / Длина списка (Computed) */
    length: ComputedRef<number>;
    /** Start request flag (true if no data yet) / Флаг начала запроса (true если еще нет данных) */
    starting: ComputedRef<boolean>;
    /** Request load flag / Флаг загрузки запроса */
    loading: Ref<boolean>;
    /** Active reading flag / Флаг активного чтения */
    reading: Ref<boolean>;
    /** Checks if the request is starting (true if no data yet) / Проверяет, начинается ли запрос (true, если данных еще нет) */
    isStarting(): boolean;
    /**
     * Checks if the request is currently loading.
     *
     * Проверяет, загружается ли запрос в данный момент.
     */
    isLoading(): boolean;
    /**
     * Checks if the request is currently reading.
     *
     * Проверяет, читается ли запрос в данный момент.
     */
    isReading(): boolean;
    /**
     * Gets the current item data.
     *
     * Получает текущие данные элемента.
     */
    getItem(): ApiData<R> | undefined;
    /**
     * Manual initialization
     *
     * Ручная инициализация
     */
    init(): void;
    /**
     * SSR initialization
     *
     * Инициализация SSR
     */
    initSsr(): void;
    /**
     * Default reset.
     *
     * Сброс по умолчанию.
     */
    reset(): Promise<void>;
    /**
     * Stop request.
     *
     * Остановка запроса.
     */
    stop(): void;
    /**
     * Abort request.
     *
     * Отмена запроса.
     */
    abort(): void;
}
/**
 * Main reactive composable for working with API requests in Vue.
 * Automatically handles SSR, reactivity, caching, error storage, data validation, and transformation.
 *
 * Главный реактивный composable для работы с API запросами во Vue.
 * Автоматически обрабатывает SSR, реактивность, кэширование, хранение ошибок, валидацию данных и трансформацию.
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
 *
 * @param path path to request (can be a Ref or Getter) / путь к запросу (может быть Ref или Getter)
 * @param options data for the request (headers, method, etc.) / данные для запроса (заголовки, метод и т.д.)
 * @param reactivity should reactivity be enabled (automatically re-fetch on deps change) /
 * включить ли реактивность (автоматически повторять запрос при изменении зависимостей)
 * @param conditions conditions for executing the request (request will wait until true) /
 * условия выполнения запроса (запрос будет ждать пока не станет true)
 * @param transformation transforms the received response data / преобразовывает полученные данные ответа
 * @param validateResponseContract function to validate response data contract. Used to ensure that the API
 * response matches the expected structure. Highly recommended to use with `@effect/schema`.
 * It should return `ApiDataValidation` containing a `status` ('success' or 'error')
 * and the parsed data or errors. /
 * Функция для проверки контракта данных ответа. Используется для гарантии того, что ответ API соответствует
 * ожидаемой структуре. Настоятельно рекомендуется использовать с `@effect/schema`. Должна возвращать объект
 * `ApiDataValidation`, содержащий `status` ('success' или 'error') и распарсенные данные или ошибки.
 * @param errorContract array of expected error contracts for the request (`ApiErrorStorageList`).
 * Highly recommended to add if there is information about possible request errors. Allows you to predefine
 * possible errors (by code, status, or custom validation). If an error occurs matching one of these contracts,
 * it will be automatically processed and made available via the `errorItem` computed property. /
 * Массив контрактов ожидаемых ошибок для запроса (`ApiErrorStorageList`). Желательно добавлять, если есть
 * информация о возможных ошибках запроса. Позволяет заранее описать возможные ошибки (по коду, статусу или
 * кастомной валидации). Если возникает ошибка, совпадающая с одним из контрактов, она автоматически
 * обрабатывается и становится доступной через вычисляемое свойство `errorItem` для удобного отображения в UI.
 * @param unmounted whether to stop the request and clear data from cache when component is unmounted /
 * нужно ли останавливать запрос и удалять данные из кеша при размонтировании компонента
 * @param apiInstance Api instance (defaults to global Api instance) /
 * Экземпляр Api (по умолчанию используется глобальный экземпляр Api)
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
/**
 * Use api request.
 *
 * Использование запроса api.
 * @param setup Configured parameters as a single object / Настроенные параметры в виде единого объекта
 * @returns Object with loading state and send method / Объект с состоянием загрузки и методом отправки
 */
export declare function useApiRequest<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>>({ path, method, action, transformation, validateRequestContract, validateResponseContract, errorContract, toData, options, apiInstance }: UseApiRequestSetup<T, Request, Return>): {
    /** Loading state / Состояние загрузки */
    loading: Ref<boolean, boolean>;
    /**
     * Send request.
     *
     * Отправка запроса.
     * @param request Request data / Данные запроса
     * @returns Response data / Данные ответа
     */
    send(request?: Request): Promise<Return | undefined>;
};
import { Ref } from 'vue';
type BroadcastValueItem<T> = T | string | undefined;
/**
 * Creates a reactive variable to manage data between browser tabs.
 *
 * Создает реактивную переменную для управления данными между вкладками браузера.
 * @param name value name/ название значения
 * @param defaultValue default value/ значение по умолчанию
 */
export declare function useBroadcastValueRef<T>(name: string, defaultValue?: T | string | (() => (T | string))): Ref<BroadcastValueItem<T>>;
export {};
import { Ref } from 'vue';
import { CookieOptions } from '@dxtmisha/functional-basic';
/**
 * Creates a reactive variable to manage cookies.
 *
 * Создает реактивную переменную для управления cookie.
 * @param name cookie name / название cookie
 * @param defaultValue value or function to change data / значение или функция для изменения данных
 * @param options additional parameters / дополнительные параметры
 */
export declare function useCookieRef<T>(name: string, defaultValue?: T | string | (() => (T | string)), options?: CookieOptions): Ref<T | string | undefined>;
import { FormattersListProp, FormattersOptionsList, FormattersReturn } from '@dxtmisha/functional-basic';
import { ComputedRef } from 'vue';
/**
 * Composable for reactive formatting of data lists based on specified rules for each property. /
 * Композабл для реактивного форматирования списков данных на основе заданных правил для каждого свойства.
 * @param list source data list (Ref or ComputedRef) / исходный список данных (Ref или ComputedRef)
 * @param options formatting settings for each property / настройки форматирования для каждого свойства
 */
export declare function useFormattersRef<Options extends FormattersOptionsList = FormattersOptionsList, List extends FormattersListProp = FormattersListProp>(list: RefType<List | undefined>, options: Options): {
    /**
     * Formatted data list (ComputedRef) /
     * Отформатированный список данных (ComputedRef)
     */
    listFormat: ComputedRef<FormattersReturn<List, Options>>;
    /**
     * Returns the count of records in the list (ComputedRef) /
     * Возвращает количество записей в списке (ComputedRef)
     */
    length: ComputedRef<number>;
};
/**
 * Returns a class object for working with data formatting.
 *
 * Возвращает объект класса для работы с форматированием данных.
 *
 * @remarks
 * Avoid using this reactive composable if reactive updates are not required.
 * For non-reactive formatting, use the standard `GeoIntl` class from `@dxtmisha/functional-basic`.
 *
 * Старайтесь избегать этого хука, если не требуется реактивная переменная.
 * Для нереактивного форматирования используйте обычный `GeoIntl` из `@dxtmisha/functional-basic`.
 */
export declare function useGeoIntlRef(): GeoIntlRef;
/**
 * Returns a class object for working with unit formatting and automatic conversions.
 *
 * Возвращает объект класса для работы с форматированием единиц измерения и автоматической конвертацией.
 */
export declare function useGeoUnitRef(): GeoUnitRef;
import { ShallowRef } from 'vue';
/**
 * Creates a reactive variable to manage the hash.
 *
 * Создает реактивную переменную для управления хэшем.
 * @param name value name / название значения
 * @param defaultValue default value / значение по умолчанию
 */
export declare function useHashRef<T>(name: string, defaultValue?: T | (() => T)): ShallowRef<T>;
import { ShallowRef } from 'vue';
export type LazyItemByMargin = {
    rootMargin: string;
    item: ReturnType<typeof useLazyRef>;
};
/**
 * Hook for initializing the tracking of an element's appearance on the screen by margin.
 *
 * Хук для инициализации отслеживания появления элемента на экране по отступу.
 * @param element element for tracking/ элемента для отслеживания
 * @param rootMargin root margin for IntersectionObserver/ отступ для IntersectionObserver
 */
export declare const useLazyItemByMarginRef: (element: RefType<HTMLElement | undefined>, rootMargin?: string) => {
    /** Lazy item status/ Статус ленивого элемента */
    lazyItemStatus: ShallowRef<boolean, boolean>;
    /**
     * Getting a tracked lazy item.
     *
     * Получение отслеживаемого ленивого элемента.
     */
    readonly lazyItem: LazyItem | undefined;
};
import { Ref, ShallowRef } from 'vue';
export type LazyItem = {
    status: ShallowRef<boolean>;
    ratio: ShallowRef<number>;
    entry: ShallowRef<IntersectionObserverEntry | undefined>;
    stopWatch: () => void;
};
export type LazyList = Record<string, LazyItem>;
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
    getItem(element?: HTMLElement): LazyItem | undefined;
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
import { ShallowRef } from 'vue';
/**
 * Returns the loading status.
 *
 * Возвращает статус загрузки.
 */
export declare function useLoadingRef(): ShallowRef<boolean, boolean>;
import { MetaRobots, Meta } from '@dxtmisha/functional-basic';
import { Ref } from 'vue';
/**
 * Vue composable for reactive meta tags management with automatic DOM synchronization.
 * Uses singleton pattern - all components share the same meta state.
 *
 * Vue композабл для реактивного управления мета-тегами с автоматической синхронизацией DOM.
 * Использует паттерн singleton - все компоненты используют одно состояние мета-тегов.
 */
export declare const useMeta: () => Readonly<{
    meta: Meta;
    /** Reactive page title (without suffix) / Реактивный заголовок страницы (без суффикса) */
    title: Ref<string, string>;
    /** Reactive keywords meta tag / Реактивный мета-тег keywords */
    keyword: Ref<string, string>;
    /** Reactive description meta tag / Реактивный мета-тег description */
    description: Ref<string, string>;
    /** Reactive author meta tag / Реактивный мета-тег author */
    author: Ref<string, string>;
    /** Reactive Open Graph / Twitter Card image URL / Реактивный URL изображения для Open Graph / Twitter Card */
    image: Ref<string, string>;
    /** Reactive canonical URL / Реактивный канонический URL */
    canonical: Ref<string, string>;
    /** Reactive robots meta tag directive / Реактивная директива мета-тега robots */
    robots: Ref<MetaRobots, MetaRobots>;
    /** Reactive site name for Open Graph and Twitter Card / Реактивное название сайта для Open Graph и Twitter Card */
    siteName: Ref<string, string>;
    /**
     * Generates HTML string for all meta tags (for SSR).
     *
     * Генерирует HTML-строку для всех мета-тегов (для SSR).
     */
    getHtmlMeta: () => string;
    /**
     * Synchronizes all reactive values with the current state of MetaStatic.
     *
     * Синхронизирует все реактивные значения с текущим состоянием MetaStatic.
     */
    sync: () => void;
    /**
     * Updates MetaStatic values with current reactive state.
     *
     * Обновляет значения MetaStatic текущим реактивным состоянием.
     */
    update: () => void;
    /**
     * Updates MetaStatic values if the current environment is SSR (not a DOM runtime).
     *
     * Обновляет значения MetaStatic, если текущая среда — SSR (не DOM-среда).
     */
    updateSsr: () => void;
    /**
     * Sets the page title.
     *
     * Устанавливает заголовок страницы.
     * @param value Title to set / Заголовок для установки
     */
    setTitle: (value: string) => void;
    /**
     * Sets the keywords meta tag.
     *
     * Устанавливает мета-тег keywords.
     * @param value Keywords to set / Ключевые слова для установки
     */
    setKeywords: (value: string) => void;
    /**
     * Sets the description meta tag.
     *
     * Устанавливает мета-тег description.
     * @param value Description to set / Описание для установки
     */
    setDescription: (value: string) => void;
    /**
     * Sets the author meta tag.
     *
     * Устанавливает мета-тег author.
     * @param value Author to set / Автор для установки
     */
    setAuthor: (value: string) => void;
    /**
     * Sets the Open Graph / Twitter Card image URL.
     *
     * Устанавливает URL изображения для Open Graph / Twitter Card.
     * @param value Image URL to set / URL изображения для установки
     */
    setImage: (value: string) => void;
    /**
     * Sets the canonical URL.
     *
     * Устанавливает канонический URL.
     * @param value Canonical URL to set / Канонический URL для установки
     */
    setCanonical: (value: string) => void;
    /**
     * Sets the robots meta tag directive.
     *
     * Устанавливает директиву мета-тега robots.
     * @param value Robots directive to set / Директива robots для установки
     */
    setRobots: (value: MetaRobots) => void;
    /**
     * Sets the site name for Open Graph and Twitter Card.
     *
     * Устанавливает название сайта для Open Graph и Twitter Card.
     * @param value Site name to set / Название сайта для установки
     */
    setSiteName: (value: string) => void;
    /**
     * Sets the suffix for the page title.
     *
     * Устанавливает суффикс для заголовка страницы.
     * @param suffix Suffix to set / Суффикс для установки
     */
    setSuffix: (suffix: string) => void;
} & {
    init(): Readonly<{
        meta: Meta;
        /** Reactive page title (without suffix) / Реактивный заголовок страницы (без суффикса) */
        title: Ref<string, string>;
        /** Reactive keywords meta tag / Реактивный мета-тег keywords */
        keyword: Ref<string, string>;
        /** Reactive description meta tag / Реактивный мета-тег description */
        description: Ref<string, string>;
        /** Reactive author meta tag / Реактивный мета-тег author */
        author: Ref<string, string>;
        /** Reactive Open Graph / Twitter Card image URL / Реактивный URL изображения для Open Graph / Twitter Card */
        image: Ref<string, string>;
        /** Reactive canonical URL / Реактивный канонический URL */
        canonical: Ref<string, string>;
        /** Reactive robots meta tag directive / Реактивная директива мета-тега robots */
        robots: Ref<MetaRobots, MetaRobots>;
        /** Reactive site name for Open Graph and Twitter Card / Реактивное название сайта для Open Graph и Twitter Card */
        siteName: Ref<string, string>;
        /**
         * Generates HTML string for all meta tags (for SSR).
         *
         * Генерирует HTML-строку для всех мета-тегов (для SSR).
         */
        getHtmlMeta: () => string;
        /**
         * Synchronizes all reactive values with the current state of MetaStatic.
         *
         * Синхронизирует все реактивные значения с текущим состоянием MetaStatic.
         */
        sync: () => void;
        /**
         * Updates MetaStatic values with current reactive state.
         *
         * Обновляет значения MetaStatic текущим реактивным состоянием.
         */
        update: () => void;
        /**
         * Updates MetaStatic values if the current environment is SSR (not a DOM runtime).
         *
         * Обновляет значения MetaStatic, если текущая среда — SSR (не DOM-среда).
         */
        updateSsr: () => void;
        /**
         * Sets the page title.
         *
         * Устанавливает заголовок страницы.
         * @param value Title to set / Заголовок для установки
         */
        setTitle: (value: string) => void;
        /**
         * Sets the keywords meta tag.
         *
         * Устанавливает мета-тег keywords.
         * @param value Keywords to set / Ключевые слова для установки
         */
        setKeywords: (value: string) => void;
        /**
         * Sets the description meta tag.
         *
         * Устанавливает мета-тег description.
         * @param value Description to set / Описание для установки
         */
        setDescription: (value: string) => void;
        /**
         * Sets the author meta tag.
         *
         * Устанавливает мета-тег author.
         * @param value Author to set / Автор для установки
         */
        setAuthor: (value: string) => void;
        /**
         * Sets the Open Graph / Twitter Card image URL.
         *
         * Устанавливает URL изображения для Open Graph / Twitter Card.
         * @param value Image URL to set / URL изображения для установки
         */
        setImage: (value: string) => void;
        /**
         * Sets the canonical URL.
         *
         * Устанавливает канонический URL.
         * @param value Canonical URL to set / Канонический URL для установки
         */
        setCanonical: (value: string) => void;
        /**
         * Sets the robots meta tag directive.
         *
         * Устанавливает директиву мета-тега robots.
         * @param value Robots directive to set / Директива robots для установки
         */
        setRobots: (value: MetaRobots) => void;
        /**
         * Sets the site name for Open Graph and Twitter Card.
         *
         * Устанавливает название сайта для Open Graph и Twitter Card.
         * @param value Site name to set / Название сайта для установки
         */
        setSiteName: (value: string) => void;
        /**
         * Sets the suffix for the page title.
         *
         * Устанавливает суффикс для заголовка страницы.
         * @param suffix Suffix to set / Суффикс для установки
         */
        setSuffix: (suffix: string) => void;
    }>;
    destroyExecute?(): void;
}>;
import { ShallowRef } from 'vue';
/**
 * Creates a reactive variable to manage URL query parameters.
 *
 * Создает реактивную переменную для управления query-параметрами URL.
 * @param name value name / название значения
 * @param defaultValue default value / значение по умолчанию
 */
export declare function useQueryRef<T>(name: string, defaultValue?: T | (() => T)): ShallowRef<T>;
import { Ref, ComputedRef } from 'vue';
import { NumberOrString } from '@dxtmisha/functional-basic';
/**
 * Managing a list of links for the router.
 *
 * Управление списком ссылок для роутера.
 * @param list list of items / список элементов
 * @param selected selected item / выбранный элемент
 * @param hasTo has to / имеет to
 */
export declare const useRouterList: <T extends ListDataBasic>(list: RefType<ConstrBind<T>[] | undefined>, selected?: Ref<string> | string, hasTo?: boolean) => {
    item: ComputedRef<T | undefined>;
    /** Selected element / Выбранный элемент */
    selected: Ref<string, string>;
    label: ComputedRef<NumberOrString>;
    /** List of elements / Список элементов */
    list: ComputedRef<ConstrBind<T>[]>;
    to: (name?: string) => void;
    /**
     * Transition to the main element.
     *
     * Переход к главному элементу.
     */
    toMain(): void;
};
import { Ref, ComputedRef } from 'vue';
import { SearchColumns, SearchFormatList, SearchItem, SearchOptions } from '@dxtmisha/functional-basic';
/**
 * Composable for handling search logic with reactive data.
 *
 * Композабл для управления логикой поиска с реактивными данными.
 * @param list list of items to search / список элементов для поиска
 * @param columns columns to search in / колонки, по которым ведется поиск
 * @param value reactive search string / реактивная строка поиска
 * @param options search options / настройки поиска
 */
export declare function useSearchRef<T extends SearchItem, K extends SearchColumns<T>>(list: SearchListInput<T>, columns?: SearchColumnsInput<T, K>, value?: Ref<string>, options?: SearchOptions): {
    /**
     * Whether the search is currently active (minimum character limit reached)/
     * Активен ли поиск в данный момент (достигнут ли лимит символов)
     */
    isSearch: ComputedRef<boolean>;
    /** Search string ref/ Ссылка на строку поиска */
    search: Ref<string, string>;
    /**
     * Search loading status (if delay is used) /
     * Статус загрузки поиска (если используется задержка)
     */
    loading: Ref<boolean, boolean>;
    /**
     * Formatted list of search results with highlights /
     * Форматированный список результатов поиска с подсветкой совпадений
     */
    listSearch: ComputedRef<SearchFormatList<T, K>>;
    /**
     * Length of the search results /
     * Длина списка результатов поиска
     */
    length: ComputedRef<number>;
};
import { Ref } from 'vue';
import { SearchList, SearchColumns, SearchItem } from '@dxtmisha/functional-basic';
/**
 * Composable for managing search value state and handling delays.
 *
 * Композабл для управления состоянием значения поиска и обработки задержек.
 * Он изолирует логику debounce, предоставляя `searchDelay` (строка с задержкой)
 * и `loading` (флаг ожидания), которые затем читаются классом `SearchList` или `useSearchRef`.
 * @param item search list instance / экземпляр поиска `SearchList`
 * @param value reactive search string / реактивная строка поиска (опционально)
 */
export declare function useSearchValueRef<T extends SearchItem, K extends SearchColumns<T>>(item: SearchList<T, K>, value?: Ref<string>): {
    /** Current search value / Текущее значение поиска */
    search: Ref<string, string>;
    /** Search value with applied delay / Значение поиска с примененной задержкой */
    searchDelay: Ref<string, string>;
    /** Loading status during delay / Статус загрузки во время задержки */
    loading: Ref<boolean, boolean>;
};
import { Ref } from 'vue';
/**
 * Creates a reactive variable to manage session storage.
 *
 * Создает реактивную переменную для управления сессией хранения.
 * @param name value name/ название значения
 * @param defaultValue default value/ значение по умолчанию
 */
export declare function useSessionRef<T>(name: string, defaultValue?: T | (() => T)): Ref<T | undefined>;
import { Ref } from 'vue';
/**
 * Creates a reactive variable to manage a local storage.
 *
 * Создает реактивный переменный для управления локальным хранилищем.
 * @param name value name/ название значения
 * @param defaultValue default value/ значение по умолчанию
 * @param cache cache time/ время кэширования
 */
export declare function useStorageRef<T>(name: string, defaultValue?: T | (() => T), cache?: number): Ref<T | undefined>;
import { ShallowRef } from 'vue';
import { TranslateInstance, TranslateList } from '@dxtmisha/functional-basic';
/**
 * Getting the translated text by an array of keys or a string with a key.
 *
 * It returns a `ShallowRef` that automatically updates when the global language changes.
 * Use `as const` for arrays to ensure proper TypeScript key inference.
 *
 * ---
 *
 * Получение переведенного текста по массиву ключей или пункту с ключом.
 *
 * Возвращает `ShallowRef`, который автоматически обновляется при смене глобального языка.
 * Используйте `as const` для массивов, чтобы обеспечить корректный вывод типов ключей в TypeScript.
 *
 * ### Examples / Примеры использования:
 * ```typescript
 * // 1. Using the main composable / Использование основного хука
 * const translations = useTranslateRef(['home.title', 'home.description'] as const);
 *
 * // 2. Using the shorthand 't' / Использование сокращения 't'
 * const labels = t(['button.save', 'button.cancel'] as const);
 * ```
 *
 * @param names a string or an array with keys / строка или массив с ключами
 * @param translateInstance a translate instance / экземпляр перевода
 */
export declare function useTranslateRef<T extends (string | string[])[]>(names: T, translateInstance?: TranslateInstance): ShallowRef<TranslateList<T>>;
/**
 * Shorthand for useTranslateRef.
 * Use `as const` for arrays to ensure proper TypeScript key inference.
 *
 * ---
 *
 * Сокращение для useTranslateRef.
 * Используйте `as const` для массивов, чтобы обеспечить корректный вывод типов ключей в TypeScript.
 *
 * @param names a string or an array with keys / строка или массив с ключами
 */
export declare const t: <T extends string[]>(names: T) => ShallowRef<TranslateList<T>>;
export declare const uiMakeFlags: () => void;
export * from '@dxtmisha/functional-basic';
import { ComputedRef, DebuggerOptions } from 'vue';
/**
 * Creates a computed property that can handle asynchronous getters.
 *
 * Создаёт вычисляемое свойство, которое может обрабатывать асинхронные геттеры.
 * @param getter Asynchronous function, synchronous function, or direct value to compute the result/
 * Асинхронная функция, синхронная функция или прямое значение для вычисления результата
 * @param initialState initial value of result/ начальное значение результата
 * @param ignore values to be ignored/ значения для исключения из обработки
 * @param debugOptions Used for debugging reactive computations. Supported by Vue.js library/
 * Используется для отладки реактивных вычислений. Поддерживается библиотекой Vue.js
 */
export declare function computedAsync<R>(getter: (() => Promise<R>) | (() => R) | R, initialState?: (() => R) | R, ignore?: R, debugOptions?: DebuggerOptions): ComputedRef<R | undefined>;
import { ComputedGetter, ComputedRef, DebuggerOptions } from 'vue';
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
export declare function computedByLanguage<T, R extends (T | undefined) = T | undefined>(getter: ComputedGetter<R>, getterNone?: R | (() => R), conditions?: () => boolean, debugOptions?: DebuggerOptions): ComputedRef<R>;
import { Ref } from 'vue';
/**
 * Creates a computed property that is computed on demand and cached.
 * The value is updated automatically when dependencies change, but only if it has been accessed at least once.
 * The watcher remains active throughout the life of the application.
 *
 * Создаёт вычисляемое свойство, которое вычисляется по требованию и кешируется.
 * Значение обновляется автоматически при изменении зависимостей, но только если к нему был осуществлён доступ хотя бы один раз.
 * Вотчер остаётся активным на протяжении работы всего приложения.
 *
 * @param getter A function that returns the value to be computed/
 * Функция, которая возвращает вычисляемое значение
 * @param initialState initial value of result/ начальное значение результата
 */
export declare function computedEternity<T>(getter: () => Promise<T> | T, initialState?: (() => T) | T): Ref<T, T>;
import { Plugin } from 'vue';
import { InputSocialIcons } from '@dxtmisha/media';
import { ApiConfig, ErrorCenterCauseList, ErrorCenterHandlerCallback, ErrorCenterHandlerList, IconsConfig, TranslateConfig } from '@dxtmisha/functional-basic';
import { Router } from 'vue-router';
/**
 * Interface for the functional plugin options /
 * Интерфейс для опций функционального плагина
 */
export interface FunctionalPluginOptions {
    /**
     * Configuration for the API client /
     * Конфигурация для API-клиента
     */
    api?: ApiConfig;
    /**
     * Configuration for the translation service /
     * Конфигурация для сервиса переводов
     */
    translate?: TranslateConfig;
    /**
     * Default geographical location or language code /
     * Код географического местоположения или языка по умолчанию
     */
    location?: string | (() => string);
    /**
     * Suffix to be appended to all page titles /
     * Суффикс, который будет добавляться ко всем заголовкам страниц
     */
    metaSuffix?: string;
    /**
     * Configuration for the icon management service /
     * Конфигурация для сервиса управления иконками
     */
    icons?: IconsConfig;
    /**
     * Configuration for the social networks icons management service /
     * Конфигурация для сервиса управления иконками социальных сетей
     */
    iconsSocial?: InputSocialIcons;
    /**
     * Vue Router instance for global navigation state management /
     * Экземпляр Vue Router для глобального управления состоянием навигации
     */
    router?: Router;
    /**
     * Error causes list for error center /
     * Список причин ошибок для центра ошибок
     */
    errorCauses?: ErrorCenterCauseList;
    /**
     * Error handlers list for error center /
     * Список обработчиков ошибок для центра ошибок
     */
    errorHandlers?: ErrorCenterHandlerList;
    /**
     * Global error callback functions for error center /
     * Список глобальных функций обратного вызова для центра ошибок
     */
    errorCallbacks?: ErrorCenterHandlerCallback[];
}
/**
 * Vue plugin for initializing and configuring global functional services
 * (Api, Translate, Icons, Meta).
 *
 * Vue плагин для инициализации и настройки глобальных функциональных сервисов
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
/**
 * Types of initialization for a singleton/ Типы инициализации для синглтона
 */
export declare enum ExecuteUseType {
    /** A single instance for the entire application/ Единственный экземпляр на всё приложение */
    global = "global",
    /** Shared via provide/inject in the component tree/ Разделяется через provide/inject в дереве компонентов */
    provide = "provide",
    /** A single instance within the closure/ Единственный экземпляр в замыкании */
    local = "local"
}
/**
 * The object returned by the factory function/ Объект, возвращаемый фабричной функцией
 */
export type ExecuteUseReturn<R> = Readonly<R & {
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
}>;
/**
 * Creates a managed singleton that encapsulates initialization logic and access mode.
 *
 * It supports three initialization strategies:
 * - `global`: A single instance for the entire application.
 * - `provide`: Shared via provide/inject in the component tree (standard for Vue 3).
 * - `local`: A single instance within the closure of the returned function.
 *
 * Создает управляемый синглтон, который инкапсулирует логику инициализации и режим доступа.
 *
 * Поддерживает три стратегии инициализации:
 * - `global`: Единственный экземпляр на всё приложение.
 * - `provide`: Разделяется через provide/inject в дереве компонентов (стандарт для Vue 3).
 * - `local`: Единственный экземпляр в замыкании возвращаемой функции.
 *
 * @template R return type of the factory function / тип данных, возвращаемых фабрикой
 * @template O argument types for the factory function / типы аргументов фабричной функции
 * @template RI instance type with management methods / тип экземпляра с методами управления
 *
 * @param callback initialization function / функция инициализации
 * @param type initialization strategy (defaults to provide) / стратегия инициализации (по умолчанию provide)
 *
 * @returns {function} accessor function for the singleton / функция-аксессор для синглтона
 *
 * @remarks
 * Use this function in the following cases:
 * - **API Services:** Always wrap API clients to ensure a single connection point and unified state.
 * - **Resource Optimization:** For functions where creating multiple instances is undesirable (e.g., heavy objects, event buses).
 * - **Shared State:** To share reactive state within a component tree using the `provide` strategy.
 * - **External SDKs:** Initializing third-party libraries (analytics, maps, charts) that should be singletons.
 *
 * Используйте эту функцию в следующих случаях:
 * - **API-сервисы:** Всегда оборачивайте API-клиенты для обеспечения единой точки подключения и унифицированного состояния.
 * - **Оптимизация ресурсов:** Для функций, где нежелательно создание множества экземпляров (например, тяжелые объекты, шины событий).
 * - **Общее состояние:** Для совместного использования реактивного состояния в дереве компонентов с помощью стратегии `provide`.
 * - **Внешние SDK:** Инициализация сторонних библиотек (аналитика, карты, графики), которые должны быть синглтонами.
 *
 * @example
 * // 1. Global API singleton (useApiGet)/ Глобальный синглтон API (useApiGet)
 * export const useUserApi = executeUseGlobal(() => {
 *   return useApiGet('/api/user');
 * });
 *
 * @example
 * // 2. Shared Reactive State/ Общее реактивное состояние
 * export const useFeatureState = executeUseProvide(() => {
 *   // Reactive logic here/ Здесь может быть реактивная логика (reactive, ref)
 *   const items = [];
 *   const addItem = (item) => items.push(item);
 *   return { items, addItem };
 * });
 *
 * @example
 * // 3. Local Caching/ Локальное кеширование
 * export const useHeavyResource = executeUseLocal((config) => {
 *   return new HeavyResource(config);
 * });
 *
 * @example
 * // 4. Complex API Service (useApiManagementRef)/ Комплексный API-сервис (useApiManagementRef)
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
 * // Usage in component/ Использование в компоненте:
 * // const { list, loading, sendPost, sendDelete } = useUserManagement();
 */
export declare function executeUse<R, O extends any[], RI extends ExecuteUseReturn<R> = ExecuteUseReturn<R>>(callback: (...args: O) => R, type?: ExecuteUseType): ((...args: O) => RI) | (() => RI);
/**
 * Creates a global singleton.
 *
 * Создает глобальный синглтон.
 *
 * @remarks
 * See {@link executeUse} for more details.
 *
 * Подробнее см. {@link executeUse}.
 *
 * @param callback Initialization function/ Функция инициализации
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
/**
 * Initializes all global callbacks.
 *
 * Инициализирует все глобальные callback.
 */
export declare function executeUseGlobalInit(): void;
/**
 * Get injected value by name.
 *
 * Получение внедренного значения по имени.
 * @param name Key name / Имя ключа
 */
export declare function getInject<T>(name: string): T | undefined;
import { ApiFetch } from '@dxtmisha/functional-basic';
/**
 * Get request options.
 *
 * Возвращает опции запроса.
 * @param options options / параметры
 */
export declare const getOptions: (options?: ApiOptions) => RefOrNormal<ApiFetch>;
/**
 * Executes a function if the provided argument is a function, and unwraps the resulting Vue Ref if it is reactive.
 * If the argument is a Vue Ref or a primitive value, it unwraps or returns it directly.
 *
 * Выполняет функцию, если переданный аргумент является функцией, и распаковывает полученный Vue Ref, если он реактивный.
 * Если аргумент является Vue Ref или простым значением, распаковывает или возвращает его напрямую.
 * @param data reactive reference, plain value, or a function returning them / реактивная ссылка, обычное значение или функция, возвращающая их
 * @returns the resolved and unwrapped value / разрешенное и распакованное значение
 */
export declare function executeFunctionRef<T>(data: RefOrNormalOrFunction<T>): T;
import { ComputedRef } from 'vue';
import { ApiData, ApiErrorItem } from '@dxtmisha/functional-basic';
/**
 * Returns the error item for the Api ref.
 *
 * Возвращает элемент ошибки для Api ref.
 * @param data data for the request / данные для запроса
 */
export declare function getApiErrorRef<R>(data: RefType<ApiData<R> | undefined>): ComputedRef<ApiErrorItem | undefined>;
import { ComputedRef } from 'vue';
import { ItemList } from '@dxtmisha/functional-basic';
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
 * You return the values of the ref variable or the variable itself if it is not reactive.
 *
 * Возвращаешь значения ref переменной или саму переменную, если она не реактивная.
 * @param item reactive variable or ordinary value/ реактивная переменная или обычное значение
 */
export declare function getRef<T>(item: RefOrNormal<T>): T;
import { VNode } from 'vue';
import { ItemList } from '@dxtmisha/functional-basic';
/**
 * Getting cached, immutable data.
 *
 * Получение кешированных, неизменяемых данных.
 * @param name name of the component/ названия компонента
 * @param props property of the component/ свойство компонента
 * @param children sub-elements of the component/ под элементы компонента
 * @param index the name of the key/ названия ключа
 */
export declare function render<T extends ItemList>(name: string | any, props?: T, children?: RawChildren | RawSlots, index?: string): VNode;
import { Ref } from 'vue';
/**
 * Changing the value for the reactive method.
 *
 * Изменение значения для реактивного метода.
 * @param item reactive element/ реактивный элемент
 * @param value values for replacement/ значения для замены
 */
export declare function setRef<T>(item: Ref<T>, value: T): void;
import { Ref } from 'vue';
/**
 * Returns a regular variable or wraps it in a regular variable if it is an ordinary variable.
 *
 * Возвращает регулярный переменный или оборачивает его в регулярный переменный, если является обычным переменным.
 * @param item
 */
export declare function toRefItem<T>(item: RefOrNormal<T>): Ref<T>;
import { ItemList } from '@dxtmisha/functional-basic';
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
import { ItemList } from '@dxtmisha/functional-basic';
/**
 * Returns the name of the class from the property.
 *
 * Возвращает название класса из свойства.
 * @param props property of the component/ свойство компонента
 */
export declare function getClassName<T extends ItemList>(props?: T): string | undefined;
import { ItemList } from '@dxtmisha/functional-basic';
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
 *
 * Конфигурация для основного GET-запроса в управлении API.
 */
export type ApiManagementGet<Return extends ApiManagementValue, Type extends ApiManagementValue = Return> = {
    /** API endpoint path / Путь к API */
    path?: RefOrNormal<string | undefined>;
    /** Additional request options / Дополнительные опции запроса */
    options?: ApiOptions;
    /** Enable reactive updates when path or options change / Включить реактивные обновления при изменении пути или опций */
    reactivity?: boolean;
    /** Condition to trigger the request / Условие выполнения запроса */
    conditions?: RefType<boolean>;
    /** Custom transformation for the fetched data / Пользовательская трансформация полученных данных */
    transformation?: (data: Type, isResponseContractValid?: ApiDataValidation) => ApiData<Return>;
    /** Function to validate response data contract / Функция для проверки контракта данных ответа */
    validateResponseContract?: (data: Type) => ApiDataValidation;
    /** Storage of response error contracts / Хранилище контрактов ошибок ответа */
    errorContract?: ApiErrorStorageList;
    /** Validation function or class constructor for data / Функция валидации или конструктор класса для данных */
    typeData?: ((data: Return) => boolean) | any;
    /** Whether to clear data when the component is unmounted / Удалять ли данные при размонтировании компонента */
    unmounted?: boolean;
    /** Function to provide skeleton data during loading / Функция, предоставляющая данные-заглушки во время загрузки */
    skeleton?: () => Return;
};
/**
 * Configuration for client-side search across API data.
 *
 * Конфигурация для клиентского поиска по данным API.
 */
export type ApiManagementSearch<T extends SearchItem, K extends SearchColumns<T>> = {
    /** List of columns to search through / Список столбцов для поиска */
    columns: K;
    /** Reactive search query / Реактивная строка поиска */
    value?: Ref<string>;
    /** Additional search algorithm options / Дополнительные опции алгоритма поиска */
    options?: SearchOptions;
};
/**
 * Configuration for mutation requests (POST, PUT, DELETE).
 *
 * Конфигурация для запросов мутации (POST, PUT, DELETE).
 */
export type ApiManagementRequest<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>> = {
    /** Target API endpoint path / Целевой путь к API */
    path?: RefOrNormal<string | undefined>;
    /** Action to perform after a successful request / Действие после успешного выполнения запроса */
    action?: (data: Return | undefined) => Promise<void> | void;
    /** Transformation before sending data / Трансформация перед отправкой данных */
    transformation?: (data: T) => Return;
    /** Request contract validation function / Функция валидации контракта запроса */
    validateRequestContract?: (data: Request) => ApiDataValidation & Return;
    /** Response contract validation function / Функция валидации контракта ответа */
    validateResponseContract?: (data: T) => ApiDataValidation & Return;
    /** Storage of response error contracts / Хранилище контрактов ошибок ответа */
    errorContract?: ApiErrorStorageList;
    /** Whether to wrap the payload in a 'data' property / Обертывать ли полезную нагрузку в свойство 'data' */
    toData?: boolean;
    /** Additional mutation request options / Дополнительные опции запроса мутации */
    options?: ApiOptions;
};
import { Ref, PropType, ComputedRef } from 'vue';
import { Undefined } from '@dxtmisha/functional-basic';
/** Generic record type for constructor items/ Дженерик тип записи для элементов конструктора */
export type ConstrItem = Record<string, any>;
/** Constructor value wrapper with optional value property/ Обертка значения конструктора с опциональным свойством value */
export type ConstrValue<T = any> = {
    /** Optional value of type T/ Опциональное значение типа T */
    value?: T;
};
/** Generic record type for constructor components/ Дженерик тип записи для компонентов конструктора */
export type ConstrComponent = Record<string, any>;
/**
 * Constructor component modification type with reactive or normal values/
 * Тип модификации компонента конструктора с реактивными или обычными значениями
 */
export type ConstrComponentMod<P extends ConstrItem> = ConstrItem | {
    [K in keyof P]?: RefOrNormal<P[K]>;
};
export type ConstrExpose<E extends Element, EXPOSE extends ConstrItem> = EXPOSE & {
    elementHtml?: ComputedRef<E | undefined>;
};
/** Utility type to convert union types to intersection types/ Утилитарный тип для преобразования объединенных типов в пересеченные */
export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
/** Extract emit item type from constructor item/ Извлечение типа элемента emit из элемента конструктора */
export type ConstrEmitItem<T extends ConstrItem> = T[keyof T];
/**
 * Constructor emit type with proper event handler signatures/
 * Тип emit конструктора с правильными сигнатурами обработчиков событий
 */
export type ConstrEmit<T extends ConstrItem = ConstrItem> = UnionToIntersection<ConstrEmitItem<{
    [K in keyof T]: (evt: K, ...args: T[K]) => void;
}>>;
/** Object type for CSS class names with boolean values/ Тип объекта для CSS классов с булевыми значениями */
export type ConstrClassObject = Record<string, boolean | undefined>;
/**
 * Constructor class type supporting strings, arrays, and objects/
 * Тип класса конструктора, поддерживающий строки, массивы и объекты
 */
export type ConstrClass = string | (string | ConstrClass | Undefined)[] | ConstrClassObject;
/** Record type for mapping class names to class definitions/ Тип записи для сопоставления имен классов с определениями классов */
export type ConstrClassList = Record<string, ConstrClass>;
/** Constructor classes with required main class and additional class list/ Классы конструктора с обязательным основным классом и дополнительным списком классов */
export type ConstrClasses = {
    main: ConstrClass;
} & ConstrClassList;
/** Constructor style item type for individual style properties/ Тип элемента стиля конструктора для отдельных свойств стиля */
export type ConstrStylesItem = string | null;
/**
 * Constructor styles type supporting objects and arrays of style definitions/
 * Тип стилей конструктора, поддерживающий объекты и массивы определений стилей
 */
export type ConstrStyles = Record<string, ConstrStylesItem> | ConstrStyles[];
/**
 * Constructor options interface for component configuration/
 * Интерфейс опций конструктора для конфигурации компонента
 */
export type ConstrOptions<COMP extends ConstrComponent, EMITS extends ConstrItem, P extends ConstrItem> = {
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
/**
 * Constructor setup interface for component initialization/
 * Интерфейс настройки конструктора для инициализации компонента
 */
export type ConstrSetup<E extends Element, CLASSES extends ConstrClasses, SETUP extends ConstrItem> = {
    /** Component name/ Имя компонента */
    name: string;
    /** Reactive element reference/ Реактивная ссылка на элемент */
    element: Ref<E | undefined>;
    /** Reactive classes/ Реактивные классы */
    classes: RefType<CLASSES>;
    /** Reactive styles/ Реактивные стили */
    styles: RefType<ConstrStyles>;
} & SETUP;
/** Constructor registration configuration/ Конфигурация регистрации конструктора */
export type ConstrRegistration = {
    /** Optional flag for registration/ Опциональный флаг для регистрации */
    flag?: boolean;
    /** Optional translation map/ Опциональная карта переводов */
    translate?: Record<string, string>;
};
/**
 * Constructor bind type for component binding with class and style support/
 * Тип привязки конструктора для привязки компонента с поддержкой классов и стилей
 */
export type ConstrBind<T> = T & Record<string, any> & {
    /** Optional key/ Опциональный ключ */
    key?: string;
    /** Optional CSS classes/ Опциональные CSS классы */
    class?: ConstrClass;
    /** Optional styles/ Опциональные стили */
    style?: ConstrStyles;
};
/** Constructor prop item options for Vue prop definitions/ Опции элемента prop конструктора для определений Vue prop */
export type ConstrPropItemOptions<T = any> = {
    /** Vue prop type/ Тип Vue prop */
    type?: PropType<T>;
    /** Required flag/ Флаг обязательности */
    required?: boolean;
    /** Default value/ Значение по умолчанию */
    default?: any;
    /** Custom validator function/ Пользовательская функция валидации */
    validator?(value: any, props: any): boolean;
};
/** Constructor prop item type with options or direct PropType/ Тип элемента prop конструктора с опциями или прямым PropType */
export type ConstrPropItem<T = any> = ConstrPropItemOptions<T> | PropType<T>;
/** Constructor props type for component prop definitions/ Тип props конструктора для определений props компонента */
export type ConstrProps<P = Record<string, any>> = {
    [K in keyof P]: ConstrPropItem<P[K]>;
};
/**
 * Props for link handling/ Пропсы для обработки ссылок
 */
export type ConstrHrefProps = {
    /** Hyperlink reference/ Гиперссылка */
    href?: string;
};
import { NumberOrString, NumberOrStringOrBoolean } from '@dxtmisha/functional-basic';
/** Type of list item/ Тип элемента списка */
export type ListType = 'item' | 'space' | 'line' | 'subtitle' | 'html' | 'menu' | 'menu-group' | 'group';
/** Basic data structure for list item/ Базовая структура данных для элемента списка */
export type ListDataBasic = {
    /** Optional display label/ Опциональная отображаемая метка */
    label?: NumberOrString;
    /** Any value associated with the item/ Любое значение, связанное с элементом */
    value?: any;
    /** Search text for filtering/ Текст поиска для фильтрации */
    search?: string;
};
/** Extended list item with type and index/ Расширенный элемент списка с типом и индексом */
export type ListDataItem<Item extends ListDataBasic = ListDataBasic> = ConstrBind<Item & {
    /** Parent item identifier/ Идентификатор родительского элемента */
    parent?: string;
    /** Type of list item/ Тип элемента списка */
    type: ListType;
    /** Unique item identifier/ Уникальный идентификатор элемента */
    index: string;
    /** Whether the item is disabled/ Отключен ли элемент */
    disabled?: boolean;
}>;
/** Array of list data items/ Массив элементов данных списка */
export type ListList<Item extends ListDataBasic = ListDataBasic> = ListDataItem<Item>[];
/**
 * List or record structure for list data/
 * Структура списка или записи для данных списка
 */
export type ListRecord<Item extends ListDataBasic = ListDataBasic> = Item[] | Record<string, Item>;
/**
 * Extended list item with additional state properties/
 * Расширенный элемент списка с дополнительными свойствами состояния
 */
export type ListDataFullItem<Item extends ListDataBasic = ListDataBasic> = ListDataItem<Item> & {
    /** Whether the item has focus/ Имеет ли элемент фокус */
    focus: boolean;
    /** Highlighted text portion/ Выделенная часть текста */
    highlight?: string;
    /** Whether the item is selected/ Выбран ли элемент */
    selected: boolean;
    /** Whether the item is disabled/ Отключен ли элемент */
    disabled?: boolean;
};
/**
 * Array of extended list items with state/
 * Массив расширенных элементов списка с состоянием
 */
export type ListDataFull<Item extends ListDataBasic = ListDataBasic> = ListDataFullItem<Item>[];
/** Input item for list creation/ Входной элемент для создания списка */
export type ListListInputItem<Item extends ListDataBasic = ListDataBasic> = ConstrBind<Item>;
/**
 * Various input formats for list creation/
 * Различные форматы входных данных для создания списка
 */
export type ListListInput<Item extends ListDataBasic = ListDataBasic> = ListListInputItem<Item>[] | string[] | Record<string, ListListInputItem<Item>> | Record<string, string>;
/** Single selected item identifier/ Идентификатор одного выбранного элемента */
export type ListSelectedItem = NumberOrStringOrBoolean;
/** Single or multiple selected items/ Один или несколько выбранных элементов */
export type ListSelectedList = ListSelectedItem | ListSelectedItem[];
/** Name of selected list item/ Название выбранного элемента списка */
export type ListName = string | number | undefined;
/** Array of list item names/ Массив названий выбранных элементов списка */
export type ListNames = ListName[];
import { ComputedRef, Ref, VNode, VNodeArrayChildren } from 'vue';
/**
 * Union type for Vue reactive references (computed or ref)/
 * Объединенный тип для Vue реактивных ссылок (computed или ref)
 */
export type RefType<T> = ComputedRef<T> | Ref<T>;
/**
 * Union type for Vue reactive references that can be undefined/
 * Объединенный тип для Vue реактивных ссылок, которые могут быть undefined
 */
export type RefUndefined<T> = RefType<T | undefined>;
/**
 * Union type that can be either a Vue reactive reference or a normal value/
 * Объединенный тип, который может быть либо Vue реактивной ссылкой, либо обычным значением
 */
export type RefOrNormal<T> = RefType<T> | T;
/**
 * Union type that can be either a Vue reactive reference or a normal value or
 * a function that returns a Vue reactive reference or a normal value/
 * Объединенный тип, который может быть либо Vue реактивной ссылкой, либо обычным
 * значением, либо функцией, которая возвращает Vue реактивную ссылку или обычное значение
 */
export type RefOrNormalOrFunction<T> = RefOrNormal<T> | (() => RefOrNormal<T>);
/**
 * Union type for Vue raw children content
 * (strings, numbers, booleans, VNodes, arrays, functions)/
 * Объединенный тип для Vue сырого содержимого дочерних элементов
 * (строки, числа, булевы, VNode, массивы, функции)
 */
export type RawChildren = string | number | boolean | VNode | VNodeArrayChildren | (() => any);
/**
 * Type for Vue raw slots with optional stability flag/
 * Тип для Vue сырых слотов с опциональным флагом стабильности
 */
export type RawSlots = {
    /** Slot name mapping to unknown content/ Маппинг имени слота к неизвестному содержимому */
    [name: string]: unknown;
    /**
     * Optional stability flag for performance optimization/
     * Опциональный флаг стабильности для оптимизации производительности
     */
    $stable?: boolean;
};
import { SearchColumns, SearchItem, SearchListValue } from '@dxtmisha/functional-basic';
/** Search list data / Данные списка поиска */
export type SearchListValueRef<T extends SearchItem> = RefOrNormal<SearchListValue<T>>;
/** Search list input / Входные данные списка поиска */
export type SearchListInput<T extends SearchItem> = SearchListValueRef<T> | (() => SearchListValueRef<T>);
/** Search columns ref / Реактивные столбцы поиска */
export type SearchColumnsRef<T extends SearchItem, K extends SearchColumns<T>> = RefOrNormal<K>;
/** Search columns input / Входные данные столбцов поиска */
export type SearchColumnsInput<T extends SearchItem, K extends SearchColumns<T>> = SearchColumnsRef<T, K> | (() => SearchColumnsRef<T, K>);