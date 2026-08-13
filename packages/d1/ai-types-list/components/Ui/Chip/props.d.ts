// md5:9269b94a73b3bc0463d940b97107c846 true
import { ChipPropsBasic } from '@dxtmisha/constructor/Chip';
/** Predefined values for component properties @keywords props_values, configuration */
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
/** Chip component properties combining basic props and tokens @keywords chip_props, properties */
export type ChipProps = ChipPropsBasic<IconProps, ProgressProps> & PropsToken;
/** Default configuration object for component properties @keywords defaults, configuration */
export declare const defaults: object;
export {};