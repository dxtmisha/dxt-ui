import { FunctionArgs } from '../types/basicTypes';
/**
 * Checks if the function is a callback function.
 *
 * Проверяет, является ли функция обратного вызова.
 * @param callback the value being checked/ проверяемое значение
 * @returns true if function / true, если функция
 */
export declare function isFunction<T>(callback: T): callback is Extract<T, FunctionArgs<any, any>>;
