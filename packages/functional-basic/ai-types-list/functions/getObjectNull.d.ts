// md5:f28ca913d9724e3b7f9fed6d2ae54f04 true
/** Creates a prototype-less object (`Object.create(null)`), optionally copying properties from the provided data. @keywords object create null prototype dictionary clean */
export declare function getObjectNull<T = unknown>(data?: Record<string, T>): Record<string, T>;