// md5:467786968977d54a817f8abddd810759 true
import { Ref, ToRefs, ComputedRef } from 'vue';
import { EventItem, ConstrEmit } from '@dxtmisha/functional';
import { ElementOrWindow } from '@dxtmisha/functional-basic';
export type HeadroomMode = 'pinned' | 'unpinned' | 'not-top' | 'top' | 'disappears';
export type HeadroomStatus = 'pinned' | 'unpinned' | 'not-top' | 'top';
export interface HeadroomPropsInclude {
    mode?: HeadroomMode;
    tolerance?: number | {
        up?: number;
        down?: number;
    };
    offset?: number;
    classes?: {
        pinned?: string;
        unpinned?: string;
        notTop?: string;
        top?: string;
        disappears?: string;
    };
    zIndex?: number;
}
export type HeadroomEmitsInclude = {
    change: [event: HeadroomEventItem];
    pin: [event: HeadroomEventItem];
    unpin: [event: HeadroomEventItem];
    top: [event: HeadroomEventItem];
    notTop: [event: HeadroomEventItem];
};
export interface HeadroomEventItem extends EventItem {
    status: HeadroomStatus;
    scroll: number;
    maxScroll: number;
    direction: 'up' | 'down';
    toleranceExceeded: boolean;
    pin: boolean;
}
export interface HeadroomExposeInclude {
    update: () => void;
    status: ComputedRef<HeadroomStatus>;
    scroll: ComputedRef<number>;
    direction: ComputedRef<'up' | 'down'>;
}
/** Headroom logic class managing sticky header position and scroll status calculations. @keywords headroom sticky header scroll */
export declare class HeadroomInclude {
    /** Creates HeadroomInclude instance. @keywords constructor headroom */
    constructor(props: HeadroomPropsInclude, refs: ToRefs<HeadroomPropsInclude>, element: Ref<HTMLElement | undefined>, className?: string, emits?: ConstrEmit<HeadroomEmitsInclude> | undefined);
    /** Exported headroom values and methods. @keywords expose headroom public api */
    get expose(): HeadroomExposeInclude;
    /** Recalculates scroll metrics and updates headroom states and element styles. @keywords update headroom metrics */
    readonly update: () => void;
}