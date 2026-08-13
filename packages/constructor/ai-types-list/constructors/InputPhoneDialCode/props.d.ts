// md5:e50c2302d6f4785be6f69fbe84414fe1
import { ListSelectedList } from '@dxtmisha/functional';
import { ButtonPropsBasic, ButtonPropsInclude } from '../Button';
import { MenuCountryPropsBasic, MenuCountryPropsInclude } from '../MenuCountry';
import { IconPropsBasic, IconValue } from '../Icon';
import { ModelPropsSelected } from '../../types/modelTypes';
type InputPhoneDialCodePropsToken = {};
export type InputPhoneDialCodePropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Button extends ButtonPropsBasic = ButtonPropsBasic, MenuCountry extends MenuCountryPropsBasic = MenuCountryPropsBasic> = ButtonPropsInclude<Button> & MenuCountryPropsInclude<MenuCountry> & ModelPropsSelected<ListSelectedList> & {
    /** Selected country code / Выбранный код страны */
    value?: string;
    /** Display type for the selected country label: phone code, name, or none / Тип отображения метки выбранной страны: телефонный код, название или без метки */
    labelType?: 'name' | 'code' | 'none';
    /** Icon for the down arrow/ Иконка для стрелки вниз */
    iconArrowDown?: IconValue<Icon>;
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type InputPhoneDialCodeProps = InputPhoneDialCodePropsBasic & InputPhoneDialCodePropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsInputPhoneDialCode: {};
export {};
