import { IconPropsBasic, IconPropsInclude } from '../Icon';
import { LabelProps } from '../../types/labelTypes';
import { DescriptionProps } from '../../types/descriptionTypes';
import { CaptionProps } from '../../types/captionTypes';
export type BlockPropsToken = {};
export type BlockPropsBasic<Icon extends IconPropsBasic = IconPropsBasic> = LabelProps & DescriptionProps & CaptionProps & IconPropsInclude<Icon> & {
    /** Secondary header or headline text/ Вторичный заголовок или текст хедлайна */
    headline?: string;
    /** HTML tag for the container/ HTML-тег для контейнера */
    tag?: string;
    /** HTML tag for the header section/ HTML-тег для секции шапки */
    tagHeader?: string;
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type BlockProps = BlockPropsBasic & BlockPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsBlock: {
    tag: string;
    tagHeader: string;
};
