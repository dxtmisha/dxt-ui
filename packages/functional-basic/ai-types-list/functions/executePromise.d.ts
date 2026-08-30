// md5:550dbf23c77a280607b0b1f548b6cf99 true
/** Safely executes a sync/async function or resolves a static value in a Promise with provided arguments. @keywords execute, promise, async, runner, callback */
export declare function executePromise<T>(callback: ((...args: any[]) => Promise<T>) | ((...args: any[]) => T) | T, ...args: any[]): Promise<T>;