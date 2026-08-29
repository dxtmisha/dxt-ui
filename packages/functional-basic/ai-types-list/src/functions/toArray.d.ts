// md5:aee36cda03bf4f137639597b73d91087 true
/** Converts a value to an array, returning it as is if already an array or wrapping it otherwise. @keywords toArray wrap array cast convert */
export declare function toArray<T>(value: T): T extends any[] ? T : [T];