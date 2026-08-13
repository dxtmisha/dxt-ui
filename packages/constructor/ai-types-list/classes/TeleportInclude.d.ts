// md5:c2f5e4db66345e3bd25c925baf71a7c5 true
import { VNode } from 'vue';
import { RawChildren, RawSlots, RefOrNormal } from '@dxtmisha/functional';

/** Handles component teleportation including SSR support. @keywords teleport include ssr component */
export declare class TeleportInclude {
    /** Creates TeleportInclude instance. @keywords constructor teleport */
    constructor(toDefault?: RefOrNormal<string>);
    /** Gets teleport target. @keywords get to target selector */
    get to(): string;
    /** Checks if element is teleport item. @keywords is teleport element check */
    isTeleportElement(element: HTMLElement): boolean;
    /** Renders Teleport component. @keywords render teleport children props */
    render(children?: RawChildren | RawSlots, props?: Record<string, any>): VNode[];
}