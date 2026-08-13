// md5:09ec5f78399350e9644390d63838d757 true
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
/** Type describing incoming properties. @keywords segment control item props */
export type SegmentControlItemProps = SegmentControlItemPropsBasic & SegmentControlItemPropsToken;
/** Default value for property. @keywords default segment control item defaults */
export declare const defaultsSegmentControlItem: {};