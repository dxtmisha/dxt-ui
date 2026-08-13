// md5:bf4de0bac791058c479f3b4d80310d8e true
export type ImagePropsToken = {
    turn?: boolean;
    disabled?: boolean;
    hide?: boolean;
    adaptive?: boolean;
    size?: 'auto' | 'contain' | 'cover';
};
export type ImagePropsBasic = {
    /** Accepts icon name, image URL, File object or PDF link @keywords image value source file pdf */
    value?: string | any;
    /** Image URL @keywords image url address */
    url?: string;
    /** Adaptive group for different resolutions @keywords image adaptive group */
    adaptiveGroup?: string;
    /** Always use adaptivity @keywords image adaptive always */
    adaptiveAlways?: boolean;
    /** Image object width @keywords image width size */
    objectWidth?: string | number;
    /** Image object height @keywords image height size */
    objectHeight?: string | number;
    /** Image coordinates for cropping or positioning @keywords image coordinator crop position */
    coordinator?: number[] | any;
    /** X position @keywords image position x */
    x?: string | number;
    /** Y position @keywords image position y */
    y?: string | number;
    /** Use <img> tag instead of background image @keywords image tag img */
    tagImg?: boolean;
    /** Image source set for different resolutions @keywords image srcset sources */
    srcset?: string | Record<string, string>;
    /** Picture sources for different resolutions using <picture> tag @keywords image picture sources */
    picture?: ImagePicture;
    /** Alt text @keywords image alt alternative text */
    alt?: string;
    /** Lazy loading @keywords image lazy load */
    lazy?: boolean;
    /** Preload offset @keywords image preload offset */
    preloadOffset?: string;
    /** Image fetch priority @keywords image fetch priority */
    fetchPriority?: HTMLImageElement['fetchPriority'];
};
export type ImageProps = ImagePropsBasic & ImagePropsToken;
/** Default value for image properties @keywords image defaults configuration */
export declare const defaultsImage: {
    adaptiveGroup: string;
    preloadOffset: string;
};