// md5:466def7497a766fd09e390110735fd63 true
/** Asynchronously skips specified animation frames or executes a callback within them, resolving immediately in non-DOM/SSR. @keywords skip frame, animation frame, raf, requestAnimationFrame, ssr */
export declare function skipFrame<T = void>(callback?: () => T | Promise<T>, count?: number): Promise<T | void>;