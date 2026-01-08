import { TooltipProps, TooltipPropsInclude } from '../Tooltip';
import { LabelProps } from '../../types/labelTypes';
import { TextCopiedClipboardPropsInclude } from '../../types/textTypes';
import { AnchorScrollProps } from './basicTypes';
interface AnchorPropsToken {
}
export interface AnchorPropsBasic<Tooltip extends TooltipProps = TooltipProps> extends LabelProps, TooltipPropsInclude<Tooltip>, TextCopiedClipboardPropsInclude, AnchorScrollProps {
    hide?: boolean;
    name?: string;
    isCopy?: boolean;
    iconLink?: string;
    iconTag?: string;
    iconContentCopy?: string;
    delayHide?: number;
}
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface AnchorProps extends AnchorPropsBasic, AnchorPropsToken {
}
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsAnchor: {
    shift: number;
    delayHide: number;
};
export {};
