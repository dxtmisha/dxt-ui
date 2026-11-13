// md5:929e59ee5ee62720562d0315e0bc3eae true
import type { ConstrBind } from '@dxtmisha/functional';

export type ActionsPropsToken = {
    align?: 'none' | 'center' | 'left' | 'right' | 'block' | 'auto';
    flexible?: boolean;
    wrap?: boolean;
};

export type ActionsPropsBasic<Button extends ButtonPropsBasic = ButtonPropsBasic> = AreaPropsInclude & AriaLabelPropsInclude & AriaRolePropsInclude & TextActionsPropsInclude & {
    /** Primary list of action configurations. */
    list?: ConstrBind<Button>[];
    /** Secondary list of action configurations. */
    listSecondary?: ConstrBind<Button>[];
    /** Shared attributes for buttons in the primary list. */
    buttonAttrs?: ConstrBind<Button>;
    /** Shared attributes for buttons in the secondary list. */
    buttonSecondaryAttrs?: ConstrBind<Button>;
};

/** Actions component properties. @keywords actions, props */
export type ActionsProps = ActionsPropsBasic & ActionsPropsToken;

/** Default property values for actions. @keywords defaults, actions */
export declare const defaultsActions: {
    align: string;
    area: string;
};