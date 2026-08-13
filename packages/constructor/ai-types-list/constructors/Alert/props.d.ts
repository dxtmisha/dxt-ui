// md5:f461de0ec73eba268ff1a3f3695db6a9 true
type AlertPropsToken = {
    itemCenter?: boolean;
};
export type AlertPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, AlertLink extends AlertLinkPropsBasic = AlertLinkPropsBasic, Actions extends ActionsPropsBasic = ActionsPropsBasic, Button extends ButtonPropsBasic = ButtonPropsBasic> = LabelProps & DescriptionProps & IconTrailingPropsInclude<Icon> & AlertLinkPropsInclude<AlertLink> & ActionsPropsInclude<Actions> & AriaRolePropsInclude & AriaLivePropsInclude & TextClosePropsInclude & {
    /** Close button value @keywords button, value */
    button?: string | number | ConstrBind<Button>;
    /** Close button icon name @keywords icon, close */
    iconClose?: string;
    /** Shows the close button @keywords close, button, visible */
    closeButton?: boolean;
};
/** Type describing incoming properties. @keywords alert, props, properties */
export type AlertProps = AlertPropsBasic & AlertPropsToken;
/** Default value for property. @keywords defaults, alert */
export declare const defaultsAlert: {
    itemCenter: boolean;
    role: string;
};