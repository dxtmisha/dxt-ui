import { RoleType } from '../../types/roleTypes';
import { EventClickProps } from '../../types/eventClickTypes';
import { ImagePropsBasic, ImageValue } from '../Image';
import { SkeletonPropsInclude } from '../Skeleton';
import { AriaLabelPropsInclude } from '../../types/ariaTypes';
export type IconPropsToken = {
    turn?: boolean;
    disabled?: boolean;
    hide?: boolean;
    asPalette?: boolean;
    dir?: boolean;
    overlay?: boolean;
    dynamic?: boolean;
    start?: boolean;
    end?: boolean;
    high?: boolean;
    animationType?: string | 'type1' | 'type2';
    animationShow?: boolean;
};
export type IconPropsBasic<Image extends ImagePropsBasic = ImagePropsBasic> = SkeletonPropsInclude & AriaLabelPropsInclude & EventClickProps & {
    /** Status/ Статус */
    /** Активное состояние иконки/ Active state of the icon */
    active?: boolean;
    /** Icon/ Иконка */
    /** Value of the main icon/ Значение основной иконки */
    icon?: ImageValue<Image>;
    /** Value of the active icon/ Значение активной иконки */
    iconActive?: ImageValue<Image>;
    /** ARIA/ ARIA */
    /** ARIA role for the icon/ ARIA-роль для иконки */
    role?: RoleType;
    /** Tab index for keyboard navigation/ Индекс табуляции для навигации с клавиатуры */
    tabindex?: number | string;
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type IconProps = IconPropsBasic & IconPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsIcon: {
    animationType: string;
};
