// md5:8f6652c7f30031feb18cf12ad01b22c7 true
/** Removes all properties matching an exception value from an object. @keywords object filter remove undefined clean */
export declare function getObjectNoUndefined<T extends Record<string | number, any>>(data: T, exception?: any): T;