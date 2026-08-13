// md5:6570c455fc177fc76ab7e7cf82a3bd09 true
import { ConstrClass } from '@dxtmisha/functional';

export type ListGroupComponents = MotionTransformComponentInclude;

export type ListGroupEmits = {};

export interface ListGroupExpose {
    /** Get open state @keywords getOpen open state list group */
    getOpen(): boolean;
}

export interface ListGroupSlots {
    /** Slot for the group header @keywords head slot list group */
    head?(props: ListGroupSlotsPropsInclude): any;
    /** Slot for the group list content @keywords list slot content */
    list?(props: any): any;
}

export type ListGroupClasses = {
    main: ConstrClass;
    head: string;
    list: string;
};