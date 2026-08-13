// md5:950a1d70536047adf4d65354c5c4b059 true
import { VNode } from 'vue';

export declare class SuffixInclude {
    /** Creates a SuffixInclude instance. @keywords constructor, init, suffix */
    constructor(props: Readonly<SuffixProps>, className: string, slots?: SuffixSlots | undefined, skeleton?: SkeletonInclude | undefined);
    /** Checks if the suffix has content. @keywords is, filled, exists, suffix */
    get is(): boolean;
    /** Gets the unique identifier for the suffix. @keywords id, identifier, suffix */
    get id(): string;
    /** Gets the description identifier if the element exists. @keywords describedby, id, element */
    get describedby(): string;
    /** Renders the suffix element VNodes. @keywords render, vnode, dom, suffix */
    render(): VNode[];
}