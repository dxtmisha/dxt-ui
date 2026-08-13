// md5:d50dc0646feca7b0c0f25e4287af93b3 true
import { ImagePropsBasic } from '@dxtmisha/constructor/Image';
/** Default values for image properties. @keywords defaults, image, config */
export declare const propsValues: {
    size: string[];
};
/** Internal token properties for image sizing and states. @keywords token, props, image */
type PropsToken = {
    turn?: boolean;
    disabled?: boolean;
    hide?: boolean;
    adaptive?: boolean;
    size?: 'auto' | 'contain' | 'cover';
};
/** Comprehensive image properties combining basic props and tokens. @keywords image, props, configuration */
export type ImageProps = ImagePropsBasic & PropsToken;
/** Default object configuration for image properties. @keywords defaults, object, image */
export declare const defaults: object;