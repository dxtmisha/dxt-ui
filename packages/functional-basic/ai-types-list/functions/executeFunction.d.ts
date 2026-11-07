// md5:d208d0fcb3ebf2d086015cc75c88d0fb true
/** Executes the callback with provided arguments if it is a function, otherwise returns the value as is. @keywords execute, invoke, call, callback, resolve */
export declare function executeFunction<T, Args extends unknown[] = unknown[]>(callback: T | ((...args: Args) => T), ...args: Args): T;