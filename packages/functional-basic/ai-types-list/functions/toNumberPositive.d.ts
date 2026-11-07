// md5:86128ceae22ec9cdee38f3fa2f699135 true
/**
 * Converts a value to a positive finite number (> 0), or returns default value (0) if invalid.
 * @keywords number, positive, parse, finite, convert, cast
 * @example
 * toNumberPositive(15) // 15
 * toNumberPositive('10') // 10
 * toNumberPositive(-5) // 0
 * toNumberPositive('invalid', 1) // 1
 */
export declare function toNumberPositive(value?: unknown, defaultValue?: number): number;