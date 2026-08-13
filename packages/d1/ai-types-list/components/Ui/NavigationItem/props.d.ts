// md5:be43ef1e1c92929f14b1b5f33f835890 true
import { NavigationItemPropsBasic } from '@dxtmisha/constructor/NavigationItem';
/** Default values for navigation item properties @keywords defaults, props */
export declare const propsValues: {
    iconAlign: string[];
    controlPosition: string[];
    fill: never[];
    size: string[];
    palette: string[];
};
type PropsToken = {
    focus?: boolean;
    open?: boolean;
    selectedChild?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    iconTop?: boolean;
    iconAlign?: 'center' | 'edge';
    controlPosition?: 'start' | 'end' | 'autoSm' | 'autoMd' | 'autoLg' | 'autoXl' | 'auto2xl';
    fill?: string | 'custom';
    divider?: boolean;
    size?: 'sm' | 'md' | 'lg';
    dense?: boolean;
    palette?: 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'black' | 'white';
};
/** Navigation item component properties @keywords navigation, props */
export type NavigationItemProps = NavigationItemPropsBasic<IconProps, BadgeProps, ProgressProps, CheckboxProps, RadioProps> & PropsToken;
/** Default configuration object @keywords defaults, config */
export declare const defaults: object;
export {};