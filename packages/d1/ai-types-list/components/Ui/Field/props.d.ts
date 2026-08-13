// md5:a9430a5099e53fb02552eb3abdb98e84 true
import { FieldPropsBasic } from '@dxtmisha/constructor/Field';
export declare const propsValues: {
    arrowAlign: string[];
    cancel: string[];
    align: string[];
    width: never[];
    size: string[];
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
};
/** Field component properties definition @keywords field_props, properties */
export type FieldProps = FieldPropsBasic<IconProps, FieldLabelProps, FieldMessageProps, FieldCounterProps, ProgressProps> & PropsToken;
/** Default properties object @keywords defaults, field_defaults */
export declare const defaults: object;
export {};