// md5:15a28920c26b761f8bcaed21c77aca20 true
export type InputImageCounterType = 'auto' | 'pixel' | 'size' | 'hide';

/** Image input value with source and crop coordinates @keywords image value, crop */
export type InputImageValue = {
    /** Image source (URL, data URL, or base64) */
    value?: string;
    /** Crop coordinates [top, right, bottom, left] */
    crop?: CropAreaCoordinator;
};

/** Raw input image item as structured value, string, or undefined @keywords image item, input */
export type InputImageItem = InputImageValue | string | undefined;