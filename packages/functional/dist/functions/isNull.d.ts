import { Undefined } from '../types/basicTypes';
/**
 * Is the variable equal to null or undefined.
 *
 * Является ли переменная равной null или undefined.
 * @param value input value/ входное значение
 */
export declare function isNull<T>(value: T): value is Extract<T, Undefined>;
