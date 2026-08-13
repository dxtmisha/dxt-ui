// md5:ee1a909022a72ba03c90ccbff561f81b true
/**
 * Returns the identifier (ID) of the element or creates it if missing.
 * @keywords getElementId, element, id, dom
 * @param element element to get ID from
 * @param selector optional selector suffix
 */
export declare function getElementId<E extends ElementOrWindow>(element?: ElementOrString<E>, selector?: string): string;

/**
 * Initializes the getElementId function with a custom listener.
 * @keywords initGetElementId, id, generator, ssr
 * @warning Initialization is mandatory for correct SSR functioning.
 */
export declare function initGetElementId(newListener: () => string | number): void;