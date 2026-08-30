// md5:52f3fce60648182dfd91cfeb2467458f true
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
    /** Whether progress is visible. */
    visible?: boolean;
    /** Current progress value. */
    value?: number | string;
    /** Maximum progress value. */
    max?: number | string;
    /** Whether to use linear progress display. */
    linear?: boolean;
    /** Whether to use circular progress display. */
    circular?: boolean;
    /** Whether to use point progress display. */
    point?: boolean;
    /** Delay before showing in milliseconds. */
    delay?: number | string;
    /** Delay before hiding in milliseconds. */
    delayHide?: number | string;
};
/** Progress component properties. @keywords progress, props */
export type ProgressProps = ProgressPropsBasic & ProgressPropsToken;
/** Default property values for progress component. @keywords progress, defaults */
export declare const defaultsProgress: {
    linear: boolean;
    indeterminate: string;
    position: string;
    clientOnly: boolean;
    max: number;
    delay: number;
    delayHide: number;
};