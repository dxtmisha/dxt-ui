// md5:2ce080dde1598c6a770f39bea3257c3a true
/** Recursively merges or replaces properties of objects or arrays. @keywords deep merge, recursive replace, object assign, array merge */
export declare function replaceRecursive<I>(target: ObjectItem<I>, replacement?: ObjectOrArray<I>, isMerge?: boolean): ObjectItem<I>;