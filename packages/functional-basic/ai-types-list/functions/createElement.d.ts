// md5:3a0c5789fe9524f733251fec26842062 true
/**
 * Creates an HTML element, applies properties or a setup callback, and inserts it into the DOM.
 * @remarks Returns `undefined` during SSR. Call within client-only lifecycle hooks (e.g., `onMounted`, `useEffect`) to prevent hydration mismatches.
 * @keywords createElement, create dom element, html node, ssr safe
 */
export declare function createElement<T extends HTMLElement>(parentElement?: HTMLElement, tagName?: string, options?: Partial<T> | Record<keyof T, T[keyof T]> | ((element: T) => void), referenceElement?: HTMLElement): T | undefined;