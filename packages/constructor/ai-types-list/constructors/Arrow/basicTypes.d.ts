// md5:4aee03c288eef2ba44a1dc3273025895 true
import type { ConstrBind } from '@dxtmisha/functional';
/** Arrow direction and visibility states @keywords arrow, direction, orientation */
export declare enum ArrowDirection {
    TOP = "top",
    BOTTOM = "bottom",
    LEFT = "left",
    RIGHT = "right",
    HIDE = "hide"
}
export type ArrowBorder = {
    top: number;
    bottom: number;
    left: number;
    right: number;
};
export type ArrowComponentInclude = {
    arrow?: object;
};
/** Props for including and configuring the Arrow component @keywords arrow, props, include, configuration */
export type ArrowPropsInclude<Arrow extends ArrowProps = ArrowProps> = {
    arrowShow?: boolean;
    arrowPosition?: ArrowProps['position'];
    arrowAttrs?: ConstrBind<Arrow>;
};