// md5:e90c389ab2e6b7f1d8761afe60f55210 true
/** Resize type for image scaling. @keywords resize, image, scale, max */
type ResizeImageByMaxType = 'auto' | 'width' | 'height';
/** Resizes an image to fit within a maximum size constraint. @keywords resize, image, scale, max, dimensions */
export declare function resizeImageByMax(image: HTMLImageElement | string, maxSize: number, type?: ResizeImageByMaxType, typeData?: string): string | undefined;
export {};