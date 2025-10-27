import { EmptyValue } from '../types/basicTypes';
/**
 * Checks if the field is filled.
 *
 * Проверяет, заполнено ли поле.
 * @param value input value/ входное значение
 * @param zeroTrue if true, '0' is considered filled/ если true, то '0' считается заполненным
 */
export declare function isFilled<T>(value: T, zeroTrue?: boolean): value is Exclude<T, EmptyValue>;
