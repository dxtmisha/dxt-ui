// md5:3cd30caa98e740c1204fb274663cba36 true
type ProgressBarPropsToken = {
    overlay?: boolean;
};
export type ProgressBarPropsBasic = SkeletonPropsInclude & {
    /** Focus item index */
    focus?: string;
    /** Data value */
    value?: string | number | ProgressBarItem | ProgressBarList;
    /** Maximum value */
    max?: string | number;
    /** Active color */
    color?: string;
    /** Palette name */
    palette?: string;
    /** Show label status */
    showLabel?: boolean;
};
/** Progress bar component properties @keywords progress, bar, props */
export type ProgressBarProps = ProgressBarPropsBasic & ProgressBarPropsToken;
/** Default properties for the progress bar component @keywords progress, bar, defaults */
export declare const defaultsProgressBar: {};