// md5:c3414dfe6cab6a7932857942675a797a true
/** Checks if the value is a callable function. @keywords isFunction, callback, function, type guard, callable */
export declare function isFunction<T>(callback: T): callback is Extract<T, FunctionArgs<any, any>>;