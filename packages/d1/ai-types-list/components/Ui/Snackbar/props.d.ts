// md5:fbadbe282bcbd743c934406131f4e9d2 true
import { SnackbarPropsBasic } from '@dxtmisha/constructor/Snackbar';
/** Snackbar property value options @keywords propsValues, config, limits */
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
/** Snackbar incoming properties @keywords SnackbarProps, props, configuration */
export type SnackbarProps = SnackbarPropsBasic & PropsToken;
/** Default values for snackbar properties @keywords defaults, config, init */
export declare const defaults: object;