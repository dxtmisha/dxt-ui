// md5:b39a52b29f6d4baa49b8357d6dcc9311 true
/**
 * Transforms a string into its corresponding data type (undefined, null, boolean, number, object, or function).
 * @keywords transform, parse, cast, deserialize, type coercion, string conversion
 * @example
 * transformation('true') // true
 * transformation('12.5') // 12.5
 * transformation('{"a":1}') // { a: 1 }
 * transformation('null') // null
 */
export declare function transformation<T = unknown>(value: unknown, isFunctionCheck?: boolean): T;