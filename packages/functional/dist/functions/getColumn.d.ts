import { ObjectOrArray } from '../types/basicTypes';
/**
 * Returns an array of values for a specific column in the input array.
 *
 * Возвращает массив значений для определенного столбца входного массива.
 * @param array a one array or an array of objects from which to pull a column of values from/
 * многомерный массив или массив объектов, из которого будет производиться выборка значений
 * @param column the column of values to return/ ключ столбца, значения которого нужно вернуть
 */
export declare function getColumn<T, K extends keyof T>(array: ObjectOrArray<T>, column: K): (T[K] | undefined)[];
