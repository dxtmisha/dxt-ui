// md5:1bf42b2a43bfd8cc6fc653769744ee3f true
/**
 * Converts a string or number to a finite floating-point number, handling separators and stripping non-numeric characters.
 * @keywords toNumber, parse float, string to number, numeric cast, sanitize
 * @example
 * toNumber("1 234,56") // 1234.56
 * toNumber("1,234.56") // 1234.56
 * toNumber("1,234")    // 1.234
 */
export declare function toNumber(value?: unknown): number;