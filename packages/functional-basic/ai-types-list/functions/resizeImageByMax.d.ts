// md5:b9ac136de0fd0983c8d2beba37504fe3 true
export type ResizeImageByMaxType = 'auto' | 'width' | 'height';

/**
 * Resizes an image to fit within a maximum size constraint using HTML Canvas.
 * @remarks Synchronous; requires a fully loaded image with valid natural dimensions. Returns a Base64 Data URL only when scaled; returns `undefined` if already within `maxSize` or unprocessable to prevent redundant Canvas re-encoding. For a fallback to the original source, use `resizeImage`.
 * @keywords image resize, scale image, max dimension, canvas resize, thumbnail, base64 data url
 */
export declare function resizeImageByMax(image: HTMLImageElement | string, maxSize: number, type?: ResizeImageByMaxType, typeData?: string, quality?: number): string | undefined;