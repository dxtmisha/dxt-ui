// md5:ac995b28302eb73322e51587d239328b true
type ProgressBarPropsToken = {
    overlay?: boolean;
};
export type ProgressBarPropsBasic = SkeletonPropsInclude & {
    focus?: string;
    value?: string | number | ProgressBarItem | ProgressBarList;
    max?: string | number;
    color?: string;
    palette?: string;
    showLabel?: boolean;
};
/** @keywords ProgressBarProps, properties, configuration */
export type ProgressBarProps = ProgressBarPropsBasic & ProgressBarPropsToken;
/** @keywords defaultsProgressBar, default, constants */
export declare const defaultsProgressBar: {};
export {};