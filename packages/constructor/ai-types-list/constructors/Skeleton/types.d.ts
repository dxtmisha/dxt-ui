// md5:0442b6a5ed05884ad9fe6794ef95b1df true
import type { ConstrClass } from '@dxtmisha/functional';

export type SkeletonComponents = {};

export type SkeletonEmits = {};

export interface SkeletonExpose {
    /** Checks whether the skeleton is currently active. @keywords active, status, state */
    isActive(): boolean;
}

export interface SkeletonSlots {
    /** Slot for default skeleton content. @keywords slot, default, content */
    default?(props: SkeletonClassesList): any;
}

export type SkeletonClasses = {
    main: ConstrClass;
};