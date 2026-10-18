// md5:7bffb2ce1345ec7cbf8df9fcf314bb28 true
export type GetElementImageCallback = (image: HTMLImageElement, event?: Event | string) => void;
/** Resolves or creates an HTMLImageElement from an image element or URL source with optional load/error callbacks. @keywords image, load image, image element, getElementImage */
export declare function getElementImage(image?: HTMLImageElement | string, onload?: GetElementImageCallback, onerror?: GetElementImageCallback): HTMLImageElement | undefined;