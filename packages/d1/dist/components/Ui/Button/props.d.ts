import { ButtonPropsBasic } from '@dxtmisha/constructor/Button';
import { IconProps } from '../Icon';
import { ProgressProps } from '../Progress';
export declare const propsValues: {
    adaptive: string[];
    container: string[];
    textAlign: string[];
    size: string[];
    palette: string[];
};
type PropsToken = {
    focus?: boolean;
    disabled?: boolean;
    selected?: boolean;
    readonly?: boolean;
    adaptive?: string | 'iconAlways' | 'block' | 'auto' | 'iconSm' | 'iconMd' | 'iconLg' | 'iconXl' | 'icon2xl' | 'fullSm' | 'fullMd' | 'fullLg' | 'fullXl' | 'full2xl';
    container?: string | 'iconSm' | 'iconMd' | 'iconLg' | 'iconXl' | 'icon2xl' | 'fullSm' | 'fullMd' | 'fullLg' | 'fullXl' | 'full2xl';
    inverse?: boolean;
    grid?: boolean;
    textAlign?: string | 'left' | 'center' | 'right';
    primary?: boolean;
    secondary?: boolean;
    outline?: boolean;
    text?: boolean;
    size?: string | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    roundedFull?: boolean;
    hasLabelMinWidth?: boolean;
    palette?: string | 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'black' | 'white';
};
/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type ButtonProps = ButtonPropsBasic<IconProps, ProgressProps> & PropsToken;
/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export declare const defaults: object;
export {};
