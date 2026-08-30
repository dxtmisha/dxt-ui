// md5:6e6e254b0a8a36e47d4aa8ccbbe3f328 true
import type { ListSelectedList } from '@dxtmisha/functional';
type InputPhoneDialCodePropsToken = {};
export type InputPhoneDialCodePropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Button extends ButtonPropsBasic = ButtonPropsBasic, MenuCountry extends MenuCountryPropsBasic = MenuCountryPropsBasic> = ButtonPropsInclude<Button> & MenuCountryPropsInclude<MenuCountry> & ModelPropsSelected<ListSelectedList> & {
    /** Selected country code. @keywords country, code, phone, dial */
    value?: string;
    /** Display type for the selected country label. @keywords label, country, format */
    labelType?: 'name' | 'code' | 'none';
    /** Down arrow icon. @keywords icon, arrow, dropdown */
    iconArrowDown?: IconValue<Icon>;
};
/** Incoming properties for InputPhoneDialCode component. @keywords props, phone, dial-code */
export type InputPhoneDialCodeProps = InputPhoneDialCodePropsBasic & InputPhoneDialCodePropsToken;
/** Default properties for InputPhoneDialCode component. @keywords defaults, phone, dial-code */
export declare const defaultsInputPhoneDialCode: {};