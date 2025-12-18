/**
 * Copies a simple object.
 *
 * Копирует простой объект.
 * @param value объект для копирования/ object for copying
 * @param source дополнительные свойства для копирования/ additional properties for copying
 * @returns возвращает новую копию объекта/ returns a new copy of the object
 */
export declare function copyObjectLite<T, R = T>(value: T, source?: any): R;
