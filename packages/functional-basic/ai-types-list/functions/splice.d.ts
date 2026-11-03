// md5:15880f2535bec1bf3c7b32d981631740 true
/**
 * Recursively merges properties from a replacement object into a target object, optionally replacing a matched entry in place.
 * @warning Supports plain JSON-like objects only; built-in instances (`Date`, `RegExp`, `Map`, `Set`) and functions are not supported.
 * @keywords splice, merge, object, replace, recursive
 */
export declare function splice<I = unknown>(array?: ObjectItem<I> | null, replacement?: ObjectItem<I> | I | null, indexStart?: string | null): ObjectItem<I>;