// md5:3ba40d1d22b35ea7283f6dda3d89e580 true
import { ConstrClass } from '@dxtmisha/functional';

/** Handles numeric labels with maximum constraints @keywords LabelNumberInclude numeric maximum constraint */
export declare class LabelNumberInclude extends LabelInclude {
    /** Creates a numeric label instance @keywords constructor LabelNumberInclude */
    constructor(props: Readonly<LabelNumberProps>, className: string, classesExtra?: ConstrClass | undefined, slots?: LabelNumberSlots | undefined, elementsExtra?: (() => VNode[]) | undefined, skeleton?: SkeletonInclude | undefined);
}