// md5:89352ff4bc229172139fdb718dc706db true
/** Converts a value to a Date object. @keywords date, parse, convert, timestamp */
export declare function toDate<T extends Date | number | string>(value?: T): (T & Date) | Date;