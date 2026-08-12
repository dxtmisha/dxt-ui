// md5:686cb6089f064d4f079e9b9ce7b6a070
/**
 * Checks if the value is of type string.
 *
 * Проверяет, является ли значение типом строки.
 * @param value input value/ входное значение
 * @returns true if string / true, если строка
 */
export declare function isString<T>(value: T): value is Extract<T, string>;
