// md5:06a3e56f8f9658762165f8b877d1e4f7 true
/** Retrieves an element property value by key with an optional fallback. @keywords element, get, property, item, value */
export declare function getElementItem<T extends ElementOrWindow, K extends keyof T, D>(element: ElementOrString<T>, index: K | string, defaultValue?: D): T[K] | D | undefined;