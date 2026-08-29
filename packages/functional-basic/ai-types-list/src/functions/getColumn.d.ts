// md5:ea7586122640fd58cefd925b9e658e4a true

/** Extracts an array of values for a specific column key from an array or collection of objects. @keywords get column, pluck, array column, property values */
export declare function getColumn<T, K extends keyof T>(array: ObjectOrArray<T>, column: K): (T[K] | undefined)[];