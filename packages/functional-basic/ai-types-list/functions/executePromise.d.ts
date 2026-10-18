// md5:ecec4033d86efed8c7fe1bb46a0654f2 true
/** Safely executes a function, promise, or static value and awaits its resolution. @keywords execute promise, async executor, run promise, safe call */
export declare function executePromise<T, Args extends unknown[] = unknown[]>(callback: ((...args: Args) => PromiseLike<T> | T) | PromiseLike<T> | T, ...args: Args): Promise<Awaited<T>>;