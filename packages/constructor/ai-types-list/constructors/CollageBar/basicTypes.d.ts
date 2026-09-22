// md5:6aa70ac8e40c94398c1c5c93efb15169 true
import type { ConstrBind } from '@dxtmisha/functional';

export type CollageBarComponentInclude = {
    collageBar?: object;
};

export type CollageBarSlotsInclude = {
    /** Trailing slot forwarded to the bar. @keywords slot, bar-trailing */
    barTrailing?(props: any): any;
    /** Body slot forwarded to the bar. @keywords slot, bar-body */
    barBody?(props: any): any;
};

/** Embedding properties for CollageBar component integration. @keywords collage-bar, props, include */
export type CollageBarPropsInclude<CollageBar extends CollageBarPropsBasic = CollageBarPropsBasic> = LabelProps & DescriptionProps & EventClickProps & {
    selected?: boolean;
    collageBarPosition?: CollageBarProps['position'];
    /** Attributes bound directly to the CollageBar component. @keywords collage-bar, attrs, bind */
    collageBarAttrs?: ConstrBind<CollageBar>;
};