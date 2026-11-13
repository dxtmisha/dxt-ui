// md5:a7cc8782a849773808c2ed5b24392d71 true
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
    /** Whether to display an indicator dot at the end of the linear track. @keywords point, indicator, track */
    point?: boolean;
    delay?: number | string;
    delayHide?: number | string;
};
/** Properties for the Progress component. @keywords progress, props */
export type ProgressProps = ProgressPropsBasic & ProgressPropsToken;
/** Default property values for the Progress component. @keywords progress, defaults */
export declare const defaultsProgress: {
    linear: boolean;
    indeterminate: string;
    position: string;
    clientOnly: boolean;
    max: number;
    delay: number;
    delayHide: number;
};