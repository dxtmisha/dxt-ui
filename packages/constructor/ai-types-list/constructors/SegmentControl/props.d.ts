// md5:f160513781bb0b616d25b5fe60e94a84 true
type SegmentControlPropsToken = {
    divider?: boolean;
};
export type SegmentControlPropsBasic<TabItem extends TabItemPropsBasic = TabItemPropsBasic> = TabsNavigationPropsBasic<TabItem>;
/** Type describing incoming properties. @keywords SegmentControlProps incoming properties */
export type SegmentControlProps = SegmentControlPropsBasic & SegmentControlPropsToken;
/** Default value for property. @keywords defaultsSegmentControl default value properties */
export declare const defaultsSegmentControl: {
    horizontalScrollAlign: boolean;
    horizontalScrollBleed: boolean;
};