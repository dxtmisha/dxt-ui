// md5:e4c910bf578d7d54f53ef6d565d7af1f true
/** Checks if the value is a function. @keywords isFunction, function, callback */
export declare function isFunction<T>(callback: T): callback is Extract<T, FunctionArgs<any, any>>;