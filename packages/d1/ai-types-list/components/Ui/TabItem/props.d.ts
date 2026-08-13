// md5:9f43560eba278cdaa483b3c0499e63ac true
import { TabItemPropsBasic } from '@dxtmisha/constructor/TabItem';
/** @keywords propsValues adaptive container */
export declare const propsValues: {
    adaptive: string[];
    container: string[];
};
type PropsToken = {
    focus?: boolean;
    open?: boolean;
    selected?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    adaptive?: 'iconAlways' | 'auto' | 'iconSm' | 'iconMd' | 'iconLg' | 'iconXl' | 'icon2xl' | 'fullSm' | 'fullMd' | 'fullLg' | 'fullXl' | 'full2xl';
    container?: 'iconSm' | 'iconMd' | 'iconLg' | 'iconXl' | 'icon2xl' | 'fullSm' | 'fullMd' | 'fullLg' | 'fullXl' | 'full2xl';
};
/** @keywords TabItemProps properties */
export type TabItemProps = TabItemPropsBasic<IconProps, BadgeProps> & PropsToken;
/** @keywords defaults object */
export declare const defaults: object;
export {};