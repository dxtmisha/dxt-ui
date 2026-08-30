// md5:65c59733bcd3bf1774991883a3356f0e true
type ImageCropPropsToken = {
    disabled?: boolean;
    readonly?: boolean;
};
/** Base properties for image cropping component @keywords image, crop, coordinates */
export type ImageCropPropsBasic<Image extends ImagePropsBasic = ImagePropsBasic, CropArea extends CropAreaPropsBasic = CropAreaPropsBasic> = CropAreaPropsInclude<CropArea> & ImagePropsInclude<Image> & ModelProps<any> & {
    /** Initial or current crop coordinates [top, right, bottom, left] */
    value?: CropAreaCoordinator;
    /** Alternative text for image */
    alt?: string;
};
/** Image crop component properties @keywords image, crop, props */
export type ImageCropProps = ImageCropPropsBasic & ImageCropPropsToken;
/** Default properties for image crop component @keywords defaults, image, crop */
export declare const defaultsImageCrop: {};