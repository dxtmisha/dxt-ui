// md5:77d5f79f4f06817d700bb7a7792addc0 true
type MenuButtonPropsToken = {};
export type MenuButtonPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Button extends ButtonPropsBasic = ButtonPropsBasic, Menu extends MenuPropsBasic = MenuPropsBasic> = LabelProps & ButtonPropsInclude<Button> & FieldSelectLiteProps & MenuPropsInclude<Menu> & MenuButtonPropsTool<Icon>;
/** Menu button component properties contract. @keywords menu button, props */
export type MenuButtonProps = MenuButtonPropsBasic & MenuButtonPropsToken;
/** Default property values for the menu button component. @keywords menu button, defaults */
export declare const defaultsMenuButton: {
    labelSeparator: string;
    hideLabelValue: boolean;
    hideValueIcon: boolean;
};