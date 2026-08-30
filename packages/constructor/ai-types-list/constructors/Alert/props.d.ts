// md5:ab966ebcb49ac795c87ea4f846212ecc true
import type { ConstrBind } from '@dxtmisha/functional';
export type AlertPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, AlertLink extends AlertLinkPropsBasic = AlertLinkPropsBasic, Actions extends ActionsPropsBasic = ActionsPropsBasic, Button extends ButtonPropsBasic = ButtonPropsBasic> = LabelProps & DescriptionProps & IconTrailingPropsInclude<Icon> & AlertLinkPropsInclude<AlertLink> & ActionsPropsInclude<Actions> & AriaRolePropsInclude & AriaLivePropsInclude & TextClosePropsInclude & {
    /** Close button value or binding @keywords button, close */
    button?: string | number | ConstrBind<Button>;
    /** Close button icon name @keywords icon, close */
    iconClose?: string;
    /** Toggles close button visibility @keywords close, button */
    closeButton?: boolean;
};
/** Properties for Alert component @keywords alert, props */
export type AlertProps = AlertPropsBasic & {
    itemCenter?: boolean;
};
/** Default property values for Alert @keywords alert, defaults */
export declare const defaultsAlert: {
    itemCenter: boolean;
    role: string;
};