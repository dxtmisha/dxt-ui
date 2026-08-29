// md5:3a0c5789fe9524f733251fec26842062 true
/**
 * Creates and optionally configures and inserts an HTML element into the DOM.
 * @remarks Returns `undefined` during SSR. Use within client-only lifecycle hooks (e.g., `onMounted`, `useEffect`) to avoid hydration mismatch.
 * @keywords dom, create element, html, append child, ssr safe
 */
export declare function createElement<T extends HTMLElement>(parentElement?: HTMLElement, tagName?: string, options?: Partial<T> | Record<keyof T, T[keyof T]> | ((element: T) => void), referenceElement?: HTMLElement): T | undefined;