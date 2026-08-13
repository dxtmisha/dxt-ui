// md5:16a34c6a758bd633308d543e11edbc95 true
import { ConstrBind, Undefined } from '@dxtmisha/functional';
export declare enum ImageTypeValue {
    /** PDF file @keywords pdf file */
    pdf = "pdf",
    /** Generic file @keywords file generic */
    file = "file",
    /** Array of values @keywords array values */
    array = "array",
    /** Direct link to an image @keywords image direct link */
    image = "image",
    /** Flag icon @keywords flag icon */
    flag = "flag",
    /** Compressed flag icon @keywords flag compressed icon */
    flagCompressed = "flag-compressed",
    /** Solid color @keywords color solid */
    color = "color",
    /** Publicly available link @keywords public link */
    public = "public",
    /** Filled style @keywords filled style */
    filled = "filled",
    /** Outlined style @keywords outlined style */
    outlined = "outlined",
    /** Rounded style @keywords round style */
    round = "round",
    /** Sharp style @keywords sharp style */
    sharp = "sharp",
    /** Two-tone style @keywords two-tone style */
    twoTone = "two-tone",
    /** Material design icon @keywords material design icon */
    material = "material",
    /** Generic icon @keywords icon generic */
    icon = "icon"
}
export type ImageElement = HTMLElement | undefined;
export type ImageAttrs = Record<keyof HTMLImageElement, any>;
export type ImageCoordinatorItem = [number] | [number, number] | [number, number, number] | [number, number, number, number] | Undefined;
/** Image size definition @keywords image size width height */
export type ImageSize<T = number> = {
    width: T;
    height: T;
};
export type ImagePictureItem = Record<keyof HTMLSourceElement & 'key', any>;
export type ImagePictureList = ImagePictureItem[];
export type ImagePicture = Record<string, string> | ImagePictureList;
export type ImageUint8ArrayType = Uint8Array<ArrayBuffer> | ArrayBuffer;
/** Image Uint8Array item data @keywords image uint8array item */
export type ImageUint8ArrayItem = {
    item: ImageUint8ArrayType;
    type: string;
    src: string;
};
export type ImageUint8ArrayCache = ImageUint8ArrayItem[];
/** Uploaded or direct link image parameters @keywords image item parameters */
export type ImageItem = ImageSize & {
    image: HTMLImageElement;
    src: string;
};
export type ImageTypeItem = ImageTypeValue | Undefined;
export type ImageEventItem = ImageItem | string | undefined;
/** Image event type structure @keywords image event type */
export type ImageEventType = {
    type: ImageTypeItem;
};
/** Image event data structure @keywords image event data */
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