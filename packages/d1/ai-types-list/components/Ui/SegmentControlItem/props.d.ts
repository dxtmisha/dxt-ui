// md5:7e6399809ffd9156081bedf32645fbf6 true
import { SegmentControlItemPropsBasic } from '@dxtmisha/constructor/SegmentControlItem';
/** Default props values for adaptive and container variants @keywords propsValues, adaptive, container */
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
export type SegmentControlItemProps = SegmentControlItemPropsBasic<IconProps, BadgeProps> & PropsToken;
/** Default values for segment control item @keywords defaults, object */
export declare const defaults: object;
export {};