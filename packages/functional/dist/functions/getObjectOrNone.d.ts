/**
 * Returns the object if the object’s values are set.
 *
 * Возвращает объект, если заданы значения объекта.
 * @param value let’s assume that this is an object/ предположим, что это объект
 */
export declare function getObjectOrNone<T>(value: T): T & Record<string, any>;
