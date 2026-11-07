// md5:e0cde1dcbf83e71ecdf6b81e7d6d30b4 true
/** Retrieves all attributes of an element as key-value pairs. @keywords get attributes, dom, element, properties */
export declare function getAttributes<E extends ElementOrWindow = HTMLElement>(element?: ElementOrString<E> | null): Record<string, string | undefined>;