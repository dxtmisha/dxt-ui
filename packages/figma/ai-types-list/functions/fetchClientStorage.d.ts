// md5:10197004096aac36a62e1089ac45aa2a true
/** Fetches data from client storage. @keywords storage, client storage, fetch, cache, local storage */
export declare function fetchClientStorage<T>(name: string, callback: (value: T) => void, defaultValue?: T, isOnce?: boolean): void;