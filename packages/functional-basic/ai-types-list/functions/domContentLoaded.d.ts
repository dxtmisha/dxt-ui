// md5:9f2a2837e7166a46d30525f9836cca26 true
/** Executes callback when DOM is loaded or immediately if already ready @keywords dom content loaded ready */
export declare function domContentLoaded<T = void>(callback: () => T | Promise<T>): Promise<T>;