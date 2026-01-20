import { LabelProps } from '../../types/labelTypes';
import { DescriptionProps } from '../../types/descriptionTypes';
import { ArrowProps, ArrowPropsInclude } from '../Arrow';
export type TooltipPropsToken = {};
export type TooltipPropsBasic<Arrow extends ArrowProps = ArrowProps> = LabelProps & DescriptionProps & ArrowPropsInclude<Arrow> & {
    open?: boolean;
    disabled?: boolean;
    inDom?: boolean;
    top?: boolean;
    indent?: number;
    delay?: number;
    delayHide?: number;
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type TooltipProps = TooltipPropsBasic & TooltipPropsToken;
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
