// md5:05c806fa5f8e2c50083c204d65f6f254 true
/** Image design token properties. @keywords image, tokens, design */
export type ImagePropsToken = {
    turn?: boolean;
    disabled?: boolean;
    hide?: boolean;
    adaptive?: boolean;
    static?: boolean;
    size?: 'auto' | 'contain' | 'cover';
};
/** Image source, layout, and loading properties. @keywords image, source, layout, loading */
export type ImagePropsBasic = {
    /** Icon name, image/PDF URL, File, binary buffer, or null to clear ('image:photo.png' marks explicit image path). */
    value?: string | File | ImageUint8ArrayType | null;
    /** Image URL. */
    url?: string;
    /** Adaptive group identifier for responsive resolution sets. */
    adaptiveGroup?: string;
    /** Forces adaptivity regardless of conditions. */
    adaptiveAlways?: boolean;
    /** Image object width. */
    objectWidth?: string | number;
    /** Image object height. */
    objectHeight?: string | number;
    /** Image coordinates for cropping or positioning. */
    coordinator?: ImageCoordinatorItem;
    /** Horizontal position along the X-axis. */
    x?: string | number;
    /** Vertical position along the Y-axis. */
    y?: string | number;
    /** Render an `<img>` tag instead of a background image. */
    tagImg?: boolean;
    /** Image source set for different display resolutions. */
    srcset?: string | Record<string, string>;
    /** Picture sources for `<picture>` tag. @warning Object keys must be exclusively numbers or strings with units. */
    picture?: ImagePicture;
    /** Alternative text description for accessibility. */
    alt?: string;
    /** Enables lazy loading behavior. */
    lazy?: boolean;
    /** Viewport offset threshold for triggering preload. */
    preloadOffset?: string;
    /** Browser fetch priority hint ('low', 'high', 'auto'). */
    fetchPriority?: ImageAttrs['fetchPriority'];
    /** Browser image decoding hint ('sync', 'async', 'auto'). */
    decoding?: ImageAttrs['decoding'];
};
/** Composite image component properties combining basic and token settings. @keywords image, props, options */
export type ImageProps = ImagePropsBasic & ImagePropsToken;
/** Default configuration values for image component properties. @keywords image, defaults, config */
export declare const defaultsImage: {
    adaptiveGroup: string;
    preloadOffset: string;
};