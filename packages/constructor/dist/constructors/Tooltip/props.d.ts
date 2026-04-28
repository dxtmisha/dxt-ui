import { LabelProps } from '../../types/labelTypes';
import { DescriptionProps } from '../../types/descriptionTypes';
import { ArrowProps, ArrowPropsInclude } from '../Arrow';
export type TooltipPropsToken = {
    interactive?: boolean;
    embedded?: boolean;
};
export type TooltipPropsBasic<Arrow extends ArrowProps = ArrowProps> = LabelProps & DescriptionProps & ArrowPropsInclude<Arrow> & {
    /** Status/ Статусы */
    /** Whether the tooltip is open/ Открыт ли тултип */
    open?: boolean;
    /** Whether the tooltip is disabled/ Отключен ли тултип */
    disabled?: boolean;
    /** Style/ Стили */
    /** Whether the tooltip should always be in the DOM/ Должен ли тултип всегда находиться в DOM */
    inDom?: boolean;
    /** Whether to display the tooltip at the top by default/ Отображать ли тултип сверху по умолчанию */
    top?: boolean;
    /** Indent from the control element/ Отступ от управляющего элемента */
    indent?: number;
    /** Delay before showing the tooltip/ Задержка перед показом тултипа */
    delay?: number;
    /** Delay before hiding the tooltip/ Задержка перед скрытием тултипа */
    delayHide?: number;
    /**
     * The window will be displayed inside the current parent element/
     * Окно будет отображаться внутри текущего родительского элемента
     */
    embedded?: boolean;
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
    interactive: boolean;
    indent: number;
    delay: number;
    delayHide: number;
};
