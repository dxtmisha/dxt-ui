// md5:aee36cda03bf4f137639597b73d91087 true
/** Converts a value to an array, returning it as is if already an array or wrapping it in an array. @keywords toArray, cast array, wrap array, normalize array */
export declare function toArray<T>(value: T): T extends any[] ? T : [T];