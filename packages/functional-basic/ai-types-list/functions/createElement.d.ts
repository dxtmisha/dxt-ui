// md5:e2674658a39ef6e0db5240bdfe63afd4 true
/**
 * Creates and inserts an HTML element with attributes or setup callback, returning undefined in SSR.
 * @remarks Uses `document.createElement`. Returns `undefined` in SSR environments. Sanitize `innerHTML` to prevent XSS.
 * @keywords createElement, create dom element, html, dom factory, ssr safe
 */
export declare function createElement<T extends HTMLElement = HTMLDivElement>(parentElement?: Element | DocumentFragment | null, tagName?: string, options?: Partial<T> | Record<string, unknown> | ((element: T) => void) | null, referenceElement?: Node | null): T | undefined;