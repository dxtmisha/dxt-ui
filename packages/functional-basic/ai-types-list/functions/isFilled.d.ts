// md5:e5b11f1df3e88c30e115f17fff8ebf26 true
/** Checks if a value is filled (not empty), optionally treating '0' as filled. @keywords isFilled, filled, validation, empty check */
export declare function isFilled<T>(value: T, zeroTrue?: boolean): value is Exclude<T, EmptyValue>;