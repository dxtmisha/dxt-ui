// md5:40b020987a2a1fa965f86126691c292a true
import { type MotionTransformPropsBasic } from '@dxtmisha/constructor/MotionTransform';
export declare const propsValues: {
    animationHeadPosition: string[];
    adaptive: string[];
};
type PropsToken = {
    section?: boolean;
    animationHeadPosition?: 'top' | 'toBottom';
    adaptive?: 'planeAlways' | 'planeSm' | 'planeMd' | 'planeLg' | 'planeXl' | 'plane2xl';
};
/** Motion transform component properties. @keywords motion transform, props */
export type MotionTransformProps = MotionTransformPropsBasic & PropsToken;
/** Default property values for MotionTransform. @keywords defaults */
export declare const defaults: object;