// md5:3a0c5789fe9524f733251fec26842062 true
/**
 * Creates a DOM element with the specified tag name, attributes, and options. @keywords createElement dom html tag
 */
export declare function createElement<T extends HTMLElement>(parentElement?: HTMLElement, tagName?: string, options?: Partial<T> | Record<keyof T, T[keyof T]> | ((element: T) => void), referenceElement?: HTMLElement): T | undefined;