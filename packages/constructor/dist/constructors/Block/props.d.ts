import { IconPropsBasic } from '../Icon';
import { AreaProps } from '../../types/areaTypes';
import { DescriptionProps } from '../../types/descriptionTypes';
import { HeaderPropsBasic, HeaderPropsInclude } from '../Header';
export type BlockPropsToken = {};
export type BlockPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Header extends HeaderPropsBasic = HeaderPropsBasic> = HeaderPropsInclude<Icon, Header> & DescriptionProps & AreaProps & {
    /** Secondary header or headline text/ Вторичный заголовок или текст хедлайна */
    headline?: string;
    /** HTML tag for the container/ HTML-тег для контейнера */
    tag?: string;
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
    area: string;
    tag: string;
    tagHeader: string;
};
