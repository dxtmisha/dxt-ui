// md5:18dfdf502c770bfd67b8d74adbd12ce3 true
import { type ChipPropsBasic } from '@dxtmisha/constructor/Chip';

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
    adaptive?: 'iconAlways' | 'block' | 'auto' | 'iconSm' | 'iconMd' | 'iconLg' | 'iconXl' | 'icon2xl' | 'fullSm' | 'fullMd' | 'fullLg' | 'fullXl' | 'full2xl';
    container?: 'iconSm' | 'iconMd' | 'iconLg' | 'iconXl' | 'icon2xl' | 'fullSm' | 'fullMd' | 'fullLg' | 'fullXl' | 'full2xl';
    inverse?: boolean;
    grid?: boolean;
    textAlign?: 'left' | 'center' | 'right';
    input?: boolean;
    assistive?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg';
    roundedFull?: boolean;
    palette?: 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'black' | 'white';
};
/** Chip component properties. @keywords chip, props */
export type ChipProps = ChipPropsBasic<IconProps, ProgressProps> & PropsToken;
/** Default values for chip properties. @keywords chip, defaults */
export declare const defaults: object;