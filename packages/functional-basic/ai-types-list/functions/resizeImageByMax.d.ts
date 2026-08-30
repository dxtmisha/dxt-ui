// md5:e90c389ab2e6b7f1d8761afe60f55210 true
type ResizeImageByMaxType = 'auto' | 'width' | 'height';
/** Resizes an image to fit within a maximum dimension constraint. @keywords image, resize, scale, dimension, max-size */
export declare function resizeImageByMax(image: HTMLImageElement | string, maxSize: number, type?: ResizeImageByMaxType, typeData?: string): string | undefined;