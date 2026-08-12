// md5:7e7c78b147900e462dde78ff4546a4a2
/**
 * Checks if the values are arrays.
 *
 * Проверяет, являются ли значения массивами.
 * @param value input value/ входное значение
 * @returns true if array / true, если массив
 */
export declare function isArray<T, R>(value: T): value is Extract<T, R[]>;
