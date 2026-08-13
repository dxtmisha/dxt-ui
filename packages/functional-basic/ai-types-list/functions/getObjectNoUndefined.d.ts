// md5:8f6652c7f30031feb18cf12ad01b22c7 true
/** Removes properties equal to the exception value from the object. @keywords object filter remove undefined */
export declare function getObjectNoUndefined<T extends Record<string | number, any>>(data: T, exception?: any): T;