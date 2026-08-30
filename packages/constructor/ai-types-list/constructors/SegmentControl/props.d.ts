// md5:2da741697be7846870d919f1266acd14 true
type SegmentControlPropsToken = {
    divider?: boolean;
};
export type SegmentControlPropsBasic<TabItem extends TabItemPropsBasic = TabItemPropsBasic> = TabsNavigationPropsBasic<TabItem>;
/** Segment control component properties. @keywords segment, control, props */
export type SegmentControlProps = SegmentControlPropsBasic & SegmentControlPropsToken;
/** Default properties for segment control component. @keywords segment, control, defaults */
export declare const defaultsSegmentControl: {
    horizontalScrollAlign: boolean;
    horizontalScrollBleed: boolean;
};