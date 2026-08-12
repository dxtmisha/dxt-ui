// md5:4669296ff849bbb716fc5e21ff019d4d
/**
 * Checks if a value is an object.
 *
 * Проверяет, является ли значение объектом.
 * @param value input value/ входное значение
 * @returns true if object/ true, если объект
 */
export declare function isObject<T>(value: T): value is Extract<T, Record<any, any>>;
