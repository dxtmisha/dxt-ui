import { FormattersType, FormattersList, FormattersOptionsList, FormattersOptionsInformation, FormattersOptionsCurrency, FormattersOptionsDate, FormattersOptionsName, FormattersOptionsNumber, FormattersOptionsPlural, FormattersOptionsUnit, FormattersReturn, FormattersListProp, FormattersItemProp } from '../types/formattersTypes';
/**
 * Class for formatting a list of data based on provided options.
 *
 * Класс для форматирования списка данных на основе предоставленных параметров.
 * @template Options type of formatting options / тип параметров форматирования.
 * @template List type of the list of items (can be an array or a single item) / тип списка элементов (может быть массивом или одним элементом).
 * @template Item type of a single item in the list / тип одного элемента в списке.
 */
export declare class Formatters<Options extends FormattersOptionsList = FormattersOptionsList, List extends FormattersListProp = FormattersListProp, Item extends FormattersItemProp<List> = FormattersItemProp<List>> {
    protected options: Options;
    protected list?: List | undefined;
    /**
     * Constructor
     *
     * Конструктор
     * @param options formatting options for each column/property / параметры форматирования для каждого столбца/свойства
     * @param list initial list of data to format / начальный список данных для форматирования
     */
    constructor(options: Options, list?: List | undefined);
    /**
     * Checks if the list is set.
     *
     * Проверяет, установлен ли список.
     * @returns true if the list is set / true, если список установлен
     */
    is(): boolean;
    /**
     * Checks if the list is an array.
     *
     * Проверяет, является ли список массивом.
     * @returns true if the list is an array / true, если список является массивом
     */
    isArray(): this is this & {
        list: FormattersList<Item>;
    };
    /**
     * Returns the count of records in the list.
     *
     * Возвращает количество записей в списке.
     * @returns count of records / количество записей
     */
    length(): number;
    /**
     * Returns the current list of data as an array.
     *
     * Возвращает текущий список данных в виде массива.
     * @returns the list of data / список данных
     */
    getList(): FormattersList<Item>;
    /**
     * Returns the current formatting options.
     *
     * Возвращает текущие параметры форматирования.
     * @returns formatting options / параметры форматирования
     */
    getOptions(): Options;
    /**
     * Sets the list of data to be formatted.
     *
     * Устанавливает список данных для форматирования.
     * @param list list of data / список данных
     * @returns this instance / текущий экземпляр
     */
    setList(list?: List): this;
    /**
     * Formats the entire list or a single item based on the provided options.
     * Adds formatted values with the suffix 'Format' to each item.
     *
     * Форматирует весь список или один элемент на основе предоставленных параметров.
     * Добавляет отформатированные значения с суффиксом 'Format' к каждому элементу.
     * @returns FormattersReturn<List, Options> formatted data (list or single item) / отформатированные данные (список или один элемент)
     */
    to(): FormattersReturn<List, Options>;
    /**
     * Generates formatted data for a single item based on options.
     *
     * Генерирует отформатированные данные для одного элемента на основе параметров.
     * @param item item to format / элемент для форматирования
     * @returns object with formatted fields / объект с отформатированными полями
     * @protected
     */
    protected getFormatData(item: Item): Record<string, string>;
    /**
     * Router-like method to delegate formatting to specific type formatters.
     *
     * Метод-маршрутизатор для делегирования форматирования конкретным типам форматировщиков.
     * @param valueOriginal original value to format/ исходное значение для форматирования
     * @param item entire item context/ весь контекст элемента
     * @param type type of formatter to use/ тип используемого форматировщика
     * @param options additional options for the specific formatter/
     * дополнительные параметры для конкретного форматировщика
     * @protected
     * @returns Formatted string/ отформатированная строка
     */
    protected transformation<Type extends FormattersType>(valueOriginal: any, item: any, type?: Type, options?: FormattersOptionsInformation<Type>): string;
    /**
     * Formats a value as currency.
     *
     * Форматирует значение как валюту.
     * @param value value to format/ значение для форматирования
     * @param item item context/ контекст элемента
     * @param options currency formatting options/ параметры форматирования валюты
     * @protected
     * @returns Formatted currency string/ отформатированная строка валюты
     */
    protected formatCurrency(value: any, item: Item, options?: FormattersOptionsCurrency): string;
    /**
     * Formats a value as a date.
     *
     * Форматирует значение как дату.
     * @param value value to format/ значение для форматирования
     * @param options date formatting options/ параметры форматирования даты
     * @protected
     * @returns Formatted date string/ отформатированная строка даты
     */
    protected formatDate(value: any, options?: FormattersOptionsDate): string;
    /**
     * Formats full name from multiple property names.
     *
     * Форматирует полное имя из нескольких имен свойств.
     * @param item item context containing name components/ контекст элемента, содержащий компоненты имени
     * @param options name formatting options (prop names for first, last, surname)/
     * параметры форматирования имени (имена свойств для имени, фамилии, отчества)
     * @protected
     * @returns Formatted name string or empty string if components are missing/
     * отформатированная строка имени или пустая строка, если компоненты отсутствуют
     */
    protected formatName(item: Item, options?: FormattersOptionsName): string;
    /**
     * Formats a value as a number.
     *
     * Форматирует значение как число.
     * @param value value to format/ значение для форматирования
     * @param options number formatting options/ параметры форматирования числа
     * @protected
     * @returns Formatted number string/ отформатированная строка числа
     */
    protected formatNumber(value: any, options?: FormattersOptionsNumber): string;
    /**
     * Formats a value based on plural rules.
     *
     * Форматирует значение на основе правил множественного числа.
     * @param value numeric value for pluralization/ числовое значение для плюрализации
     * @param options plural formatting options (words and rules)/
     * параметры форматирования множественного числа (слова и правила)
     * @protected
     * @returns Formatted plural string/ отформатированная строка множественного числа
     */
    protected formatPlural(value: any, options?: FormattersOptionsPlural): string;
    /**
     * Formats a value with a specific unit.
     *
     * Форматирует значение с определенной единицей измерения.
     * @param value value to format/ значение для форматирования
     * @param options unit formatting options/ параметры форматирования единиц измерения
     * @protected
     * @returns Formatted unit string/ отформатированная строка единицы измерения
     */
    protected formatUnit(value: any, options?: FormattersOptionsUnit): string;
}
