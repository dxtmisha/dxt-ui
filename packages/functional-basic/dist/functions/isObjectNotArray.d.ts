/**
 * Checks if the value is an object or not an array.
 *
 * Проверяет, является ли значение объектом и не является массивом.
 * @param value input value/ входное значение
 */
export declare function isObjectNotArray<T>(value: T): value is Exclude<Extract<T, Record<any, any>>, any[] | undefined | null>;
