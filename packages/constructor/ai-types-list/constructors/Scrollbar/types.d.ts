// md5:70bc773056e58d5097c98049c15a18a5 true
import { ConstrClass } from '@dxtmisha/functional';

export type ScrollbarComponents = {};

export type ScrollbarEmits = {
    top: [isTop: boolean];
    reachTop: [];
    leaveTop: [];
    bottom: [isBottom: boolean];
    reachBottom: [];
    leaveBottom: [];
    edge: [isTop: boolean, isBottom: boolean, edge: ScrollbarEdgeType];
};

export interface ScrollbarExpose {
}

export interface ScrollbarSlots {
    /** Default scrollbar content slot @keywords scrollbar, slot, default */
    default?(props: any): any;
}

export type ScrollbarClasses = {
    main: ConstrClass;
};