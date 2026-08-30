// md5:236add76ad430cc9a3b19238489af04a true
import { type SnackbarPropsBasic } from '@dxtmisha/constructor/Snackbar';
/** Available property values for Snackbar. @keywords snackbar, values */
export declare const propsValues: {
    limit: string[];
    vertical: string[];
    horizontal: string[];
    origin: string[];
};
type PropsToken = {
    full?: boolean;
    all?: boolean;
    limit?: '1' | '2' | '4' | '6' | '8';
    vertical?: 'top' | 'bottom';
    horizontal?: 'right' | 'left' | 'block';
    origin?: 'topToBottom' | 'bottomToTop' | 'rightToLeft' | 'leftToRight';
};
/** Snackbar component properties. @keywords snackbar, props */
export type SnackbarProps = SnackbarPropsBasic & PropsToken;
/** Default properties for Snackbar. @keywords snackbar, defaults */
export declare const defaults: object;