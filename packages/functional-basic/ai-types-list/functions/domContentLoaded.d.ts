// md5:9f2a2837e7166a46d30525f9836cca26 true
/** Executes a callback when the DOM is ready or immediately if already loaded. @keywords dom, ready, domcontentloaded, lifecycle, event */
export declare function domContentLoaded<T = void>(callback: () => T | Promise<T>): Promise<T>;