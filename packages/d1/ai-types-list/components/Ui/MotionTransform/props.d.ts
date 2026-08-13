// md5:97dcf9ab1908ab414f51a4b39c977054 true
import { MotionTransformPropsBasic } from '@dxtmisha/constructor/MotionTransform';
/** Animation props configuration values @keywords propsValues, animation, adaptive */
export declare const propsValues: {
    animationHeadPosition: string[];
    adaptive: string[];
};
type PropsToken = {
    section?: boolean;
    animationHeadPosition?: 'top' | 'toBottom';
    adaptive?: 'planeAlways' | 'planeSm' | 'planeMd' | 'planeLg' | 'planeXl' | 'plane2xl';
};
/** Combined motion transform properties @keywords MotionTransformProps, properties */
export type MotionTransformProps = MotionTransformPropsBasic & PropsToken;
/** Default property values @keywords defaults, object */
export declare const defaults: object;