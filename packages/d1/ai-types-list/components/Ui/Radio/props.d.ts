// md5:ceabc406d268a0c59b8daa294ad9ca74 true
import { RadioPropsBasic } from '@dxtmisha/constructor/Radio';
/** Configuration values for radio properties @keywords propsValues adaptive container palette */
export declare const propsValues: {
    adaptive: string[];
    container: string[];
    palette: string[];
};
type PropsToken = {
    block?: boolean;
    adaptive?: 'rightAlways' | 'rightSm' | 'rightMd' | 'rightLg' | 'rightXl' | 'right2xl';
    container?: 'rightSm' | 'rightMd' | 'rightLg' | 'rightXl' | 'right2xl';
    required?: boolean;
    itemCenter?: boolean;
    focus?: boolean;
    disabled?: boolean;
    palette?: 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'black' | 'white';
};
/** Radio component properties @keywords RadioProps RadioPropsBasic */
export type RadioProps = RadioPropsBasic<ImageProps, FieldMessageProps, FieldCounterProps, ProgressProps> & PropsToken;
/** Default values for radio properties @keywords defaults */
export declare const defaults: object;
export {};