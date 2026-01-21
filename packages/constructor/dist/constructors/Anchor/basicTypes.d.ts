import { NumberOrString } from '@dxtmisha/functional';
/** Anchor scroll properties/ Свойства прокрутки якоря */
export type AnchorScrollProps = {
    shift?: NumberOrString;
    behavior?: ScrollIntoViewOptions['behavior'];
    block?: ScrollIntoViewOptions['block'];
    inline?: ScrollIntoViewOptions['inline'];
};
