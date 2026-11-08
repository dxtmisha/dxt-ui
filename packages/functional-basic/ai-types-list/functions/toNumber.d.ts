// md5:a5383f5d04ae586c06eacf51978a4aa3 true
/** Resolves to `bigint` if `T` is strictly `bigint`, otherwise `number`. */
export type ToNumberReturn<T> = [T] extends [never] ? number : 0 extends (1 & T) ? number : [T] extends [bigint] ? bigint : number;
/**
 * Converts a value to a finite number or preserves `bigint`. Normalizes separators and strips non-numeric characters.
 * @keywords parse number, string to number, float, bigint, sanitize number, numeric conversion
 * @example
 * toNumber("1 234,56") // 1234.56
 * toNumber("1,234.56") // 1234.56
 * toNumber("1,234")    // 1.234
 * toNumber(100n)       // 100n
 */
export declare function toNumber<T = number>(value?: T): ToNumberReturn<T>;