// md5:759dd6517870121eda2ca2e3c7f76e9c true
/** Checks whether a value is a function. @keywords isFunction, function check, type guard, predicate */
export declare function isFunction<T>(callback: T): callback is Extract<T, FunctionAnyType>;