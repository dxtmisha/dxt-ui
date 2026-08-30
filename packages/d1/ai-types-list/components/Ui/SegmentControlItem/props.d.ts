// md5:bbd23b9f82ff0d3853646f22df368198 true
import { type SegmentControlItemPropsBasic } from '@dxtmisha/constructor/SegmentControlItem';

/** Allowed property values for segment control item @keywords segment_control item props values */
export declare const propsValues: {
    adaptive: string[];
    container: string[];
    palette: string[];
};

type PropsToken = {
    focus?: boolean;
    open?: boolean;
    selected?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    adaptive?: 'iconAlways' | 'auto' | 'iconSm' | 'iconMd' | 'iconLg' | 'iconXl' | 'icon2xl' | 'fullSm' | 'fullMd' | 'fullLg' | 'fullXl' | 'full2xl';
    container?: 'iconSm' | 'iconMd' | 'iconLg' | 'iconXl' | 'icon2xl' | 'fullSm' | 'fullMd' | 'fullLg' | 'fullXl' | 'full2xl';
    palette?: 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'black' | 'white';
};

/** Incoming properties for segment control item @keywords segment_control item props */
export type SegmentControlItemProps = SegmentControlItemPropsBasic<IconProps, BadgeProps> & PropsToken;

/** Default property values for segment control item @keywords defaults segment_control item */
export declare const defaults: object;