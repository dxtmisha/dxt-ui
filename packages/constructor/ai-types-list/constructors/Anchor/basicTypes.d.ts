// md5:1a3ccb30a3168b314fee34db5948b42e true
import type { NumberOrString } from '@dxtmisha/functional';

/** Anchor scroll configuration properties. @keywords anchor, scroll, scrollIntoView */
export type AnchorScrollProps = {
    /** Offset shift for the scroll position. */
    shift?: NumberOrString;
    /** Transition animation behavior. */
    behavior?: ScrollIntoViewOptions['behavior'];
    /** Vertical alignment of the element. */
    block?: ScrollIntoViewOptions['block'];
    /** Horizontal alignment of the element. */
    inline?: ScrollIntoViewOptions['inline'];
};