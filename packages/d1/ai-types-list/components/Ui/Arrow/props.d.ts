// md5:93be505db4a4f9941dca776c33a22bfb true
import { ArrowPropsBasic } from '@dxtmisha/constructor/Arrow';
/** Default values for arrow component properties @keywords defaults, props */
export declare const propsValues: {
    position: string[];
    size: string[];
};
type PropsToken = {
    position?: 'auto' | 'top' | 'bottom' | 'left' | 'right';
    size?: 'sm' | 'md' | 'lg';
};
/** Arrow component properties combining basic and token props @keywords arrow, props */
export type ArrowProps = ArrowPropsBasic & PropsToken;
/** Default configuration object for arrow properties @keywords defaults, object */
export declare const defaults: object;