// md5:6c5e4933e2eb1fbba06fb3e43230d478 true
import { NavigationRailItemPropsBasic } from '@dxtmisha/constructor/NavigationRailItem';
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
/** Navigation rail item properties @keywords navigation, rail, item, props */
export type NavigationRailItemProps = NavigationRailItemPropsBasic<IconProps, BadgeProps, ProgressProps> & PropsToken;
/** Default properties configuration @keywords defaults, config, object */
export declare const defaults: object;