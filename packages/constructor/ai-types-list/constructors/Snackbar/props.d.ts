// md5:76bb883972c0f1e299734e84ac8e14db true
type SnackbarPropsToken = {
    full?: boolean;
    all?: boolean;
    limit?: '1' | '2' | '4' | '6' | '8';
    vertical?: 'top' | 'bottom';
    horizontal?: 'right' | 'left' | 'block';
    origin?: 'topToBottom' | 'bottomToTop' | 'rightToLeft' | 'leftToRight';
};
export type SnackbarPropsBasic = TextNotificationsPropsInclude & {
    /** Delay before auto-closing the notification @keywords delay, timeout, duration */
    delay?: number;
};
/** Type describing incoming snackbar properties @keywords snackbar, props, configuration */
export type SnackbarProps = SnackbarPropsBasic & SnackbarPropsToken;
/** Default values for snackbar properties @keywords defaults, snackbar, configuration */
export declare const defaultsSnackbar: {
    delay: number;
};