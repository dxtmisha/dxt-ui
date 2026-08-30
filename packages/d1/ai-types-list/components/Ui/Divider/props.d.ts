// md5:b06da9127686fe8922426eab32dda7e6 true
import { type DividerPropsBasic } from '@dxtmisha/constructor/Divider';
export declare const propsValues: {
    size: string[];
    margin: string[];
};
type PropsToken = {
    size?: 'sm' | 'md' | 'lg';
    margin?: 'sm' | 'md' | 'lg' | 'none';
};
/** Divider component properties. @keywords divider, props */
export type DividerProps = DividerPropsBasic & PropsToken;
/** Default property values for the divider component. @keywords divider, defaults */
export declare const defaults: object;