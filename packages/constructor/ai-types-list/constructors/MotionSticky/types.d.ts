// md5:05c8ef8f14025a8493f2f399d190548e true
import type { ConstrClass } from '@dxtmisha/functional';

export type MotionStickyComponents = {};

/** Available events emitted by the MotionSticky component. @keywords motion sticky events emits */
export type MotionStickyEmits = {
    sticky: [status: boolean];
};

export interface MotionStickyExpose {}

/** Available slot definitions for the MotionSticky component. @keywords motion sticky slots */
export interface MotionStickySlots {
    default?(props: any): any;
}

/** Subclass CSS class mappings for the MotionSticky component. @keywords motion sticky classes */
export type MotionStickyClasses = {
    main: ConstrClass;
};