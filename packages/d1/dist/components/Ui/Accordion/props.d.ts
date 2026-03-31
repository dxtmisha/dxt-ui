import { AccordionPropsBasic } from '@dxtmisha/constructor/Accordion';
import { IconProps } from '../Icon';
import { CellProps } from '../Cell';
import { MotionTransformProps } from '../MotionTransform';
export declare const propsValues: {};
export type PropsToken = {
    divider?: boolean;
};
/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type AccordionProps = AccordionPropsBasic<IconProps, CellProps, MotionTransformProps> & PropsToken;
/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export declare const defaults: object;
