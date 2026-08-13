// md5:f2d8acd7fbd3a88fb8091dd0122ed7fd true
import { NumberOrString } from '@dxtmisha/functional';

/** Anchor scroll configuration properties @keywords anchor scroll properties shift behavior block inline */
export type AnchorScrollProps = {
    shift?: NumberOrString;
    behavior?: ScrollIntoViewOptions['behavior'];
    block?: ScrollIntoViewOptions['block'];
    inline?: ScrollIntoViewOptions['inline'];
};