// md5:e4a3b5fcd915e57e51b84ad6217d1324 true
import { type HeaderPropsBasic } from '@dxtmisha/constructor/Header';
export declare const propsValues: {
    tag: string[];
};
type PropsToken = {
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};
/** Header component properties @keywords header, props */
export type HeaderProps = HeaderPropsBasic<IconProps> & PropsToken;
/** Default header property values @keywords header, defaults */
export declare const defaults: object;