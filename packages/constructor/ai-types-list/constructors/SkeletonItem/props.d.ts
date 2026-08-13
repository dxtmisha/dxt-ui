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
    tag?: string | any;
    itemAttrs?: Record<string, any>;
    label?: string | number;
    length?: string | number | [number, number];
};
export type SkeletonItemProps = SkeletonItemPropsBasic & SkeletonItemPropsToken;
/** Default skeleton item properties. @keywords defaults skeleton item */
export declare const defaultsSkeletonItem: {
    tag: string;
    length: number;
};