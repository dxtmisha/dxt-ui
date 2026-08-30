// md5:6b1b2be1a1a8d9f3edafaf20fcc1afa7 true
import { type FieldPropsBasic } from '@dxtmisha/constructor/Field';
export declare const propsValues: {
    arrowAlign: string[];
    cancel: string[];
    align: string[];
    width: never[];
    size: string[];
    palette: string[];
};
type PropsToken = {
    focus?: boolean;
    disabled?: boolean;
    selected?: boolean;
    readonly?: boolean;
    block?: boolean;
    isValue?: boolean;
    basic?: boolean;
    boxed?: boolean;
    tonal?: boolean;
    filled?: boolean;
    outlined?: boolean;
    classic?: boolean;
    arrowCarousel?: boolean;
    arrowStepper?: boolean;
    arrowAlign?: 'center' | 'right' | 'left';
    cancel?: 'auto' | 'always' | 'none';
    align?: 'center' | 'right' | 'left';
    width?: string | 'custom';
    size?: 'sm' | 'md' | 'lg' | 'display';
    palette?: 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'black' | 'white';
};
/** Field component properties combining base field configuration and token modifiers @keywords field, props, input */
export type FieldProps = FieldPropsBasic<IconProps, FieldLabelProps, FieldMessageProps, FieldCounterProps, ProgressProps> & PropsToken;
/** Default property values for field component @keywords defaults, field, options */
export declare const defaults: object;