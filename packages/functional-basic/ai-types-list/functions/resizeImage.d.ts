// md5:9eec5250433c233f1362d004f74b2d39 true
/** Asynchronously resizes an image to fit within maximum dimension constraints. @keywords resize, image, scale, canvas, thumbnail, base64 */
export declare function resizeImage(image: HTMLImageElement | string, maxSize?: number, typeData?: string): Promise<string>;