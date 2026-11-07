// md5:b5f84cbac75328a26b6a22c1824c6b13 true
/** Converts a value into an array, returning it as-is if already an array or wrapping it otherwise. @keywords array, wrap, convert, toArray, cast */
export declare function toArray<T>(value: T): T extends readonly unknown[] ? T : [T];