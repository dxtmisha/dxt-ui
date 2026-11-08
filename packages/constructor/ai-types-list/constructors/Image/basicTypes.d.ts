// md5:d052b81ef140f340c9216300297670bb true
import type { HTMLAttributes, ImgHTMLAttributes, SourceHTMLAttributes, VNodeProps } from 'vue';
import type { ConstrBind, ConstrClass, ConstrStyles, Undefined } from '@dxtmisha/functional';

/** Image type variants. @keywords image, type, icon, format */
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

export type ImageTypeItem = ImageTypeValue | Undefined;
export type ImageValue<Image extends ImagePropsBasic = ImagePropsBasic> = string | ConstrBind<Image> | null;
export type ImageCoordinatorItem = readonly [number] | readonly [number, number] | readonly [number, number, number] | readonly [number, number, number, number] | Undefined;

export type ImageSize<T = number> = {
    width: T;
    height: T;
};

/** Storage structure for tracked adaptive image groups. @keywords adaptive, storage, layout */
export type ImageAdaptiveGroupStorage = {
    objects: ImageAdaptiveItem[];
    objectsAdaptive: ImageAdaptiveItem[];
    time?: boolean;
};

export type ImageItem = ImageSize & {
    image: HTMLImageElement;
    src: string;
};

export type ImageEventItem = ImageItem | string | undefined;

export type ImageEventType = {
    type: ImageTypeItem;
};

export type ImageEventData = ImageEventType & {
    image: ImageEventItem;
};

export type ImageUint8ArrayType = Uint8Array<ArrayBuffer> | ArrayBuffer;

/** Picture source HTML attributes with virtual node key. @keywords picture, source, responsive */
export interface ImagePictureItem extends Pick<SourceHTMLAttributes, 'media' | 'sizes' | 'src' | 'srcset' | 'type'>, Pick<VNodeProps, 'key'> {
    width?: ImgHTMLAttributes['width'];
    height?: ImgHTMLAttributes['height'];
}

export type ImagePictureList = ImagePictureItem[];

/** Responsive image picture map or source list. @warning When using Record, pass either only numeric keys or string keys with units. @keywords picture, responsive, media */
export type ImagePicture = Record<string, string> | ImagePictureList;

export type ImageElement = HTMLElement | undefined;

/** Native HTML img element binding attributes. @keywords image, attributes, binding */
export interface ImageAttrs extends Omit<ImgHTMLAttributes, 'loading' | 'src'>, Pick<VNodeProps, 'key'> {
    src?: string | null;
    loading?: ImgHTMLAttributes['loading'] | 'auto';
    fetchPriority?: ImgHTMLAttributes['fetchpriority'];
}

/** Root container rendering attributes. @keywords root, attributes, render */
export interface ImageRootAttrs extends Omit<HTMLAttributes, keyof AriaList | 'class' | 'style'>, AriaList, Pick<VNodeProps, 'key' | 'ref'> {
    class?: ConstrClass;
    style?: ConstrStyles;
}

export type ImageBinds = AriaList & {
    translate: 'no';
};

export type ImageValueBinds = {
    key: 'value';
    data: ImageEventItem;
};

export type ImageComponentInclude = {
    image?: object;
};

export type ImageEmitsInclude = ImageEmits;

export type ImagePropsInclude<Image extends ImagePropsBasic = ImagePropsBasic> = {
    image?: string | ConstrBind<Image>;
    imageAttrs?: ConstrBind<Image>;
};