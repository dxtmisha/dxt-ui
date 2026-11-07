// md5:d71faa2ff47a6893d15a5b168dcb3ac9 true
/** Safely executes a function, promise, or static value and resolves the result. @keywords execute, promise, async, runner, resolve */
export declare function executePromise<T = void, Args extends unknown[] = unknown[]>(...[callback, ...args]: [
    callback: ((...args: Args) => PromiseLike<T> | T) | PromiseLike<T> | T,
    ...args: Args
] | (undefined extends T ? [
] : never)): Promise<Awaited<T>>;