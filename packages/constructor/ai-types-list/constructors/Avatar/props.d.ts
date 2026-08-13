// md5:be37174cf03cf79df2924513d8db6022
import { LabelProps } from '../../types/labelTypes';
import { AriaLabelPropsInclude } from '../../types/ariaTypes';
import { EventClickProps } from '../../types/eventClickTypes';
import { ImagePropsBasic, ImagePropsInclude } from '../Image';
import { BadgePropsBasic, BadgePropsInclude } from '../Badge';
import { SkeletonPropsInclude } from '../Skeleton';
/**
 * Type describing tokens for properties.
 *
 * Тип, описывающий токены свойств.
 */
type AvatarPropsToken = {
    focus?: boolean;
    disabled?: boolean;
    readonly?: boolean;
};
/**
 * Interface describing basic properties for the Avatar component.
 *
 * Интерфейс, описывающий основные свойства компонента аватара.
 */
export type AvatarPropsBasic<Image extends ImagePropsBasic = ImagePropsBasic, Badge extends BadgePropsBasic = BadgePropsBasic> = LabelProps & ImagePropsInclude<Image> & BadgePropsInclude<Badge> & SkeletonPropsInclude & AriaLabelPropsInclude & EventClickProps & {
    /** Whether to shorten the text / Нужно ли сокращать текст */
    reduction?: boolean;
    /** Tabindex property / Свойство tabindex */
    tabindex?: string | number;
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type AvatarProps = AvatarPropsBasic & AvatarPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsAvatar: {
    reduction: boolean;
    tabindex: string;
};
export {};
