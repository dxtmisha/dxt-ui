// md5:a1507735360b2ce9b3f4fa9466ea8012 true
export type MotionTransformPropsToken = {
    section?: boolean;
    animationHeadPosition?: 'top' | 'toBottom';
    adaptive?: 'planeAlways';
};
export type MotionTransformPropsBasic = AriaByPropsInclude & ModelPropsOpen & {
    open?: boolean;
    inDom?: boolean;
    ignore?: HTMLElement | string;
    ignoreSelector?: string;
    clickOpen?: boolean;
    autoClose?: boolean;
    animationShow?: boolean;
    tagBody?: string;
};
export type MotionTransformProps = MotionTransformPropsBasic & MotionTransformPropsToken;
/** Default motion transform configuration object @keywords defaults motion transform properties */
export declare const defaultsMotionTransform: {
    animationHeadPosition: string;
    clickOpen: boolean;
    autoClose: boolean;
    animationShow: boolean;
    tagBody: string;
};