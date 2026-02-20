import { ModelPropsSelected } from '../../types/modelTypes';
import { MotionAxisSelectedValue } from './basicTypes';
type MotionAxisPropsToken = {
    axis?: 'x' | 'y' | 'z';
    direction?: 'next' | 'back' | 'auto';
};
export type MotionAxisPropsBasic = ModelPropsSelected<MotionAxisSelectedValue> & {
    selected?: MotionAxisSelectedValue;
    animationHeight?: boolean;
    inDom?: boolean;
    inDomSlide?: string[];
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type MotionAxisProps = MotionAxisPropsBasic & MotionAxisPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsMotionAxis: {
    axis: string;
    direction: string;
};
export {};
