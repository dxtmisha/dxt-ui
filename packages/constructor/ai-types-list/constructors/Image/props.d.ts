// md5:03a466a5ff32c8965475ba4d94fc4c52 true
export type ImagePropsToken = {
    turn?: boolean;
    disabled?: boolean;
    hide?: boolean;
    adaptive?: boolean;
    static?: boolean;
    size?: 'auto' | 'contain' | 'cover';
};
export type ImagePropsBasic = {
    /** Icon name, image URL, File object, or PDF link */
    value?: string | any;
    /** Image URL */
    url?: string;
    /** Adaptive resolution group identifier */
    adaptiveGroup?: string;
    /** Always enable adaptivity */
    adaptiveAlways?: boolean;
    /** Image object width */
    objectWidth?: string | number;
    /** Image object height */
    objectHeight?: string | number;
    /** Image crop or position coordinates */
    coordinator?: number[] | any;
    /** X-axis position */
    x?: string | number;
    /** Y-axis position */
    y?: string | number;
    /** Render as `<img>` tag instead of background image */
    tagImg?: boolean;
    /** Responsive image source set */
    srcset?: string | Record<string, string>;
    /** `<picture>` element source configurations */
    picture?: ImagePicture;
    /** Alternative text description */
    alt?: string;
    /** Enable lazy loading */
    lazy?: boolean;
    /** Preload viewport offset threshold */
    preloadOffset?: string;
    /** Image fetch priority hint */
    fetchPriority?: HTMLImageElement['fetchPriority'];
};
export type ImageProps = ImagePropsBasic & ImagePropsToken;
/** Default image property values @keywords image, defaults */
export declare const defaultsImage: {
    adaptiveGroup: string;
    preloadOffset: string;
};