// md5:029198c9a7c61814c2e7d907deaf51d5 true
/**
 * Recursively merges a target object with elements from a replacement object or array without mutating source data.
 * @warning Intended exclusively for plain JSON-like objects and arrays; built-in class instances (`Date`, `RegExp`, `Map`, `Set`) and functions are not supported.
 * @keywords deep merge, recursive replace, object merge, immutable merge
 */
export declare function replaceRecursive<I = unknown>(target?: ObjectItem<I> | null, replacement?: ObjectOrArray<I> | readonly I[] | null, isMerge?: boolean, disableCopy?: boolean): ObjectItem<I>;