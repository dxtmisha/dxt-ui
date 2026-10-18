// md5:3b47ab08c09cb30eaed755140cc47d68 true
/**
 * Creates an HTML element, configures its attributes or logic, and optionally mounts it to a parent DOM node.
 * @remarks Designed for standard HTML elements via `document.createElement` (use `document.createElementNS` for SVG/MathML). Returns `undefined` in SSR environments; execute within client-only lifecycle hooks to avoid hydration mismatches.
 * @keywords createElement, create dom element, html, dom manipulation, mount
 */
export declare function createElement<T extends HTMLElement>(parentElement?: Element | DocumentFragment, tagName?: string, options?: Partial<T> | Record<string, unknown> | ((element: T) => void), referenceElement?: Node | null): T | undefined;