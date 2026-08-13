// md5:7d225549d2ab5305f5be54236dd69cdf true
import { CheckboxPropsBasic } from '@dxtmisha/constructor/Checkbox';
export declare const propsValues: {
    adaptive: string[];
    container: string[];
};
type PropsToken = {
    block?: boolean;
    adaptive?: 'rightAlways' | 'rightSm' | 'rightMd' | 'rightLg' | 'rightXl' | 'right2xl';
    container?: 'rightSm' | 'rightMd' | 'rightLg' | 'rightXl' | 'right2xl';
    required?: boolean;
    itemCenter?: boolean;
    focus?: boolean;
    disabled?: boolean;
};
/** @keywords checkbox, props, component */
export type CheckboxProps = CheckboxPropsBasic<ImageProps, FieldMessageProps, FieldCounterProps, ProgressProps> & PropsToken;
/** @keywords checkbox, defaults, configuration */
export declare const defaults: object;
export {};