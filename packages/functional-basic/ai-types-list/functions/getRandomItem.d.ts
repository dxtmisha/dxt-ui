// md5:e57d6b880066c57a3b2feeec41c32e64 true
/** Returns a random element from an array, object, or value, or undefined if empty. @keywords random, sample, pick, choice, array, object */
export declare function getRandomItem<T>(value?: T | readonly T[] | Record<string, T> | null): T | undefined;