// md5:6a2e350de8d967d8198ee3e152ba9617 true
/** Arrow position and direction tokens. @keywords arrow, position, tokens */
export type ArrowPropsToken = {
    position?: 'auto' | 'top' | 'bottom' | 'left' | 'right';
};
/** Basic properties for the arrow component. @keywords arrow, props, basic */
export type ArrowPropsBasic = ClientOnlyPropsInclude & {
    /** Target HTML element or selector the arrow points to. */
    elementTarget?: HTMLElement | string;
};
/** Arrow component properties. @keywords arrow, props */
export type ArrowProps = ArrowPropsBasic & ArrowPropsToken;
/** Default properties for the arrow component. @keywords arrow, defaults */
export declare const defaultsArrow: {
    position: string;
};