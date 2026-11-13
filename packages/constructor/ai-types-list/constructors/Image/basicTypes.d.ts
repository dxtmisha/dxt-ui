// md5:6c6791546f581ccda67acfe64de7537c true
import type { HTMLAttributes, ImgHTMLAttributes, SourceHTMLAttributes, VNodeProps } from 'vue';
import type { ConstrBind, ConstrClass, ConstrStyles, Undefined } from '@dxtmisha/functional';

/** Image type variants. @keywords image type format */
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

/** Scaling axes for adaptive images. @keywords adaptive scale axis */
export declare enum ImageAdaptiveItemType {
    x = "x",
    y = "y"
}

export type ImageCoordinatorItemFull = [number, number, number, number];

export type ImageCoordinatorItem =
    | readonly [number]
    | readonly [number, number]
    | readonly [number, number, number]
    | readonly [number, number, number, number]
    | Undefined;

export type ImageSize<T = number> = {
    width: T;
    height: T;
};

/** Storage structure for adaptive image groups. @keywords adaptive storage */
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

/** Attributes for HTML picture source elements. @keywords picture source responsive */
export interface ImagePictureItem extends Pick<SourceHTMLAttributes, 'media' | 'sizes' | 'src' | 'srcset' | 'type'>, Pick<VNodeProps, 'key'> {
    width?: ImgHTMLAttributes['width'];
    height?: ImgHTMLAttributes['height'];
}

export type ImagePictureList = ImagePictureItem[];

/**
 * Responsive picture source configuration.
 * @warning When using a Record, provide either strictly numeric keys or strictly string keys with units.
 * @keywords picture responsive breakpoints
 */
export type ImagePicture = Record<string, string> | ImagePictureList;

export type ImageElement = HTMLElement | undefined;

/** Attributes bound to the native image element. @keywords image attrs html */
export interface ImageAttrs extends Omit<ImgHTMLAttributes, 'loading' | 'src'>, Pick<VNodeProps, 'key'> {
    src?: string | null;
    loading?: ImgHTMLAttributes['loading'] | 'auto';
    fetchPriority?: ImgHTMLAttributes['fetchpriority'];
}

/** Root container element bindings. @keywords root attrs renderer */
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