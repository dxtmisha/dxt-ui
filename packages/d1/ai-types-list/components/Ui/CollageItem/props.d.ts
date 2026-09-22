// md5:280142e07130b411e8cb611073fee1cb true
import { type CollageItemPropsBasic } from '@dxtmisha/constructor/CollageItem';

export declare const propsValues: {
    span: string[];
};

type PropsToken = {
    compact?: boolean;
    focus?: boolean;
    selected?: boolean;
    span?: 'standard' | 'banner' | 'huge' | 'large' | 'tall' | 'wide';
};

/** Properties for the collage item component. @keywords collage, item, props */
export type CollageItemProps = CollageItemPropsBasic<IconProps, ImageProps, CollageBarProps> & PropsToken;

/** Default values for collage item properties. @keywords collage, item, defaults */
export declare const defaults: object;