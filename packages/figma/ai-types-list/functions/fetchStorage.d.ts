// md5:e9423566631e33ddbb93b8beec08c497 true
/** Fetches data from storage and invokes callback with the value. @keywords fetch storage get retrieve */
export declare function fetchStorage<T = unknown>(name: string, callback: (value: T) => void, id?: string, defaultValue?: T, isOnce?: boolean): void;