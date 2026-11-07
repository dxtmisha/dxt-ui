// md5:ba20a68343a61cdf42555825d3fc46df true
/** Extracts an array of values for a specified property or column from a collection. @keywords column, pluck, extract, property, map */
export declare function getColumn<T, K extends keyof T>(array: readonly (T | null | undefined)[] | ObjectItem<T | null | undefined> | null | undefined, column: K): (T[K] | undefined)[];