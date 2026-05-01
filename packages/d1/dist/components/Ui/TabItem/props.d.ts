import { TabItemPropsBasic } from '@dxtmisha/constructor/TabItem';
import { IconProps } from '../Icon';
import { BadgeProps } from '../Badge';
export declare const propsValues: {
    adaptive: string[];
    container: string[];
};
type PropsToken = {
    focus?: boolean;
    open?: boolean;
    selected?: boolean;
    disabled?: boolean;
    adaptive?: string | 'iconAlways' | 'auto' | 'iconSm' | 'iconMd' | 'iconLg' | 'iconXl' | 'icon2xl' | 'fullSm' | 'fullMd' | 'fullLg' | 'fullXl' | 'full2xl';
    container?: string | 'iconSm' | 'iconMd' | 'iconLg' | 'iconXl' | 'icon2xl' | 'fullSm' | 'fullMd' | 'fullLg' | 'fullXl' | 'full2xl';
};
/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type TabItemProps = TabItemPropsBasic<IconProps, BadgeProps> & PropsToken;
/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export declare const defaults: object;
export {};
