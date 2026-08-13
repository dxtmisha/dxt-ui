// md5:99b7e0180f08d8e3375c057095ef6bc8 true
import { ConstrBind } from '@dxtmisha/functional';
type ButtonGroupPropsToken = {
    orientation?: 'horizontal' | 'vertical';
    wrap?: boolean;
};
export type ButtonGroupPropsBasic<Button extends ButtonPropsBasic = ButtonPropsBasic> = AreaPropsInclude & {
    /** Primary list of button configurations @keywords button, list, config */
    list?: ConstrBind<Button>[];
    /** Shared attributes for buttons @keywords button, attrs, shared */
    buttonAttrs?: ConstrBind<Button>;
};
export type ButtonGroupProps = ButtonGroupPropsBasic & ButtonGroupPropsToken;
/** Default value for button group properties @keywords defaults, buttonGroup */
export declare const defaultsButtonGroup: {
    orientation: string;
    area: string;
};