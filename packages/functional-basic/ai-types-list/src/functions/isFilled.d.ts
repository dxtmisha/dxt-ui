// md5:2b4ec9194365fe76a82815a81a26ff43 true
/** Checks if a value is filled and not empty. @param zeroTrue If true, '0' is considered filled @keywords isFilled, filled, not empty, validation */
export declare function isFilled<T>(value: T, zeroTrue?: boolean): value is Exclude<T, EmptyValue>;