/**
 * Checks if a value is an object.
 *
 * Проверяет, является ли значение объектом.
 * @param value input value/ входное значение
 */
export declare function isObject<T>(value: T): value is Extract<T, Record<any, any>>;
