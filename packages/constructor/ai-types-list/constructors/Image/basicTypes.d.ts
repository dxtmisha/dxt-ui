// md5:205286364abee5751289ee40c49b8937 true
import type { HTMLAttributes, ImgHTMLAttributes, SourceHTMLAttributes, VNodeProps } from 'vue';
import type { ConstrBind, ConstrClass, ConstrStyles, Undefined } from '@dxtmisha/functional';
/** Image resource and style type categories. @keywords image-type, format, icon-style */
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
/** Native image element attributes with normalized loading and fetch priority. @keywords image-attrs, img-props */
export interface ImageAttrs extends Omit<ImgHTMLAttributes, 'loading' | 'src'>, Pick<VNodeProps, 'key'> {
    src?: string | null;
    loading?: ImgHTMLAttributes['loading'] | 'auto';
    fetchPriority?: ImgHTMLAttributes['fetchpriority'];
}
/** Root wrapper attributes including accessibility, design system classes, and styles. @keywords root-attrs, aria */
export interface ImageRootAttrs extends Omit<HTMLAttributes, keyof AriaList | 'class' | 'style'>, AriaList, Pick<VNodeProps, 'key' | 'ref'> {
    class?: ConstrClass;
    style?: ConstrStyles;
}
/** Coordinate tuple representation for positioning and cropping. @keywords coordinator, coordinates, crop */
export type ImageCoordinatorItem = readonly [
    number
] | readonly [
    number,
    number
] | readonly [
    number,
    number,
    number
] | readonly [
    number,
    number,
    number,
    number
] | Undefined;
export type ImageSize<T = number> = {
    width: T;
    height: T;
};
/** HTML picture source element attributes. @keywords picture-source, responsive */
export interface ImagePictureItem extends Pick<SourceHTMLAttributes, 'media' | 'sizes' | 'src' | 'srcset' | 'type'>, Pick<VNodeProps, 'key'> {
    width?: ImgHTMLAttributes['width'];
    height?: ImgHTMLAttributes['height'];
}
export type ImagePictureList = ImagePictureItem[];
export type ImagePicture = Record<string, string> | ImagePictureList;
export type ImageUint8ArrayType = Uint8Array<ArrayBuffer> | ArrayBuffer;
/** In-memory binary image buffer data with MIME type and optional loaded element. @keywords buffer, uint8array, mime */
export type ImageUint8ArrayItem = {
    item: ImageUint8ArrayType;
    type: string;
    src: string;
    image?: ImageItem;
};
export type ImageUint8ArrayCache = ImageUint8ArrayItem[];
export type ImageItem = ImageSize & {
    image: HTMLImageElement;
    src: string;
};
export type ImageTypeItem = ImageTypeValue | Undefined;
export type ImageEventItem = ImageItem | string | undefined;
export type ImageBinds = AriaList & {
    translate: 'no';
};
export type ImageValueBinds = {
    key: 'value';
    data: ImageEventItem;
};
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