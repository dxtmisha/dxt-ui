// md5:6ff3d763e9bc206b32bbb274232d4150 true
import { ConstrBind } from '@dxtmisha/functional';
export type BarsPropsToken = {};
export type BarsPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Button extends ButtonPropsBasic = ButtonPropsBasic> = LabelProps & DescriptionProps & SkeletonPropsInclude & TextClosePropsInclude & {
    /** Whether the action mode is active @keywords action active mode */
    'action'?: boolean;
    /** Properties for the back button @keywords back button props */
    'backButton'?: ConstrBind<Button>;
    /** Whether to hide the back button @keywords back hide button */
    'backHide'?: boolean;
    /** Whether to hide the back button specifically in action mode @keywords back action hide */
    'backActionHide'?: boolean;
    /** List of additional buttons @keywords bars buttons list */
    'bars'?: ConstrBind<Button>[];
    /** Label override for action mode @keywords action label */
    'actionLabel'?: LabelProps['label'];
    /** Description override for action mode @keywords action description */
    'actionDescription'?: DescriptionProps['description'];
    /** List of buttons for action mode @keywords action bars buttons */
    'actionBars'?: ConstrBind<Button>[];
    /** Attributes for the button component @keywords button attrs */
    'buttonAttrs'?: ConstrBind<Button>;
    /** Icon for the back button @keywords icon back */
    'iconBack'?: IconValue<Icon>;
    /** Icon for the close button @keywords icon close */
    'iconClose'?: IconValue<Icon>;
    /** Whether the action mode model is active @keywords model action */
    'modelAction'?: boolean;
    /** Event for updating the action mode status @keywords update action event */
    'onUpdate:action'?: (value: boolean) => void;
    /** Event for updating the action mode model status @keywords update model action event */
    'onUpdate:modelAction'?: (value: boolean) => void;
};
export type BarsProps = BarsPropsBasic & BarsPropsToken;
/** Default value for property @keywords defaults bars */
export declare const defaultsBars: {};