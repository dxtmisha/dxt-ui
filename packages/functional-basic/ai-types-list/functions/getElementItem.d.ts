// md5:339436aecce2fae8e2e43596cec64e8e true
/** Retrieves an element or window property value by key, with an optional default fallback. @keywords element property getter window dom */
export declare function getElementItem<T extends ElementOrWindow, K extends keyof T, D>(element: ElementOrString<T>, property: K | string, defaultValue?: D): T[K] | D | undefined;