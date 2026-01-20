import { ConstrBind } from '@dxtmisha/functional';
import { LabelProps } from '../../types/labelTypes';
import { DescriptionProps } from '../../types/descriptionTypes';
import { IconLitePropsInclude, IconPropsBasic, IconValue } from '../Icon';
import { CellPropsBasic } from '../Cell';
import { MotionTransformPropsBasic, MotionTransformPropsInclude } from '../MotionTransform';
export type AccordionPropsToken = {
    divider?: boolean;
};
export type AccordionPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Cell extends CellPropsBasic = CellPropsBasic, MotionTransform extends MotionTransformPropsBasic = MotionTransformPropsBasic> = LabelProps & DescriptionProps & IconLitePropsInclude<Icon> & MotionTransformPropsInclude<MotionTransform> & {
    'cellAttrs'?: ConstrBind<Cell>;
    'iconArrowDown'?: IconValue<Icon>;
    'modelOpen'?: boolean;
    'onUpdate:open'?: (value: boolean) => void;
    'onUpdate:modelOpen'?: (value: boolean) => void;
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type AccordionProps = AccordionPropsBasic & AccordionPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsAccordion: {
    divider: boolean;
    clickOpen: boolean;
    autoClose: boolean;
};
