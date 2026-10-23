// md5:c38df1a0043bc8094a4a4b14595f64de true
/** Checks if a value is a function. @keywords isFunction, function, callback, type guard */
export declare function isFunction<T>(callback: T): callback is Extract<T, FunctionAnyType>;