/**
 * Checks if the values are arrays.
 *
 * Проверяет, являются ли значения массивами.
 * @param value input value/ входное значение
 */
export declare function isArray<T, R>(value: T): value is Extract<T, R[]>;
