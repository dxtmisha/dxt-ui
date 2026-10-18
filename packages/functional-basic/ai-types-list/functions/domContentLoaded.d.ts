// md5:48a8afe6b8fe3c4bee97ce8a181fff93 true
/** Executes a callback when DOMContentLoaded fires, or immediately if already ready. @remarks In non-DOM/SSR environments, execution can be disabled with `isServer: false`. @keywords domContentLoaded, dom ready, readyState, ssr */
export declare function domContentLoaded<T = void>(callback?: () => T | Promise<T>, isServer?: boolean): Promise<T>;