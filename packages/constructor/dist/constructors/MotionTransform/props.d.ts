import { AriaByPropsInclude } from '../../types/ariaTypes';
import { ModelPropsOpen } from '../../types/modelTypes';
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
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type MotionTransformProps = MotionTransformPropsBasic & MotionTransformPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsMotionTransform: {
    animationHeadPosition: string;
    clickOpen: boolean;
    autoClose: boolean;
    animationShow: boolean;
    tagBody: string;
};
