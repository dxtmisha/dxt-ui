// md5:06a3e56f8f9658762165f8b877d1e4f7 true
/** Retrieves a property value from an element or window by key, returning a default value if missing. @keywords element, get, property, key, item, dom */
export declare function getElementItem<T extends ElementOrWindow, K extends keyof T, D>(element: ElementOrString<T>, index: K | string, defaultValue?: D): T[K] | D | undefined;