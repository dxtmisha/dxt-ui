// md5:7c54293d8ff1134c75320354f6f8582a true
import type { ConstrClass } from '@dxtmisha/functional';

export type ListGroupComponents = MotionTransformComponentInclude;
export type ListGroupEmits = {};

export interface ListGroupExpose {
    /** Checks whether the group is currently expanded or open. @keywords open status state */
    getOpen(): boolean;
}

export interface ListGroupSlots {
    head?(props: ListGroupSlotsPropsInclude): any;
    list?(props: any): any;
}

export type ListGroupClasses = {
    main: ConstrClass;
    head: string;
    list: string;
};