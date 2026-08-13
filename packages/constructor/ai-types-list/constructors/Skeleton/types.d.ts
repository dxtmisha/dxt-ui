// md5:d9492a73b8880e5eeb1be65f609f3985 true
import { ConstrClass } from '@dxtmisha/functional';

export type SkeletonComponents = {};

export type SkeletonEmits = {};

export interface SkeletonExpose {
    /** Checks if the skeleton is currently active. @keywords skeleton, active, state */
    isActive(): boolean;
}

export interface SkeletonSlots {
    /** Default slot for skeleton content. @keywords slot, default, content */
    default?(props: SkeletonClassesList): any;
}

export type SkeletonClasses = {
    main: ConstrClass;
};