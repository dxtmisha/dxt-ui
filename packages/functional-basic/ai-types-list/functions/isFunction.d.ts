// md5:513d175b4f8f0f11360b4902c4b64577 true
/** Checks whether the value is a function object or class constructor. @keywords isFunction, function, callable, type guard */
export declare function isFunction<T>(callback: T): callback is 0 extends 1 & T ? Extract<FunctionAnyType, T> : [
    Extract<T, FunctionAnyType | NewableFunction>
] extends [
    never
] ? Extract<FunctionAnyType, T> : Extract<T, FunctionAnyType | NewableFunction>;