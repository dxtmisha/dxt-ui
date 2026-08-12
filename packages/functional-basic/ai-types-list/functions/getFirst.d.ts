// md5:d57f2beb933588c9063eb560b70c4007
/**
 * Возвращает первый элемент массива или объекта
 *
 * Returns the first element of an array or object
 * @param value Входное значение
 * @returns Первый элемент массива или объекта
 */
export declare function getFirst<T>(value: T | T[] | Record<string, T>): T | undefined;
