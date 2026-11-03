// md5:cb6a497fd0ebe857774658f959250eb6 true
/**
 * Creates an HTML element, configures attributes or runs a modifier callback, and optionally appends it to a parent node.
 * @remarks Returns `undefined` during SSR. Uses `document.createElement`; use `document.createElementNS` for SVG/MathML. Sanitize input when providing `innerHTML` through options.
 * @keywords createElement, dom, html, create element, insert node
 */
export declare function createElement<T extends HTMLElement = HTMLDivElement>(parentElement?: Element | DocumentFragment | null, tagName?: string, options?: Partial<T> | Record<string, unknown> | ((element: T) => void) | null, referenceElement?: Node | null): T | undefined;