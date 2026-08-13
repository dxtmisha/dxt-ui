// md5:391926b9d2c767757a548193b22c3014
import { LabelProps } from '../../types/labelTypes';
import { ChipPropsBasic, ChipPropsInclude } from '../Chip';
import { IconPropsBasic } from '../Icon';
import { MenuPropsBasic, MenuPropsInclude } from '../Menu';
import { FieldSelectLiteProps } from '../../types/fieldTypes';
import { MenuButtonPropsTool } from '../MenuButton';
type MenuChipPropsToken = {};
export type MenuChipPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Chip extends ChipPropsBasic = ChipPropsBasic, Menu extends MenuPropsBasic = MenuPropsBasic> = LabelProps & ChipPropsInclude<Chip> & FieldSelectLiteProps & MenuPropsInclude<Menu> & MenuButtonPropsTool<Icon>;
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type MenuChipProps = MenuChipPropsBasic & MenuChipPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsMenuChip: {
    labelSeparator: string;
    hideLabelValue: boolean;
    hideValueIcon: boolean;
};
export {};
