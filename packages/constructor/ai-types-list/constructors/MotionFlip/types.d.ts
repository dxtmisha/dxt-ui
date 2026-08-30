// md5:9084c5ef07913e0b42bcfde0aebb5b01 true
import type { ConstrClass } from '@dxtmisha/functional';

export type MotionFlipComponents = {};

export type MotionFlipEmits = {};

/** Exposed methods for MotionFlip. @keywords motion, flip, expose, methods */
export interface MotionFlipExpose {
    /** Stops active FLIP animation and clears state. @keywords stop, cancel, flip, reset */
    stop: () => void;
    /** Triggers FLIP update animation sequence. @param callback Function performing DOM updates. @keywords update, flip, animate, transition */
    update: (callback: MotionFlipCallback) => Promise<void>;
}

export interface MotionFlipSlots {
    /** Default slot for content elements. */
    default?(props: any): any;
}

export type MotionFlipClasses = {
    /** Main container class. */
    main: ConstrClass;
    item: string;
};