// md5:8f6652c7f30031feb18cf12ad01b22c7 true
/** Removes properties matching the exception value (default: undefined) from an object. @keywords filter object, remove undefined, clean object, omit properties */
export declare function getObjectNoUndefined<T extends Record<string | number, any>>(data: T, exception?: any): T;