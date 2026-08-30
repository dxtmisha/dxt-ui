// md5:a7bef9bc1037e57464590fdcede9de31 true
import type { ConstrHrefProps } from '@dxtmisha/functional';

export type ButtonPropsToken = {
    focus?: boolean;
    disabled?: boolean;
    selected?: boolean;
    readonly?: boolean;
    adaptive?: 'iconAlways' | 'block' | 'auto';
    container?: boolean;
    inverse?: boolean;
    grid?: boolean;
    textAlign?: 'left' | 'center' | 'right';
};
export type ButtonPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = LabelProps & EnabledProps & IconTrailingPropsInclude<Icon> & ProgressPropsInclude<Progress> & SkeletonPropsInclude & EventClickProps & ConstrHrefProps & AriaLabelPropsInclude & {
    /** HTML tag for the button container. @keywords button, tag */
    tag?: 'button' | 'a' | 'span' | string;
    /** HTML type for the button element. @keywords button, type */
    type?: 'button' | 'submit' | 'reset' | string;
};
/** Properties for the Button component. @keywords button, props */
export type ButtonProps = ButtonPropsBasic & ButtonPropsToken;
/** Default property values for Button component. @keywords button, defaults */
export declare const defaultsButton: {};