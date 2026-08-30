// md5:17a4a343b8efca0eb5516a3dea5b2a8f true
export type MotionTransformPropsToken = {
    section?: boolean;
    animationHeadPosition?: 'top' | 'toBottom';
    adaptive?: 'planeAlways';
};
export type MotionTransformPropsBasic = AriaByPropsInclude & ModelPropsOpen & {
    /** Current transformation state (v-model:open). */
    open?: boolean;
    /** If true, ensures the body content is rendered in the DOM regardless of the open state. */
    inDom?: boolean;
    /** Element or identifier to be excluded from auto-close logic. */
    ignore?: HTMLElement | string;
    /** CSS selector for elements ignored by auto-close triggers. */
    ignoreSelector?: string;
    /** Enables toggling transformation state on head element click. */
    clickOpen?: boolean;
    /** Enables automatic state reset on outside click or Escape key press. */
    autoClose?: boolean;
    /** Enables transition animations for state changes. */
    animationShow?: boolean;
    /** HTML tag for the body element. */
    tagBody?: string;
};
/** Motion transform component properties. @keywords motion, transform, props */
export type MotionTransformProps = MotionTransformPropsBasic & MotionTransformPropsToken;
/** Default property values for motion transform component. @keywords defaults, motion, transform */
export declare const defaultsMotionTransform: {
    animationHeadPosition: string;
    clickOpen: boolean;
    autoClose: boolean;
    animationShow: boolean;
    tagBody: string;
};