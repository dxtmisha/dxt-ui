// md5:8f6bc83570e6f4e757b7dec95a9a7d20 true
export interface AnyToStringOptions {
  isArrayString?: boolean;
  isBooleanString?: boolean;
  trim?: boolean;
}

/**
 * Safely converts any value to a string with configurable array, boolean, and trimming rules.
 * @keywords any to string, convert, cast, serialize, stringify
 * @example
 * anyToString('  Hello  ') // => 'Hello'
 * anyToString('  Hello  ', { trim: false }) // => '  Hello  '
 * anyToString([1, 2, 3]) // => '1,2,3'
 * anyToString([1, 2, 3], { isArrayString: false }) // => '[1,2,3]'
 * anyToString({ a: 1 }) // => '{"a":1}'
 * anyToString(true) // => '1'
 * anyToString(false) // => '0'
 * anyToString(true, { isBooleanString: true }) // => 'true'
 * anyToString(false, { isBooleanString: true }) // => 'false'
 * anyToString(null) // => ''
 */
export declare function anyToString<V = unknown>(value?: V, options?: AnyToStringOptions): string;