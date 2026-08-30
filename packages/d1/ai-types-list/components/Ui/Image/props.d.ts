// md5:e535e16c897ab25f6843a6ef86592b33 true
import { type ImagePropsBasic } from '@dxtmisha/constructor/Image';
export declare const propsValues: {
    size: string[];
};
type PropsToken = {
    turn?: boolean;
    disabled?: boolean;
    hide?: boolean;
    adaptive?: boolean;
    static?: boolean;
    size?: 'auto' | 'contain' | 'cover';
};
/** Image component properties. @keywords image, props */
export type ImageProps = ImagePropsBasic & PropsToken;
/** Default property values. @keywords image, defaults */
export declare const defaults: object;