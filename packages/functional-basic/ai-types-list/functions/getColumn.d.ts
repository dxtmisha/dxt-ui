// md5:edea2aa75de7ca7c85fd0bffe7873fc2 true
/** Returns column values from an array or object. @keywords get_column, column, array */
export declare function getColumn<T, K extends keyof T>(array: ObjectOrArray<T>, column: K): (T[K] | undefined)[];