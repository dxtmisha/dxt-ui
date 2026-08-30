// md5:aa074cba9969d7a930b76b5d963722fb true
type SegmentControlItemPropsToken = {
    focus?: boolean;
    open?: boolean;
    selected?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    adaptive?: 'iconAlways' | 'auto';
    container?: boolean;
};
export type SegmentControlItemPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Badge extends BadgePropsBasic = BadgePropsBasic> = TabItemPropsBasic<Icon, Badge>;
/** Properties for the segment control item component. @keywords segment, control, item, tab, props */
export type SegmentControlItemProps = SegmentControlItemPropsBasic & SegmentControlItemPropsToken;
/** Default property values for the segment control item component. @keywords segment, control, item, defaults */
export declare const defaultsSegmentControlItem: {};