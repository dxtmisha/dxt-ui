// md5:e79e38dc53e823f5f003741e3fc30f24 true
/** Checks if field is filled. @keywords isFilled, check, filled, empty */
export declare function isFilled<T>(value: T, zeroTrue?: boolean): value is Exclude<T, EmptyValue>;