// md5:7eace100b5a9ef7466c61e18c2a82cc3 true
import { type ProgressPropsBasic } from '@dxtmisha/constructor/Progress';
/** Available property values for progress tokens. @keywords progress, values, tokens */
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
    indeterminate?: 'type1' | 'type2' | 'type3';
    position?: 'top' | 'bottom' | 'static';
    dense?: boolean;
    inverse?: boolean;
    size?: 'sm' | 'md' | 'lg';
    palette?: 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'black' | 'white';
};
/** Progress component properties contract. @keywords progress, props */
export type ProgressProps = ProgressPropsBasic & PropsToken;
/** Default property values for progress component. @keywords progress, defaults */
export declare const defaults: object;