// md5:ec380ba279b80f86d93a394ecd5ee4f2 true
export type ArrowPropsToken = {
    position?: 'auto' | 'top' | 'bottom' | 'left' | 'right';
};
export type ArrowPropsBasic = {
    elementTarget?: HTMLElement | string;
};
export type ArrowProps = ArrowPropsBasic & ArrowPropsToken;
/** Default arrow property values. @keywords arrow, defaults */
export declare const defaultsArrow: {
    position: string;
};