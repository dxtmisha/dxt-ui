// md5:0e2785bb30439f376f1511a819ca6222 true
import { type NavigationRailItemPropsBasic } from '@dxtmisha/constructor/NavigationRailItem';
export declare const propsValues: {
    palette: string[];
};
type PropsToken = {
    focus?: boolean;
    open?: boolean;
    selectedChild?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    divider?: boolean;
    palette?: 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'black' | 'white';
};
/** Navigation rail item component properties. @keywords navigation, rail, item, props */
export type NavigationRailItemProps = NavigationRailItemPropsBasic<IconProps, BadgeProps, ProgressProps> & PropsToken;
/** Default property values for navigation rail item. @keywords navigation, rail, defaults */
export declare const defaults: object;