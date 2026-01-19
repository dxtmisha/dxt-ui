import { RoleType } from '../../types/roleTypes';
import { ImagePropsBasic, ImageValue } from '../Image';
import { SkeletonPropsInclude } from '../Skeleton';
import { AriaLabelPropsInclude } from '../../types/ariaTypes.ts';
interface IconPropsToken {
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
    animationType?: 'type1' | 'type2';
    animationShow?: boolean;
}
export interface IconPropsBasic<Image extends ImagePropsBasic = ImagePropsBasic> extends SkeletonPropsInclude, AriaLabelPropsInclude {
    /** Активное состояние иконки/ Active state of the icon */
    active?: boolean;
    /** Value of the main icon/ Значение основной иконки */
    icon?: ImageValue<Image>;
    /** Value of the active icon/ Значение активной иконки */
    iconActive?: ImageValue<Image>;
    role?: RoleType;
}
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface IconProps extends IconPropsBasic, IconPropsToken {
}
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsIcon: {
    animationType: string;
};
export {};
