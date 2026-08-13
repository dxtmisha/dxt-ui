// md5:5e31ec04c4377e9cd4c9ec98582a589f true
/** Executes the argument if it is a function, otherwise returns it as is. @keywords execute, function, callback */
export declare function executeFunction<T>(callback: T | FunctionArgs<any, T>, ...args: any[]): T;