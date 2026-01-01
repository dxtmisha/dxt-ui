import { LabelProps } from '../../types/labelTypes';
import { DescriptionProps } from '../../types/descriptionTypes';
interface TooltipPropsToken {
    arrow?: boolean;
}
export interface TooltipPropsBasic extends LabelProps, DescriptionProps {
    open?: boolean;
    disabled?: boolean;
    top?: boolean;
    indent?: number;
    delay?: number;
    delayHide?: number;
}
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface TooltipProps extends TooltipPropsBasic, TooltipPropsToken {
}
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsTooltip: {
    indent: number;
    delay: number;
    delayHide: number;
};
export {};
