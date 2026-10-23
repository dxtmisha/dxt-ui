// md5:13a63767ffb9ba72652ac205d24120ad true
/** Converts a value to an array or returns it as-is if already an array. @keywords toArray, array wrap, ensure array, cast array */
export declare function toArray<T>(value: T): T extends unknown[] ? T : [T];