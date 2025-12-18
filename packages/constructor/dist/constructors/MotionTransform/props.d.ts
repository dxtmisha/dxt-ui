import { AriaRoleByPropsInclude } from '../../types/ariaTypes';
interface MotionTransformPropsToken {
    section?: boolean;
    animationHeadPosition?: 'top' | 'toBottom';
    adaptive?: 'planeAlways';
}
export interface MotionTransformPropsBasic extends AriaRoleByPropsInclude {
    'open'?: boolean;
    'inDom'?: boolean;
    'ignore'?: HTMLElement | string;
    'ignoreSelector'?: string;
    'clickOpen'?: boolean;
    'autoClose'?: boolean;
    'animationShow'?: boolean;
    'tagBody'?: string;
    'modelOpen'?: boolean;
    'onUpdate:open'?: (value: boolean) => void;
    'onUpdate:modelOpen'?: (value: boolean) => void;
}
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface MotionTransformProps extends MotionTransformPropsBasic, MotionTransformPropsToken {
}
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
export {};
