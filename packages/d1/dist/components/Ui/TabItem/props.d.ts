import { TabItemPropsBasic } from '@dxtmisha/constructor/TabItem';
export declare const propsValues: {
    adaptive: string[];
    container: string[];
};
type PropsToken = {
    focus?: boolean;
    open?: boolean;
    selected?: boolean;
    disabled?: boolean;
    adaptive?: 'iconAlways' | 'auto' | 'iconSm' | 'iconMd' | 'iconLg' | 'iconXl' | 'icon2xl' | 'fullSm' | 'fullMd' | 'fullLg' | 'fullXl' | 'full2xl';
    container?: 'iconSm' | 'iconMd' | 'iconLg' | 'iconXl' | 'icon2xl' | 'fullSm' | 'fullMd' | 'fullLg' | 'fullXl' | 'full2xl';
};
/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type TabItemProps = TabItemPropsBasic & PropsToken;
/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export declare const defaults: object;
export {};
