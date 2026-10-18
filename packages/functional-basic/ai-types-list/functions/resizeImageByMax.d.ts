// md5:6cddbc84f1dc8b7e781c851ef1323c59 true
export type ResizeImageByMaxType = 'auto' | 'width' | 'height';

/**
 * Resizes an image synchronously to fit within a maximum dimension constraint, returning a base64 Data URL or undefined if unchanged.
 * @remarks Returns undefined if image dimensions are already within maxSize or cannot be processed, avoiding unnecessary canvas re-encoding.
 * @keywords resize, image, scale, max size, canvas, base64, data url
 */
export declare function resizeImageByMax(image: HTMLImageElement | string, maxSize: number, type?: ResizeImageByMaxType, typeData?: string): string | undefined;