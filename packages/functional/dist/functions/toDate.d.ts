/**
 * Conversion to Date object.
 *
 * Преобразование в объект Date.
 * @param value input value/ входное значение
 */
export declare function toDate<T extends Date | number | string>(value?: T): (T & Date) | Date;
