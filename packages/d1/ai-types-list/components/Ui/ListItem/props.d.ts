// md5:12bd3a3ad96335d8fe2b0e1a0344de01 true
import { type ListItemPropsBasic } from '@dxtmisha/constructor/ListItem';

/** Permitted property values for list item configuration. @keywords list, item, values */
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

/** List item component properties. @keywords list, item, props */
export type ListItemProps = ListItemPropsBasic<IconProps, BadgeProps, ProgressProps, CheckboxProps, RadioProps> & PropsToken;

/** Default property values for list item. @keywords list, item, defaults */
export declare const defaults: object;