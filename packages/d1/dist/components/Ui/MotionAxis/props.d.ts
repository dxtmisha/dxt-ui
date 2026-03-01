import { MotionAxisPropsBasic } from '@dxtmisha/constructor/MotionAxis';
export declare const propsValues: {
    axis: string[];
    direction: string[];
};
type PropsToken = {
    axis?: 'x' | 'y' | 'z';
    direction?: 'next' | 'back' | 'auto';
};
/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type MotionAxisProps = MotionAxisPropsBasic & PropsToken;
/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export declare const defaults: object;
export {};
