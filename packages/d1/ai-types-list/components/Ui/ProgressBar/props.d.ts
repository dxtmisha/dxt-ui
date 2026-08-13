// md5:43ad3d6fde69dfaaf39aae8c27b26daf true
import { ProgressBarPropsBasic } from '@dxtmisha/constructor/ProgressBar';
/** Default values for properties @keywords defaults, props */
export declare const propsValues: {
    palette: string[];
};
type PropsToken = {
    overlay?: boolean;
    palette?: 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'black' | 'white';
};
/** Component property definitions @keywords progressbar, props */
export type ProgressBarProps = ProgressBarPropsBasic & PropsToken;
/** Component default configuration object @keywords defaults, configuration */
export declare const defaults: object;