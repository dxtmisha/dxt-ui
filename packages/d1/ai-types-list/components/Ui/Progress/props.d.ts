// md5:5219b55b9268672e358fd2de016dbea1 true
import { ProgressPropsBasic } from '@dxtmisha/constructor/Progress';

/** Allowed values for progress component properties. @keywords propsValues progress */
export declare const propsValues: {
    indeterminate: string[];
    position: string[];
    size: string[];
    palette: string[];
};

/** Token properties configuration for progress. @keywords PropsToken progress */
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

/** Progress component properties combining basic and token props. @keywords ProgressProps progress */
export type ProgressProps = ProgressPropsBasic & PropsToken;

/** Default values for progress properties. @keywords defaults progress */
export declare const defaults: object;