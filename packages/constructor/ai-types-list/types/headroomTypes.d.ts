// md5:b201ef0ffe23b8193d88e44e6df0a2e0 true
import { ComputedRef } from 'vue';
import { ElementOrWindow } from '@dxtmisha/functional-basic';

export type HeadroomPropsInclude = {
    /** Target scroll element or window @keywords headroom, scroll, element */
    scrollElement?: ElementOrWindow | string;
    /** Hide element on scroll down and reveal on scroll up @keywords headroom, disappears, hide */
    disappears?: boolean;
    /** Transform threshold in pixels for calculations @keywords headroom, threshold, transform */
    transformThreshold?: number;
};

export type HeadroomEventItem = {
    value: number;
    disappearsValue: number;
    isSticky: boolean;
    transformThreshold: number;
    transformValue: number;
    transformPercent: number;
    valueDifference: number;
};

export type HeadroomEmitsInclude = {
    headroomScroll: [event: HeadroomEventItem];
    headroomSticky: [event: HeadroomEventItem];
};

export type HeadroomExposeInclude = {
    isSticky: ComputedRef<boolean>;
    getValues: () => HeadroomEventItem;
    update: () => void;
};