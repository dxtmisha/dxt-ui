// md5:6ee7aee3ccb54021b9f2d887bbcf4c30 true
export type ImagePropsToken = {
    turn?: boolean;
    disabled?: boolean;
    hide?: boolean;
    adaptive?: boolean;
    static?: boolean;
    size?: 'auto' | 'contain' | 'cover';
};
/** Image source, layout, and loading properties. @keywords image, layout, loading */
export type ImagePropsBasic = {
    /** Icon name, URL, File, or binary buffer; 'image:' prefix marks an explicit image path. */
    value?: string | File | ImageUint8ArrayType | null;
    url?: string;
    /** Adaptive group name for resolution switching. */
    adaptiveGroup?: string;
    adaptiveAlways?: boolean;
    objectWidth?: string | number;
    objectHeight?: string | number;
    /** Image cropping or positioning coordinates. */
    coordinator?: ImageCoordinatorItem;
    x?: string | number;
    y?: string | number;
    /** Render as <img> tag instead of CSS background image. */
    tagImg?: boolean;
    /** Image source set for responsive resolutions. */
    srcset?: string | Record<string, string>;
    /** Picture sources for <picture> element rendering. */
    picture?: ImagePicture;
    alt?: string;
    lazy?: boolean;
    preloadOffset?: string;
    fetchPriority?: ImageAttrs['fetchPriority'];
};
/** Image component incoming properties. @keywords image, props */
export type ImageProps = ImagePropsBasic & ImagePropsToken;
/** Default values for image properties. @keywords image, defaults */
export declare const defaultsImage: {
    adaptiveGroup: string;
    preloadOffset: string;
};