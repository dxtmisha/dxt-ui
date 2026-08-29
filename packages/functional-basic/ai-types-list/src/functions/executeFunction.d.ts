// md5:bc1b686c90cb5158141f2a43e0944bda true
/** Executes callback with args if it is a function, otherwise returns the value as is. @keywords execute, callback, run, invoke, function */
export declare function executeFunction<T>(callback: T | FunctionArgs<any, T>, ...args: any[]): T;