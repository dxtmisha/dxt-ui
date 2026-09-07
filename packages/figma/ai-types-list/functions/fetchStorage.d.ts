// md5:52b449522893d3a63cd6737a1df89d6f true
/** Fetch storage data with a callback. @keywords fetch storage data retrieve read */
export declare function fetchStorage<T>(name: string, callback: (value: T) => void, id?: string, defaultValue?: T, isOnce?: boolean): void;