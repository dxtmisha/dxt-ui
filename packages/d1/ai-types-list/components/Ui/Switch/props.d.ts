// md5:6e5c1d80b1399306c07922e2855723fa true
import { type SwitchPropsBasic } from '@dxtmisha/constructor/Switch';
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
/** Switch component properties contract. @keywords switch, props */
export type SwitchProps = SwitchPropsBasic<ImageProps, FieldMessageProps, FieldCounterProps, ProgressProps> & PropsToken;
/** Default properties for the switch component. @keywords switch, defaults */
export declare const defaults: object;