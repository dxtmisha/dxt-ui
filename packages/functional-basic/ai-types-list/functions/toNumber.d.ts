// md5:e413ec45de870a5c311f1e72bfeaacf2 true
/**
 * Converts a value to a finite floating-point number, normalizing separators and stripping non-numeric characters.
 * @keywords parse, float, number, cast, numeric conversion, separator
 * @example
 * toNumber("1 234,56") // 1234.56
 * toNumber("1,234.56") // 1234.56
 * toNumber("1,234")    // 1.234
 */
export declare function toNumber(value?: unknown): number;