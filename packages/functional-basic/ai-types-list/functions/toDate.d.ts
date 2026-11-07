// md5:f1ac8a7013a846f1f8ca32abbfbc70ca true
/** Converts a value to a Date object, using the local time zone when no explicit offset is set. @keywords date conversion, parse date, toDate, timestamp */
export declare function toDate<T extends Date | number | string>(value?: T | null): (T & Date) | Date;