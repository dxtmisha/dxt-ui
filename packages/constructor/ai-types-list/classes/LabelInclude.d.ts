// md5:1bdb2bfe09371e943062a4ab4e6f98bb true
import { VNode } from 'vue';
import { ConstrClass, RefOrNormalOrFunction } from '@dxtmisha/functional';

/** Utility class for connecting and rendering label elements. @keywords LabelInclude label render skeleton */
export declare class LabelInclude {
    /** Constructor for initializing LabelInclude properties. @keywords constructor LabelInclude */
    constructor(props: RefOrNormalOrFunction<LabelProps>, className: string, classesExtra?: ConstrClass | undefined, slots?: (LabelSlots | LabelAlternativeSlots) | undefined, elementsExtra?: (() => VNode[]) | undefined, labelReplacing?: any, alternativeSlots?: boolean | undefined, skeleton?: SkeletonInclude | undefined, tag?: RefOrNormalOrFunction<string | undefined>, ignoreLabelIfSlot?: boolean | undefined);
    /** Label presence check. @keywords is label presence check */
    get is(): boolean;
    /** Identifier for the element. @keywords id identifier */
    get id(): string;
    /** Renders the label element with children and properties. @keywords render label VNode */
    render(childrenExtra?: any[], props?: Record<string, any>): VNode[];
}