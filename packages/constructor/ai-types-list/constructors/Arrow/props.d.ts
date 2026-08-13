// md5:840958a1a675b7a61e6137b88b3cf035 true
export type ArrowPropsToken = {
    position?: 'auto' | 'top' | 'bottom' | 'left' | 'right';
};
export type ArrowPropsBasic = ClientOnlyPropsInclude & {
    elementTarget?: HTMLElement | string;
};
export type ArrowProps = ArrowPropsBasic & ArrowPropsToken;
/** Default arrow configuration values @keywords defaults, arrow, configuration */
export declare const defaultsArrow: {
    position: string;
};