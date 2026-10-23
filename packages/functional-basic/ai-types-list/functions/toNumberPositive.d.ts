// md5:5b388570b22d28ca11bc5498e40891c0 true
/**
 * Converts a value to a positive finite number (> 0), or returns a fallback value.
 * @keywords toNumberPositive, positive number, parse positive, sanitize number
 * @example
 * toNumberPositive(15) // 15
 * toNumberPositive('10') // 10
 * toNumberPositive(-5) // 0
 * toNumberPositive('invalid', 1) // 1
 */
export declare function toNumberPositive(value?: NumberOrString | null, defaultValue?: number): number;