// md5:ac8b7b5e2c26cf43acc3b33cd6dcfc9d true
import { CheckboxPropsBasic } from '@dxtmisha/constructor/Checkbox';
/** @keywords propsValues, values, constructor */
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
/** @keywords CheckboxProps, properties */
export type CheckboxProps = CheckboxPropsBasic<ImageProps, FieldMessageProps, FieldCounterProps, ProgressProps> & PropsToken;
/** @keywords defaults, object */
export declare const defaults: object;
export {};