// md5:ea7586122640fd58cefd925b9e658e4a true
/** Extracts an array of values for a specific property or column from an array of objects. @keywords column, pluck, extract, values, property */
export declare function getColumn<T, K extends keyof T>(array: ObjectOrArray<T>, column: K): (T[K] | undefined)[];