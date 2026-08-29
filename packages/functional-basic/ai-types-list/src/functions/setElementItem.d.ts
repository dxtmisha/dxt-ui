// md5:efd1cd45b85b0ccff294d4d1f2ba8514 true
/** Sets or updates a property value on a DOM element or window by key. @keywords element, property, set, update, dom, window */
export declare function setElementItem<E extends ElementOrWindow, K extends keyof E, V extends E[K] = E[K]>(element: ElementOrString<E>, index: K, value: V | Record<string, V>): E | undefined;