/**
 * Conversion to Date object.
 *
 * Преобразование в объект Date.
 * @param value input value/ входное значение
 * @returns date object/ объект даты
 */
export declare function toDate<T extends Date | number | string>(value?: T): (T & Date) | Date;
