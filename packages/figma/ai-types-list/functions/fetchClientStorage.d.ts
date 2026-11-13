// md5:81121bfebe40cf6641bb01cdba77ca6f true
/** Fetches data from client storage with an optional default value and single-run flag. @keywords client storage, fetch, cache, local storage */
export declare function fetchClientStorage<T = unknown>(name: string, callback: (value: T) => void, defaultValue?: T, isOnce?: boolean): void;