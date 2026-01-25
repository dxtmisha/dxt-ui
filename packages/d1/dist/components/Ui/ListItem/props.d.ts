import { ListItemPropsBasic } from '@dxtmisha/constructor/ListItem';
import { IconProps } from '../Icon';
import { BadgeProps } from '../Badge';
import { ProgressProps } from '../Progress';
export declare const propsValues: {
    iconAlign: string[];
    fill: never[];
    size: string[];
    palette: string[];
};
export type PropsToken = {
    focus?: boolean;
    open?: boolean;
    selected?: boolean;
    selectedChild?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    iconTop?: boolean;
    iconAlign?: 'center' | 'edge';
    fill?: string | 'custom';
    divider?: boolean;
    size?: 'sm' | 'md' | 'lg';
    dense?: boolean;
    palette?: 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'black' | 'white';
};
/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type ListItemProps = ListItemPropsBasic<IconProps, BadgeProps, ProgressProps> & PropsToken;
/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export declare const defaults: object;
