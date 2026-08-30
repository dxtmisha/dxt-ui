// md5:3cedfbf3d92c5d489b33b360a9172e20 true
import type { ConstrBind } from '@dxtmisha/functional';
export type ActionsPropsToken = {
    align?: 'none' | 'center' | 'left' | 'right' | 'block' | 'auto';
    flexible?: boolean;
    wrap?: boolean;
};
export type ActionsPropsBasic<Button extends ButtonPropsBasic = ButtonPropsBasic> = AreaPropsInclude & {
    /** Primary list of action configurations. @keywords actions, list, buttons */
    list?: ConstrBind<Button>[];
    /** Secondary list of action configurations. @keywords secondary, list, buttons */
    listSecondary?: ConstrBind<Button>[];
    /** Shared attributes for primary list buttons. @keywords button, attributes, props */
    buttonAttrs?: ConstrBind<Button>;
    /** Shared attributes for secondary list buttons. @keywords button, secondary, attributes */
    buttonSecondaryAttrs?: ConstrBind<Button>;
};
export type ActionsProps = ActionsPropsBasic & ActionsPropsToken;
/** Default values for actions properties. @keywords defaults, actions */
export declare const defaultsActions: {
    align: string;
    area: string;
};