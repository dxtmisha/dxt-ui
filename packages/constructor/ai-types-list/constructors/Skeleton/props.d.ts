// md5:3207d90192ff7cfff467f1d6e8137036 true
export type SkeletonPropsToken = {
    active?: boolean;
};
export type SkeletonPropsBasic = {
    /** Delay before showing @keywords delay, show */
    delay?: number | string;
    /** Delay before hiding @keywords delay, hide */
    delayHide?: number | string;
    /** Makes content invisible upon activation @keywords invisible, visibility */
    invisible?: boolean;
};
/** Properties for Skeleton component @keywords skeleton, props */
export type SkeletonProps = SkeletonPropsBasic & SkeletonPropsToken;
/** Default properties for Skeleton component @keywords skeleton, defaults */
export declare const defaultsSkeleton: {
    delay: number;
    delayHide: number;
    invisible: boolean;
};