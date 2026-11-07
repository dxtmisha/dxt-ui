// md5:d4907b97160ebd1578ea489e3034294e true
/** Creates a prototype-less object (`Object.create(null)`), optionally copying source properties. @keywords object null, prototype-less, dictionary, clean object */
export declare function getObjectNull<T = unknown>(data?: Record<string, T>): Record<string, T>;