// md5:1f9b6fd523d67befeda67c2105b007d8 true
export type GetElementImageCallback = (image: HTMLImageElement, event?: Event | string) => void;
/**
 * Resolves or creates an HTMLImageElement from an existing element or URL string.
 * @remarks
 * If `image` is a string, a new `HTMLImageElement` is created with load and error callbacks attached before assigning `src`.
 * If already an `HTMLImageElement`, it is returned directly. Returns `undefined` for null, undefined, or in SSR environments.
 * Created elements are not attached to the DOM tree.
 * @keywords image, HTMLImageElement, load image, image loader, create element, DOM
 */
export declare function getElementImage(image?: HTMLImageElement | string | null, onload?: GetElementImageCallback, onerror?: GetElementImageCallback): HTMLImageElement | undefined;