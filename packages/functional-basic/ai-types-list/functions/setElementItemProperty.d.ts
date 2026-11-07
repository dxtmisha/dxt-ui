// md5:efb2c16e19b132593eed08b4ba68f511 true
/** Sets a property or merges nested object properties on an element with prototype pollution protection. @keywords element, property, set, merge, prototype pollution */
export declare function setElementItemProperty<E extends ElementOrWindow = HTMLElement>(element?: ElementOrString<E> | null, index?: PropertyKey | null, value?: unknown): boolean;