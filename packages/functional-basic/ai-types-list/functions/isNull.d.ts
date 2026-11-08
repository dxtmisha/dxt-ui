// md5:071f3e554f4a3c01a8686b8688051251 true
/** Checks whether the value is null or undefined. @keywords isNull, null, undefined, nil, check, type guard */
export declare function isNull<T = Undefined>(value?: T): value is Extract<T | undefined, Undefined>;