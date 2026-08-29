// md5:c3414dfe6cab6a7932857942675a797a true
/** Checks if a value is a function. @keywords isFunction, type guard, callable, check, callback */
export declare function isFunction<T>(callback: T): callback is Extract<T, FunctionArgs<any, any>>;