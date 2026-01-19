import { ConstrBind, ListList } from '@dxtmisha/functional';
import { IconPropsBasic, IconValue } from '../Icon';
import { ChipPropsBasic, ChipPropsInclude } from '../Chip';
import { EnabledProps } from '../../types/enabledTypes';
interface SelectValuePropsToken {
}
export interface SelectValuePropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Chip extends ChipPropsBasic = ChipPropsBasic> extends EnabledProps, ChipPropsInclude<Chip> {
    placeholder?: string;
    value?: ListList;
    multiple?: boolean;
    iconShow?: boolean;
    iconAttrs?: ConstrBind<Icon>;
    iconCancel?: IconValue<Icon>;
}
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface SelectValueProps extends SelectValuePropsBasic, SelectValuePropsToken {
}
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsSelectValue: {};
export {};
