import { SearchOptions } from '../types/searchTypes';
/**
 * Class for managing search list options.
 *
 * Класс для управления опциями списка поиска.
 */
export declare class SearchListOptions {
    protected options?: SearchOptions | undefined;
    /**
     * Constructor for SearchListOptions.
     *
     * Конструктор для SearchListOptions.
     * @param options search options/ опции поиска
     */
    constructor(options?: SearchOptions | undefined);
    /**
     * Returns the current search options.
     *
     * Возвращает текущие опции поиска.
     * @returns search options/ опции поиска
     */
    getOptions(): SearchOptions;
    /**
     * Returns the minimum number of characters required to trigger a search.
     *
     * Возвращает минимальное количество символов, необходимых для запуска поиска.
     * @returns limit value/ значение лимита
     */
    getLimit(): number;
    /**
     * Returns whether to return all items even if they don't match the search query.
     *
     * Возвращает, следует ли возвращать все элементы, даже если они не соответствуют поисковому запросу.
     * @returns boolean value/ логическое значение
     */
    getReturnEverything(): boolean;
    /**
     * Returns the search delay in milliseconds.
     *
     * Возвращает задержку поиска в миллисекундах.
     * @returns delay value/ значение задержки
     */
    getDelay(): number;
    /**
     * Returns whether to perform an exact match search.
     *
     * Возвращает, следует ли выполнять поиск с точным совпадением.
     * @returns boolean value/ логическое значение
     */
    getFindExactMatch(): boolean;
    /**
     * Returns the CSS class name used for highlighting matches.
     *
     * Возвращает имя класса CSS, используемое для выделения совпадений.
     * @returns class name/ имя класса
     */
    getClassName(): string;
    /**
     * Sets new search options.
     *
     * Устанавливает новые опции поиска.
     * @param options search options/ опции поиска
     * @returns this instance/ данный экземпляр
     */
    setOptions(options: SearchOptions): this;
}
