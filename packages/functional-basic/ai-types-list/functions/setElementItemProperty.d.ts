// md5:fc7bf08303f38d5a7cb2f085f53c0ac3 true
/** Sets or merges nested properties on an element with prototype pollution protection. @keywords set element property, merge properties, prototype pollution */
export declare function setElementItemProperty<E extends ElementOrWindow = HTMLElement>(element?: ElementOrString<E> | null, index?: PropertyKey, value?: unknown): boolean;