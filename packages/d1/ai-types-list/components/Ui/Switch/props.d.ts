// md5:dd2996823a12946759e517de980673b0 true
import { SwitchPropsBasic } from '@dxtmisha/constructor/Switch';
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
/** Switch component properties @keywords switch props configuration */
export type SwitchProps = SwitchPropsBasic<ImageProps, FieldMessageProps, FieldCounterProps, ProgressProps> & PropsToken;
/** Default values for switch properties @keywords switch defaults */
export declare const defaults: object;