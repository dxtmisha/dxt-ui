// md5:550dbf23c77a280607b0b1f548b6cf99 true
/** Safely executes a function and awaits its result if it returns a Promise. @keywords execute, promise, async, function */
export declare function executePromise<T>(callback: ((...args: any[]) => Promise<T>) | ((...args: any[]) => T) | T, ...args: any[]): Promise<T>;