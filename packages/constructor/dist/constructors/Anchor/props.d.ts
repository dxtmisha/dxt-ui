import { TooltipProps, TooltipPropsInclude } from '../Tooltip';
import { LabelProps } from '../../types/labelTypes';
import { TextCopiedClipboardPropsInclude } from '../../types/textTypes';
import { AnchorScrollProps } from './basicTypes';
export type AnchorPropsToken = {};
export type AnchorPropsBasic<Tooltip extends TooltipProps = TooltipProps> = LabelProps & TooltipPropsInclude<Tooltip> & TextCopiedClipboardPropsInclude & AnchorScrollProps & {
    hide?: boolean;
    name?: string;
    isCopy?: boolean;
    iconLink?: string;
    iconTag?: string;
    iconContentCopy?: string;
    delayHide?: number;
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type AnchorProps = AnchorPropsBasic & AnchorPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsAnchor: {
    shift: number;
    delayHide: number;
};
