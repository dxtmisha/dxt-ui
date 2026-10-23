// md5:9e7966db036886cc5de4b7525f4bbc5e true
export type ResizeImageByMaxType = 'auto' | 'width' | 'height';

/**
 * Resizes an image synchronously to fit within a maximum size constraint.
 * @remarks Requires a loaded image with valid dimensions. Returns `undefined` if already within bounds or unprocessable to prevent redundant canvas re-encoding.
 * @keywords resize image, scale image, max dimension, canvas resize, base64
 */
export declare function resizeImageByMax(image: HTMLImageElement | string, maxSize: number, type?: ResizeImageByMaxType, typeData?: string, quality?: number): string | undefined;