// md5:bc1ac217e11da7d0ba59f5635c2e2fc2 true
/** Executes a callback with arguments if callable, or returns the value as is. @keywords execute, invoke, call, callback, function or value */
export declare function executeFunction<T, Args extends unknown[] = unknown[]>(callback: T | FunctionArgs<never, T> | ((...args: Args) => T), ...args: Args): T;