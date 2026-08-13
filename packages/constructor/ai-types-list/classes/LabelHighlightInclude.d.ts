// md5:8e39990d83432fd4193c82c45e0e9da3 true
import { ConstrClass } from '@dxtmisha/functional';

/** Extends LabelInclude to support text highlighting. @keywords LabelHighlightInclude, label, highlight, text */
export declare class LabelHighlightInclude extends LabelInclude {
    /** Creates a LabelHighlightInclude instance. @keywords constructor, LabelHighlightInclude */
    constructor(props: Readonly<LabelHighlightProps>, className: string, classesExtra?: ConstrClass | undefined, slots?: LabelHighlightSlots | undefined, elementsExtra?: (() => VNode[]) | undefined, skeleton?: SkeletonInclude | undefined);
    /** Determines if text highlighting is required. @keywords isHighlight, text, highlight */
    isHighlight(): boolean;
}