// md5:d5b86efb3f0e75b064431bbee4fa2869 true
/** Converts a Date, timestamp, or date string into a Date object. @keywords date, parse date, to date, convert date */
export declare function toDate<T extends Date | number | string>(value?: T): (T & Date) | Date;