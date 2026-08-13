// md5:bbd85491875d137c5011f47fe4ac8458 true
type MenuButtonPropsToken = {};
export type MenuButtonPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Button extends ButtonPropsBasic = ButtonPropsBasic, Menu extends MenuPropsBasic = MenuPropsBasic> = LabelProps & ButtonPropsInclude<Button> & FieldSelectLiteProps & MenuPropsInclude<Menu> & MenuButtonPropsTool<Icon>;
/** Type describing incoming properties. @keywords menu button props input */
export type MenuButtonProps = MenuButtonPropsBasic & MenuButtonPropsToken;
/** Default values for menu button properties. @keywords defaults menu button config */
export declare const defaultsMenuButton: {
    labelSeparator: string;
    hideLabelValue: boolean;
    hideValueIcon: boolean;
};