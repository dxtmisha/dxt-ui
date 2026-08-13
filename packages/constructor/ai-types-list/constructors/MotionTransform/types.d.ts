// md5:af9c3f9991c6730e9dfb0794ad68538f true
export type MotionTransformComponents = {};
export type MotionTransformEmits = ModelEmitsOpen & {
    transform: [
        event: Event | undefined,
        options: MotionTransformEmitOptions
    ];
    transformLite: [
        options: MotionTransformEmitOptions
    ];
};
export interface MotionTransformExpose {
    /** Returns computed state indicating if component is shown. @keywords isShow, state, visible */
    isShow(): boolean;
    /** Returns state of window visibility. @keywords getOpen, visibility, state */
    getOpen(): boolean;
    /** Sets open state. @keywords setOpen, state, open */
    setOpen(open: boolean): void;
    /** Transition to opening state. @keywords toOpen, open, transition */
    toOpen(): void;
    /** Transition to closing state. @keywords toClose, close, transition */
    toClose(): void;
    /** Toggles open state. @keywords toggle, open, close */
    toggle(): void;
}
export interface MotionTransformSlots {
    head?(props: MotionTransformControlItem): any;
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