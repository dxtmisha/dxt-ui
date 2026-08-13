// md5:0239856caad16d3b434c06635f052713
import { useSearchRef, SearchColumns, SearchFormatList, SearchItem } from '@dxtmisha/functional';
import { SearchPropsInclude } from '../types/searchTypes';
/**
 * Class for managing search logic across components.
 * Wraps useSearchRef to filter reactive lists by query and columns.
 *
 * Класс для управления логикой поиска в компонентах.
 * Оборачивает useSearchRef для фильтрации реактивных списков по запросу и колонкам.
 */
export declare class SearchInclude<T extends SearchItem = any> {
    protected readonly props: SearchPropsInclude<T>;
    protected readonly columns?: (SearchColumns<T> | (() => SearchColumns<T>)) | undefined;
    /** Search composable instance / Экземпляр композабла поиска */
    readonly item: ReturnType<typeof useSearchRef<T, SearchColumns<T>>>;
    /**
     * Constructor for SearchInclude.
     *
     * Конструктор для SearchInclude.
     * @param props input search properties / входные свойства поиска
     * @param columns fallback columns array or callback function returning columns / резервный массив колонок или функция обратного вызова, возвращающая колонки
     */
    constructor(props: SearchPropsInclude<T>, columns?: (SearchColumns<T> | (() => SearchColumns<T>)) | undefined);
    /**
     * Returns search filtered list of items.
     *
     * Возвращает список элементов, отфильтрованный поиском.
     * @returns search filtered list of items / отфильтрованный список элементов
     */
    get list(): SearchFormatList<T, SearchColumns<T>>;
    /**
     * Returns number of search results.
     *
     * Возвращает количество результатов поиска.
     * @returns number of search results / количество результатов поиска
     */
    get length(): number;
    /**
     * Returns current search query string.
     *
     * Возвращает текущую строку поиска.
     * @returns current search query string / текущая строка поиска
     */
    get search(): string;
    /**
     * Returns whether search is currently in loading state.
     *
     * Возвращает, находится ли поиск в состоянии загрузки.
     * @returns loading status / статус загрузки
     */
    get loading(): boolean;
    /**
     * Checks whether search is currently active.
     *
     * Проверяет, активен ли поиск в данный момент.
     * @returns search active state / состояние активности поиска
     */
    isSearch(): boolean;
    /**
     * Gets the search columns list from props or fallback callback/array.
     *
     * Получает список колонок поиска из props или резервного callback/массива.
     * @returns search columns array / массив колонок поиска
     */
    protected getSearchColumns(): SearchColumns<T>;
}
