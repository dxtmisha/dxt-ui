// md5:143fcd180845562db8acec8597cf7009 true
import { ConstrBind } from '@dxtmisha/functional';

/** Arrow direction options @keywords ArrowDirection, direction, top, bottom, left, right, hide */
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

/** Component map for the Arrow component @keywords ArrowComponentInclude, map, component */
export type ArrowComponentInclude = {
    arrow?: object;
};

/** Props to include and configure the Arrow component @keywords ArrowPropsInclude, props, configuration */
export type ArrowPropsInclude<Arrow extends ArrowProps = ArrowProps> = {
    arrowShow?: boolean;
    arrowPosition?: ArrowProps['position'];
    arrowAttrs?: ConstrBind<Arrow>;
};