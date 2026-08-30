// md5:0c19712ce8bb535fbc0574cfd3f30046 true
import type { ConstrBind, Undefined } from '@dxtmisha/functional';

/** Enumeration of supported image and icon types @keywords image, icon, type, format */
export declare enum ImageTypeValue {
    pdf = "pdf",
    file = "file",
    array = "array",
    image = "image",
    flag = "flag",
    flagCompressed = "flag-compressed",
    color = "color",
    public = "public",
    filled = "filled",
    outlined = "outlined",
    round = "round",
    sharp = "sharp",
    twoTone = "two-tone",
    material = "material",
    icon = "icon"
}

export type ImageElement = HTMLElement | undefined;
export type ImageAttrs = Record<keyof HTMLImageElement, any>;
/** Image coordinate margins in 1 to 4 value tuple representations @keywords coordinates, margin, padding */
export type ImageCoordinatorItem = [number] | [number, number] | [number, number, number] | [number, number, number, number] | Undefined;
export type ImageSize<T = number> = {
    width: T;
    height: T;
};
export type ImagePictureItem = Record<keyof HTMLSourceElement & 'key', any>;
export type ImagePictureList = ImagePictureItem[];
export type ImagePicture = Record<string, string> | ImagePictureList;
export type ImageUint8ArrayType = Uint8Array<ArrayBuffer> | ArrayBuffer;
export type ImageUint8ArrayItem = {
    item: ImageUint8ArrayType;
    type: string;
    src: string;
};
export type ImageUint8ArrayCache = ImageUint8ArrayItem[];
export type ImageItem = ImageSize & {
    image: HTMLImageElement;
    src: string;
};
export type ImageTypeItem = ImageTypeValue | Undefined;
export type ImageEventItem = ImageItem | string | undefined;
export type ImageEventType = {
    type: ImageTypeItem;
};
export type ImageEventData = ImageEventType & {
    image: ImageEventItem;
};
export type ImageValue<Image extends ImagePropsBasic = ImagePropsBasic> = string | ConstrBind<Image> | null;
export type ImageComponentInclude = {
    image?: object;
};
export type ImageEmitsInclude = ImageEmits;
export type ImagePropsInclude<Image extends ImagePropsBasic = ImagePropsBasic> = {
    image?: string | ConstrBind<Image>;
    imageAttrs?: ConstrBind<Image>;
};