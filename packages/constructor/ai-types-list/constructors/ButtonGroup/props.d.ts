// md5:3eab9e08d1952c1e31bdc14e48ca71e2 true
import type { ConstrBind } from '@dxtmisha/functional';

type ButtonGroupPropsToken = {
    orientation?: 'horizontal' | 'vertical';
    wrap?: boolean;
};

export type ButtonGroupPropsBasic<Button extends ButtonPropsBasic = ButtonPropsBasic> = AreaPropsInclude & {
    /** Primary list of button configurations. */
    list?: ConstrBind<Button>[];
    /** Shared attributes applied to all buttons. */
    buttonAttrs?: ConstrBind<Button>;
};

/** Properties for the ButtonGroup component. @keywords button group, props */
export type ButtonGroupProps = ButtonGroupPropsBasic & ButtonGroupPropsToken;

/** Default properties for the ButtonGroup component. @keywords button group, defaults */
export declare const defaultsButtonGroup: {
    orientation: string;
    area: string;
};