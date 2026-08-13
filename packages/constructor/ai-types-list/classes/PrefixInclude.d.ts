// md5:0632e37d821818c149d0f7a347333a57 true
import { VNode } from 'vue';
/** Manages component prefix state, identification, and vnode rendering. @keywords prefix include component state render */
export declare class PrefixInclude {
    /** Creates a prefix include instance. @keywords constructor create prefix */
    constructor(props: Readonly<PrefixProps>, className: string, slots?: PrefixSlots | undefined, skeleton?: SkeletonInclude | undefined);
    /** Checks if the prefix is filled. @keywords is filled check prefix */
    get is(): boolean;
    /** Gets the unique identifier. @keywords id unique identifier */
    get id(): string;
    /** Gets the describedby identifier if the element exists. @keywords describedby identifier */
    get describedby(): string;
    /** Renders the prefix element with content from props or slots. @keywords render prefix vnode */
    render(): VNode[];
}