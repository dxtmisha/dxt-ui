// md5:e50c2302d6f4785be6f69fbe84414fe1 true
import { ListSelectedList } from '@dxtmisha/functional';
type InputPhoneDialCodePropsToken = {};
export type InputPhoneDialCodePropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Button extends ButtonPropsBasic = ButtonPropsBasic, MenuCountry extends MenuCountryPropsBasic = MenuCountryPropsBasic> = ButtonPropsInclude<Button> & MenuCountryPropsInclude<MenuCountry> & ModelPropsSelected<ListSelectedList> & {
    /** Selected country code @keywords value, code, country */
    value?: string;
    /** Display type for selected country label @keywords label, type, display */
    labelType?: 'name' | 'code' | 'none';
    /** Icon for the down arrow @keywords icon, arrow, down */
    iconArrowDown?: IconValue<Icon>;
};
export type InputPhoneDialCodeProps = InputPhoneDialCodePropsBasic & InputPhoneDialCodePropsToken;
/** Default properties for input phone dial code @keywords defaults, config */
export declare const defaultsInputPhoneDialCode: {};
export {};