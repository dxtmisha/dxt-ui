// md5:21dbfff56c9c4c1c235d2c8f0a4d2683 true
import { ScrollbarPropsBasic } from '@dxtmisha/constructor/Scrollbar';
/** Default properties values for scrollbar component @keywords scrollbar, propsValues */
export declare const propsValues: {};
type PropsToken = {
    visible?: boolean;
    divider?: boolean;
    dividerTop?: boolean;
    dividerBottom?: boolean;
    dividerHide?: boolean;
    inverse?: boolean;
    standard?: boolean;
};
/** Scrollbar component properties combining basic props and tokens @keywords scrollbar, props */
export type ScrollbarProps = ScrollbarPropsBasic & PropsToken;
/** Default configuration object for scrollbar component @keywords scrollbar, defaults */
export declare const defaults: object;
export {};