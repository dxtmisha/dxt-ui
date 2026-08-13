// md5:1fe042344215b3e5babe723436360a02
import { Ref, ComputedRef } from 'vue';
import { SortColumnItem, SortDir } from '@dxtmisha/functional';
import { SortIncludeSort, SortIncludeSortDir, SortPropsInclude } from '../types/sortTypes';
/**
 * Class representing sorting logic across components.
 * Manages multi-column sorting a list by column/property key(s), direction(s), or custom compare function.
 *
 * Класс для управления логикой сортировки в компонентах.
 * Управляет мультиколоночной сортировкой списка по ключам колонок, направлениям или пользовательской функции сравнения.
 */
export declare class SortInclude<T = any> {
    protected readonly props: SortPropsInclude<T>;
    protected readonly targetList?: any[] | (() => any[] | undefined) | undefined;
    protected readonly sort?: SortIncludeSort | undefined;
    protected readonly sortDir?: SortIncludeSortDir | undefined;
    /**
     * Constructor for SortInclude.
     *
     * Конструктор для SortInclude.
     * @param props input sort properties / входные свойства сортировки
     * @param targetList target list array or callback function returning list / целевой массив списка или функция обратного вызова, возвращающая список
     * @param sort fallback target column(s), reactive ref, or callback function returning column(s) / резервная целевая колонка (колонки), реактивный реф или функция обратного вызова
     * @param sortDir fallback sorting direction, reactive ref, or callback function returning direction / резервное направление сортировки, реактивный реф или функция обратного вызова
     */
    constructor(props: SortPropsInclude<T>, targetList?: any[] | (() => any[] | undefined) | undefined, sort?: SortIncludeSort | undefined, sortDir?: SortIncludeSortDir | undefined);
    /**
     * Computed property for normalized column sorting specifications list.
     *
     * Реактивное свойство для списка нормализованных спецификаций сортировки колонок.
     */
    readonly columns: ComputedRef<SortColumnItem[]>;
    /**
     * Computed property for sorted list of items.
     *
     * Реактивное свойство для отсортированного списка элементов.
     */
    readonly sortedList: ComputedRef<T[]>;
    /**
     * Returns primary sort column key.
     *
     * Возвращает основной ключ колонки сортировки.
     * @returns primary sort column key / основной ключ колонки сортировки
     */
    get column(): string | undefined;
    /**
     * Returns primary sort direction ('asc' or 'desc').
     *
     * Возвращает основное направление сортировки ('asc' или 'desc').
     * @returns primary sort direction / основное направление сортировки
     */
    get dir(): SortDir;
    /**
     * Returns whether sorting is currently active.
     *
     * Проверяет, активна ли сортировка в данный момент.
     * @returns sort active state / состояние активности сортировки
     */
    isSort(): boolean;
    /**
     * Returns sorted or original list of items.
     *
     * Возвращает отсортированный или исходный список элементов.
     * @returns sorted or original list of items / отсортированный или исходный список элементов
     */
    getList(): T[];
    /**
     * Returns original source list from targetList callback or props list.
     *
     * Возвращает исходный список элементов из функции обратного вызова targetList или props list.
     * @returns array of source items / массив исходных элементов
     */
    protected getSourceList(): T[];
    /**
     * Returns a normalized sort column item for a given column key or prefix string.
     *
     * Возвращает нормализованный элемент колонки сортировки для заданного ключа или строки с префиксом.
     * @param col column name string or prefix / имя колонки или строка с префиксом
     * @returns normalized sort column item / нормализованный элемент колонки сортировки
     */
    protected getColumnItem(col: string): SortColumnItem;
    /**
     * Resolves a value, reactive ref, or getter function into its unwrapped value.
     *
     * Разрешает значение, реактивный реф или функцию-геттер в развернутое значение.
     * @param value raw value, reactive ref, or getter function / значение, реактивный реф или функция-геттер
     * @returns unwrapped value / развернутое значение
     */
    protected getValue<V>(value: V | Ref<V> | (() => V)): V;
}
