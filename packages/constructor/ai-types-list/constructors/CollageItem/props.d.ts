// md5:314a94b60df344d8c67310e2aea9b217 true
type CollageItemPropsToken = {
    compact?: boolean;
    focus?: boolean;
    selected?: boolean;
    span?: 'standard' | 'banner' | 'huge' | 'large' | 'tall' | 'wide';
};
export type CollageItemPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Image extends ImagePropsBasic = ImagePropsBasic, CollageBar extends CollageBarPropsBasic = CollageBarPropsBasic> = ImagePropsInclude<Image> & CollageBarPropsInclude<CollageBar> & EventClickProps & {
    /** Image size. */
    size?: ImageProps['size'];
    /** Image coordinates for cropping or positioning. */
    coordinator?: number[] | any;
    /** Image X position. */
    x?: string | number;
    /** Image Y position. */
    y?: string | number;
    /** HTML tag for the body element. */
    tag?: string;
    /** Icon for the check indicator. */
    iconCheck?: IconValue<Icon>;
};
/** Incoming properties for collage item component. @keywords collage, item, props */
export type CollageItemProps = CollageItemPropsBasic & CollageItemPropsToken;
/** Default property values for collage item. @keywords collage, item, defaults */
export declare const defaultsCollageItem: {
    span: string;
    tag: string;
};