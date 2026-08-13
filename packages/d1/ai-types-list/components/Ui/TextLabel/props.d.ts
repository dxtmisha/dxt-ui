// md5:36187d7d322370ee8872037e172f766d true
import { TextLabelPropsBasic } from '@dxtmisha/constructor/TextLabel';
export declare const propsValues: {
    size: string[];
};
/** @keywords PropsToken, size, type */
type PropsToken = {
    size?: 'xs' | 'sm' | 'md' | 'lg';
};
/** Type describing incoming properties @keywords TextLabelProps, props */
export type TextLabelProps = TextLabelPropsBasic & PropsToken;
/** Default value for property @keywords defaults, object */
export declare const defaults: object;