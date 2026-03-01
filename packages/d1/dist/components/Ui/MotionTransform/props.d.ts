import { MotionTransformPropsBasic } from '@dxtmisha/constructor/MotionTransform';
export declare const propsValues: {
    animationHeadPosition: string[];
    adaptive: string[];
};
export type PropsToken = {
    section?: boolean;
    animationHeadPosition?: 'top' | 'toBottom';
    adaptive?: 'planeAlways' | 'planeSm' | 'planeMd' | 'planeLg' | 'planeXl' | 'plane2xl';
};
/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type MotionTransformProps = MotionTransformPropsBasic & PropsToken;
/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export declare const defaults: object;
