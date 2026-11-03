// md5:00f7e8718f0c37ead7d16ee4b206ca26 true
/** Checks if a value is filled (not empty), optionally considering '0' as filled. @keywords isFilled, empty check, filled, validation */
export declare function isFilled<T>(value?: T, zeroTrue?: boolean): value is Exclude<T, EmptyValue>;