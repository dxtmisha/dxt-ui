// md5:e84c490bf75e40b2883bc6807ffb6525 true
import type { ConstrBind } from '@dxtmisha/functional';
/** CollageBar component inclusion configuration @keywords collage, bar, component */
export type CollageBarComponentInclude = {
    /** CollageBar component configuration */
    collageBar?: object;
};
/** Slots for including and configuring the CollageBar component @keywords collage, bar, slots */
export type CollageBarSlotsInclude = {
    /** Trailing slot forwarded to the bar */
    barTrailing?(props: any): any;
    /** Body slot forwarded to the bar */
    barBody?(props: any): any;
};
/** Properties for embedding CollageBar into composite components @keywords collage, bar, props */
export type CollageBarPropsInclude<CollageBar extends CollageBarPropsBasic = CollageBarPropsBasic> = LabelProps & DescriptionProps & EventClickProps & {
    /** CollageBar position */
    collageBarPosition?: CollageBarProps['position'];
    /** Bound attributes forwarded directly to CollageBar */
    collageBarAttrs?: ConstrBind<CollageBar>;
};