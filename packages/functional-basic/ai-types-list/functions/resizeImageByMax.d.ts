// md5:2e5388014405832e213c9522161a4dc5 true
export type ResizeImageByMaxType = 'auto' | 'width' | 'height';
/**
 * Synchronously resizes an image element or source to fit within a maximum size constraint.
 * @remarks
 * Requires a fully loaded image with `naturalWidth` and `naturalHeight`.
 * Returns a Base64 Data URL only when scaled via canvas; returns `undefined` if dimensions are already within `maxSize` or image is unloaded to avoid unnecessary re-encoding.
 * @keywords image, resize, scale, canvas, base64, data url, max size, aspect ratio
 */
export declare function resizeImageByMax(image?: unknown, maxSize?: number, type?: ResizeImageByMaxType, typeData?: string, quality?: number): string | undefined;