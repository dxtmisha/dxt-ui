// md5:de96686dd62c81b7f1eb71055dbc9037 true
import { type CheckboxPropsBasic } from '@dxtmisha/constructor/Checkbox';
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
/** Checkbox component properties. @keywords checkbox, props */
export type CheckboxProps = CheckboxPropsBasic<ImageProps, FieldMessageProps, FieldCounterProps, ProgressProps> & PropsToken;
/** Default property values for Checkbox. @keywords checkbox, defaults */
export declare const defaults: object;