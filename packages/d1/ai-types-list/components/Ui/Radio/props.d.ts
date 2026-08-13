// md5:04894da5f5e237236fd93ecd3276a8b3 true
import { RadioPropsBasic } from '@dxtmisha/constructor/Radio';
/** @keywords propsValues, adaptive, container */
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
/** @keywords RadioProps, properties */
export type RadioProps = RadioPropsBasic<ImageProps, FieldMessageProps, FieldCounterProps, ProgressProps> & PropsToken;
/** @keywords defaults, object */
export declare const defaults: object;