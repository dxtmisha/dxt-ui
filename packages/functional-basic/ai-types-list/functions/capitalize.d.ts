// md5:ba9038a1cfdca9c053bed855d2585da4 true
/** Capitalizes the first letter of a string. @keywords capitalize, uppercase, first letter, string */
export declare function capitalize<T = string>(value?: T, locale?: boolean | string): T extends string ? Capitalize<T> : string;