// md5:e978bd3ec9ba6500d7b102108390651d true
import { ConstrClass } from '@dxtmisha/functional';
export type MotionAxisComponents = {};
export type MotionAxisEmits = ModelEmitsSelected<MotionAxisSelectedValue> & {
    /** Axis motion event @keywords motionAxis, axis, move */
    motionAxis: [options: MotionAxisEmitOptions];
    /** Animation start event @keywords start, animation */
    start: [selected: MotionAxisSelectedValue];
    /** Animation end event @keywords end, animation */
    end: [selected: MotionAxisSelectedValue];
};
export interface MotionAxisExpose {
    /** Goes back to the previous element @keywords back, previous */
    back(): void;
    /** Goes to the next element @keywords next, forward */
    next(): void;
    /** Goes to the specified element @keywords to, element */
    to(selected: MotionAxisSelectedValue): void;
    /** Goes to the top element @keywords top, up */
    top(selected: MotionAxisSelectedValue): void;
    /** Goes to the right element @keywords right */
    right(selected: MotionAxisSelectedValue): void;
    /** Goes to the bottom element @keywords bottom, down */
    bottom(selected: MotionAxisSelectedValue): void;
    /** Goes to the left element @keywords left */
    left(selected: MotionAxisSelectedValue): void;
    /** Goes down to the specified element @keywords down */
    down(selected: MotionAxisSelectedValue): void;
    /** Goes up to the specified element @keywords up */
    up(selected: MotionAxisSelectedValue): void;
}
export type MotionAxisSlots = {
    [K in string]?: (props: any) => any;
};
export type MotionAxisClasses = {
    main: ConstrClass;
    slide: string;
};