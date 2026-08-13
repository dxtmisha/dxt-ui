// md5:589a47d77bc83b07dbd3c0bb52bd09eb true
import { ListItemPropsBasic } from '@dxtmisha/constructor/ListItem';
/** Component property values dictionary. @keywords propsValues */
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
/** Combined list item properties type definition. @keywords ListItemProps */
export type ListItemProps = ListItemPropsBasic<IconProps, BadgeProps, ProgressProps, CheckboxProps, RadioProps> & PropsToken;
/** Default properties configuration object. @keywords defaults */
export declare const defaults: object;
export {};