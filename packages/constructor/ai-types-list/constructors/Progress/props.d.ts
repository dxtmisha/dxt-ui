// md5:9769b1ed651959520ad31086e2f0810a true
export type ProgressPropsToken = {
    point?: boolean;
    linear?: boolean;
    circular?: boolean;
    indeterminate?: 'type1' | 'type2' | 'type3';
    position?: 'top' | 'bottom' | 'static';
    dense?: boolean;
    inverse?: boolean;
};
export type ProgressPropsBasic = AriaLabelPropsInclude & TextLoadingPropsInclude & ClientOnlyPropsInclude & {
    visible?: boolean;
    value?: number | string;
    max?: number | string;
    linear?: boolean;
    circular?: boolean;
    point?: boolean;
    delay?: number | string;
    delayHide?: number | string;
};
/** Progress component properties @keywords progress props configuration options */
export type ProgressProps = ProgressPropsBasic & ProgressPropsToken;
/** Default values for progress properties @keywords progress defaults configuration */
export declare const defaultsProgress: {
    linear: boolean;
    indeterminate: string;
    position: string;
    clientOnly: boolean;
    max: number;
    delay: number;
    delayHide: number;
};