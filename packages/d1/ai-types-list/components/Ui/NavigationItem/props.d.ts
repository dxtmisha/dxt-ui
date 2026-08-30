// md5:e81dd98564389e933ba4ba8a0b4d0cfd true
import { type NavigationItemPropsBasic } from '@dxtmisha/constructor/NavigationItem';

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

/** Navigation item incoming properties. @keywords navigation, item, props */
export type NavigationItemProps = NavigationItemPropsBasic<IconProps, BadgeProps, ProgressProps, CheckboxProps, RadioProps> & PropsToken;

/** Default property values for navigation item component. @keywords defaults, navigation, item */
export declare const defaults: object;