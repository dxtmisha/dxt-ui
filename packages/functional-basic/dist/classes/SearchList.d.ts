import { SearchListData } from './SearchListData';
import { SearchListItem } from './SearchListItem';
import { SearchListMatcher } from './SearchListMatcher';
import { SearchListOptions } from './SearchListOptions';
import { SearchCacheItem, SearchColumns, SearchFormatItem, SearchFormatList, SearchItem, SearchListValue, SearchOptions } from '../types/searchTypes';
/**
 * Main class for managing a searchable list.
 * Coordinates between options, item state, matching logic, and data storage.
 *
 * Основной класс для управления списком с возможностью поиска.
 * Координирует работу опций, состояния элементов, логики сопоставления и хранения данных.
 */
export declare class SearchList<T extends SearchItem, K extends SearchColumns<T>> {
    protected options: SearchListOptions;
    protected item: SearchListItem;
    protected matcher: SearchListMatcher;
    protected data: SearchListData<T, K>;
    /**
     * Constructor for SearchList.
     *
     * Конструктор для SearchList.
     * @param list initial list of items/ исходный список элементов
     * @param columns columns to perform search on/ столбцы для выполнения поиска
     * @param value initial search value/ начальное значение поиска
     * @param options search options/ опции поиска
     */
    constructor(list: SearchListValue<T>, columns?: K, value?: string, options?: SearchOptions);
    /**
     * Returns the search data management instance.
     *
     * Возвращает экземпляр управления данными поиска.
     * @returns SearchListData instance/ экземпляр SearchListData
     */
    getData(): SearchListData<T, K>;
    /**
     * Returns the current list of items.
     *
     * Возвращает текущий список элементов.
     * @returns list of items/ список элементов
     */
    getList(): SearchListValue<T>;
    /**
     * Returns the current search columns.
     *
     * Возвращает текущие столбцы поиска.
     * @returns columns or undefined/ столбцы или undefined
     */
    getColumns(): K | undefined;
    /**
     * Returns the search item instance.
     *
     * Возвращает экземпляр элемента поиска.
     * @returns SearchListItem instance/ экземпляр SearchListItem
     */
    getItem(): SearchListItem;
    /**
     * Returns the current search value.
     *
     * Возвращает текущее значение поиска.
     * @returns search value string or undefined/ строка значения поиска или undefined
     */
    getValue(): string | undefined;
    /**
     * Returns the search options instance.
     *
     * Возвращает экземпляр опций поиска.
     * @returns SearchListOptions instance/ экземпляр SearchListOptions
     */
    getOptions(): SearchListOptions;
    /**
     * Sets a new list of items and resets the cache.
     *
     * Устанавливает новый список элементов и сбрасывает кэш.
     * @param list new list/ новый список
     * @returns this instance/ данный экземпляр
     */
    setList(list: SearchListValue<T>): this;
    /**
     * Sets new search columns and resets the cache.
     *
     * Устанавливает новые столбцы поиска и сбрасывает кэш.
     * @param columns new columns/ новые столбцы
     * @returns this instance/ данный экземпляр
     */
    setColumns(columns?: K): this;
    /**
     * Sets a new search value and updates the matcher.
     *
     * Устанавливает новое значение поиска и обновляет сопоставитель.
     * @param value new search value/ новое значение поиска
     * @returns this instance/ данный экземпляр
     */
    setValue(value?: string): this;
    /**
     * Sets new search options and updates the matcher.
     *
     * Устанавливает новые опции поиска и обновляет сопоставитель.
     * @param options new options/ новые опции
     * @returns this instance/ данный экземпляр
     */
    setOptions(options: SearchOptions): this;
    /**
     * Processes the list and returns a formatted list of items based on the current search state.
     *
     * Обрабатывает список и возвращает отформатированный список элементов на основе текущего состояния поиска.
     * @returns formatted list of items/ отформатированный список элементов
     */
    to(): SearchFormatList<T, K>;
    /**
     * Callback for processing items when a search is active.
     * Checks for selection and handles "return everything" option.
     *
     * Обратный вызов для обработки элементов при активном поиске.
     * Проверяет выбор и обрабатывает опцию "возвращать всё".
     * @param item item / элемент
     * @param value search value / значение поиска
     * @returns formatted item or undefined / отформатированный элемент или undefined
     */
    protected readonly callbackToSelection: (item: SearchCacheItem<T>["item"], value: SearchCacheItem<T>["value"]) => SearchFormatItem<T, K> | undefined;
    /**
     * Callback for processing items when no search is active.
     *
     * Обратный вызов для обработки элементов, когда поиск не активен.
     * @param item item / элемент
     * @returns formatted item / отформатированный элемент
     */
    protected readonly callbackToNone: (item: SearchCacheItem<T>["item"]) => SearchFormatItem<T, K>;
}
