// md5:d01b354891f79bdb899759f074a53314
import { SortColumnItem, SortFunction } from '../types/sortTypes';
/**
 * Sorts an array of items by one or more column paths, directions, or a custom comparison function.
 *
 * Сортирует массив элементов по одному или нескольким путям колонок, направлениям или пользовательской функции сравнения.
 * @param list input list array of items / входной список элементов
 * @param sortColumns list of column sorting specifications / список спецификаций сортировки колонок
 * @param customSort optional custom comparison function / необязательная пользовательская функция сравнения
 * @returns new sorted array of items / новый отсортированный массив элементов
 */
export declare function sortList<T = any>(list: T[], sortColumns: SortColumnItem[], customSort?: SortFunction<T>): T[];
