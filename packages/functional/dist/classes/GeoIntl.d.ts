import { NumberOrStringOrDate, NumberOrString, ItemValue } from '../types/basicTypes';
import { GeoDate } from '../types/geoTypes';
/**
 * The Intl namespace object contains several constructors as well as functionality common
 * to the internationalization constructors and other language sensitive functions. Collectively,
 * they comprise the ECMAScript Internationalization API, which provides language sensitive
 * string comparison, number formatting, date and time formatting, and more
 *
 * Объект Intl является пространством имён для API интернационализации ECMAScript, предоставляющим
 * языка-зависимое сравнение строк, форматирование чисел и дат со временем. Конструкторы объектов
 * Collator, NumberFormat и DateTimeFormat являются свойствами объекта Intl. На этой странице
 * описаны эти свойства, а также общая функциональность конструкторов интернационализации и других
 * языка-зависимых функций
 */
export declare class GeoIntl {
    private readonly geo;
    /**
     * Constructor
     * @param code country code, full form language-country or one of them/
     * код страны, полный вид язык-страна или один из них
     */
    constructor(code?: string);
    /**
     * Returns country code and language.
     *
     * Возвращает код страны и языка.
     */
    getLocation(): string;
    /**
     * Returns the first day of the week.
     *
     * Возвращает первый день недели.
     */
    getFirstDay(): string;
    /**
     * The consistent translation of language, region and script display names.
     *
     * Последовательный перевод отображаемых названий языка, региона и скрипта.
     * @param value the code to provide depends on the type/ предоставляемый код зависит от типа
     * @param typeOptions an object with some or all of the following properties/
     * объект с некоторыми или всеми из следующих свойств
     */
    display(value?: string, typeOptions?: Intl.DisplayNamesOptions['type'] | Intl.DisplayNamesOptions): string;
    /**
     * Get display names of language.
     *
     * Получить отображаемые имена языка.
     * @param value the code to provide depends on the type/ предоставляемый код зависит от типа
     * @param style the formatting style to use/ используемый стиль форматирования
     */
    languageName(value?: string, style?: Intl.RelativeTimeFormatStyle): string;
    /**
     * Get display names of region.
     *
     * Получить отображаемые имена региона.
     * @param value the code to provide depends on the type/ предоставляемый код зависит от типа
     * @param style the formatting style to use/ используемый стиль форматирования
     */
    countryName(value?: string, style?: Intl.RelativeTimeFormatStyle): string;
    /**
     * The method returns a string containing the full name in a specific format.
     *
     * Метод возвращает строку, содержащую полное имя в определённом формате.
     * @param last last name/ фамилию
     * @param first first name/ имя
     * @param surname surname middle name (optional)/ отчество
     * @param short shorten the names/ сократить названия
     */
    fullName(last: string, first: string, surname?: string, short?: boolean): string;
    /**
     * In basic use without specifying a locale, a formatted string.
     *
     * При обычном использовании без указания локали форматированная строка.
     * @param value a number, bigint, or string, to format/ число для форматирования
     * @param options an object with some or all properties/ объект с некоторыми
     * или всеми свойствами
     */
    number(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /**
     * Decimal point symbol.
     *
     * Символ десятичной точки.
     */
    decimal(): string;
    /**
     * Currency formatting.
     *
     * Форматирование валюты.
     * @param value a number, bigint, or string, to format/ число для форматирования
     * @param currencyOptions the currency to use in currency formatting/
     * валюта для использования в форматировании валюты
     * @param numberOnly do not display the currency symbol/ не выводить значок валюты
     */
    currency(value: NumberOrString, currencyOptions?: string | Intl.NumberFormatOptions, numberOnly?: boolean): string;
    /**
     * Returns the currency symbol if it exists, otherwise the currency code.
     *
     * Возвращает символ для валюты, если он есть, или сам код валюты.
     * @param currency the currency to use in currency formatting/
     * валюта для использования в форматировании валюты
     * @param currencyDisplay how to display the currency in currency formatting/
     * как отобразить валюту в формате валюты
     */
    currencySymbol(currency: string, currencyDisplay?: keyof Intl.NumberFormatOptionsCurrencyDisplayRegistry): string;
    /**
     * Unit formatting.
     * If the style is 'unit', a unit property must be provided.
     *
     * Форматирование юнитов.
     * @param value a number, bigint, or string, to format/ число для форматирования
     * @param unitOptions the unit to use in unit formatting/ блок для использования
     * в форматировании блока
     */
    unit(value: NumberOrString, unitOptions?: string | Intl.NumberFormatOptions): string;
    /**
     * Возвращает отформатированный размер файла
     * @param value a number, bigint, or string, to format /<br>число для форматирования
     * @param unitOptions the unit to use in unit formatting /<br>блок для использования
     * в форматировании блока
     */
    sizeFile(value: NumberOrString, unitOptions?: 'byte' | 'kilobyte' | 'megabyte' | 'gigabyte' | 'terabyte' | 'petabyte' | Intl.NumberFormatOptions): string;
    /**
     * Number as a percentage.
     *
     * Число в виде процента.
     * @param value a number, bigint, or string, to format/ число для форматирования
     * @param options an object with some or all properties/ объект с некоторыми или всеми свойствами
     */
    percent(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /**
     * Number as a percentage (unit).
     *
     * Число в виде процента (единица).
     * @param value a number, bigint, or string, to format/ число для форматирования
     * @param options an object with some or all properties/
     * объект с некоторыми или всеми свойствами
     */
    percentBy100(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /**
     * Применять форматирование, учитывающее множественное число, и языковые правила, связанные с множественным числом
     * @param value a number, bigint, or string, to format/ число для форматирования
     * @param words list of words for formatting (in the format one|two|few|many|other|zero)/
     * список слов для форматирования (в формате `one|two|few|many|other|zero`)
     * @param options Property for PluralRules/ свойство для PluralRules
     * @param optionsNumber an object with some or all properties/ объект с некоторыми или всеми свойствами
     */
    plural(value: NumberOrString, words: string, options?: Intl.PluralRulesOptions, optionsNumber?: Intl.NumberFormatOptions): string;
    /**
     * Enables language-sensitive date and time formatting.
     *
     * Конструктором объектов, включающих языка-зависимое форматирование даты и времени.
     * @param value the date to format/ дата для форматирования
     * @param type type of data format/ тип формата data
     * @param styleOptions the representation of the month/ представление месяца
     * @param hour24 whether to use 12-hour time/ использовать ли 12-часовое время
     */
    date(value: NumberOrStringOrDate, type?: GeoDate, styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions, hour24?: boolean): string;
    /**
     * Enables language-sensitive relative time formatting.
     *
     * Включает форматирование относительного времени с учетом языка.
     * @param value a number, bigint, or string, to format/ число для форматирования
     * @param styleOptions the length of the internationalized message/
     * длина интернационализированного сообщения
     * @param todayValue current day/ текущий день
     */
    relative(value: NumberOrStringOrDate, styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions, todayValue?: Date): string;
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
    relativeLimit(value: NumberOrStringOrDate, limit: number, todayValue?: Date, relativeOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions, dateOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions, type?: GeoDate, hour24?: boolean): string;
    /**
     * Возвращает отформатированное значение времени, прошедшего с момента события
     * @param value a number, bigint, or string, to format/ число для форматирования
     * @param unit time unit/ единица времени
     * @param styleOptions additional option or formatting style/ дополнительная опция или стиль форматирования
     */
    relativeByValue(value: NumberOrString, unit: Intl.RelativeTimeFormatUnit, styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions): string;
    /**
     * Names of months.<br>
     * Названия месяцев.
     * @param value the date to format/ дата для форматирования
     * @param style the representation of the month/ представление месяца
     */
    month(value?: NumberOrStringOrDate, style?: Intl.DateTimeFormatOptions['month']): string;
    /**
     * Array to list of months.
     *
     * Массив в список месяцев.
     * @param style the representation of the month/ представление месяца
     */
    months(style?: Intl.DateTimeFormatOptions['month']): ItemValue<number | undefined>[];
    /**
     * Returns names of days of the week.
     *
     * Возвращает названия дней недели.
     * @param value the date to format/ дата для форматирования
     * @param style the representation of the weekday/ представление о дне недели
     */
    weekday(value?: NumberOrStringOrDate, style?: Intl.DateTimeFormatOptions['weekday']): string;
    /**
     * An array of the list of names of the days of the week.
     *
     * Массив из списка названий дней недели.
     * @param style the representation of the weekday/ представление о дне недели
     */
    weekdays(style?: Intl.DateTimeFormatOptions['weekday']): ItemValue<number | undefined>[];
    /**
     * Time.
     *
     * Время.
     * @param value the date to format/ дата для форматирования
     */
    time(value: NumberOrStringOrDate): string;
    /**
     * Sorts strings taking into account the characteristics of countries.
     *
     * Сортирует строки с учетом особенностей стран.
     * @param data an array with data/ массив с данными
     * @param compareFn a function for sorting/ функция для сортировки
     */
    sort<T>(data: T[], compareFn?: (a: T, b: T) => [string, string]): T[];
    /**
     * The object enables language-sensitive number formatting.
     *
     * Объект включает форматирование чисел с учетом языка.
     * @param options an object with some or all properties/
     * объект с некоторыми или всеми свойствами
     */
    private numberObject;
    /**
     * Returns options for data according to its type.
     *
     * Возвращает options для data по его типу.
     * @param type type of data format/ тип формата data
     * @param display the representation of the month/ представление месяца
     */
    private dateOptions;
}
