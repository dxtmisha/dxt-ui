// md5:be3a83f8f424bfb11e86e05abe5d634d true
import { type ArrowPropsBasic } from '@dxtmisha/constructor/Arrow';
/** Available property values for arrow configuration. @keywords arrow, values, position, size */
export declare const propsValues: {
    position: string[];
    size: string[];
};
type PropsToken = {
    position?: 'auto' | 'top' | 'bottom' | 'left' | 'right';
    size?: 'sm' | 'md' | 'lg';
};
/** Properties for the Arrow component. @keywords arrow, props */
export type ArrowProps = ArrowPropsBasic & PropsToken;
/** Default property values for the Arrow component. @keywords arrow, defaults */
export declare const defaults: object;