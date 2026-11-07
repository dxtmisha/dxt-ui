// md5:18e22129cff2880c6395ebe19c2b71da true
export type GetElementImageCallback = (image: HTMLImageElement, event?: Event | string) => void;

/**
 * Resolves or creates an HTMLImageElement from an element instance or source string.
 * @remarks
 * If `image` is a string, creates an in-memory `HTMLImageElement` with `onload` and `onerror` listeners attached before assigning `src`. Existing `HTMLImageElement` instances are returned directly without modification. Returns `undefined` for invalid values or in SSR environments. Created elements are not attached to the DOM tree. Revoke Blob URLs in callbacks if applicable to prevent memory leaks.
 * @keywords image, HTMLImageElement, image loader, image source, DOM, SSR
 */
export declare function getElementImage(image?: unknown, onload?: GetElementImageCallback, onerror?: GetElementImageCallback): HTMLImageElement | undefined;