// md5:7e34d3bdfc5679371b72546eb0cde702 true
export type SkeletonPropsToken = {};
export type SkeletonPropsBasic = {
    /** Activates skeleton placeholder state. */
    active?: boolean;
    /** Delay before showing skeleton. */
    delay?: number | string;
    /** Delay before hiding skeleton. */
    delayHide?: number | string;
    /** Hides content while skeleton is active. */
    invisible?: boolean;
};
export type SkeletonProps = SkeletonPropsBasic & SkeletonPropsToken;
/** Default property values for the Skeleton component. @keywords skeleton, defaults */
export declare const defaultsSkeleton: {
    delay: number;
    delayHide: number;
    invisible: boolean;
};