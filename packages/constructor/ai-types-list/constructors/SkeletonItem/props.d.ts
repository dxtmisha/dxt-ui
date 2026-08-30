// md5:6e21e23b52a9142889738a8739ad4f77 true
type SkeletonItemPropsToken = {
    text?: boolean;
    textVariant?: boolean;
    background?: boolean;
    backgroundVariant?: boolean;
    border?: boolean;
    borderVariant?: boolean;
};

export type SkeletonItemPropsBasic = {
    /** Tag name for the skeleton element */
    tag?: string | any;
    /** Attributes for the HTML element */
    itemAttrs?: Record<string, any>;
    /** Static text content to render instead of random text */
    label?: string | number;
    /** Expected length or range of lengths for the random text */
    length?: string | number | [number, number];
};

export type SkeletonItemProps = SkeletonItemPropsBasic & SkeletonItemPropsToken;

/** Default property values for the SkeletonItem component @keywords skeleton, item, defaults */
export declare const defaultsSkeletonItem: {
    tag: string;
    length: number;
};