// md5:f1d0951ab3fac6a452e61142e8d2c6d0 true
import type { ConstrBind } from '@dxtmisha/functional';
/** ImageCrop component dependency registration @keywords image crop, component include */
export type ImageCropComponentInclude = {
    /** ImageCrop component configuration */
    imageCrop?: object;
};
/** Props for embedding ImageCrop inside another component @keywords image crop, props include, binding */
export type ImageCropPropsInclude<ImageCrop extends ImageCropPropsBasic = ImageCropPropsBasic> = {
    /** Bound attributes passed directly to ImageCrop */
    imageCropAttrs?: ConstrBind<ImageCrop>;
};
/** Emits interface for ImageCrop inclusion @keywords image crop, emits include */
export type ImageCropEmitsInclude = ImageCropEmits;