// md5:9919eeaaccb093ff9a2da1d375faca06 true
/** Returns a random element from an array, object, or value, or undefined if empty. @keywords random, sample, pick, choice, item */
export declare function getRandomItem<T>(value?: T | readonly T[] | Record<string, T>): T | undefined;