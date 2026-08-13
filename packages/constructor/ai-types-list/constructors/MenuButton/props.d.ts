// md5:bbd85491875d137c5011f47fe4ac8458
import { LabelProps } from '../../types/labelTypes';
import { ButtonPropsBasic, ButtonPropsInclude } from '../Button';
import { IconPropsBasic } from '../Icon';
import { MenuPropsBasic, MenuPropsInclude } from '../Menu';
import { MenuButtonPropsTool } from './basicTypes';
import { FieldSelectLiteProps } from '../../types/fieldTypes';
type MenuButtonPropsToken = {};
export type MenuButtonPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Button extends ButtonPropsBasic = ButtonPropsBasic, Menu extends MenuPropsBasic = MenuPropsBasic> = LabelProps & ButtonPropsInclude<Button> & FieldSelectLiteProps & MenuPropsInclude<Menu> & MenuButtonPropsTool<Icon>;
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type MenuButtonProps = MenuButtonPropsBasic & MenuButtonPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsMenuButton: {
    labelSeparator: string;
    hideLabelValue: boolean;
    hideValueIcon: boolean;
};
export {};
