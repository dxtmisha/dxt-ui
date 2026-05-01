import { ProgressPropsBasic } from '@dxtmisha/constructor/Progress';
export declare const propsValues: {
    indeterminate: string[];
    position: string[];
    size: string[];
    palette: string[];
};
type PropsToken = {
    point?: boolean;
    linear?: boolean;
    circular?: boolean;
    indeterminate?: string | 'type1' | 'type2' | 'type3';
    position?: string | 'top' | 'bottom' | 'static';
    dense?: boolean;
    inverse?: boolean;
    size?: string | 'sm' | 'md' | 'lg';
    palette?: string | 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'black' | 'white';
};
/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type ProgressProps = ProgressPropsBasic & PropsToken;
/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export declare const defaults: object;
export {};
