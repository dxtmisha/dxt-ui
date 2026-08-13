// md5:332282993401d1dfba432764441a5d8b true
import { ConstrBind } from '@dxtmisha/functional';
export type ActionsPropsToken = {
    align?: 'none' | 'center' | 'left' | 'right' | 'block' | 'auto';
    flexible?: boolean;
    wrap?: boolean;
};
export type ActionsPropsBasic<Button extends ButtonPropsBasic = ButtonPropsBasic> = AreaPropsInclude & {
    /** Primary list of action configurations @keywords list, actions */
    list?: ConstrBind<Button>[];
    /** Secondary list of action configurations @keywords secondary, list, actions */
    listSecondary?: ConstrBind<Button>[];
    /** Shared attributes for buttons in the primary list @keywords button, attrs */
    buttonAttrs?: ConstrBind<Button>;
    /** Shared attributes for buttons in the secondary list @keywords button, secondary, attrs */
    buttonSecondaryAttrs?: ConstrBind<Button>;
};
/** Type describing incoming properties. @keywords actions, props */
export type ActionsProps = ActionsPropsBasic & ActionsPropsToken;
/** Default value for property. @keywords defaults, actions */
export declare const defaultsActions: {
    align: string;
    area: string;
};