import { AccordionPropsBasic } from '@dxtmisha/constructor/Accordion';
import { IconProps } from '../Icon';
import { CellProps } from '../Cell';
import { MotionTransformProps } from '../MotionTransform';
export declare const propsValues: {
    padding: string[];
};
export type PropsToken = {
    divider?: boolean;
    padding?: 'sm' | 'md' | 'lg' | 'ySm' | 'yMd' | 'yLg' | 'none';
    paddingByIndent?: boolean;
};
/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type AccordionProps = AccordionPropsBasic<IconProps, CellProps, MotionTransformProps> & PropsToken;
/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export declare const defaults: object;
