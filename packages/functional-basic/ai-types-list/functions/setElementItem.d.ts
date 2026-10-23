// md5:491f8982f589f9dc9c7d73da099b2a65 true
/** Modifies the property, attribute, or style value of an element by key. @keywords element, set property, attribute, style, dom */
export declare function setElementItem<E extends ElementOrWindow, K extends keyof E = keyof E, V extends E[K] = E[K]>(element: ElementOrString<E>, index: K | string, value: V | Record<string, V> | unknown): E | undefined;