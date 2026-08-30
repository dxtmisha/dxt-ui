// md5:2003d8b9010f59120c2f0294bf1e6767 true
import type { ConstrBind } from '@dxtmisha/functional';

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

export type ArrowCenter = {
    x: number;
    y: number;
};

export type ArrowComponentInclude = {
    arrow?: object;
};

/** Props to include and configure the Arrow component. @keywords arrow, props, include */
export type ArrowPropsInclude<Arrow extends ArrowProps = ArrowProps> = {
    arrowShow?: boolean;
    arrowPosition?: ArrowProps['position'];
    arrowAttrs?: ConstrBind<Arrow>;
};