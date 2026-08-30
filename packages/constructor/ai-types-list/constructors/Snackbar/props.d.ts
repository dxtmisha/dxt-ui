// md5:5363d73cbd7faba99d79862fb6cc7e53 true
type SnackbarPropsToken = {
    full?: boolean;
    all?: boolean;
    limit?: '1' | '2' | '4' | '6' | '8';
    vertical?: 'top' | 'bottom';
    horizontal?: 'right' | 'left' | 'block';
    origin?: 'topToBottom' | 'bottomToTop' | 'rightToLeft' | 'leftToRight';
};
export type SnackbarPropsBasic = TextNotificationsPropsInclude & {
    /** Delay before auto-closing the notification @keywords delay timeout duration */
    delay?: number;
};
/** Properties for the Snackbar component @keywords snackbar props */
export type SnackbarProps = SnackbarPropsBasic & SnackbarPropsToken;
/** Default property values for Snackbar @keywords snackbar defaults */
export declare const defaultsSnackbar: {
    delay: number;
};