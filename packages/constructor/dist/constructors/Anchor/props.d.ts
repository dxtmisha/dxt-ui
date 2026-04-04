import { IconPropsBasic, IconValue } from '../Icon';
import { TooltipProps, TooltipPropsInclude } from '../Tooltip';
import { LabelProps } from '../../types/labelTypes';
import { TextCopiedClipboardPropsInclude } from '../../types/textTypes';
import { AnchorScrollProps } from './basicTypes';
export type AnchorPropsToken = {};
export type AnchorPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Tooltip extends TooltipProps = TooltipProps> = LabelProps & TooltipPropsInclude<Tooltip> & TextCopiedClipboardPropsInclude & AnchorScrollProps & {
    /** Status/ Статус */
    /** Whether to hide the anchor/ Скрывать ли якорь */
    hide?: boolean;
    /** Value/ Значение */
    /** Unique name of the anchor for navigation/ Уникальное имя якоря для навигации */
    name?: string;
    /** Style/ Стили */
    /** Whether copying is enabled/ Включено ли копирование */
    isCopy?: boolean;
    /** Icon for the link/ Иконка для ссылки */
    iconLink?: IconValue<Icon>;
    /** Icon for the tag/ Иконка для тега */
    iconTag?: IconValue<Icon>;
    /** Icon for the copy action/ Иконка для действия копирования */
    iconContentCopy?: IconValue<Icon>;
    /** Delay before hiding/ Задержка перед скрытием */
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
