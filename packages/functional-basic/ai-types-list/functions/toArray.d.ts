// md5:aee36cda03bf4f137639597b73d91087 true
/**
 * Converts a value to an array.
 * @keywords toArray array convert wrap
 */
export declare function toArray<T>(value: T): T extends any[] ? T : [T];