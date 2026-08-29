// md5:9eec5250433c233f1362d004f74b2d39 true
/** Resizes an image (URL, base64, or HTMLImageElement) to fit within max pixel dimensions. @keywords image, resize, scale, canvas, base64 */
export declare function resizeImage(image: HTMLImageElement | string, maxSize?: number, typeData?: string): Promise<string>;