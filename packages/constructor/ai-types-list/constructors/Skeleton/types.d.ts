// md5:a8e926bf241abb921a920307a55bdaf8 true
import type { ConstrClass } from '@dxtmisha/functional';

export type SkeletonComponents = {};

export type SkeletonEmits = {};

export interface SkeletonExpose {
    /** Checks whether the skeleton is currently active. @keywords skeleton, active, status */
    isActive(): boolean;
}

export interface SkeletonSlots {
    /** Default skeleton content slot. @keywords slot, default */
    default?(props: SkeletonClassesList): any;
}

export type SkeletonClasses = {
    main: ConstrClass;
};