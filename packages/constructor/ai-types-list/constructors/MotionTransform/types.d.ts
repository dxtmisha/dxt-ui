// md5:a7f3fefd873dd708dee1ca94b2c80266 true
import type { ConstrClass } from '@dxtmisha/functional';

export type MotionTransformComponents = {};

export type MotionTransformEmits = ModelEmitsOpen & {
    /** Transformation completion event. @keywords transform, complete */
    transform: [
        event: Event | undefined,
        options: MotionTransformEmitOptions
    ];
    /** Lightweight transformation event. @keywords transform, lite */
    transformLite: [
        options: MotionTransformEmitOptions
    ];
};

export interface MotionTransformExpose {
    /** Checks if component is visible or preparing for display. @keywords isShow, visible */
    isShow(): boolean;
    /** Returns current open state. @keywords getOpen, state */
    getOpen(): boolean;
    /** Sets open state. @keywords setOpen */
    setOpen(open: boolean): void;
    /** Transitions to open state. @keywords toOpen, open */
    toOpen(): void;
    /** Transitions to closed state. @keywords toClose, close */
    toClose(): void;
    /** Toggles open state. @keywords toggle */
    toggle(): void;
}

export interface MotionTransformSlots {
    /** Head slot for controls. @keywords slot, head */
    head?(props: MotionTransformControlItem): any;
    /** Body slot for main content. @keywords slot, body */
    body?(props: MotionTransformControlItem): any;
}

export type MotionTransformClasses = {
    main: ConstrClass;
    context: string;
    head: string;
    body: string;
    backdrop: string;
    scrim: string;
    clickNone: string;
};