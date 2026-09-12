// md5:3403be8bfaa05199d6839fc197cc4103 true
import type { ConstrBind } from '@dxtmisha/functional';

/** Type for including CollageBar component. @keywords collage, bar, component, include */
export type CollageBarComponentInclude = {
    /** CollageBar component configuration. */
    collageBar?: object;
};

/** Type for embedding CollageBar properties in other components. @keywords collage, bar, props, include */
export type CollageBarPropsInclude<CollageBar extends CollageBarPropsBasic = CollageBarPropsBasic> = LabelProps & DescriptionProps & EventClickProps & {
    /** CollageBar position. */
    collageBarPosition?: CollageBarProps['position'];
    /** Bound attributes passed directly to the CollageBar component. */
    collageBarAttrs?: ConstrBind<CollageBar>;
};