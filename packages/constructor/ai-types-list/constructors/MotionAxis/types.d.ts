// md5:c57a1bc929a2196837d3ace0d7df85c6 true
import type { ConstrClass } from '@dxtmisha/functional';

export type MotionAxisComponents = {};

export type MotionAxisEmits = ModelEmitsSelected<MotionAxisSelectedValue> & {
    /** Event emitted on axis motion @keywords motion, axis */
    motionAxis: [options: MotionAxisEmitOptions];
    /** Event triggered at the start of animation @keywords animation, start */
    start: [selected: MotionAxisSelectedValue];
    /** Event triggered at the end of animation @keywords animation, end */
    end: [selected: MotionAxisSelectedValue];
};

export interface MotionAxisExpose {
    /** Navigates back to the previous element @keywords back, previous */
    back(): void;
    /** Navigates to the next element @keywords next, forward */
    next(): void;
    /** Navigates to the specified target element @keywords navigate, target */
    to(selected: MotionAxisSelectedValue): void;
    /** Navigates to the top element @keywords top */
    top(selected: MotionAxisSelectedValue): void;
    /** Navigates to the right element @keywords right */
    right(selected: MotionAxisSelectedValue): void;
    /** Navigates to the bottom element @keywords bottom */
    bottom(selected: MotionAxisSelectedValue): void;
    /** Navigates to the left element @keywords left */
    left(selected: MotionAxisSelectedValue): void;
    /** Navigates down to the specified element @keywords down */
    down(selected: MotionAxisSelectedValue): void;
    /** Navigates up to the specified element @keywords up */
    up(selected: MotionAxisSelectedValue): void;
}

export type MotionAxisSlots = {
    [K in string]?: (props: any) => any;
};

export type MotionAxisClasses = {
    main: ConstrClass;
    slide: string;
};