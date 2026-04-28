import { ConstrBind, ListList } from '@dxtmisha/functional';
import { IconPropsBasic, IconValue } from '../Icon';
import { ChipPropsBasic, ChipPropsInclude } from '../Chip';
import { EnabledProps } from '../../types/enabledTypes';
export type SelectValuePropsToken = {};
export type SelectValuePropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Chip extends ChipPropsBasic = ChipPropsBasic> = EnabledProps & ChipPropsInclude<Chip> & {
    /** Value/ Значения */
    /** Placeholder text/ Текст плейсхолдера */
    placeholder?: string;
    /** Current selected value/ Текущее выбранное значение */
    value?: ListList;
    /** Style/ Стили */
    /** Whether multiple selection is enabled/ Включен ли множественный выбор */
    multiple?: boolean;
    /** Whether to show the icon/ Показывать ли иконку */
    iconShow?: boolean;
    /** Additional attributes for the icon/ Дополнительные атрибуты для иконки */
    iconAttrs?: ConstrBind<Icon>;
    /** Icon for the cancel/ Иконка для отмены */
    iconCancel?: IconValue<Icon>;
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type SelectValueProps = SelectValuePropsBasic & SelectValuePropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsSelectValue: {};
