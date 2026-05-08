import { SearchListItem } from './SearchListItem';
import { SearchListOptions } from './SearchListOptions';
import { SearchCache, SearchCacheItem, SearchColumns, SearchFormatItem, SearchFormatList, SearchItem, SearchListValue } from '../types/searchTypes';
/**
 * Class for managing and formatting the search data list and its cache.
 *
 * Класс для управления и форматирования списка данных поиска и его кэша.
 */
export declare class SearchListData<T extends SearchItem, K extends SearchColumns<T>> {
    protected list: SearchListValue<T>;
    protected columns: K | undefined;
    protected item: SearchListItem;
    protected options: SearchListOptions;
    protected listCache?: SearchCache<T>;
    /**
     * Constructor for SearchListData.
     *
     * Конструктор для SearchListData.
     * @param list original list of items/ исходный список элементов
     * @param columns columns to search in/ столбцы для поиска
     * @param item current search item state/ текущее состояние элемента поиска
     * @param options search options/ опции поиска
     */
    constructor(list: SearchListValue<T>, columns: K | undefined, item: SearchListItem, options: SearchListOptions);
    /**
     * Checks if both list and columns are provided.
     *
     * Проверяет, предоставлены ли и список, и столбцы.
     * @returns boolean indicating if ready for column-based search/ логическое значение, указывающее на готовность к поиску по столбцам
     */
    is(): this is this & {
        list: T[];
        columns: string[];
    };
    /**
     * Checks if the list is provided.
     *
     * Проверяет, предоставлен ли список.
     * @returns boolean/ логическое значение
     */
    isList(): this is this & {
        list: T[];
    };
    /**
     * Returns the original list.
     *
     * Возвращает исходный список.
     * @returns list value/ значение списка
     */
    getList(): SearchListValue<T>;
    /**
     * Returns the search columns.
     *
     * Возвращает столбцы поиска.
     * @returns columns or undefined/ столбцы или undefined
     */
    getColumns(): K | undefined;
    /**
     * Gets the search cache, initializing it if necessary.
     *
     * Получает кэш поиска, инициализируя его при необходимости.
     * @returns search cache/ кэш поиска
     */
    protected getCache(): SearchCache<T>;
    /**
     * Sets a new list and regenerates the cache.
     *
     * Устанавливает новый список и регенерирует кэш.
     * @param list new list/ новый список
     * @returns this instance/ данный экземпляр
     */
    setList(list: SearchListValue<T>): this;
    /**
     * Sets new search columns and regenerates the cache.
     *
     * Устанавливает новые столбцы поиска и регенерирует кэш.
     * @param columns new columns/ новые столбцы
     * @returns this instance/ данный экземпляр
     */
    setColumns(columns?: SearchColumns<T>): this;
    /**
     * Finds a cached item corresponding to the given original item.
     *
     * Находит кэшированный элемент, соответствующий данному исходному элементу.
     * @param item original item/ исходный элемент
     * @returns cache item or undefined/ кэшированный элемент или undefined
     */
    findCacheItem(item: T): SearchCacheItem<T> | undefined;
    /**
     * Iterates over the cached list and executes a callback for each item.
     *
     * Перебирает кэшированный список и выполняет обратный вызов для каждого элемента.
     * @param callback function to execute for each item/ функция для выполнения для каждого элемента
     * @returns formatted list/ отформатированный список
     */
    forEach(callback: (item: SearchCacheItem<T>['item'], value: SearchCacheItem<T>['value']) => SearchFormatItem<T, K> | undefined): SearchFormatList<T, K>;
    /**
     * Converts a single item to a formatted item with highlighted matches if selected.
     *
     * Преобразует один элемент в отформатированный элемент с выделенными совпадениями, если он выбран.
     * @param item original item/ исходный элемент
     * @param selection whether the item matches the search and should be highlighted/ совпадает ли элемент с поиском и должен ли он быть выделен
     * @returns formatted item/ отформатированный элемент
     */
    toFormatItem(item: T, selection: boolean): SearchFormatItem<T, K>;
    /**
     * Formats a column path to a camelCase property name with a 'Search' suffix.
     *
     * Форматирует путь к столбцу в имя свойства camelCase с суффиксом 'Search'.
     * @param column column path/ путь к столбцу
     * @returns property name/ имя свойства
     */
    protected getColumnName(column: string): string;
    /**
     * Adds highlight tags to the given value based on the current search value.
     *
     * Добавляет теги выделения к данному значению на основе текущего значения поиска.
     * @param value value to highlight/ значение для выделения
     * @returns highlighted string/ выделенная строка
     */
    protected addTag(value: any): string;
    /**
     * Generates a search cache for the current list and columns.
     *
     * Генерирует кэш поиска для текущего списка и столбцов.
     * @returns search cache/ кэш поиска
     */
    protected generateCache(): SearchCache<T>;
    /**
     * Initializes the search cache.
     *
     * Инициализирует кэш поиска.
     * @returns void
     */
    protected initCache(): void;
    /**
     * Resets the search cache.
     *
     * Сбрасывает кэш поиска.
     * @returns void
     */
    protected resetCache(): void;
}
