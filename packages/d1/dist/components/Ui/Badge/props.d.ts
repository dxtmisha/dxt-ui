import { BadgePropsBasic } from '@dxtmisha/constructor/Badge';
import { IconProps } from '../Icon';
export declare const propsValues: {
    overlap: string[];
    vertical: string[];
    horizontal: string[];
    size: string[];
    palette: string[];
};
type PropsToken = {
    selected?: boolean;
    hide?: boolean;
    dot?: boolean;
    overlap?: string | 'rectangular' | 'circular' | 'static';
    vertical?: string | 'top' | 'center' | 'bottom';
    horizontal?: string | 'right' | 'center' | 'left';
    primary?: boolean;
    secondary?: boolean;
    outline?: boolean;
    size?: string | 'sm' | 'md' | 'lg' | 'none';
    palette?: string | 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'black' | 'white';
};
/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type BadgeProps = BadgePropsBasic<IconProps> & PropsToken;
/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export declare const defaults: object;
export {};
