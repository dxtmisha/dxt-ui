import { EmptyValue } from '../types/basicTypes';
/**
 * Checks if the field is filled.
 *
 * Проверяет, заполнено ли поле.
 * @param value input value/ входное значение
 */
export declare function isFilled<T>(value: T): value is Exclude<T, EmptyValue>;
