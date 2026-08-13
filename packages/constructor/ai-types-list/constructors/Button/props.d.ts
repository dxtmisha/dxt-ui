// md5:a38c6089bbdc8416d80651ac9486da66 true
import { ConstrHrefProps } from '@dxtmisha/functional';
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
    tag?: 'button' | 'a' | 'span' | string;
    type?: 'button' | 'submit' | 'reset' | string;
};
/** Button properties configuration. @keywords button properties props config */
export type ButtonProps = ButtonPropsBasic & ButtonPropsToken;
/** Default button property values. @keywords button defaults constant */
export declare const defaultsButton: {};