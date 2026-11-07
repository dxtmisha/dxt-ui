// md5:825a0358659a2c6802dbe179cce3d19d true
/** Asynchronously skips the specified number of animation frames or executes a callback within them (resolves immediately in SSR). @keywords animation frame, requestAnimationFrame, skip frame, raf, ssr */
export declare function skipFrame<T = void>(callback?: (() => T | Promise<T>) | null, count?: number): Promise<T | void>;