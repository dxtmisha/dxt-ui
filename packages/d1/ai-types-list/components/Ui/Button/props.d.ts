// md5:b0477c7e738b5153fd3f831cb41d576c true
import { ButtonPropsBasic } from '@dxtmisha/constructor/Button';
/** Predefined value arrays for button properties @keywords props values arrays */
export declare const propsValues: {
    adaptive: string[];
    container: string[];
    textAlign: string[];
    size: string[];
    palette: string[];
};
export type PropsToken = {
    focus?: boolean;
    disabled?: boolean;
    selected?: boolean;
    readonly?: boolean;
    adaptive?: 'iconAlways' | 'block' | 'auto' | 'iconSm' | 'iconMd' | 'iconLg' | 'iconXl' | 'icon2xl' | 'fullSm' | 'fullMd' | 'fullLg' | 'fullXl' | 'full2xl';
    container?: 'iconSm' | 'iconMd' | 'iconLg' | 'iconXl' | 'icon2xl' | 'fullSm' | 'fullMd' | 'fullLg' | 'fullXl' | 'full2xl';
    inverse?: boolean;
    grid?: boolean;
    textAlign?: 'left' | 'center' | 'right';
    primary?: boolean;
    secondary?: boolean;
    outline?: boolean;
    text?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    roundedFull?: boolean;
    hasLabelMinWidth?: boolean;
    palette?: 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'black' | 'white';
};
/** Button properties type combining basic props and tokens @keywords button properties type */
export type ButtonProps = ButtonPropsBasic<IconProps, ProgressProps> & PropsToken;
/** Default values for button properties @keywords button defaults object */
export declare const defaults: object;