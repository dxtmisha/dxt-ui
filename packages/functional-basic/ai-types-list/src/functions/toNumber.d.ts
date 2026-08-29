// md5:7999d9c32600cd9f0e2b4f807bd4a304 true
/**
 * Converts a string or number to a finite floating-point number, handling separators and stripping non-numeric characters.
 * @example
 * toNumber("1 234,56") // 1234.56
 * toNumber("1,234.56") // 1234.56
 * toNumber("1,234")    // 1.234
 * @keywords toNumber, parse number, float, numeric string, parse float, sanitize
 */
export declare function toNumber(value?: NumberOrString): number;