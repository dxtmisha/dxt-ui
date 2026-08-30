// md5:2b4ec9194365fe76a82815a81a26ff43 true
/** Checks if a value is filled and not empty. @param zeroTrue Treats 0 or '0' as filled if true @keywords isFilled, filled, empty check, validation, presence */
export declare function isFilled<T>(value: T, zeroTrue?: boolean): value is Exclude<T, EmptyValue>;