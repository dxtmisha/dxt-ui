// md5:cc0b88c1d97adc9c1f668d25b934e5e6 true
/**
 * Transforms a string into its corresponding data type (boolean, number, object, null, undefined, or function).
 * @keywords transform, parse, cast, deserialize, type conversion
 * @example
 * transformation('true') // true
 * transformation('12.5') // 12.5
 * transformation('{"a":1}') // { a: 1 }
 * transformation('null') // null
 */
export declare function transformation<T = unknown>(value?: unknown, isFunctionCheck?: boolean): T;