// md5:19c0ecc9a142c004c5776b7ac20befb9 true
import type { ConstrBind } from '@dxtmisha/functional';
export type BarsPropsToken = {};
export type BarsPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Button extends ButtonPropsBasic = ButtonPropsBasic> = LabelProps & DescriptionProps & SkeletonPropsInclude & TextClosePropsInclude & {
    /** Whether action mode is active. @keywords action, active */
    'action'?: boolean;
    /** Properties for back button. @keywords back, button */
    'backButton'?: ConstrBind<Button>;
    /** Whether to hide back button. @keywords back, hide */
    'backHide'?: boolean;
    /** Whether to hide back button specifically in action mode. @keywords back, action, hide */
    'backActionHide'?: boolean;
    /** List of additional buttons. @keywords bars, buttons */
    'bars'?: ConstrBind<Button>[];
    /** Label override for action mode. @keywords action, label */
    'actionLabel'?: LabelProps['label'];
    /** Description override for action mode. @keywords action, description */
    'actionDescription'?: DescriptionProps['description'];
    /** List of buttons for action mode. @keywords action, bars */
    'actionBars'?: ConstrBind<Button>[];
    /** Attributes for button components. @keywords button, attrs */
    'buttonAttrs'?: ConstrBind<Button>;
    /** Icon for back button. @keywords icon, back */
    'iconBack'?: IconValue<Icon>;
    /** Icon for close button. @keywords icon, close */
    'iconClose'?: IconValue<Icon>;
    /** Whether action mode model is active. @keywords model, action */
    'modelAction'?: boolean;
    /** Callback triggered when action status updates. @keywords event, action */
    'onUpdate:action'?: (value: boolean) => void;
    /** Callback triggered when model action status updates. @keywords event, model */
    'onUpdate:modelAction'?: (value: boolean) => void;
};
export type BarsProps = BarsPropsBasic & BarsPropsToken;
/** Default properties for the Bars component. @keywords bars, defaults */
export declare const defaultsBars: {};