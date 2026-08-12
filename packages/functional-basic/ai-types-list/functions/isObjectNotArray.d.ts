// md5:1f80447043a36197ae9d0a0d6c09b23d
/**
 * Checks if the value is an object or not an array.
 *
 * Проверяет, является ли значение объектом и не является массивом.
 * @param value input value/ входное значение
 * @returns true if object and not array/ true, если объект и не массив
 */
export declare function isObjectNotArray<T>(value: T): value is Exclude<Extract<T, Record<any, any>>, any[] | undefined | null>;
