// md5:77b78bb2919971ce7820fad44285fb4e true
import { ConstrBind } from '@dxtmisha/functional';
export type MotionTransformEmitOptions = {
    type: 'head' | 'body' | 'top' | 'script';
    open: boolean;
};
export type MotionTransformClassList = {
    show: string;
    open: string;
    window: string;
    click: string;
    none: string;
    noneGlobal: string;
    close: string;
};
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
/** Interface for MotionTransform expose inclusion @keywords motion, transform, expose */
export interface MotionTransformExposeInclude extends MotionTransformExpose {
    /** Returns the MotionTransform component instance @keywords motion, transform, instance */
    getMotionTransformElement(): ConstrBind<MotionTransformExpose> | undefined;
}
/** Props used to include and configure MotionTransform @keywords motion, transform, props */
export interface MotionTransformPropsInclude<MotionTransform extends MotionTransformProps = MotionTransformProps> {
    open?: boolean;
    clickOpen?: boolean;
    autoClose?: boolean;
    motionTransformAttrs?: ConstrBind<MotionTransform>;
}
/** CSS variable name for MotionTransform body type @keywords motion, transform, css, variable */
export declare const __MOTION_TRANSFORM_TYPE_BODY_NAME = "--sys-type-body";