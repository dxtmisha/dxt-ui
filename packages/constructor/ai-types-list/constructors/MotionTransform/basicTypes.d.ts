// md5:51d0099775fc549d4369c162cac70f7e true
import type { ConstrBind } from '@dxtmisha/functional';

/** Options for MotionTransform events. @keywords motion transform emit options */
export type MotionTransformEmitOptions = {
    type: 'head' | 'body' | 'top' | 'script';
    open: boolean;
};

/** CSS classes for MotionTransform styling. @keywords motion transform classes */
export type MotionTransformClassList = {
    show: string;
    open: string;
    window: string;
    click: string;
    none: string;
    noneGlobal: string;
    close: string;
};

/** Style variable names for MotionTransform layout. @keywords motion transform styles */
export type MotionTransformStyle = {
    contextWidth: string;
    contextHeight: string;
    headScale: string;
    top: string;
    left: string;
    headWidth: string;
    height: string;
    scale: string;
    headHeight: string;
    bodyHeight: string;
};

/** Slot props passed to head and body slots. @keywords motion transform slot props */
export type MotionTransformControlItem = {
    isOpen: boolean;
    isShow: boolean;
    classes: MotionTransformClassList;
    idControl: string;
    idBody: string;
    binds: AriaRoleControlPropsInclude;
};

export type MotionTransformComponentInclude = {
    motionTransform?: object;
};

export type MotionTransformEmitsInclude = {
    transform: MotionTransformEmits['transform'];
    transformLite: MotionTransformEmits['transformLite'];
};

export interface MotionTransformExposeInclude extends MotionTransformExpose {
    /** Returns the MotionTransform component instance. @keywords motion transform instance */
    getMotionTransformElement(): ConstrBind<MotionTransformExpose> | undefined;
}

export interface MotionTransformPropsInclude<MotionTransform extends MotionTransformProps = MotionTransformProps> {
    open?: boolean;
    clickOpen?: boolean;
    autoClose?: boolean;
    motionTransformAttrs?: ConstrBind<MotionTransform>;
}

export declare const __MOTION_TRANSFORM_TYPE_BODY_NAME = "--sys-type-body";