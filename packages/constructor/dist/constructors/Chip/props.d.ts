import { IconPropsBasic } from '../Icon';
import { ProgressPropsBasic } from '../Progress';
import { ButtonPropsBasic } from '../Button';
interface ChipPropsToken {
    focus?: boolean;
    disabled?: boolean;
    selected?: boolean;
    readonly?: boolean;
    adaptive?: 'iconAlways' | 'block' | 'auto';
    container?: boolean;
    inverse?: boolean;
    grid?: boolean;
    textAlign?: 'left' | 'center' | 'right';
}
export interface ChipPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> extends ButtonPropsBasic<Icon, Progress> {
}
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface ChipProps extends ChipPropsBasic, ChipPropsToken {
}
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsChip: {
    tag: string;
};
export {};
