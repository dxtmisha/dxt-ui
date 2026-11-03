// md5:aa8b9cfcb7181f8e75a7fec09fa6f45d true
/**
 * Executes a callback when DOMContentLoaded fires, or immediately if the DOM is already loaded.
 * @remarks In non-DOM environments (SSR), execution can be disabled by passing `isServer: false`.
 * @keywords dom, ready, domContentLoaded, ssr, readyState, event
 */
export declare function domContentLoaded<T = void>(callback?: (() => T | Promise<T>) | null, isServer?: boolean): Promise<T>;