import { IconPropsBasic, IconValue } from '../Icon';
import { TooltipProps, TooltipPropsInclude } from '../Tooltip';
import { LabelProps } from '../../types/labelTypes';
import { TextCopiedClipboardPropsInclude } from '../../types/textTypes';
import { AnchorScrollProps } from './basicTypes';
export type AnchorPropsToken = {};
export type AnchorPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Tooltip extends TooltipProps = TooltipProps> = LabelProps & TooltipPropsInclude<Tooltip> & TextCopiedClipboardPropsInclude & AnchorScrollProps & {
    hide?: boolean;
    name?: string;
    isCopy?: boolean;
    iconLink?: IconValue<Icon>;
    iconTag?: IconValue<Icon>;
    iconContentCopy?: IconValue<Icon>;
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
