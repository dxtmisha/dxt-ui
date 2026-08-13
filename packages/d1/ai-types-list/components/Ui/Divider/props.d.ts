// md5:019cce9e59554cefd206186d8b616927 true
import { DividerPropsBasic } from '@dxtmisha/constructor/Divider';
/** Component property value options @keywords propsValues size margin */
export declare const propsValues: {
    size: string[];
    margin: string[];
};
type PropsToken = {
    size?: 'sm' | 'md' | 'lg';
    margin?: 'sm' | 'md' | 'lg' | 'none';
};
/** Divider component properties combining basic and token props @keywords DividerProps properties */
export type DividerProps = DividerPropsBasic & PropsToken;
/** Default property values for the divider component @keywords defaults divider */
export declare const defaults: object;