import { LabelProps } from '../../types/labelTypes';
import { DescriptionProps } from '../../types/descriptionTypes';
import { ArrowProps, ArrowPropsInclude } from '../Arrow';
interface TooltipPropsToken {
}
export interface TooltipPropsBasic<Arrow extends ArrowProps = ArrowProps> extends LabelProps, DescriptionProps, ArrowPropsInclude<Arrow> {
    open?: boolean;
    disabled?: boolean;
    inDom?: boolean;
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
